import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { StreamListComponent } from './stream-list.component';

import { StreamService } from './stream.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'streams', component: StreamListComponent }
        ])
    ],
    declarations: [
        StreamListComponent
    ],
    providers: [
        StreamService
    ]
})
export class StreamModule {}
