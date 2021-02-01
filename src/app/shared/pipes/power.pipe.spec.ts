import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe Test Suite', () => {

  beforeEach(() => {
    console.log("Pipe before each");
  });


  // it is test spec/test case 
  it('create an instance', () => {
    const pipe = new PowerPipe();
    // expect() assertions
    expect(pipe).toBeTruthy();
  });

  it("should be default exponent 1", () => {
      const pipe = new PowerPipe();
      // 2 ^ exponetn default value 1
      expect(pipe.transform(2)).toBe(2);
      // 3 ^ 2 
      expect(pipe.transform(3, 2)).toBe(9);
  });
});
