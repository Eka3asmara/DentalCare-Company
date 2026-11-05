import React from 'react';

export const MISI_DATA = [
  {
    number: "1",
    title: "Pelayanan Berkualitas",
    desc: "Memberikan perawatan gigi dan mulut yang profesional sesuai kebutuhan pasien."
  },
  {
    number: "2",
    title: "Kenyamanan Pasien",
    desc: "Menciptakan suasana perawatan yang nyaman, aman, dan ramah."
  },
  {
    number: "3",
    title: "Tenaga Medis Profesional",
    desc: "Mengutamakan kompetensi dan profesionalisme dalam setiap tindakan medis."
  },
  {
    number: "4",
    title: "Edukasi Kesehatan",
    desc: "Meningkatkan kesadaran masyarakat akan pentingnya menjaga kesehatan gigi dan mulut."
  },
  {
    number: "5",
    title: "Perbaikan Berkelanjutan",
    desc: "Terus meningkatkan kualitas pelayanan demi kepuasan dan kepercayaan pasien."
  }
];

export default function Profil() {
  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* SECTION 1: TENTANG KAMI & PROFIL PENDIRI                 */}
      {/* ========================================================= */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-[#f9f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Eyebrow, Heading & Story Paragraphs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Eyebrow */}
              <span className="text-sm sm:text-lg font-medium text-[#49baff] tracking-normal mb-3">
                Tentang Kami
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#49baff] tracking-tight leading-[1.18] mb-8">
                Senyum Percaya Diri Berawal dari Gigi Sehat
              </h1>

              {/* Story Paragraphs */}
              <div className="space-y-5 text-xs sm:text-sm md:text-[16px] text-[#333333]/90 leading-relaxed max-w-2xl">
                <p>
                  IN Dental Care merupakan klinik kesehatan gigi dan mulut yang berdiri sejak tahun 2012
                  oleh drg. Indira Nugrahani, lulusan Universitas Prof. Dr. Moestopo (Beragama). Berlokasi di Petukangan, Jakarta Selatan,
                  IN Dental Care memiliki dua cabang dan didukung oleh enam dokter gigi umum serta satu
                  dokter spesialis bedah mulut (Sp.BM).
                </p>

                <p>
                  IN Dental Care berkomitmen memberikan pelayanan yang profesional, ramah, nyaman, dan
                  berkualitas untuk mendukung kesehatan gigi dan mulut serta meningkatkan kepercayaan pasien.
                </p>
              </div>
            </div>

            {/* Right Column: Founder Photo in Asymmetric Curved Shape */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square flex items-center justify-center">
                {/* Decorative soft glow */}
                <div className="absolute inset-0 bg-[#e5ff8f]/40 blur-3xl -z-10 rounded-full scale-95 transform -translate-y-4"></div>

                {/* Asymmetric curved photo container per design system */}
                <div className="w-full h-full max-h-[460px] overflow-hidden shadow-2xl relative hero-img-shape transition-transform duration-500 hover:scale-[1.01] flex items-center justify-center text-center">
                  <img
                    src="src/assets/image/dokter-indira.jpeg"
                    alt="drg. Indira Nugrahani - Pendiri IN Dental Care"
                    className="w-full h-full object-cover object-center flex items-center justify-center text-center text-xs sm:text-sm text-gray-500 font-medium"
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

      {/* ========================================================= */}
      {/* SECTION 2: VISI KAMI (Latar Brand Lime #e5ff8f)           */}
      {/* ========================================================= */}
      <section className="bg-[#e5ff8f] py-16 lg:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-sm sm:text-lg font-medium text-[#7c9e10] mb-4">
            Visi Kami
          </span>

          {/* Vision Statement */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[24px] font-semibold text-[#7c9e10] leading-snug md:leading-relaxed max-w-4xl mb-6">
            Menjadi klinik gigi terpercaya yang mengutamakan kualitas pelayanan,
            kenyamanan pasien, dan peningkatan kesehatan gigi dan mulut masyarakat.
          </h2>

          {/* Official Tagline */}
          <p className="text-xs sm:text-xs font-semibold text-[#7c9e10] tracking-wider italic">
            #CareForEverySmile
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: MISI KAMI (Sesuai Desain misi-profil.png)       */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#f9f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-3xl font-medium text-[#333333] mb-3">
              Misi Kami
            </h2>
            <p className="text-xs sm:text-base text-[#333333]/80 leading-relaxed">
              Lima komitmen yang menjadi pedoman kami dalam memberikan pelayanan kesehatan gigi dan mulut yang berkualitas.
            </p>
          </div>

          {/* 5 Cards Grid: Top badge centered halfway over the top edge */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 pt-4">
            {MISI_DATA.map((item) => (
              <div
                key={item.number}
                className="relative bg-white rounded-2xl card-shadow pt-10 pb-8 px-6 sm:px-7 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-50 min-h-[190px]"
              >
                {/* Floating Circular Number Badge centered on the top border */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#84a116] text-white flex items-center justify-center font-medium text-lg shadow-sm">
                  {item.number}
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#49baff] mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[14px] text-[#333333] leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
