'use client';

import { useState } from 'react';

export default function CCTeamWorkLogin() {
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState('TR');

  return (
    <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
      
      {/* SOL PANEL: ÜRÜN KİMLİĞİ */}
      <div className="hidden lg:flex w-[40%] bg-[#232328] p-20 flex-col justify-between border-r border-white/5 relative">
        <div className="relative z-10 text-left">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl mb-12 shadow-lg shadow-emerald-900/40">
            CC
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-6 leading-tight text-white">
            Semantik İçerik ve <br /> SEO Mimari Yönetimi
          </h1>
          <p className="text-[#edede7]/60 text-sm leading-relaxed max-w-sm">
            Dijital varlıklarınızı Google algoritmalarıyla tam uyumlu, hiyerarşik ve teknik bir disiplinle inşa edin. İçerik yönetim süreçlerinizi optimize eden profesyonel SEO mimarisi.
          </p>
        </div>
        <div className="relative z-10 text-[11px] text-[#edede7]/30 font-medium tracking-wide">
          Powered By CC TeamWork v4.0
        </div>
      </div>

      {/* SAĞ PANEL: GİRİŞ FORMU */}
      <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-24 text-slate-900 relative">
        
        {/* DİL SEÇENEĞİ (Zarif Çerçeve) */}
        <div className="absolute top-10 right-10">
          <button 
            onClick={() => setShowLang(!showLang)}
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-500 hover:border-slate-400 hover:text-slate-900 flex items-center gap-3 transition-all cursor-pointer"
          >
            {lang} <span className="text-[8px] opacity-40">▼</span>
          </button>
          
          {showLang && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-50">
              {['TR', 'EN', 'AR'].map((l) => (
                <button 
                  key={l}
                  onClick={() => { setLang(l); setShowLang(false); }}
                  className="w-full text-left px-4 py-3 text-[11px] font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  {l === 'AR' ? 'AR (العربية)' : l === 'TR' ? 'TR (Türkçe)' : 'EN (English)'}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="max-w-sm w-full mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Oturum açın</h2>
            <p className="text-slate-400 text-xs font-medium">Panel erişimi için bilgilerinizi doğrulayın.</p>
          </div>

          <form className="space-y-5">
            {/* Kullanıcı Adı */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Kullanıcı Adı veya E-posta</label>
              <input 
                type="text" 
                className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-emerald-600 focus:ring-0 transition-all text-sm text-slate-700 shadow-sm"
                placeholder="admin@ccteamwork.com"
              />
            </div>

            {/* Parola ve Hemen Altında "Şifremi Unuttum" */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Parola</label>
              <input 
                type="password" 
                className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-emerald-600 focus:ring-0 transition-all text-sm text-slate-700 shadow-sm font-mono"
                placeholder="••••••••"
              />
              <div className="text-right">
                <button type="button" className="text-[11px] font-bold text-emerald-700 hover:underline">Parolanızı mı unuttunuz?</button>
              </div>
            </div>

            {/* En Alt Satır: Beni Hatırla (Sol) - Oturum Aç (Sağ) */}
            <div className="flex items-center justify-between pt-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer" />
                <span className="text-[12px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Beni hatırla</span>
              </label>

              <button 
                type="submit" 
                className="px-8 py-3 bg-[#232328] text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Oturum aç
              </button>
            </div>

            <div className="pt-6 border-t border-slate-50">
               <button type="button" className="w-full text-center text-slate-400 font-bold text-[10px] hover:text-slate-600 transition-all uppercase tracking-widest">
                 ← Web sitesine git
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}