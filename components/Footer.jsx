"use client";
import React from "react";
import { useState } from "react";
import Lottie from 'lottie-react';

import animationData from "../public/assets/images/confetti.json"

const Footer = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswerClick = (correctAnswer) => {
        setIsAnswerVisible(true);
        setIsCorrect(correctAnswer);
    };

    const handleTryAgainClick = () => {
        setIsAnswerVisible(false);
        setIsCorrect(false);
    };

    return (
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
            <div className="game" style={{ overflow: "hidden" }}>
                    <div className="quote-trivia max-w-lg mx-auto px-4 relative">
                        <h3 className="text-black text-2xl text-center font-bold mb-4 ch">Quote Trivia</h3>
                        <p className="text-gray-700 mb-2 text-center">
                            Can you guess who said this famous quote?
                        </p>
                        <blockquote className="text-black italic mb-4 text-center">
                            "The greatest glory in living lies not in never falling, but in rising every time we fall."
                        </blockquote>
                        <ul className="flex flex-col space-y-2">
                            <li
                                className="bg-pink-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-teal-300"
                                onClick={() => handleAnswerClick(false)}
                            >
                                Albert Einstein
                            </li>
                            <li
                                className="bg-pink-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-teal-300"
                                onClick={() => handleAnswerClick(false)}
                            >
                                Nelson Mandela
                            </li>
                            <li
                                className="bg-pink-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-teal-300"
                                onClick={() => handleAnswerClick(true)}
                            >
                                Ralph Waldo Emerson
                            </li>
                            <li
                                className="bg-pink-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-teal-300"
                                onClick={() => handleAnswerClick(false)}
                            >
                                Mahatma Gandhi
                            </li>
                        </ul>

                        {isAnswerVisible && (
                            <p className="text-black mt-4">
                                {isCorrect ? "Correct!" : "Oops, that's incorrect."}
                            </p>
                        )}
                        {!isCorrect && isAnswerVisible && (
                            <button
                                className="text-black bg-pink-300 py-2 px-4 rounded mt-4"
                                onClick={handleTryAgainClick}
                            >
                                Try Again
                            </button>
                        )}

                        {isCorrect && isAnswerVisible && (
                            <div className="confetti-container absolute top-0 left-0 w-full h-full">
                                <Lottie
                                    animationData={animationData}
                                    height={60}
                                    width={480}
                                    loop={false}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7 flex flex-row space chnge">
                            <p className="mb-0 f_400">© QuotoPia.. 2023 All rights reserved.</p>
                            <p>
                                Made with 💜 by Suchana.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
