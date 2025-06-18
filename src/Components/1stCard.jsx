import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { TypeAnimation } from "react-type-animation";
import WavyText from './WavyText';
import JSConfetti from "js-confetti";

const BirthdayCard = ({onAnimationComplete}) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCake, setShowCake] = useState(true);
    const [showBirthday, setShowBirthday] = useState(false);

    const confetti = new JSConfetti();
    const handleCakeClick = () => {
        setShowConfetti(true);
        confetti.addConfetti().then(() => {})
        setShowCake(false);
        setShowBirthday(true);


        setTimeout(() => {
            setShowConfetti(false);
            onAnimationComplete();
        }, 5000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center p-8">
            {showConfetti && <Confetti />}
            <Motion.div
                className="flex flex-col items-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <AnimatePresence mode="wait">
                    {!showBirthday ? (
                        <Motion.div
                            key="click-text"
                            variants={itemVariants}
                            className="min-h-[60px] flex items-center justify-center"
                        >
                            <TypeAnimation
                                sequence={[
                                    "Click the cake below!",
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={false}
                                repeat={1}
                                className="text-3xl font-bold font-borel text-pink-600 m-0"
                            />
                        </Motion.div>
                    ) : (
                        <div key="birthday-text">
                            <WavyText
                                text="Happy Birthday Ahana! 🎉"
                                repeat={1}
                                replay={true}
                                className=" text-4xl font-bold font-margarine text-pink-600 m-0"
                                delay={0.8}
                                duration={0.1}
                            />
                            <TypeAnimation
                                    sequence={[
                                        "",
                                        3000,
                                        "Scroll down to see my message!",
                                        6000,
                                    ]}
                                    wrapper="span"
                                    cursor={false}
                                    repeat={0}
                                    className="text-2xl font-bold font-borel text-pink-800 m-0 absolute bottom-10 right-10 opacity-30"
                            />
                        </div>
                    )}
                </AnimatePresence>

                {showCake && (
                    <Motion.div
                        className="cursor-pointer text-8xl flex justify-center items-center w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm"
                        onClick={handleCakeClick}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: 0,
                        }}
                    >
                        <Motion.span
                            role="img"
                            aria-label="cake"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            🎂
                        </Motion.span>
                    </Motion.div>
                )}
            </Motion.div>
        </div>
    );
};

export default BirthdayCard;