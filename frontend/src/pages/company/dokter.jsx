import React from 'react';
import { DOCTORS_FULL_DATA } from '../../data/dentalData';
import {
  ArrowRightIcon,
  MaleDoctorSilhouette,
  FemaleDoctorSilhouette
} from '../../components/Icons';

export default function Dokter({ onSelectDoctor }) {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#f9f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER SECTION: Title & Description                       */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#49baff] tracking-tight mb-4">
            Kenali Tim Dokter Kami
          </h1>
          <p className="text-sm sm:text-base text-[#333333]/85 leading-relaxed max-w-2xl mx-auto">
            Berkenalan dengan tim dokter yang siap memberikan perawatan gigi dan mulut dengan profesionalisme serta kepedulian terhadap setiap pasien.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DOCTORS GRID: 7 Dokter (4 Kolom di Desktop)                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {DOCTORS_FULL_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group"
            >
              {/* Doctor Photo / Silhouette Container */}
              <div className="h-64 sm:h-72 w-full bg-[#9ca3af] relative overflow-hidden flex items-end justify-center">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : doctor.gender === 'male' ? (
                  <MaleDoctorSilhouette className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <FemaleDoctorSilhouette className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>

              {/* Doctor Details Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Role Badge with Lime Border per Figma */}
                  <div className="inline-block border border-[#adc91f] text-[#7c9e10] bg-[#e5ff8f]/20 text-[11px] font-semibold px-3 py-0.5 rounded-full mb-3">
                    {`(${doctor.role})`}
                  </div>

                  {/* Doctor Name */}
                  <h3 className="text-base font-bold text-[#333333] mb-4 min-h-[44px] flex items-center leading-snug">
                    {doctor.name}
                  </h3>
                </div>

                {/* Info Lengkap Button (Navigates to Detail Dokter) */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectDoctor) {
                      onSelectDoctor(doctor.id);
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-[#49baff] hover:bg-[#98cfff] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Info Lengkap</span>
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
