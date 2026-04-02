'use client';

import { useState } from 'react';

export default function CCTeamWorkLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('TR');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'seo2024') setIsAuthenticated(true);
    else alert('Hatalı giriş!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex font-sans bg-[#232328] text-[#edede7]">
        
        {/* SOL TARAF: CC TEAMWORK KİMLİĞİ */}
        <div className="hidden lg:flex w-[35%] bg-[#232328] p-16 flex-col justify-between border-r border-white/5">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">CC</div>
              <span className="text-2xl font-semibold tracking-tight text-[#edede7]">CC TeamWork</span>
            </div>
            <p className="text-sm text-[#edede7]/60 leading-relaxed max-w-xs">
              İçerik yönetim süreçlerinizi optimize eden profesyonel SEO mimarisi.
            </p>
          </div>
          
          <div className="text-xs text-[#edede7]/40 font-medium">
            Design by CC TeamWork v4.0
          </div>
        </div>

        {/* SAĞ TARAF: GİRİŞ FORMU (NET VE GÖRÜNÜR) */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 md:px-20 text-slate-900">
          <div className="max-w-sm w-full mx-auto">
            
            <div className="text-left mb-10">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Oturum açın</h1>
              <p className="text-slate-500 text-sm">Devam etmek için bilgilerinizi doğrulayın.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              {/* Kullanıcı Adı */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Kullanıcı adı veya e-posta adresi</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3.5 bg-white border border-slate-300 rounded-[10px] outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-slate-900 shadow-sm"
                  placeholder="admin@ccteamwork.com"
                  required
                />
              </div>

              {/* Parola */}
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

              {/* Ek Seçenekler */}
              <div className="flex items-center justify-between text-sm py-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" />
                  <span className="text-slate-600">Beni hatırla</span>
                </label>
                <button type="button" className="text-emerald-700 font-semibold hover:underline">Parolanızı mı unuttunuz?</button>
              </div>

              {/* Butonlar */}
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

            {/* Dil Seçimi (Sadeleşti) */}
            <div className="mt-12 pt-6 flex items-center justify-center gap-8 border-t border-slate-100">
              {['TR', 'EN', 'DE'].map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[11px] font-bold transition-all ${lang === l ? 'text-emerald-600 underline underline-offset-4' : 'text-slate-400 hover:text-slate-600'}`}
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

  // EDİTÖR PANELİ (Giriş sonrası - H1, H2 hiyerarşisi netleşti)
  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900 font-sans text-left">
      <div className="flex h-screen overflow-hidden">
        {/* Panel Sol Menü */}
        <aside className="w-64 bg-[#232328] text-[#edede7] p-8 flex flex-col justify-between">
          <div>
            <div className="text-xl font-bold mb-10 tracking-tight">CC TeamWork</div>
            <nav className="space-y-4">
              <p className="text-[11px] text-slate-500 font-bold mb-2">Menü</p>
              <button className="w-full text-left text-sm py-2 px-3 bg-emerald-600/10 text-emerald-400 rounded-lg">Yeni sayfa</button>
              <button className="w-full text-left text-sm py-2 px-3 text-slate-400 hover:text-white transition-colors">Tüm sayfalar</button>
            </nav>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs text-red-400 font-bold py-2 hover:text-red-300 transition-colors">Güvenli çıkış</button>
        </aside>

        {/* Ana Yazım Alanı */}
        <main className="flex-1 overflow-y-auto p-12">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* H1 Alanı */}
            <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-slate-400">H1 - Ana başlık</span>
                <span className="text-xs font-mono text-slate-300">0/45</span>
              </div>
              <textarea 
                className="w-full text-3xl font-bold border-none outline-none resize-none placeholder:text-slate-200"
                placeholder="Başlık yazın..."
                rows={1}
              />
            </div>

            {/* H2 Alt Başlık Örneği */}
            <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm">
              <div className="text-[10px] font-bold text-slate-400 mb-3">H2 - Alt başlık</div>
              <textarea 
                className="w-full text-xl font-semibold border-none outline-none resize-none"
                placeholder="İlgili alt başlık..."
                rows={1}
              />
            </div>

            {/* Paragraf */}
            <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm">
              <div className="text-[10px] font-bold text-slate-400 mb-3">İçerik metni</div>
              <textarea 
                className="w-full text-base text-slate-600 leading-relaxed border-none outline-none resize-none"
                placeholder="Metin girmeye başlayın..."
                rows={3}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}