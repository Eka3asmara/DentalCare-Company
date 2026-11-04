import React, { useState } from 'react';
import { BRANCHES_DATA, TREATMENT_TYPES_MODAL_DATA } from '../../data/dentalData';
import { ArrowRightIcon, WhatsAppIcon } from '../../components/Icons';
import TreatmentModal from '../../components/TreatmentModal';

export const BEHEL_CONDITIONS = [
  {
    id: 1,
    title: "Gigi Berjejal",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Gigi Renggang",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Overbite",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Gigi Tonggos",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Underbite",
    image: "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Gigitan Terbuka",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Gigitan Silang",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Ectopic/Impacted Teeth",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    fallback: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  }
];

export const BRACES_TYPES = [
  {
    id: "behel-konvensional",
    title: "Behel Konvensional",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "behel-semi-konvensional",
    title: "Behel Semi Konvensional",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "behel-self-ligating",
    title: "Behel Self-Ligating",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "invisible-braces",
    title: "Invisible Braces",
    image: "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  }
];

export const RECOMMENDATIONS = [
  {
    id: "gigi-umum",
    title: "Perawatan Gigi Umum",
    desc: "Perawatan untuk membersihkan gigi, mengatasi kerusakan, dan menjaga kesehatan serta estetika senyum Anda.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "saluran-akar",
    title: "Perawatan Saluran Akar",
    desc: "Perawatan untuk mengatasi infeksi atau kerusakan pada bagian dalam gigi agar gigi tetap dapat dipertahankan.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "pencabutan-gigi",
    title: "Pencabutan Gigi",
    desc: "Tindakan pencabutan gigi dewasa, gigi susu, dan gigi bungsu sesuai kondisi serta kebutuhan pasien.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80"
  }
];

export default function DetailLayanan({ onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const handleOpenModal = (treatmentId) => {
    const data = TREATMENT_TYPES_MODAL_DATA[treatmentId];
    if (data) {
      setActiveTreatment(data);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveTreatment(null);
  };

  return (
    <div className="w-full bg-[#f9f8ff]">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO DETAIL LAYANAN (Latar Brand Lime #e5ff8f) */}
      {/* ========================================================= */}
      <section className="bg-[#e5ff8f] py-14 lg:py-18 text-center border-b border-[#adc91f]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#7c9e10] mb-4 tracking-tight">
            Perawatan Behel Gigi
          </h1>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#333333]/90 leading-relaxed max-w-3xl mx-auto">
            Perawatan behel membantu merapikan susunan gigi dan memperbaiki gigitan untuk senyum yang lebih rapi dan sehat.
            Tersedia behel konvensional, semi konvensional, self-ligating, dan invisible braces sesuai kebutuhan gigi Anda.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN BEHEL   */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Berikut Beberapa Kondisi Gigi Yang Umumnya Membutuhkan Perawatan Behel.
          </h2>

          {/* 8 Grid Cards (4 Kolom di Desktop, 2 Baris) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {BEHEL_CONDITIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                </div>
                <div className="p-3 sm:p-4 w-full">
                  <h3 className="text-xs sm:text-sm font-bold text-[#49baff] truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: MANFAAT BEHEL GIGI (2 Kolom)                   */}
      {/* ========================================================= */}
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Patient Ortho Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80"
                  alt="Manfaat Perawatan Behel Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Manfaat Behel Gigi
              </h2>

              <div className="space-y-4">
                {[
                  "Merapikan susunan gigi yang tidak teratur.",
                  "Memperbaiki posisi dan hubungan gigitan gigi.",
                  "Membantu meningkatkan fungsi mengunyah.",
                  "Memudahkan pembersihan gigi dan menjaga kebersihan mulut.",
                  "Meningkatkan kepercayaan diri dengan senyum yang lebih rapi."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#84a116] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: TEMUKAN JENIS BEHEL                            */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Temukan jenis behel yang sesuai dengan kebutuhan dan kondisi gigi Anda.
          </h2>

          {/* 4 Cards Grid — klik untuk buka popup rincian & harga */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {BRACES_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleOpenModal(type.id)}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#49baff]/40 group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#49baff]/50"
                aria-label={`Lihat detail dan harga ${type.title}`}
              >
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-[#49baff]/0 group-hover:bg-[#49baff]/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 text-[#49baff] text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      Lihat Harga
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-4 w-full">
                  <h3 className="text-xs sm:text-sm font-bold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-[10px] text-[#333333]/60 mt-0.5">Klik untuk lihat detail →</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: PERAWATAN RETAINER SETELAH BEHEL               */}
      {/* ========================================================= */}
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Retainer Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=900&q=80"
                  alt="Perawatan Retainer Setelah Behel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Retainer Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-3">
                Perawatan Retainer Setelah Behel
              </h2>
              <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed mb-6">
                Setelah behel dilepas, penggunaan retainer menjadi tahap penting untuk mempertahankan posisi gigi agar tetap rapi
                dan tidak kembali bergeser ke posisi semula. Retainer digunakan sesuai anjuran dokter gigi untuk menjaga
                kestabilan hasil perawatan ortodonti.
              </p>

              <div className="space-y-3.5 mb-7">
                {[
                  "Menjaga posisi gigi tetap rapi.",
                  "Mencegah pergeseran gigi (relapse).",
                  "Mempertahankan hasil perawatan behel."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#84a116] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Consultation via WhatsApp Direct Action */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <a
                  href={`${BRANCHES_DATA.cabang1.waUrl}%20tentang%20konsultasi%20Perawatan%20Behel%20Gigi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow transition-transform hover:-translate-y-0.5 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Konsultasi Behel Cabang 1</span>
                </a>

                <a
                  href={`${BRANCHES_DATA.cabang2.waUrl}%20tentang%20konsultasi%20Perawatan%20Behel%20Gigi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow transition-transform hover:-translate-y-0.5 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Konsultasi Behel Cabang 2</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: REKOMENDASI LAYANAN LAINNYA                    */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-3">
              Rekomendasi Layanan Lainnya Untuk Anda
            </h2>
            <p className="text-xs sm:text-sm text-[#333333]/85 leading-relaxed">
              Temukan berbagai pilihan perawatan gigi lainnya yang sesuai dengan kebutuhan Anda untuk menjaga kesehatan gigi dan menciptakan senyum yang lebih percaya diri.
            </p>
          </div>

          {/* 3 Recommended Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {RECOMMENDATIONS.map((rec) => (
              <div
                key={rec.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                onClick={() => onNavigate && onNavigate('Layanan')}
              >
                <div>
                  <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#49baff] mb-2 group-hover:text-[#2ca4ee] transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#333333]/90 leading-relaxed">
                      {rec.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="text-xs font-semibold text-[#49baff] flex items-center gap-1 group-hover:underline">
                    <span>Lihat Layanan</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TREATMENT MODAL POPUP — Jenis & Harga Perawatan           */}
      {/* ========================================================= */}
      <TreatmentModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        treatment={activeTreatment}
      />

    </div>
  );
}

