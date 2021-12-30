import React, { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [show, setShow] = useState(false);

  const handleShowAnswer = () => {
    setShow(!show);
  };

  return (
    <div className={show ? "faq-item show-answer" : "faq-item"}>
      <div onClick={handleShowAnswer} className="question-wrapper">
        <p className="question">{question}</p>
        <span className="icon">
          <i className="fas fa-angle-down"></i>
        </span>
      </div>
      <p className="answer" dangerouslySetInnerHTML={{ __html: answer }}></p>
    </div>
  );
}
