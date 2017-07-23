import { Injectable } from '@angular/core';
/* MODELS */
import { ROLES } from './mocks/mock-roles';

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
