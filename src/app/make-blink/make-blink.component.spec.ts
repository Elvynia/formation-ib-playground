import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBlinkComponent } from './make-blink.component';

describe('MakeBlinkComponent', () => {
  let component: MakeBlinkComponent;
  let fixture: ComponentFixture<MakeBlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeBlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeBlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
