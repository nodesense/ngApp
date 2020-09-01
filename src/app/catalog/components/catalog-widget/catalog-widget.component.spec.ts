import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogWidgetComponent } from './catalog-widget.component';

describe('CatalogWidgetComponent', () => {
  let component: CatalogWidgetComponent;
  let fixture: ComponentFixture<CatalogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
