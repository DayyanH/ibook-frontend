import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDraftComponent } from './send-draft.component';

describe('SendDraftComponent', () => {
  let component: SendDraftComponent;
  let fixture: ComponentFixture<SendDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendDraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
