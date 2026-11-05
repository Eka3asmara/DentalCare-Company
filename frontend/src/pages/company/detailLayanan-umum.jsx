import { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import TreatmentModal from '../../components/TreatmentModal';

import imgKarangGigi from '../../assets/image/Karang-Gigi.jpg';
import imgPlakGigi from '../../assets/image/Plak-Gigi.jpg';
import imgToothStaining from '../../assets/image/Tooth-Staining.jpg';
import imgGigiBerlubang from '../../assets/image/Gigi-Berlubang.jpg';
import imgGigiDepanPatah from '../../assets/image/Gigi-Depan-Patah.jpg';
import imgGigiBerubahBentuk from '../../assets/image/Gigi-Berubah-Bentuk.jpg';
import imgPembesaranGusi from '../../assets/image/Pembesaran-Gusi.jpg';
import imgGusiTumbuhBerlebihan from '../../assets/image/Gusi-Tumbuh-Berlebihan.jpg';

import imgScaling from '../../assets/image/scalling-gigi2.jpg';
import imgAirFlow from '../../assets/image/air-flow.jpg';
import imgTambalGigi from '../../assets/image/tambal-gigi.jpg';
import imgTambalGigiEstetik from '../../assets/image/tambal-gigi-estetik.jpg';
import imgAbsesGigi from '../../assets/image/Abses-Gigi.jpg';
import imgGingivektomi from '../../assets/image/Gingivektomi.jpg';

import imgManfaatScalling from '../../assets/image/scalling-gigi.jpg';
import imgKontrolPasca from '../../assets/image/Kontrol-Pasca-Perawatan.jpg';

export const CONDITIONS = [
  {
    id: 1,
    title: "Karang Gigi",
    image: imgKarangGigi
  },
  {
    id: 2,
    title: "Plak Gigi",
    image: imgPlakGigi
  },
  {
    id: 3,
    title: "Tooth Staining",
    image: imgToothStaining
  },
  {
    id: 4,
    title: "Gigi Berlubang",
    image: imgGigiBerlubang
  },
  {
    id: 5,
    title: "Gigi Depan Patah",
    image: imgGigiDepanPatah
  },
  {
    id: 6,
    title: "Gigi Berubah Bentuk",
    image: imgGigiBerubahBentuk
  },
  {
    id: 7,
    title: "Pembesaran Gusi",
    image: imgPembesaranGusi
  },
  {
    id: 8,
    title: "Gusi Tumbuh Berlebihan",
    image: imgGusiTumbuhBerlebihan
  }
];

export const TREATMENT_TYPES = [
  {
    id: "scaling",
    title: "Scaling Gigi",
    image: imgScaling
  },
  {
    id: "air-flow",
    title: "Air Flow",
    image: imgAirFlow
  },
  {
    id: "tambal-gigi",
    title: "Tambal Gigi",
    image: imgTambalGigi
  },
  {
    id: "tambal-gigi-estetik",
    title: "Tambal Gigi Estetik",
    image: imgTambalGigiEstetik
  },
  {
    id: "abses-gigi-dan-gusi",
    title: "Perawatan Abses Gigi & Gusi",
    image: imgAbsesGigi
  },
  {
    id: "gingivektomi",
    title: "Gingivektomi",
    image: imgGingivektomi
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "scaling": {
    id: "scaling",
    title: "Scaling Gigi",
    image: imgScaling,
    desc1: "Scaling gigi adalah prosedur pembersihan karang gigi (calculus) dan plak yang mengeras di permukaan gigi maupun di bawah garis gusi menggunakan scaler ultrasonik yang aman.",
    desc2: "Perawatan ini efektif mencegah radang gusi (gingivitis), bau mulut, serta dianjurkan dilakukan secara rutin setiap 6 bulan sekali.",
    headers: ["Tingkat Perawatan", "Harga"],
    pricing: [
      { name: "Ringan", price: "Rp350.000" },
      { name: "Sedang", price: "Rp400.000" },
      { name: "Berat", price: "Rp450.000" }
    ]
  },
  "air-flow": {
    id: "air-flow",
    title: "Air Flow",
    image: imgAirFlow,
    desc1: "Air flow adalah metode pembersihan gigi dengan teknologi semprotan kombinasi air bertekanan, udara, dan serbuk pembersih halus.",
    desc2: "Mampu menghilangkan noda membandel akibat kopi, teh, maupun tembakau hingga ke sela-sela gigi terdalam tanpa mengikis enamel gigi.",
    headers: ["Tingkat Perawatan", "Harga"],
    pricing: [
      { name: "Ringan", price: "Rp150.000" },
      { name: "Sedang", price: "Rp250.000" },
      { name: "Berat", price: "Rp350.000" }
    ]
  },
  "tambal-gigi": {
    id: "tambal-gigi",
    title: "Tambal Gigi",
    image: imgTambalGigi,
    desc1: "Penambalan gigi bertujuan untuk membersihkan jaringan gigi yang rusak akibat karies/berlubang dan menutup kembali kavitas tersebut.",
    desc2: "Mengembalikan kekuatan, fungsi kunyah, dan melindungi struktur gigi dari pembusukan yang lebih dalam.",
    headers: ["Ukuran Tambalan", "Harga"],
    pricing: [
      { name: "Kecil", price: "Rp350.000" },
      { name: "Sedang", price: "Rp400.000" },
      { name: "Besar", price: "Rp500.000" }
    ]
  },
  "tambal-gigi-estetik": {
    id: "tambal-gigi-estetik",
    title: "Tambal Gigi Estetik",
    image: imgTambalGigiEstetik,
    desc1: "Tambal gigi estetik menggunakan bahan resin komposit berteknologi nano yang diselaraskan secara presisi dengan warna serta kilau alami gigi.",
    desc2: "Sangat disarankan untuk gigi depan atau gigi yang terlihat saat tersenyum sehingga hasil tambalan tampak alami dan tidak kentara.",
    headers: ["Ukuran Tambalan", "Harga"],
    pricing: [
      { name: "Kecil", price: "Rp450.000" },
      { name: "Sedang", price: "Rp500.000" },
      { name: "Besar", price: "Rp550.000" }
    ]
  },
  "abses-gigi-dan-gusi": {
    id: "abses-gigi-dan-gusi",
    title: "Perawatan Abses Gigi & Gusi",
    image: imgAbsesGigi,
    desc1: "Perawatan abses dilakukan untuk menangani infeksi bakteri yang memicu penumpukan nanah, peradangan akut, serta rasa nyeri pada jaringan gigi maupun gusi.",
    desc2: "Tindakan mencakup pembersihan sumber infeksi, drainase steril, dan medikasi untuk meredakan pembengkakan serta memulihkan jaringan sehat.",
    headers: ["Jenis Perawatan", "Harga"],
    pricing: [
      { name: "Abses Gigi", price: "Rp600.000" },
      { name: "Abses Gusi", price: "Rp450.000–Rp500.000" }
    ]
  },
  "gingivektomi": {
    id: "gingivektomi",
    title: "Gingivektomi",
    image: imgGingivektomi,
    desc1: "Gingivektomi adalah tindakan bedah periodontal minor untuk memotong atau merapikan jaringan gusi yang mengalami pembesaran berlebihan (gingival hyperplasia).",
    desc2: "Membantu memperbaiki kontur gusi, mengatasi gummy smile, serta memudahkan akses pembersihan plak gigi.",
    headers: ["Jenis Perawatan", "Cakupan", "Harga"],
    pricing: [
      { name: "Gingivektomi", scope: "1 Rahang", price: "Rp2.500.000–Rp3.000.000" }
    ]
  }
};

export default function DetailLayananUmum({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    return SERVICES_PAGE_DATA.filter((s) => s.id !== 'gigi-umum').slice(0, 3);
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
            Perawatan Gigi Umum
          </h1>
          <p className="text-xs sm:text-sm md:text-[16px] text-[#333333]/90 leading-relaxed max-w-5xl mx-auto">
            Perawatan untuk menjaga kesehatan gigi dan gusi, membersihkan plak, mengatasi kerusakan gigi, serta menangani kondisi tertentu pada jaringan gigi dan gusi.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Kondisi Gigi Yang Membutuhkan Perawatan Gigi Umum
          </h2>

          {/* 8 Grid Cards (4 Kolom di Desktop, 2 Baris) */}
          <div
            className={
              CONDITIONS.length < 5
                ? `flex flex-wrap justify-center gap-4 sm:gap-6 mx-auto ${
                    CONDITIONS.length === 3
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
                className={`bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${
                  CONDITIONS.length === 3
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
                  src={imgManfaatScalling}
                  alt="Manfaat Perawatan Gigi Umum"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-6">
                Manfaat Perawatan Gigi Umum
              </h2>

              <div className="space-y-4">
                {[
                  "Membantu membersihkan karang gigi dan noda pada gigi.",
                  "Membantu menjaga kesehatan gigi dan gusi.",
                  "Membantu memperbaiki gigi yang berlubang atau rusak.",
                  "Membantu mengembalikan bentuk gigi agar terlihat lebih baik."
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
            Pilihan Tindakan Perawatan Gigi Umum
          </h2>

          {/* 6 Cards Grid (3 Kolom di Desktop) — klik untuk buka popup rincian & harga */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {TREATMENT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleOpenModal(type.id)}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#49baff]/40 group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#49baff]/50"
                aria-label={`Lihat detail dan harga ${type.title}`}
              >
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4 w-full">
                  <h3 className="text-xs sm:text-base font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors text-center">
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
                  alt="Tips Merawat Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
                Perawatan Lanjutan Setelah Tindakan Gigi
              </h2>
              <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-6">
                Setelah melakukan perawatan gigi umum, pasien perlu memperhatikan kondisi gigi dan gusi, serta mengikuti arahan dokter untuk mendukung proses pemulihan. Pemeriksaan lanjutan dilakukan sesuai kebutuhan guna memastikan hasil perawatan tetap optimal.
              </p>

              <div className="space-y-3.5 mb-7">
                {[
                  "Tidak semua tindakan membutuhkan obat atau kontrol lanjutan. Prosedur disesuaikan dengan jenis perawatan, misalnya scaling, penambalan, gingivektomi, maupun penanganan abses."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#84a116] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      !
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
