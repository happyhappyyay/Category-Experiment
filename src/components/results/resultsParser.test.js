import ResultsParser from './resultsParser';

describe('Results Parser',()=>{
    let parser = new ResultsParser();
    it('should return the larger silhouette',()=>{
        expect(parser.haslargerSilhouette(30,20)).toBeTruthy();
        expect(parser.haslargerSilhouette(20,30)).toBeFalsy();
    });
    it('should return correct implicit boundary',()=>{
        expect(parser.findImplicitBoundary(25,75)).toBe(50);
        expect(parser.findImplicitBoundary(0,100)).toBe(50);
        expect(parser.findImplicitBoundary(0,200)).toBe(100);
        expect(parser.findImplicitBoundary(1,3)).toBe(2);
    });
})