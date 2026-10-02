MCN İkram & Yemek v2

Eklenenler:
- QR misafir ekranında İkram / Yemek Menüsü / Yemek Öner-Oyla sekmeleri
- Bugünün yemeği + haftalık yemek görünümü
- Misafir yemek kişi sayısı, ekstra yoğurt/salata/çorba ve özel not bildirimi
- Personel Sipariş Ekranında Mutfak / Menü paneli
- Haftalık ana yemek düzenleme
- Yemek puanlama ve yüksek puanlı yemeklerin mutfak ekranında görünmesi
- Mutfak stok takibi, minimum stok uyarısı
- 10 günlük basit alışveriş eksik listesi

ÖNEMLİ:
Bu sürüm mevcut GitHub Pages + ntfy yapısını bozmadan hazırlanmış MVP'dir. Sipariş ve misafir yemeği bildirimi ntfy ile çalışır.
Menü, stok ve oy verileri şu anda tarayıcının localStorage alanında tutulur; yani farklı telefon/bilgisayarlar arasında ortak veritabanı değildir.
Gerçek çok kullanıcılı sürüm için sonraki adım Supabase/Firebase gibi merkezi veritabanı eklemektir. Böylece yemekçi ablanın yaptığı menü değişikliği tüm QR kullanıcılarında anında görünür; oylar ve stok tek merkezde toplanır.

GitHub'a yüklenecek yeni/yenilenen dosyalar:
- index.html
- ayarlar.js
- yemek-verisi.js
- yemek-ek.css
- mevcut logo.jpeg
- qr-kartlari.html (değişmedi)
