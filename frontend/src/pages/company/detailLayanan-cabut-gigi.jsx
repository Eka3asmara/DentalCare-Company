import React, { useState } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from '../../components/Icons';
import TreatmentModal from '../../components/TreatmentModal';

export const CONDITIONS = [
  {
    "id": 1,
    "title": "Gigi Bungsu Miring / Impaksi",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 2,
    "title": "Gigi Rusak Parah Tidak Bisa Ditambal",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 3,
    "title": "Gigi Goyang Berat (Periodontitis)",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 4,
    "title": "Gigi Susu Persisten (Anak)",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 5,
    "title": "Sisa Akar Gigi Terinfeksi",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 6,
    "title": "Pencabutan untuk Kebutuhan Behel",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 7,
    "title": "Gigi Patah di Bawah Gusi",
    "image": "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 8,
    "title": "Abses / Kista Gigi Berulang",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES = [
  {
    "id": "cabut-dewasa",
    "title": "Cabut Gigi Dewasa",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cabut-anak",
    "title": "Cabut Gigi Susu Anak",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "odontektomi-ringan",
    "title": "Odontektomi Gigi Bungsu",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "odontektomi-kompleks",
    "title": "Bedah Mulut Minor Spesialis",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "cabut-dewasa": {
    "id": "cabut-dewasa",
    "title": "Cabut Gigi Dewasa",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Prosedur ekstraksi gigi permanen yang mengalami kerusakan parah menggunakan anestesi lokal dengan teknik yang minim trauma jaringan.",
    "desc2": "Proses cepat, nyaman, dan pemulihan luka berlangsung singkat.",
    "pricing": [
      {
        "name": "Cabut Gigi Depan Sederhana",
        "origin": "IN Dental Care",
        "price": "Rp250.000"
      },
      {
        "name": "Cabut Gigi Geraham Sederhana",
        "origin": "IN Dental Care",
        "price": "Rp350.000"
      },
      {
        "name": "Cabut Sisa Akar Gigi dengan Penyulit",
        "origin": "IN Dental Care",
        "price": "Rp500.000"
      }
    ]
  },
  "cabut-anak": {
    "id": "cabut-anak",
    "title": "Cabut Gigi Susu Anak",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Pencabutan gigi susu yang sudah goyang atau sudah waktunya tanggal agar gigi permanen anak tumbuh rapi di posisinya.",
    "desc2": "Dikerjakan dengan pendekatan ramah anak menggunakan anestesi oles/topikal manis tanpa jarum suntik menakutkan.",
    "pricing": [
      {
        "name": "Cabut Gigi Susu Anestesi Oles",
        "origin": "IN Dental Care",
        "price": "Rp120.000"
      },
      {
        "name": "Cabut Gigi Susu Anestesi Injeksi Halus",
        "origin": "IN Dental Care",
        "price": "Rp180.000"
      }
    ]
  },
  "odontektomi-ringan": {
    "id": "odontektomi-ringan",
    "title": "Odontektomi Gigi Bungsu",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Operasi bedah minor untuk mengeluarkan gigi geraham ketiga (gigi bungsu) yang tumbuh miring atau terpendam sebagian dalam gusi.",
    "desc2": "Mencegah peradangan gusi (perikoronitis) dan nyeri berulang.",
    "pricing": [
      {
        "name": "Odontektomi Kelas 1 (Ringan)",
        "origin": "IN Dental Care",
        "price": "Rp1.800.000"
      },
      {
        "name": "Odontektomi Kelas 2 (Sedang)",
        "origin": "IN Dental Care",
        "price": "Rp2.500.000"
      }
    ]
  },
  "odontektomi-kompleks": {
    "id": "odontektomi-kompleks",
    "title": "Bedah Mulut Minor Spesialis",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Operasi gigi bungsu impaksi dalam atau dekat dengan saluran saraf mandibula yang ditangani langsung oleh Dokter Gigi Spesialis Bedah Mulut (Sp.BM).",
    "desc2": "Tingkat presisi tinggi dengan pemantauan panoramik / CBCT radiologi.",
    "pricing": [
      {
        "name": "Odontektomi Kelas 3 (Kompleks / Dalam)",
        "origin": "Spesialis Bedah Mulut",
        "price": "Rp3.200.000"
      },
      {
        "name": "Enukleasi Kista & Bedah Minor Rahang",
        "origin": "Spesialis Bedah Mulut",
        "price": "Rp4.000.000"
      }
    ]
  }
};

export const RECOMMENDATIONS = [
  {
    "id": "gigi-palsu-crown",
    "title": "Gigi Palsu dan Crown",
    "desc": "Perawatan gigi palsu dan crown membantu menggantikan gigi yang hilang atau memperbaiki gigi yang rusak.",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=700&q=80"
  },
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
  }
];

export default function DetailLayananCabutGigi({ onNavigate }) {
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
            Pencabutan Gigi & Bedah Mulut
          </h1>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#333333]/90 leading-relaxed max-w-3xl mx-auto">
            Tindakan pencabutan gigi yang rusak parah, gigi susu anak, hingga operasi odontektomi gigi bungsu yang impaksi secara aman, nyaman, dan minim rasa sakit oleh dokter gigi umum dan spesialis bedah mulut.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Kondisi Gigi Yang Membutuhkan Tindakan Pencabutan
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
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
                  alt="Manfaat Pencabutan Gigi"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Manfaat Pencabutan Gigi yang Tepat
              </h2>

              <div className="space-y-4">
                {["Menghilangkan sumber infeksi dan nyeri yang menjalar ke kepala.","Mencegah kerusakan pada gigi tetangga akibat dorongan gigi bungsu.","Mencegah pembentukan kista dan kerusakan pada tulang rahang.","Membuka ruang optimal untuk perataan gigi pada perawatan behel.","Mencegah bau mulut dan pembengkakan gusi berulang."].map((text, idx) => (
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
            Pilihan Layanan Pencabutan & Bedah Mulut
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
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80"
                  alt="Panduan Pasca Cabut Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-3">
                Panduan Pemulihan Pasca Pencabutan
              </h2>
              <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed mb-6">
                Lakukan petunjuk berikut agar luka bekas pencabutan lekas sembuh dan terhindar dari komplikasi dry socket.
              </p>

              <div className="space-y-3.5 mb-7">
                {["Gigit kasa steril rapat selama 1-2 jam pertama dan jangan sering meludah.","Hindari minum dengan sedotan dan jangan merokok selama 24 jam.","Kompres dingin pipi di area pencabutan untuk meredakan potensi pembengkakan."].map((text, idx) => (
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
