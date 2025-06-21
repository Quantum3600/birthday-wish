import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import WavyText from './WavyText';
import JSConfetti from "js-confetti";
import unicornImage from '../assets/unic.png';

const GiftCard = () => {
    const [showCake, setShowCake] = useState(true);
    const [showBirthday, setShowBirthday] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const confetti = new JSConfetti();
    const handleBoxClick = () => {
        confetti.addConfetti().then(() => {})
        setShowCake(false);
        setShowBirthday(true);
        setTimeout(() => {
            setShowThankYou(true);
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
                                    "Dont Forget to Take My Gift!",
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={false}
                                repeat={1}
                                className="text-3xl font-bold font-borel text-pink-600 m-0"
                            />
                        </Motion.div>
                    ) : (
                        <div key="birthday-gift">
                            <WavyText
                                text="Its an Unicorn for you! 🦄"
                                repeat={1}
                                replay={true}
                                className=" text-4xl font-bold font-margarine text-pink-600 m-0"
                                delay={0.8}
                                duration={0.1}
                            />
                            <Motion.div
                                className="flex justify-center items-center"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                <img src={unicornImage} alt="Unicorn" className="w-76 h-76 object-contain" />
                            </Motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {showCake && (
                    <Motion.div
                        className="cursor-pointer text-8xl flex justify-center items-center w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm"
                        onClick={handleBoxClick}
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
                            🎁
                        </Motion.span>
                    </Motion.div>
                )}
            </Motion.div>
            <AnimatePresence>
                {showThankYou && (
                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-10 left-0 right-0 text-center"
                    >
                        <span className="text-2xl font-borel font-semibold text-pink-600">
                            Thank you for accepting my gift!<br/> See you soon!💝👋
                        </span>
                    </Motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default GiftCard;