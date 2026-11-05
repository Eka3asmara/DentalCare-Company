import React, { useEffect } from 'react';
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl transition-all transform scale-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button (Top-Right over Header Image) */}
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
        <div className="w-full h-52 sm:h-64 md:h-72 overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover object-center flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
          />
        </div>

        {/* 2. Modal Body Content */}
        <div className="p-6 sm:p-8">
          
          {/* Title */}
          <h2
            id="modal-treatment-title"
            className="text-2xl sm:text-3xl font-bold text-[#49baff] mb-4 tracking-tight"
          >
            {treatment.title}
          </h2>

          {/* Paragraph 1 */}
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-4">
            {treatment.desc1}
          </p>

          {/* Paragraph 2 */}
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-6">
            {treatment.desc2}
          </p>

          {/* Subtitle: Daftar Jenis dan Harga */}
          <h3 className="text-lg sm:text-xl font-bold text-[#49baff] mb-4">
            Daftar Jenis dan Harga
          </h3>

          {/* Table Container with Rounded Borders */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-6 shadow-2xs">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-4 sm:px-6 py-3.5 border-b border-slate-200 text-xs sm:text-sm font-bold text-[#333333] bg-white">
              <div className="col-span-4 text-left">Jenis</div>
              <div className="col-span-4 text-center">Produksi</div>
              <div className="col-span-4 text-right">Harga</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {treatment.pricing && treatment.pricing.map((row, idx) => {
                const isChina = row.origin.toLowerCase().includes('china');
                const badgeText = row.origin.startsWith('Made in') ? row.origin : `Made in ${row.origin}`;
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-12 px-4 sm:px-6 py-3.5 items-center text-xs sm:text-sm hover:bg-slate-50/60 transition-colors"
                  >
                    {/* Column 1: Jenis */}
                    <div className="col-span-4 font-medium text-[#333333]">
                      {row.name}
                    </div>

                    {/* Column 2: Produksi (Pill Badge) */}
                    <div className="col-span-4 flex justify-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold text-white tracking-wide shadow-2xs ${
                          isChina ? 'bg-[#a2c416]' : 'bg-[#49baff]'
                        }`}
                      >
                        {badgeText}
                      </span>
                    </div>

                    {/* Column 3: Harga */}
                    <div className="col-span-4 text-right font-medium text-[#333333]">
                      {row.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct CTA Action to WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`https://wa.me/628121915709?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%201,%20saya%20ingin%20tanya%20rincian%20perawatan%20${encodeURIComponent(treatment.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-transform hover:-translate-y-0.5 text-center"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Tanya Dokter Cabang 1</span>
            </a>

            <a
              href={`https://wa.me/628119339708?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%202,%20saya%20ingin%20tanya%20rincian%20perawatan%20${encodeURIComponent(treatment.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-transform hover:-translate-y-0.5 text-center"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Tanya Dokter Cabang 2</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
