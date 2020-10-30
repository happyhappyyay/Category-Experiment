import
{
  calculateOverallProgress, calulateCurrentProgress, EXPLICIT_TRIALS, PHASE_TRIALS,
}
  from './progCalc';
import * as Phases from '../../helpers/phases';

describe('Prog Calc', () => {
  const total = PHASE_TRIALS + EXPLICIT_TRIALS;

  it('should return the correct overall progress', () => {
    expect(calculateOverallProgress(Phases.TRAINING, 5))
      .toBe(Math.round(100 * (5 / total)));
    expect(calculateOverallProgress(Phases.PHASE_1, 20))
      .toBe(Math.round(100 * (43 / total)));
    expect(calculateOverallProgress(Phases.EXPLICIT_1, 2))
      .toBe(Math.round(100 * (22 / total)));
    expect(calculateOverallProgress(Phases.EXPLICIT_2, 1))
      .toBe(Math.round(100 * (64 / total)));
    expect(calculateOverallProgress(Phases.PHASE_2, 39))
      .toBe(Math.round(100 * (105 / total)));
    expect(calculateOverallProgress(Phases.EXPLICIT_3, 3))
      .toBe(Math.round(100 * (109 / total)));
    expect(calculateOverallProgress(Phases.INTRODUCTION))
      .toBe(0);
  });
  it('should return the correct current progress', () => {
    expect(calulateCurrentProgress(Phases.TRAINING, 5))
      .toBe(Math.round(100 * (5 / (PHASE_TRIALS / 5))));
    expect(calulateCurrentProgress(Phases.EXPLICIT_1, 2))
      .toBe(Math.round(100 * (2 / (EXPLICIT_TRIALS / 3))));
    expect(calulateCurrentProgress(Phases.PHASE_1, 15))
      .toBe(Math.round(100 * (15 / (2 * (PHASE_TRIALS / 5)))));
    expect(calulateCurrentProgress(Phases.EXPLICIT_2, 1))
      .toBe(Math.round(100 * (1 / (EXPLICIT_TRIALS / 3))));
    expect(calulateCurrentProgress(Phases.PHASE_2, 3))
      .toBe(Math.round(100 * (3 / (2 * (PHASE_TRIALS / 5)))));
    expect(calulateCurrentProgress(Phases.EXPLICIT_3, 3))
      .toBe(Math.round(100 * (3 / (EXPLICIT_TRIALS / 3))));
    expect(calulateCurrentProgress(Phases.RESULTS, 20))
      .toBe(Math.round(100 * (20 / 1)));
  });
});
