import React, { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(4);
  const [isRecursiveMode, setIsRecursiveMode] = useState(false);
  const [chain, setChain] = useState([]);
  const [step0, setStep0] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step4, setStep4] = useState("");
  const [step6, setStep6] = useState("");

  const handleNextStep = (evt) => {
    evt.preventDefault();
    setActiveStep((as) => as + 1);
  };

  const handleStep4 = (evt) => {
    evt.preventDefault();
    setActiveStep(5);
    setChain([step4]);
  };

  const handleStep5 = (evt) => {
    evt.preventDefault();
    setActiveStep(6);
    if (isRecursiveMode) {
      setStep6("");
    }
  };

  const handleStep6 = (evt) => {
    evt.preventDefault();
    setActiveStep(5);
    setIsRecursiveMode(true);
    setChain([...chain, step6]);
  };

  return (
    <div>
      {activeStep === 0 && (
        <form onSubmit={handleNextStep}>
          <p>What feeling, behavior or thought do you want to change?</p>
          <input onChange={(evt) => setStep0(evt.target.value)} value={step0} />
        </form>
      )}
      {activeStep === 1 && (
        <form onSubmit={handleNextStep}>
          <p>Where, when and with whom do you have this {step0}?</p>
          <input onChange={(evt) => setStep1(evt.target.value)} value={step1} />
        </form>
      )}
      {activeStep === 2 && (
        <form onSubmit={handleNextStep}>
          <p>
            Take a moment to relax and turn inward… Think about a specific time
            that {step0} occurred… Mentally step into the situation, seeing what
            you saw, hearing what you heard, feeling what you felt at the time…
            As you relive this experience, notice your internal images, sounds
            and/or feelings… Since you didn’t consciously generate {step0}, it’s
            as if some part of you generated it.{" "}
          </p>
          <input onChange={(evt) => setStep2(evt.target.value)} value={step2} />
        </form>
      )}
      {activeStep === 3 && (
        <form onSubmit={handleNextStep}>
          <p>
            Even though you don’t know what the positive intention of this part
            is, you can begin thanking this part for being there, because you
            can trust that it has some positive intention for you...
          </p>
          <button>Continue</button>
        </form>
      )}
      {activeStep === 4 && (
        <form onSubmit={handleStep4}>
          <p>
            Ask this part of you, ‘What do you want?’ After you ask this
            question inside, relax and notice what response you get back from
            this part of yourself...
          </p>
          <input onChange={(evt) => setStep4(evt.target.value)} value={step4} />
        </form>
      )}
      {activeStep === 5 && (
        <form onSubmit={handleStep5}>
          {isRecursiveMode && (
            <p>
              <i>{step6}</i>
            </p>
          )}
          {!isRecursiveMode && (
            <p>
              <i>{step4}</i>
            </p>
          )}
          <p>Thank this part for its response.</p>
          <button>Continue</button>
        </form>
      )}
      {activeStep === 6 && (
        <>
          <form onSubmit={handleStep6}>
            <p>
              Invite this part to step (or breathe) into what it is like to
              already have {isRecursiveMode ? chain[chain.length - 1] : step4}
              ... fully and completely. Ask this part of you, ‘When you have{" "}
              {isRecursiveMode ? chain[chain.length - 1] : step4}, what do you
              want, through having {step4}, that’s even deeper or more
              important?
            </p>
            <small>
              <p> You can tell it’s a Core State by the following clues</p>
              <ul>
                <li>
                  It’s a state of being (in contrast to doing, getting, having,
                  knowing, relating), such as “Beingness,” “Inner peace,”
                  “Love,” OK-ness,” “Oneness,” “Fullness,” “Wholeness,”
                  “Spiritual Connection.”{" "}
                </li>
                <li>
                  It’s not dependent on others (like “appreciation from others,”
                  “love from others,” “power over others”).{" "}
                </li>
                <li>It’s not reflexive (like “loving myself”). </li>
                <li>
                  It’s not a specific emotion, such as confident, hopeful,
                  satisfied, courageous, proud, etc.
                </li>
                <li>
                  It's describing the consequence of the core state, such as "my
                  whole life would be different"
                </li>
              </ul>
            </small>
            <input
              onChange={(evt) => setStep6(evt.target.value)}
              value={step6}
            />
          </form>
          <div>
            <button onClick={handleNextStep}>
              There's nothing deeper, {chain[chain.length - 1]} is my core state
            </button>
          </div>
        </>
      )}
      {activeStep === 7 && (
        <form onSubmit={handleNextStep}>
          <p>End of phase 1!</p>
        </form>
      )}
    </div>
  );
}

export default App;
