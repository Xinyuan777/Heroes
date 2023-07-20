import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,Route, RouterModule } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule,TestComponent,ArticleComponent,RouterModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  public articleText:string ="子選單";
  public articleText1:string ="元件 ＋ 樣板 ＋ 樣式";
}
