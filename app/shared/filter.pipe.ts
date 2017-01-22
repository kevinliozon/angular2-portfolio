import { Pipe, PipeTransform } from '@angular/core';
//projects
import { Project } from './models/project';
import { PROJECTS } from './mocks/mock-projects';
import { ProjectService } from './project.service'

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {

  transform(items: Array<any>,
            conditions: {[field: string]: any}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                // we want to sort the items which the condition
                // match the "visible" keyword AND is not empty
                // AND exists
                if (item[field] !== conditions[field]
                    && conditions[field] !== ""
                    && conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    }
}
