import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "inscription", component: RegisterComponent },
  { path: "utilisateur/liste", component: UserListComponent },
  { path: "item/liste", component: ItemListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
