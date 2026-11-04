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
    value: "20+",
    title: "Jumlah Layanan",
    desc: "Jenis Layanan perawatan gigi modern untuk memenuhi berbagai kebutuhan Anda."
  }
];

export const BRANCHES_DATA = {
  cabang1: {
    id: "cabang1",
    label: "Cabang 1",
    shortName: "Cabang 1",
    subDistrict: "Petukangan Selatan",
    address: "Jl. Garuda No.21, RT.8/RW.1, Petukangan Sel., Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270",
    phone: "+62 812-1915-709",
    phoneClean: "628121915709",
    email: "indentalcareclinic@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Jl.+Garuda+No.21,+Petukangan+Sel.,+Kec.+Pesanggrahan,+Jakarta+Selatan",
    waUrl: "https://wa.me/628121915709?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%201,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
  },
  cabang2: {
    id: "cabang2",
    label: "Cabang 2",
    shortName: "Cabang 2",
    subDistrict: "Petukangan Utara",
    address: "Jl. H. Muchtar Raya No.9D, RT.1/RW.01, Petukangan Utara, JAKARTA, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260",
    phone: "+62 811-9339-708",
    phoneClean: "628119339708",
    email: "indentalcareclinic@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Jl.+H.+Muchtar+Raya+No.9D,+Petukangan+Utara,+Jakarta+Selatan",
    waUrl: "https://wa.me/628119339708?text=Halo%20Admin%20IN%20Dental%20Care%20Cabang%202,%20saya%20ingin%20konsultasi%20jadwal%20perawatan"
  }
};

export const SERVICES_DATA = [
  {
    id: "tambal-crown",
    title: "Tambal Crown",
    description: "Solusi praktis memperkuat dan mengembalikan bentuk asli gigi yang rusak. Tampil alami, kuat, dan tahan lama.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-blue-50",
    category: "Restorasi Gigi",
    longDescription: "Perawatan restorasi mahkota gigi tiruan (crown) dan penambalan estetik untuk memperbaiki struktur gigi berlubang besar, patah, atau pasca perawatan saluran akar agar kembali berfungsi mengunyah secara optimal dengan tampilan menyerupai gigi asli.",
    benefits: [
      "Mengembalikan fungsi kunyah dan estetika senyum secara alami",
      "Melindungi struktur gigi rapuh dari risiko patah permanen",
      "Material biokompatibel bermutu tinggi yang tahan bertahun-tahun",
      "Warna disesuaikan persis dengan gradasi gigi asli Anda"
    ],
    pricing: [
      { type: "Tambal Estetik Komposit Light Cure", detail: "Bahan nano-hybrid sewarna gigi asli", price: "Rp 350.000 - Rp 600.000 / gigi" },
      { type: "Crown Porcelain Fused to Metal (PFM)", detail: "Kombinasi kekuatan logam dengan lapisan porselen", price: "Rp 1.800.000 - Rp 2.500.000 / gigi" },
      { type: "Crown All-Porcelain / E-Max", detail: "Translusensi sangat natural untuk gigi depan", price: "Rp 3.000.000 - Rp 4.500.000 / gigi" },
      { type: "Crown Zirconia Premium", detail: "Kekuatan maksimal tanpa logam, anti-alergi", price: "Rp 4.500.000 - Rp 6.000.000 / gigi" }
    ]
  },
  {
    id: "pemasangan-behel",
    title: "Pemasangan Behel",
    description: "Solusi merapikan posisi gigi dan gigitan untuk estetika senyum yang lebih rapi, sehat, dan percaya diri.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-emerald-50",
    category: "Ortodonti",
    longDescription: "Perawatan ortodonti komprehensif untuk mengoreksi susunan gigi berjejal (crowded), renggang, tonggos, atau gigitan silang (crossbite). Dilakukan oleh dokter berpengalaman dengan pilihan material berkualitas tinggi.",
    benefits: [
      "Meningkatkan rasa percaya diri dengan senyum simetris dan rapi",
      "Memudahkan pembersihan sela gigi sehingga mencegah karang dan gigi berlubang",
      "Memperbaiki artikulasi bicara dan fungsi pengunyahan",
      "Tersedia pilihan braket transparan dan self-ligating minim rasa ngilu"
    ],
    pricing: [
      { type: "Behel Metal Konvensional (Made in China)", detail: "Ekonomis & efektif merapikan gigi", price: "Rp 3.500.000 - Rp 5.000.000" },
      { type: "Behel Metal Premium (Made in USA - Roth/MBT)", detail: "Presisi tinggi, slot nyaman, anti karat medis", price: "Rp 6.500.000 - Rp 8.500.000" },
      { type: "Behel Keramik / Sapphire Transparan (USA)", detail: "Warna jernih estetik mengikuti warna gigi", price: "Rp 9.000.000 - Rp 12.000.000" },
      { type: "Behel Self-Ligating Damon System (USA)", detail: "Tanpa karet elastis, waktu kontrol lebih singkat & minim sakit", price: "Rp 14.000.000 - Rp 18.000.000" }
    ]
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Solusi menyelamatkan gigi yang terinfeksi atau nyeri parah tanpa perlu dicabut. Aman, nyaman, dan menghentikan rasa sakit.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-amber-50",
    category: "Endodonti",
    longDescription: "Perawatan saluran akar (PSA) berfokus membersihkan jaringan pulpa yang meradang atau terinfeksi kuman, mensterilkan saluran mikro akar gigi, dan menutupnya secara kedap agar gigi asli tetap dapat dipertahankan seumur hidup.",
    benefits: [
      "Menghilangkan rasa nyeri berdenyut secara tuntas tanpa cabut gigi",
      "Mencegah infeksi dan nanah menyebar ke tulang rahang",
      "Mempertahankan struktur alami rahang dan kemampuan mengunyah",
      "Dikerjakan dengan anestesi lokal modern yang nyaman dan minim rasa sakit"
    ],
    pricing: [
      { type: "PSA Gigi Depan (Anterior)", detail: "1 saluran akar, estetika terjaga", price: "Rp 900.000 - Rp 1.400.000 / saluran" },
      { type: "PSA Gigi Premolar", detail: "1 - 2 saluran akar dengan sterilisasi mikro", price: "Rp 1.300.000 - Rp 1.800.000 / saluran" },
      { type: "PSA Gigi Geraham (Molar)", detail: "3 - 4 saluran akar kompleks dengan rotary system", price: "Rp 1.800.000 - Rp 2.500.000 / saluran" },
      { type: "Pengobatan Darurat & Sterilisasi Awal", detail: "Pereda nyeri darurat & pulpotomi", price: "Rp 400.000 - Rp 600.000" }
    ]
  },
  {
    id: "cabut-gigi",
    title: "Cabut Gigi",
    description: "Prosedur pencabutan gigi yang rusak parah atau bermasalah secara aman, cepat, dan minim rasa sakit.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    fallbackColor: "bg-rose-50",
    category: "Bedah Mulut",
    longDescription: "Tindakan ekstraksi gigi yang sudah tidak dapat dipertahankan akibat infeksi berat, keropos akar habis, sisa akar tajam, atau gigi bungsu yang tumbuh miring (impaksi) dan menekan gigi sebelahnya.",
    benefits: [
      "Menghentikan sumber infeksi berulang dan pembengkakan gusi",
      "Teknik atraumatik untuk meminimalkan trauma jaringan dan mempercepat penyembuhan",
      "Ditangani oleh dokter gigi umum dan spesialis bedah mulut berpengalaman",
      "Protokol anestesi modern untuk kenyamanan maksimal selama tindakan"
    ],
    pricing: [
      { type: "Cabut Gigi Susu Anak", detail: "Anestesi topikal oles atau injeksi dingin", price: "Rp 150.000 - Rp 250.000" },
      { type: "Cabut Gigi Dewasa Sederhana", detail: "Gigi goyang atau berakar tunggal", price: "Rp 300.000 - Rp 500.000" },
      { type: "Cabut Gigi Penyulit / Sisa Akar", detail: "Akar bengkok atau mahkota rapuh", price: "Rp 600.000 - Rp 950.000" },
      { type: "Odontektomi Gigi Bungsu Impaksi", detail: "Bedah minor oleh Dokter Spesialis Bedah Mulut", price: "Rp 1.800.000 - Rp 3.500.000" }
    ]
  }
];

export const SERVICES_PAGE_DATA = [
  {
    id: "gigi-umum",
    title: "Perawatan Gigi Umum",
    description: "Perawatan untuk membersihkan gigi, mengatasi kerusakan, dan menjaga kesehatan serta estetika senyum Anda.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    category: "Preventif & Konservasi",
    longDescription: "Layanan pemeriksaan menyeluruh, penambalan komposit estetik sewarna gigi asli, serta pembersihan karang gigi (scaling ultrasonik) untuk mencegah bau mulut, gigi berlubang, dan radang gusi.",
    benefits: [
      "Pemeriksaan gigi dan mulut komprehensif berkala",
      "Pembersihan karang gigi ultrasonik tuntas tanpa merusak enamel",
      "Penambalan estetik nano-hybrid yang kuat dan sewarna gigi",
      "Konsultasi perawatan mandiri di rumah untuk seluruh keluarga"
    ],
    pricing: [
      { type: "Konsultasi & Pemeriksaan Intraoral", detail: "Pemeriksaan visual dokter gigi", price: "Rp 100.000 - Rp 150.000" },
      { type: "Scaling Gigi Ringan - Sedang (Pembersihan Karang)", detail: "Rahang atas & bawah dengan getaran ultrasonik", price: "Rp 250.000 - Rp 450.000" },
      { type: "Tambal Komposit Estetik Sederhana", detail: "Bahan nano-hybrid sewarna gigi", price: "Rp 300.000 - Rp 450.000 / gigi" },
      { type: "Tambal Komposit Kompleks / Kelas II", detail: "Restorasi dinding samping gigi", price: "Rp 450.000 - Rp 650.000 / gigi" }
    ]
  },
  {
    id: "saluran-akar",
    title: "Perawatan Saluran Akar",
    description: "Perawatan untuk mengatasi infeksi atau kerusakan pada bagian dalam gigi agar gigi tetap dapat dipertahankan.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    category: "Endodonti",
    longDescription: "Tindakan sterilisasi dan penutupan saluran saraf gigi yang meradang atau terinfeksi bakteri akibat lubang gigi yang sangat dalam. Menyelamatkan gigi asli agar tidak perlu dicabut.",
    benefits: [
      "Menghentikan rasa nyeri berdenyut yang menusuk secara tuntas",
      "Mencegah pembentukan abses/nanah di ujung akar gigi",
      "Mempertahankan fungsi pengunyahan alami gigi asli",
      "Dilakukan dengan teknologi rotary modern minim rasa ngilu"
    ],
    pricing: [
      { type: "PSA Gigi Depan (Anterior)", detail: "1 saluran akar", price: "Rp 900.000 - Rp 1.400.000 / saluran" },
      { type: "PSA Gigi Geraham Kecil (Premolar)", detail: "1 - 2 saluran akar", price: "Rp 1.300.000 - Rp 1.800.000 / saluran" },
      { type: "PSA Gigi Geraham Besar (Molar)", detail: "3 - 4 saluran akar kompleks", price: "Rp 1.800.000 - Rp 2.500.000 / saluran" },
      { type: "Pengobatan Darurat & Pulpotomi", detail: "Pereda nyeri akut dan sterilisasi awal", price: "Rp 400.000 - Rp 600.000" }
    ]
  },
  {
    id: "pencabutan-gigi",
    title: "Pencabutan Gigi",
    description: "Tindakan pencabutan gigi dewasa, gigi susu, dan gigi bungsu sesuai kondisi serta kebutuhan pasien.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    category: "Bedah Mulut",
    longDescription: "Prosedur ekstraksi gigi yang sudah tidak dapat dipertahankan atau gigi bungsu yang tumbuh miring (impaksi). Dilakukan oleh dokter gigi umum dan dokter spesialis bedah mulut dengan teknik atraumatik.",
    benefits: [
      "Menghilangkan sumber infeksi kronis dan pembengkakan gusi",
      "Teknik pencabutan minim trauma untuk penyembuhan lebih cepat",
      "Didukung pilihan anestesi lokal yang nyaman dan efektif",
      "Odontektomi ditangani langsung oleh Spesialis Bedah Mulut"
    ],
    pricing: [
      { type: "Cabut Gigi Susu Anak", detail: "Anestesi topikal oles / injeksi dingin", price: "Rp 150.000 - Rp 250.000" },
      { type: "Cabut Gigi Dewasa Sederhana", detail: "Gigi berakar tunggal / goyang", price: "Rp 300.000 - Rp 500.000" },
      { type: "Cabut Gigi Penyulit / Sisa Akar", detail: "Akar bengkok / mahkota rapuh", price: "Rp 600.000 - Rp 950.000" },
      { type: "Odontektomi Gigi Bungsu Impaksi", detail: "Operasi bedah minor oleh Spesialis Bedah Mulut", price: "Rp 1.800.000 - Rp 3.500.000" }
    ]
  },
  {
    id: "behel-gigi",
    title: "Perawatan Behel Gigi",
    description: "Perawatan behel membantu merapikan susunan gigi dan memperbaiki gigitan untuk senyum yang lebih rapi dan sehat.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    category: "Ortodonti",
    longDescription: "Perawatan merapikan struktur gigi yang berjejal, renggang, tonggos, atau gigitan silang menggunakan kawat gigi konvensional hingga teknologi self-ligating modern tanpa karet elastis.",
    benefits: [
      "Meningkatkan estetika senyum dan rasa percaya diri",
      "Memperbaiki fungsi pengunyahan dan artikulasi bicara",
      "Memudahkan perawatan kebersihan gigi jangka panjang",
      "Pilihan material beragam dari China, USA, hingga transparan"
    ],
    pricing: [
      { type: "Behel Metal Konvensional (Made in China)", detail: "Ekonomis & efektif merapikan gigi", price: "Rp 3.500.000 - Rp 5.000.000" },
      { type: "Behel Metal Premium (Made in USA - Roth/MBT)", detail: "Presisi tinggi & slot nyaman", price: "Rp 6.500.000 - Rp 8.500.000" },
      { type: "Behel Keramik Transparan (USA)", detail: "Warna jernih estetik mengikuti warna gigi", price: "Rp 9.000.000 - Rp 12.000.000" },
      { type: "Behel Self-Ligating Damon System (USA)", detail: "Minim gesekan, waktu kontrol fleksibel & minim sakit", price: "Rp 14.000.000 - Rp 18.000.000" }
    ]
  },
  {
    id: "gigi-palsu-crown",
    title: "Gigi Palsu dan Crown",
    description: "Perawatan gigi palsu dan crown membantu menggantikan gigi yang hilang atau memperbaiki gigi yang rusak.",
    image: "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=800&q=80",
    category: "Prostodonsia",
    longDescription: "Restorasi mahkota tiruan (dental crown) dan pembuatan gigi tiruan lepasan (akrilik / valplast lentur) untuk mengembalikan struktur gigi yang rusak parah atau menggantikan gigi yang telah tanggal.",
    benefits: [
      "Mengembalikan kemampuan mengunyah makanan dengan nyaman",
      "Mencegah gigi tetangga bergeser ke ruang kosong",
      "Material kuat dan estetik yang menyerupai gigi asli",
      "Tersedia pilihan bahan fleksibel tanpa kawat logam tajam"
    ],
    pricing: [
      { type: "Crown Porcelain Fused to Metal (PFM)", detail: "Kombinasi rangka logam dan lapisan porselen", price: "Rp 1.800.000 - Rp 2.500.000 / gigi" },
      { type: "Crown All-Porcelain / E-Max", detail: "Translusensi alami sempurna untuk gigi depan", price: "Rp 3.000.000 - Rp 4.500.000 / gigi" },
      { type: "Crown Zirconia Premium", detail: "Kekuatan maksimal tanpa logam, anti alergi", price: "Rp 4.500.000 - Rp 6.000.000 / gigi" },
      { type: "Gigi Tiruan Lepasan Valplast (Fleksibel)", detail: "Gigi tiruan lentur tanpa kawat pengait", price: "Rp 1.200.000 - Rp 2.500.000" }
    ]
  },
  {
    id: "implan-gigi",
    title: "Implan Gigi",
    description: "Implan gigi merupakan perawatan untuk menggantikan gigi yang hilang menggunakan penyangga khusus yang dipasang pada tulang rahang.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    category: "Implantologi",
    longDescription: "Solusi penanaman akar gigi tiruan titanium biokompatibel ke dalam tulang rahang sebagai pondasi permanen bagi mahkota gigi tiruan. Solusi paling stabil dan menyerupai gigi asli seumur hidup.",
    benefits: [
      "Solusi penggantian gigi permanen yang paling kokoh dan stabil",
      "Tidak perlu mengasah gigi sehat di sebelahnya",
      "Mencegah penyusutan tulang rahang akibat kehilangan gigi",
      "Rasa dan sensasi makan persis seperti gigi alami sendiri"
    ],
    pricing: [
      { type: "Implan Gigi Titanium Standar Internasional", detail: "Termasuk abutment & crown", price: "Rp 12.000.000 - Rp 15.000.000 / unit" },
      { type: "Implan Gigi Premium (USA / Swiss System)", detail: "Presisi tinggi dengan integrasi tulang cepat", price: "Rp 16.000.000 - Rp 20.000.000 / unit" },
      { type: "Bone Grafting (Penambahan Tulang)", detail: "Jika volume tulang rahang kurang tebal", price: "Rp 2.500.000 - Rp 4.500.000" }
    ]
  },
  {
    id: "estetik-gigi",
    title: "Perawatan Estetik Gigi",
    description: "Perawatan estetik gigi membantu memperbaiki tampilan gigi agar terlihat lebih cerah dan rapi.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    category: "Estetika Gigi",
    longDescription: "Rangkaian prosedur estetika kedokteran gigi termasuk pemutihan gigi klinis (in-office whitening / bleaching), dental veneer porselen atau komposit, dan gingivektomi untuk menciptakan senyum memikat dan cerah.",
    benefits: [
      "Mencerahkan warna gigi hingga beberapa tingkat lebih putih dalam 1 sesi",
      "Menutup sela gigi renggang dan bentuk gigi yang tidak simetris",
      "Menghilangkan noda membandel akibat kopi, teh, atau rokok",
      "Hasil langsung terlihat seketika setelah perawatan selesai"
    ],
    pricing: [
      { type: "In-Office Teeth Whitening (Bleaching Klinis)", detail: "1 sesi penyinaran khusus untuk mencerahkan gigi", price: "Rp 1.800.000 - Rp 2.800.000" },
      { type: "Direct Composite Veneer", detail: "Lapisan komposit estetik per gigi", price: "Rp 600.000 - Rp 950.000 / gigi" },
      { type: "Indirect Porcelain Veneer (E-Max)", detail: "Veneer lab porselen tahan noda permanen", price: "Rp 3.000.000 - Rp 4.500.000 / gigi" }
    ]
  }
];

export const ALL_EXTRA_SERVICES = [
  {
    id: "scaling-gigi",
    title: "Pembersihan Karang Gigi (Scaling)",
    category: "Preventif",
    description: "Pembersihan kalkulus / karang gigi menggunakan getaran ultrasonik untuk mencegah radang gusi dan bau mulut.",
    price: "Rp 250.000 - Rp 450.000"
  },
  {
    id: "teeth-whitening",
    title: "Pemutihan Gigi (Bleaching / Whitening)",
    category: "Estetika",
    description: "Mencerahkan warna gigi hingga beberapa tingkat lebih putih cerah dalam satu sesi perawatan klinis.",
    price: "Rp 1.800.000 - Rp 3.000.000"
  },
  {
    id: "dental-implant",
    title: "Implan Gigi (Dental Implant)",
    category: "Implantologi",
    description: "Akar gigi tiruan titanium permanen yang ditanamkan pada tulang rahang untuk menggantikan gigi yang hilang seumur hidup.",
    price: "Rp 12.000.000 - Rp 18.000.000"
  },
  {
    id: "gigi-tiruan",
    title: "Gigi Tiruan Lepasan (Valplast / Akrilik)",
    category: "Prostodonsia",
    description: "Plat gigi tiruan fleksibel atau akrilik yang nyaman dipakai untuk mengembalikan fungsi mengunyah sehari-hari.",
    price: "Rp 900.000 - Rp 2.500.000"
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
    initial: "D",
    name: "Dimas Pratama",
    avatarBg: "bg-[#8b5cf6]",
    time: "1 bulan lalu",
    rating: 5,
    comment: "Pasang behel di Cabang Petukangan Selatan pelayanannya sangat memuaskan. Dokternya menjelaskan detail opsi behel China vs USA secara transparan tanpa dipaksa. Sangat recommended untuk perawatan behel!"
  },
  {
    id: 5,
    initial: "R",
    name: "Rina Wijaya",
    avatarBg: "bg-[#06b6d4]",
    time: "3 minggu lalu",
    rating: 5,
    comment: "Tempatnya bersih, wangi, anak saya yang biasanya takut ke dokter gigi jadi nyaman dan kooperatif. Ruang tindakan modern dan dokternya sabar banget!"
  }
];

export const DOCTORS_FEATURED = [
  {
    role: "Dokter Gigi Umum",
    desc: "Pemeriksaan dan perawatan gigi dasar, penambalan, pembersihan karang, dan pencabutan sederhana."
  },
  {
    role: "Dokter Spesialis Bedah Mulut",
    desc: "Layanan bedah gigi dan mulut, operasi gigi bungsu (odontektomi), kista, dan implan gigi."
  }
];

export const DOCTORS_FULL_DATA = [
  {
    id: "drg-indira",
    name: "drg. Indira Nugrahani",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    education: "Universitas Prof. Dr. Moestopo (Beragama) - Pendiri IN Dental Care",
    focus: "Restorasi Gigi, Perawatan Saluran Akar, Perawatan Estetik & Konsultasi Menyeluruh",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Rabu", time: "15.00 - 20.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 20.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "15.00 - 20.00", status: "Praktik" },
      { day: "Minggu", time: "09.00 - 20.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Rabu, Minggu", hours: "15.00 - 20.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu, Minggu", hours: "15.00 - 20.00 WIB" }
    ]
  },
  {
    id: "drg-adria",
    name: "drg. Adria Permana Putra, Sp.BM",
    role: "Dokter Gigi Spesialis",
    specialistDetail: "Spesialis Bedah Mulut dan Maksilofasial",
    isSpecialist: true,
    gender: "male",
    image: null,
    education: "Spesialis Bedah Mulut & Maksilofasial",
    focus: "Odontektomi Gigi Bungsu Impaksi, Bedah Minor Gigi & Mulut, Dental Implant, Kista Mulut",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Selasa", time: "16.00 - 20.00", status: "Praktik" },
      { day: "Kamis", time: "16.00 - 20.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Sabtu", time: "13.00 - 18.00", status: "Praktik" },
      { day: "Minggu", time: "13.00 - 17.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Selasa & Kamis", hours: "16.00 - 20.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Sabtu & Minggu", hours: "13.00 - 18.00 WIB" }
    ]
  },
  {
    id: "drg-mhay",
    name: "drg. Mhay Chyntha Hariyana",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Perawatan Saluran Akar (PSA), Penambalan Komposit Nano-hybrid, Scaling Ultrasonik",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "13.00 - 19.00", status: "Praktik" },
      { day: "Kamis", time: "13.00 - 19.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Sabtu", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Senin & Kamis", hours: "13.00 - 19.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu & Sabtu", hours: "10.00 - 16.00 WIB" }
    ]
  },
  {
    id: "drg-larena",
    name: "drg. Larena",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Ortodonti Dasar (Pemasangan Behel), Estetika Senyum, Kontrol Rutin Ortodonti",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Selasa", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Jumat", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Senin", time: "14.00 - 19.00", status: "Praktik" },
      { day: "Kamis", time: "14.00 - 19.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Selasa & Jumat", hours: "10.00 - 16.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Senin & Kamis", hours: "14.00 - 19.00 WIB" }
    ]
  },
  {
    id: "drg-sherly",
    name: "drg. R. Sherly",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Perawatan Gigi Anak (Pediatri), Pencabutan Gigi Susu & Dewasa, Terapi Fluoride",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Rabu", time: "10.00 - 15.00", status: "Praktik" },
      { day: "Sabtu", time: "10.00 - 15.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Selasa", time: "13.00 - 18.00", status: "Praktik" },
      { day: "Jumat", time: "13.00 - 18.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Rabu & Sabtu", hours: "10.00 - 15.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Selasa & Jumat", hours: "13.00 - 18.00 WIB" }
    ]
  },
  {
    id: "drg-fara",
    name: "drg. Fara",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Pemutihan Gigi (Bleaching / Whitening), Pembersihan Karang Gigi, Penambalan Estetik",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Senin", time: "14.00 - 19.00", status: "Praktik" },
      { day: "Rabu", time: "14.00 - 19.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Kamis", time: "11.00 - 17.00", status: "Praktik" },
      { day: "Sabtu", time: "11.00 - 17.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Senin & Rabu", hours: "14.00 - 19.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Kamis & Sabtu", hours: "11.00 - 17.00 WIB" }
    ]
  },
  {
    id: "drg-sarah",
    name: "drg. Sarah",
    role: "Dokter Gigi Umum",
    isSpecialist: false,
    gender: "female",
    image: null,
    education: "Fakultas Kedokteran Gigi",
    focus: "Restorasi Mahkota (Crown), Penanganan Nyeri Gigi Akut, Perawatan Periodontal Ringan",
    bio: "Dokter IN Dental Care berkomitmen memberikan pelayanan kesehatan gigi dan mulut yang profesional, ramah, dan berkualitas, dengan mengutamakan kenyamanan serta kebutuhan setiap pasien.",
    schedulesBranch1: [
      { day: "Kamis", time: "11.00 - 17.00", status: "Praktik" },
      { day: "Jumat", time: "11.00 - 17.00", status: "Praktik" }
    ],
    schedulesBranch2: [
      { day: "Rabu", time: "10.00 - 16.00", status: "Praktik" },
      { day: "Minggu", time: "10.00 - 16.00", status: "Praktik" }
    ],
    schedules: [
      { branch: "Cabang 1 (Petukangan Selatan)", days: "Kamis & Jumat", hours: "11.00 - 17.00 WIB" },
      { branch: "Cabang 2 (Petukangan Utara)", days: "Rabu & Minggu", hours: "10.00 - 16.00 WIB" }
    ]
  }
];

export const TREATMENT_TYPES_MODAL_DATA = {
  "behel-konvensional": {
    id: "behel-konvensional",
    title: "Behel Konvensional",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    desc1: "Behel konvensional merupakan perawatan ortodonti yang menggunakan bracket dan kawat untuk membantu merapikan susunan gigi serta memperbaiki posisi gigitan secara bertahap. Perawatan ini bertujuan mendukung fungsi pengunyahan dan membantu menciptakan susunan gigi yang lebih teratur. Jenis behel yang digunakan akan disesuaikan dengan kondisi gigi dan kebutuhan perawatan pasien berdasarkan pemeriksaan dokter gigi.",
    desc2: "IN Dental Care menyediakan berbagai pilihan behel konvensional, yaitu Metal, Ceramic, Mini Diamond, dan Saphire, dengan pilihan produk Made in China dan Made in USA. Harga perawatan bervariasi mulai dari Rp1.900.000 hingga Rp8.500.000, bergantung pada jenis behel yang dipilih. Pasien dapat berkonsultasi dengan dokter gigi untuk mengetahui pilihan yang sesuai dengan kondisi gigi, kebutuhan perawatan, dan anggaran yang tersedia.",
    pricing: [
      { name: "Metal", origin: "Made in China", price: "Rp1.900.000" },
      { name: "Ceramic", origin: "Made in China", price: "Rp3.600.000" },
      { name: "Metal", origin: "Made in USA", price: "Rp4.000.000" },
      { name: "Mini Diamond", origin: "Made in USA", price: "Rp5.000.000" },
      { name: "Ceramic", origin: "Made in USA", price: "Rp5.500.000" },
      { name: "Saphire", origin: "Made in USA", price: "Rp8.500.000" }
    ]
  },
  "behel-semi-konvensional": {
    id: "behel-semi-konvensional",
    title: "Behel Semi Konvensional",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    desc1: "Behel semi konvensional merupakan kombinasi bracket estetis dengan fleksibilitas kawat yang nyaman untuk memberikan penampilan lebih natural selama masa perawatan. Bracket yang lebih tersamar membantu pasien tetap tampil percaya diri saat tersenyum maupun berbicara.",
    desc2: "IN Dental Care menyediakan pilihan behel semi konvensional berbahan komposit estetis dan keramik berkualitas tinggi (Made in China dan Made in USA) dengan biaya yang terjangkau dan hasil perataan gigi yang optimal.",
    pricing: [
      { name: "Composite Aesthetic", origin: "Made in China", price: "Rp2.800.000" },
      { name: "Ceramic Translucent", origin: "Made in China", price: "Rp4.200.000" },
      { name: "Semi Ceramic Pro", origin: "Made in USA", price: "Rp5.800.000" },
      { name: "Sapphire Crystal Semi", origin: "Made in USA", price: "Rp7.500.000" }
    ]
  },
  "behel-self-ligating": {
    id: "behel-self-ligating",
    title: "Behel Self-Ligating",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    desc1: "Behel self-ligating menggunakan klip penutup khusus tanpa karet elastis, sehingga kawat dapat bergerak lebih leluasa dengan gesekan minimal. Hal ini meminimalkan rasa ngilu, mempercepat pergeseran gigi, dan memudahkan pembersihan plak gigi setiap hari.",
    desc2: "Tersedia pilihan Damon System orisinil Made in USA baik varian Metal maupun Clear (transparan). Frekuensi kontrol ke klinik juga menjadi lebih longgar sehingga sangat cocok untuk pasien dengan jadwal yang padat.",
    pricing: [
      { name: "Self-Ligating Metal Standard", origin: "Made in China", price: "Rp8.500.000" },
      { name: "Damon Metal System", origin: "Made in USA", price: "Rp14.000.000" },
      { name: "Damon Clear Transparan", origin: "Made in USA", price: "Rp18.000.000" },
      { name: "Damon Quantum Ultra", origin: "Made in USA", price: "Rp21.000.000" }
    ]
  },
  "invisible-braces": {
    id: "invisible-braces",
    title: "Invisible Braces",
    image: "https://images.unsplash.com/photo-1594824813583-4927b5874246?auto=format&fit=crop&w=1000&q=80",
    desc1: "Invisible braces (Clear Aligner) merupakan metode perataan gigi modern menggunakan tray bening transparan yang nyaris tidak terlihat saat dipakai. Aligner dapat dilepas-pasang secara mandiri saat makan dan membersihkan gigi, memberikan higienitas maksimal.",
    desc2: "Didesain dengan bantuan simulasi perangkat lunak 3D canggih untuk memetakan pergerakan gigi secara presisi bertahap dari awal hingga posisi gigi ideal tercapai tanpa kawat logam.",
    pricing: [
      { name: "Clear Aligner - Mild Case", origin: "Made in USA", price: "Rp12.000.000" },
      { name: "Clear Aligner - Moderate Case", origin: "Made in USA", price: "Rp22.000.000" },
      { name: "Clear Aligner - Comprehensive", origin: "Made in USA", price: "Rp32.000.000" }
    ]
  }
};


