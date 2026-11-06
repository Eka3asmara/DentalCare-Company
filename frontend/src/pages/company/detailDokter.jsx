import React from 'react';
import { DOCTORS_DATA } from './dokter';
import {
  ClockIcon,
  AlertCircleIcon
} from '../../components/Icons';

export default function DetailDokter({ doctorId = 'drg-indira', onNavigate }) {
  // Find doctor by id, fallback to drg. Indira Nugrahani
  const doctor = DOCTORS_DATA.find((d) => d.id === doctorId) || DOCTORS_DATA[0];

  return (
    <div className="w-full bg-[#f9f8ff] py-5 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* BREADCRUMB: Beranda > Dokter > [Nama Dokter]              */}
        {/* ========================================================= */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-gray-500 mb-6 sm:mb-8 lg:mb-10 select-none">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('Beranda')}
            className="hover:text-[#49baff] transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <span>&gt;</span>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('Dokter')}
            className="hover:text-[#49baff] transition-colors cursor-pointer"
          >
            Dokter
          </button>
          <span>&gt;</span>
          <span className="font-semibold text-[#333333]">
            {doctor.name}
          </span>
        </nav>

        {/* ========================================================= */}
        {/* MAIN PROFILE: 2 Kolom (Foto Dokter & Jadwal Praktek)      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-12 items-start mb-7 sm:mb-9">

          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-none aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 card-shadow border border-slate-100 relative flex items-center justify-center text-center">
              <img
                src={doctor.image || ""}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Information, Bio & Schedules */}
          <div className="lg:col-span-7 flex flex-col justify-start">

            {/* Category / Role Badge */}
            <div className="inline-block border border-[#adc91f] text-[#adc91f] bg-[#e5ff8f]/20 text-[10px] sm:text-[11px] md:text-xs font-semibold px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full mb-2 sm:mb-3 self-start">
              {doctor.role}
            </div>

            {/* Doctor Name */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#333333] mb-2.5 sm:mb-3 md:mb-4 tracking-tight leading-snug">
              {doctor.name}
            </h1>

            {/* Doctor Bio / Statement */}
            <p className="text-xs sm:text-sm md:text-base text-[#333333]/90 leading-relaxed mb-5 sm:mb-6 max-w-2xl font-normal">
              {doctor.bio}
            </p>

            {/* Jadwal Praktek Cabang Garuda (Cabang 1) */}
            {doctor.schedulesBranch1 && doctor.schedulesBranch1.length > 0 && (
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#49baff] mb-2 sm:mb-2.5 md:mb-3">
                  Jadwal Praktik Cabang Garuda
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-xl">
                  {doctor.schedulesBranch1.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ece8ff] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 border border-[#0584bc] card-shadow flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="font-bold text-[11px] sm:text-xs md:text-sm text-[#333333]">
                          {item.day}
                        </span>
                        <span className="bg-[#adc91f] text-white text-[9px] sm:text-[10px] md:text-xs font-medium px-2 sm:px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-[13px] text-[#333333]">
                        <ClockIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#333333] shrink-0" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jadwal Praktek Cabang Muchtar Raya (Cabang 2) */}
            {doctor.schedulesBranch2 && doctor.schedulesBranch2.length > 0 && (
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#49baff] mb-2 sm:mb-2.5 md:mb-3">
                  Jadwal Praktik Cabang Muchtar Raya
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-xl">
                  {doctor.schedulesBranch2.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ece8ff] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 border border-[#0584bc] card-shadow flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="font-bold text-[11px] sm:text-xs md:text-sm text-[#333333]">
                          {item.day}
                        </span>
                        <span className="bg-[#adc91f] text-white text-[9px] sm:text-[10px] md:text-xs font-medium px-2 sm:px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-[13px] text-[#333333]">
                        <ClockIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#333333] shrink-0" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* ========================================================= */}
        {/* CATATAN PASIEN BOX (Sesuai Desain Figma)                  */}
        {/* ========================================================= */}
        <div className="rounded-2xl border-2 border-red-600 bg-[#fbb1b1] p-3.5 sm:p-4 md:p-5 flex items-start gap-2.5 sm:gap-3 text-red-900 shadow-sm">
          <AlertCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-800 shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-[#333333]">
            <span className="font-bold text-red-800">Catatan Pasien: </span>
            Jam praktik dapat berubah jika dokter perlu menangani tindakan atau penanganan darurat gigi.
            Mohon hadir 15 menit sebelum jadwal reservasi Anda.
          </p>
        </div>

      </div>
    </div>
  );
}
