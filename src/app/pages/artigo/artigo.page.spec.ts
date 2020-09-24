import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtigoPage } from './artigo.page';

describe('ArtigoPage', () => {
  let component: ArtigoPage;
  let fixture: ComponentFixture<ArtigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
