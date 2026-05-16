import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../ui/Button';
import { fadeInUp } from '../../animations/variants';

const AdvancedBooking = ({ onClose, tourTitle, basePricePerPerson }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Form State
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: 2,
    children: 0,
    infants: 0,
    email: ''
  });

  // Dynamic guest names
  const [guestNames, setGuestNames] = useState({});

  // Calculate live price
  const totalPrice = basePricePerPerson * (formData.adults + formData.children * 0.75);

  const handleGuestNameChange = (key, value) => {
    setGuestNames(prev => ({ ...prev, [key]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['adults', 'children', 'infants'].includes(name) ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose && onClose();
      }, 3000);
    }, 1500);
  };

  // Generate Guest Fields Array
  const guestFields = [
    ...Array.from({ length: Math.max(0, formData.adults) }, (_, i) => `Adult ${i + 1}`),
    ...Array.from({ length: Math.max(0, formData.children) }, (_, i) => `Child ${i + 1}`),
  ];

  return (
    <div className="relative bg-ivory-50 rounded-2xl p-8 max-w-2xl w-full shadow-card max-h-[90vh] overflow-y-auto no-scrollbar">
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
            <h3 className="text-display-md text-obsidian-900 mb-2">Booking Confirmed</h3>
            <p className="text-body-md text-obsidian-500">
              Your reservation request for {tourTitle} has been received. Our team will contact you to finalize the payment and details.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-display-md text-obsidian-900 mb-1">Advanced Booking</h3>
                <p className="text-caption text-obsidian-500">{tourTitle}</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <span className="block text-caption text-obsidian-500">Total Price</span>
                <span className="text-display-md text-gold-500 text-2xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-caption text-obsidian-700 font-medium">Arrival Date</label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-caption text-obsidian-700 font-medium">Departure Date</label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-caption text-obsidian-700 font-medium">Adults</label>
                <input
                  type="number"
                  name="adults"
                  min="1"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-caption text-obsidian-700 font-medium">Children (2-12)</label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-caption text-obsidian-700 font-medium">Infants (&lt;2)</label>
                <input
                  type="number"
                  name="infants"
                  min="0"
                  value={formData.infants}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-caption text-obsidian-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Where should we send the confirmation?"
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
              />
            </div>

            {guestFields.length > 0 && (
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-caption font-semibold text-obsidian-900 mb-3 uppercase tracking-wide">Guest Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guestFields.map((field, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={`${field} Full Name`}
                      required
                      onChange={(e) => handleGuestNameChange(field, e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold-500 outline-none transition-colors text-body-md"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
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
                className="w-full md:w-auto px-8"
              >
                {status === 'submitting' ? 'Processing...' : 'Confirm Booking'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedBooking;
