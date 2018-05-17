import { Injectable } from '@angular/core';
// Services
import { ResolveByIdService } from "./resolve-by-id.service";

@Injectable()
export class ModalService {

  constructor(private resolveByIdService: ResolveByIdService) {}

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param id
   * @param type
   */
  public openModal(id, type): any {
    return this.resolveByIdService.resolveById(id, type);
  }
}
