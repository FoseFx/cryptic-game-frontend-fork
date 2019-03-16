import {Component, OnInit} from '@angular/core';
import {WindowManagerService} from './window-manager.service';
import {TestWindowComponent} from '../windows/test-window/test-window.component';
import {windowAnimation} from './window-manager.animations';

@Component({
  selector: 'app-window-manager',
  templateUrl: './window-manager.component.html',
  styleUrls: ['./window-manager.component.scss'],
  animations: [
    windowAnimation
  ]
})
export class WindowManagerComponent implements OnInit {

  constructor(public windowManager: WindowManagerService) {
  }

  ngOnInit() {
    this.windowManager.openWindow(new TestWindowComponent());
    this.windowManager.openWindow(new TestWindowComponent());
    this.windowManager.openWindow(new TestWindowComponent());
    this.windowManager.openWindow(new TestWindowComponent());
  }

}
