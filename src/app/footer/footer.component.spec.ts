import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footer: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    footer = fixture.nativeElement.querySelector('footer');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contain footer text', () => {
    expect(footer.textContent).toContain('Angular social app');
  });
});
