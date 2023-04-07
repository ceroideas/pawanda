import { Pipe, PipeTransform } from '@angular/core';

declare var moment:any;

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(date:any, count = 0) {
    if (!date) {
      return "";
    }
    console.log(count);
    moment.locale('es');
    if (count > 1) {
      return moment(date).format('ddd DD [de] MMM');
    }else{
      return moment(date).format('dddd DD [de] MMM');
    }
  }

}
