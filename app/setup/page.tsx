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
      if (!formData.license || !formData.dbName || !formData.dbUser) {
        setError('Lütfen lisans ve veritabanı bilgilerini eksiksiz doldurun.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.adminUser || !formData.adminPass) {
        setError('Yönetici bilgilerini boş bırakamazsınız.');
        return;
      }
      alert('Tebrikler Özgür! Veritabanı bağlantısı kuruldu ve admin oluşturuldu.');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1e] flex items-center justify-center font-sans p-6 overflow-hidden">
      <div className="w-full max-w-xl bg-white shadow-2xl overflow-hidden h-[600px] flex flex-col rounded-[6px] border border-slate-300">
        
        {/* Header */}
        <div className="bg-emerald-700 p-6 text-white flex justify-between items-center shrink-0 border-b border-emerald-800">
          <div>
            <h1 className="text-2xl font-bold tracking-tight uppercase">Yazılım Kurulumu</h1>
            <p className="text-emerald-100 text-xs mt-1 font-medium tracking-wider opacity-90">CC TeamWork v4.0 • Adım 0{step + 1}</p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-[6px] flex items-center justify-center font-black text-white text-lg border border-white/20">CC</div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1 flex flex-col justify-between bg-slate-50">
          
          <div className="space-y-6">
            {error && (
              <div className="p-4 bg-red-100 border border-red-300 text-red-700 text-sm font-bold rounded-[6px] animate-in fade-in duration-300">
                ⚠ {error}
              </div>
            )}

            {/* ADIM 0: SİSTEM KONTROL */}
            {step === 0 && (
              <div className="space-y-4 animate-in fade-in duration-500">
                <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-2 text-left">Sistem Gereksinimleri</h2>
                <div className="grid gap-2">
                  {['PHP 8.1+', 'MySQL Desteği', 'SSL Sertifikası', 'Yazma İzinleri'].map((item, i) => (
                    <div key={i} className="flex justify-between p-4 bg-white rounded-[6px] text-sm border border-slate-300 shadow-sm">
                      <span className="font-bold text-slate-700 uppercase">{item}</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-2">
                         <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                         UYGUN
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADIM 1: LİSANS VE DB */}
            {step === 1 && (
              <div className="space-y-4 text-left animate-in fade-in duration-500">
                <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-2">Lisans ve Veritabanı</h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lisans Anahtarı</label>
                    <input 
                      type="text" 
                      onChange={(e) => setFormData({...formData, license: e.target.value})}
                      placeholder="CC-XXXX-XXXX" 
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/10 transition-all text-base font-mono" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Veritabanı Adı</label>
                      <input 
                        type="text" 
                        onChange={(e) => setFormData({...formData, dbName: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 text-base" 
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="DB Kullanıcı"
                      onChange={(e) => setFormData({...formData, dbUser: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 text-sm" 
                    />
                    <input 
                      type="password" 
                      placeholder="DB Parola"
                      onChange={(e) => setFormData({...formData, dbPass: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 text-sm" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ADIM 2: ADMIN */}
            {step === 2 && (
              <div className="space-y-6 text-left animate-in fade-in duration-500">
                <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-2">Yönetici Hesabı</h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-posta Adresi</label>
                    <input 
                      type="email" 
                      onChange={(e) => setFormData({...formData, adminUser: e.target.value})}
                      placeholder="admin@site.com" 
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 text-base" 
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Güçlü Parola</label>
                    <input 
                      type="password" 
                      onChange={(e) => setFormData({...formData, adminPass: e.target.value})}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[6px] outline-none focus:border-emerald-600 text-base font-mono" 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Buttons - Revize Edilen Kısım */}
          <div className="pt-6 border-t border-slate-300 mt-auto flex items-center justify-between">
            <div className="flex-1 text-left">
              {step > 0 && (
                 <button 
                   onClick={() => setStep(step - 1)} 
                   className="px-6 py-3 text-slate-500 text-sm font-bold border border-slate-300 rounded-[6px] hover:bg-slate-200 transition-all uppercase cursor-pointer"
                 >
                   Geri Dön
                 </button>
              )}
            </div>
            <div className="flex-1 text-right">
              <button 
                onClick={handleNext}
                className="px-8 py-4 bg-emerald-700 text-white rounded-[6px] font-bold text-base hover:bg-emerald-800 transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-tight"
              >
                {step === 2 ? 'Kurulumu Tamamla' : 'Sonraki Adım'}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}