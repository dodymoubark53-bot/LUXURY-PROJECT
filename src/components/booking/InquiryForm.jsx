import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { fadeInUp } from '../../animations/variants';

const InquiryForm = ({ onClose, tourTitle }) => {
  const { t } = useTranslation();
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
    <div className="relative mx-auto w-full box-border rounded-[20px] bg-[rgba(15,13,11,0.85)] backdrop-blur-[24px] border border-[rgba(201,162,39,0.2)] shadow-[0_0_40px_rgba(201,162,39,0.1)] px-4 py-8 md:p-8 lg:p-10 max-w-full md:max-w-[480px] lg:max-w-[560px]" onClick={(e) => e.stopPropagation()}>
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
            <h3 className="text-display-md text-ivory-50 mb-2 font-display">{t('booking.inquirySent', 'Inquiry Sent')}</h3>
            <p className="text-body-md text-ivory-300">
              {t('booking.inquirySuccessDesc', 'Thank you for your interest in the {{tourTitle}}. Our luxury travel concierges will contact you shortly.', { tourTitle: t(`data.${tourTitle}`, tourTitle) })}
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
            <div className="mb-2 text-center w-full">
              <h3 className="text-display-md text-ivory-50 mb-2 font-display">{t('booking.inquireAboutTour', 'Inquire About This Tour')}</h3>
              <p className="text-caption text-ivory-300">{t('booking.inquiryFormDesc', 'Fill out the details below and we will get back to you with availability and personalized options.')}</p>
            </div>

            <div className="flex flex-col gap-1 text-left w-full">
              <label className="text-caption text-gold-500 font-medium">{t('booking.fullName', 'Full Name')}</label>
              <input 
                type="text" 
                placeholder={t('booking.fullName', 'Full Name')} 
                required
                className="w-full p-4 rounded-lg outline-none transition-all text-[16px] bg-[rgba(255,252,247,0.05)] text-[#F5EDD6] placeholder:text-[rgba(245,237,214,0.4)] border border-[rgba(255,252,247,0.1)] focus:border-[rgba(201,162,39,0.4)] focus:shadow-[0_0_12px_rgba(201,162,39,0.15)]"
              />
            </div>

            <div className="flex flex-col gap-1 text-left w-full">
              <label className="text-caption text-gold-500 font-medium">{t('booking.email', 'Email Address')}</label>
              <input 
                type="email" 
                placeholder={t('booking.email', 'Email Address')} 
                required
                className="w-full p-4 rounded-lg outline-none transition-all text-[16px] bg-[rgba(255,252,247,0.05)] text-[#F5EDD6] placeholder:text-[rgba(245,237,214,0.4)] border border-[rgba(255,252,247,0.1)] focus:border-[rgba(201,162,39,0.4)] focus:shadow-[0_0_12px_rgba(201,162,39,0.15)]"
              />
            </div>

            <div className="flex flex-col gap-1 text-left w-full">
              <label className="text-caption text-gold-500 font-medium">{t('booking.phone', 'Phone Number')}</label>
              <input 
                type="tel" 
                placeholder={t('booking.phone', 'Phone Number')} 
                required
                className="w-full p-4 rounded-lg outline-none transition-all text-[16px] bg-[rgba(255,252,247,0.05)] text-[#F5EDD6] placeholder:text-[rgba(245,237,214,0.4)] border border-[rgba(255,252,247,0.1)] focus:border-[rgba(201,162,39,0.4)] focus:shadow-[0_0_12px_rgba(201,162,39,0.15)]"
              />
            </div>

            <div className="flex flex-col gap-1 text-left w-full">
              <label className="text-caption text-gold-500 font-medium">{t('booking.specialRequirements', 'Special Requirements')}</label>
              <textarea 
                placeholder={t('booking.specialRequirementsPlaceholder', 'Special requirements or notes...')} 
                rows="3"
                className="w-full p-4 rounded-lg outline-none transition-all resize-none text-[16px] bg-[rgba(255,252,247,0.05)] text-[#F5EDD6] placeholder:text-[rgba(245,237,214,0.4)] border border-[rgba(255,252,247,0.1)] focus:border-[rgba(201,162,39,0.4)] focus:shadow-[0_0_12px_rgba(201,162,39,0.15)]"
              ></textarea>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
              <button 
                type="button" 
                onClick={onClose}
                className="w-full md:w-auto px-6 py-3 rounded-full border border-ivory-300/30 text-ivory-300 hover:text-ivory-50 transition-colors text-[16px]"
              >
                {t('common.cancel', 'Cancel')}
              </button>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-8 py-3 bg-gold-500 text-obsidian-900 font-semibold rounded-full shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:scale-105 transition-transform text-[16px]"
              >
                {status === 'submitting' ? t('common.sending', 'Sending...') : t('booking.sendInquiry', 'Send Inquiry')}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
