import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"frank",title:"developer"},
        {name:"bill",title:"graphics"},
        {name:"tim",title:"big data"}
    ];

    getData():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}