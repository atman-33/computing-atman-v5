import { DecimalToWordsStrategy } from './decimal-to-words-strategy';
import { IntegerToWordsStrategy } from './integer-to-words-strategy';
import { NumberToWordsContext } from './number-to-words-context';
import { NumberToWordsStrategy } from './number-to-words-strategy.interface';

describe('interger-to-words', () => {
  let context: NumberToWordsContext;

  beforeEach(async () => {
    const integerStrategy: NumberToWordsStrategy = new IntegerToWordsStrategy();
    const decimalStrategy: NumberToWordsStrategy = new DecimalToWordsStrategy();
    context = new NumberToWordsContext(integerStrategy, decimalStrategy);
  });

  describe('root', () => {
    it('0 は "zero"', () => {
      expect(context.convert('0')).toBe('zero');
    });

    it('1 は "one"', () => {
      expect(context.convert('1')).toBe('one');
    });

    it('10 は "ten"', () => {
      expect(context.convert('10')).toBe('ten');
    });

    it('12 は "twelve"', () => {
      expect(context.convert('12')).toBe('twelve');
    });

    it('30 は "thirty"', () => {
      expect(context.convert('30')).toBe('thirty');
    });

    it('100 は "one hundred"', () => {
      expect(context.convert('100')).toBe('one hundred');
    });

    it('1000 は "one thousand"', () => {
      expect(context.convert('1000')).toBe('one thousand');
    });

    it('1212 は "one thousand two hundred twelve"', () => {
      expect(context.convert('1212')).toBe('one thousand two hundred twelve');
    });

    it('0.1 は "zero point one"', () => {
      expect(context.convert('0.1')).toBe('zero point one');
    });

    it('0.1234 は "zero point one two three four"', () => {
      expect(context.convert('0.1234')).toBe('zero point one two three four');
    });

    it('1212.1234 は "one thousand two hundred twelve point one two three four"', () => {
      expect(context.convert('1212.1234')).toBe(
        'one thousand two hundred twelve point one two three four',
      );
    });

    it('abc は "NaN"', () => {
      expect(context.convert('abc')).toBe('NaN');
    });
  });
});
