import { Injectable } from '@angular/core';
// Services
import { DiplomaService } from '../providers/diploma.service';
import { ProjectService } from '../providers/project.service';
import { RoleService } from '../providers/role.service';

@Injectable()
export class ModalService
{

  constructor(private diplomaService: DiplomaService,
              private projectService: ProjectService,
              private roleService: RoleService) {}

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param id
   * @param type
   */
  public openModal(id, type): any {
    switch(type) {
      case 'diploma':
        return this.diplomaService.resolveDiploma(id);
      case 'project':
        return this.projectService.resolveProject(id);
      case 'role':
        return this.roleService.resolveRole(id);
    }
  }
}
