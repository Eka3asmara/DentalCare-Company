import React, { useState } from 'react';
import logoKlinik from '../../assets/image/logo-indentalcare.png';

export default function Navbar({ activePage = 'Beranda', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Profil', id: 'profil' },
    { label: 'Dokter', id: 'dokter' },
    { label: 'Layanan', id: 'layanan' },
    { label: 'Kontak', id: 'kontak' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);

    // Jika memilih Kontak — scroll ke section "Konsultasikan Kebutuhan Gigi"
    if (item.label.toLowerCase() === 'kontak') {
      if (activePage.toLowerCase() === 'beranda') {
        const el = document.getElementById('dokter');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        if (onNavigate) {
          onNavigate('Beranda');
        }
        setTimeout(() => {
          const el = document.getElementById('dokter');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return;
      }
    }

    // Navigasi ke halaman lain (Beranda, Profil, Dokter, Layanan) -> Selalu buka di posisi paling atas
    if (onNavigate) {
      onNavigate(item.label);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick({ label: 'Beranda', id: 'beranda' })}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="transition-transform group-hover:scale-105 duration-200 flex items-center justify-center text-center">
            <img
              src={logoKlinik}
              alt="IN Dental Care Logo"
              className="w-15 h-15 rounded-full object-cover flex items-center justify-center text-center text-[10px] text-gray-500 font-medium"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center tracking-wide font-semibold text-lg sm:text-lg leading-none">
              <span className="text-[#0584bc] mr-1">IN</span>
              <span className="text-[#0584bc] mr-1">DENTAL</span>
              <span className="text-[#adc91f]">CARE</span>
            </div>
            <span className="text-[10px] sm:text-[10px] font-medium text-[#49baff] tracking-wider mt-0.5">
              CARE FOR EVERY SMILE
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage.toLowerCase() === item.label.toLowerCase();
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-sm tracking-normal transition-colors relative py-1 font-medium ${isActive
                  ? 'text-[#49baff] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#49baff] after:rounded-full'
                  : 'text-[#333333] hover:text-[#49baff]'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:text-[#49baff] hover:bg-white/80 focus:outline-none"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] backdrop-blur-md border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activePage.toLowerCase() === item.label.toLowerCase();
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                  ? 'bg-[#49baff]/10 text-[#49baff] font-semibold'
                  : 'text-[#333333] hover:bg-gray-50 hover:text-[#49baff]'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

