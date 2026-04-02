'use client';

import { useState } from 'react';

export default function CCTeamWorkLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState('Türkçe');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'seo2024') setIsAuthenticated(true);
    else alert('Hatalı giriş!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
        
        {/* SOL TARAF: KİMLİK ALANI */}
        <div className="hidden lg:flex w-[35%] bg-[#232328] p-16 flex-col justify-between border-r border-white/5">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">CC</div>
              <span className="text-2xl font-semibold tracking-tight">CC TeamWork</span>
            </div>
            <h2 className="text-lg font-medium text-[#edede7]/90 leading-snug">
              Semantik İçerik ve <br /> SEO Mimari Yönetimi
            </h2>
          </div>
          
          <div className="text-xs text-[#edede7]/30 font-medium">
            Design by CC TeamWork v4.0
          </div>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-20 text-slate-900 relative">
          
          {/* AÇILIR DİL MENÜSÜ (Sağ Üst Köşe) */}
          <div className="absolute top-10 right-10">
            <button 
              onClick={() => setShowLang(!showLang)}
              className="text-[11px] font-bold text-slate-400 hover:text-slate-900 flex items-center gap-2 transition-all cursor-pointer"
            >
              {lang.toUpperCase()} <span className="text-[8px]">▼</span>
            </button>
            
            {showLang && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-50">
                {['Türkçe', 'English', 'Deutsch'].map((l) => (
                  <button 
                    key={l}
                    onClick={() => { setLang(l); setShowLang(false); }}
                    className="w-full text-left px-4 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-sm w-full mx-auto">
            <div className="text-left mb-10">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Oturum açın</h1>
              <p className="text-slate-500 text-sm">Panel erişimi için kimlik bilgilerinizi girin.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Kullanıcı adı veya e-posta adresi</label>
                <input 
                  type="text" 
                  className="w-full p-3.5 bg-white border border-slate-300 rounded-[10px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm"
                  placeholder="admin@ccteamwork.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Parola</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3.5 bg-white border border-slate-300 rounded-[10px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm py-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" />
                  <span className="text-slate-600">Beni hatırla</span>
                </label>
                <button type="button" className="text-emerald-700 font-semibold hover:underline">Parolanızı mı unuttunuz?</button>
              </div>

              <div className="space-y-3 pt-2">
                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-[#232328] text-white rounded-[10px] font-semibold text-sm hover:bg-slate-800 transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  Oturum aç
                </button>
                
                <button 
                  type="button"
                  className="w-full py-3 text-slate-500 rounded-[10px] font-medium text-sm hover:text-slate-800 transition-all cursor-pointer"
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

  return (
    <div className="p-20 text-center bg-[#f9fafb] h-screen font-sans">
      <h1 className="text-2xl font-bold">CC TeamWork Yönetim Paneline Hoş Geldiniz</h1>
      <button onClick={() => setIsAuthenticated(false)} className="mt-8 px-6 py-2 bg-[#232328] text-white rounded-lg font-bold text-xs uppercase cursor-pointer">Güvenli Çıkış</button>
    </div>
  );
}