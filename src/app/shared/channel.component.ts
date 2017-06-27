import { Component, Input } from '@angular/core';

@Component({
    selector: 'ai-channel',
    templateUrl: 'app/shared/channel.component.html'
})
export class ChannelComponent {
    @Input() stream: any;

    getLanguageName(languageCode : string) : string {
        //to do: convert to long name
        return languageCode;
    }

}
