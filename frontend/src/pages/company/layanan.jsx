import React from 'react';
import { ArrowRightIcon } from '../../components/Icons';

export const SERVICES_PAGE_DATA = [
  {
    id: "gigi-umum",
    title: "Perawatan Gigi Umum",
    description: "Perawatan untuk membersihkan gigi, mengatasi kerusakan, dan menjaga kesehatan serta estetika senyum Anda.",
    image: "src/assets/image/scalling-gigi.jpg",
    category: "Preventif & Konservasi"
  },
  {
    id: "saluran-akar",
    title: "Perawatan Saluran Akar",
    description: "Perawatan untuk mengatasi infeksi atau kerusakan pada bagian dalam gigi agar gigi tetap dapat dipertahankan.",
    image: "src/assets/image/root-canal-treatment.jpg",
    category: "Endodonti"
  },
  {
    id: "pencabutan-gigi",
    title: "Pencabutan Gigi",
    description: "Tindakan pencabutan gigi dewasa, gigi susu, dan gigi bungsu sesuai kondisi serta kebutuhan pasien.",
    image: "src/assets/image/cabut-gigi.jpg",
    category: "Bedah Mulut"
  },
  {
    id: "behel-gigi",
    title: "Perawatan Behel Gigi",
    description: "Perawatan behel membantu merapikan susunan gigi dan memperbaiki gigitan untuk senyum yang lebih rapi dan sehat.",
    image: "src/assets/image/Perawatan-Behel.png",
    category: "Ortodonti"
  },
  {
    id: "gigi-palsu-crown",
    title: "Gigi Palsu dan Crown",
    description: "Perawatan gigi palsu dan crown membantu menggantikan gigi yang hilang atau memperbaiki gigi yang rusak.",
    image: "src/assets/image/Gigi-Palsu-dan-Crown.jpeg",
    category: "Prostodonsia"
  },
  {
    id: "implan-gigi",
    title: "Implan Gigi",
    description: "Implan gigi merupakan perawatan untuk menggantikan gigi yang hilang menggunakan penyangga khusus yang dipasang pada tulang rahang.",
    image: "src/assets/image/implan-gigi.jpg",
    category: "Implantologi"
  },
  {
    id: "estetik-gigi",
    title: "Perawatan Estetik Gigi",
    description: "Perawatan estetik gigi membantu memperbaiki tampilan gigi agar terlihat lebih cerah dan rapi.",
    image: "src/assets/image/Perawatan-estetik.png",
    category: "Estetika Gigi"
  }
];

export default function Layanan({ onSelectService }) {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#f9f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HEADER SECTION: Eyebrow, Title & Description              */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-lg font-medium text-[#49baff] tracking-normal mb-2 block">
            Layanan Yang Kami Sediakan
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-2xl font-semibold text-[#333333] tracking-tight mb-4">
            Solusi Perawatan Gigi untuk Setiap Kebutuhan
          </h1>
          <p className="text-xs sm:text-base text-[#333333]/85 leading-relaxed max-w-5xl mx-auto">
            Jelajahi berbagai layanan perawatan gigi yang kami sediakan, mulai dari perawatan gigi umum hingga perawatan untuk memperbaiki dan menjaga kondisi gigi. Temukan layanan yang sesuai dengan kebutuhan Anda untuk membantu menjaga kesehatan gigi Anda.
          </p>
        </div>

        {/* ========================================================= */}
        {/* SERVICES GRID: 7 Kartu Layanan                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_PAGE_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group"
            >
              {/* Card Image */}
              <div className="h-52 sm:h-56 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-[#333333]/90 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Lihat Detail Button -> Menuju ke Halaman Detail Layanan */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.id);
                    }
                  }}
                  className="w-full py-3.5 px-4 bg-[#49baff] hover:bg-[#98cfff] hover:text-[#49baff] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
