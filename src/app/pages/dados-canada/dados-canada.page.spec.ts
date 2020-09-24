import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosCanadaPage } from './dados-canada.page';

describe('DadosCanadaPage', () => {
  let component: DadosCanadaPage;
  let fixture: ComponentFixture<DadosCanadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCanadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosCanadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
