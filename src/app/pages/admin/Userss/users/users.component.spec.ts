import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
