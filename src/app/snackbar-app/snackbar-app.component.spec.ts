import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarAppComponent } from './snackbar-app.component';

describe('SnackbarAppComponent', () => {
  let component: SnackbarAppComponent;
  let fixture: ComponentFixture<SnackbarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
