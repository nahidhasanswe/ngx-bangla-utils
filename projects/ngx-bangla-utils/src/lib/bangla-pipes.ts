import { Pipe, PipeTransform } from '@angular/core';
import { NgxBanglaUtilsService } from './ngx-bangla-utils.service';

@Pipe({ name: 'banglaNumber', standalone: true })
export class BanglaNumberPipe implements PipeTransform {
  constructor(private utils: NgxBanglaUtilsService) {}
  transform(value: string | number) {
    return this.utils.toBanglaDigits(value);
  }
}

@Pipe({ name: 'banglaWords', standalone: true })
export class BanglaWordsPipe implements PipeTransform {
  constructor(private utils: NgxBanglaUtilsService) {}
  transform(value: number) {
    return this.utils.toBanglaWords(value);
  }
}

@Pipe({ name: 'banglaCurrency', standalone: true })
export class BanglaCurrencyPipe implements PipeTransform {
  constructor(private utils: NgxBanglaUtilsService) {}
  transform(value: number) {
    return this.utils.toBanglaCurrency(value);
  }
}

@Pipe({ name: 'banglaDate', standalone: true })
export class BanglaDatePipe implements PipeTransform {
  constructor(private utils: NgxBanglaUtilsService) {}
  transform(value: Date | string) {
    return this.utils.toBanglaDate(value);
  }
}
