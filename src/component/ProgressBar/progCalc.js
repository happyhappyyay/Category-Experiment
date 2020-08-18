import * as Phases from '../../helpers/phases';

export const PHASE_TRIALS = 100;
export const EXPLICIT_TRIALS = 9;

export const calculateOverallProgress = (stage, trial) => {
  const TOTAL_TRIALS = PHASE_TRIALS + EXPLICIT_TRIALS;
  let rawTrials;

  switch (stage) {
    case Phases.TRAINING:
      rawTrials = trial;
      break;
    case Phases.PHASE_1:
      rawTrials = (PHASE_TRIALS / 5) + (EXPLICIT_TRIALS / 3) + trial;
      break;
    case Phases.PHASE_2:
      rawTrials = ((PHASE_TRIALS * 3) / 5) + ((2 * EXPLICIT_TRIALS) / 3) + trial;
      break;
    case Phases.EXPLICIT_1:
      rawTrials = (PHASE_TRIALS / 5) + trial;
      break;
    case Phases.EXPLICIT_2:
      rawTrials = ((PHASE_TRIALS * 3) / 5) + (EXPLICIT_TRIALS / 3) + trial;
      break;
    case Phases.EXPLICIT_3:
      rawTrials = PHASE_TRIALS + ((2 * EXPLICIT_TRIALS) / 3) + trial;
      break;
    default:
      rawTrials = 0;
      break;
  }
  return Math.round(100 * (rawTrials / TOTAL_TRIALS));
};

export const calulateCurrentProgress = (stage, trial) => {
  let stageTrials;

  switch (stage) {
    case Phases.TRAINING:
      stageTrials = PHASE_TRIALS / 5;
      break;
    case Phases.PHASE_1:
      stageTrials = (2 * PHASE_TRIALS) / 5;
      break;
    case Phases.PHASE_2:
      stageTrials = (2 * PHASE_TRIALS) / 5;
      break;
    case Phases.EXPLICIT_1:
      stageTrials = EXPLICIT_TRIALS / 3;
      break;
    case Phases.EXPLICIT_2:
      stageTrials = EXPLICIT_TRIALS / 3;
      break;
    case Phases.EXPLICIT_3:
      stageTrials = EXPLICIT_TRIALS / 3;
      break;
    default:
      stageTrials = 1;
      break;
  }
  return trial > 0 ? Math.round(100 * (trial / stageTrials))
    : trial;
};
