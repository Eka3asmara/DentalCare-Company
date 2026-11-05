import { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import TreatmentModal from '../../components/TreatmentModal';

import imgGigiRusakParah from '../../assets/image/Gigi-Rusak-Parah.jpg';
import imgGigiPatahHinggaAkar from '../../assets/image/Gigi-Patah-hingga-Akar.jpg';
import imgGigiGoyang from '../../assets/image/Gigi-Goyang.jpg';
import imgGigiSusu from '../../assets/image/gigi-susu.jpg';
import imgGigiAnkilosis from '../../assets/image/Gigi-Ankilosis.jpg';

import imgCabutGigi from '../../assets/image/cabut-dewasa.jpg';
import imgCabutGigiSusu from '../../assets/image/cabut-anak.jpg';
import imgImpaksiGigi from '../../assets/image/cabut-bungsu.jpg';
import imgKontrolPasca from '../../assets/image/setelah-cabut.jpg';

export const CONDITIONS = [
  {
    id: 1,
    title: "Gigi Rusak Parah",
    image: imgGigiRusakParah
  },
  {
    id: 2,
    title: "Gigi Patah Hingga Akar",
    image: imgGigiPatahHinggaAkar
  },
  {
    id: 3,
    title: "Gigi Goyang",
    image: imgGigiGoyang
  },
  {
    id: 4,
    title: "Gigi Susu",
    image: imgGigiSusu
  },
  {
    id: 5,
    title: "Gigi Ankilosis",
    image: imgGigiAnkilosis
  }
];

export const TREATMENT_TYPES = [
  {
    id: "cabut-dewasa",
    title: "Cabut Gigi Dewasa",
    image: imgCabutGigi
  },
  {
    id: "cabut-susu",
    title: "Cabut Gigi Susu",
    image: imgCabutGigiSusu
  },
  {
    id: "odontectomy",
    title: "Cabut Gigi Bungsu",
    image: imgImpaksiGigi
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "cabut-dewasa": {
    id: "cabut-dewasa",
    title: "Cabut Gigi Dewasa",
    image: imgCabutGigi,
    desc1: "Pencabutan gigi dewasa dilakukan pada gigi permanen yang mengalami kerusakan berat, berlubang parah tak tertolong, atau patah hingga di bawah gusi.",
    desc2: "Ditangani secara profesional dan higienis dengan anestesi lokal untuk memastikan tindakan berlangsung nyaman dan minim rasa sakit.",
    headers: ["Jenis Pencabutan", "Harga"],
    pricing: [
      { name: "Cabut Gigi Biasa", price: "Rp400.000–Rp600.000" },
      { name: "Cabut Gigi Komplikasi", price: "Rp750.000–Rp1.500.000" }
    ]
  },
  "cabut-susu": {
    id: "cabut-susu",
    title: "Cabut Gigi Susu",
    image: imgCabutGigi,
    desc1: "Pencabutan gigi susu pada anak-anak dilakukan untuk membantu pergantian gigi alami agar gigi permanen pengganti dapat tumbuh lurus dan rapi.",
    desc2: "Diterapkan pendekatan ramah anak dengan pilihan anestesi topikal atau lokal untuk pengalaman perawatan yang tenang dan menyenangkan bagi si kecil.",
    headers: ["Jenis Pencabutan", "Harga"],
    pricing: [
      { name: "Cabut Gigi Susu", price: "Rp350.000–Rp400.000" },
      { name: "Cabut Gigi Susu dengan Anestesi", price: "Rp400.000–Rp450.000" }
    ]
  },
  "odontectomy": {
    id: "odontectomy",
    title: "Pencabutan Gigi Bungsu (Odontectomy)",
    image: imgImpaksiGigi,
    desc1: "Odontectomy adalah prosedur bedah minor untuk mencabut gigi geraham ketiga (gigi bungsu) yang mengalami impaksi, tumbuh miring, atau terpendam sebagian dalam gusi/tulang rahang.",
    desc2: "Tindakan ini menghilangkan rasa sakit berulang, mencegah peradangan jaringan sekitar, dan melindungi susunan gigi lainnya dari dorongan tidak teratur.",
    headers: ["Lokasi Gigi", "Harga"],
    pricing: [
      { name: "Gigi Bungsu Atas", price: "Rp1.500.000–Rp2.500.000" },
      { name: "Gigi Bungsu Bawah", price: "Rp3.500.000–Rp4.500.000" }
    ]
  }
};

export default function DetailLayananCabutGigi({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    return SERVICES_PAGE_DATA.filter((s) => s.id !== 'pencabutan-gigi').slice(0, 3);
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
      <section className="bg-[#e5ff8f] py-14 lg:py-18 text-center border-b border-[#adc91f]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#93ab19] mb-4 tracking-tight">
            Pencabutan Gigi
          </h1>
          <p className="text-xs sm:text-sm md:text-[16px] text-[#333333]/90 leading-relaxed max-w-5xl mx-auto">
            Tindakan pencabutan gigi yang dilakukan berdasarkan kondisi gigi, tingkat kesulitan, dan kebutuhan perawatan pasien.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Kondisi Gigi Yang Membutuhkan Tindakan Pencabutan
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
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4 w-full flex-1 flex items-center justify-center min-h-[56px] sm:min-h-[64px]">
                  <h3 className="text-xs sm:text-base font-semibold text-[#49baff] leading-snug break-words text-center">
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
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100 flex items-center justify-center text-center">
                <img
                  src={imgCabutGigi}
                  alt="Manfaat Pencabutan Gigi"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-6">
                Manfaat Tindakan Pencabutan Gigi
              </h2>

              <div className="space-y-4">
                {[
                  "Menghilangkan sumber infeksi dan rasa sakit berulang.",
                  "Mencegah kerusakan menyebar ke gigi sehat di sekitarnya.",
                  "Membantu memberi ruang pada perawatan ortodonti (behel).",
                  "Mencegah komplikasi gigi geraham bungsu yang terpendam.",
                  "Mempermudah persiapan pemasangan gigi tiruan atau implan."
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
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Pilihan Tindakan Pencabutan Gigi
          </h2>

          {/* 3 Cards Grid — klik untuk buka popup rincian & harga */}
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 sm:gap-6">
            {TREATMENT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleOpenModal(type.id)}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#49baff]/40 group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#49baff]/50"
                aria-label={`Lihat detail dan harga ${type.title}`}
              >
                <div className="h-40 sm:h-48 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 w-full">
                  <h3 className="text-sm sm:text-base font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors text-center">
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
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Post-treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src={imgKontrolPasca}
                  alt="Panduan Pasca Pencabutan Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
                Perawatan Setelah Pencabutan Gigi
              </h2>
              <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-6">
                Setelah menjalani pencabutan gigi, pasien perlu menjaga area bekas pencabutan agar proses penyembuhan berlangsung dengan baik dan terhindar dari infeksi. Pasien dianjurkan mengikuti instruksi dokter, menjaga kebersihan mulut, serta menghindari aktivitas atau makanan yang dapat mengganggu terbentuknya bekuan darah pada area luka.
              </p>

              <div className="space-y-3.5 mb-7">
                {[
                  "Menggigit kasa steril untuk membantu menghentikan perdarahan.",
                  "Mengonsumsi makanan lunak serta menghindari makanan panas atau keras.",
                  "Melakukan kontrol sesuai anjuran dokter gigi."
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
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
              Rekomendasi Layanan Lainnya Untuk Anda
            </h2>
            <p className="text-xs sm:text-base text-[#333333]/85 leading-relaxed">
              Temukan berbagai pilihan perawatan gigi lainnya yang sesuai dengan kebutuhan Anda untuk menjaga kesehatan gigi dan menciptakan senyum yang lebih percaya diri.
            </p>
          </div>

          {/* 3 Recommended Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
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
                  <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#49baff] mb-2 group-hover:text-[#2ca4ee] transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-[#333333]/90 leading-relaxed">
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
