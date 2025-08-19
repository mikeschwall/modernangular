import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class TodoService {
    constructor(private http:HttpClient) {

    }

    getData() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
    }

    sendData(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/aug19.json",data);
    }

    getFire() {
        return this.http.get("https://course-data-81882.firebaseio.com/aug19.json")
    }
}