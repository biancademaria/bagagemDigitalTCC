import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MundoAforaPage } from './mundo-afora.page';

describe('MundoAforaPage', () => {
  let component: MundoAforaPage;
  let fixture: ComponentFixture<MundoAforaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoAforaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MundoAforaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
