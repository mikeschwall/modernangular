import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
 employees:Employee[] = [
    {name:"john",title:"developer"},
    {name:"paul",title:"manager"},
    {name:"peter",title:"graphics"}
 ];

 getData():Observable<Employee[]> {
    return of(this.employees);
 }

 getPerson(id:number):Observable<Employee> {
    return of(this.employees[id]);
 }
}