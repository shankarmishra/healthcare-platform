import React, { useState } from 'react';
import { Star, CheckCircle, X } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface ClientReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  proName: string;
  serviceName: string;
  onSubmitSuccess?: () => void;
}

export const ClientReviewModal: React.FC<ClientReviewModalProps> = ({
  isOpen,
  onClose,
  bookingId,
  proName,
  serviceName,
  onSubmitSuccess
}) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>(['Punctual', 'Gentle Care']);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const availableTags = [
    'Punctual', 'Gentle Care', 'Clinical Skill', 'Polite', 'Clean & Hygienic', 'Patient Listener'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSubmitSuccess) onSubmitSuccess();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
            <p className="text-xs text-slate-600">Your feedback helps maintain healthcare excellence on our platform.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">Completed Visit Review</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Rate Care by {proName}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Booking #{bookingId} • {serviceName}</p>
            </div>

            {/* Star Picker */}
            <div className="flex flex-col items-center py-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-700 mt-2">
                {rating === 5 ? 'Excellent Care' : rating === 4 ? 'Very Good' : rating === 3 ? 'Satisfactory' : 'Needs Improvement'}
              </span>
            </div>

            {/* Care Highlights */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Care Highlights</label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      selectedTags.includes(tag)
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Clinical Feedback</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                placeholder="Share specifics about how the nurse/carer handled hygiene, bedside manners, and medical instructions..."
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl cursor-pointer">
              Submit Review
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
