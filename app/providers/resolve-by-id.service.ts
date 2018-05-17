import { Injectable } from '@angular/core';
/* DATA */
import { ROLES } from '../shared/data/mock-roles';
import { PROJECTS } from '../shared/data/mock-projects';
import { DIPLOMAS } from '../shared/data/mock-diplomas';
import { HOBBIES } from '../shared/data/mock-hobbies';
import { SKILLS } from '../shared/data/mock-skills';
import { TOOLS } from '../shared/data/mock-tools';

@Injectable()
export class ResolveByIdService {
  /**
   * Use the id to retrieve the correct object
   * depending on the type
   *
   * @param id
   * @param type
   * @returns {any}
   */
  public resolveById(id, type): any {
    switch(type) {
      case 'role':
        return this.searchById(ROLES, id);
      case 'project':
        return this.searchById(PROJECTS, id);
      case 'diploma':
        return this.searchById(DIPLOMAS, id);
      case 'hobby':
        return this.searchById(HOBBIES, id);
      case 'skill':
        return this.searchById(SKILLS, id);
      case 'tool':
        return this.searchById(TOOLS, id);
      default :
        alert('The type is not defined');
        break;
    }
  }

  /**
   * Go through the data relevant to the type passed
   * returns matching object
   *
   * @param data
   * @param id
   * @returns {any}
   */
  private searchById(data, id): any {
    for (let matchingObject of data) {
      if (id === matchingObject.id) return matchingObject;
    }
  }
}
