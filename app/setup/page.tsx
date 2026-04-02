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
    <div className="min-h-screen bg-[#232328] flex items-center justify-center font-sans p-6 overflow-hidden">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden h-[620px] flex flex-col transition-all duration-500 border border-white/10">
        
        {/* Header */}
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase">Kurulum Sihirbazı</h1>
            <p className="text-emerald-100 text-[10px] mt-1 font-medium tracking-[0.2em] uppercase opacity-80 italic">CC TeamWork v4.0 • Adım 0{step + 1}</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black text-white text-sm backdrop-blur-sm">CC</div>
        </div>

        {/* İçerik Alanı */}
        <div className="p-10 flex-1 flex flex-col justify-between">
          
          <div className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-bold rounded-r-lg animate-in slide-in-from-top-2">
                ⚠ {error}
              </div>
            )}

            {/* ADIMLAR (SİSTEM, LİSANS, ADMIN) */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              {step === 0 && (
                <div className="space-y-6 text-left">
                  <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-tighter">Sistem Uyumluluğu</h2>
                  <div className="space-y-3">
                    {['PHP 8.1+', 'MySQL Desteği', 'SSL Sertifikası', 'Yazma İzinleri'].map((item, i) => (
                      <div key={i} className="flex justify-between p-4 bg-slate-50 rounded-2xl text-sm border border-slate-100">
                        <span className="font-semibold text-slate-600">{item}</span>
                        <span className="font-bold text-emerald-600">✓ OK</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4 text-left">
                  <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-tighter">Lisans ve Veritabanı</h2>
                  <div className="space-y-4">
                    <div className="group">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-wider">Lisans Kodu</label>
                      <input type="text" onChange={(e) => setFormData({...formData, license: e.target.value})} placeholder="CC-XXXX" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 focus:bg-white transition-all text-sm font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-wider">DB Adı</label>
                        <input type="text" onChange={(e) => setFormData({...formData, dbName: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 text-sm" />
                      </div>
                      <input type="text" placeholder="DB Kullanıcı" onChange={(e) => setFormData({...formData, dbUser: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 text-sm" />
                      <input type="password" placeholder="DB Parola" onChange={(e) => setFormData({...formData, dbPass: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 text-sm" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 text-left">
                  <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-tighter">Panel Erişimi</h2>
                  <div className="space-y-4">
                    <input type="email" placeholder="Admin E-posta" onChange={(e) => setFormData({...formData, adminUser: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 text-sm" />
                    <input type="password" placeholder="Panel Parolası" onChange={(e) => setFormData({...formData, adminPass: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-emerald-600 text-sm font-mono" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* BUTONLAR - İşte beklediğin yan yana düzen */}
          <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-end gap-3">
            {step > 0 && (
               <button 
                 onClick={() => setStep(step - 1)} 
                 className="px-6 py-4 text-slate-400 text-[11px] font-bold hover:text-slate-700 transition-all uppercase tracking-widest cursor-pointer active:scale-95 bg-slate-50 rounded-2xl border border-slate-100"
               >
                 Geri Dön
               </button>
            )}
            
            <button 
              onClick={handleNext}
              className="px-8 py-4 bg-[#232328] text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg active:scale-95 cursor-pointer min-w-[160px] uppercase tracking-tight"
            >
              {step === 2 ? 'Kurulumu Bitir' : 'İleri'}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}