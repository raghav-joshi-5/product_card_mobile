import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileproductComponent } from './mobileproduct.component';

describe('MobileproductComponent', () => {
  let component: MobileproductComponent;
  let fixture: ComponentFixture<MobileproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
