import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxBanglaUtilsService {
  private units = ['', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়'];
  private teens = ['দশ', 'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোল', 'সতেরো', 'আঠারো', 'উনিশ'];
  private tens = ['', '', 'বিশ', 'ত্রিশ', 'চল্লিশ', 'পঞ্চাশ', 'ষাট', 'সত্তর', 'আশি', 'নব্বই'];
  
  // Special cases for numbers ending with 1-9 (for tens digit 4+)
  private specialNumbers: { [key: number]: string } = {
    // Numbers ending with 1
    1: 'এক', 11: 'এগারো', 21: 'একুশ', 31: 'একত্রিশ', 41: 'একচল্লিশ', 
    51: 'একান্ন', 61: 'একষট্টি', 71: 'একাত্তর', 81: 'একাশি', 91: 'একানব্বই',
    
    // Numbers ending with 2
    2: 'দুই', 12: 'বারো', 22: 'বাইশ', 32: 'বত্রিশ', 42: 'বিয়াল্লিশ', 
    52: 'বায়ান্ন', 62: 'বাষট্টি', 72: 'বাহাত্তর', 82: 'বিয়াশি', 92: 'বিরানব্বই',
    
    // Numbers ending with 3
    3: 'তিন', 13: 'তেরো', 23: 'তেইশ', 33: 'তেত্রিশ', 43: 'তেতাল্লিশ',
    53: 'তিপ্পান্ন', 63: 'তেষট্টি', 73: 'তিয়াত্তর', 83: 'তিরাশি', 93: 'তিরানব্বই',
    
    // Numbers ending with 4
    4: 'চার', 14: 'চৌদ্দ', 24: 'চব্বিশ', 34: 'চৌত্রিশ', 44: 'চুয়াল্লিশ',
    54: 'চুয়ান্ন', 64: 'চৌষট্টি', 74: 'চুয়াত্তর', 84: 'চুরাশি', 94: 'চুরানব্বই',
    
    // Numbers ending with 5
    5: 'পাঁচ', 15: 'পনেরো', 25: 'পঁচিশ', 35: 'পঁয়ত্রিশ', 45: 'পঁয়তাল্লিশ',
    55: 'পঞ্চান্ন', 65: 'পঁয়ষট্টি', 75: 'পঁচাত্তর', 85: 'পঁচাশি', 95: 'পঁচানব্বই',
    
    // Numbers ending with 6
    6: 'ছয়', 16: 'ষোল', 26: 'ছাব্বিশ', 36: 'ছত্রিশ', 46: 'ছিয়াল্লিশ',
    56: 'ছাপ্পান্ন', 66: 'ছেষট্টি', 76: 'ছিয়াত্তর', 86: 'ছিয়াশি', 96: 'ছিয়ানব্বই',
    
    // Numbers ending with 7
    7: 'সাত', 17: 'সতেরো', 27: 'সাতাশ', 37: 'সাইত্রিশ', 47: 'সাতাল্লিশ',
    57: 'সাতান্ন', 67: 'সাতষট্টি', 77: 'সাতাত্তর', 87: 'সাতাশি', 97: 'সাতানব্বই',
    
    // Numbers ending with 8
    8: 'আট', 18: 'আঠারো', 28: 'আটাশ', 38: 'আটত্রিশ', 48: 'আটাল্লিশ',
    58: 'আটান্ন', 68: 'আটষট্টি', 78: 'আটাত্তর', 88: 'আটাশি', 98: 'আটানব্বই',
    
    // Numbers ending with 9
    9: 'নয়', 19: 'উনিশ', 29: 'ঊনত্রিশ', 39: 'ঊনচল্লিশ', 49: 'ঊনপঞ্চাশ',
    59: 'ঊনষাট', 69: 'ঊনসত্তর', 79: 'ঊনআশি', 89: 'ঊননব্বই', 99: 'নিরানব্বই'
  };
  private months = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];

  toBanglaDigits(input: string | number): string {
    const digits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return input.toString().replace(/\d/g, d => digits[+d]);
  }


  toBanglaWords(num: number| string): string {
    if (typeof num === 'string') {
      num = parseInt(num.replace(/,/g, ''), 10);
    }

    if (isNaN(num as number)) return '';
    if (num === 0) return 'শূন্য';
    if (num < 0) return 'ঋণাত্মক ' + this.toBanglaWords(Math.abs(num as number));

    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const thousand = Math.floor((num % 100000) / 1000);
    const hundred = Math.floor((num % 1000) / 100);
    const rest = num % 100;

    let result = '';

    if (crore > 0) {
      result += this.toBanglaWords(crore) + ' কোটি ';
    }

    if (lakh > 0) {
      result += this.toBanglaWords(lakh) + ' লাখ ';
    }

    if (thousand > 0) {
      result += this.toBanglaWords(thousand) + ' হাজার ';
    }

    if (hundred > 0) {
      if (hundred === 1) {
        result += 'শো ';
      } else {
        result += this.toBanglaWords(hundred) + ' শত ';
      }
    }

    if (rest > 0) {
      result += this.twoDigitToBangla(rest);
    }

    return result.trim().replace(/\s+/g, ' ');
  }

  private twoDigitToBangla(num: number): string {
    if (num < 10) return this.units[num];
    if (num < 20) return this.teens[num - 10];

    // Check if this number has a special form
    if (this.specialNumbers[num]) {
      return this.specialNumbers[num];
    }

    const ten = Math.floor(num / 10);
    const unit = num % 10;

    if (unit === 0) {
      return this.tens[ten];
    }

    // For numbers not in our special cases list
    return this.tens[ten] + ' ' + this.units[unit];
  }

  toBanglaCurrency(value: number): string {
    const taka = Math.floor(value);
    const paisa = Math.round((value - taka) * 100);
    let result = `${this.toBanglaWords(taka)} টাকা`;
    if (paisa) result += ` ${this.toBanglaWords(paisa)} পয়সা`;
    return result + ' মাত্র';
  }

  toBanglaDate(date: Date | string): string {
    const d = new Date(date);
    const day = this.toBanglaDigits(d.getDate());
    const month = this.months[d.getMonth()];
    const year = this.toBanglaDigits(d.getFullYear());
    return `${day} ${month} ${year}`;
  }
}
