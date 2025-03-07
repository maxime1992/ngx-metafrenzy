import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MetafrenzyModule, MetafrenzyGuard } from './metafrenzy';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MetafrenzyModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent
            },
            {
                path: 'home',
                component: AppComponent,
                canActivate: [MetafrenzyGuard],
                data: {
                    metafrenzy: {
                        title: 'Page 2',
                        tags: [
                            {
                                name: 'og:title',
                                content: 'Page 2'
                            }, {
                                name: 'og:description',
                                content: 'Page description'
                            }
                        ],
                        links: [
                            {
                                rel: 'canonical',
                                href: 'http://localhost/home'
                            }
                        ]
                    }
                }
            }
        ])
    ],
    providers: [MetafrenzyGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
