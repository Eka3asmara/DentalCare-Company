import React, { useState, useMemo } from 'react';
import { SERVICES_PAGE_DATA } from './layanan';
import { ArrowRightIcon, WhatsAppIcon } from '../../components/Icons';
import TreatmentModal from '../../components/TreatmentModal';

export const CONDITIONS = [
  {
    "id": 1,
    "title": "Kehilangan Satu Gigi Alami",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 2,
    "title": "Kehilangan Beberapa Gigi Berurutan",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 3,
    "title": "Gigi Palsu Lepasan Sering Goyang",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 4,
    "title": "Tidak Ingin Mengikis Gigi Tetangga",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 5,
    "title": "Gigi Patah Hingga ke Akar",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 6,
    "title": "Penurunan Kepadatan Tulang Rahang",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 7,
    "title": "Kesulitan Mengunyah Makanan Keras",
    "image": "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 8,
    "title": "Keinginan Solusi Permanen Seumur Hidup",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES = [
  {
    "id": "implan-standard",
    "title": "Titanium Dental Implant",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "implan-premium",
    "title": "Premium Swiss / Korean Implant",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bone-graft",
    "title": "Bone Grafting (Cangkok Tulang)",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sinus-lift",
    "title": "Sinus Lift Pre-Implan",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "implan-standard": {
    "id": "implan-standard",
    "title": "Titanium Dental Implant",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Implan titanium murni grade medis yang ditanam ke dalam tulang rahang untuk menggantikan akar gigi yang hilang.",
    "desc2": "Termasuk abutment dan mahkota crown pasca proses penyatuan osseointegrasi selesai.",
    "pricing": [
      {
        "name": "Fixture Implan Titanium",
        "origin": "Korea / USA",
        "price": "Rp8.500.000"
      },
      {
        "name": "Abutment + Crown Zirconia",
        "origin": "CAD/CAM",
        "price": "Rp4.000.000"
      },
      {
        "name": "Paket Lengkap All-in-One",
        "origin": "Garansi Resmi",
        "price": "Rp12.000.000"
      }
    ]
  },
  "implan-premium": {
    "id": "implan-premium",
    "title": "Premium Swiss / Korean Implant",
    "image": "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Sistem implan kelas dunia dengan permukaan berteknologi hidrofilik (SLActive) yang mempercepat proses penyembuhan osseointegrasi 2x lebih cepat.",
    "desc2": "Sangat direkomendasikan untuk stabilitas primer optimal dan pasien dengan riwayat diabetes terkontrol.",
    "pricing": [
      {
        "name": "Fixture Premium Straumann / Osstem",
        "origin": "Swiss / Korea",
        "price": "Rp14.000.000"
      },
      {
        "name": "Abutment Kustom + Zirconia Crown",
        "origin": "Swiss Precision",
        "price": "Rp5.000.000"
      },
      {
        "name": "Paket Lengkap Implan Premium",
        "origin": "Garansi Internasional",
        "price": "Rp18.500.000"
      }
    ]
  },
  "bone-graft": {
    "id": "bone-graft",
    "title": "Bone Grafting (Cangkok Tulang)",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Penambahan material tulang sintetis atau allograft pada rahang yang mengalami penyusutan agar implan dapat tertanam kuat dan kokoh.",
    "desc2": "Menciptakan pondasi tulang rahang yang tebal dan stabil.",
    "pricing": [
      {
        "name": "Bone Graft Ringan (0.5 cc)",
        "origin": "Bio-Oss Swiss",
        "price": "Rp2.500.000"
      },
      {
        "name": "Membran Kolagen Pelindung",
        "origin": "Bio-Gide Swiss",
        "price": "Rp2.000.000"
      }
    ]
  },
  "sinus-lift": {
    "id": "sinus-lift",
    "title": "Sinus Lift Pre-Implan",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    "desc1": "Prosedur pengangkatan membran sinus pada rahang atas bagian belakang untuk menambah ruang ketinggian tulang implan.",
    "desc2": "Dilakukan oleh Dokter Gigi Spesialis Bedah Mulut dengan panduan anestesi yang nyaman.",
    "pricing": [
      {
        "name": "Crestal Sinus Lift (Tertutup)",
        "origin": "Spesialis Bedah Mulut",
        "price": "Rp3.500.000"
      },
      {
        "name": "Lateral Window Sinus Lift (Terbuka)",
        "origin": "Spesialis Bedah Mulut",
        "price": "Rp6.000.000"
      }
    ]
  }
};


export default function DetailLayananImplan({ onNavigate, onSelectService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);

  const recommendedServices = useMemo(() => {
    const others = SERVICES_PAGE_DATA.filter((s) => s.id !== 'implan-gigi');
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
            Implan Gigi
          </h1>
          <p className="text-xs sm:text-sm md:text-[16px] text-[#333333]/90 leading-relaxed max-w-5xl mx-auto">
            Solusi permanen terbaik pengganti gigi hilang menggunakan sekrup titanium biokompatibel yang ditanamkan ke dalam tulang rahang. Memberikan kekuatan, kenyamanan, dan tampilan paling mendekati gigi asli.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: KONDISI GIGI YANG MEMBUTUHKAN PERAWATAN        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#49baff] text-center mb-10 max-w-3xl mx-auto leading-snug">
            Kondisi Yang Membutuhkan Perawatan Implan Gigi
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
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
                  alt="Manfaat Implan Gigi"
                  className="w-full h-full object-cover flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                />
              </div>
            </div>

            {/* Right: 5 Numbered Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-6">
                Keunggulan & Manfaat Implan Gigi
              </h2>

              <div className="space-y-4">
                {["Berdiri kokoh mandiri tanpa perlu mengikis gigi sehat di sebelahnya.","Mencegah penyusutan volume tulang rahang (resorpsi) pasca kehilangan gigi.","Memberikan daya kunyah maksimal 100% setara dengan gigi asli.","Tampilan dan estetika sangat alami menyatu dengan gusi Anda.","Dapat bertahan seumur hidup jika dirawat dengan kebersihan yang baik."].map((text, idx) => (
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
            Paket Perawatan Implan Gigi
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
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Perawatan Implan Gigi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info & 3 Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-2xl font-medium text-[#333333] mb-3">
                Perawatan Pasca Tindakan Implan
              </h2>
              <p className="text-xs sm:text-base text-[#333333]/90 leading-relaxed mb-6">
                Keberhasilan jangka panjang implan gigi sangat bergantung pada kebersihan rongga mulut dan perawatan teratur.
              </p>

              <div className="space-y-3.5 mb-7">
                {["Jaga kebersihan gigi dengan sikat gigi lembut dan dental floss khusus implan.","Hindari merokok selama masa integrasi implan dengan tulang rahang.","Pemeriksaan berkala ke dokter gigi setiap 6 bulan untuk evaluasi stabilitas."].map((text, idx) => (
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
