import { Component, OnInit } from '@angular/core';
// Skills
import { Skill } from '../../models/skill';
import { SkillService } from '../../providers/skill.service';
//services
import { ModalService } from '../../providers/modal.service';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'skills.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class SkillsPage implements OnInit {

  public skills: Skill[];
  public value = '';
  public detailsModal: any = {};
  public typeModal: string;

  constructor(private skillService: SkillService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

  /**
   * Affect the value to the filter
   * @param filter
   */
  public filterFor(filter) {
      this.value = filter;
  }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param info
   */
  public openModal($event, type): any {
    this.typeModal = type;
    this.detailsModal = this.modalService.openModal($event, type)
  }
  
}
