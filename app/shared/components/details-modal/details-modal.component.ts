import { Component, OnInit, Input } from '@angular/core';
// Services
import { DiplomaService } from '../../../providers/diploma.service';
import { ProjectService } from '../../../providers/project.service';
import { RoleService } from '../../../providers/role.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-modal',
  templateUrl: 'details-modal.component.html'
})

export class DetailsModalComponent implements OnInit{

  @Input() public details: any;
  @Input() public type: any;

  constructor(private diplomaService: DiplomaService,
              private projectService: ProjectService,
              private roleService: RoleService){  }

  public ngOnInit() {  }

}
