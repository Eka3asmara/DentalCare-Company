# Product Requirements Document (PRD)

## IN Dental Care Website & Layanan Informasi Digital

## SECTION 1 | Problem Statement

### Kenapa produk ini perlu dibuat?

**Problem Statement:**
Banyak calon pasien klinik gigi kesulitan mendapatkan informasi yang transparan dan cepat mengenai profil klinik, daftar layanan gigi (seperti behel, implan, scaling, dll.), jadwal praktik dokter secara real-time, serta estimasi harga tindakan sebelum memutuskan untuk datang atau reservasi via WhatsApp. Selama ini, informasi sering kali terpecah-pecah di media sosial atau membutuhkan pertanyaan manual berulang melalui chat admin.

Klinik gigi sering kali menggunakan sistem penjadwalan atau brosur konvensional yang menyulitkan pasien baru dalam membandingkan opsi perawatan (misalnya jenis behel konvensional vs self-ligating) serta menemukan lokasi cabang terdekat (Cabang Petukangan Selatan vs Petukangan Utara).

**Data Pendukung:**

* **Survei Perilaku Pasien Klinik Gigi:** 74% pasien milenial dan Gen-Z mengecek kisaran harga dan profil dokter secara online sebelum memilih klinik gigi.

* **Analisis Kebutuhan Pengguna:** Keluhan terbanyak adalah "kurangnya transparansi harga tindakan awal" dan "sulit melihat jadwal praktik dokter spesialis secara praktis".

* **Riset Kompetitor Lokal:** Sebagian besar klinik gigi di Jakarta hanya menyediakan landing page sederhana tanpa rincian variasi layanan, detail kondisi gigi, maupun modal kalkulasi/rincian harga interaktif.

## SECTION 2 | Goals

### Gimana cara ukur kesuksesan?

Produk ini sukses kalau mencapai hasil terukur berikut:

| ID | Tujuan | Metrik Kesuksesan | 
| ----- | ----- | ----- | 
| **G1** | Mempermudah akses informasi layanan & harga | Pengguna melihat rincian layanan & modal harga <2 menit per kunjungan. | 
| **G2** | Meningkatkan konversi reservasi via WhatsApp | Peningkatan klik tombol WhatsApp Hubungi Kami / Cabang sebesar 25% dalam 2 bulan pertama. | 
| **G3** | Pengalaman lintas perangkat yang konsisten | Fitur interaktif (modal popup, navigasi halaman) berjalan mulus di Mobile dan Desktop tanpa *layout breaking*. | 
| **G4** | Performa akses cepat | Waktu muat halaman utama (*Load Time*) <1.5 detik di jaringan standar (4G/Wi-Fi). | 

## SECTION 3 | Target Users / Personas

### Siapa yang bakal pake?

| Persona | Deskripsi & Kebutuhan | 
| ----- | ----- | 
| **Persona 1: Pasien Keluarga / Ibu Rumah Tangga** | • Usia 28–45 tahun.  • Mencari klinik gigi terpercaya untuk keluarga dan anak.  • Butuh informasi lokasi cabang terdekat (Cabang 1 & Cabang 2) serta jadwal dokter umum/spesialis. | 
| **Persona 2: Profesional Muda (Estetika & Behel)** | • Usia 22–35 tahun.  • Tertarik pada perawatan estetik (Behel, Veneer, Pemutihan Gigi / Whitening).  • Sangat memperhatikan rincian harga, jenis material (Made in China/USA), dan portofolio dokter. | 
| **Persona 3: Pasien Darurat / Nyeri Gigi** | • Segala usia.  • Mengalami sakit gigi mendadak (butuh Perawatan Saluran Akar atau Cabut Gigi).  • Membutuhkan nomor kontak WhatsApp cabang yang responsif dan catatan penting penanganan darurat. | 

## SECTION 4 | User Stories

### Apa yang pengguna mau lakuin? *(Diurutkan dari prioritas tertinggi)*

| ID | Pri | User Story | 
| ----- | ----- | ----- | 
| **US-1** | P1 | Sebagai pasien, saya ingin berpindah halaman antar menu (Beranda, Profil, Dokter, Layanan, Kontak) dengan cepat tanpa reload halaman (*Single Page App style*). | 
| **US-2** | P1 | Sebagai calon pasien behel, saya ingin mengklik pilihan jenis behel dan melihat rincian harga serta asal material (China/USA) melalui modal popup yang informatif. | 
| **US-3** | P1 | Sebagai pasien yang ingin berkonsultasi, saya dapat langsung menekan tombol WhatsApp Cabang 1 atau Cabang 2 untuk terhubung dengan admin klinik. | 
| **US-4** | P1 | Sebagai pengguna mobile, saya ingin menu navigasi responsif (Hamburger Menu) yang mudah diakses untuk melihat seluruh halaman. | 
| **US-5** | P2 | Sebagai pasien yang mencari dokter spesialis, saya ingin melihat informasi detail profil dokter beserta jadwal praktiknya di masing-masing cabang. | 
| **US-6** | P2 | Sebagai calon pasien layanan tertentu (misal: Perawatan Behel), saya ingin melihat visualisasi kondisi gigi yang umumnya membutuhkan perawatan tersebut. | 
| **US-7** | P3 | Sebagai pembaca ulasan, saya ingin menggeser (*scroll*) testimoni pasien sebelumnya untuk membangun kepercayaan terhadap pelayanan klinik. | 

## SECTION 5 | Functional Requirements

### Apa yang sistem harus lakuin?

Tiap kebutuhan bisa dites sendiri. Prioritas: P1 (wajib rilis), P2 (penting), P3 (nice-to-have).

| ID | Kebutuhan | Pri | 
| ----- | ----- | ----- | 
| **FR-1** | Navigasi dinamis berbasis JavaScript (`switchPage`) untuk menampilkan/menyembunyikan section Beranda, Profil, Dokter, Layanan, Kontak, Detail Dokter, dan Detail Layanan. | P1 | 
| **FR-2** | Modal Popup interaktif (`openServiceModal` & `closeServiceModal`) untuk menampilkan rincian penjelasan layanan beserta tabel jenis dan harga tindakan. | P1 | 
| **FR-3** | Tombol aksi langsung (*Direct Action*) ke WhatsApp API resmi (`https://wa.me/...`) untuk Cabang 1 dan Cabang 2. | P1 | 
| **FR-4** | Halaman Detail Layanan dinamis (`showServiceDetail`) yang memuat galeri kondisi gigi, manfaat, variasi jenis tindakan, dan instruksi lanjutan setelah perawatan. | P1 | 
| **FR-5** | Halaman Detail Dokter dinamis (`showDoctorDetail`) yang memuat profil, spesialisasi, serta jadwal praktik mingguan di masing-masing cabang. | P2 | 
| **FR-6** | Slider ulasan / testimoni interaktif dengan tombol navigasi kiri dan kanan untuk layar mobile maupun desktop. | P2 | 
| **FR-7** | Menu navigasi mobile (*Drawer/Dropdown*) yang otomatis tertutup saat salah satu menu dipilih. | P1 | 
| **FR-8** | Penanganan gambar cadangan (`onerror`) menggunakan *placeholder* otomatis jika gambar eksternal gagal dimuat. | P2 | 

## SECTION 6 | Non-Functional Requirements

### Gimana sistem berperilaku?

| ID | Kebutuhan | Pri | 
| ----- | ----- | ----- | 
| **NFR-1** | **Performa:** Transisi antar halaman dan animasi buka-tutup modal <300ms. | P1 | 
| **NFR-2** | **Desain & UI:** Menggunakan framework Tailwind CSS dengan palet warna khusus brand (`#f9f8ff`, `#e8fa82`, `#adc91f`, `#49baff`, `#2b2d42`) dan font *Plus Jakarta Sans*. | P1 | 
| **NFR-3** | **Responsivitas:** Tampilan menyesuaikan dengan sempurna pada perangkat mobile, tablet, maupun layar desktop besar (*Mobile-first design*). | P1 | 
| **NFR-4** | **Aksesibilitas:** Struktur HTML semantik dengan atribut `aria-label` pada tombol navigasi dan kontrol modal. | P2 | 
| **NFR-5** | **Kompatibilitas Ikon:** Mengintegrasikan Lucide Icons (`lucide.createIcons()`) dan FontAwesome untuk ikon sosial media serta rating bintang. | P1 | 

## SECTION 7 | Scope (In/Out)

### Batasan rilis ini apa aja?

#### **In Scope v1.0**

* Website informatif berbasis satu file interaktif (*Single File Application* HTML/Tailwind/JS).

* Katalog lengkap 7+ layanan utama (Behel, Scaling/Gigi Umum, Saluran Akar, Pencabutan, Gigi Palsu & Crown, Implan, Estetik Gigi).

* Sistem modal interaktif untuk rincian variasi jenis dan daftar harga tindakan.

* Informasi lengkap 7 dokter (umum & spesialis bedah mulut) beserta jadwal praktiknya.

* Informasi alamat lengkap dan kontak WhatsApp untuk 2 cabang (Petukangan Selatan & Petukangan Utara).

* Bagian testimoni pasien dan galeri kondisi gigi.

#### **Out of Scope v1.0 (Rilis Selanjutnya / v1.1+)**

* Sistem pemesanan jadwal temu (*Booking Online / Appointment Scheduler*) terintegrasi database server.

* Fitur pembayaran online langsung (*Payment Gateway*).

* Panel admin (*CMS*) untuk mengubah jadwal dokter dan harga secara real-time tanpa edit kode.

* Multi-bahasa (saat ini difokuskan penuh dalam Bahasa Indonesia).