import { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import TreatmentModal from '../../components/TreatmentModal';

import imgDeepCaries from '../../assets/image/Deep-Caries.webp';
import imgPulpitis from '../../assets/image/Pulpitis-Irreversibel.webp';
import imgNekrosisPulpa from '../../assets/image/Nekrosis-Pulpa.webp';
import imgGigiRetak from '../../assets/image/Gigi-Retak.webp';
import imgGigiPatah from '../../assets/image/Gigi-Patah.webp';
import imgPerubahanWarnaGigi from '../../assets/image/Perubahan-Warna-Gigi.webp';

import imgRootCanal from '../../assets/image/root-canal-treatment.webp';
import imgRetreatment from '../../assets/image/Retreatment.webp';
import imgKontrolPasca from '../../assets/image/Setelah-Psa.webp';

export const CONDITIONS = [
  {
    id: 1,
    title: "Gigi Berlubang Dalam",
    image: imgDeepCaries
  },
  {
    id: 2,
    title: "Radang Saraf Gigi",
    image: imgPulpitis
  },
  {
    id: 3,
    title: "Saaraf Gigi Mati",
    image: imgNekrosisPulpa
  },
  {
    id: 4,
    title: "Gigi Retak",
    image: imgGigiRetak
  },
  {
    id: 5,
    title: "Gigi Patah",
    image: imgGigiPatah
  },
  {
    id: 6,
    title: "Perubahan Warna Gigi",
    image: imgPerubahanWarnaGigi
  }
];

export const TREATMENT_TYPES = [
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    image: imgRootCanal
  },
  {
    id: "retreatment",
    title: "Retreatment",
    image: imgRetreatment
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "root-canal-treatment": {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    image: imgRootCanal,
    desc1: "Root Canal Treatment (Perawatan Saluran Akar) adalah perawatan untuk menangani infeksi atau kerusakan pada jaringan pulpa gigi dengan tujuan mempertahankan gigi agar tetap dapat digunakan.",
    desc2: "Prosedur membersihkan saluran pulpa yang terinfeksi bakteri, mensterilkan saluran akar, dan menyegelnya dengan bahan pengisi khusus guna menyelamatkan gigi asli tanpa perlu pencabutan.",
    headers: ["Lokasi Gigi", "Harga"],
    pricing: [
      { name: "Gigi Depan", price: "Rp2.000.000–Rp2.500.000" },
      { name: "Gigi Tengah", price: "Rp3.000.000–Rp3.500.000" },
      { name: "Gigi Belakang", price: "Rp4.000.000–Rp4.500.000" }
    ]
  },
  "retreatment": {
    id: "retreatment",
    title: "Retreatment",
    image: imgRetreatment,
    desc1: "Retreatment merupakan tindakan perawatan saluran akar ulang yang dilakukan pada gigi yang pernah menjalani PSA namun mengalami infeksi kembali atau timbul keluhan baru.",
    desc2: "Tindakan mencakup pelepasan restorasi serta pengisian lama, sterilisasi menyeluruh seluruh saluran akar, dan pengisian kembali secara optimal untuk mencegah ekstraksi.",
    headers: ["Jenis Perawatan", "Harga"],
    pricing: [
      { name: "Retreatment (Perawatan Saluran Akar Ulang)", price: "Rp6.000.000–Rp6.500.000" }
    ]
  }
};

export default function DetailLayananRoot({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    const remaining = SERVICES_PAGE_DATA.filter((s) => s.id !== 'saluran-akar');
    const shuffled = [...remaining];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  }, []);

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
      <section className="bg-[#e5ff8f] py-6 sm:py-10 lg:py-16 text-center border-b border-[#adc91f]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#93ab19] mb-3 sm:mb-4 tracking-tight">
            Perawatan Saluran Akar
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#333333]/90 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
            Perawatan untuk menangani infeksi atau kerusakan pada jaringan pulpa gigi dengan tujuan mempertahankan gigi agar tetap dapat digunakan.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#49baff] text-center mb-4 sm:mb-8 max-w-3xl mx-auto leading-snug">
            Kondisi Gigi Yang Membutuhkan Perawatan Saluran Akar
          </h2>

          {/* 8 Grid Cards (4 Kolom di Desktop, 2 Baris) */}
          <div
            className={
              CONDITIONS.length < 5
                ? `flex flex-wrap justify-center gap-4 sm:gap-6 mx-auto ${CONDITIONS.length === 3
                  ? "max-w-4xl"
                  : CONDITIONS.length === 4
                    ? "max-w-5xl"
                    : "max-w-4xl"
                }`
                : "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            }
          >
            {CONDITIONS.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${CONDITIONS.length === 3
                  ? "w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] max-w-[280px]"
                  : CONDITIONS.length === 4
                    ? "w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] max-w-[280px]"
                    : CONDITIONS.length < 5
                      ? "w-[calc(50%-8px)] sm:w-60 md:w-64 max-w-[280px]"
                      : "w-full"
                  }`}
              >
                <div className="h-24 sm:h-32 md:h-40 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3 w-full flex-1 flex items-center justify-center min-h-[40px] sm:min-h-[56px]">
                  <h3 className="text-[11px] sm:text-sm md:text-base font-semibold text-[#49baff] leading-snug break-words text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: MANFAAT PERAWATAN (2 Kolom)                    */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-10 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* Left: Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100 flex items-center justify-center text-center">
                <img
                  src={imgRootCanal}
                  alt="Manfaat Perawatan Saluran Akar"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-[#333333] mb-3 sm:mb-5">
                Manfaat Perawatan Saluran Akar
              </h2>

              <div className="space-y-4">
                {[
                  "Menghilangkan rasa nyeri gigi yang berdenyut secara permanen.",
                  "Menyelamatkan gigi asli sehingga tidak perlu dicabut atau ompong.",
                  "Mengeliminasi infeksi bakteri pada saraf dan jaringan tulang rahang.",
                  "Mengembalikan kenyamanan saat mengunyah makanan.",
                  "Menjaga susunan dan keseimbangan gigi tetangga di dalam mulut."
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
      {/* SECTION 4: TEMUKAN JENIS / TINDAKAN PERAWATAN             */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#49baff] text-center mb-4 sm:mb-8 max-w-3xl mx-auto leading-snug">
            Jenis Tindakan Perawatan Saluran Akar
          </h2>

          {/* 2 Cards Grid Centered — klik untuk buka popup rincian & harga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-4 sm:gap-6">
            {TREATMENT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleOpenModal(type.id)}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#49baff]/40 group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#49baff]/50"
                aria-label={`Lihat detail dan harga ${type.title}`}
              >
                <div className="h-36 sm:h-44 md:h-48 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4 w-full">
                  <h3 className="text-[11px] sm:text-sm md:text-base font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors text-center">
                    {type.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: PANDUAN / PERAWATAN PASCA TINDAKAN             */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-10 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* Left: Post-treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src={imgKontrolPasca}
                  alt="Perawatan Mahkota Crown Setelah PSA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-[#333333] mb-2 sm:mb-3">
                Perawatan Setelah Perawatan Saluran Akar
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#333333]/90 leading-relaxed mb-3 sm:mb-5">
                Setelah menjalani perawatan saluran akar, pasien perlu melakukan perawatan lanjutan untuk melindungi gigi yang telah dirawat dan mengembalikan fungsi pengunyahannya. Dokter akan mengevaluasi kondisi gigi, melakukan restorasi atau pemasangan crown jika diperlukan, serta menjadwalkan pemeriksaan lanjutan untuk memastikan keberhasilan perawatan.
              </p>

              <div className="space-y-3.5 mb-7">
                {[
                  "Memastikan saluran akar telah dibersihkan dan ditutup dengan baik.",
                  "Melakukan penambalan atau pemasangan crown untuk melindungi gigi.",
                  "Melakukan kontrol berkala untuk memantau hasil perawatan."
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
      {/* SECTION 6: REKOMENDASI LAYANAN LAINNYA                    */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-[#333333] mb-2 sm:mb-3">
              Rekomendasi Layanan Lainnya Untuk Anda
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]/85 leading-relaxed">
              Temukan berbagai pilihan perawatan gigi lainnya yang sesuai dengan kebutuhan Anda untuk menjaga kesehatan gigi dan menciptakan senyum yang lebih percaya diri.
            </p>
          </div>

          {/* 3 Recommended Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {recommendedServices.map((rec) => (
              <div
                key={rec.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(rec.id);
                  } else if (onNavigate) {
                    onNavigate('Layanan');
                  }
                }}
              >
                <div>
                  <div className="h-36 sm:h-44 md:h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#49baff] mb-1 sm:mb-1.5 group-hover:text-[#2ca4ee] transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
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
