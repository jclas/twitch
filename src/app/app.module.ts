import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { StreamListComponent }  from './streams/stream-list.component';

import { StreamModule } from './streams/stream.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'streams', redirectTo: '/streams', pathMatch: 'full' },
            { path: '', redirectTo: 'streams', pathMatch: 'full' },
            { path: '**', redirectTo: 'streams', pathMatch: 'full' }
        ]),
        StreamModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
