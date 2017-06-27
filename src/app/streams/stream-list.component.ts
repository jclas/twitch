import { Component, OnInit }  from '@angular/core';

import { StreamService } from './stream.service';

@Component({
    templateUrl: 'app/streams/stream-list.component.html'
})
export class StreamListComponent implements OnInit {
    pageTitle: string = 'Streams';
    searchFilter: string;
    searchedFor: string; //searchFilter value after search button is pressed
    errorMessage: string;
    streams: any[];
    totalStreams: number = 0;
    page: number = 1;
    totalPages = 1;
    offset: number = 0;
    limit: number = 10;

    constructor(private _streamService: StreamService) { }
    
    doSearch() : void {
        this.searchedFor = this.searchFilter;
        this.offset = 0;
        this.getPage();
    }

    getPage() : void {
        this.streams = null;
        if (typeof this.searchFilter == 'undefined' || !this.searchFilter) return;

        this._streamService.getStreams(this.searchFilter, this.offset, this.limit)
                .subscribe(data => {this.streams = data.streams; this.totalStreams = data._total; this.page = this.offset / this.limit + 1; this.totalPages = Math.floor((data._total + this.limit - 1 ) / this.limit) },
                           error => this.errorMessage = <any>error);
    }

    searchboxKeypress(event: KeyboardEvent) {
        if(event.keyCode == 13){
            this.doSearch();
        }
    }

    nextPage() : void {
        if (this.totalPages <= this.page) return;

        this.offset +=  this.limit;
        this.getPage();
    }

    prevPage() : void {
        if (this.page <= 1) return;
        
        this.offset -=  this.limit;
        this.getPage();
        
    }

    ngOnInit(): void {

    }
}
