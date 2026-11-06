import { ArrowRightIcon } from '../../components/Icons';

import imgScalling from '../../assets/image/scalling-gigi.webp';
import imgRootCanal from '../../assets/image/root-canal-treatment.webp';
import imgCabutGigi from '../../assets/image/cabut-gigi.webp';
import imgBehel from '../../assets/image/Perawatan-Behel.webp';
import imgGigiPalsu from '../../assets/image/Gigi-Palsu-dan-Crown.webp';
import imgImplan from '../../assets/image/implan-gigi.webp';
import imgEstetik from '../../assets/image/Perawatan-estetik.webp';

export const SERVICES_PAGE_DATA = [
  {
    id: "behel-gigi",
    title: "Perawatan Behel Gigi",
    description: "Perawatan untuk merapikan susunan gigi dan memperbaiki posisi gigitan melalui beberapa pilihan metode ortodonti.",
    image: imgBehel,
    category: "Ortodonti"
  },
  {
    id: "gigi-umum",
    title: "Perawatan Gigi Umum",
    description: "Perawatan untuk menjaga kesehatan gigi dan gusi, membersihkan plak, mengatasi kerusakan gigi, serta menangani kondisi tertentu pada jaringan gigi dan gusi.",
    image: imgScalling,
    category: "Preventif & Konservasi"
  },
  {
    id: "saluran-akar",
    title: "Perawatan Saluran Akar",
    description: "Perawatan untuk menangani infeksi atau kerusakan pada jaringan pulpa gigi dengan tujuan mempertahankan gigi agar tetap dapat digunakan.",
    image: imgRootCanal,
    category: "Endodonti"
  },
  {
    id: "pencabutan-gigi",
    title: "Pencabutan Gigi",
    description: "Tindakan pencabutan gigi yang dilakukan berdasarkan kondisi gigi, tingkat kesulitan, dan kebutuhan perawatan pasien.",
    image: imgCabutGigi,
    category: "Bedah Mulut"
  },
  {
    id: "gigi-palsu-crown",
    title: "Gigi Palsu dan Crown",
    description: "Perawatan untuk menggantikan gigi yang hilang serta memperbaiki bentuk, fungsi, dan struktur gigi menggunakan bahan restorasi tertentu.",
    image: imgGigiPalsu,
    category: "Prostodonsia"
  },
  {
    id: "implan-gigi",
    title: "Implan Gigi",
    description: "Perawatan untuk menggantikan akar gigi yang hilang menggunakan implan sebagai penyangga gigi pengganti.",
    image: imgImplan,
    category: "Implantologi"
  },
  {
    id: "estetik-gigi",
    title: "Perawatan Estetik Gigi",
    description: "Perawatan untuk meningkatkan penampilan gigi melalui tindakan pemutihan warna gigi dan perbaikan tampilan permukaan gigi.",
    image: imgEstetik,
    category: "Estetika Gigi"
  }
];

export default function Layanan({ onSelectService }) {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-20 bg-[#f9f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HEADER SECTION: Eyebrow, Title & Description              */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-base font-semibold text-[#49baff] tracking-normal mb-2 block">
            Layanan Yang Kami Sediakan
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333333] tracking-tight mb-2 sm:mb-4">
            Solusi Perawatan Gigi untuk Setiap Kebutuhan
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#333333]/85 leading-relaxed max-w-5xl mx-auto">
            Jelajahi berbagai layanan perawatan gigi yang kami sediakan, mulai dari perawatan gigi umum hingga perawatan untuk memperbaiki dan menjaga kondisi gigi. Temukan layanan yang sesuai dengan kebutuhan Anda untuk membantu menjaga kesehatan gigi Anda.
          </p>
        </div>

        {/* ========================================================= */}
        {/* SERVICES GRID: 7 Kartu Layanan                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {SERVICES_PAGE_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group"
            >
              {/* Card Image */}
              <div className="h-44 sm:h-52 md:h-56 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#333333]/90 leading-relaxed mb-4 sm:mb-6">
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
                  className="w-full py-2.5 sm:py-3.5 px-4 bg-[#49baff] hover:bg-[#98cfff] hover:text-[#49baff] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
