import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDetailComponent } from './tweet-detail.component';

describe('TweetDetailComponent', () => {
  let component: TweetDetailComponent;
  let fixture: ComponentFixture<TweetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
