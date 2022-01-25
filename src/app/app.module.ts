import { ArticleModule } from './pages/article/article.module';
import { SearchModule } from './pages/search/search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SearchModule, HttpClientModule, ArticleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
