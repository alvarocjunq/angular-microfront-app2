import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocContaComponent } from './poc-conta.component';

describe('PocContaComponent', () => {
  let component: PocContaComponent;
  let fixture: ComponentFixture<PocContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
