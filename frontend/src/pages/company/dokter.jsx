import React from 'react';
import {
  ArrowRightIcon,
  MaleDoctorSilhouette,
  FemaleDoctorSilhouette
} from '../../components/Icons';

export const DOCTORS_DATA = [
  {
    id: "drg-indira",
    name: "drg. Indira Nugrahani",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    education: "Universitas Prof. Dr. Moestopo (Beragama) - Pendiri IN Dental Care",
    focus: "Restorasi Gigi, Perawatan Saluran Akar, Perawatan Estetik & Konsultasi Menyeluruh",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Rabu", time: "15.00 - 20.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 20.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "15.00 - 20.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 20.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Rabu, Minggu", hours: "15.00 - 20.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu, Minggu", hours: "15.00 - 20.00 WIB" }
    ]
  },
  {
    id: "drg-adria",
    name: "drg. Adria Permana Putra, Sp.BM",
    role: "Dokter Gigi Spesialis",
    specialistDetail: "Spesialis Bedah Mulut dan Maksilofasial",
    isSpecialist: true,
    gender: "male",
    image: null,
    education: "Spesialis Bedah Mulut & Maksilofasial",
    focus: "Odontektomi Gigi Bungsu Impaksi, Bedah Minor Gigi & Mulut, Dental Implant, Kista Mulut",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Selasa", time: "16.00 - 20.00", status: "Praktik" },
      { day: "Kamis", time: "16.00 - 20.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Sabtu", time: "13.00 - 18.00", status: "Praktik" },
      { day: "Minggu", time: "13.00 - 17.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Selasa & Kamis", hours: "16.00 - 20.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Sabtu & Minggu", hours: "13.00 - 18.00 WIB" }
    ]
  },
  {
    id: "drg-mhay",
    name: "drg. Mhay Chyntha Hariyana",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Perawatan Saluran Akar (PSA), Penambalan Komposit Nano-hybrid, Scaling Ultrasonik",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "13.00 - 19.00", status: "Praktik" },
      { day: "Kamis", time: "13.00 - 19.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Sabtu", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Senin & Kamis", hours: "13.00 - 19.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu & Sabtu", hours: "10.00 - 16.00 WIB" }
    ]
  },
  {
    id: "drg-larena",
    name: "drg. Larena",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Ortodonti Dasar (Pemasangan Behel), Estetika Senyum, Kontrol Rutin Ortodonti",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Selasa", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Jumat", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Senin", time: "14.00 - 19.00", status: "Praktik" },
      { day: "Kamis", time: "14.00 - 19.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Selasa & Jumat", hours: "10.00 - 16.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Senin & Kamis", hours: "14.00 - 19.00 WIB" }
    ]
  },
  {
    id: "drg-sherly",
    name: "drg. R. Sherly",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Perawatan Gigi Anak (Pediatri), Pencabutan Gigi Susu & Dewasa, Terapi Fluoride",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Rabu", time: "10.00 - 15.00", status: "Praktik" },
      { day: "Sabtu", time: "10.00 - 15.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Selasa", time: "13.00 - 18.00", status: "Praktik" },
      { day: "Jumat", time: "13.00 - 18.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Rabu & Sabtu", hours: "10.00 - 15.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Selasa & Jumat", hours: "13.00 - 18.00 WIB" }
    ]
  },
  {
    id: "drg-fara",
    name: "drg. Fara",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Pemutihan Gigi (Bleaching / Whitening), Pembersihan Karang Gigi, Penambalan Estetik",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "14.00 - 19.00", status: "Praktik" },
      { day: "Rabu", time: "14.00 - 19.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Kamis", time: "11.00 - 17.00", status: "Praktik" },
      { day: "Sabtu", time: "11.00 - 17.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Senin & Rabu", hours: "14.00 - 19.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Kamis & Sabtu", hours: "11.00 - 17.00 WIB" }
    ]
  },
  {
    id: "drg-sarah",
    name: "drg. Sarah",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Restorasi Mahkota (Crown), Penanganan Nyeri Gigi Akut, Perawatan Periodontal Ringan",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Kamis", time: "11.00 - 17.00", status: "Praktik" },
      { day: "Jumat", time: "11.00 - 17.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Minggu", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Kamis & Jumat", hours: "11.00 - 17.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu & Minggu", hours: "10.00 - 16.00 WIB" }
    ]
  }
];

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
          {DOCTORS_DATA.map((doctor) => (
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
