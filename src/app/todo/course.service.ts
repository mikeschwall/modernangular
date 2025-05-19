import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TodoService {

    constructor(private httpClient:HttpClient) {

    }

    fetchTodos() {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
    }

    addTodo(json:any) {
        const data = JSON.stringify(json);
        return this.httpClient.post("https://course-data-81882.firebaseio.com/may19.json",data);
    }

    getFire() {
        return this.httpClient.get("https://course-data-81882.firebaseio.com/may19.json");
    }

}