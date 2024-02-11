import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStarterTemplateComponent } from './angular-starter-template.component';

describe('AngularStarterTemplateComponent', () => {
  let component: AngularStarterTemplateComponent;
  let fixture: ComponentFixture<AngularStarterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularStarterTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularStarterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
