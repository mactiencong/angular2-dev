import { ItemDetailComponent } from './item-detail.component';
import { ItemsComponent } from './items.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: 'app/items',
        component: ItemsComponent
    },
    {
        path: 'app/item-detail/:id',
        component: ItemDetailComponent
    },
    {
        path: 'app',
        redirectTo: '/app/items',
        pathMatch: "full"
    },
    {
        path: '',
        redirectTo: '/app/items',
        pathMatch: "full"
    }
]

export const routing = RouterModule.forRoot(routes);