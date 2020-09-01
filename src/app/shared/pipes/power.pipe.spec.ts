import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {

  beforeEach(() => {
    console.log("Pipe before each");
  });


  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it("should be default exponent 1", () => {
      const pipe = new PowerPipe();
      expect(pipe.transform(2)).toBe(2);

      expect(pipe.transform(3, 2)).toBe(9);
  });
});
