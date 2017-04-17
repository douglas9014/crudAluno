import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the aluno', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const aluno = fixture.debugElement.componentInstance;
    expect(aluno).toBeTruthy();
  }));

  it(`should have as title 'aluno works!'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const aluno = fixture.debugElement.componentInstance;
    expect(aluno.title).toEqual('aluno works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('aluno works!');
  }));
});
