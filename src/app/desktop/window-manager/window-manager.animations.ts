import {animate, state, style, transition, trigger} from '@angular/animations';

export const windowAnimation = trigger('windowAnimation', [
  state('open', style({
    opacity: 1,
    display: 'flex',
    transform: 'scale(1) translateY(0)'
  })),
  state('minimized', style({
    opacity: 0,
    display: 'none',
    transform: 'scale(0.9) translateY(50px)'
  })),
  state('void', style({ // these styles get applied when the window closes or opens initially
    opacity: 0,
    display: 'flex',
    transform: 'scale(0.5) translateY(0)'
  })),
  transition('open <=> minimized', animate('200ms')),
  transition('open <=> void', animate('100ms')),

]);
