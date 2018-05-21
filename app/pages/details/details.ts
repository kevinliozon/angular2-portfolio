import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { ModalService } from '../../providers/modal.service';
import { ResolveByIdService } from '../../providers/resolve-by-id.service';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-details',
  templateUrl: 'details.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})

export class DetailsPage implements OnInit{

  private sub: any;
  public id: string;
  public type: string;
  public details: any;
  public detailsModal: any = {};
  public imageModal: any = {};
  public typeModal: string;

  constructor(private route: ActivatedRoute,
              private modalService: ModalService,
              private resolveByIdService: ResolveByIdService) {
    // We get the id and the type from the selected item
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
    });
  }

  ngOnInit() {
    // Compare the id passed from previous page with id of all the objects in the collection
    this.details = this.resolveByIdService.resolveById(this.id, this.type);
  }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param id
   * @param type
   */
  public openModal(id: string, type: string): void {
    this.typeModal = type;
    this.detailsModal = this.modalService.openModal(id, type);
  }
  
  /**
   * Galleries, Docs and Prototypes are not visible if project is confidential
   *
   * @returns {any}
   */
  public isConfidential(): boolean {
    let confidentialInfo = ['#project15', '#project14', '#project13', '#project12', '#project11', '#project10'];
    
    for (let confidential of confidentialInfo) {
      if(this.details.id === confidential) {
        return true;
      }
    }
  }
  
  /**
   * Update the content of the details page by retrieving project Id from modal
   *
   * @param projectId
   */
  public updateContent(projectId: string): void {
    this.id = projectId;
    this.type = 'project';
    this.details = this.resolveByIdService.resolveById(projectId, 'project');
    document.getElementById('anchor-top').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

}
