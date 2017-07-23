import { Injectable } from '@angular/core';
/* DATA */
import { ROLES } from '../shared/data/mock-roles';

@Injectable()
export class RoleService
{
  public getRoles()
  {
    return ROLES;
  }

  public resolveRole(id) {
    for (let role of ROLES) {
      if (id === role.id) {
        return role;
      }
    }
  }

}
