import React, { useState } from "react";

const Phase2 = ({ chain, setChain, responseToBeChanged }) => {
  const [activeStep, setActiveStep] = useState(2);
  const [step2, setStep2] = useState("");
  const [recursiveIdx, setRecursiveIdx] = useState(2);

  const nextIntendentOutcome = chain[chain.length - recursiveIdx];
  const coreState = chain[chain.length - 1];

  const handleNextStep = (evt) => {
    evt.preventDefault();
    setActiveStep((as) => as + 1);
  };

  const handleStep2 = (evt) => {
    evt.preventDefault();
    setStep2("");
    debugger;
    const nextNextIntendentOutcome = chain[chain.length - recursiveIdx - 1];
    if (nextNextIntendentOutcome) {
      setRecursiveIdx((rc) => rc + 1);
    } else {
      setActiveStep(3);
    }
  };
  return (
    <div>
      {activeStep === 0 && (
        <div>
          <p>
            Somehow our inner parts get the idea that in order to experience
            Core States such as {coreState}, we have to first do certain things
            and get certain things. Unfortunately, this doesn’t work very well.
            We don’t get to experience our Core States very often when we go
            about it that way. The way to experience a Core State is just to
            step into it and have it.
          </p>
          <button onClick={handleNextStep}>Continue</button>
        </div>
      )}
      {activeStep === 1 && (
        <form onSubmit={handleNextStep}>
          <p>
            Invite this part of you to step into {coreState} now, and ask this
            part, ‘When you already have {coreState} in an ongoing way how does
            already having {coreState} make things different?
          </p>
          <input />
        </form>
      )}
      {activeStep === 2 && (
        <form onSubmit={handleStep2}>
          <p>
            Ask the part, ‘How does already having {coreState} as a way of being
            radiate through, transform or enrich {nextIntendentOutcome}
          </p>
          <input onChange={(evt) => setStep2(evt.target.value)} value={step2} />
        </form>
      )}
      {activeStep === 3 && (
        <form onSubmit={handleNextStep}>
          <p>
            {" "}
            Ask the part, ‘How does already having {coreState}, as a way of
            being, transform or enrich the situations in which you used to have{" "}
            {responseToBeChanged}?{" "}
          </p>
          <input />
        </form>
      )}
    </div>
  );
};

export default Phase2;
