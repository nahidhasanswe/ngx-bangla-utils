# ngx-bangla-utils

**ngx-bangla-utils** is an Angular library for converting **numbers, currency, and dates** into **Bangla words and formats**.  
It supports **large numbers**, including crore, lakh, thousand, and hundreds, following the **Bangla/Indian numbering system**, and is compatible with **Angular 9 through Angular 16+**.

---

## **Features**

- Convert numbers to Bangla words (e.g., 5256215442 → পাঁচশো পঁচিশ কোটি ছাব্বিশ লাখ পনেরো হাজার চারশত বিয়াল্লিশ)  
- Convert decimal numbers to Bangla currency (e.g., 12345.67 → বারো হাজার তিন শত পঁইত্রিশ টাকা সাতষট্টি পয়সা মাত্র)  
- Convert Date objects to Bangla dates (e.g., 2025-10-07 → ৭ অক্টোবর ২০২৫)  
- Fully **NgModule-based**, works in older and latest Angular projects  
- Includes **pipes** and **service** for easy integration in templates and components  

---

## **Installation**

```bash
npm install ngx-bangla-utils
```

---

## **Import the Module**

```ts
import { NgxBanglaUtilsModule } from 'ngx-bangla-utils';

@NgModule({
  imports: [NgxBanglaUtilsModule],
})
export class AppModule {}
```

---

## **Usage**

### **1. Number to Bangla Words**

**Using Service:**

```ts
import { NgxBanglaUtilsService } from 'ngx-bangla-utils';

constructor(private utils: NgxBanglaUtilsService) {}

const num = 5256215442;
const words = this.utils.toBanglaWords(num);

console.log(words);
// Output: পাঁচশো পঁচিশ কোটি ছাব্বিশ লাখ পনেরো হাজার চারশত বিয়াল্লিশ
```

**Using Pipe in Template:**

```html
<p>{{ 5256215442 | banglaWords }}</p>
<!-- Output: পাঁচশো পঁচিশ কোটি ছাব্বিশ লাখ পনেরো হাজার চারশত বিয়াল্লিশ -->
```

---

### **2. Number to Bangla Currency**

**Using Service:**

```ts
const currency = this.utils.toBanglaCurrency(12345.67);
console.log(currency);
// Output: বারো হাজার তিন শত পঁইত্রিশ টাকা সাতষট্টি পয়সা মাত্র
```

**Using Pipe:**

```html
<p>{{ 12345.67 | banglaCurrency }}</p>
```

---

### **3. Date to Bangla Format**

**Using Service:**

```ts
const banglaDate = this.utils.toBanglaDate(new Date('2025-10-07'));
console.log(banglaDate);
// Output: ৭ অক্টোবর ২০২৫
```

**Using Pipe:**

```html
<p>{{ today | banglaDate }}</p>
```

---

## **Supported Angular Versions**

- Angular 9, 10, 11, 12, 13, 14, 15, 16+  
- Works with **both older and modern Angular projects** using NgModule-based architecture

---

## **How It Works**

- Uses **recursive splitting** to handle large numbers: কোটি → লক্ষ → হাজার → শত → units  
- Correctly handles **teens, tens, and units** in Bangla  
- Converts decimal parts for currency accurately  
- Converts **dates** into Bangla numerals and month names  

---

## **License**

MIT License

---

## **Repository**

[GitHub Repository](https://github.com/yourusername/ngx-bangla-utils)

---

## **Keywords**

angular, bangla, number, currency, date, bangla-utils, ngx

