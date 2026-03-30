import Link from 'next/link';

export default function IcerikYonetimi() {
  const markalar = [
    { id: 1, isim: 'Corian', sayfaSayisi: 45 },
    { id: 2, isim: 'Hi-Macs', sayfaSayisi: 30 },
    { id: 3, isim: 'Staron', sayfaSayisi: 25 },
    { id: 4, isim: 'Hanex', sayfaSayisi: 12 },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#696969] hover:text-[#2F4F4F] transition-colors mb-8 inline-block font-medium">
          ← Ana Panele Dön
        </Link>
        
        <h1 className="text-4xl font-extrabold text-[#2F4F4F] mb-10 tracking-tight">
          İçerik Yönetimi
        </h1>

        <div className="grid gap-6">
          {markalar.map((marka) => (
            <div key={marka.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <h2 className="text-2xl font-bold text-[#2F4F4F]">{marka.isim}</h2>
                <p className="text-[#696969]">{marka.sayfaSayisi} Kayıtlı Sayfa</p>
              </div>
              <button className="bg-[#2F4F4F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1e3333] transition-colors">
                Düzenle
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}