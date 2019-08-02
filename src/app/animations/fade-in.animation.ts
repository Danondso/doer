import { transition, trigger, style, state, animate, group } from '@angular/animations';

export const FadeIn = [
    trigger('fadeInAnimation', [
        state('true', style({
            opacity: '1', visibility: 'visible'
        })),
        state('false', style({
            opacity: '0', visibility: 'hidden'
        })),
        transition('true => false', [group([
            animate('400ms ease-in-out', style({
                opacity: '0'
            })),
            animate('700ms ease-in-out', style({
                visibility: 'hidden'
            }))
        ]
        )]),
        transition('false => true', [group([
            animate('1ms ease-in-out', style({
                visibility: 'visible'
            })),
            animate('1ms ease-in-out', style({
                opacity: '1'
            }))
        ]
        )])
    ]),
];