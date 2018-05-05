import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { DiplomaService } from '../../../providers/diploma.service';
import { ProjectService } from '../../../providers/project.service';
import { RoleService } from '../../../providers/role.service';
import { ModalService } from "../../../providers/modal.service";
//animations
import { routeTrans } from '../../components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-details',
  templateUrl: 'details.component.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
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
              private roleService: RoleService,
              private modalService: ModalService) {
    // We get the id and the type from the selected item
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

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param id
   * @param type
   */
  public openModal(id, type): void {
    this.detailsModal = this.modalService.openModal(id, type);
  }

}
