import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public articleText :string ="主要內容";
  public articleText1 :string ="元件＋樣板＋模式";
  name = 'Angular';

  @Input() id = '';
}
