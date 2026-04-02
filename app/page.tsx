'use client';

import { useState } from 'react';

export default function CCTeamWorkLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState('TR');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'seo2024') setIsAuthenticated(true);
    else alert('Hatalı giriş!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
        
        {/* SOL TARAF: ÜRÜN KİMLİĞİ */}
        <div className="hidden lg:flex w-[40%] bg-[#232328] p-20 flex-col justify-between border-r border-white/5 relative">
          <div className="relative z-10 text-left">
            {/* Logo Alanı */}
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-2xl mb-12 shadow-xl shadow-emerald-900/40">
              cc
            </div>
            
            {/* Harmanlanmış Slogan */}
            <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight">
              Semantik içerik ve <br /> seo mimari yönetimi
            </h1>
            
            <p className="text-[#edede7]/70 text-base leading-relaxed max-w-sm">
              İçerik yönetim süreçlerinizi optimize eden, dijital varlıklarınızı Google algoritmalarıyla tam uyumlu ve teknik bir disiplinle inşa eden profesyonel mimari.
            </p>
          </div>
          
          {/* Powered By (Artık Küçük Harf) */}
          <div className="relative z-10 text-[12px] text-[#edede7]/30 font-medium tracking-wide">
            powered by cc teamwork v4.0
          </div>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-24 text-slate-900 relative">
          
          {/* DİL SEÇENEĞİ */}
          <div className="absolute top-10 right-10 flex items-center">
            <button 
              onClick={() => setShowLang(!showLang)}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-bold text-slate-600 hover:border-slate-400 hover:text-slate-900 flex items-center gap-3 transition-all cursor-pointer shadow-sm"
            >
              {lang} <span className="text-[8px] opacity-40">▼</span>
            </button>
            
            {showLang && (
              <div className="absolute right-0 top-12 w-36 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden z-50">
                {['TR', 'EN', 'AR'].map((l) => (
                  <button 
                    key={l}
                    onClick={() => { setLang(l); setShowLang(false); }}
                    className="w-full text-left px-5 py-3 text-[11px] font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors border-b border-slate-50 last:border-none"
                  >
                    {l === 'AR' ? 'ar (العربية)' : l === 'TR' ? 'tr (türkçe)' : 'en (english)'}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-md w-full mx-auto">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Oturum açın</h2>
              <p className="text-slate-500 text-sm font-medium">Panel erişimi için kimlik bilgilerinizi doğrulayın.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 text-left">
              {/* Kullanıcı Adı */}
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 ml-1">Kullanıcı adı veya e-posta</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm placeholder:text-slate-200"
                  placeholder="admin@ccteamwork.com"
                  required
                />
              </div>

              {/* Parola */}
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 ml-1">Parola</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm font-mono tracking-widest placeholder:text-slate-200"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Ekstra Seçenekler */}
              <div className="flex items-center justify-between text-[13px] py-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer" />
                  <span className="text-slate-500 group-hover:text-slate-900 transition-colors">Beni hatırla</span>
                </label>
                <button type="button" className="text-emerald-700 font-semibold hover:underline underline-offset-4">Parolanızı mı unuttunuz?</button>
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#232328] text-white rounded-[12px] font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  Oturum aç
                </button>
                
                <button 
                  type="button"
                  className="w-full py-3.5 text-slate-400 rounded-[12px] font-semibold text-xs hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  ← Web sitesine git
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- PANEL GİRİŞİ ---
  return (
    <div className="flex h-screen items-center justify-center bg-[#f9fafb]">
       <div className="text-center">
         <h1 className="text-xl font-bold">cc teamwork yönetim paneli</h1>
         <button onClick={() => setIsAuthenticated(false)} className="mt-4 text-xs font-bold text-red-500 cursor-pointer">güvenli çıkış</button>
       </div>
    </div>
  );
}