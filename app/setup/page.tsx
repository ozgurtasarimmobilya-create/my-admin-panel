'use client';

import { useState } from 'react';

export default function SmartSetupWizard() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    license: '',
    dbName: '',
    dbUser: '',
    dbPass: '',
    adminUser: '',
    adminPass: ''
  });

  const handleNext = () => {
    setError('');
    if (step === 1) {
      if (!formData.license || !formData.dbName || !formData.dbUser || !formData.dbPass) {
        setError('Lütfen tüm alanları eksiksiz doldurun.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.adminUser || !formData.adminPass) {
        setError('Yönetici bilgilerini boş bırakamazsınız.');
        return;
      }
      alert('Kurulum Başarıyla Tamamlandı!');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] flex items-center justify-center font-sans p-6 overflow-hidden text-left">
      <div className="w-full max-w-xl bg-white shadow-sm overflow-hidden h-[580px] flex flex-col rounded-[6px] border border-slate-300">
        
        {/* Header - Gri Tonlama */}
        <div className="bg-[#334155] p-6 text-white flex justify-between items-center shrink-0 border-b border-slate-400">
          <div className="text-left">
            <h1 className="text-xl font-bold tracking-tight uppercase">Yazılım Kurulumu</h1>
            <p className="text-slate-300 text-[10px] mt-1 font-medium tracking-wider uppercase opacity-90">
              Semantik İçerik ve SEO Mimari Yönetimi v4.0 • Adım 0{step + 1}
            </p>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-[6px] flex items-center justify-center font-black text-white text-sm border border-white/20">CC</div>
        </div>

        {/* İçerik Alanı */}
        <div className="p-8 flex-1 flex flex-col justify-between bg-white text-left">
          
          <div className="space-y-5 text-left">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-[6px]">
                ⚠ {error}
              </div>
            )}

            {/* ADIM 0: SİSTEM KONTROL */}
            {step === 0 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 uppercase">Sistem Gereksinimleri</h2>
                <div className="grid gap-2">
                  {['PHP 8.1+', 'MySQL Desteği', 'SSL Sertifikası', 'Yazma İzinleri'].map((item, i) => (
                    <div key={i} className="flex justify-between p-3 bg-slate-50 rounded-[6px] text-xs border border-slate-300">
                      <span className="font-bold text-slate-600 uppercase">{item}</span>
                      <span className="font-bold text-slate-800 tracking-tighter">✓ UYGUN</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADIM 1: LİSANS VE DB - KULLANICI/PAROLA YAN YANA */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 uppercase">Lisans ve Veritabanı</h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Lisans Anahtarı</label>
                    <input type="text" onChange={(e) => setFormData({...formData, license: e.target.value})} placeholder="CC-XXXX-XXXX" className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm font-mono" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Veritabanı Adı</label>
                    <input type="text" onChange={(e) => setFormData({...formData, dbName: e.target.value})} placeholder="db_isim" className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm" />
                  </div>

                  {/* Yan Yana Alanlar */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Kullanıcı Adı</label>
                      <input type="text" onChange={(e) => setFormData({...formData, dbUser: e.target.value})} placeholder="root" className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Parola</label>
                      <input type="password" onChange={(e) => setFormData({...formData, dbPass: e.target.value})} placeholder="••••" className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ADIM 2: ADMIN */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 uppercase">Panel Erişimi</h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Yönetici E-posta</label>
                    <input type="email" placeholder="admin@site.com" onChange={(e) => setFormData({...formData, adminUser: e.target.value})} className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Yönetici Şifresi</label>
                    <input type="password" placeholder="••••" onChange={(e) => setFormData({...formData, adminPass: e.target.value})} className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-slate-800 text-sm font-mono" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buton Alanı - Sola Yanaşık */}
          <div className="pt-5 border-t border-slate-200 mt-auto flex items-center justify-start gap-3">
            <button 
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#334155] text-white rounded-[6px] font-bold text-xs hover:bg-slate-800 transition-all cursor-pointer uppercase tracking-tight"
            >
              {step === 2 ? 'KURULUMU TAMAMLA' : 'SONRAKİ ADIM'}
            </button>
            
            {step > 0 && (
               <button 
                 onClick={() => setStep(step - 1)} 
                 className="px-6 py-2.5 bg-white text-black border border-black rounded-[6px] font-bold text-xs hover:bg-slate-50 transition-all uppercase cursor-pointer"
               >
                 Geri Dön
               </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}