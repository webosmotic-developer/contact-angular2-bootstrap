import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterData'})
export class FilterContactArray implements PipeTransform {

    transform(value:any, queryString:any) {
        if (value == null) {
            return null;
        }
        if (value == "") {
            return null;
        }

        if (queryString !== undefined) {
            return value.filter((item:any)=>
                item.email.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 ||
                item.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 ||
                item.phone.toString().indexOf(queryString) !== -1
            );
        } else {
            return value;
        }
    }
}
