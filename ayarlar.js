/* ==========================================================================
   MCN İKRAM MENÜSÜ — AYARLAR
   --------------------------------------------------------------------------
   Menüde değişiklik yapmak için SADECE bu dosyayı düzenleyin.
   Kurallar:
     • Yazıları "çift tırnak" içinde yazın.
     • Her satırın / öğenin sonundaki virgülü silmeyin.
     • Bir ürünü geçici olarak kaldırmak için:   tukendi: true   (gri görünür, seçilemez)
     • Tamamen gizlemek için:                    gizle: true
     • Kullanılabilecek ikonlar: cay, kahve, fincan, bitki, sise, kutu, su, meyve, kurabiye
   ========================================================================== */

window.IKRAM = {

  firma:      "MCN Grup Otomotiv",
  baslik:     "İkram Menüsü",
  karsilama:  "Hoş geldiniz. Ne içmek istersiniz? Seçin, hemen getirelim.",
  altYazi:    "Tüm ikramlarımız ücretsizdir. Afiyet olsun.",

  // Logonuz varsa bu klasöre "logo.png" adıyla koyup aşağıya yazın. Yoksa boş bırakın: ""
  logo: "",

  // Siparişlerin gideceği bildirim kanalı. Çaycının telefonundaki ntfy uygulamasında da
  // AYNI isim yazılı olmalı. Kimseyle paylaşmayın.
  bildirimKanali:   "mcn-ikram-r7x4k9pq2w",
  bildirimSunucusu: "https://ntfy.sh",

  // Siparişin getirileceği yerler. QR kartları bu listeden üretilir.
  yerler: [
    "Misafir Salonu",
    "Toplantı Odası",
    "Genel Müdür Odası",
    "Showroom",
    "Satış Ofisi",
    "Muhasebe",
    "Servis Bekleme Alanı"
  ],

  menu: [
    { bolum: "Sıcak İçecekler", urunler: [
      { ad: "Çay",          aciklama: "İnce belli bardakta, taze demlenmiş", ikon: "cay",
        secenekler: { "Dem": ["Tavşan kanı", "Açık", "Koyu"], "Şeker": ["Şekersiz", "1 şeker", "2 şeker"] } },
      { ad: "Türk Kahvesi", aciklama: "Yanında bir bardak su ile",           ikon: "fincan",
        secenekler: { "Şeker": ["Sade", "Az şekerli", "Orta", "Şekerli"] } },
      { ad: "Neskafe",      aciklama: "Kupada, sıcak",                       ikon: "kahve",
        secenekler: { "Süt": ["Sütlü", "Sütsüz"], "Şeker": ["Şekersiz", "1 şeker", "2 şeker"] } },
      { ad: "Espresso",     aciklama: "Yoğun ve kısa",                       ikon: "fincan",
        secenekler: { "Boy": ["Tek", "Duble"], "Şeker": ["Şekersiz", "1 şeker"] } }
    ]},

    { bolum: "Bitki Çayları", urunler: [
      { ad: "Papatya Çayı",  aciklama: "Hafif ve sakinleştirici",     ikon: "bitki", secenekler: { "Şeker": ["Şekersiz", "1 şeker"] } },
      { ad: "Kuşburnu Çayı", aciklama: "Mayhoş, C vitamini deposu",   ikon: "bitki", secenekler: { "Şeker": ["Şekersiz", "1 şeker"] } },
      { ad: "Yeşil Çay",     aciklama: "Hafif ve ferah",              ikon: "bitki", secenekler: { "Şeker": ["Şekersiz", "1 şeker"] } },
      { ad: "Ada Çayı",      aciklama: "Adaçayı yaprağından demleme", ikon: "bitki", secenekler: { "Şeker": ["Şekersiz", "1 şeker"] } }
    ]},

    { bolum: "Soğuk İçecekler", urunler: [
      { ad: "Sade Soda",    aciklama: "Maden suyu, soğuk",        ikon: "sise" },
      { ad: "Meyveli Soda", aciklama: "Meyve aromalı maden suyu", ikon: "sise" },
      { ad: "Kola",         aciklama: "Soğuk servis",             ikon: "kutu" },
      { ad: "Fanta",        aciklama: "Portakallı, soğuk servis", ikon: "kutu" },
      { ad: "Niğde Gazozu", aciklama: "Klasik şişede",            ikon: "sise" }
    ]},

    { bolum: "Meyve", urunler: [
      { ad: "Meyve Tabağı", aciklama: "Mevsim meyveleri, dilimlenmiş", ikon: "meyve" }
    ]}
  ]
};
