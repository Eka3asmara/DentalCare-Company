import React, { useState, useEffect } from 'react';
import {
  STATS_DATA,
  SERVICES_DATA,
  ALL_EXTRA_SERVICES,
  TESTIMONIALS_DATA,
  BRANCHES_DATA
} from '../../data/dentalData';
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#49baff] tracking-tight leading-[1.18] mb-6">
                Senyum Percaya Diri Berawal <br className="hidden sm:inline" />
                dari Gigi Sehat
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
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                    alt="Dokter Gigi IN Dental Care bersama pasien di klinik modern"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80";
                    }}
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
                    href={BRANCHES_DATA.cabang1.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-sm sm:text-base font-semibold rounded-2xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cabang 1</span>
                  </a>

                  <a
                    href={BRANCHES_DATA.cabang2.waUrl}
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
                      {BRANCHES_DATA.cabang1.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      {BRANCHES_DATA.cabang1.address}
                    </p>
                    <a
                      href={BRANCHES_DATA.cabang1.mapsUrl}
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
                      {BRANCHES_DATA.cabang2.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#333333]/80 leading-relaxed max-w-md mb-2">
                      {BRANCHES_DATA.cabang2.address}
                    </p>
                    <a
                      href={BRANCHES_DATA.cabang2.mapsUrl}
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
                    href={`${BRANCHES_DATA.cabang1.waUrl}%20terkait%20layanan%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 1</span>
                  </a>

                  <a
                    href={`${BRANCHES_DATA.cabang2.waUrl}%20terkait%20layanan%20${encodeURIComponent(selectedService.title)}`}
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
                    href={BRANCHES_DATA.cabang1.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#31cc1e] hover:bg-[#2cb81b] text-white text-xs font-semibold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cabang 1</span>
                  </a>
                  <a
                    href={BRANCHES_DATA.cabang2.waUrl}
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

