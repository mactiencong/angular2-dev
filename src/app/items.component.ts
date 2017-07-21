import { Item } from './models/Item';
import { ItemService } from './services/item.service';
import { Component, OnInit, Input, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: "item-list",
    templateUrl: "./items.component.html",
    //providers: [ItemService]
})
export class ItemsComponent implements OnInit, AfterViewInit {
    ngOnInit(){}
    isItemsLoaded: boolean = false;
    constructor(private _itemService: ItemService){
        console.log('loading data ...');
        this.loadItems();
    };
    items: Item[];
    async loadItems() {
        this.items = await this._itemService.loadItems();
        console.log('data loaded');
        this.isItemsLoaded = true;
    }

    async searchItem(event){
        this.isItemsLoaded = false;
        this.items = await this._itemService.searchItem(event.target.value);
        event.target.value = "";
        this.isItemsLoaded = true;
    }
    @ViewChild("seachInput") searchInput: ElementRef;
    ngAfterViewInit(){
        this.searchInput.nativeElement.focus();
    }
}