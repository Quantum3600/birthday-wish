import { motion as Motion } from "framer-motion";

const WavyText = ({
    text,
    delay = 0,
    duration = 0.05,
    replay,
    ...props
}) => {
    const letters = Array.from(text);

    const container = {
        hidden: {
            opacity: 0
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    return (
        <Motion.h1
            style={{ display: "flex", overflow: "visible"}}
            variants={container}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            {...props}
        >
            {letters.map((letter, index) => (
                <Motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </Motion.span>
            ))}
        </Motion.h1>
    );
};

export default WavyText;