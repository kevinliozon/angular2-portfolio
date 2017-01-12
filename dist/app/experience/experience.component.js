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
var role_service_1 = require("../shared/role.service");
var ExperienceComponent = (function () {
    function ExperienceComponent(RoleService) {
        this.RoleService = RoleService;
        this.title = "My Roles";
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.roles = this.RoleService.getRoles();
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("/dist/", "/app/"),
        templateUrl: 'experience.html'
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], ExperienceComponent);
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map