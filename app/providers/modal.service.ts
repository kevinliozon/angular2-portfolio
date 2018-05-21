import { Injectable } from '@angular/core';
// Services
import { ResolveByIdService } from './resolve-by-id.service';
import { GoogleAnalyticsService } from './providers/googleAnalytics.service';

@Injectable()
export class ModalService {

  constructor(private resolveByIdService: ResolveByIdService) { }
  
  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param {string} id
   * @param {string} type
   * @returns {any}
   */
  public openModal(id: string, type: string): any {
    return this.resolveByIdService.resolveById(id, type);
  }
}
