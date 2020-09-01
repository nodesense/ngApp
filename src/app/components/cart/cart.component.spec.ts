import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be default counter 0", () => {
    expect(component.counter).toBe(0);
    component.incr();
    expect(component.counter).toBe(1);
  })



  it("should be initialize called", () => {

    spyOn(component, 'initialize');
    component.incr();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.initialize).toHaveBeenCalledWith(1)
  })


  // html functionalitied
 
  it("should be initialize called", () => {
    let element = fixture.nativeElement;
     
    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 0"); 

    component.incr(); 

    expect(component.counter).toBe(1)

    // force render html
    fixture.detectChanges();

    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 1"); 
  })

  it("Should be empty list ", () => {
    let element = fixture.nativeElement;
    expect(element.querySelectorAll("li").length).toBe(0); 
    component.addItem();
    fixture.detectChanges();
    expect(element.querySelectorAll("li").length).toBe(1); 


    expect(element.querySelectorAll('span')[0].textContent)
          .toContain("Product"); 
  })

 

});
