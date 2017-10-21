import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/model/article';
import { ArticleService } from '../shared/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  defaultPictureURL: string = 'https://www.w3schools.com/angular/pic_angular.jpg';
  articles: Article[];
  article: Article;

  //Dependency Injection
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe((data)=> {
      console.log('data', data);
      this.articles = data;
    });

    // console.log(this.articles);
  }

  addArticle(): void{
    this.router.navigate(['articleAdd']);
  }

  edit(article: Article){
    console.log('Click', article)
    this.router.navigate(['article', article.id, 'edit']);
  }

}
