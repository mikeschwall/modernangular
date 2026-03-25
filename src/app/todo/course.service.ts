import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getdata() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos");
    }

    senddata(json:any) {
        const data = JSON.stringify(json);
        console.log(data);
        return this.http.post("https://jsonplaceholder.typicode.com/posts/",data);

    }
}