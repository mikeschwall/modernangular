import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getdata() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
    }

    sendData(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/july22.json",data);
    }

    getfire() {
        return this.http.get("https://course-data-81882.firebaseio.com/july22.json");
    }

}