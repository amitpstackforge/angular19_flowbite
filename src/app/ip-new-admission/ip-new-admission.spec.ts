import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpNewAdmission } from './ip-new-admission';

describe('IpNewAdmission', () => {
  let component: IpNewAdmission;
  let fixture: ComponentFixture<IpNewAdmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpNewAdmission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpNewAdmission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
