import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

const ARTICLES_API = 'http://localhost:3000/posts';

@Injectable()
export class ArticleService {

  constructor(private httpClient: HttpClient, route: ActivatedRoute) { }

  getArticles(): Observable<any>{
    return this.httpClient.get(`${ ARTICLES_API }`);
  }

  getArticle(id:number): Observable<any>{
    return this.httpClient.get(`${ ARTICLES_API}/${id}`);   
  }
}
