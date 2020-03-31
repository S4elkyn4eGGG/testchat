import { trigger, transition, animate, style, query, animateChild } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          visibility: 'hidden',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '800ms ease',
          style({
            opacity: 1,
            visibility: 'visible',
          })
        ),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const defaultAnimation = trigger('defaultAnimation', [
  transition('* <=> *', [style({ opacity: 0 }), animate('.5s ease')], { params: { startHeight: 0 } }),
]);
