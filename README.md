# IN Dental Care — Care for Every Smile

Website resmi company profile dan layanan kesehatan gigi untuk IN Dental Care. Dibangun dengan arsitektur Single Page Application (SPA) modern, performa tinggi, dan berorientasi pada kenyamanan pengguna (mobile-first responsive design).

---

## Fitur Utama

- **Single Page Application (SPA) & Dynamic Routing:** Navigasi antar-halaman berjalan instan dan mulus tanpa reload halaman (client-side state navigation).
- **Mobile-First Responsive Design:** Desain yang disesuaikan secara proporsional untuk semua ukuran layar (Mobile `< 640px`, Tablet `640px – 1023px`, dan Desktop `≥ 1024px`).
- **Performa Cepat & Ringan:**
  - **Code Splitting (React.lazy & Suspense):** Halaman sekunder hanya diunduh saat dibutuhkan sehingga loading awal website sangat instan.
  - **Kompresi Gambar WebP:** Seluruh aset gambar dioptimasi ke format WebP (menghemat ukuran file hingga 81.5%).
  - **Native Lazy Loading (`loading="lazy"`):** Pengunduhan gambar dilakukan sesuai posisi gulir layar (viewport).
- **Rincian Layanan & Modal Harga:** Menampilkan 7 kategori perawatan gigi lengkap dengan pop-up rincian tindakan dan transparansi daftar harga.
- **Profil Tim Dokter & Jadwal Praktik:** Informasi lengkap profil dokter beserta jadwal praktik terintegrasi untuk 2 cabang (Cabang Garuda & Cabang Muchtar Raya).
- **Integrasi WhatsApp Booking:** Tombol konsultasi langsung terhubung ke WhatsApp Admin resmi cabang terkait dengan template pesan otomatis.
- **Session Persistence & Smart Scroll:** Otomatis mengingat halaman terakhir yang dikunjungi saat browser di-refresh dan selalu menggulir ke bagian atas halaman secara otomatis.

---

## Teknologi yang Digunakan

- React (v19) - Library JavaScript utama berbasis komponen
- Vite (v8) - Build tool dan bundler pengembangan cepat
- Tailwind CSS (v4) - Framework styling utility-first
- Poppins - Font Google Sans-Serif modern dan bersih
- SVG & WebP - Format aset grafis dan kompresi gambar ringan

---

## Struktur Direktori Proyek

```text
DentalCare/
├── frontend/
│   ├── public/                # Aset statis publik
│   ├── src/
│   │   ├── assets/
│   │   │   └── image/         # Aset foto dan ilustrasi berformat .webp
│   │   ├── components/        # Komponen reusable
│   │   │   ├── layout/        # Navbar & Footer
│   │   │   ├── Icons.jsx      # Kumpulan ikon SVG
│   │   │   └── TreatmentModal.jsx # Pop-up rincian jenis perawatan & harga
│   │   ├── pages/
│   │   │   └── company/       # Halaman utama & detail
│   │   │       ├── beranda.jsx
│   │   │       ├── profil.jsx
│   │   │       ├── dokter.jsx
│   │   │       ├── detailDokter.jsx
│   │   │       ├── layanan.jsx
│   │   │       └── detailLayanan-*.jsx # 7 Halaman detail spesifik layanan
│   │   ├── App.jsx            # Entry point komponen SPA & Lazy Routing
│   │   ├── main.jsx           # Mount React ke DOM root
│   │   └── index.css          # Tailwind CSS v4 & custom animations
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Lisensi
Proyek ini dibuat untuk keperluan representasi klinik gigi IN Dental Care. Seluruh hak cipta konten dan aset dilindungi.
