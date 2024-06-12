import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            payload: { answer: currentQuestion.gods, option },
            type: "CHANGE_QUESTION",
        });
    };

    return (
        <div id="questions">
            <p id="question">
                Pergunta {quizState.currentQuestion + 1} de{" "}
                {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.gods}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
