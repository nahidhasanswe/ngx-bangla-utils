import { NgModule } from '@angular/core';
import { BanglaNumberPipe, BanglaWordsPipe, BanglaCurrencyPipe, BanglaDatePipe } from './bangla-pipes';

@NgModule({
  imports: [BanglaNumberPipe, BanglaWordsPipe, BanglaCurrencyPipe, BanglaDatePipe],
  exports: [BanglaNumberPipe, BanglaWordsPipe, BanglaCurrencyPipe, BanglaDatePipe]
})
export class NgxBanglaUtilsModule {}