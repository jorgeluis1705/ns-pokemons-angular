import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { CommonModule } from "@angular/common";

@NgModule({
  bootstrap: [AppComponent],
  imports: [CommonModule, NativeScriptModule, AppRoutingModule, PokemonModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
