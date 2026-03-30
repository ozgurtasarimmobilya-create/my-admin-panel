import Link from 'next/link';

export default function CorianPanel() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] p-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/icerik-yonetimi" className="text-[#696969] hover:text-[#2F4F4F] mb-6 inline-block">
          ← Marka Listesine Dön
        </Link>

        <h1 className="text-4xl font-extrabold text-[#2F4F4F] mb-8 uppercase tracking-tighter">
          Corian İçerik Yönetimi
        </h1>

        <div className="space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          
          {/* SEO Bölümü */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2F4F4F] border-b pb-2">SEO Ayarları</h2>
            <div>
              <label className="block text-sm font-semibold text-[#696969] mb-1">SEO Başlığı (40-45 Karakter)</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2F4F4F] outline-none" placeholder="Örn: Corian Mutfak Tezgahı Modelleri 2026" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#696969] mb-1">Meta Açıklama (140-145 Karakter)</label>
              <textarea className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-[#2F4F4F] outline-none" placeholder="Corian yüzeylerin şıklığını ve dayanıklılığını keşfedin..."></textarea>
            </div>
          </section>

          {/* İçerik Hiyerarşisi (H1-H2-H3) */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-bold text-[#2F4F4F] border-b pb-2">Sayfa Mimarisi (H1-H3)</h2>
            <div>
              <label className="block text-sm font-semibold text-[#696969] mb-1">H1: Ana Kategori Başlığı</label>
              <input type="text" className="w-full p-3 border rounded-lg" defaultValue="Corian Solid Surface" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#696969] mb-1">H2: Genel Tanıtım / Rehber</label>
              <textarea className="w-full p-3 border rounded-lg h-32" placeholder="Corian nedir ve nerelerde kullanılır?"></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#696969] mb-1">H3: İlgili Makaleler / Alt Başlıklar</label>
              <input type="text" className="w-full p-3 border rounded-lg" placeholder="Corian Renkleri, Kullanım Alanları vb." />
            </div>
          </section>

          <button className="w-full bg-[#2F4F4F] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e3333] transition-all shadow-lg">
            İÇERİĞİ GÜNCELLE VE YAYINLA
          </button>
        </div>
      </div>
    </main>
  );
}