import { Component, OnInit } from '@angular/core';
// skills
import { Skill } from '../../interfaces/skill.interface';
import { SkillService } from '../../providers/skill.service';
//tools
import { Tool } from '../../interfaces/tool.interface';
import { ToolService } from '../../providers/tool.service';
//hobbies
import { Hobby } from '../../interfaces/hobby.interface';
import { HobbyService } from '../../providers/hobby.service'
//constants
import { PROFILE } from '../../shared/constants/profile';
//services
import { ModalService } from '../../providers/modal.service';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'about.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class AboutPage implements OnInit{

  public details: any = PROFILE;
  public tools: Array<Tool>;
  public hobbies: Array<Hobby>;
  public skills: Array<Skill>;
  public skillsDev: Array<Skill> = [];
  public skillsDesign: Array<Skill> = [];
  public detailsModal: any = {};
  public typeModal: string;

  constructor(private toolService: ToolService,
              private hobbyService: HobbyService,
              private skillService: SkillService,
              private modalService: ModalService) { }

  public ngOnInit() {
    this.tools = this.toolService.getTools() || [];
    this.hobbies = this.hobbyService.getHobbies() || [];
    this.skills = this.skillService.getSkills() || [];
    this.filterSkills(this.skills);
    this.scrollTo();
  }

  /**
   * window.location.hash retrieves the anchor
   * then scroll down to correct level
   */
  private scrollTo(): void {
    if (!!window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash).scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
          behavior: 'smooth'
        });
      }, 500);
    }
  }

  /**
   * Filters skills depending on whether or not they are associated to design or dev
   * @param skills
   */
  private filterSkills(skills): void {
    for(let skill of skills) {
      if ((skill.category === 'Framework' || skill.category === 'Front-End') && skill.featured === true) {
          this.skillsDev.push(skill);
      } else if (skill.category === 'Design' && skill.featured === true) {
          this.skillsDesign.push(skill);
      }
    }
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
