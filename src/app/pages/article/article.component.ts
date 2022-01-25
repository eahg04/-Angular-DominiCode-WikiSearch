import { Article } from './../search/services/search.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <article class="article">
      <a
        [href]="'https://es.wikipedia.org/?curid=' + article.pageid"
        target="_blank"
      >
        {{ article.title }}
      </a>
      <p [innerHTML]="article.snippet"></p>
    </article>
  `,
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
}
