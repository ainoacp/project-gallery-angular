import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeideComponent } from './teide.component';

describe('TeideComponent', () => {
  let component: TeideComponent;
  let fixture: ComponentFixture<TeideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
