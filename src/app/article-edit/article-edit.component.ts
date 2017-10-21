import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/model/article';


@Component({
  selector: 'ap-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article: Article;
  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.articleService.getArticle(params.id)
      .subscribe((article: Article) =>{
        this.article = article;
      });
    });
  }

}
