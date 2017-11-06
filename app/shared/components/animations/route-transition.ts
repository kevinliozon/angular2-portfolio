import { trigger, state, style, transition, animate } from '@angular/core';

export const routeTrans = trigger(
    'routeTrans',
    [
        transition(":enter", [
            style({ opacity: 0 }),
            animate('500ms', style({ opacity: 1 }))
        ])
    ]);