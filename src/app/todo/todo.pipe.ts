import { PipeTransform,Pipe } from "@angular/core";

@Pipe({name:"mypipe"})
export class TodoPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (args[0]) return value.filter((item:any) => item.title.indexOf(args) !== -1);
        
        return value.filter((item:any) => {
            console.log(item.id)
           return item.id < 10
    })
    }
}