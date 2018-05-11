import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// Environment
import { FILTERS } from '../../constants/filters';

@Component({
    moduleId: module.id.replace("/dist/app/", "/app/"),
    selector: 'my-filters',
    templateUrl: 'filters.component.html',
})

export class FiltersComponent implements OnInit{

    @Input() public page: string;
    @Output() public selectFilter = new EventEmitter();

    public filters: Array<string>;
    public selectedFilter = '';

    constructor() {  }

    /**
     * Generate the filters relevant to the page
     */
    ngOnInit() {
        const filters = FILTERS || null;
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

    /**
     * Set the selected filter and emit value to parent
     * @param filter
     */
    public onSelect(filter) {
        this.selectedFilter = filter;
        this.selectFilter.emit(filter);
    }

    /**
     * Check if this filter is the selected one to highlight it
     * @param filter
     * @returns {boolean}
     */
    public isSelected(filter) {
        return this.selectedFilter === filter;
    }

}