import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:"mypipe"})
export class CoursePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (args[0]) return value.filter((item:any) => item.title.indexOf(args) !== -1);
        return value.slice(0,10);
    }
}