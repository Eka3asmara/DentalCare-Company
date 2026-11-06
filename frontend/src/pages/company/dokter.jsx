import React from 'react';
import { ArrowRightIcon } from '../../components/Icons';

// Local Image Assets
import imgIndira from '../../assets/image/dokter-indira-background.webp';
import imgMan from '../../assets/image/avatar-blank-man.webp';
import imgWoman from '../../assets/image/avatar-blank-woman.webp';

export const DOCTORS_DATA = [
  {
    id: "drg-indira",
    name: "drg. Indira Nugrahani",
    role: "Dokter Gigi Umum",
    image: imgIndira,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "15.00 - 21.00", status: "Praktik" },
      { day: "Selasa", time: "09.00 - 21.00", status: "Praktik" },
      { day: "Kamis", time: "15.00 - 21.00", status: "Praktik" },
      { day: "Jumat", time: "15.00 - 21.00", status: "Praktik" },
      { day: "Sabtu", time: "09.00 - 21.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "15.00 - 21.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 21.00", status: "Praktik" }
    ]
  },
  {
    id: "drg-mhay",
    name: "drg. Mhay Chyntha Hariyana",
    role: "Dokter Gigi Umum",
    image: imgWoman,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "09.00 - 15.00", status: "Praktik" },
      { day: "Kamis", time: "09.00 - 15.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Selasa", time: "09.00 - 21.00", status: "Praktik" },
      { day: "Rabu", time: "09.00 - 15.00", status: "Praktik" }
    ]
  },
  {
    id: "drg-larena",
    name: "drg. Larena",
    role: "Dokter Gigi Umum",
    image: imgWoman,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Jumat", time: "09.00 - 15.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 21.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Sabtu", time: "09.00 - 15.00", status: "Praktik" }
    ]
  },
  {
    id: "drg-fara",
    name: "drg. Fara",
    role: "Dokter Gigi Umum",
    image: imgWoman,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Rabu", time: "09.00 - 21.00", status: "Praktik" }
    ],
    schedulesBranch2: []
  },
  {
    id: "drg-sarah",
    name: "drg. Sarah",
    role: "Dokter Gigi Umum",
    image: imgWoman,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [],
    schedulesBranch2: [
      { day: "Senin", time: "09.00 - 15.00", status: "Praktik" },
      { day: "Kamis", time: "09.00 - 21.00", status: "Praktik" }
    ]
  },
  {
    id: "drg-sherly",
    name: "drg. Sherly",
    role: "Dokter Gigi Umum",
    image: imgWoman,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [],
    schedulesBranch2: [
      { day: "Jumat", time: "09.00 - 21.00", status: "Praktik" },
      { day: "Sabtu", time: "15.00 - 21.00", status: "Praktik" }
    ]
  },
  {
    id: "drg-adria",
    name: "drg. Adria Permana Putra, Sp.BM",
    role: "Dokter Gigi Spesialis Bedah Mulut",
    image: imgMan,
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [],
    schedulesBranch2: []
  }
];

export default function Dokter({ onSelectDoctor }) {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-20 bg-[#f9f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HEADER SECTION: Title & Description                       */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#49baff] tracking-tight mb-2 sm:mb-4">
            Kenali Tim Dokter Kami
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#333333]/85 leading-relaxed max-w-2xl mx-auto">
            Berkenalan dengan tim dokter yang siap memberikan perawatan gigi dan mulut dengan profesionalisme serta kepedulian terhadap setiap pasien.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DOCTORS GRID: 7 Dokter (4 Kolom di Desktop)                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group"
            >
              {/* Doctor Photo Container */}
              <div className="h-56 sm:h-64 lg:h-72 w-full bg-slate-100 relative overflow-hidden flex items-center justify-center text-center">
                <img
                  src={doctor.image || ""}
                  alt={doctor.name}
                  className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Doctor Details Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Role Badge with Lime Border per Figma */}
                  <div className="inline-block border border-[#adc91f] text-[#adc91f] bg-[#e5ff8f]/20 text-[10px] sm:text-[11px] font-medium px-2 sm:px-3 py-0.5 rounded-full mb-2 sm:mb-3">
                    {`${doctor.role}`}
                  </div>

                  {/* Doctor Name */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#333333] mb-3 sm:mb-4 min-h-[28px] sm:min-h-[44px] flex items-center leading-snug">
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
                  className="w-full py-2.5 sm:py-3.5 px-4 bg-[#49baff] hover:bg-[#98cfff] hover:text-[#49baff] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Info Lengkap</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
