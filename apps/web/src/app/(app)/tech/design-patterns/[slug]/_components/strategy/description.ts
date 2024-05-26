const description = `
### はじめに

ソフトウェア設計における一般的な課題の1つに、アルゴリズムの選択と実行方法の決定があります。特定のタスクに対して異なるアルゴリズムを使用する必要がある場合、コードが複雑化し、メンテナンスが困難になることがあります。

この問題を解決するデザインパターンの1つが **Strategyパターン** です。このパターンを使用すると、アルゴリズムを個別のクラスとして定義し、それらをコンテキストクラス内で交換可能にすることができます。これにより、コードの柔軟性が高まり、アルゴリズムの追加や変更が容易になります。

### Strategyパターンの構造

Strategyパターンは、以下の主要な構成要素から成ります。

1. **Strategyインターフェース** - 共通のアルゴリズムインターフェースを定義します。
2. **具象Strategyクラス** - Strategyインターフェースを実装する具体的なアルゴリズムクラスです。
3. **コンテキストクラス** - Strategyを使用するクラスで、動的にStrategyを変更できます。

### TypeScriptによる実装例

ここでは、数値を単語に変換する例を用いて、Strategyパターンの動作を示します。

まず、Strategyインターフェースを定義します。

~~~typescript
export interface NumberToWordsStrategy {
  convert(number: string): string;
}
~~~

次に、具体的なアルゴリズムを実装するクラスを定義します。最初に整数部分を単語に変換するクラスです。

~~~typescript
const ones = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  '',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];
const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

export class IntegerToWordsStrategy implements NumberToWordsStrategy {
  convert(number: string): string {
    return this.numberToWords(Number(number));
  }

  private numberToWords(num: number): string {
    if (num === 0) {
      return 'zero';
    }

    let words = '';
    let i = 0;

    while (num > 0) {
      if (num % 1000 !== 0) {
        words =
          this.numberToWordsHelper(num % 1000) +
          ' ' +
          thousands[i] +
          ' ' +
          words;
      }
      num = Math.floor(num / 1000);
      i++;
    }

    return words.trim();
  }

  private numberToWordsHelper(num: number): string {
    if (num === 0) {
      return '';
    }

    if (num < 10) {
      return ones[num];
    }

    if (num < 20) {
      return teens[num - 10];
    }

    if (num < 100) {
      return (
        tens[Math.floor(num / 10)] + ' ' + this.numberToWordsHelper(num % 10)
      );
    }

    return (
      ones[Math.floor(num / 100)] +
      ' hundred ' +
      this.numberToWordsHelper(num % 100)
    );
  }
}
~~~

次に、小数部分を単語に変換するクラスを定義します。

~~~typescript
const ones = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

export class DecimalToWordsStrategy implements NumberToWordsStrategy {
  convert(number: string): string {
    return number
      .split('')
      .map((digit) => this.digitToWord(digit))
      .join(' ');
  }

  private digitToWord(digit: string): string {
    return ones[parseInt(digit)];
  }
}
~~~

最後に、これらのStrategyを使用するコンテキストクラスを定義します。

~~~typescript
export class NumberToWordsContext {
  private integerStrategy: NumberToWordsStrategy;
  private decimalStrategy?: NumberToWordsStrategy;

  constructor(
    integerStrategy: NumberToWordsStrategy,
    decimalStrategy?: NumberToWordsStrategy,
  ) {
    this.integerStrategy = integerStrategy;
    this.decimalStrategy = decimalStrategy;
  }

  convert(number: string): string {
    if (isNaN(Number(number))) {
      return 'NaN';
    }

    const [integerPart, decimalPart] = number.split('.');
    let result = this.integerStrategy.convert(integerPart);
    if (this.decimalStrategy && decimalPart) {
      result += ' point ' + this.decimalStrategy.convert(decimalPart);
    }
    return result;
  }
}

const integerStrategy: NumberToWordsStrategy = new IntegerToWordsStrategy();
const decimalStrategy: NumberToWordsStrategy = new DecimalToWordsStrategy();
const context = new NumberToWordsContext(integerStrategy, decimalStrategy);

console.log(context.convert("1234.56")); // one thousand two hundred thirty four point five six
~~~

### おわりに

Strategyパターンを使用することで、異なるアルゴリズムを柔軟に切り替えられるため、コードの保守性と拡張性が向上します。新しいアルゴリズムを追加する際にも既存のコードに影響を与えずに対応できます。TypeScriptを使用すると、型安全性を確保しつつStrategyパターンを実装できます。デザインの複雑さに応じて、このパターンをさらに発展させることも可能です。
`;

export { description as StrategyDescription };
