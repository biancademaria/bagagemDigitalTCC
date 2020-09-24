import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosIsraelPage } from './dados-israel.page';

describe('DadosIsraelPage', () => {
  let component: DadosIsraelPage;
  let fixture: ComponentFixture<DadosIsraelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosIsraelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosIsraelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
