export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        <h1 className="text-5xl font-extrabold text-[#2F4F4F] tracking-tight mb-4">
          Özgür Tasarım
        </h1>
        <p className="text-[#696969] text-xl mb-8">Admin Kontrol Paneli</p>
        
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