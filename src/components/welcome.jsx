import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import cabins from "../img/cabins.webp";

import "./welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <>
            <div id="welcome">
                <h2>Qual seria seu chalé em Percy Jackson?</h2>
                <img
                    src={cabins}
                    alt="Visão dos chalés no Acampamento Meio-Sangue"
                />
                <p>Clique no botão abaixo e descubra!</p>
                <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                    Iniciar
                </button>
            </div>
        </>
    );
};

export default Welcome;
