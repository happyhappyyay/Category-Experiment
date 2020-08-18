import ResultsParser from './resultsParser';

describe('Results Parser', () => {
  it('should return the larger silhouette', () => {
    expect(ResultsParser.haslargerSilhouette(30, 20)).toBeTruthy();
    expect(ResultsParser.haslargerSilhouette(20, 30)).toBeFalsy();
  });
  it('should return correct implicit boundary', () => {
    expect(ResultsParser.findImplicitBoundary(25, 75)).toBe(50);
    expect(ResultsParser.findImplicitBoundary(0, 100)).toBe(50);
    expect(ResultsParser.findImplicitBoundary(0, 200)).toBe(100);
    expect(ResultsParser.findImplicitBoundary(1, 3)).toBe(2);
  });
});
