import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuCalendarioPage } from './meu-calendario.page';

describe('MeuCalendarioPage', () => {
  let component: MeuCalendarioPage;
  let fixture: ComponentFixture<MeuCalendarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCalendarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuCalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
