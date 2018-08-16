import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BairrosdetalhesComponent } from './bairrosdetalhes.component';

describe('BairrosdetalhesComponent', () => {
  let component: BairrosdetalhesComponent;
  let fixture: ComponentFixture<BairrosdetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BairrosdetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BairrosdetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
