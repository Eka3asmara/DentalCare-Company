import React from 'react';
import { SERVICES_PAGE_DATA } from '../../data/dentalData';
import { ArrowRightIcon } from '../../components/Icons';

export default function Layanan({ onSelectService }) {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#f9f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER SECTION: Eyebrow, Title & Description              */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#49baff] tracking-normal mb-2 block">
            Layanan Yang Kami Sediakan
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] tracking-tight mb-4">
            Solusi Perawatan Gigi untuk Setiap Kebutuhan
          </h1>
          <p className="text-xs sm:text-sm text-[#333333]/85 leading-relaxed max-w-2xl mx-auto">
            Jelajahi berbagai layanan perawatan gigi yang kami sediakan, mulai dari perawatan gigi umum hingga perawatan untuk memperbaiki dan menjaga kondisi gigi. Temukan layanan yang sesuai dengan kebutuhan Anda untuk membantu menjaga kesehatan gigi Anda.
          </p>
        </div>

        {/* ========================================================= */}
        {/* SERVICES GRID: 7 Kartu Layanan                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_PAGE_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group"
            >
              {/* Card Image */}
              <div className="h-52 sm:h-56 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#333333]/90 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Lihat Detail Button -> Menuju ke Halaman Detail Layanan */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.id);
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-[#49baff] hover:bg-[#98cfff] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
