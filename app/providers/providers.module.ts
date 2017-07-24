import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
// Services
import { DiplomaService } from "./diploma.service";
import { HobbyService } from "./hobby.service";
import { ProjectService } from "./project.service";
import { RoleService } from "./role.service";
import { SkillService } from "./skill.service";
import { ToolService } from "./tool.service";

@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
      ProjectService,
      SkillService,
      RoleService,
      DiplomaService,
      ToolService,
      HobbyService
    ]
})

export class ProvidersModule {  }
