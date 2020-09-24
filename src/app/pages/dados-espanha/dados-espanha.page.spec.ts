import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosEspanhaPage } from './dados-espanha.page';

describe('DadosEspanhaPage', () => {
  let component: DadosEspanhaPage;
  let fixture: ComponentFixture<DadosEspanhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEspanhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosEspanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
