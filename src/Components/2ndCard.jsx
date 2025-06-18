import React from "react"
import { motion as Motion } from 'framer-motion';
import { useRef, useState } from "react"
import MySlider from "./Slider.jsx";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Envelope() {
    const [isSliderComplete, setIsSliderComplete] = useState(false)
    const navigate = useNavigate();
    const handleSliderComplete = () => {
        setIsSliderComplete(true);
        console.log("complete");
    }
    const handleNavigate = () => {
        console.log("Button Clicked");
        navigate('/last-page');
    }
    return (
        <div className={`container`}>
            <HiddenCard isVisible={isSliderComplete} onNavigate={handleNavigate} />
            <Card isSliderComplete={isSliderComplete} onSliderComplete={handleSliderComplete}/>
        </div>
    )
}

function Card({ isSliderComplete, onSliderComplete }) {
    const ref = useRef(null)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={`w-[100vw] h-[100vh] flex justify-center items-center sticky bottom-0`}>
            <Motion.div
                ref={ref}
                className="relative flex flex-col justify-center items-center"
                initial={{ scale: 2, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 1.2,
                    },
                }}
                animate={{
                    transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                    },
                }}
                onClick={() => setIsExpanded(!isExpanded)}
                viewport={{
                    amount: 0.5,
                    once: false,
                }}
            >
                <Motion.div
                    className="w-[40vw] min-h-[50vh] bg-[url(./assets/txtr.jpg)] bg-cover relative z-5"
                    style={{
                        clipPath: `
            polygon(
                0 2%, 
                2% 4%, 
                4% 2%, 
                6% 4%, 
                8% 2%, 
                10% 4%, 
                12% 2%, 
                14% 4%, 
                16% 2%, 
                18% 4%, 
                20% 2%, 
                22% 4%, 
                24% 2%, 
                26% 4%, 
                28% 2%, 
                30% 4%, 
                32% 2%, 
                34% 4%, 
                36% 2%, 
                38% 4%, 
                40% 2%, 
                42% 4%, 
                44% 2%, 
                46% 4%, 
                48% 2%, 
                50% 4%, 
                52% 2%, 
                54% 4%, 
                56% 2%, 
                58% 4%, 
                60% 2%, 
                62% 4%, 
                64% 2%, 
                66% 4%, 
                68% 2%, 
                70% 4%, 
                72% 2%, 
                74% 4%, 
                76% 2%, 
                78% 4%, 
                80% 2%, 
                82% 4%, 
                84% 2%, 
                86% 4%, 
                88% 2%, 
                90% 4%, 
                92% 2%, 
                94% 4%, 
                96% 2%, 
                98% 4%, 
                100% 2%,

                100% 90%,
                98% 92%,
                96% 90%,
                94% 92%,
                92% 90%,
                90% 92%,
                88% 90%,
                86% 92%,
                84% 90%,
                82% 92%,
                80% 90%,
                78% 92%,
                76% 90%,
                74% 92%,
                72% 90%,
                70% 92%,
                68% 90%,
                66% 92%,
                64% 90%,
                62% 92%,
                60% 90%,
                58% 92%,
                56% 90%,
                54% 92%,
                52% 90%,
                50% 92%,
                48% 90%,
                46% 92%,
                44% 90%,
                42% 92%,
                40% 90%,
                38% 92%,
                36% 90%,
                34% 92%,
                32% 90%,
                30% 92%,
                28% 90%,
                26% 92%,
                24% 90%,
                22% 92%,
                20% 90%,
                18% 92%,
                16% 90%,
                14% 92%,
                12% 90%,
                10% 92%,
                8% 90%,
                6% 92%,
                4% 90%,
                2% 92%,
                0% 90%
            )`
                    }}
                >
                    <MySlider onSliderComplete={onSliderComplete}/>
                    {!isSliderComplete ? (
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-bold font-borel text-center">Drag The Scissors!</h1>
                    ) : null}
                </Motion.div>
            </Motion.div>
        </div>
    )
}
function HiddenCard({ isVisible = false, onNavigate }) {
    return (
        <Motion.div
            className="h-[60vh] w-[50vw] p-4 absolute top-[150vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(254,249,230)] bg-[url('./assets/note.png')] bg-cover bg-center flex items-center justify-center z-[100] rounded-2xl shadow-2xl"
            animate={isVisible ? "visible" : "hidden"}
            initial="hidden"
            variants={{
                hidden: {
                    scale: 0,
                    opacity: 0,
                    display: "none",
                },
                visible: {
                    scale: 1.5,
                    opacity: 1,
                    display: "flex",
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.8,
                    },
                },
            }}
        >
            <div className={`w-full flex pt-9 items-baseline justify-center gap-4 text-gray-700`}>
                <p className="px-5 text-sm font-bold font-borel text-justify w-1/2">Some people walk into our lives softly, quietly — and somehow, they end up changing everything.
                    You’ve been that quiet change in mine.
                    Thank you for being the brightest part of my world — not with noise or grand gestures, but with warmth that lingers long after the moment passes. You’re the kind of person whose smile feels like a celebration, and whose presence feels like home. I don’t quite know what to call what I feel — maybe it’s admiration, maybe something softer, unnamed. But I do know this: you’re the most special person I’ve ever met.</p>
                <p className="px-8 text-sm font-bold font-borel w-1/2 text-justify">As a friend, you’ve been rare — genuinely kind, deeply caring.
                    Whatever you carry — joy or sorrow, noise or silence — I’ll listen, I’ll understand. You are the princess of your own fairytale — and one day, you’ll wear your crown, not just in dreams, but in the light of everything you've fought for. Happy Birthday.
                    You deserve all the gentle things this world has to offer.

                    With all my support, and something a little more than words, <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    —Trishit <font className="text-sm font-margarine">“Some hearts understand each other even in silence.”</font></p>
            </div>
            <Motion.button
                onClick={onNavigate}
                className="absolute -right-26 bottom-2 text-sm font-bold font-borel text-white bg-pink-600 rounded-xl cursor-pointer outline-offset-4 transition-[filter] duration-[250ms] select-none touch-manipulation border-[none] hover:brightness-[110%] btn">
                <span className="absolute w-full h-full will-change-transform translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl left-0 top-0 bgColor shadows"></span>
                <span className="absolute w-full h-full rounded-xl left-0 top-0 edge"></span>
                <span className="flex gap-1 items-baseline px-3 pt-2 relative front text-[white] will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl">
                     Proceed <FaChevronRight className="transform translate-y-0.5"/>
                </span>
            </Motion.button>
        </Motion.div>
    )
}
