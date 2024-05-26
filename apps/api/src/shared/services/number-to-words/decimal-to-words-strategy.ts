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

export class DecimalToWordsStrategy implements NumberToWordsStrategy {
  /**
   * 小数部分を単位の単語に変換
   * @param number
   * @returns
   */
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
