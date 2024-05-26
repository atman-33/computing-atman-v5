import { NumberToWordsStrategy } from './number-to-words-strategy.interface';

export class NumberToWordsContext {
  private integerStrategy: NumberToWordsStrategy;
  private decimalStrategy: NumberToWordsStrategy;

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
