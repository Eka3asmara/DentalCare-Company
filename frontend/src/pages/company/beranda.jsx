import React, { useState, useEffect } from 'react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  CloseIcon
} from '../../components/Icons';

export const STATS_DATA = [
  {
    value: "14+",
    title: "Tahun Melayani",
    desc: "Mendedikasikan diri untuk kesehatan gigi dan mulut pasien."
  },
  {
    value: "1K+",
    title: "Pasien Berkunjung",
    desc: "Pasien telah mempercayakan perawatan senyum mereka kepada kami."
  },
  {
    value: "7",
    title: "Dokter",
    desc: "Dokter Profesional siap memberikan penanganan terbaik."
  },
  {
    value: "20+",
    title: "Jumlah Layanan",
    desc: "Jenis Layanan perawatan gigi modern untuk memenuhi berbagai kebutuhan Anda."
  }
];

export const SERVICES_DATA = [
  {
    id: "tambal-crown",
    title: "Tambal Crown",
    description: "Solusi praktis memperkuat dan mengembalikan bentuk asli gigi yang rusak. Tampil alami, kuat, dan tahan lama.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-blue-50",
    category: "Restorasi Gigi",
    longDescription: "Perawatan restorasi mahkota gigi tiruan (crown) dan penambalan estetik untuk memperbaiki struktur gigi berlubang besar, patah, atau pasca perawatan saluran akar agar kembali berfungsi mengunyah secara optimal dengan tampilan menyerupai gigi asli.",
    benefits: [
      "Mengembalikan fungsi kunyah dan estetika senyum secara alami",
      "Melindungi struktur gigi rapuh dari risiko patah permanen",
      "Material biokompatibel bermutu tinggi yang tahan bertahun-tahun",
      "Warna disesuaikan persis dengan gradasi gigi asli Anda"
    ],
    pricing: [
      { type: "Tambal Estetik Komposit Light Cure", detail: "Bahan nano-hybrid sewarna gigi asli", price: "Rp 350.000 - Rp 600.000 / gigi" },
      { type: "Crown Porcelain Fused to Metal (PFM)", detail: "Kombinasi kekuatan logam dengan lapisan porselen", price: "Rp 1.800.000 - Rp 2.500.000 / gigi" },
      { type: "Crown All-Porcelain / E-Max", detail: "Translusensi sangat natural untuk gigi depan", price: "Rp 3.000.000 - Rp 4.500.000 / gigi" },
      { type: "Crown Zirconia Premium", detail: "Kekuatan maksimal tanpa logam, anti-alergi", price: "Rp 4.500.000 - Rp 6.000.000 / gigi" }
    ]
  },
  {
    id: "pemasangan-behel",
    title: "Pemasangan Behel",
    description: "Solusi merapikan posisi gigi dan gigitan untuk estetika senyum yang lebih rapi, sehat, dan percaya diri.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-emerald-50",
    category: "Ortodonti",
    longDescription: "Perawatan ortodonti komprehensif untuk mengoreksi susunan gigi berjejal (crowded), renggang, tonggos, atau gigitan silang (crossbite). Dilakukan oleh dokter berpengalaman dengan pilihan material berkualitas tinggi.",
    benefits: [
      "Meningkatkan rasa percaya diri dengan senyum simetris dan rapi",
      "Memudahkan pembersihan sela gigi sehingga mencegah karang dan gigi berlubang",
      "Memperbaiki artikulasi bicara dan fungsi pengunyahan",
      "Tersedia pilihan braket transparan dan self-ligating minim rasa ngilu"
    ],
    pricing: [
      { type: "Behel Metal Konvensional (Made in China)", detail: "Ekonomis & efektif merapikan gigi", price: "Rp 3.500.000 - Rp 5.000.000" },
      { type: "Behel Metal Premium (Made in USA - Roth/MBT)", detail: "Presisi tinggi, slot nyaman, anti karat medis", price: "Rp 6.500.000 - Rp 8.500.000" },
      { type: "Behel Keramik / Sapphire Transparan (USA)", detail: "Warna jernih estetik mengikuti warna gigi", price: "Rp 9.000.000 - Rp 12.000.000" },
      { type: "Behel Self-Ligating Damon System (USA)", detail: "Tanpa karet elastis, waktu kontrol lebih singkat & minim sakit", price: "Rp 14.000.000 - Rp 18.000.000" }
    ]
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Solusi menyelamatkan gigi yang terinfeksi atau nyeri parah tanpa perlu dicabut. Aman, nyaman, dan menghentikan rasa sakit.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-amber-50",
    category: "Endodonti",
    longDescription: "Perawatan saluran akar (PSA) berfokus membersihkan jaringan pulpa yang meradang atau terinfeksi kuman, mensterilkan saluran mikro akar gigi, dan menutupnya secara kedap agar gigi asli tetap dapat dipertahankan seumur hidup.",
    benefits: [
      "Menghilangkan rasa nyeri berdenyut secara tuntas tanpa cabut gigi",
      "Mencegah infeksi dan nanah menyebar ke tulang rahang",
      "Mempertahankan struktur alami rahang dan kemampuan mengunyah",
      "Dikerjakan dengan anestesi lokal modern yang nyaman dan minim rasa sakit"
    ],
    pricing: [
      { type: "PSA Gigi Depan (Anterior)", detail: "1 saluran akar, estetika terjaga", price: "Rp 900.000 - Rp 1.400.000 / saluran" },
      { type: "PSA Gigi Premolar", detail: "1 - 2 saluran akar dengan sterilisasi mikro", price: "Rp 1.300.000 - Rp 1.800.000 / saluran" },
      { type: "PSA Gigi Geraham (Molar)", detail: "3 - 4 saluran akar kompleks dengan rotary system", price: "Rp 1.800.000 - Rp 2.500.000 / saluran" },
      { type: "Pengobatan Darurat & Sterilisasi Awal", detail: "Pereda nyeri darurat & pulpotomi", price: "Rp 400.000 - Rp 600.000" }
    ]
  },
  {
    id: "cabut-gigi",
    title: "Cabut Gigi",
    description: "Prosedur pencabutan gigi yang rusak parah atau bermasalah secara aman, cepat, dan minim rasa sakit.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-rose-50",
    category: "Bedah Mulut",
    longDescription: "Tindakan ekstraksi gigi yang sudah tidak dapat dipertahankan akibat infeksi berat, keropos akar habis, sisa akar tajam, atau gigi bungsu yang tumbuh miring (impaksi) dan menekan gigi sebelahnya.",
    benefits: [
      "Menghentikan sumber infeksi berulang dan pembengkakan gusi",
      "Teknik atraumatik untuk meminimalkan trauma jaringan dan mempercepat penyembuhan",
      "Ditangani oleh dokter gigi umum dan spesialis bedah mulut berpengalaman",
      "Protokol anestesi modern untuk kenyamanan maksimal selama tindakan"
    ],
    pricing: [
      { type: "Cabut Gigi Susu Anak", detail: "Anestesi topikal oles atau injeksi dingin", price: "Rp 150.000 - Rp 250.000" },
      { type: "Cabut Gigi Dewasa Sederhana", detail: "Gigi goyang atau berakar tunggal", price: "Rp 300.000 - Rp 500.000" },
      { type: "Cabut Gigi Penyulit / Sisa Akar", detail: "Akar bengkok atau mahkota rapuh", price: "Rp 600.000 - Rp 950.000" },
      { type: "Odontektomi Gigi Bungsu Impaksi", detail: "Bedah minor oleh Dokter Spesialis Bedah Mulut", price: "Rp 1.800.000 - Rp 3.500.000" }
    ]
  }
];

export const ALL_EXTRA_SERVICES = [
  {
    id: "scaling-gigi",
    title: "Pembersihan Karang Gigi (Scaling)",
    category: "Preventif",
    description: "Pembersihan kalkulus / karang gigi menggunakan getaran ultrasonik untuk mencegah radang gusi dan bau mulut.",
    price: "Rp 250.000 - Rp 450.000"
  },
  {
    id: "teeth-whitening",
    title: "Pemutihan Gigi (Bleaching / Whitening)",
    category: "Estetika",
    description: "Mencerahkan warna gigi hingga beberapa tingkat lebih putih cerah dalam satu sesi perawatan klinis.",
    price: "Rp 1.800.000 - Rp 3.000.000"
  },
  {
    id: "dental-implant",
    title: "Implan Gigi (Dental Implant)",
    category: "Implantologi",
    description: "Akar gigi tiruan titanium permanen yang ditanamkan pada tulang rahang untuk menggantikan gigi yang hilang seumur hidup.",
    price: "Rp 12.000.000 - Rp 18.000.000"
  },
  {
    id: "gigi-tiruan",
    title: "Gigi Tiruan Lepasan (Valplast / Akrilik)",
    category: "Prostodonsia",
    description: "Plat gigi tiruan fleksibel atau akrilik yang nyaman dipakai untuk mengembalikan fungsi mengunyah sehari-hari.",
    price: "Rp 900.000 - Rp 2.500.000"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    initial: "Z",
    name: "Zahra",
    avatarBg: "bg-[#49baff]",
    time: "2 bulan lalu",
    rating: 5,
    comment: "alhamdulillah ada klinik dekat rumah yg fasilitas nya lengkap tapi harga nya msh terjangkau. saya disini treatment PSA dgn dr indira, enjoy bgt bolak balik kesini krn drg nya baik yg genuinely care gt sama pasien ngga pereus, to the point dan satset tindakannya. terima kasih dok, gigi saya sudah ga sakit lagi🥰"
  },
  {
    id: 2,
    initial: "M",
    name: "madhu mohana",
    avatarBg: "bg-[#ff6b6b]",
    time: "4 bulan lalu",
    rating: 5,
    comment: "The clinic is very clean and well-maintained. The dentist is very nice and friendly, making the whole experience comfortable. Will definitely come back again."
  },
  {
    id: 3,
    initial: "L",
    name: "Lia Yuliani",
    avatarBg: "bg-[#adc91f]",
    time: "2 bulan lalu",
    rating: 5,
    comment: "Klinik gigi terbaik! 🦷✨ Dokter Indira the best banget. Selama perawatan sabar dan friendly banget ga bikin tegang. Staffnya juga ramah dan pelayanannya memuaskan. Pasti bakal jadi langganan terus 🤍"
  },
  {
    id: 4,
    initial: "D",
    name: "Dimas Pratama",
    avatarBg: "bg-[#8b5cf6]",
    time: "1 bulan lalu",
    rating: 5,
    comment: "Pasang behel di Cabang Petukangan Selatan pelayanannya sangat memuaskan. Dokternya menjelaskan detail opsi behel China vs USA secara transparan tanpa dipaksa. Sangat recommended untuk perawatan behel!"
  },
  {
    id: 5,
    initial: "R",
    name: "Rina Wijaya",
    avatarBg: "bg-[#06b6d4]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Tempatnya bersih, wangi, anak saya yang biasanya takut ke dokter gigi jadi nyaman dan kooperatif. Ruang tindakan modern dan dokternya sabar banget!"
  }
];

const CABANG_1 = {
  label: "Cabang 1 (Petukangan Selatan)",
  address: "Jl. Garuda No.21, RT.8/RW.1, Petukangan Sel., Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270",
  mapsUrl: "https://maps.google.com/?q=Jl.+Garuda+No.21,+Petukangan+Sel.,+Kec.+Pesanggrahan,+Jakarta+Selatan",
  waUrl: "https://wa.me/628121915709?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%201,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
};

const CABANG_2 = {
  label: "Cabang 2 (Petukangan Utara)",
  address: "Jl. H. Muchtar Raya No.9D, RT.1/RW.01, Petukangan Utara, JAKARTA, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260",
  mapsUrl: "https://maps.google.com/?q=Jl.+H.+Muchtar+Raya+No.9D,+Petukangan+Utara,+Jakarta+Selatan",
  waUrl: "https://wa.me/628119339708?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%202,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
};

export default function Beranda() {
  const [selectedService, setSelectedService] = useState(null);
  const [allServicesOpen, setAllServicesOpen] = useState(false);
  const [testiIndex, setTestiIndex] = useState(0);

  // Smooth scroll to contact
  const handleContactClick = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Testimonial Carousel logic
  const totalTesti = TESTIMONIALS_DATA.length;
  const visibleCardsCount = 3;

  const handlePrevTesti = () => {
    setTestiIndex((prev) => (prev === 0 ? totalTesti - 1 : prev - 1));
  };

  const handleNextTesti = () => {
    setTestiIndex((prev) => (prev + 1) % totalTesti);
  };

  const displayedReviews = [];
  for (let i = 0; i < visibleCardsCount; i++) {
    const idx = (testiIndex + i) % totalTesti;
    displayedReviews.push(TESTIMONIALS_DATA[idx]);
  }

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedService || allServicesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService, allServicesOpen]);

  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* SECTION 1: HERO & STATISTIK                              */}
      {/* ========================================================= */}
      <section id="beranda" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Left: Title, Description & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#49baff] tracking-tight leading-[1.18] mb-6">
                Senyum Percaya Diri Berawal dari Gigi Sehat
              </h1>

              <p className="text-base sm:text-lg text-[#333333]/90 leading-relaxed max-w-xl mb-8">
                Bersama kami, merawat gigi kini lebih mudah dan menyenangkan. Percayakan
                kesehatan senyum Anda dan keluarga pada pelayanan terbaik kami.
              </p>

              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#49baff] hover:bg-[#98cfff] text-white text-base font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Hubungi Kami</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Hero Right: Asymmetric Shape Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#e5ff8f]/40 blur-3xl -z-10 rounded-full scale-95 transform -translate-y-4"></div>

                <div className="w-full h-full max-h-[460px] overflow-hidden shadow-2xl relative bg-slate-100 border-4 border-white hero-img-shape transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src="src/assets/image/dokter-indira.jpeg"
                    alt="Foto Dokter"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#e5ff8f] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {STATS_DATA.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#adc91f] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-md mb-5 transition-transform duration-300 group-hover:scale-105 select-none">
                  {item.value}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#333333]/85 leading-relaxed max-w-[240px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: LAYANAN KAMI & KONSULTASI DOKTER               */}
      {/* ========================================================= */}
      <section id="layanan" className="py-16 lg:py-24 bg-[#f9f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header & 'Semua Layanan' Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-3">
                Layanan Kami
              </h2>
              <p className="text-sm sm:text-base text-[#333333]/80 leading-relaxed">
                Hadirkan senyum cemerlang dan percaya diri melalui rangkaian solusi perawatan gigi terpadu kami.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAllServicesOpen(true)}
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-2.5 bg-[#49baff] hover:bg-[#98cfff] text-white text-sm font-semibold rounded-2xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Semua Layanan</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#49baff] px-2.5 py-1 rounded-full shadow-sm">
                    Lihat Detail
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Konsultasi Tim Dokter */}
          <div id="dokter" className="pt-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#adc91f] mb-3">
                Konsultasikan Kebutuhan Gigi Anda Bersama Kami
              </h2>
              <p className="text-sm sm:text-base text-[#333333]/80 leading-relaxed">
                Kenali tenaga medis kami dan temukan layanan perawatan gigi yang sesuai dengan kebutuhan Anda dan keluarga.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Clinic Image */}
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto min-h-[300px] relative overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Tim dokter gigi IN Dental Care saat menangani pasien"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Information & WhatsApp Buttons */}
              <div className="lg:col-span-7 bg-[#e5ff8f] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-2">
                  Tim Dokter Kami
                </h3>
                <p className="text-sm sm:text-base text-[#333333]/85 leading-relaxed mb-6">
                  Didukung tenaga medis yang siap memberikan pelayanan kesehatan gigi.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="text-[#adc91f] mt-0.5 shrink-0 bg-white/70 p-1 rounded-full">
                      <CheckCircleIcon className="w-5 h-5 text-[#adc91f]" />
                    </div>
                    <div className="text-sm sm:text-base text-[#333333]">
                      <span className="font-bold">Dokter Gigi Umum:</span>{' '}
                      <span className="opacity-90">Pemeriksaan dan perawatan gigi dasar.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-[#adc91f] mt-0.5 shrink-0 bg-white/70 p-1 rounded-full">
                      <CheckCircleIcon className="w-5 h-5 text-[#adc91f]" />
                    </div>
                    <div className="text-sm sm:text-base text-[#333333]">
                      <span className="font-bold">Dokter Spesialis Bedah Mulut:</span>{' '}
                      <span className="opacity-90">Layanan bedah gigi dan mulut.</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                  <a
                    href={CABANG_1.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-sm sm:text-base font-semibold rounded-2xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cabang 1</span>
                  </a>

                  <a
                    href={CABANG_2.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-sm sm:text-base font-semibold rounded-2xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cabang 2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: TESTIMONI PASIEN & LOKASI CABANG               */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#f9f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Testimoni Subsection */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-3">
                Kata Mereka tentang Kami
              </h2>

              <div className="flex items-center justify-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-500 font-medium">
                Berdasarkan 411 ulasan
              </p>
            </div>

            {/* Carousel Slider */}
            <div className="relative px-2 sm:px-8">
              <button
                type="button"
                onClick={handlePrevTesti}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-100 flex items-center justify-center hover:text-[#49baff] transition-all duration-200 cursor-pointer"
                aria-label="Ulasan Sebelumnya"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedReviews.map((review) => (
                  <div
                    key={`${review.id}-${review.name}`}
                    className="bg-white rounded-2xl p-6 card-shadow flex flex-col justify-between transition-all duration-300 hover:shadow-lg border border-slate-50 min-h-[220px]"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm`}>
                          {review.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#49baff] truncate">
                            {review.name}
                          </h4>
                          <span className="text-xs text-gray-400 block">
                            {review.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      <p className="text-xs sm:text-[13px] text-[#333333]/90 leading-relaxed font-normal">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextTesti}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-100 flex items-center justify-center hover:text-[#49baff] transition-all duration-200 cursor-pointer"
                aria-label="Ulasan Berikutnya"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lokasi Cabang Subsection */}
          <div id="kontak" className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

              {/* Left Column: Heading & Addresses */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] mb-3 leading-tight">
                  Temukan <span className="text-[#49baff]">IN Dental</span>{' '}
                  <span className="text-[#adc91f]">Care</span> Terdekat
                </h2>

                <p className="text-sm sm:text-base text-[#333333]/80 leading-relaxed mb-8">
                  Kami hadir di berbagai kota. Cek cabang terdekat dari lokasi Anda sekarang.
                </p>

                {/* Cabang 1 */}
                <div className="flex items-start gap-4 mb-7 group">
                  <div className="w-10 h-10 rounded-full bg-[#adc91f] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-1">
                      {CABANG_1.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      {CABANG_1.address}
                    </p>
                    <a
                      href={CABANG_1.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#49baff] hover:underline flex items-center gap-1"
                    >
                      Buka Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Cabang 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#adc91f] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-1">
                      {CABANG_2.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      {CABANG_2.address}
                    </p>
                    <a
                      href={CABANG_2.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#49baff] hover:underline flex items-center gap-1"
                    >
                      Buka Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo Card */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                    alt="Klinik IN Dental Care tampak depan"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-5 right-5 max-w-[210px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#49baff]/15 text-[#49baff] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPinIcon className="w-4 h-4 text-[#49baff]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#49baff] leading-none mb-1">
                        Lokasi Kami 🪄
                      </div>
                      <div className="text-[11px] text-gray-600 leading-snug">
                        Mudah diakses, lebih dekat untuk senyum sehatmu.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* MODAL 1: DETAIL LAYANAN & ESTIMASI HARGA (PRD US-2 & FR-2) */}
      {/* ========================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-8 transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image with Close Button */}
            <div className="relative h-56 sm:h-64 bg-slate-100 shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                aria-label="Tutup Modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-[#adc91f] text-white text-xs font-bold rounded-full mb-2">
                  {selectedService.category || 'Perawatan Gigi'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Tentang Perawatan
                </h4>
                <p className="text-sm sm:text-base text-[#333333]/90 leading-relaxed">
                  {selectedService.longDescription || selectedService.description}
                </p>
              </div>

              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Keunggulan & Manfaat
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#333333]/90">
                        <CheckCircleIcon className="w-4 h-4 text-[#adc91f] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing Table (China vs USA per PRD US-2) */}
              {selectedService.pricing && selectedService.pricing.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                      Estimasi Biaya & Variasi Bahan
                    </h4>
                    <span className="text-[11px] text-[#adc91f] font-semibold bg-[#e5ff8f]/40 px-2.5 py-0.5 rounded-full">
                      Harga Transparan
                    </span>
                  </div>

                  <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#f9f8ff] text-[#333333] border-b border-slate-100 font-semibold">
                        <tr>
                          <th className="py-3 px-4">Jenis Tindakan / Material</th>
                          <th className="py-3 px-4 hidden sm:table-cell">Keterangan</th>
                          <th className="py-3 px-4 text-right">Perkiraan Biaya</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedService.pricing.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3 px-4 font-medium text-[#333333]">
                              <div>{item.type}</div>
                              <div className="text-[11px] text-gray-400 sm:hidden mt-0.5">{item.detail}</div>
                            </td>
                            <td className="py-3 px-4 text-gray-500 hidden sm:table-cell text-xs">
                              {item.detail}
                            </td>
                            <td className="py-3 px-4 text-right font-bold text-[#49baff] whitespace-nowrap">
                              {item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Booking WhatsApp Action */}
              <div className="bg-[#e5ff8f]/40 border border-[#adc91f]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-[#333333] text-sm sm:text-base">
                    Siap Reservasi atau Konsultasi?
                  </div>
                  <div className="text-xs text-[#333333]/80">
                    Pilih cabang klinik terdekat untuk reservasi instan tanpa antre:
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`${CABANG_1.waUrl}%20terkait%20layanan%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 1</span>
                  </a>

                  <a
                    href={`${CABANG_2.waUrl}%20terkait%20layanan%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: KATALOG SEMUA LAYANAN (ALL SERVICES)              */}
      {/* ========================================================= */}
      {allServicesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f9f8ff] p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#adc91f] tracking-wider uppercase mb-1 block">
                  Katalog Perawatan
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#333333]">
                  Daftar Lengkap Layanan IN Dental Care
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Pilihan perawatan komprehensif oleh dokter gigi umum dan spesialis.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAllServicesOpen(false)}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-gray-700 flex items-center justify-center shadow-sm border border-slate-200 transition-transform hover:scale-105 cursor-pointer"
                aria-label="Tutup"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#49baff] mb-4">
                  Layanan Utama
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES_DATA.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        setAllServicesOpen(false);
                        setSelectedService(service);
                      }}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-[#49baff] hover:shadow-md transition-all flex items-start gap-4 cursor-pointer group bg-white"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-[#333333] group-hover:text-[#49baff] text-sm sm:text-base">
                            {service.title}
                          </h5>
                          <span className="text-xs text-[#adc91f] font-semibold">Detail &rarr;</span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#adc91f] mb-4">
                  Layanan Tambahan & Estetika
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ALL_EXTRA_SERVICES.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-100 bg-[#f9f8ff] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#adc91f] px-2 py-0.5 rounded-full border border-slate-200">
                            {item.category}
                          </span>
                          <span className="text-xs font-bold text-[#49baff]">
                            {item.price}
                          </span>
                        </div>
                        <h5 className="font-bold text-[#333333] text-sm mt-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#e5ff8f] rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-[#333333] text-base">
                    Konsultasikan Kondisi Gigi Anda
                  </h5>
                  <p className="text-xs text-[#333333]/85">
                    Admin kami siap menjawab pertanyaan seputar biaya dan tindakan melalui WhatsApp.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={CABANG_1.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 1</span>
                  </a>
                  <a
                    href={CABANG_2.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
