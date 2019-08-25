import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsysComponent } from './configsys.component';

describe('ConfigsysComponent', () => {
  let component: ConfigsysComponent;
  let fixture: ComponentFixture<ConfigsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
