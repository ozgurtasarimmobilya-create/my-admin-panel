export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] p-24">
      <div className="flex flex-col items-center text-center">
        
        {/* 'font-sans' ekleyerek çentikleri öldürdük, 'font-extrabold' ile o ağır duruşu koruduk */}
        <h1 className="text-6xl font-extrabold text-[#2F4F4F] tracking-tighter mb-4 font-sans">
          Özgür Tasarım
        </h1>
        
        <p className="text-[#696969] text-xl mb-10 font-medium">
          Admin Kontrol Paneli
        </p>
        
        <div className="flex gap-4">
          <button className="bg-[#2F4F4F] hover:bg-[#1e3333] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg">
            İçerik Yönetimi
          </button>
          <button className="border-2 border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
            SEO Ayarları
          </button>
        </div>
      </div>
    </main>
  );
}