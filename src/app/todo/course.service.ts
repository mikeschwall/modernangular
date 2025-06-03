import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Employee {
    name:string;
    title:string;
}


@Injectable({
    providedIn:'root'
})
export class CourseService {
   employees:Employee[] = [
    {name:"john",title:"developer"},
    {name:"bill",title:"manager"},
    {name:"hank",title:"graphics"}
   ];

   getData():Observable<Employee[]> {
    return of(this.employees);
   }

   getPerson(id:number):Observable<Employee> {
    return of(this.employees[id]);
   }
}