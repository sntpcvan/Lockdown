import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteContainerComponent } from './add-note-container.component';

describe('AddNoteContainerComponent', () => {
  let component: AddNoteContainerComponent;
  let fixture: ComponentFixture<AddNoteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
