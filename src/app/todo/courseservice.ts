import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getdata() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
    }

    senddata(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/june11.json",data);
    }

    getfire() {
        return this.http.get("https://course-data-81882.firebaseio.com/june11.json")
    }
}