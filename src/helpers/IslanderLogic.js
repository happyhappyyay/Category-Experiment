import * as Phases from './phases';

export const MIN_WIDTH = 8;
export const MAX_WIDTH = 50;
export const MIN_HEIGHT = 20;
export const MAX_HEIGHT = 37;
export const ISLAND_1 = 0;
export const ISLAND_2 = 1;
export const WIDTH_MEASURE = 0;
export const HEIGHT_MEASURE = 1

class IslanderLogic {
    constructor(){
        this.dimension = Math.round(Math.random());
        console.log(this.dimension===WIDTH_MEASURE? "width":"height", " bimodal");
    }

    createSilhouetteProperties(){
        let island = this.islandRandomization();
        console.log(island);
        if(this.dimension === WIDTH_MEASURE){
            return [this.randomizedUnimodalSize(MAX_WIDTH,MIN_WIDTH,island),
                    this.randomizedBimodalSize(MAX_HEIGHT,MIN_HEIGHT,island),
                    island];
        }
        return [this.randomizedBimodalSize(MAX_WIDTH,MIN_WIDTH,island),
                this.randomizedUnimodalSize(MAX_HEIGHT,MIN_HEIGHT,island),
                island];
    }

    islandRandomization(){
        return Math.round(Math.random());

    }

    randomizedBimodalSize(max, min, island){
        const DIF = max-min;
        const DISTR_MID_POINT = (DIF/2)+min;
        // arbitrary overlap point in MODE_DIST_CNTR_DISTR
        const MODE_DIST_CNTR_DISTR = Math.floor(DIF/5.5);
        const MAX_STD = 3.5;
        const SIZE_VARIANCE = ((DIF/2)-MODE_DIST_CNTR_DISTR)/MAX_STD

        if(island === ISLAND_1){
            let size = this.normalDistributionSample()*SIZE_VARIANCE + (DISTR_MID_POINT - MODE_DIST_CNTR_DISTR);
            console.log(size);
            return size;
        }
        let size = this.normalDistributionSample()*SIZE_VARIANCE + (DISTR_MID_POINT + MODE_DIST_CNTR_DISTR);
        console.log(size);
        return size;
    }

    randomizedUnimodalSize(max, min, island){
        const DIF = max-min;
        const DISTR_MID_POINT = (DIF/2)+min;
        const MAX_STD = 3.5;
        const SIZE_VARIANCE = (DIF/2)/MAX_STD;
        
        if(island === ISLAND_1){
            let size = this.normalDistributionSample()*SIZE_VARIANCE + (DISTR_MID_POINT);
            console.log(size);
            return size;
        }
        let size = this.normalDistributionSample()*SIZE_VARIANCE + (DISTR_MID_POINT);
        console.log(size);
        return size;
    }

    // https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve/36481059#36481059
    // by maxwell collard
    normalDistributionSample(){
            var u = 0, v = 0;
            while(u === 0) u = Math.random();
            while(v === 0) v = Math.random();
            let val = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
            return Math.abs(val) <= 3.5? val:this.normalDistributionSample();
    }

    checkForImplicitPhase(stage){
        return (stage === Phases.TRAINING | stage === Phases.PHASE_1 | stage === Phases.PHASE_2);
    }

    getDimension(){
        return this.dimension;
    }
}

export default IslanderLogic;