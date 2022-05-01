import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let sp: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);
  beforeEach(() => sp = createComponent());

  it('should exists', () => {
    expect(sp).toBeDefined();
  });

  it(`should have as title 'countdown-app'`, () => {
    expect(sp.title).toEqual('countdown-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('countdown-app app is running!');
  });
});
