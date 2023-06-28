import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponentComponent } from './film-list-component.component';

describe('FilmListComponentComponent', () => {
  let component: FilmListComponentComponent;
  let fixture: ComponentFixture<FilmListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
