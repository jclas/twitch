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
var router_1 = require("@angular/router");
var stream_service_1 = require("./stream.service");
var StreamDetailComponent = (function () {
    function StreamDetailComponent(_route, _router, _streamService) {
        this._route = _route;
        this._router = _router;
        this._streamService = _streamService;
        this.pageTitle = 'Stream Detail';
    }
    StreamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getStream(id);
        });
    };
    StreamDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StreamDetailComponent.prototype.getStream = function (id) {
        var _this = this;
        this._streamService.getStream(id).subscribe(function (stream) { return _this.stream = stream; }, function (error) { return _this.errorMessage = error; });
    };
    StreamDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/streams']);
    };
    StreamDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Stream Detail: ' + message;
    };
    return StreamDetailComponent;
}());
StreamDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/streams/stream-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        stream_service_1.StreamService])
], StreamDetailComponent);
exports.StreamDetailComponent = StreamDetailComponent;
//# sourceMappingURL=stream-detail.component.js.map