'use client';

import { useState } from 'react';

export default function SEOAdminLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('TR');

  // Giriş simülasyonu
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'seo2024') {
      setIsAuthenticated(true);
    } else {
      alert('Hatalı giriş!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
        
        {/* SOL TARAF: MARKA ALANI */}
        <div className="hidden lg:flex w-[40%] bg-[#232328] p-20 flex-col justify-between border-r border-white/5 shadow-2xl">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-500 rounded-[12px] flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-emerald-500/20">S</div>
              <span className="font-bold tracking-tighter text-3xl uppercase">SEO Admin</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter leading-tight mb-6">
              İçeriğin <br /> <span className="text-emerald-400 italic">Mimarisi.</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-[#edede7]/50 font-medium tracking-widest uppercase italic">Design by Mimar v4.0</p>
          </div>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 md:px-24 text-slate-900">
          <div className="max-w-md w-full mx-auto space-y-10">
            
            {/* Üst Başlık */}
            <div className="text-left">
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-2">Oturum Aç</h2>
              <p className="text-slate-400 text-sm font-medium">Lütfen yönetim paneline erişmek için bilgilerinizi girin.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 text-left">
              {/* Kullanıcı Adı */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Kullanıcı Adı veya E-posta</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-[12px] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-900 font-medium"
                  placeholder="admin@site.com"
                  required
                />
              </div>

              {/* Parola */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Parola</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-[12px] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-900 font-mono tracking-widest"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Beni Hatırla & Şifremi Unuttun */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 transition-all cursor-pointer" />
                  <span className="text-slate-500 font-medium group-hover:text-slate-900 transition-colors">Beni Hatırla</span>
                </label>
                <button type="button" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors cursor-pointer">Parolanızı mı unuttunuz?</button>
              </div>

              {/* Butonlar */}
              <div className="space-y-4 pt-4">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#232328] text-white rounded-[12px] font-bold text-sm hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 active:scale-95 cursor-pointer uppercase tracking-widest"
                >
                  Oturum Aç
                </button>
                
                <button 
                  type="button"
                  className="w-full py-4 bg-white border border-slate-100 text-slate-400 rounded-[12px] font-bold text-[11px] hover:text-slate-900 hover:border-slate-300 transition-all uppercase tracking-widest cursor-pointer"
                >
                  ← Web Sitesine Dön
                </button>
              </div>
            </form>

            {/* Dil Seçeneği */}
            <div className="pt-10 flex items-center justify-center gap-6 border-t border-slate-50">
              {['TR', 'EN', 'DE'].map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[10px] font-black tracking-widest transition-all ${lang === l ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-slate-300 hover:text-slate-500 hover:scale-110'}`}
                >
                  {l}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }

  // BURASI GİRİŞ YAPILINCA AÇILACAK PANEL (Önceki editör kodun buraya gelecek)
  return (
    <div className="p-20 text-center bg-[#F5F5F7] h-screen">
      <h1 className="text-4xl font-black italic">Hoş geldin Mimar. Panel Hazırlanıyor...</h1>
      <button onClick={() => setIsAuthenticated(false)} className="mt-8 px-8 py-3 bg-[#232328] text-white rounded-xl font-bold uppercase tracking-widest text-xs cursor-pointer">Güvenli Çıkış</button>
    </div>
  );
}