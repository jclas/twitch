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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var StreamService = (function () {
    function StreamService(_http) {
        this._http = _http;
        this._streamUrl = 'https://api.twitch.tv/kraken/search/streams?query=';
        this._headers = new http_1.Headers();
        this._headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        this._headers.append('Client-ID', 'pja011zbktnajritkjivfg7zo9mlyl');
    }
    StreamService.prototype.getStreams = function (query, offset, limit) {
        return this._http.get(this._streamUrl + query + '&limit=' + limit + '&offset=' + offset, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    StreamService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return StreamService;
}());
StreamService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StreamService);
exports.StreamService = StreamService;
//# sourceMappingURL=stream.service.js.map