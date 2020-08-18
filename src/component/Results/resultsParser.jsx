import React from 'react';
import {
  WIDTH_MEASURE, MAX_HEIGHT, MIN_HEIGHT, MIN_WIDTH, MAX_WIDTH,
}
  from '../../helpers/IslanderLogic';
import silhouette from '../../images/silhouette.svg';
import addSilhouette from '../../images/silhouette-add.svg';
import removeSilhouette from '../../images/silhouette-remove.svg';

const WIDTH_DIF = (MAX_WIDTH - MIN_WIDTH) / 2;
const HEIGHT_DIF = (MAX_HEIGHT - MIN_HEIGHT) / 2;
const WIDTH_AVG_BOUND = MIN_WIDTH + WIDTH_DIF;
const HEIGHT_AVG_BOUND = MIN_HEIGHT + HEIGHT_DIF;
const ISLAND_1_WIDTH_AVG = WIDTH_AVG_BOUND - Math.floor(WIDTH_DIF / 5.5);
const ISLAND_2_WIDTH_AVG = WIDTH_AVG_BOUND + Math.floor(WIDTH_DIF / 5.5);
const ISLAND_1_HEIGHT_AVG = HEIGHT_AVG_BOUND - Math.floor(HEIGHT_DIF / 5.5);
const ISLAND_2_HEIGHT_AVG = HEIGHT_AVG_BOUND + Math.floor(HEIGHT_DIF / 5.5);
const STANDARD_HEIGHT = `${(((MAX_HEIGHT - MIN_HEIGHT) / 2) + MIN_HEIGHT) / 2}vmin`;
const STANDARD_WIDTH = `${(((MAX_WIDTH - MIN_WIDTH) / 2) + MIN_WIDTH) / 2}vmin`;

class ResultsParser {
  parseResults(resultsArr, dimension) {
    if (resultsArr.length === 10) {
      const island1Cat = dimension === WIDTH_MEASURE ? ISLAND_1_WIDTH_AVG : ISLAND_1_HEIGHT_AVG;
      const island2Cat = dimension === WIDTH_MEASURE ? ISLAND_2_WIDTH_AVG : ISLAND_2_HEIGHT_AVG;
      const boundary = dimension === WIDTH_MEASURE ? WIDTH_AVG_BOUND : HEIGHT_AVG_BOUND;

      const p1Island1Avg = Math.round(resultsArr[0]);
      const p1Island2Avg = Math.round(resultsArr[1]);
      const p1ImplBound = ResultsParser.findImplicitBoundary(p1Island1Avg, p1Island2Avg);
      const p2Island1Avg = Math.round(resultsArr[2]);
      const p2Island2Avg = Math.round(resultsArr[3]);
      const p2ImplBound = ResultsParser.findImplicitBoundary(p2Island1Avg, p2Island2Avg);
      const exp1Island1 = Math.round(resultsArr[4]);
      const exp1Island2 = Math.round(resultsArr[5]);
      const exp1bound = Math.round(resultsArr[6]);
      const exp2Island1 = Math.round(resultsArr[7]);
      const exp2Island2 = Math.round(resultsArr[8]);
      const exp2Bound = Math.round(resultsArr[9]);

      return (
        <div className="resultsParser-flex-container">
          <div className="resultsParser-phase-row">
            <div className="resultsParser-result-item">
              <h3>First Phase- Island 1</h3>
              {this.addSilhouetteImage(island1Cat, p1Island1Avg, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Phase- Island 1</h3>
              {this.addSilhouetteImage(island1Cat, p2Island1Avg, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>First Choice- Island 1</h3>
              {this.addSilhouetteImage(island1Cat, exp1Island1, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Choice- Island 1</h3>
              {this.addSilhouetteImage(island1Cat, exp2Island1, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Island 1 Average</h3>
              {ResultsParser.addComparisonImage(island1Cat, dimension)}
            </div>
          </div>
          <div className="resultsParser-phase-row">
            <div className="resultsParser-result-item">
              <h3>First Phase- Island 2</h3>
              {this.addSilhouetteImage(island2Cat, p1Island2Avg, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Phase- Island 2</h3>
              {this.addSilhouetteImage(island2Cat, p2Island2Avg, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>First Choice- Island 2</h3>
              {this.addSilhouetteImage(island2Cat, exp1Island2, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Choice- Island 2</h3>
              {this.addSilhouetteImage(island2Cat, exp2Island2, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Island 2 Average</h3>
              {ResultsParser.addComparisonImage(island2Cat, dimension)}
            </div>
          </div>
          <div className="resultsParser-phase-row">
            <div className="resultsParser-result-item">
              <h3>First Choice- Boundary</h3>
              {this.addSilhouetteImage(boundary, exp1bound, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>First Phase- Boundary</h3>
              {this.addSilhouetteImage(boundary, p1ImplBound, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Choice- Boundary</h3>
              {this.addSilhouetteImage(boundary, exp2Bound, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Second Phase- Boundary</h3>
              {this.addSilhouetteImage(boundary, p2ImplBound, dimension)}
            </div>
            <div className="resultsParser-result-item">
              <h3>Boundary Average</h3>
              {ResultsParser.addComparisonImage(boundary, dimension)}
            </div>
          </div>
        </div>
      );
    }
  }

  static findImplicitBoundary(categoryAvg1, categoryAvg2) {
    const categoryDif = Math.abs(categoryAvg1 - categoryAvg2) / 2;
    return categoryAvg1 > categoryAvg2 ? categoryAvg2 + categoryDif : categoryAvg1 + categoryDif;
  }

  addSilhouetteImage(defaultSize, selectedSize, dimension) {
    const largerSilhouette = ResultsParser.haslargerSilhouette(defaultSize, selectedSize);
    const silhouetteImg = !largerSilhouette
      ? addSilhouette : defaultSize === selectedSize ? silhouette : removeSilhouette;

    const size = dimension === WIDTH_MEASURE ? {
      width: `${selectedSize / 2}vmin`,
      height: STANDARD_HEIGHT,
    }
      : {
        width: STANDARD_WIDTH,
        height: `${selectedSize / 2}vmin`,
      };

    const dimText = dimension === WIDTH_MEASURE ? ' wide' : ' tall';

    return (
      <div className="resultsParser-flex-container">
        <img
          className="resultsParser-silhouette"
          style={size}
          src={silhouetteImg}
          alt="silhouette"
        />
        <p>
          {selectedSize + dimText}
          {' '}
          /
          {defaultSize + dimText}
        </p>
      </div>
    );
  }

  static addComparisonImage(defaultSize, dimension) {
    const avgSize = dimension === WIDTH_MEASURE ? {
      width: `${defaultSize / 2}vmin`,
      height: STANDARD_HEIGHT,
    }
      : {
        width: STANDARD_WIDTH,
        height: `${defaultSize / 2}vmin`,
      };

    const dimText = dimension === WIDTH_MEASURE ? ' wide' : ' tall';

    return (
      <div className="resultsParser-flex-container">
        <img
          className="resultsParser-silhouette"
          style={avgSize}
          src={silhouette}
          alt="silhouette"
        />
        <p>
          {defaultSize + dimText}
        </p>
      </div>
    );
  }

  static haslargerSilhouette(silhouette1Size, silhouette2Size) {
    return silhouette1Size > silhouette2Size;
  }
}

export default ResultsParser;
