import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyesComponent } from './hobbyes.component';

describe('HobbyesComponent', () => {
  let component: HobbyesComponent;
  let fixture: ComponentFixture<HobbyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
