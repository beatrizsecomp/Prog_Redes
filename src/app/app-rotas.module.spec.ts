import { AppRotasModule } from './app-rotas.module';

describe('AppRotasModule', () => {
  let appRotasModule: AppRotasModule;

  beforeEach(() => {
    appRotasModule = new AppRotasModule();
  });

  it('should create an instance', () => {
    expect(appRotasModule).toBeTruthy();
  });
});
