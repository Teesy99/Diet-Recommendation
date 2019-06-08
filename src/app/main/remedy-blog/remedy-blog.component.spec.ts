import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedyBlogComponent } from './remedy-blog.component';

describe('RemedyBlogComponent', () => {
  let component: RemedyBlogComponent;
  let fixture: ComponentFixture<RemedyBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedyBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
