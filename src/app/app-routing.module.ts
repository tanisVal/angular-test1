import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginFormComponent
  },
  // {
  //     path: 'homePage',
  //     component: HomePageComponent
  // },
  {
      path: 'articleList',
      component: ArticleListComponent
  },
  {
    path: 'articleAdd',
    component: ArticleAddComponent
  },
  {
    path: 'article/:id/edit',
    component: ArticleEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
