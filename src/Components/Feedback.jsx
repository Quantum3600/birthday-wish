import React, { useState, useRef } from 'react'; // Import useRef
import { motion as Motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import emailjs

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [isSending, setIsSending] = useState(false); // State to indicate sending
  const form = useRef(null); // Create a ref for the form

  // Replace with your EmailJS credentials
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL; // Your email for receiving messages

  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();
    setSuccessMessage(''); // Clear previous messages
    setErrorMessage('');
    setIsSending(true); // Set sending state to true

    if (!message.trim()) {
      setErrorMessage('Please enter a message before sending.');
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
          serviceId,
          templateId,
          {
            message: message, // Pass the message from state
            to_email: recipientEmail // Your email address
          },
          publicKey
      );

      setSuccessMessage('Thank you for your reply! Have a nice day and see you soon.');
      setMessage(''); // Clear the message input
      // You can add form.current.reset() here if you were using a direct form ref for all inputs,
      // but since `message` is controlled, setting it to '' suffices.

    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false); // Reset sending state
    }
  };

  return (
      <Motion.div
          className="modal shadow-[inset_9.91px_9.91px_13px_#85499D,inset_-9.91px_-9.91px_13px_#B363D5] mx-auto p-8 rounded-2xl">
        <h2 className="text-3xl font-bold font-margarine text-center mb-10 text-pink-200 text-shadow-lg">Type your message here 👇</h2>
        {/* Attach the ref to the form element */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="message" className="block text-pink-300 font-borel mb-2">Message: </label>
            <textarea
                id="message"
                name="message" // Keep the name attribute for potential future use with sendForm, though we're using controlled input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="modal w-full p-5 rounded-xl resize-none text-pink-200 font-borel text-lg outline-0 shadow-[inset_9.91px_9.91px_13px_#85499D,inset_-9.91px_-9.91px_13px_#B363D5]"
                disabled={isSending} // Disable textarea while sending
            />
          </div>
          <button
              type="submit"
              className="relative w-full bg-pink-600 rounded-xl cursor-pointer outline-offset-4 transition-[filter] duration-[250ms] select-none touch-manipulation border-[none] hover:brightness-[110%] btn"
              disabled={isSending} // Disable button while sending
          >
            <span className="absolute w-full h-full will-change-transform translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl left-0 top-0 bgColor shadows"></span>
            <span className="absolute w-full h-full rounded-xl left-0 top-0 edge"></span>
            <span className="flex gap-1 pt-4 px-6 items-baseline justify-center relative front font-bold font-borel text-pink-100 text-shadow-xl will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl">
            {isSending ? 'Sending...' : 'Send Message'} {/* Change button text */}
          </span>
          </button>
          {successMessage && (
              <p className="text-green-400 text-center mt-4">Thank you for your reply! Have a nice day and see you soon.</p>
          )}
          {errorMessage && (
              <p className="text-red-400 text-center mt-4">Failed to send message. Please try again later.</p> // Display error message
          )}
        </form>
      </Motion.div>
  );
};

export default Feedback;