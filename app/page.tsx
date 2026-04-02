'use client';

import { useState, useEffect } from 'react';

export default function CCTeamWorkSystem() {
  // --- DURUM YÖNETİMİ ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState('TR');
  const [loading, setLoading] = useState(false);

  // --- 1. BENİ HATIRLA KONTROLÜ (SAYFA AÇILINCA) ---
  useEffect(() => {
    const savedSession = localStorage.getItem('cc_session');
    if (savedSession === 'active') {
      setIsAuthenticated(true);
    }
  }, []);

  // --- 2. GİRİŞ İŞLEMİ ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simülasyon (Gerçekte DB kontrolü yapılır)
    setTimeout(() => {
      if (password === 'seo2024') {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem('cc_session', 'active');
        }
      } else {
        alert('Hatalı parola! Lütfen tekrar deneyin.');
      }
      setLoading(false);
    }, 800);
  };

  // --- 3. ÇIKIŞ İŞLEMİ ---
  const handleLogout = () => {
    localStorage.removeItem('cc_session');
    setIsAuthenticated(false);
  };

  // --- 4. ŞİFREMİ UNUTTUM MESAJI ---
  const handleForgot = () => {
    alert('Şifre sıfırlama talebiniz yöneticiye iletildi. Lütfen e-postanızı kontrol edin.');
  };

  // --- SENARYO A: GİRİŞ EKRANI ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
        <div className="hidden lg:flex w-[40%] bg-[#232328] p-20 flex-col justify-between border-r border-white/5 relative">
          <div className="relative z-10 text-left">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-2xl mb-12 shadow-xl shadow-emerald-900/40">CC</div>
            <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight">Semantik İçerik ve <br /> SEO Mimari Yönetimi</h1>
            <p className="text-[#edede7]/70 text-base leading-relaxed max-w-sm">
              Dijital varlıklarınızı Google algoritmalarıyla tam uyumlu, hiyerarşik ve teknik bir disiplinle inşa edin. İçerik yönetim süreçlerinizi optimize eden profesyonel SEO mimarisi.
            </p>
          </div>
          <div className="relative z-10 text-[12px] text-[#edede7]/40 font-medium tracking-wide">Powered By CC TeamWork v4.0</div>
        </div>

        <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-24 text-slate-900 relative">
          <div className="absolute top-10 right-10 flex items-center">
            <button onClick={() => setShowLang(!showLang)} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-bold text-slate-600 hover:border-slate-400 flex items-center gap-3 transition-all cursor-pointer shadow-sm">{lang} <span className="text-[8px] opacity-40">▼</span></button>
            {showLang && (
              <div className="absolute right-0 top-12 w-36 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden z-50">
                {['TR', 'EN', 'AR'].map((l) => (
                  <button key={l} onClick={() => { setLang(l); setShowLang(false); }} className="w-full text-left px-5 py-3 text-[11px] font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors border-b border-slate-50 last:border-none">{l === 'AR' ? 'AR (العربية)' : l === 'TR' ? 'TR (Türkçe)' : 'EN (English)'}</button>
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
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 ml-1">Kullanıcı adı veya e-posta adresi</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm" placeholder="admin@ccteamwork.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 ml-1">Parola</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-white border border-slate-300 rounded-[12px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm font-mono tracking-widest" placeholder="••••••••" required />
              </div>
              <div className="flex items-center justify-between text-[13px] py-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer" />
                  <span className="text-slate-600 font-medium">Beni hatırla</span>
                </label>
                <button type="button" onClick={handleForgot} className="text-emerald-700 font-semibold hover:underline underline-offset-4 cursor-pointer">Parolanızı mı unuttunuz?</button>
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 bg-[#232328] text-white rounded-[12px] font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] cursor-pointer">
                {loading ? 'Giriş yapılıyor...' : 'Oturum aç'}
              </button>
              <button type="button" className="w-full py-3.5 text-slate-400 rounded-[12px] font-semibold text-xs hover:text-slate-900 transition-all cursor-pointer">← Web sitesine git</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- SENARYO B: GİRİŞTEN SONRAKİ PANEL (MUTFAK) ---
  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans overflow-hidden text-left">
      {/* Sol Menü */}
      <aside className="w-72 bg-[#232328] text-[#edede7] flex flex-col border-r border-white/5">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white">CC</div>
            <span className="font-bold tracking-tight text-xl">CC TeamWork</span>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-8 overflow-y-auto">
           <div>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Navigasyon</p>
             <div className="space-y-1">
               <button className="w-full text-left p-3 rounded-xl bg-emerald-600/10 text-emerald-400 font-bold text-sm border border-emerald-600/20">Yeni İçerik Ekle</button>
               <button className="w-full text-left p-3 rounded-xl text-slate-400 hover:text-white text-sm transition-colors">Tüm İçerikler</button>
             </div>
           </div>
        </nav>
        <div className="p-6 border-t border-white/5">
          <button onClick={handleLogout} className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-all cursor-pointer">Güvenli Çıkış</button>
        </div>
      </aside>

      {/* Ana Editör Alanı */}
      <main className="flex-1 overflow-y-auto bg-white">
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-10">
          <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">Sayfalar / Yeni SEO İçeriği</span>
          <button className="px-6 py-2 bg-[#232328] text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-md">Yayınla</button>
        </header>

        <div className="p-12 max-w-4xl mx-auto space-y-8">
           {/* H1 Bloğu */}
           <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-400 transition-all">
             <div className="flex justify-between items-center mb-4"><span className="text-[10px] font-bold text-slate-400">H1 - Ana Başlık</span></div>
             <textarea className="w-full text-4xl font-bold border-none outline-none resize-none placeholder:text-slate-200" placeholder="Anahtar kelime odaklı başlığınızı yazın..." rows={1} />
           </div>

           {/* Bilgilendirme */}
           <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-emerald-800 text-sm italic">
             Buradan itibaren eklediğiniz her başlık (H2, H3) ve metin, CC TeamWork SEO algoritması tarafından hiyerarşik olarak işlenecektir.
           </div>
        </div>
      </main>
    </div>
  );
}