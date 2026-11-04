import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, TikTokIcon, InstagramIcon } from '../Icons';

export default function Footer({ onNavigate }) {
  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#e5ff8f] text-[#333333] pt-14 pb-10 border-t border-[#adc91f]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#adc91f]/25">

          {/* Column 1: Navigasi (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-[#7c9e10] mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-[#333333]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('beranda')}
                  className="hover:text-[#49baff] transition-colors cursor-pointer"
                >
                  Profil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('dokter')}
                  className="hover:text-[#49baff] transition-colors cursor-pointer"
                >
                  Dokter
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('layanan')}
                  className="hover:text-[#49baff] transition-colors cursor-pointer"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('kontak')}
                  className="hover:text-[#49baff] transition-colors cursor-pointer"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Lokasi Cabang (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-semibold text-[#7c9e10] mb-5">
              Lokasi Cabang
            </h4>

            <div className="space-y-5 text-xs sm:text-sm text-[#333333]">
              {/* Cabang 1 */}
              <div>
                <div className="flex items-center gap-2 font-medium mb-1 text-[#333333]">
                  <MapPinIcon className="w-4 h-4 text-[#333333] shrink-0" />
                  <span>Cabang 1</span>
                </div>
                <p className="text-xs text-[#333333]/85 leading-relaxed pl-6">
                  Jl. Garuda No.21, RT.8/RW.1, Petukangan Sel., Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270
                </p>
              </div>

              {/* Cabang 2 */}
              <div>
                <div className="flex items-center gap-2 font-medium mb-1 text-[#333333]">
                  <MapPinIcon className="w-4 h-4 text-[#333333] shrink-0" />
                  <span>Cabang 2</span>
                </div>
                <p className="text-xs text-[#333333]/85 leading-relaxed pl-6">
                  Jl. H. Muchtar Raya No.9D, RT.1/RW.01, Petukangan Utara, JAKARTA, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Kontak (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-semibold text-[#7c9e10] mb-5">
              Kontak
            </h4>

            <div className="space-y-5 text-xs sm:text-sm text-[#333333]">
              {/* Kontak Cabang 1 */}
              <div>
                <h5 className="font-medium mb-1.5 text-[#333333]">
                  Kontak Cabang 1
                </h5>
                <div className="space-y-1 pl-1">
                  <a
                    href="tel:628121915709"
                    className="flex items-center gap-2.5 text-xs hover:text-[#49baff] transition-colors"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#333333]" />
                    <span>+62 812-1915-709</span>
                  </a>
                  <a
                    href="mailto:indentalcareclinic@gmail.com"
                    className="flex items-center gap-2.5 text-xs hover:text-[#49baff] transition-colors"
                  >
                    <MailIcon className="w-3.5 h-3.5 text-[#333333]" />
                    <span>indentalcareclinic@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Kontak Cabang 2 */}
              <div>
                <h5 className="font-medium mb-1.5 text-[#333333]">
                  Kontak Cabang 2
                </h5>
                <div className="space-y-1 pl-1">
                  <a
                    href="tel:628119339708"
                    className="flex items-center gap-2.5 text-xs hover:text-[#49baff] transition-colors"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#333333]" />
                    <span>+62 811-9339-708</span>
                  </a>
                  <a
                    href="mailto:indentalcareclinic@gmail.com"
                    className="flex items-center gap-2.5 text-xs hover:text-[#49baff] transition-colors"
                  >
                    <MailIcon className="w-3.5 h-3.5 text-[#333333]" />
                    <span>indentalcareclinic@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Ikuti Media Sosial Kami (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-[#7c9e10] mb-5">
              Ikuti Media Sosial Kami
            </h4>

            <div className="flex items-center gap-3">
              {/* TikTok */}
              <a
                href="https://tiktok.com/@indentalcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok IN Dental Care"
              >
                <TikTokIcon className="w-4 h-4 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/indentalcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram IN Dental Care"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#333333]/80">
            &copy; 2026 IN Dental Care
          </p>
        </div>

      </div>
    </footer>
  );
}
