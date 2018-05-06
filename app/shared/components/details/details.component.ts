import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { ModalService } from "../../../providers/modal.service";
import { ResolveByIdService } from "../../../providers/resolve-by-id.service";
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
              private modalService: ModalService,
              private resolveByIdService: ResolveByIdService) {
    // We get the id and the type from the selected item
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
    });
  }

  public ngOnInit() {
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
  public openModal(id, type): void {
    this.detailsModal = this.modalService.openModal(id, type);
  }

}
