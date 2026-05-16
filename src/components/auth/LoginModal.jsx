import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const LoginModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('login'); // 'login' | 'register'
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { login, register } = useAuth();

  // Reset form when switching views
  const switchView = (newView) => {
    setView(newView);
    setError('');
    setSuccess('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      onClose();
      window.location.href = '/'; // Redirect to home
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validations
    if (!name || !email || !phone || !password || !confirmPassword) {
      return setError('All fields are required');
    }
    if (password.length < 8) {
      return setError('Password must be at least 8 characters');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    if (!termsAccepted) {
      return setError('You must accept the Terms and Conditions');
    }
    
    setIsLoading(true);
    try {
      await register(name, email, phone, password);
      setSuccess('Account created successfully! Please log in.');
      // Switch back to login view but keep email filled
      setTimeout(() => switchView('login'), 2000);
    } catch (err) {
      if (err.message.toLowerCase().includes('already exists') || err.message.toLowerCase().includes('duplicate')) {
        setError('This email is already in use');
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-obsidian-900/60 backdrop-blur-md p-4"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflowY: 'auto'
          }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-md glass-dark rounded-2xl shadow-gold no-scrollbar overflow-x-hidden"
            style={{ 
              backgroundColor: 'rgba(15, 13, 11, 0.98)', 
              backdropFilter: 'blur(24px)', 
              WebkitBackdropFilter: 'blur(24px)',
              position: 'relative',
              margin: 'auto',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => { onClose(); switchView('login'); }}
              className="absolute top-4 right-4 text-ivory-300 hover:text-gold-500 transition-colors z-10"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-gold-700 via-gold-500 to-gold-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(201,162,39,0.35)]">
                  <FaUserCircle size={32} className="text-obsidian-900" />
                </div>
                <h2 className="text-display-md text-ivory-50 font-semibold mb-2">
                  {view === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-caption text-ivory-300">
                  {view === 'login' 
                    ? 'Sign in to access your bespoke itineraries.' 
                    : 'Join us to curate your luxury travel experiences.'}
                </p>
              </div>

              {/* Status Messages */}
              {error && (
                <div className="mb-5 p-3 rounded bg-red-500/10 border border-red-500/50 text-red-400 text-caption text-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 p-3 rounded bg-sage-500/10 border border-sage-500/50 text-sage-500 text-caption text-center">
                  {success}
                </div>
              )}

              {/* LOGIN FORM */}
              {view === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                        placeholder="Enter your password"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-300 hover:text-gold-500 transition-colors"
                      >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-ivory-50/20 bg-transparent text-gold-500 focus:ring-gold-500 focus:ring-offset-obsidian-900 accent-gold-500" />
                      <span className="text-caption text-ivory-300 group-hover:text-ivory-50 transition-colors">Remember me</span>
                    </label>
                    <button type="button" className="text-caption text-gold-500 hover:text-gold-300 transition-colors">
                      Forgot Password?
                    </button>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="gold-glow" 
                      type="submit" 
                      className="w-full relative flex items-center justify-center py-4"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-obsidian-900 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* REGISTER FORM */}
              {view === 'register' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                        placeholder="Min 8 characters"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-300 hover:text-gold-500 transition-colors"
                      >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-caption text-ivory-300 uppercase tracking-wider font-medium">Confirm Password</label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-obsidian-900/50 border border-ivory-50/10 rounded-lg p-3 text-ivory-50 placeholder-ivory-300/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                        placeholder="Confirm your password"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-300 hover:text-gold-500 transition-colors"
                      >
                        {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-4">
                    <input 
                      type="checkbox" 
                      id="terms"
                      required
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded border-ivory-50/20 bg-transparent text-gold-500 focus:ring-gold-500 focus:ring-offset-obsidian-900 accent-gold-500" 
                    />
                    <label htmlFor="terms" className="text-caption text-ivory-300 leading-tight">
                      I agree to the <button type="button" className="text-gold-500 hover:text-gold-300">Terms and Conditions</button> and <button type="button" className="text-gold-500 hover:text-gold-300">Privacy Policy</button>.
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="gold-glow" 
                      type="submit" 
                      className="w-full relative flex items-center justify-center py-4"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-obsidian-900 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* View Toggle */}
              <div className="mt-8 text-center border-t border-ivory-50/10 pt-6">
                {view === 'login' ? (
                  <p className="text-caption text-ivory-300">
                    Don't have an account? <button onClick={() => switchView('register')} className="text-gold-500 hover:text-gold-300 font-medium transition-colors ml-1">Create Account</button>
                  </p>
                ) : (
                  <p className="text-caption text-ivory-300">
                    Already have an account? <button onClick={() => switchView('login')} className="text-gold-500 hover:text-gold-300 font-medium transition-colors ml-1">Sign In</button>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
