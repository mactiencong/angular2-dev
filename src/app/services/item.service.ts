import { Http } from '@angular/http';
import { Item } from './../models/Item';
import { Injectable } from '@angular/core';
@Injectable()
export class ItemService {
    private counter = 0;
    constructor(private _http: Http){
        this.counter++;
        console.log("ItemService No: " + this.counter);
    };
    async loadItems(){
        await this.wait(3000);
        // console.log(this._http.get("google.com"));
        return [
            {id: "1", name: "matico"},
            {id: "2", name: "congmt"}
        ];
    }

    wait(ms) {
        return new Promise(r => setTimeout(r, ms))  
    }

    async getItemDetail(id){
        await this.wait(2000);
        return {id: id, name: "matico-detail"};
    }

    async searchItem(keyword){
        await this.wait(2000);
        return [
            {id: "1", name: "xxx"},
            {id: "2", name: "yyy"}
        ];
    }
}