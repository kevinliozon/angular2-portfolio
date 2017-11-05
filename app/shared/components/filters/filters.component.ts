import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// Environment
import { CONSTANTS } from '../../constants';

@Component({
    moduleId: module.id.replace("/dist/app/", "/app/"),
    selector: 'my-filters',
    templateUrl: 'filters.component.html',
})

export class FiltersComponent implements OnInit{

    @Input() public page: string;
    @Output() public selectFilter = new EventEmitter();

    public filters: Array<string>;
    public selectedFilter: string = '';

    constructor() {  }

    ngOnInit() {
        const filters = CONSTANTS.FILTERS || null;
        switch(this.page) {
            case 'experience':
                this.filters = filters.roles;
                break;
            case 'projects':
                this.filters = filters.projects;
                break;
            case 'skills':
                this.filters = filters.skills;
                break;
        }
    }

    public onSelect(filter) {
        this.selectedFilter = filter;
        this.selectFilter.emit(filter);
    }

}