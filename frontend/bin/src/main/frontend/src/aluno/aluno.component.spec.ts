import { TestBed, async } from '@angular/core/testing';

import { AlunoComponent } from './aluno.component';

describe('AlunoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlunoComponent
      ],
    }).compileComponents();
  }));

  it('should create the aluno', async(() => {
    const fixture = TestBed.createComponent(AlunoComponent);
    const aluno = fixture.debugElement.componentInstance;
    expect(aluno).toBeTruthy();
  }));

  it(`should have as title 'aluno works!'`, async(() => {
    const fixture = TestBed.createComponent(AlunoComponent);
    const aluno = fixture.debugElement.componentInstance;
    expect(aluno.title).toEqual('aluno works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AlunoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('aluno works!');
  }));
});
