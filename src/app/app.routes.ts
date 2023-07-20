import { Component } from '@angular/core';
import {} from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { TestComponent } from './test/test.component';
import { ArticleComponent } from './article/article.component';
import { provideRouter, Route, RouterLink, RouterOutlet } from '@angular/router';


export const routes: Route[] = [
    {
      path: 'view1/:id',
      component: ArticleComponent,
    },
    {
      path: 'view2/:id',
      component: TestComponent,
    },
    {
      path: '**',
      component: ArticleComponent,
    },
  ];

  