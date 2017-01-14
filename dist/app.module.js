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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
//Components
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var education_component_1 = require("./education/education.component");
var experience_component_1 = require("./experience/experience.component");
var projects_component_1 = require("./projects/projects.component");
var skills_component_1 = require("./skills/skills.component");
//Translations
var translation_1 = require("./translate/translation");
var translate_service_1 = require("./translate/translate.service");
var translate_pipe_1 = require("./translate/translate.pipe");
//Services
var project_service_1 = require("./shared/project.service");
var skill_service_1 = require("./shared/skill.service");
var role_service_1 = require("./shared/role.service");
var diploma_service_1 = require("./shared/diploma.service");
var appRoutes = [
    // default route to home on load
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // links to the components
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'education', component: education_component_1.EducationComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            education_component_1.EducationComponent,
            experience_component_1.ExperienceComponent,
            projects_component_1.ProjectsComponent,
            skills_component_1.SkillsComponent,
            translate_pipe_1.TranslatePipe
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [translation_1.TRANSLATION_PROVIDERS,
            translate_service_1.TranslateService,
            project_service_1.ProjectService,
            skill_service_1.SkillService,
            role_service_1.RoleService,
            diploma_service_1.DiplomaService
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map