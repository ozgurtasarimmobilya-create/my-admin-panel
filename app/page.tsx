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
        <div className="hidden lg:flex w-[40%] bg-[#232328] p-20 flex-col justify-between border-r border-white/5 relative overflow-hidden">
          {/* Arka plana hafif bir derinlik katacak doku */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10 text-left">
            <div className="w-14 h-14 bg-emerald-600 rounded-[15px] flex items-center justify-center font-black text-white text-3xl mb-10 shadow-2xl shadow-emerald-900/20">
              CC
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4 leading-tight">
              Semantik İçerik ve <br /> SEO Mimari Yönetimi
            </h1>
            <p className="text-[#edede7]/60 text-base leading-relaxed max-w-sm">
              Dijital varlıklarınızı Google algoritmalarıyla tam uyumlu, hiyerarşik ve teknik bir disiplinle inşa edin.
            </p>
          </div>
          
          <div className="relative z-10 text-[11px] text-[#edede7]/30 font-bold tracking-[0.2em] uppercase">
            Powered by CC TeamWork v4.0
          </div>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-24 text-slate-900 relative">
          
          {/* DİL SEÇENEĞİ (Daha Belirgin) */}
          <div className="absolute top-10 right-10 flex items-center">
            <button 
              onClick={() => setShowLang(!showLang)}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-black text-slate-600 hover:border-slate-400 hover:text-slate-900 flex items-center gap-3 transition-all cursor-pointer shadow-sm"
            >
              {lang} <span className="text-[8px] opacity-40">▼</span>
            </button>
            
            {showLang && (
              <div className="absolute right-0 top-12 w-32 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden z-50">
                {['TR', 'EN', 'AR'].map((l) => (
                  <button 
                    key={l}
                    onClick={() => { setLang(l); setShowLang(false); }}
                    className="w-full text-left px-5 py-3 text-[11px] font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors border-b border-slate-50 last:border-none"
                  >
                    {l === 'AR' ? 'AR (العربية)' : l === 'TR' ? 'TR (Türkçe)' : 'EN (English)'}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-md w-full mx-auto">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-3 text-left">Oturum açın</h2>
              <p className="text-slate-500 text-sm font-medium">Lütfen panel erişimi için kimlik bilgilerinizi girin.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-slate-700 ml-1">Kullanıcı adı veya e-posta</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm placeholder:text-slate-300"
                  placeholder="admin@site.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-slate-700 ml-1">Parola</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm font-mono tracking-widest placeholder:text-slate-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-[13px] py-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer" />
                  <span className="text-slate-500 group-hover:text-slate-900 transition-colors">Beni hatırla</span>
                </label>
                <button type="button" className="text-emerald-700 font-bold hover:underline underline-offset-4">Parolanızı mı unuttunuz?</button>
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
                  className="w-full py-3.5 text-slate-400 rounded-[12px] font-bold text-xs hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
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
    <div className="flex h-screen bg-[#F8F9FB] items-center justify-center font-sans">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">CC TeamWork Paneline Hoş Geldiniz</h1>
        <button onClick={() => setIsAuthenticated(false)} className="px-6 py-2 bg-[#232328] text-white rounded-lg font-bold text-xs cursor-pointer">Güvenli Çıkış</button>
      </div>
    </div>
  );
}