import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Feedback from "../Components/Feedback.jsx";
import GiftCard from "../Components/GiftCard.jsx";

function LastPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full h-[100vh] flex justify-center items-center relative">
            <GiftCard/>
            
            {/* Reply button */}
            <Motion.button
                className="fixed bottom-6 right-6 text-lg font-bold font-borel text-white bg-pink-600 rounded-xl cursor-pointer outline-offset-4 transition-[filter] duration-[250ms] select-none touch-manipulation border-[none] hover:brightness-[110%] btn"
                onClick={() => setIsModalOpen(true)}>
                <span className="absolute w-full h-full will-change-transform translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl left-0 top-0 bgColor shadows"></span>
                <span className="absolute w-full h-full rounded-xl left-0 top-0 edge"></span>
                <span className="flex gap-1 items-baseline px-4 pt-3 relative front text-[white] will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl">
                     You can give me reply here! 😃
                </span>
            </Motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <Motion.div
                        className="fixed inset-0 bg-black/50 bg-opacity-20 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <Motion.div
                            className="bg-[#9C56B9] rounded-4xl p-6 max-w-lg w-full m-20 flex flex-col gap-4 shadow-2xl z-50"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <Feedback />
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default LastPage;