import { TestBed } from '@angular/core/testing';

import { AngularStarterTemplateService } from './angular-starter-template.service';

describe('AngularStarterTemplateService', () => {
  let service: AngularStarterTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularStarterTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
