import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { DiplomaService } from '../../diploma.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-details',
  templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit{

  private sub: any;
  public id: string;
  public details: any;

  constructor(private diplomaService: DiplomaService, private route: ActivatedRoute){
    // We get the id from the selected item
    // TODO pass a parameter specifying from which page we come from
    this.sub = this.route.params.subscribe((params) => {
          this.id = params['id'];
    });
  }

  public ngOnInit() {
    /* Compare the id passed from previous page with id
      of all the objects in the collection */
      // TODO switch case the new parameter to get the right method
    this.details = this.diplomaService.resolveDiploma(this.id);
  }

}
