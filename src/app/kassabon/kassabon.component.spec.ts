import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassabonComponent } from './kassabon.component';

describe('KassabonComponent', () => {
  let component: KassabonComponent;
  let fixture: ComponentFixture<KassabonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassabonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassabonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
