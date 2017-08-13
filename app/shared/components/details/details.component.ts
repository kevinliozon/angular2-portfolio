import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { DiplomaService } from '../../../providers/diploma.service';
import { ProjectService } from '../../../providers/project.service';
import { RoleService } from '../../../providers/role.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-details',
  templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit{

  private sub: any;
  public id: string;
  public type: string;
  public details: any;
  public detailsModal: any = {};
  public typeModal: any = {};

  constructor(private route: ActivatedRoute,
              private diplomaService: DiplomaService,
              private projectService: ProjectService,
              private roleService: RoleService){
    // We get the id and the type from the selected item
    // TODO pass a parameter specifying from which page we come from
    this.sub = this.route.params.subscribe((params) => {
          this.id = params['id'];
          this.type = params['type'];
    });
  }

  public ngOnInit() {
    /* Compare the id passed from previous page with id
       of all the objects in the collection */
    switch(this.type) {
      case 'diploma':
        this.details = this.diplomaService.resolveDiploma(this.id);
        break;
      case 'project':
        this.details = this.projectService.resolveProject(this.id);
        break;
      case 'role':
        this.details = this.roleService.resolveRole(this.id);
        break;
    }
  }

  public openModal(id, type) {
    this.typeModal = type;
    switch(type) {
      case 'diploma':
        this.detailsModal = this.diplomaService.resolveDiploma(id);
        break;
      case 'project':
        this.detailsModal = this.projectService.resolveProject(id);
        break;
      case 'role':
        this.detailsModal = this.roleService.resolveRole(id);
        break;
    }
  }

}
