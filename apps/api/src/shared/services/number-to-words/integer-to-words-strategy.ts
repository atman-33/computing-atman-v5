import { NumberToWordsStrategy } from './number-to-words-strategy.interface';

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
  /**
   * 整数部分を単位の単語に変換
   * @param number
   * @returns
   */
  convert(number: string): string {
    return this.numberToWords(Number(number));
  }

  /**
   * 整数部分を単位の単語に変換
   * @param num
   * @returns
   */
  numberToWords(num: number): string {
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

  /**
   * 1000未満の数値を単位の単語に変換
   * @param num
   * @returns
   */
  numberToWordsHelper(num: number): string {
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
