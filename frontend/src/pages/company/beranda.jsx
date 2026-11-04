import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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

// Local Image Assets
import imgDokterIndira from '../../assets/image/dokter-indira.jpeg';
import imgPerawatan from '../../assets/image/perawatan.png';
import imgLokasiKlinik from '../../assets/image/lokasi-klinik.png';
import imgScalling from '../../assets/image/scalling-gigi.jpg';
import imgRootCanal from '../../assets/image/root-canal-treatment.jpg';
import imgCabutGigi from '../../assets/image/cabut-gigi.jpg';
import imgPerawatanBehel from '../../assets/image/Perawatan-Behel.png';

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
    value: "15+",
    title: "Jumlah Layanan",
    desc: "Jenis Layanan perawatan gigi modern untuk memenuhi berbagai kebutuhan Anda."
  }
];

export const SERVICES_DATA = [
  {
    id: "gigi-umum",
    title: "Perawatan Gigi Umum",
    description: "Perawatan untuk membersihkan gigi, mengatasi kerusakan, dan menjaga kesehatan serta estetika senyum Anda.",
    image: imgScalling,
    category: "Preventif & Konservasi"
  },
  {
    id: "saluran-akar",
    title: "Perawatan Saluran Akar",
    description: "Perawatan untuk mengatasi infeksi atau kerusakan pada bagian dalam gigi agar gigi tetap dapat dipertahankan.",
    image: imgRootCanal,
    category: "Endodonti"
  },
  {
    id: "pencabutan-gigi",
    title: "Pencabutan Gigi",
    description: "Tindakan pencabutan gigi dewasa, gigi susu, dan gigi bungsu sesuai kondisi serta kebutuhan pasien.",
    image: imgCabutGigi,
    category: "Bedah Mulut"
  },
  {
    id: "behel-gigi",
    title: "Perawatan Behel Gigi",
    description: "Perawatan behel membantu merapikan susunan gigi dan memperbaiki gigitan untuk senyum yang lebih rapi dan sehat.",
    image: imgPerawatanBehel,
    category: "Ortodonti"
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
    initial: "A",
    name: "Anik Ristiyani",
    avatarBg: "bg-[#8b5cf6]",
    time: "1 bulan lalu",
    rating: 5,
    comment: "Habis perawatan gigi di In Dental Muchtarraya, dgn drg Indira , best pokoknya..dokter nya ramah.gak bikin pasien takut . Dan yg penting harga affordable dr klinik gigi lainnya. Sukses In dental 😍😍😍😍 …"
  },
  {
    id: 5,
    initial: "Z",
    name: "Zaki Nashwan",
    avatarBg: "bg-[#06b6d4]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Berhubung udah lama ga pergi scalling, akhirnya memutuskan ke In Dental Petukangan yang jaraknya ga jauh dr rumah. Tempatnya seperti klinik dokter gigi pada umumnya, bersih dan tenang. Ditanganin oleh drg. Sherly, yang niatnya cuma pengen scalling, akhirnya tambal gigi juga. Well, harganya masih affordable karena masih ada promo untuk kedatangan pertama untuk scalling, dari harga 450k jadi 250k. Worth it banget kan..Rencananya minggu depan akan datang lagi untuk tindakan berikutnya di In Dental Care. 😊"
  },
  {
    id: 6,
    initial: "M",
    name: "Melati Hatta",
    avatarBg: "bg-[#ffaa00]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Sudah beberapa kali perawatan gigi di sini dari scaling, cabut gigi sampai tambal gigi utk anak, dewasa dan lansia. Pelayanan cepat dan rapi."
  },
  {
    id: 7,
    initial: "L",
    name: "Lucky Rangga",
    avatarBg: "bg-[#1a964c]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Pelayanannya memuaskan. Dokter dan petugas kesehatan lainnya ramah. Dari segi tempat, nyaman dan adem. Recommended. Kalo kontrol gigi, pasti bakal kesini lagi 🥰 …"
  },
  {
    id: 8,
    initial: "H",
    name: "Hanivah Siti Vathinah",
    avatarBg: "bg-[#871235]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Pertama kali scalling disini nyaman banget, ga kerasa ngilu nya, kebetulan aku sama dokter dira, pembawaannya santai banget, selalu memastikan kita dlm kondisi aman, jdi ga bikin kita tegang, bisa sekalian konsultasi jga..terima kasih banyak dokter dira, terbaik pokoknya so enjoyed perawatan di indental care :))"
  },
  {
    id: 9,
    initial: "A",
    name: "Adli Ardiansyah",
    avatarBg: "bg-[#ff173d]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Pelayanan baik dari pertama masuk sampai sudah selesai sangat baik mertua cabut gigi dan bersihkan karang gigi.  Untuk cabut gigi kata mertua tidak sakit sama sekali.  Datang happy pulang happy"
  },
  {
    id: 10,
    initial: "R",
    name: "Rania Jayanti",
    avatarBg: "bg-[#052b36]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Selalu seneng kl ke sini ketemu sama Dokter Indira. Apalagi bawa anak, Dokter Indira ramah jadi anak2 pun nyaman. Jadi ga takut lagi deh ke dokter gigi 😁😁"
  }
];

const CABANG_1 = {
  label: "Cabang 1",
  address: "Jl. Garuda No.21, RT.8/RW.1, Petukangan Sel, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270",
  waUrl: "https://wa.me/628121915709?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%201,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
};

const CABANG_2 = {
  label: "Cabang 2",
  address: "Jl. H. Muchtar Raya No.9D, RT.1/RW.01, Petukangan Utara, JAKARTA, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260",
  waUrl: "https://wa.me/628119339708?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%202,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
};

export default function Beranda() {
  const [allServicesOpen, setAllServicesOpen] = useState(false);

  // Smooth scroll to contact
  const handleContactClick = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Testimonial Carousel — infinite loop via CSS transform
  const TESTI_N = TESTIMONIALS_DATA.length; // 10
  const cardRefEl = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);       // px lebar 1 card + gap
  const [testiIdx, setTestiIdx] = useState(TESTI_N);   // mulai di set tengah (index 10)
  const [animated, setAnimated] = useState(false);     // mati dulu sampai posisi awal ter-set
  const movingRef = useRef(false);

  // Clone 3x biar ada buffer kiri & kanan
  const extendedTesti = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
  ];

  // Ukur lebar card sebelum browser paint pertama kali
  useLayoutEffect(() => {
    const measure = () => {
      if (cardRefEl.current) {
        setCardWidth(cardRefEl.current.offsetWidth + 24); // 24px = gap-6
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Aktifkan animasi setelah posisi awal (set tengah) ter-apply tanpa animasi
  useEffect(() => {
    if (cardWidth > 0 && !animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [cardWidth]);

  // Deteksi batas: kalau sudah masuk clone zone, teleport diam-diam setelah animasi kelar
  useEffect(() => {
    if (!animated || cardWidth === 0) return;
    if (testiIdx >= TESTI_N * 2) {
      const t = setTimeout(() => {
        setAnimated(false);
        setTestiIdx(i => i - TESTI_N);
      }, 360);
      return () => clearTimeout(t);
    }
    if (testiIdx < TESTI_N) {
      const t = setTimeout(() => {
        setAnimated(false);
        setTestiIdx(i => i + TESTI_N);
      }, 360);
      return () => clearTimeout(t);
    }
    // Normal scroll selesai
    const t = setTimeout(() => { movingRef.current = false; }, 360);
    return () => clearTimeout(t);
  }, [testiIdx, animated, cardWidth]);

  // Re-enable animasi setelah teleport diam-diam
  useEffect(() => {
    if (!animated && cardWidth > 0) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          movingRef.current = false;
        })
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated, cardWidth]);

  const handlePrevTesti = () => {
    if (movingRef.current || !animated || cardWidth === 0) return;
    movingRef.current = true;
    setTestiIdx(i => i - 1);
  };

  const handleNextTesti = () => {
    if (movingRef.current || !animated || cardWidth === 0) return;
    movingRef.current = true;
    setTestiIdx(i => i + 1);
  };

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (allServicesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [allServicesOpen]);

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
                className="inline-flex items-center gap-2.5 px-10 py-3.5 bg-[#49baff] hover:bg-[#98cfff] text-white text-base hover:text-[#49baff] font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Hubungi Kami</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Hero Right: Asymmetric Shape Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#e5ff8f]/40 blur-3xl -z-10 rounded-full scale-95 transform -translate-y-4"></div>

                <div className="w-full h-full max-h-[460px] overflow-hidden shadow-2xl relative hero-img-shape transition-transform duration-500 hover:scale-[1.01] flex items-center justify-center bg-slate-100 text-center">
                  <img
                    src={imgDokterIndira}
                    alt="drg. Indira Nugrahani - Pendiri & Dokter Gigi IN Dental Care"
                    className="w-full h-full object-cover object-center flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
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
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#adc91f] text-white flex items-center justify-center font-semibold text-2xl sm:text-3xl shadow-md mb-5 transition-transform duration-300 group-hover:scale-105 select-none">
                  {item.value}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#93ab19] mb-2">
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
              <h2 className="text-3x1 sm:text-3xl font-medium text-[#333333] mb-3">
                Layanan Kami
              </h2>
              <p className="text-sm sm:text-base text-[#333333]/80 leading-relaxed">
                Hadirkan senyum cemerlang dan percaya diri melalui rangkaian solusi perawatan gigi terpadu kami.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAllServicesOpen(true)}
              className="self-start md:self-auto inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#49baff] hover:bg-[#98cfff] text-white text-base hover:text-[#49baff] font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Semua Layanan</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* 4 Service Cards Grid (Tanpa Popup) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative bg-slate-100 flex items-center justify-center text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#49baff] group-hover:text-[#2ca4ee] transition-colors mb-2.5">
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
            <div className="text-center max-w-5xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#adc91f] mb-3">
                Konsultasikan Kebutuhan Gigi Anda Bersama Kami
              </h2>
              <p className="text-sm sm:text-base text-[#333333]/80 leading-relaxed">
                Kenali tenaga medis kami dan temukan layanan perawatan gigi yang sesuai dengan kebutuhan Anda dan keluarga.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12 lg:h-[367px]">
              {/* Left Column: Clinic Image */}
              <div className="lg:col-span-5 h-60 sm:h-72 lg:h-full relative overflow-hidden bg-slate-100 flex items-center justify-center text-center">
                <img
                  src={imgPerawatan}
                  alt="Tim dokter gigi IN Dental Care saat menangani pasien"
                  className="w-full h-full object-cover object-center flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Information & WhatsApp Buttons */}
              <div className="lg:col-span-7 bg-[#e5ff8f] p-6 sm:p-8 lg:px-10 lg:py-7 flex flex-col justify-center h-full">
                <h3 className="text-xl sm:text-2xl font-medium text-[#93ab19] mb-1">
                  Tim Dokter Kami
                </h3>
                <p className="text-xs sm:text-base text-[#333333]/85 leading-relaxed mb-5">
                  Didukung tenaga medis yang siap memberikan pelayanan kesehatan gigi.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 shrink-0 bg-[#93ab19] p-0.5 rounded-full">
                      <CheckCircleIcon className="w-4 h-4 text-[#93ab19]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#93ab19] text-lg">Dokter Gigi Umum</p>
                      <p className="text-[#333333]/80 text-sm">Pemeriksaan dan perawatan gigi dasar.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 shrink-0 bg-[#93ab19] p-0.5 rounded-full">
                      <CheckCircleIcon className="w-4 h-4 text-[#93ab19]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#93ab19] text-lg">Dokter Spesialis Bedah Mulut</p>
                      <p className="text-[#333333]/80 text-sm">Layanan bedah gigi dan mulut.</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <a
                    href={CABANG_1.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#31cc1e] hover:bg-[#39e824] text-white text-xs sm:text-sm font-semibold rounded-xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 1</span>
                  </a>

                  <a
                    href={CABANG_2.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#31cc1e] hover:bg-[#39e824] text-white text-xs sm:text-sm font-semibold rounded-xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
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
              <h2 className="text-3xl sm:text-3xl font-medium text-[#333333] mb-3">
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

            {/* Carousel Slider with Peek (Kepotong) Effect */}
            <div className="relative group/slider">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={handlePrevTesti}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-700 shadow-xl border border-slate-100 flex items-center justify-center hover:text-[#49baff] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Ulasan Sebelumnya"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              {/* Slider Track — transform-based infinite carousel */}
              <div className="overflow-hidden py-3">
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    transform: cardWidth > 0
                      ? `translateX(-${testiIdx * cardWidth}px)`
                      : undefined,
                    transition: animated ? 'transform 0.35s ease' : 'none',
                    willChange: 'transform',
                  }}
                >
                  {extendedTesti.map((review, idx) => (
                    <div
                      key={`${review.id}-${review.name}-${idx}`}
                      ref={idx === 0 ? cardRefEl : null}
                      className="testi-card shrink-0 w-[84%] sm:w-[46%] lg:w-[28.5%] bg-white rounded-2xl p-6 card-shadow flex flex-col justify-between border border-slate-100 min-h-[220px]"
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
              </div>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={handleNextTesti}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-700 shadow-xl border border-slate-100 flex items-center justify-center hover:text-[#49baff] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
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
                <h2 className="text-2xl sm:text-3xl font-medium text-[#333333] mb-3 leading-tight">
                  Temukan <span className="text-[#49baff] font-semibold">IN Dental</span>{' '}
                  <span className="text-[#adc91f] font-semibold">Care</span> <span className="text-[#333333] font-medium">Terdekat</span>
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
                    <h3 className="text-base sm:text-lg font-medium text-[#333333] mb-1">
                      {CABANG_1.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      <a
                        href="https://maps.app.goo.gl/JW7g4cipRZU6CVJV9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-[#49baff]"
                      >
                        {CABANG_1.address}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Cabang 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#adc91f] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[#333333] mb-1">
                      {CABANG_2.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      <a
                        href="https://maps.app.goo.gl/t839tmj7ooKXEkHS8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-[#49baff]"
                      >
                        {CABANG_2.address}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo Card */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center text-center">
                  <img
                    src={imgLokasiKlinik}
                    alt="Klinik IN Dental Care tampak depan"
                    className="w-full h-full object-cover object-center flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
