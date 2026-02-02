import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {

    employees:Employee[] = [
        {name:"Peter", title:"Developer"},
        {name:"Paul", title:"Graphics"},
        {name:"John",title:"Big Data"}
    ];

    getData():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }

}