import { useState } from "react";

// Core
import { 
  Box, 
  Button, 
  Grid, 
  makeStyles, 
  Step, 
  StepButton, 
  StepConnector, 
  StepLabel, 
  Stepper, 
  Typography, 
  withStyles
} from "@material-ui/core";
import { Container, Main } from "../../components";

const getSteps = () => (
  ['Formaat', 'Papier keuze', 'Teksten', 'Achtergrond']
);

const ColorlibConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 12,
  },
  // active: {
  //   '& $line': {
  //     backgroundImage:
  //       'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  //   },
  // },
  completed: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#e6e6e6',
    borderRadius: 1,
  },
}))(StepConnector);

const useStepperStyles = makeStyles(theme => ({
  completed: {
    color: 'red',
  },
}));

const CreatorPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const classes = useStepperStyles();

  const handleNext = index => {
    console.log(index);
    setActiveStep(prevIndex => prevIndex + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Main>
      <Box width='100%'>
        <Stepper activeStep={activeStep} style={{ width: '100%', background: 'transparent', marginBottom: 24 }} alternativeLabel connector={<ColorlibConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconProps={{
                completed: classes.completed,
              }}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Button onClick={handleNext}>
          Next
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Container title="Start je eigen ontwerp">
            <Typography>
              CreatorPage
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} md={3}>
          <Container title="Toolkit">
            <Typography>
              CreatorPage
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Main>
  )
};

export default CreatorPage;