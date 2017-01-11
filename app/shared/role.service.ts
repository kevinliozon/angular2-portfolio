import { ROLES } from './mocks/mock-roles';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleService
{
  getRoles()
  {
    return ROLES;
  }
}
