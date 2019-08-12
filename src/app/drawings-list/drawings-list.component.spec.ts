import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsListComponent } from './drawings-list.component';

describe('DrawingsListComponent', () => {
  let component: DrawingsListComponent;
  let fixture: ComponentFixture<DrawingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
