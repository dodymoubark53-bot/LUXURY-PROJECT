
import AdvancedBooking from './AdvancedBooking';

const InquiryForm = ({ onClose, tourTitle }) => {
  return (
    <AdvancedBooking 
      onClose={onClose} 
      tourTitle={tourTitle} 
      initialTab="inquiry" 
    />
  );
};

export default InquiryForm;
