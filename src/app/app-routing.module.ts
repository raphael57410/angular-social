import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserProfilComponent } from './user-profil/user-profil.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "inscription", component: RegisterComponent },

  // User route
  { path: "utilisateur/liste", component: UserListComponent },
  { path: "utilisateur/profil", component: UserProfilComponent },
  { path: "utilisateur/detail/:id", component: UserDetailComponent },

  // Item route
  { path: "item/liste", component: ItemListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
