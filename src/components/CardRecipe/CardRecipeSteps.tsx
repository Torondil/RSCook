import { 
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';

import styles from './recipe.scss';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    backBtn: {
      
    },
    nextBtn: {
      color: '#3078B4',
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

const CardRecipeSteps = (props: { arraySteps: Array<string> }): JSX.Element => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps : Array<string> = (props.arraySteps).map((item, i) => `STEP ${i+1}`);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{props.arraySteps[index]}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={`${classes.button} ${classes.backBtn}`}
                  >
                    <KeyboardArrowLeft/> Back 
                  </Button>
                  <Button
                    onClick={handleNext}
                    className={`${classes.button} ${classes.nextBtn}`}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}{activeStep === steps.length - 1 ? '' : <KeyboardArrowRight/>}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};
export default CardRecipeSteps; 