import { useState } from "react";

const messages = [
  "Learn React 🏫",
  "Apply for Jobs 🏢⚒️",
  "Invest your new income 💰💸",
];

function AddPropModal({isOpen,setIsOpen}) {
  const [step, setStep] = useState(1);
 

  function handlePrevious() {
    if (step > 1)
      //Update states using CALLBACK function only !!
      setStep( (s) => s-1 );
  } 

  function handleNext() {
    if (step < 3)
      setStep( (s) => s+1 );
  }


  return (
    <div className="modal">
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

      { isOpen && 
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Steps {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7959f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>
          <button style={{ backgroundColor: "#7959f2", color: "#fff" }} onClick={handleNext} >Next</button>
        </div>

      </div>
      }
    </div>
  )
}

export default AddPropModal;
