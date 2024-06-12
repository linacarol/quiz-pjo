import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    answerSelected: false,
    scoreZeus: 0,
    scorePoseidon: 0,
    scoreDemeter: 0,
    scoreAres: 0,
    scoreAthena: 0,
    scoreApollo: 0,
    scoreHephaestus: 0,
    scoreAphrodite: 0,
    scoreHermes: 0,
    scoreDionysus: 0,
    scoreHades: 0,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "CHANGE_QUESTION":
            const option = action.payload.option;
            const answerZeus = action.payload.answer.zeus;
            const answerPoseidon = action.payload.answer.poseidon;
            const answerDemeter = action.payload.answer.demeter;
            const answerAres = action.payload.answer.ares;
            const answerAthena = action.payload.answer.athena;
            const answerApollo = action.payload.answer.apollo;
            const answerHephaestus = action.payload.answer.hephaestus;
            const answerAphrodite = action.payload.answer.aphrodite;
            const answerHermes = action.payload.answer.hermes;
            const answerDionysus = action.payload.answer.dionysus;
            const answerHades = action.payload.answer.hades;

            let zeus = 0;
            let poseidon = 0;
            let demeter = 0;
            let ares = 0;
            let athena = 0;
            let apollo = 0;
            let hephaestus = 0;
            let aphrodite = 0;
            let hermes = 0;
            let dionysus = 0;
            let hades = 0;

            if (answerZeus === option) zeus = 1;
            if (answerPoseidon === option) poseidon = 1;
            if (answerDemeter === option) demeter = 1;
            if (answerAres === option) ares = 1;
            if (answerAthena === option) athena = 1;
            if (answerApollo === option) apollo = 1;
            if (answerHephaestus === option) hephaestus = 1;
            if (answerAphrodite === option) aphrodite = 1;
            if (answerHermes === option) hermes = 1;
            if (answerDionysus === option) dionysus = 1;
            if (answerHades === option) hades = 1;

            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;
            if (!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                scoreZeus: state.scoreZeus + zeus,
                scorePoseidon: state.scorePoseidon + poseidon,
                scoreDemeter: state.scoreDemeter + demeter,
                scoreAres: state.scoreAres + ares,
                scoreAthena: state.scoreAthena + athena,
                scoreApollo: state.scoreApollo + apollo,
                scoreHephaestus: state.scoreHephaestus + hephaestus,
                scoreAphrodite: state.scoreAphrodite + aphrodite,
                scoreHermes: state.scoreHermes + hermes,
                scoreDionysus: state.scoreDionysus + dionysus,
                scoreHades: state.scoreHades + hades,
                answerSelected: option,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            };

        case "NEW_GAME":
            return initialState;

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};
