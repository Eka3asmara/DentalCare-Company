import { useEffect } from 'react';
import { WhatsAppIcon } from './Icons';

/**
 * TreatmentModal - Modal Pop Up Rincian Jenis Perawatan & Tabel Harga
 */
export default function TreatmentModal({ isOpen, onClose, treatment }) {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !treatment) return null;

  // Determine headers and column layout
  const headers = treatment.headers || (treatment.pricing?.[0]?.origin || treatment.pricing?.[0]?.type || treatment.pricing?.[0]?.material || treatment.pricing?.[0]?.scope
    ? ['Jenis', 'Keterangan', 'Harga']
    : ['Jenis Perawatan', 'Harga']);

  const isThreeColumns = headers.length >= 3;

  const renderBadge = (row) => {
    const value = row.origin || row.type || row.material || row.scope || row.keterangan || row.sub;
    if (!value) return null;

    const valLower = String(value).toLowerCase();
    let badgeText = String(value);
    let colorClass = 'bg-[#49baff]/15 text-[#0284c7] border border-[#49baff]/30';

    if (valLower.includes('china')) {
      colorClass = 'bg-[#a2c416] text-white shadow-2xs';
      badgeText = value.startsWith('Made in') ? value : `Made in ${value}`;
    } else if (valLower.includes('usa')) {
      colorClass = 'bg-[#49baff] text-white shadow-2xs';
      badgeText = value.startsWith('Made in') ? value : `Made in ${value}`;
    } else if (valLower.includes('korea') || valLower.includes('italy')) {
      colorClass = 'bg-[#49baff] text-white shadow-2xs';
    } else if (valLower === 'metal') {
      colorClass = 'bg-slate-100 text-slate-700 border border-slate-300';
    } else if (valLower === 'clear') {
      colorClass = 'bg-sky-50 text-sky-700 border border-sky-200';
    } else if (valLower.includes('porcelain') || valLower.includes('zirconia') || valLower.includes('e-max') || valLower.includes('pfm')) {
      colorClass = 'bg-purple-50 text-purple-700 border border-purple-200';
    } else if (valLower.includes('composite')) {
      colorClass = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
    } else if (valLower.includes('1 rahang')) {
      colorClass = 'bg-[#a2c416]/20 text-[#647c0b] border border-[#a2c416]/40 font-semibold';
    }

    return (
      <span className={`inline-block px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-wide ${colorClass}`}>
        {badgeText}
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      {/* Modal Container — flex column, no overflow on outer shell */}
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl transition-all transform scale-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Non-scrolling header: close button + hero image */}
        <div className="relative shrink-0">
          {/* Floating Close Button — always visible, never scrolls */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Tutup Popup"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 1. Header Image */}
          <div className="w-full h-52 sm:h-64 md:h-72 overflow-hidden bg-slate-100 rounded-t-3xl flex items-center justify-center text-center">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover object-center text-xs sm:text-sm text-gray-500 font-medium"
            />
          </div>
        </div>

        {/* 2. Scrollable Modal Body Content — only this area scrolls */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">

          {/* Title */}
          <h2
            id="modal-treatment-title"
            className="text-2xl sm:text-3xl font-semibold text-[#49baff] mb-4 tracking-tight"
          >
            {treatment.title}
          </h2>

          {/* Paragraph 1 */}
          {treatment.desc1 && (
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-4">
              {treatment.desc1}
            </p>
          )}

          {/* Paragraph 2 */}
          {treatment.desc2 && (
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-6">
              {treatment.desc2}
            </p>
          )}

          {/* Subtitle: Daftar Jenis dan Harga */}
          <h3 className="text-lg sm:text-xl font-semibold text-[#49baff] mb-4">
            Daftar Jenis dan Harga
          </h3>

          {/* Table Container with Rounded Borders */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 shadow-2xs">
            {/* Table Header */}
            {isThreeColumns ? (
              <div className="grid grid-cols-12 px-4 sm:px-6 py-3.5 border-b border-slate-200 text-xs sm:text-sm font-bold text-[#333333] bg-slate-50/70">
                <div className="col-span-5 text-left">{headers[0]}</div>
                <div className="col-span-3 text-center">{headers[1]}</div>
                <div className="col-span-4 text-right">{headers[2]}</div>
              </div>
            ) : (
              <div className="grid grid-cols-12 px-4 sm:px-6 py-3.5 border-b border-slate-200 text-xs sm:text-sm font-bold text-[#333333] bg-slate-50/70">
                <div className="col-span-7 text-left">{headers[0]}</div>
                <div className="col-span-5 text-right">{headers[1]}</div>
              </div>
            )}

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {treatment.pricing && treatment.pricing.map((row, idx) => {
                if (isThreeColumns) {
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-12 px-4 sm:px-6 py-3.5 items-center text-xs sm:text-sm hover:bg-slate-50/60 transition-colors"
                    >
                      {/* Column 1: Jenis */}
                      <div className="col-span-5 font-medium text-[#333333]">
                        {row.name}
                      </div>

                      {/* Column 2: Badge (Negara Asal / Tipe / Bahan / Cakupan) */}
                      <div className="col-span-3 flex justify-center text-center">
                        {renderBadge(row)}
                      </div>

                      {/* Column 3: Harga */}
                      <div className="col-span-4 text-right font-semibold text-[#333333]">
                        {row.price}
                      </div>
                    </div>
                  );
                }

                // Two columns layout
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-12 px-4 sm:px-6 py-3.5 items-center text-xs sm:text-sm hover:bg-slate-50/60 transition-colors"
                  >
                    {/* Column 1: Item Name / Tingkat / Ukuran */}
                    <div className="col-span-7 font-medium text-[#333333]">
                      {row.name}
                    </div>

                    {/* Column 2: Harga */}
                    <div className="col-span-5 text-right font-semibold text-[#333333]">
                      {row.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Note */}
          {treatment.note && (
            <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl text-xs sm:text-sm text-amber-900 font-medium flex items-start gap-2 mb-6">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{treatment.note}</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
