export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col text-center">
        
        {/* Başlık - Daha Koyu ve Kalın */}
        <h1 className="text-6xl font-extrabold text-[#2F4F4F] tracking-tighter mb-5">
          Özgür Tasarım
        </h1>
        
        {/* Alt Başlık - Biraz Daha Büyük */}
        <p className="text-[#696969] text-2xl mb-12 font-medium">
          Admin Kontrol Paneli
        </p>
        
        {/* Butonlar - Aynı Profesyonel Duruyor */}
        <div className="flex gap-5">
          <button className="bg-[#2F4F4F] hover:bg-[#1e3333] text-white font-semibold py-3.5 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg">
            İçerik Yönetimi
          </button>
          <button className="border-2 border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white font-semibold py-3.5 px-10 rounded-xl transition-all duration-300 text-lg">
            SEO Ayarları
          </button>
        </div>
      </div>
    </main>
  );
}