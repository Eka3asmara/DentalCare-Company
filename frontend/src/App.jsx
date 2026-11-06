import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Beranda from './pages/company/beranda';
import Profil from './pages/company/profil';
import Dokter from './pages/company/dokter';
import DetailDokter from './pages/company/detailDokter';
import Layanan from './pages/company/layanan';
import DetailLayananBehel from './pages/company/detailLayanan-behel';
import DetailLayananUmum from './pages/company/detailLayanan-umum';
import DetailLayananRoot from './pages/company/detailLayanan-root';
import DetailLayananCabutGigi from './pages/company/detailLayanan-cabut-gigi';
import DetailLayananGigiPalsu from './pages/company/detailLayanan-gigi-palsu';
import DetailLayananImplan from './pages/company/detailLayanan-implan';
import DetailLayananEstetikGigi from './pages/company/detailLayanan-estetik-gigi';

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    try {
      return sessionStorage.getItem('dentalcare_active_page') || 'Beranda';
    } catch {
      return 'Beranda';
    }
  });
  const [selectedDoctorId, setSelectedDoctorId] = useState(() => {
    try {
      return sessionStorage.getItem('dentalcare_selected_doctor') || 'drg-indira';
    } catch {
      return 'drg-indira';
    }
  });
  const [selectedServiceId, setSelectedServiceId] = useState(() => {
    try {
      return sessionStorage.getItem('dentalcare_selected_service') || 'behel-gigi';
    } catch {
      return 'behel-gigi';
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('dentalcare_active_page', activePage);
    } catch {}
  }, [activePage]);

  useEffect(() => {
    try {
      sessionStorage.setItem('dentalcare_selected_doctor', selectedDoctorId);
    } catch {}
  }, [selectedDoctorId]);

  useEffect(() => {
    try {
      sessionStorage.setItem('dentalcare_selected_service', selectedServiceId);
    } catch {}
  }, [selectedServiceId]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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

  const renderDetailLayanan = () => {
    switch (selectedServiceId) {
      case 'gigi-umum':
        return <DetailLayananUmum onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'saluran-akar':
        return <DetailLayananRoot onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'pencabutan-gigi':
      case 'cabut-gigi':
        return <DetailLayananCabutGigi onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'gigi-palsu-crown':
      case 'gigi-palsu':
        return <DetailLayananGigiPalsu onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'implan-gigi':
      case 'implan':
        return <DetailLayananImplan onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'estetik-gigi':
      case 'estetik':
        return <DetailLayananEstetikGigi onNavigate={handleNavigate} onSelectService={handleSelectService} />;
      case 'behel-gigi':
      case 'behel':
      default:
        return <DetailLayananBehel onNavigate={handleNavigate} onSelectService={handleSelectService} />;
    }
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
        return renderDetailLayanan();
      case 'beranda':
      default:
        return <Beranda onNavigate={handleNavigate} onSelectService={handleSelectService} />;
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
