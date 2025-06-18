import React, { useState } from 'react';
import axios from 'axios';
import { motion as Motion } from 'framer-motion';
import {FaChevronRight} from "react-icons/fa";

const Feedback = () => {
  const [formData, setFormData] = useState({
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('/api/send-feedback', formData);
      setSuccessMessage('Thank you for your reply! Have a nice day and see you soon.');
      setFormData({ message: '' });
    } catch (error) {
      console.error('Error sending feedback:', error);
      setSuccessMessage('Sorry, there was an error sending your reply. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Motion.div
        className="modal shadow-[inset_9.91px_9.91px_13px_#85499D,inset_-9.91px_-9.91px_13px_#B363D5] max-w-2xl mx-auto p-8 rounded-2xl">
    <h2 className="text-3xl font-bold font-margarine text-center mb-6 text-pink-200 text-shadow-lg">Type your message here 👇</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="message" className="block text-pink-300 font-borel mb-2">Message: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="modal w-full p-3 rounded-xl resize-none text-pink-200 font-borel text-lg outline-0 shadow-[inset_9.91px_9.91px_13px_#85499D,inset_-9.91px_-9.91px_13px_#B363D5]"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="relative w-full bg-pink-600 rounded-xl cursor-pointer outline-offset-4 transition-[filter] duration-[250ms] select-none touch-manipulation border-[none] hover:brightness-[110%] btn disabled:cursor-not-allowed"
        >
          <span className="absolute w-full h-full will-change-transform translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl left-0 top-0 bgColor shadows"></span>
          <span className="absolute w-full h-full rounded-xl left-0 top-0 edge"></span>
          <span className="flex gap-1 pt-4 px-6 items-baseline justify-center relative front font-bold font-borel text-pink-100 text-shadow-xl will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl">
            {isLoading ? 'Sending...' : 'Send Message'}
          </span>
        </button>
        {successMessage && (
          <p className="text-green-400 text-center mt-4">{successMessage}</p>
        )}
      </form>
    </Motion.div>
  );
};

export default Feedback;