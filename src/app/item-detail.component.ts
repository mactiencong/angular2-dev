import { Item } from './models/Item';
import { ItemService } from './services/item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: "item-detail",
    templateUrl: "./item-detail.component.html",
    //providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {
    constructor(private _itemService: ItemService, private _route: ActivatedRoute){}
    _sub: any;
    itemId: string = "";
    ngOnInit(){
        this._sub = this._route.params.subscribe(params=>{
            this.itemId = params['id'];
            this.getItemDetail(this.itemId);
        });
    }
    async getItemDetail(id) {
        console.log('loading detail');
        this.item = await this._itemService.getItemDetail(id);
        console.log('detail loaded');
    }
    item = null;

    ngOnDestroy(){
        this._sub.unsubscribe();
    }
}