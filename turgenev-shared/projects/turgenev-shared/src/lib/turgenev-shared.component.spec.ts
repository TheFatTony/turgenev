import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurgenevSharedComponent } from './turgenev-shared.component';

describe('TurgenevSharedComponent', () => {
  let component: TurgenevSharedComponent;
  let fixture: ComponentFixture<TurgenevSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurgenevSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurgenevSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
