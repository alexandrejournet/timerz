// keyframes.ts Angular code
import { keyframes, style } from '@angular/animations';

export const swing = [
  style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
  style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
  style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
  style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
  style({transform: 'none', offset: 1})
]

export const slideOutLeft = [
  style({transform: 'translate3d(0, 0, 0)'}),
  style({transform: 'translate3d(-30%, 0, 0)'})
]

export const headShake = [
  style({transform: 'translateX(0)'}),
  style({transform: 'translateX(-6px) rotateY(-9deg)'}),
  style({transform: 'translateX(5px) rotateY(7deg)'}),
  style({transform: 'translateX(-3px) rotateY(-5deg)'}),
  style({transform: 'translateX(2px) rotateY(3deg)'}),
  style({transform: 'translateX(0)'})
]
