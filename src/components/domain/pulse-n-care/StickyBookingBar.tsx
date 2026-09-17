import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';
import { Calendar, PhoneCall, ShieldCheck } from 'lucide-react';

interface StickyBarProps {
  onOpenCallback: () => void;
}

export const StickyBookingBar: React.FC<StickyBarProps> = ({ onOpenCallback }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border-default shadow-lg p-3.5 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <img src="/assets/brand/pulse-n-care/pulse-n-care-mark.svg" alt="" className="w-8 h-8 hidden sm:block" />
          <div>
            <span className="font-extrabold text-text-primary text-sm block leading-tight">
              Pulse n Care • 24×7 Home Nursing
            </span>
            <span className="text-[11px] font-bold text-brand-teal flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" /> Day Care • Night Care • 12h/24h Rotational Shifts
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenCallback}
            leftIcon={<PhoneCall className="w-4 h-4 text-brand-teal" />}
            className="hidden sm:flex font-bold border-border-default text-text-primary text-xs cursor-pointer"
          >
            Talk to Care Team
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/client/booking/wizard?serviceId=srv-nursing-post-op')}
            leftIcon={<Calendar className="w-4 h-4" />}
            className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold px-6 py-2.5 rounded-xl cursor-pointer text-xs shadow-xs"
          >
            Book Home Nursing
          </Button>
        </div>
      </div>
    </div>
  );
};
