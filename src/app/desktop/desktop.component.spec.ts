import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DesktopComponent} from './desktop.component';
import {DesktopMenuComponent} from './desktop-menu/desktop-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {PXtoViewHeightPipe} from '../pxto-view-height.pipe';
import {PXtoViewWidthPipe} from '../pxto-view-width.pipe';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {DesktopStartmenuComponent} from './desktop-startmenu/desktop-startmenu.component';
import {FormsModule} from '@angular/forms';
import {WindowManagerComponent} from './window-manager/window-manager.component';
import {WindowFrameComponent} from './window/window-frame.component';
import {TestWindowComponent} from './windows/test-window/test-window.component';
import {NgModule} from '@angular/core';

describe('DesktopComponent', () => {
  let component: DesktopComponent;
  let fixture: ComponentFixture<DesktopComponent>;

  localStorage.setItem('token', '');
  localStorage.setItem('desktop', '');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, EntryComponentsTestModule],
      declarations: [
        DesktopComponent,
        DesktopMenuComponent,
        PXtoViewWidthPipe,
        PXtoViewHeightPipe,
        ContextMenuComponent,
        DesktopStartmenuComponent,
        WindowManagerComponent,
        WindowFrameComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@NgModule({
  declarations: [TestWindowComponent],
  entryComponents: [TestWindowComponent]
})
class EntryComponentsTestModule {
}
