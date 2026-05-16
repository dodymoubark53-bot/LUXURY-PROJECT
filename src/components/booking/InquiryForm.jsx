import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../ui/Button';
import { fadeInUp } from '../../animations/variants';

const InquiryForm = ({ onClose, tourTitle }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose && onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative bg-ivory-50 rounded-2xl p-8 max-w-md w-full shadow-card">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <FaCheckCircle className="text-gold-500 text-6xl mb-4" />
            </motion.div>
            <h3 className="text-display-md text-obsidian-900 mb-2">Inquiry Sent</h3>
            <p className="text-body-md text-obsidian-500">
              Thank you for your interest in the {tourTitle}. Our luxury travel concierges will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="mb-2">
              <h3 className="text-display-md text-obsidian-900 mb-2">Inquire About This Tour</h3>
              <p className="text-caption text-obsidian-500">Fill out the details below and we will get back to you with availability and personalized options.</p>
            </div>

            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors"
            />
            <textarea 
              placeholder="Special requirements or notes..." 
              rows="3"
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors resize-none"
            ></textarea>
            
            <div className="flex justify-end gap-3 mt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="text-body-md text-obsidian-500 hover:text-obsidian-900 transition-colors px-4"
              >
                Cancel
              </button>
              <Button 
                variant="gold-glow" 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
