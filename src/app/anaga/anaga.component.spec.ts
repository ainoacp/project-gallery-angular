import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagaComponent } from './anaga.component';

describe('AnagaComponent', () => {
  let component: AnagaComponent;
  let fixture: ComponentFixture<AnagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
