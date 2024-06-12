import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";

import imgZeus from "../img/zeus.jpg";
import imgPoseidon from "../img/poseidon.jpg";
import imgDemeter from "../img/demeter.jpg";
import imgAres from "../img/ares.jpg";
import imgAthena from "../img/athena.jpg";
import imgApollo from "../img/apollo.jpg";
import imgHephaestus from "../img/hephaestus.jpg";
import imgAphrodite from "../img/aphrodite.jpg";
import imgHermes from "../img/hermes.jpg";
import imgDionysus from "../img/dionysus.jpg";
import imgHades from "../img/hades.jpg";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    let score = -1;
    if (score <= quizState.scoreZeus) score = quizState.scoreZeus;
    if (score <= quizState.scorePoseidon) score = quizState.scorePoseidon;
    if (score <= quizState.scoreDemeter) score = quizState.scoreDemeter;
    if (score <= quizState.scoreAres) score = quizState.scoreAres;
    if (score <= quizState.scoreAthena) score = quizState.scoreAthena;
    if (score <= quizState.scoreApollo) score = quizState.scoreApollo;
    if (score <= quizState.scoreHephaestus) score = quizState.scoreHephaestus;
    if (score <= quizState.scoreAphrodite) score = quizState.scoreAphrodite;
    if (score <= quizState.scoreHermes) score = quizState.scoreHermes;
    if (score <= quizState.scoreDionysus) score = quizState.scoreDionysus;
    if (score <= quizState.scoreHades) score = quizState.scoreHades;

    if (score === quizState.scoreZeus) {
        return (
            <div id="gameover">
                <h2>Chalé 1</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Zeus, você tem uma
                                personalidade forte e um grande espírito de
                                liderança.
                            </p>
                            <p>
                                Seu orgulho é alto e você não gosta de receber
                                ordens, mas adora receber elogios.
                            </p>
                            <p>
                                Você é uma pessoa ambiciosa e fará de tudo para
                                alcançar seus objetivos.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgZeus} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scorePoseidon) {
        return (
            <div id="gameover">
                <h2>Chalé 3</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Poseidon, você preza pela
                                justiça e jamais quebra uma promessa.
                            </p>
                            <p>
                                Você é uma pessoa autossuficiente, que quer
                                fazer tudo sem ajuda, mesmo que sua indecisão
                                dificulte você a agir sobre pressão.
                            </p>
                            <p>
                                Você costuma se importar mais com as pessoas que
                                ama do que com si, o que pode fazer você deixar
                                suas necessidades ou gostos de lado.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgPoseidon} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreDemeter) {
        return (
            <div id="gameover">
                <h2>Chalé 4</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Demeter, você é uma pessoa
                                calma e paciente, que se coloca no lugar dos
                                outros e gosta de ajudar.
                            </p>
                            <p>
                                Você preza pela educação e odeia quando está em
                                ambientes com gritaria e pessoas mal educadas.
                            </p>
                            <p>
                                Com sua coragem, paciência e proteção, você faz
                                de tudo para manter sempre o sorriso no rosto,
                                mesmo quando está triste por dentro.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgDemeter} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreAres) {
        return (
            <div id="gameover">
                <h2>Chalé 5</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Ares, você é uma pessoa
                                conhecida por sua personalidade forte e
                                impulsividade, e não liga para as consequências
                                de agir por impulso.
                            </p>
                            <p>
                                Você tem dificuldade de falar sobre seus
                                sentimentos, mas se importa muito com aqueles
                                que você ama.
                            </p>
                            <p>
                                Mesmo tendo fama de alguém estressado, quem te
                                conhece sabe que você tem um lado amoroso.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgAres} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreAthena) {
        return (
            <div id="gameover">
                <h2>Chalé 6</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Atena, você é uma pessoa
                                conhecida por sua inteligência e vontade de
                                aprender.
                            </p>
                            <p>
                                Com sua criatividade e sua facilidade em
                                liderar, os outros não têm problemas em seguir
                                seus conselhos.
                            </p>
                            <p>
                                Você adora falar sobre o que você sabe e, por
                                isso, às vezes, é rotulado como "metido" apenas
                                por saber.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgAthena} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreApollo) {
        return (
            <div id="gameover">
                <h2>Chalé 7</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Apolo, você é conhecido por
                                sua afinidade com a arte e a música.
                            </p>
                            <p>
                                Apesar de ser seguro sobre si, você pode ter
                                quedas em sua autoestima, mas tenta manter o
                                sorriso no rosto em toda situação.
                            </p>
                            <p>
                                Você sempre ilumina o local em que está com sua
                                felicidade e bom astral, e dificilmente tem
                                inimigos.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgApollo} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreHephaestus) {
        return (
            <div id="gameover">
                <h2>Chalé 9</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Hefesto, você tem um bom
                                coração, mas tem dificuldade em demonstrar seus
                                sentimentos, escondendo-se atrás de piadas.
                            </p>
                            <p>
                                Com sua criatividade, você tem habilidade em
                                construção e criação, e prefere ficar na
                                companhia de suas próprias invenções.
                            </p>
                            <p>
                                Você gosta de aprender coisas novas, e pode
                                ficar horas falando sobre o que gosta.
                            </p>
                        </div>

                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgHephaestus} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreAphrodite) {
        return (
            <div id="gameover">
                <h2>Chalé 10</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Afrodite, você é uma pessoa
                                vaidosa e segura de si, e sempre procura ajudar
                                na autoestima dos outros.
                            </p>
                            <p>
                                Com sua alegria e bom astral, você sabe usar seu
                                charme para conseguir aquilo que quer.
                            </p>
                            <p>
                                Você ama fofocar, e sempre sabe de tudo que
                                acontece no exato momento em que acontece.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgAphrodite} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreHermes) {
        return (
            <div id="gameover">
                <h2>Chalé 11</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Hermes, você é uma pessoa
                                acolhedora e simpática, que faz de tudo para
                                todos se darem bem.
                            </p>
                            <p>
                                Uma palavra que te define é a malandragem, você
                                sabe usar sua lábia para convencer e se safar de
                                qualquer coisa.
                            </p>
                            <p>
                                Você tem facilidade em fazer amigos, e faz
                                amigos de todos os gostos.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgHermes} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreDionysus) {
        return (
            <div id="gameover">
                <h2>Chalé 12</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Dionísio, você ama festas,
                                bebidas e aventuras.
                            </p>
                            <p>
                                Graças à sua personalidade excêntrica, você
                                costuma ser rotulado como louco e sem juízo, mas
                                não se importa com a opinião alheia.
                            </p>
                            <p>
                                Você é uma pessoa sarcástica, que não tem medo
                                de dizer a verdade na cara.
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgDionysus} alt="" />
                </div>
            </div>
        );
    } else if (score === quizState.scoreHades) {
        return (
            <div id="gameover">
                <h2>Chalé 13</h2>
                <div id="results">
                    <div id="results-text">
                        <div>
                            <p>
                                Como os filhos de Hades, você é uma pessoa
                                reclusa, que prefere ficar em seu canto.
                            </p>
                            <p>
                                Extremamente protetor, você faz de tudo pelas
                                pessoas que ama, independente do que seja.
                            </p>
                            <p>
                                Você é uma pessoa sarcástica, inteligente e
                                rancorosa, e que, no fundo, gosta de carinho
                                (mas nunca dirá isso em voz alta).
                            </p>
                        </div>
                        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                            Reiniciar
                        </button>
                    </div>
                    <img src={imgHades} alt="" />
                </div>
            </div>
        );
    }
};

export default GameOver;
