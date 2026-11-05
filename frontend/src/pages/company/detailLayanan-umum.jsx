import React, { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import { ArrowRightIcon, WhatsAppIcon } from '../../components/Icons';
import TreatmentModal from '../../components/TreatmentModal';

export const CONDITIONS = [
  {
    "id": 1,
    "title": "Karang Gigi",
    "image": "src/assets/image/Karang-Gigi.jpg"
  },
  {
    "id": 2,
    "title": "PLak Gigi",
    "image": "src/assets/image/Plak-Gigi.jpg"
  },
  {
    "id": 3,
    "title": "Tooth Staining",
    "image": "src/assets/image/Tooth-Staining.jpg"
  },
  {
    "id": 4,
    "title": "Gigi Berlubang",
    "image": "src/assets/image/Gigi-Berlubang.jpg"
  },
  {
    "id": 5,
    "title": "Gigi Depan Patah",
    "image": "src/assets/image/Gigi-Depan-Patah.jpg"
  },
  {
    "id": 6,
    "title": "Gigi Berubah Bentuk",
    "image": "src/assets/image/Gigi-Berubah-Bentuk.jpg"
  },
  {
    "id": 7,
    "title": "Pembesaran Gusi",
    "image": "src/assets/image/Pembesaran-Gusi.jpg"
  },
  {
    "id": 8,
    "title": "Gusi Tumbuh Berlebihan",
    "image": "src/assets/image/Gusi-Tumbuh-Berlebihan.jpg"
  }
];

export const TREATMENT_TYPES = [
  {
    "id": "scaling",
    "title": "Scaling Gigi",
    "image": "src/assets/image/scalling-gigi2.jpg"
  },
  {
    "id": "air-flow",
    "title": "Air Flow",
    "image": "src/assets/image/air-flow.jpg"
  },
  {
    "id": "tambal-gigi",
    "title": "Tambal Gigi",
    "image": "src/assets/image/tambal-gigi.jpg"
  },
  {
    "id": "tambal-gigi-estetik",
    "title": "Tambal Gigi Estetik",
    "image": "src/assets/image/tambal-gigi-estetik.jpg"
  },
  {
    "id": "abses-gigi-dan-gusi",
    "title": "Abses Gigi dan Gusi",
    "image": "src/assets/image/Abses-Gigi.jpg"
  },
  {
    "id": "gingivektomi",
    "title": "Gingivektomi",
    "image": "src/assets/image/gingivektomi.jpg"
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "scaling": {
    "id": "scaling",
    "title": "Scaling Gigi",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Scaling adalah prosedur pembersihan karang gigi dan plak yang mengeras di permukaan gigi maupun di bawah garis gusi menggunakan alat ultrasonik modern yang aman dan nyaman.",
    "desc2": "Membantu mencegah periodontitis dan menjaga napas tetap segar. Dianjurkan dilakukan setiap 6 bulan sekali.",
    "pricing": [
      {
        "name": "Scaling Ringan",
        "origin": "IN Dental Care",
        "price": "Rp180.000"
      },
      {
        "name": "Scaling Komprehensif (2 Rahang)",
        "origin": "IN Dental Care",
        "price": "Rp350.000"
      },
      {
        "name": "Deep Scaling & Root Planing",
        "origin": "IN Dental Care",
        "price": "Rp500.000"
      }
    ]
  },
  "air-flow": {
    "id": "air-flow",
    "title": "Air Flow",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Air flow adalah teknik pembersihan karang gigi menggunakan semprotan bertekanan lembut berisi udara, air, dan bubuk pembersih halus (sodium bicarbonate).",
    "desc2": "Hasil tambalan sangat kuat, estetik, dan menyatu alami dengan gigi asli Anda.",
    "pricing": [
      {
        "name": "Tambal Komposit Kecil",
        "origin": "Made in Germany",
        "price": "Rp250.000"
      },
      {
        "name": "Tambal Komposit Sedang",
        "origin": "Made in USA",
        "price": "Rp350.000"
      },
      {
        "name": "Tambal Komposit Besar / Estetis Depan",
        "origin": "Made in Japan",
        "price": "Rp500.000"
      }
    ]
  },
  "tambal-gigi": {
    "id": "tambal-gigi",
    "title": "Tambal Gigi",
    "image": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Penambalan gigi menggunakan bahan resin komposit sewarna gigi asli yang dikeraskan dengan sinar laser khusus untuk menutup kavitas gigi berlubang.",
    "desc2": "Sangat baik untuk anak-anak maupun dewasa dengan risiko karies tinggi atau gigi sensitif.",
    "pricing": [
      {
        "name": "Tambal Komposit Kecil",
        "origin": "IN Dental Care",
        "price": "Rp150.000"
      },
      {
        "name": "Tambal Komposit Sedang",
        "origin": "IN Dental Care",
        "price": "Rp200.000"
      }
    ]
  },
  "tambal-gigi-estetik": {
    "id": "tambal-gigi-estetik",
    "title": "Pembersihan Noda & Polishing",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Pembersihan noda membandel akibat konsumsi kopi, teh, atau tembakau dengan teknik air-polishing bertekanan lembut.",
    "desc2": "Menghasilkan permukaan gigi yang licin dan kilau alami yang bersih maksimal.",
    "pricing": [
      {
        "name": "Stain Removal Paket Standard",
        "origin": "IN Dental Care",
        "price": "Rp200.000"
      },
      {
        "name": "Air Flow Stain Removal",
        "origin": "IN Dental Care",
        "price": "Rp350.000"
      }
    ]
  },
  "abses-gigi-dan-gusi": {
    "id": "abses-gigi-dan-gusi",
    "title": "Abses Gigi dan Gusi",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Pembersihan noda membandel akibat konsumsi kopi, teh, atau tembakau dengan teknik air-polishing bertekanan lembut.",
    "desc2": "Menghasilkan permukaan gigi yang licin dan kilau alami yang bersih maksimal.",
    "pricing": [
      {
        "name": "Stain Removal Paket Standard",
        "origin": "IN Dental Care",
        "price": "Rp200.000"
      },
      {
        "name": "Air Flow Stain Removal",
        "origin": "IN Dental Care",
        "price": "Rp350.000"
      }
    ]
  },
  "gingivektomi": {
    "id": "gingivektomi",
    "title": "Gingivektomi",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Pembersihan noda membandel akibat konsumsi kopi, teh, atau tembakau dengan teknik air-polishing bertekanan lembut.",
    "desc2": "Menghasilkan permukaan gigi yang licin dan kilau alami yang bersih maksimal.",
    "pricing": [
      {
        "name": "Stain Removal Paket Standard",
        "origin": "IN Dental Care",
        "price": "Rp200.000"
      },
      {
        "name": "Air Flow Stain Removal",
        "origin": "IN Dental Care",
        "price": "Rp350.000"
      }
    ]
  }
};


export default function DetailLayananUmum({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    const others = SERVICES_PAGE_DATA.filter((s) => s.id !== 'gigi-umum');
    return [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
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
            Layanan pencegahan dan perawatan dasar untuk menjaga kesehatan gigi dan gusi Anda. Mulai dari pembersihan karang gigi (scaling), penambalan gigi berlubang, hingga pemeriksaan berkala untuk senyum yang sehat dan bebas masalah.
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
      {/* SECTION 3: MANFAAT PERAWATAN (2 Kolom)                    */}
      {/* ========================================================= */}
      <section className="py-12 lg:py-16 bg-white/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/3] bg-slate-100 border border-slate-100 flex items-center justify-center text-center">
                <img
                  src="src/assets/image/scalling-gigi.jpg"
                  alt="Manfaat Perawatan Gigi Umum"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-6">
                Manfaat Perawatan Gigi Umum
              </h2>

              <div className="space-y-4">
                {["Membantu membersihkan karang gigi dan noda pada gigi.", "Membantu menjaga kesehatan gigi dan gusi.", "Membantu memperbaiki gigi yang berlubang atau rusak.", "Membantu mengembalikan bentuk gigi agar terlihat lebih baik."].map((text, idx) => (
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
                  src="src/assets/image/Kontrol-Pasca-Perawatan.jpg"
                  alt="Tips Merawat Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
                Perawatan Lanjutan Setelah Tindakan Gigi
              </h2>
              <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-6">
                Setelah melakukan perawatan gigi umum, pasien perlu memperhatikan kondisi gigi dan gusi, serta mengikuti arahan dokter untuk mendukung proses pemulihan. Pemeriksaan lanjutan dilakukan sesuai kebutuhan guna memastikan hasil perawatan tetap optimal.
              </p>

              <div className="space-y-3.5 mb-7">
                {["Tidak semua tindakan membutuhkan obat atau kontrol lanjutan. Prosedur disesuaikan dengan jenis perawatan, misalnya scaling, penambalan, gingivektomi, maupun penanganan abses"].map((text, idx) => (
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
