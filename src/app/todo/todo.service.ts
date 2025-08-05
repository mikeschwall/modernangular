import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TodoService {
    constructor(private http:HttpClient) {

    }

    getTodos() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
    }

    sendFood(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/aug5.json",data);

    }

    getFood() {
        return this.http.get("https://course-data-81882.firebaseio.com/aug5.json")
    }
}