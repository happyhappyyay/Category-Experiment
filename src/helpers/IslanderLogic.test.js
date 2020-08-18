import IslanderLogic, {
  MIN_WIDTH, MIN_HEIGHT, MAX_HEIGHT, MAX_WIDTH,
} from './IslanderLogic';
import { PHASE_1, EXPLICIT_3, RESULTS } from './phases';

describe('Islander Logic', () => {
  const logic = new IslanderLogic();
  it('should have a dimension of 0 or 1', () => {
    const dimension = logic.getDimension();
    expect(dimension === 0 || dimension === 1).toBeTruthy();
  });

  it('should be true for implicit stages', () => {
    expect(IslanderLogic.checkForImplicitPhase(PHASE_1)).toBeTruthy();
    expect(IslanderLogic.checkForImplicitPhase(EXPLICIT_3)).toBeFalsy();
    expect(IslanderLogic.checkForImplicitPhase(RESULTS)).toBeFalsy();
  });

  it('should have created silhouette properties within the measurements', () => {
    logic.dimension = 0;
    let properties = logic.createSilhouetteProperties();
    expect(properties).toHaveLength(3);
    expect(properties[2] === 0 || properties[2] === 1).toBeTruthy();
    expect(properties[0]).toBeGreaterThanOrEqual(MIN_WIDTH);
    expect(properties[1]).toBeGreaterThanOrEqual(MIN_HEIGHT);
    expect(properties[0]).toBeLessThanOrEqual(MAX_WIDTH);
    expect(properties[1]).toBeLessThanOrEqual(MAX_HEIGHT);

    logic.dimension = 1;
    properties = logic.createSilhouetteProperties();
    expect(properties).toHaveLength(3);
    expect(properties[2] === 0 || properties[2] === 1).toBeTruthy();
    expect(properties[0]).toBeGreaterThanOrEqual(MIN_WIDTH);
    expect(properties[1]).toBeGreaterThanOrEqual(MIN_HEIGHT);
    expect(properties[0]).toBeLessThanOrEqual(MAX_WIDTH);
    expect(properties[1]).toBeLessThanOrEqual(MAX_HEIGHT);
  });
  it('should produce practical bimodal silhouette parameter', () => {
    const size1 = logic.randomizedBimodalSize(100, 0, 0);
    const size2 = logic.randomizedBimodalSize(100, 0, 1);
    const dif = 50;
    const modeCenter = dif / 5.5;

    expect(size1).toBeGreaterThanOrEqual((dif - modeCenter) - (dif - modeCenter));
    expect(size1).toBeLessThanOrEqual(2 * (dif - modeCenter));

    expect(size2).toBeGreaterThanOrEqual((dif + modeCenter) - (dif - modeCenter));
    expect(size2).toBeLessThanOrEqual((dif + modeCenter) + (dif - modeCenter));
  });

  it('should produce practical unimodal silhouette parameter', () => {
    const size1 = logic.randomizedUnimodalSize(100, 0, 0);
    const size2 = logic.randomizedUnimodalSize(100, 0, 1);
    const dif = 50;

    expect(size1).toBeGreaterThanOrEqual(dif - dif);
    expect(size1).toBeLessThanOrEqual(dif * 2);

    expect(size2).toBeGreaterThanOrEqual(dif - dif);
    expect(size2).toBeLessThanOrEqual(dif * 2);
  });

  it('should have a value of 3.5 or less', () => {
    expect(Math.abs(logic.normalDistributionSample())).toBeLessThanOrEqual(3.5);
  });
});
