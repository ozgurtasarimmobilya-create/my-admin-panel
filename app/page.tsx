'use client';

import { useState, useEffect } from 'react';

// --- TİPLER VE YARDIMCI VERİLER ---
interface Block {
  id: string;
  label: string;
  content: string;
  type: string;
}

export default function SEOAdminWithLogin() {
  // --- 1. GÜVENLİK VE GİRİŞ DURUMU (ŞİFRELEME) ---
  // Geliştirme aşaması için basit şifre: 'seo2024' (Gerçek projede ENV veya DB'den gelmeli)
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // --- 2. EDİTÖR VERİLERİ (GİRİŞ YAPINCA GÖRÜNECEK) ---
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [meta, setMeta] = useState({ h1: '', snippet: '', intro: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // --- FONKSİYONLAR (Editör) ---
  const addBlock = (label: string) => {
    setBlocks([...blocks, { 
      id: Math.random().toString(36).substring(2, 9), 
      label, 
      content: '',
      type: label === 'Başlık' ? 'heading' : 'paragraph'
    }]);
  };

  const autoResize = (e: any) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  // --- GİRİŞ KONTROLÜ ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    if (password === 'seo2024') { // Basit şifre kontrolü
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
      setPassword(''); // Şifreyi temizle
    }
  };


  // --- SENARYO 1: GİRİŞ YAPILMADIYSA (Giriş Ekranı) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex text-left font-sans overflow-hidden bg-[#232328]">
        {/* SOL TARAF: MARKALAMA VE ESTETİK (İstenen Renkler) */}
        <div className="w-1/2 bg-[#232328] text-[#edede7] p-24 flex flex-col justify-center border-r border-white/5">
          <div className="flex items-center gap-3 mb-10 text-left">
            <div className="w-12 h-12 bg-emerald-500 rounded-[12px] flex items-center justify-center font-black text-white text-2xl">S</div>
            <span className="font-bold tracking-tighter text-4xl">SEO ADMIN</span>
          </div>
          <p className="text-[#edede7]/80 text-lg leading-relaxed text-left italic max-w-md">"DuPont Corian gibi premium içerikler üretmek için tasarlandı. Sadece davet edilenler girebilir."</p>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU */}
        <div className="flex-1 bg-white p-24 flex flex-col justify-center text-left">
          <div className="max-w-md mx-auto w-full text-left">
            <nav className="flex items-center gap-3 mb-12 text-sm text-slate-400 font-medium">
               <span>Güvenli Alan</span>
               <span>/</span>
               <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">Kimlik Doğrulama</span>
            </nav>
            <h2 className="text-4xl font-extrabold text-slate-950 tracking-tighter mb-4">Hoş Geldiniz</h2>
            <p className="text-slate-600 mb-12">Lütfen panelin kilidini açmak için şifrenizi girin.</p>

            <form onSubmit={handleLogin} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-widest block">Admin Şifresi</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-4 border rounded-[10px] text-lg font-mono tracking-widest placeholder:text-slate-200 outline-none transition-all ${loginError ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200' : 'border-slate-100 bg-slate-50 focus:border-slate-400 focus:ring-2 focus:ring-slate-100'}`}
                  placeholder="••••••••"
                  required
                />
                {loginError && <p className="text-red-600 text-xs font-bold mt-1.5">Şifre yanlış, tekrar deneyin.</p>}
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-slate-900 text-white rounded-[10px] font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg active:scale-95 cursor-pointer uppercase tracking-widest"
              >
                Paneli Kilidini Aç
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }


  // --- SENARYO 2: GİRİŞ YAPILDIYSA (O Muhteşem Editör Paneli) ---
  return (
    <div className="flex h-screen bg-[#F8F9FB] text-[#1D1D1F] font-sans overflow-hidden text-left">
      
      {/* 1. SOL PANEL: ADMIN NAVIGASYON (Koyu Renkler Korundu) */}
      <aside className="w-72 bg-[#232328] text-[#edede7] flex flex-col z-50 shadow-2xl">
        <div className="p-8 border-b border-white/5 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-white">S</div>
            <span className="font-bold tracking-tighter text-xl text-[#edede7]">SEO ADMIN</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-8 overflow-y-auto scrollbar-hide text-left">
          {/* Editör Bileşenleri */}
          <div className="space-y-3 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Editör Araçları</p>
            <div className="grid grid-cols-2 gap-2 text-left">
              {['Başlık', 'Paragraf', 'Liste', 'Görsel', 'SSS', 'Tablo'].map(item => (
                <button key={item} onClick={() => addBlock(item)} className="p-3 bg-white/5 border border-white/5 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:border-white/20 transition-all text-center">
                  + {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5 text-left">
          <button onClick={() => setIsAuthenticated(false)} className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest cursor-pointer">Güvenli Çıkış</button>
        </div>
      </aside>

      {/* 2. ANA İÇERİK ALANI */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white text-left">
        
        {/* ÜST BAR */}
        <header className="h-[70px] border-b border-slate-100 flex items-center justify-between px-10 bg-white z-40 text-left">
          <div className="flex items-center gap-3 text-sm text-left">
            <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">Yeni Sayfa Oluşturuluyor</span>
          </div>
          <div className="flex items-center gap-4 text-left">
            <span className="text-[11px] font-bold text-slate-400">Taslak</span>
            <button className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-lg">YAYINLA</button>
          </div>
        </header>

        {/* YAZIM ALANI */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-[#F8F9FB] p-12 text-left">
          <div className="max-w-[850px] mx-auto space-y-8 text-left">
            
            {/* H1 BLOĞU - BELİRGİN ÇERÇEVE */}
            <div className="p-8 bg-white border border-slate-200 rounded-[12px] shadow-sm hover:border-slate-400 transition-all text-left">
              <div className="flex justify-between items-center mb-6 text-left">
                 <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1.5 rounded-lg uppercase">H1 Başlık</span>
                 <span className="text-xs font-mono font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">{meta.h1.length}/45</span>
              </div>
              <textarea 
                value={meta.h1} onChange={(e) => setMeta({...meta, h1: e.target.value})} onInput={autoResize}
                className="w-full text-4xl font-extrabold border-none outline-none resize-none bg-transparent placeholder:text-slate-200 text-slate-900LEADING-tight text-left"
                placeholder="Başlık..." rows={1}
              />
            </div>

            {/* DİNAMİK İÇERİK BLOKLARI */}
            <div className="space-y-6 pb-40 text-left">
              {blocks.map((block: any, index: number) => (
                <div key={block.id} className="relative p-8 bg-white border border-slate-200 rounded-[12px] shadow-sm hover:border-emerald-400 transition-all text-left group">
                  <button onClick={() => setBlocks(blocks.filter((b: any) => b.id !== block.id))} className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 w-6 h-6 bg-red-500 text-white rounded-full text-[10px] shadow-lg transition-all z-10 cursor-pointer">✕</button>
                  <textarea 
                    value={block.content}
                    onChange={(e) => {
                      const nb = [...blocks]; nb[index].content = e.target.value; setBlocks(nb);
                    }}
                    onInput={autoResize}
                    className={`w-full bg-transparent border-none outline-none resize-none text-left ${
                      block.label === 'Başlık' ? 'text-2xl font-bold text-slate-900' : 'text-base text-slate-600 font-medium'
                    }`}
                    placeholder={`${block.label}...`}
                    rows={1}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}