import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getData() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos");
    }

    sendData(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://jsonplaceholder.typicode.com/posts", data);
    }

    
}