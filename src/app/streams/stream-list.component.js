"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var stream_service_1 = require("./stream.service");
var StreamListComponent = (function () {
    function StreamListComponent(_streamService) {
        this._streamService = _streamService;
        this.pageTitle = 'Streams';
        this.totalStreams = 0;
        this.page = 1;
        this.totalPages = 1;
        this.offset = 0;
        this.limit = 10;
    }
    StreamListComponent.prototype.doSearch = function () {
        this.searchedFor = this.searchFilter;
        this.offset = 0;
        this.getPage();
    };
    StreamListComponent.prototype.getPage = function () {
        var _this = this;
        this.streams = null;
        if (typeof this.searchFilter == 'undefined' || !this.searchFilter)
            return;
        this._streamService.getStreams(this.searchFilter, this.offset, this.limit)
            .subscribe(function (data) { _this.streams = data.streams; _this.totalStreams = data._total; _this.page = _this.offset / _this.limit + 1; _this.totalPages = Math.floor((data._total + _this.limit - 1) / _this.limit); }, function (error) { return _this.errorMessage = error; });
    };
    StreamListComponent.prototype.searchboxKeypress = function (event) {
        if (event.keyCode == 13) {
            this.doSearch();
        }
    };
    StreamListComponent.prototype.nextPage = function () {
        if (this.totalPages <= this.page)
            return;
        this.offset += this.limit;
        this.getPage();
    };
    StreamListComponent.prototype.prevPage = function () {
        if (this.page <= 1)
            return;
        this.offset -= this.limit;
        this.getPage();
    };
    StreamListComponent.prototype.ngOnInit = function () {
    };
    return StreamListComponent;
}());
StreamListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/streams/stream-list.component.html'
    }),
    __metadata("design:paramtypes", [stream_service_1.StreamService])
], StreamListComponent);
exports.StreamListComponent = StreamListComponent;
//# sourceMappingURL=stream-list.component.js.map