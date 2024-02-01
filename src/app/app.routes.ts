import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/admin/Productsss/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CreateComponent } from './pages/admin/Productsss/create/create.component';
import { EditComponent } from './pages/admin/Productsss/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuard } from './guards/admin-guard.guard';
import { UserlistComponent } from './pages/admin/Userss/users/users.component';
import { EditUserComponent } from './pages/admin/Userss/edit/edituser.component';
import { EditCateComponent } from './pages/admin/Category/cate-edit/cate-edit.component';
import { CategoriesComponent } from './pages/admin/Category/cate-list/cate-list.component';
import { CreateCateComponent } from './pages/admin/Category/cate-create/cate-create.component';
export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      {
        path: 'create', component: CreateComponent
      },
      {
        path:'update/:id', component:EditComponent
      },
      {
        path:'users', component:UserlistComponent
      },
      {
        path:'edituser/:id', component:EditUserComponent
      },
      { path: 'categories', component: CategoriesComponent },
      {
        path: 'createCate', component: CreateCateComponent
      },
      {
        path:'updateCate/:id', component:EditCateComponent
      },
    ],
  },
  { path: 'pages/products', component: ProductsComponent },




];
