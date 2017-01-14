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
var diploma_service_1 = require("../shared/diploma.service");
var EducationComponent = (function () {
    function EducationComponent(DiplomaService) {
        this.DiplomaService = DiplomaService;
        this.title = "My Diplomas";
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.diplomas = this.DiplomaService.getDiplomas();
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("/dist/", "/app/"),
        templateUrl: 'education.html'
    }),
    __metadata("design:paramtypes", [diploma_service_1.DiplomaService])
], EducationComponent);
exports.EducationComponent = EducationComponent;
//# sourceMappingURL=education.component.js.map