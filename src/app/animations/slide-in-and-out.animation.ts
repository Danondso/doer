import { transition, trigger, style, state, animate, group } from '@angular/animations';

export const SlideInAndOut = [
    trigger('showTaskCreateAnimation', [
        state('true', style({
            'max-height': '500px',
            opacity: '1'
        })),
        state('false', style({
            'max-height': '0px',
            opacity: '0',
        })),
        transition('true => false', [group([
            animate('1ms ease-in-out', style({
                visibility: 'hidden'
            })),
            animate('300ms ease-in-out', style({
                'max-height': '0vw',
                'max-width': '0vh'
            })),
            animate('800ms ease-in-out', style({
                opacity: '1'
            }))
        ]
        )]),
        transition('false => true', [group([
            animate('1ms ease-in-out', style({
                visibility: 'visible'
            })),
            animate('300ms ease-in-out', style({
                'max-height': '1000px'
            })),
            animate('800ms ease-in-out', style({
                transition: 'height',
                height: '0px'
            })),
        ]
        )])
    ]),
];
