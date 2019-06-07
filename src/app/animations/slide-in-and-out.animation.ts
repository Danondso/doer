import { transition, trigger, style, state, animate } from '@angular/animations';


export const SlideInAndOut = [
    trigger('showTaskCreateAnimation', [
        // ...
        state('true', style({
            transition: 'height 1s',
            height: 'auto',
            margin: 'auto',
            width: '43%',
            padding: '10px'
        })),
        state('false', style({
            transition: 'height 1s',
            height: '0px',
            margin: 'auto',
            width: '43%',
            padding: '0px'
        })),
        transition('true <=> false', [
            animate(500)
        ])
    ]),
]