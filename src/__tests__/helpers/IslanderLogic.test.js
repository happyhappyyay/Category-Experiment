import IslanderLogic, { MIN_WIDTH, MIN_HEIGHT, MAX_HEIGHT, MAX_WIDTH } from '../../helpers/IslanderLogic';
import {PHASE_1, EXPLICIT_3, RESULTS} from '../../helpers/phases';

describe('Islander Logic', ()=>{
    let logic = new IslanderLogic();
    it('should have a dimension of 0 or 1', ()=>{
        let dimension = logic.getDimension();
        expect(dimension === 0 || dimension === 1).toBeTruthy();
    });

    it('should be true for implicit stages',()=>{
        expect(logic.checkForImplicitPhase(PHASE_1)).toBeTruthy();
        expect(logic.checkForImplicitPhase(EXPLICIT_3)).toBeFalsy();
        expect(logic.checkForImplicitPhase(RESULTS)).toBeFalsy();
    });

    it('should have created silhouette properties within the measurements',()=>{
        logic.dimension = 0;
        let properties = logic.createSilhouetteProperties();
        expect(properties).toHaveLength(3);
        expect(properties[2]===0 || properties[2]===1).toBeTruthy();
        expect(properties[0]).toBeGreaterThanOrEqual(MIN_WIDTH);
        expect(properties[1]).toBeGreaterThanOrEqual(MIN_HEIGHT);
        expect(properties[0]).toBeLessThanOrEqual(MAX_WIDTH);
        expect(properties[1]).toBeLessThanOrEqual(MAX_HEIGHT);

        logic.dimension = 1;
        properties = logic.createSilhouetteProperties();
        expect(properties).toHaveLength(3);
        expect(properties[2]===0 || properties[2]===1).toBeTruthy();
        expect(properties[0]).toBeGreaterThanOrEqual(MIN_WIDTH);
        expect(properties[1]).toBeGreaterThanOrEqual(MIN_HEIGHT);
        expect(properties[0]).toBeLessThanOrEqual(MAX_WIDTH);
        expect(properties[1]).toBeLessThanOrEqual(MAX_HEIGHT);
    });
    it('should produce practical bimodal silhouette parameter',()=>{
        let size1 = logic.randomizedBimodalSize(100,0,0);
        let size2 = logic.randomizedBimodalSize(100,0,1);
        let dif = 50;
        let mode_center = dif/5.5;

        expect(size1).toBeGreaterThanOrEqual((dif-mode_center)-(dif - mode_center));
        expect(size1).toBeLessThanOrEqual(2*(dif-mode_center));
        
        expect(size2).toBeGreaterThanOrEqual((dif+mode_center)-(dif - mode_center));
        expect(size2).toBeLessThanOrEqual((dif+mode_center)+(dif - mode_center));
    });

    it('should produce practical unimodal silhouette parameter',()=>{
        let size1 = logic.randomizedUnimodalSize(100,0,0);
        let size2 = logic.randomizedUnimodalSize(100,0,1);
        let dif = 50;

        expect(size1).toBeGreaterThanOrEqual(dif-dif);
        expect(size1).toBeLessThanOrEqual(dif*2);
        
        expect(size2).toBeGreaterThanOrEqual(dif-dif);
        expect(size2).toBeLessThanOrEqual(dif*2);
    });

    it('should have a value of 3.5 or less',()=>{
        expect(Math.abs(logic.normalDistributionSample())).toBeLessThanOrEqual(3.5);
    });

});