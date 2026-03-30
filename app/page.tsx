export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5]">
      <div className="flex flex-col items-center text-center">
        
        {/* Sadece çentiksiz, kalın ve temiz Özgür Tasarım */}
        <h1 className="text-[64px] font-extrabold text-[#2F4F4F] tracking-tighter leading-tight mb-2">
          Özgür Tasarım
        </h1>
        
        <p className="text-[#696969] text-xl mb-12 font-mono tracking-widest uppercase">
          Admin Kontrol Paneli
        </p>
        
        <div className="flex gap-4">
          <button className="bg-[#2F4F4F] text-[#F5F5F5] font-bold py-3.5 px-10 rounded-xl shadow-lg hover:bg-[#1e3333] transition-all duration-300">
            İçerik Yönetimi
          </button>
          <button className="border-2 border-[#2F4F4F] text-[#2F4F4F] font-bold py-3.5 px-10 rounded-xl hover:bg-[#2F4F4F] hover:text-white transition-all duration-300">
            SEO Ayarları
          </button>
        </div>
      </div>
    </main>
  );
}