import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should add two numbers', () => {
      expect(addNumbers(1, 2)).toEqual(3);
    });

    it('0 should convert a number to words zero', () => {
      expect(convertIntToWords(0)).toEqual('zero');
    });

    it('1 should convert a number to words one', () => {
      expect(convertIntToWords(1)).toEqual('one');
    });

    it('35 should convert a number to words thirty five', () => {
      expect(convertIntToWords(35)).toEqual('thirty five');
    });

    it('100 should convert a number to words one hundred', () => {
      expect(convertIntToWords(100)).toEqual('one hundred');
    });

    it('135 should convert a number to words one hundred thirty five', () => {
      expect(convertIntToWords(135)).toEqual('one hundred thirty five');
    });

    it('1000 should convert a number to words one thousand', () => {
      expect(convertIntToWords(1000)).toEqual('one thousand');
    });

    it('1234 should convert a number to words one thousand two hundred thirty four', () => {
      expect(convertIntToWords(1234)).toEqual(
        'one thousand two hundred thirty four',
      );
    });
  });
});

const addNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

/*
 * 問題
 * 入力された数字を英語表記に変更して返す。
 */

const convertIntToWords = (num: number): string => {
  if (num === 0) {
    return 'zero';
  }

  const unitsMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  // console.log(unitsMap[1]);

  const tensMap = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  let words: string = '';

  if (num >= 1000) {
    words += convertIntToWords(Math.floor(num / 1000)) + ' thousand ';
    num %= 1000;
  }

  if (num >= 100) {
    words += convertIntToWords(Math.floor(num / 100)) + ' hundred ';
    num %= 100;
  }

  if (num > 0) {
    if (num < 20) {
      return unitsMap[num];
    } else {
      words += tensMap[Math.floor(num / 10)];
      if (num % 10 > 0) {
        words += ' ' + unitsMap[num % 10];
      }
    }
  }

  return words.trim();
};
