import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryManagerPage } from './library-manager.page';

describe('LibraryManagerPage', () => {
  let component: LibraryManagerPage;
  let fixture: ComponentFixture<LibraryManagerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibraryManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
