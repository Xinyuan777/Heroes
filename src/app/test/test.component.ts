import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public articleText :string ="主要內容";
  public articleText1 :string ="元件＋樣板＋模式";
  name = 'Angular';
  @Input() id = '';
}
