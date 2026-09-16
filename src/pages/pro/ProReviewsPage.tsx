import React from 'react';
import { Star } from 'lucide-react';
import { MOCK_REVIEWS, MOCK_PROFESSIONALS } from '../../data/mockData';
import type { Review, ProfessionalProfile } from '../../types';

export const ProReviewsPage: React.FC = () => {
  const pro: ProfessionalProfile = MOCK_PROFESSIONALS[0];
  const reviews: Review[] = MOCK_REVIEWS.filter((r: Review) => r.professionalId === pro.id);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patient Ratings & Reviews</h1>
          <p className="text-slate-600 text-sm mt-1">Feedback and clinical quality ratings submitted by families after home visits</p>
        </div>

        {/* Rating Summary Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-8">
          <div className="text-center border-r border-slate-200 pr-8">
            <span className="text-4xl font-extrabold text-slate-900">{pro.rating}</span>
            <div className="flex justify-center gap-1 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium">Based on {pro.reviewCount} reviews</span>
          </div>

          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-bold text-slate-900">Top Care Qualities Highlighted</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-lg border border-teal-200">
                Punctual Arrival (98%)
              </span>
              <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-lg border border-teal-200">
                Bedside Manners (96%)
              </span>
              <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-lg border border-teal-200">
                Hygiene Standard (100%)
              </span>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((r: Review) => (
            <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 text-sm">{r.clientName}</span>
                <span className="text-xs text-slate-400">{r.createdAt}</span>
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
              <p className="text-slate-600 text-xs leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                {r.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
