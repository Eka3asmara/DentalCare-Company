import React from 'react';
import { DOCTORS_DATA } from './dokter';
import {
  ClockIcon,
  AlertCircleIcon,
  WhatsAppIcon,
  MaleDoctorSilhouette,
  FemaleDoctorSilhouette
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
            <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-[#9ca3af] card-shadow border border-slate-100 relative flex items-end justify-center">
              {doctor.image ? (
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              ) : doctor.gender === 'male' ? (
                <MaleDoctorSilhouette className="w-full h-full object-cover" />
              ) : (
                <FemaleDoctorSilhouette className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          {/* Right Column: Information, Bio & Schedules */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Category / Role Badge */}
            <div className="inline-block border border-[#adc91f] text-[#7c9e10] bg-[#e5ff8f]/20 text-xs font-semibold px-4 py-1 rounded-full mb-3 self-start">
              {doctor.role}
            </div>

            {/* Doctor Name */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] mb-4 tracking-tight leading-snug">
              {doctor.name}
            </h1>

            {/* Doctor Bio / Statement */}
            <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed mb-7 max-w-2xl">
              {doctor.bio}
            </p>

            {/* Jadwal Praktek Cabang 1 */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-[#49baff] mb-3">
                Jadwal Praktek Cabang 1 (Petukangan Selatan)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                {doctor.schedulesBranch1 && doctor.schedulesBranch1.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200 card-shadow flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-[#333333]">
                        {item.day}
                      </span>
                      <span className="bg-[#adc91f] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
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

            {/* Jadwal Praktek Cabang 2 */}
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#49baff] mb-3">
                Jadwal Praktek Cabang 2 (Petukangan Utara)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                {doctor.schedulesBranch2 && doctor.schedulesBranch2.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200 card-shadow flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-[#333333]">
                        {item.day}
                      </span>
                      <span className="bg-[#adc91f] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
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

            {/* WhatsApp Booking Direct Buttons */}
            <div className="mt-4 flex flex-wrap sm:flex-nowrap items-center gap-3 max-w-xl">
              <a
                href={`https://wa.me/628121915709?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%201,%20saya%20ingin%20jadwal%20konsultasi%20dengan%20${encodeURIComponent(doctor.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5 text-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Reservasi Cabang 1</span>
              </a>

              <a
                href={`https://wa.me/628119339708?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%202,%20saya%20ingin%20jadwal%20konsultasi%20dengan%20${encodeURIComponent(doctor.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5 text-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Reservasi Cabang 2</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* CATATAN PASIEN BOX (Sesuai Desain Figma)                  */}
        {/* ========================================================= */}
        <div className="rounded-2xl border border-red-300 bg-[#fef2f2] p-4 sm:p-5 flex items-start gap-3 text-red-900 shadow-sm">
          <AlertCircleIcon className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#333333]">
            <span className="font-bold text-red-700">Catatan Pasien: </span>
            Jam praktik dapat berubah jika dokter perlu menangani tindakan atau penanganan darurat gigi.
            Mohon hadir 15 menit sebelum jadwal reservasi Anda.
          </p>
        </div>

      </div>
    </div>
  );
}
