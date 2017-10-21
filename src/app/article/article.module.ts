import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../shared/services/article.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleAddComponent } from '../article-add/article-add.component';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
// import { ArticleListComponent } from '../article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ArticleAddComponent, ArticleEditComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
