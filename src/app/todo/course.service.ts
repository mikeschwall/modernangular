import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"john",title:"developer"},
        {name:"bob",title:"graphics"},
        {name:"tommy",title:"big data"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}