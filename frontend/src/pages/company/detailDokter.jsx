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
    <div className="w-full bg-[#f9f8ff] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* BREADCRUMB: Beranda > Dokter > [Nama Dokter]              */}
        {/* ========================================================= */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 select-none">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">

          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 card-shadow border border-slate-100 relative flex items-center justify-center text-center">
              <img
                src={doctor.image || ""}
                alt={doctor.name}
                className="w-full h-full object-cover object-top flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Information, Bio & Schedules */}
          <div className="lg:col-span-7 flex flex-col justify-start">

            {/* Category / Role Badge */}
            <div className="inline-block border border-[#adc91f] text-[#adc91f] bg-[#e5ff8f]/20 text-xs font-medium px-4 py-1 rounded-full mb-3 self-start">
              {doctor.role}
            </div>

            {/* Doctor Name */}
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#333333] mb-4 tracking-tight leading-snug">
              {doctor.name}
            </h1>

            {/* Doctor Bio / Statement */}
            <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-7 max-w-2xl">
              {doctor.bio}
            </p>

            {/* Jadwal Praktek Cabang Garuda (Cabang 1) */}
            {doctor.schedulesBranch1 && doctor.schedulesBranch1.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#49baff] mb-3">
                  Jadwal Praktik Cabang Garuda
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                  {doctor.schedulesBranch1.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ece8ff] rounded-2xl p-4 border border-[#0584bc] card-shadow flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-[#333333]">
                          {item.day}
                        </span>
                        <span className="bg-[#adc91f] text-white text-[10px] font-base px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#333333]">
                        <ClockIcon className="w-4 h-4 text-[#333333] shrink-0" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jadwal Praktek Cabang Muchtar Raya (Cabang 2) */}
            {doctor.schedulesBranch2 && doctor.schedulesBranch2.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#49baff] mb-3">
                  Jadwal Praktik Cabang Muchtar Raya
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                  {doctor.schedulesBranch2.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ece8ff] rounded-2xl p-4 border border-[#0584bc] card-shadow flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-[#333333]">
                          {item.day}
                        </span>
                        <span className="bg-[#adc91f] text-white text-[10px] font-base px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#333333]">
                        <ClockIcon className="w-4 h-4 text-[#333333] shrink-0" />
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
        <div className="rounded-2xl border-2 border-red-600 bg-[#fbb1b1] p-4 sm:p-5 flex items-start gap-3 text-red-900 shadow-sm">
          <AlertCircleIcon className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-[14px] leading-relaxed text-[#333333]">
            <span className="font-bold text-red-800">Catatan Pasien: </span>
            Jam praktik dapat berubah jika dokter perlu menangani tindakan atau penanganan darurat gigi.
            Mohon hadir 15 menit sebelum jadwal reservasi Anda.
          </p>
        </div>

      </div>
    </div>
  );
}
