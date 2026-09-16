import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { MOCK_REVIEWS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import type { Review } from '../../types';

export const AdminReviewsPage: React.FC = () => {
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);

  const toggleHide = (id: string) => {
    if (hiddenIds.includes(id)) {
      setHiddenIds(hiddenIds.filter(h => h !== id));
    } else {
      setHiddenIds([...hiddenIds, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patient & Family Reviews Moderation</h1>
        <p className="text-slate-600 text-xs mt-1">Audit written feedback, moderate flag reports, and feature clinical excellence reviews</p>
      </div>

      <div className="space-y-4">
        {MOCK_REVIEWS.map((r: Review) => {
          const isHidden = hiddenIds.includes(r.id);
          return (
            <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-slate-900 text-sm">{r.clientName}</span>
                  <span className="text-xs text-slate-500"> wrote review for pro <strong>{r.professionalId}</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-xs leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                "{r.comment}"
              </p>

              <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                <span className="text-slate-400">Booking: {r.bookingId} • {r.createdAt}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleHide(r.id)}
                  className={`text-xs font-semibold cursor-pointer ${isHidden ? 'text-emerald-700 border-emerald-300' : 'text-rose-600 border-rose-200'}`}
                >
                  {isHidden ? 'Unhide Review' : 'Hide from Public Profile'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
