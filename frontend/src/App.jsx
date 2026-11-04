import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Beranda from './pages/company/beranda';
import Profil from './pages/company/profil';
import Dokter from './pages/company/dokter';
import DetailDokter from './pages/company/detailDokter';
import Layanan from './pages/company/layanan';
import DetailLayanan from './pages/company/detailLayanan';

export default function App() {
  const [activePage, setActivePage] = useState('Beranda');
  const [selectedDoctorId, setSelectedDoctorId] = useState('drg-indira');
  const [selectedServiceId, setSelectedServiceId] = useState('behel-gigi');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleNavigate = (pageName) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctorId(doctorId);
    setActivePage('DetailDokter');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setActivePage('DetailLayanan');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const renderContent = () => {
    switch (activePage.toLowerCase()) {
      case 'profil':
        return <Profil />;
      case 'dokter':
        return <Dokter onSelectDoctor={handleSelectDoctor} />;
      case 'detaildokter':
        return (
          <DetailDokter
            doctorId={selectedDoctorId}
            onNavigate={handleNavigate}
          />
        );
      case 'layanan':
        return <Layanan onSelectService={handleSelectService} />;
      case 'detaillayanan':
        return (
          <DetailLayanan
            serviceId={selectedServiceId}
            onNavigate={handleNavigate}
          />
        );
      case 'beranda':
      default:
        return <Beranda />;
    }
  };

  // Keep navigation tab active state matching sub-pages
  const currentNavTab =
    activePage === 'DetailDokter'
      ? 'Dokter'
      : activePage === 'DetailLayanan'
      ? 'Layanan'
      : activePage;

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8ff] text-[#333333] font-['Poppins',sans-serif] selection:bg-[#49baff]/20 selection:text-[#49baff]">
      {/* 1. Header / Navbar Component */}
      <Navbar
        activePage={currentNavTab}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Page Content (Dinamis: Beranda / Profil / Dokter / DetailDokter / Layanan / DetailLayanan) */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* 3. Footer Component */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
