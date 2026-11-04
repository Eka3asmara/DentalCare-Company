# IN Dental Care - Design System & Guidelines (DESIGN.md)

Dokumen ini mendefinisikan standar desain visual, palet warna, tipografi, dan bahasa komponen yang digunakan untuk membangun antarmuka website **IN Dental Care**. Tujuannya adalah menjaga konsistensi estetika di setiap halaman dan komponen interaktif.

## 1. Brand Identity & Filosofi Visual

* **Esensi Merek:** Profesional, ramah, bersih, dan menenangkan (mengurangi kecemasan pasien saat berkunjung ke klinik gigi).

* **Tone of Voice:** Edukatif, bersahabat, transparan, dan terpercaya.

* **Tagline Resmi:** `#CareForEverySmile`

## 2. Palet Warna (Color Palette)

Palet warna dirancang dengan nuansa kesehatan modern yang memadukan warna latar bersih dengan aksen hijau limau segar dan biru langit yang menenangkan.

| Token / Nama Warna | Kode HEX | Kegunaan Utama | 
| ----- | ----- | ----- | 
| **Brand Background** | `#f9f8ff` | Warna latar belakang utama seluruh halaman (*body background*). | 
| **Brand Lime** | `#e5ff8f` | Aksen hijau terang (latar bagian visi, statistik, dan footer). | 
| **Brand Lime Dark** | `#adc91f` | Aksen sekunder, nomor statistik, badge kategori, dan border penekanan. | 
| **Brand Blue** | `#49baff` | Warna aksen utama tombol, teks judul penting, dan tautan navigasi aktif. | 
| **Brand Blue Hover** | `#98cfff` | Warna interaksi saat tombol utama disentuh/di-hover. | 
| **Brand Charcoal** | `#333333` | Warna teks utama (*headings* dan paragraf isi). | 
| **WhatsApp Green** | `#31cc1e` | Tombol aksi cepat kontak dan reservasi WhatsApp cabang. | 

## 3. Tipografi (Typography)

* **Font Keluarga Utama:** `Poppins`, sans-serif (diimpor langsung dari Google Fonts).

* **Skala Ukuran Teks & Bobot:**

  * **Hero Title (H1):** 4xl / 5xl / 6xl, `font-semibold`, leading ketat (`1.15` - `1.2`).

  * **Section Heading (H2):** 3xl / 4xl, `font-semibold`.

  * **Card Title (H3):** base / lg, `font-semibold`.

  * **Body Text:** xs / sm / base, `font-normal` hingga `font-medium`, dengan leading `relaxed` agar nyaman dibaca.

## 4. Sistem Spasi & Bentuk Geometris (Layout & Shape System)

* **Border Radius Khusus (Hero Image):**

  * Menggunakan kelas `.hero-img-shape` dengan lengkungan asimetris unik: `border-radius: 165px 41px 225px 100px;` untuk memberikan kesan organik dan ramah.

* **Card Radius:** Menggunakan `rounded-2xl` hingga `rounded-3xl` pada kartu layanan, dokter, dan kontainer modal.

* **Shadow Tokens:**

  * `card-shadow`: `box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.12);`

  * `shadow-custom`: `box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.25);`

## 5. Komponen UI & Interaksi (Component Guidelines)

### A. Tombol Utama (Primary Buttons)

* **Warna:** `bg-brand-blue` dengan teks putih.

* **Hover State:** Berubah ke `bg-brand-blueHover` dengan transisi halus dan efek `transform hover:-translate-y-0.5`.

* **Border Radius:** `rounded-2xl` atau `rounded-full` lengkap dengan ikon panah (`arrow-right`) untuk dorongan aksi.

### B. Kartu Layanan & Dokter (Cards)

* **Latar:** Putih bersih (`bg-white`) dengan border tipis dan bayangan lembut (`card-shadow`).

* **Interaksi:** Efek perbesaran halus (`hover:scale-105` atau `hover:shadow-xl`) saat kursor mendekati kartu.

### C. Modal Popup Detail Harga & Layanan

* **Latar Belakang:** Efek gelap transparan dengan *backdrop-blur* (`bg-black/50 backdrop-blur-sm`).

* **Animasi:** Skala transisi dari `scale-95` ke `scale-100` dengan durasi 300ms.

* **Struktur Konten:** Gambar header penuh, judul tebal berukuran besar, deskripsi informatif, serta tabel rincian jenis layanan beserta kisaran harga transparan.

### D. Navigasi & Header

* **Sticky Header:** Tetap berada di bagian atas layar dengan efek transparan blur (`backdrop-blur-md`).

* **Active State Navigasi:** Tautan aktif ditandai dengan warna `brand-blue` (`#49baff`) dan `font-bold`.