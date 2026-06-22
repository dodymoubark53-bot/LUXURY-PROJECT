import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaMinus, FaCheckCircle, FaPaperPlane, FaGlobeAmericas, FaUser, FaFileInvoiceDollar, FaCalendarAlt, FaClock } from 'react-icons/fa';

const inputClass = "w-full p-3 rounded-xl outline-none transition-all text-[14px] bg-[rgba(255,252,247,0.04)] text-ivory-50 placeholder:text-[rgba(245,237,214,0.3)] border border-[rgba(201,162,39,0.15)] focus:border-[rgba(201,162,39,0.5)] focus:shadow-[0_0_20px_rgba(201,162,39,0.1)] [color-scheme:dark]";
const labelClass = "block text-caption text-gold-500 font-medium mb-1 text-[12px] uppercase tracking-[1px]";
const counterBtnClass = "w-8 h-8 rounded-full bg-[rgba(255,252,247,0.06)] text-gold-500 flex items-center justify-center hover:bg-gold-500 hover:text-obsidian-900 transition-all duration-200 border border-[rgba(201,162,39,0.15)] hover:border-gold-500";
const tabClass = (active) => `flex-1 py-3 text-[13px] font-semibold uppercase tracking-[2px] transition-all duration-200 ${active ? 'text-gold-500 border-b-2 border-gold-500 bg-[rgba(201,162,39,0.06)]' : 'text-ivory-400 hover:text-ivory-300 border-b-2 border-transparent'}`;

const BookingForm = ({ tourTitle }) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('booking');
  const [status, setStatus] = useState('idle');

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // Booking form state
  const [b, setB] = useState({
    arrivalDate: '', departureDate: '', arrivalTime: '', departureTime: '', language: '',
    adults: 1, children: 0, infants: 0,
    fullName: '', email: '', phone: '',
    invoiceType: 'personal', companyName: '', taxId: '', address: '', city: '', country: '',
    notes: ''
  });
  const [, setPassengerNames] = useState({});

  // Inquiry form state
  const [inq, setInq] = useState({ name: '', email: '', phone: '', language: '', message: '' });

  const updateB = (k, v) => {
    const num = ['adults', 'children', 'infants'];
    setB(p => ({ ...p, [k]: num.includes(k) ? Math.max(0, parseInt(v) || 0) : v }));
  };

  const passengerFields = [
    ...Array.from({ length: b.adults }, (_, i) => ({ type: 'Adult', num: i + 1, key: `adult_${i}` })),
    ...Array.from({ length: b.children }, (_, i) => ({ type: 'Child', num: i + 1, key: `child_${i}` })),
    ...Array.from({ length: b.infants }, (_, i) => ({ type: 'Infant', num: i + 1, key: `infant_${i}` })),
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="bg-obsidian-900 text-ivory-50 rounded-2xl shadow-card border border-[rgba(201,162,39,0.15)] hover:shadow-[0_0_40px_rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.35)] hover:scale-[1.01] transition-all duration-300 overflow-hidden">
      {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-12 px-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(201,162,39,0.3)]">
              <FaCheckCircle className="text-obsidian-900 text-xl" />
            </div>
            <h3 className="text-display-md text-ivory-50 mb-2 font-display">{t('booking.inquirySent', 'Inquiry Sent')}</h3>
            <p className="text-body-sm text-ivory-400">{t('booking.successDesc', 'Our team will contact you within 24 hours.')}</p>
          </div>
        ) : (
          <div>
            {/* Tour Title */}
            <div className="px-5 pt-5 pb-3 border-b border-[rgba(201,162,39,0.1)]">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                  <FaPaperPlane className="text-obsidian-900 text-[10px]" />
                </div>
                <h3 className="text-body-lg text-ivory-50 font-display font-semibold truncate">{t('booking.formTitle', 'Book Your Trip')}</h3>
              </div>
              <p className="text-caption text-ivory-400 truncate pl-9">{tourTitle}</p>
            </div>

            {/* Tabs */}
            <div className="flex px-5 pt-3 pb-0 gap-0">
              <button type="button" onClick={() => setTab('booking')} className={tabClass(tab === 'booking')}>{t('booking.tabBooking', 'Book Trip')}</button>
              <button type="button" onClick={() => setTab('inquiry')} className={tabClass(tab === 'inquiry')}>{t('booking.tabInquiry', 'Inquiry')}</button>
            </div>

            {tab === 'booking' ? (
              <form onSubmit={handleBookingSubmit} className="px-5 py-4 space-y-3.5">
                {/* Dates Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}><FaCalendarAlt className="inline mr-1.5 text-gold-400" size={11} />{t('booking.arrivalDate', 'Arrival Date')}</label>
                    <input type="date" value={b.arrivalDate} min={todayStr} onChange={e => updateB('arrivalDate', e.target.value)} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}><FaCalendarAlt className="inline mr-1.5 text-gold-400" size={11} />{t('booking.departureDate', 'Departure Date')}</label>
                    <input type="date" value={b.departureDate} min={b.arrivalDate || todayStr} onChange={e => updateB('departureDate', e.target.value)} required className={inputClass} />
                  </div>
                </div>

                {/* Times Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}><FaClock className="inline mr-1.5 text-gold-400" size={11} />{t('booking.arrivalTime', 'Arrival Time')}</label>
                    <input type="time" value={b.arrivalTime} onChange={e => updateB('arrivalTime', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}><FaClock className="inline mr-1.5 text-gold-400" size={11} />{t('booking.departureTime', 'Departure Time')}</label>
                    <input type="time" value={b.departureTime} onChange={e => updateB('departureTime', e.target.value)} className={inputClass} />
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className={labelClass}><FaGlobeAmericas className="inline mr-1.5 text-gold-400" size={11} />{t('booking.preferredLanguage', 'Language')}</label>
                  <div className="relative">
                    <select value={b.language} onChange={e => updateB('language', e.target.value)} required className={`${inputClass} appearance-none`}>
                      <option value="" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('booking.selectLanguage', 'Select...')}</option>
                      <option value="es" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.spanish', 'Spanish')}</option>
                      <option value="pt" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.portuguese', 'Portuguese')}</option>
                      <option value="it" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.italian', 'Italian')}</option>
                      <option value="en" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.english', 'English')}</option>
                      <option value="ar" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.arabic', 'Arabic')}</option>
                    </select>
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className={labelClass}><FaUser className="inline mr-1.5 text-gold-400" size={11} />{t('booking.passengers', 'Passengers')}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { k: 'adults', lbl: t('booking.adults', 'Adults'), min: 1 },
                      { k: 'children', lbl: t('booking.children', 'Children'), min: 0 },
                      { k: 'infants', lbl: t('booking.infants', 'Infants'), min: 0 },
                    ].map(({ k, lbl, min }) => (
                      <div key={k} className="bg-[rgba(255,252,247,0.03)] rounded-xl p-2.5 border border-[rgba(201,162,39,0.08)] text-center">
                        <span className="block text-caption text-ivory-400 mb-1.5 text-[11px]">{lbl}</span>
                        <div className="flex items-center justify-center gap-1.5">
                          <button type="button" onClick={() => updateB(k, b[k] - 1)} disabled={b[k] <= min} className={`${counterBtnClass} w-7 h-7 disabled:opacity-30 disabled:cursor-not-allowed`}><FaMinus size={10} /></button>
                          <span className="text-body-lg text-ivory-50 w-6 text-center font-semibold tabular-nums">{b[k]}</span>
                          <button type="button" onClick={() => updateB(k, b[k] + 1)} className={`${counterBtnClass} w-7 h-7`}><FaPlus size={10} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Passenger Names */}
                {passengerFields.length > 0 && (
                  <div className="bg-[rgba(255,252,247,0.02)] rounded-xl p-3 border border-[rgba(201,162,39,0.08)]">
                    <p className="text-caption text-gold-500 font-semibold mb-2 text-[11px] uppercase tracking-[1px]">{t('booking.passengerNames', 'Passenger Names')}</p>
                    <div className="space-y-2">
                      {passengerFields.map(p => (
                        <div key={p.key}>
                          <label className="block text-caption text-ivory-400 text-[11px] mb-0.5">{p.type === 'Adult' ? '👤' : p.type === 'Child' ? '🧒' : '👶'} {t(`booking.${p.type.toLowerCase()}`, p.type)} {p.num}</label>
                          <input type="text" placeholder={`${t('booking.fullNameOf', 'Name')}`} onChange={e => setPassengerNames(prev => ({ ...prev, [p.key]: e.target.value }))} className={`${inputClass} p-2.5 text-[13px]`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact */}
                <div className="space-y-3">
                  <p className={labelClass}><FaUser className="inline mr-1.5 text-gold-400" size={11} />{t('booking.contactInfo', 'Contact')}</p>
                  <input type="text" placeholder={t('booking.fullName', 'Full Name')} value={b.fullName} onChange={e => updateB('fullName', e.target.value)} required className={inputClass} />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="email" placeholder={t('booking.email', 'Email')} value={b.email} onChange={e => updateB('email', e.target.value)} required className={inputClass} />
                    <input type="tel" placeholder={t('booking.phone', 'Phone')} value={b.phone} onChange={e => updateB('phone', e.target.value)} required className={inputClass} />
                  </div>
                </div>

                {/* Billing (collapsible) */}
                <div>
                  <button type="button" onClick={() => updateB('_showBilling', !b._showBilling)} className={`${labelClass} w-full text-left flex items-center justify-between ${b._showBilling ? 'text-gold-500' : ''}`}>
                    <span><FaFileInvoiceDollar className="inline mr-1.5 text-gold-400" size={11} />{t('booking.billingInfo', 'Billing')}</span>
                    <span className="text-[10px]">{b._showBilling ? '▲' : '▼'}</span>
                  </button>
                  {b._showBilling && (
                    <div className="mt-3 space-y-3 bg-[rgba(255,252,247,0.02)] rounded-xl p-3 border border-[rgba(201,162,39,0.08)]">
                      <select value={b.invoiceType} onChange={e => updateB('invoiceType', e.target.value)} className={`${inputClass} appearance-none`}>
                        <option value="personal">{t('booking.personal', 'Personal')}</option>
                        <option value="company">{t('booking.company', 'Company')}</option>
                      </select>
                      {b.invoiceType === 'company' && (
                        <>
                          <input type="text" placeholder={t('booking.companyName', 'Company Name')} value={b.companyName} onChange={e => updateB('companyName', e.target.value)} className={inputClass} />
                          <input type="text" placeholder={t('booking.taxId', 'Tax ID')} value={b.taxId} onChange={e => updateB('taxId', e.target.value)} className={inputClass} />
                        </>
                      )}
                      <input type="text" placeholder={t('booking.address', 'Address')} value={b.address} onChange={e => updateB('address', e.target.value)} className={inputClass} />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder={t('booking.city', 'City')} value={b.city} onChange={e => updateB('city', e.target.value)} className={inputClass} />
                        <input type="text" placeholder={t('booking.country', 'Country')} value={b.country} onChange={e => updateB('country', e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Notes */}
                <textarea placeholder={t('booking.notesPlaceholder', 'Special requests...')} value={b.notes} onChange={e => updateB('notes', e.target.value)} rows="2" className={`${inputClass} resize-none`} />

                {/* Submit */}
                <button type="submit" disabled={status === 'submitting'} className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-700 text-obsidian-900 font-bold rounded-xl shadow-[0_0_25px_rgba(201,162,39,0.2)] hover:shadow-[0_0_35px_rgba(201,162,39,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[13px] uppercase tracking-[1.5px] flex items-center justify-center gap-2">
                  {status === 'submitting' ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-obsidian-900 border-t-transparent rounded-full animate-spin" />{t('common.sending', 'Sending...')}</span> : <><FaPaperPlane size={12} />{t('booking.sendInquiry', 'Book Now')}</>}
                </button>
              </form>
            ) : (
              <form onSubmit={handleInquirySubmit} className="px-5 py-4 space-y-3.5">
                <p className="text-body-sm text-ivory-400">{t('booking.inquiryFormDesc', 'Have a question? Send us a message and we\'ll get back to you.')}</p>
                <div>
                  <label className={labelClass}>{t('booking.fullName', 'Full Name')}</label>
                  <input type="text" value={inq.name} onChange={e => setInq(p => ({ ...p, name: e.target.value }))} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('booking.email', 'Email')}</label>
                  <input type="email" value={inq.email} onChange={e => setInq(p => ({ ...p, email: e.target.value }))} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('booking.phone', 'Phone')}</label>
                  <input type="tel" value={inq.phone} onChange={e => setInq(p => ({ ...p, phone: e.target.value }))} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}><FaGlobeAmericas className="inline mr-1.5 text-gold-400" size={11} />{t('booking.preferredLanguage', 'Language')}</label>
                  <div className="relative">
                    <select value={inq.language} onChange={e => setInq(p => ({ ...p, language: e.target.value }))} className={`${inputClass} appearance-none`}>
                      <option value="" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('booking.selectLanguage', 'Select...')}</option>
                      <option value="es" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.spanish', 'Spanish')}</option>
                      <option value="pt" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.portuguese', 'Portuguese')}</option>
                      <option value="it" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.italian', 'Italian')}</option>
                      <option value="en" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.english', 'English')}</option>
                      <option value="ar" style={{ color: '#1a1a2e', background: '#f5edd6' }}>{t('languages.arabic', 'Arabic')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('booking.specialRequests', 'Message')}</label>
                  <textarea placeholder={t('booking.inquiryPlaceholder', 'Your message...')} value={inq.message} onChange={e => setInq(p => ({ ...p, message: e.target.value }))} rows="4" className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={status === 'submitting'} className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-700 text-obsidian-900 font-bold rounded-xl shadow-[0_0_25px_rgba(201,162,39,0.2)] hover:shadow-[0_0_35px_rgba(201,162,39,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[13px] uppercase tracking-[1.5px] flex items-center justify-center gap-2">
                  {status === 'submitting' ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-obsidian-900 border-t-transparent rounded-full animate-spin" />{t('common.sending', 'Sending...')}</span> : <><FaPaperPlane size={12} />{t('booking.sendInquiry', 'Book Now')}</>}
                </button>
              </form>
            )}
          </div>
        )}
    </div>
  );
};

export default BookingForm;
