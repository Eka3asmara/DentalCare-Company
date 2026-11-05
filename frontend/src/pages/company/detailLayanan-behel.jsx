import { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import TreatmentModal from '../../components/TreatmentModal';

import imgGigiBerjejal from '../../assets/image/gigi-berjenjal.jpg';
import imgGigiRenggang from '../../assets/image/Gigi-Renggang.jpg';
import imgOverbite from '../../assets/image/Overbite.jpg';
import imgGigiTonggos from '../../assets/image/Gigi-Tonggos.jpg';
import imgGigiCakil from '../../assets/image/Gigi-Cakil.jpg';
import imgGigitanTerbuka from '../../assets/image/Gigitan-Terbuka.jpg';
import imgGigitanSilang from '../../assets/image/Gigitan-Silang.jpg';
import imgImpaksiGigi from '../../assets/image/impaksigigi.jpg';

import imgBehelKonvensional from '../../assets/image/Behel-Konvesional.jpg';
import imgFastbraces from '../../assets/image/fastbraces.jpg';
import imgSelfLigating from '../../assets/image/Behel-Self-Ligating.jpg';
import imgInvisibleBraces from '../../assets/image/retainer.jpg';
import imgPerawatanBehel from '../../assets/image/Perawatan-Behel.png';
import imgRetainer from '../../assets/image/retainer.jpg';

export const BEHEL_CONDITIONS = [
  {
    id: 1,
    title: "Gigi Berjejal",
    image: imgGigiBerjejal,
  },
  {
    id: 2,
    title: "Gigi Renggang",
    image: imgGigiRenggang,
  },
  {
    id: 3,
    title: "Overbite",
    image: imgOverbite,
  },
  {
    id: 4,
    title: "Gigi Tonggos",
    image: imgGigiTonggos,
  },
  {
    id: 5,
    title: "Underbite",
    image: imgGigiCakil,
  },
  {
    id: 6,
    title: "Gigitan Terbuka",
    image: imgGigitanTerbuka,
  },
  {
    id: 7,
    title: "Gigitan Silang",
    image: imgGigitanSilang,
  },
  {
    id: 8,
    title: "Ectopic/Impacted Teeth",
    image: imgImpaksiGigi,
  }
];

export const BRACES_TYPES = [
  {
    id: "behel-konvensional",
    title: "Behel Konvensional",
    image: imgBehelKonvensional
  },
  {
    id: "behel-semi-konvensional",
    title: "Behel Semi Konvensional",
    image: imgFastbraces
  },
  {
    id: "behel-self-ligating",
    title: "Behel Self-Ligating",
    image: imgSelfLigating
  },
  {
    id: "invisible-braces",
    title: "Invisible Braces",
    image: imgInvisibleBraces
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "behel-konvensional": {
    id: "behel-konvensional",
    title: "Behel Konvensional",
    image: imgBehelKonvensional,
    desc1: "Behel konvensional merupakan perawatan ortodonti yang menggunakan bracket dan kawat untuk membantu merapikan susunan gigi serta memperbaiki posisi gigitan secara bertahap. Perawatan ini bertujuan mendukung fungsi pengunyahan dan menciptakan susunan gigi yang harmonis.",
    desc2: "IN Dental Care menyediakan pilihan bracket Metal, Ceramic, Mini Diamond, dan Saphire dari China dan USA. Pasien dapat berkonsultasi untuk memilih material yang paling sesuai dengan kebutuhan dan preferensi estetika.",
    headers: ["Jenis Behel", "Negara Asal", "Harga"],
    pricing: [
      { name: "Metal", origin: "China", price: "Rp1.900.000" },
      { name: "Ceramic", origin: "China", price: "Rp3.600.000" },
      { name: "Metal", origin: "USA", price: "Rp4.000.000" },
      { name: "Mini Diamond", origin: "USA", price: "Rp5.000.000" },
      { name: "Ceramic", origin: "USA", price: "Rp5.500.000" },
      { name: "Saphire", origin: "USA", price: "Rp8.500.000" }
    ]
  },
  "behel-semi-konvensional": {
    id: "behel-semi-konvensional",
    title: "Behel Semi Konvensional",
    image: imgFastbraces,
    desc1: "Behel semi konvensional menggunakan teknologi Fastbraces dengan desain bracket segitiga dan kawat khusus untuk menggerakkan mahkota dan akar gigi secara bersamaan sejak awal perawatan.",
    desc2: "Memberikan proses perataan gigi yang lebih cepat, efisien, serta nyaman bagi pasien yang menginginkan hasil optimal dalam waktu yang lebih singkat.",
    headers: ["Jenis Behel", "Harga"],
    pricing: [
      { name: "Fastbraces", price: "Rp8.000.000" }
    ]
  },
  "behel-self-ligating": {
    id: "behel-self-ligating",
    title: "Behel Self-Ligating",
    image: imgSelfLigating,
    desc1: "Behel self-ligating menggunakan klip geser tanpa karet elastis, meminimalkan gesekan kawat sehingga pergerakan gigi terasa lebih lembut dan higienitas gigi lebih terjaga.",
    desc2: "Tersedia pilihan Standard, Premium, Damon Q, dan Damon Q2 baik varian Metal maupun Clear transparan dengan interval kontrol yang lebih longgar.",
    headers: ["Jenis Behel", "Tipe", "Harga"],
    pricing: [
      { name: "Standard Self-Ligating Braces", type: "Metal", price: "Rp6.000.000" },
      { name: "Premium Self-Ligating", type: "Metal", price: "Rp9.000.000" },
      { name: "Damon Q", type: "Metal", price: "Rp14.500.000" },
      { name: "Damon Q", type: "Clear", price: "Rp18.000.000" },
      { name: "Damon Q2", type: "Metal", price: "Rp16.500.000" }
    ]
  },
  "invisible-braces": {
    id: "invisible-braces",
    title: "Invisible Braces",
    image: imgInvisibleBraces,
    desc1: "Invisible braces (aligner transparan) adalah metode perataan gigi modern menggunakan tray bening khusus yang nyaris tidak terlihat saat digunakan.",
    desc2: "Dapat dilepas-pasang mandiri saat makan dan membersihkan gigi, memberikan fleksibilitas dan kenyamanan maksimal dalam beraktivitas.",
    headers: ["Jenis Perawatan", "Harga"],
    pricing: [
      { name: "Basic", price: "Rp16.900.000" },
      { name: "Advanced", price: "Rp21.900.000" }
    ]
  }
};

export default function DetailLayananBehel({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    return SERVICES_PAGE_DATA.filter((s) => s.id !== 'behel-gigi').slice(0, 3);
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
            Perawatan Behel Gigi (Ortodonti)
          </h1>
          <p className="text-xs sm:text-sm md:text-[16px] text-[#333333]/90 leading-relaxed max-w-5xl mx-auto">
            Perawatan untuk merapikan susunan gigi dan memperbaiki posisi gigitan melalui beberapa pilihan metode ortodonti.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN BEHEL   */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Berikut Beberapa Kondisi Gigi Yang Umumnya Membutuhkan Perawatan Behel.
          </h2>

          {/* 8 Grid Cards (4 Kolom di Desktop, 2 Baris) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {BEHEL_CONDITIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4 w-full">
                  <h3 className="text-xs sm:text-base font-semibold text-[#49baff] truncate">
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
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100 flex items-center justify-center text-center">
                <img
                  src={imgPerawatanBehel}
                  alt="Manfaat Perawatan Behel Gigi"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-6">
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

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
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
      {/* SECTION 5: PERAWATAN RETAINER SETELAH BEHEL               */}
      {/* ========================================================= */}
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Retainer Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src={imgRetainer}
                  alt="Perawatan Retainer Setelah Behel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Retainer Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
                Perawatan Retainer Setelah Behel
              </h2>
              <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-6">
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
