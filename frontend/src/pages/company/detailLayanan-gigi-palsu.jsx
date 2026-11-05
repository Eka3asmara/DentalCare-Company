import React, { useState } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from '../../components/Icons';
import TreatmentModal from '../../components/TreatmentModal';

export const CONDITIONS = [
  {
    "id": 1,
    "title": "Satu Gigi Ompong / Hilang",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 2,
    "title": "Banyak Gigi Ompong Sekaligus",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 3,
    "title": "Gigi Patah / Pecah Sebagian",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 4,
    "title": "Gigi Pasca Perawatan Saluran Akar",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 5,
    "title": "Sulit Mengunyah Makanan",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 6,
    "title": "Pipi Kempot Akibat Gigi Hilang",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 7,
    "title": "Gigi Tetangga Bergeser Miring",
    "image": "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 8,
    "title": "Pelindung Gigi Aus (Bruxism)",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES = [
  {
    "id": "crown-zirconia",
    "title": "Dental Crown All-Zirconia",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "crown-pfm",
    "title": "Crown PFM (Porcelain-Metal)",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "gigi-valplast",
    "title": "Gigi Tiruan Valplast (Fleksibel)",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "gigi-akrilik",
    "title": "Gigi Tiruan Lepasan Akrilik",
    "image": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "crown-zirconia": {
    "id": "crown-zirconia",
    "title": "Dental Crown All-Zirconia",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Mahkota tiruan berbahan keramik zirkonia murni berteknologi CAD/CAM. Memberikan kekuatan mekanik tertinggi tanpa garis hitam di batas gusi.",
    "desc2": "Sangat estetik menyerupai kilau gigi asli dan biocompatible ramah gusi.",
    "pricing": [
      {
        "name": "Crown Monolithic Zirconia",
        "origin": "Made in Germany",
        "price": "Rp2.800.000"
      },
      {
        "name": "Crown Layered Multilayer Zirconia",
        "origin": "Made in Japan",
        "price": "Rp3.500.000"
      }
    ]
  },
  "crown-pfm": {
    "id": "crown-pfm",
    "title": "Crown PFM (Porcelain-Metal)",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Mahkota tiruan dengan rangka logam di bagian dalam dan dilapisi porselen sewarna gigi di bagian luar.",
    "desc2": "Solusi ekonomis yang sangat kokoh untuk gigi geraham belakang.",
    "pricing": [
      {
        "name": "Crown PFM Standard",
        "origin": "IN Dental Care",
        "price": "Rp1.800.000"
      },
      {
        "name": "Bridge PFM (per unit)",
        "origin": "IN Dental Care",
        "price": "Rp1.800.000"
      }
    ]
  },
  "gigi-valplast": {
    "id": "gigi-valplast",
    "title": "Gigi Tiruan Valplast (Fleksibel)",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Gigi tiruan lepasan berbahan nilon termoplastik yang lentur, tipis, dan tanpa kawat logam yang terlihat saat tersenyum.",
    "desc2": "Sangat nyaman, tidak mudah patah, dan pas mencengkeram gusi dengan lembut.",
    "pricing": [
      {
        "name": "Valplast Plat Dasar + 1 Gigi",
        "origin": "Made in USA",
        "price": "Rp1.600.000"
      },
      {
        "name": "Tambahan per Elemen Gigi",
        "origin": "Made in USA",
        "price": "Rp200.000"
      }
    ]
  },
  "gigi-akrilik": {
    "id": "gigi-akrilik",
    "title": "Gigi Tiruan Lepasan Akrilik",
    "image": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Gigi tiruan lepasan konvensional berbahan resin akrilik merah muda dengan kawat retensi cangkolan.",
    "desc2": "Solusi ekonomis untuk mengganti beberapa gigi hingga gigi tiruan penuh (lengkap) 1 rahang.",
    "pricing": [
      {
        "name": "Plat Akrilik + 1 Gigi Pertama",
        "origin": "IN Dental Care",
        "price": "Rp750.000"
      },
      {
        "name": "Tambahan per Elemen Gigi",
        "origin": "IN Dental Care",
        "price": "Rp150.000"
      },
      {
        "name": "Gigi Tiruan Lengkap Penuh (1 Rahang)",
        "origin": "IN Dental Care",
        "price": "Rp3.000.000"
      }
    ]
  }
};

export const RECOMMENDATIONS = [
  {
    "id": "implan-gigi",
    "title": "Implan Gigi",
    "desc": "Solusi permanen menggantikan gigi yang hilang menggunakan penyangga khusus.",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": "gigi-umum",
    "title": "Perawatan Gigi Umum",
    "desc": "Perawatan untuk membersihkan gigi, mengatasi kerusakan, dan menjaga kesehatan serta estetika senyum Anda.",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": "saluran-akar",
    "title": "Perawatan Saluran Akar",
    "desc": "Perawatan untuk mengatasi infeksi atau kerusakan pada bagian dalam gigi agar gigi tetap dapat dipertahankan.",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
  }
];

export default function DetailLayananGigiPalsu({ onNavigate }) {
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
            Gigi Palsu dan Crown
          </h1>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#333333]/90 leading-relaxed max-w-3xl mx-auto">
            Solusi restorasi modern untuk menggantikan gigi yang hilang dan melindungi gigi rusak parah. Kembalikan fungsi kunyah yang prima, senyum estetis yang natural, serta bentuk wajah yang proporsional.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Kondisi Gigi Yang Membutuhkan Gigi Palsu atau Crown
          </h2>

          {/* 8 Grid Cards (4 Kolom di Desktop, 2 Baris) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CONDITIONS.map((item) => (
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
      {/* SECTION 3: MANFAAT PERAWATAN (2 Kolom)                    */}
      {/* ========================================================= */}
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100 flex items-center justify-center text-center">
                <img
                  src="https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=900&q=80"
                  alt="Manfaat Gigi Palsu dan Crown"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Manfaat Gigi Palsu dan Crown
              </h2>

              <div className="space-y-4">
                {["Mengembalikan kemampuan mengunyah makanan secara optimal dan nyaman.","Mencegah gigi di sekitarnya bergeser atau condong ke ruang kosong.","Mengembalikan bentuk estetika senyum dan proporsi wajah alami.","Memperbaiki artikulasi pengucapan kata yang terganggu akibat gigi ompong.","Melindungi gigi yang rapuh pasca perawatan agar tidak patah kembali."].map((text, idx) => (
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

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Pilihan Jenis Gigi Palsu dan Crown
          </h2>

          {/* 4 Cards Grid — klik untuk buka popup rincian & harga */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
                  <h3 className="text-xs sm:text-sm font-bold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors">
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
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
                  alt="Cara Merawat Gigi Palsu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-3">
                Cara Merawat Gigi Palsu & Crown
              </h2>
              <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed mb-6">
                Jaga kebersihan gigi tiruan Anda agar tahan lama dan rongga mulut tetap segar bebas infeksi jamur.
              </p>

              <div className="space-y-3.5 mb-7">
                {["Lepas dan bersihkan gigi tiruan lepasan setelah makan menggunakan sikat berbulu halus.","Rendam gigi tiruan dalam wadah air bersih saat tidur malam hari.","Hindari menggigit benda keras yang dapat memecahkan mahkota gigi."].map((text, idx) => (
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
                  <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center text-center">
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
