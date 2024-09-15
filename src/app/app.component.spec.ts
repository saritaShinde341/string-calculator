import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'string-calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('string-calculator');
  });

  it('should print sum 0 for an empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '';
    app.add();
    expect(app.sum).toBe(0);
  });

  it('should print sum even though \\n is in string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '1\\n2,3';
    app.add();
    expect(app.sum).toBe(6);
  });
  it('should print sum', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '1,2,3';
    app.add();
    expect(app.sum).toBe(6);
  });

  it('should handle different delimiter and return sum', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '//;\n1;2;3';
    app.add();
    expect(app.sum).toBe(6);
  });

  it('should print all negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '-1,2,3,-4';
    app.add();
    expect(app.response).toBe("Negative numbers are not allowed: -1,-4");
  });

});
