import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosJapaoPage } from './dados-japao.page';

describe('DadosJapaoPage', () => {
  let component: DadosJapaoPage;
  let fixture: ComponentFixture<DadosJapaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosJapaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosJapaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
