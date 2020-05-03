import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadginComponent } from './loadgin.component';

describe('LoadginComponent', () => {
  let component: LoadginComponent;
  let fixture: ComponentFixture<LoadginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
