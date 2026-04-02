'use client';

import { useState } from 'react';

export default function SmartSetupWizard() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  
  // Form Verileri
  const [formData, setFormData] = useState({
    license: '',
    dbName: '',
    dbUser: '',
    dbPass: '',
    adminUser: '',
    adminPass: ''
  });

  // Girdi Kontrolü ve Adım Geçişi
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
      {/* Kart Yüksekliğini Sabitledik (h-[600px]) böylece kayma yapmaz */}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden h-[620px] flex flex-col">
        
        {/* Header */}
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-xl font-bold">Yazılım Kurulumu</h1>
            <p className="text-emerald-100 text-[10px] mt-1 font-medium tracking-widest uppercase">CC TeamWork v4.0 • Adım 0{step + 1}</p>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-black text-white/50 text-sm">CC</div>
        </div>

        {/* Content Area - Kaymayı önlemek için flex-1 kullandık */}
        <div className="p-10 flex-1 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-lg animate-bounce">
                ⚠ {error}
              </div>
            )}

            {/* ADIM 0: SİSTEM KONTROL */}
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-2 text-left">Sistem Gereksinimleri</h2>
                <div className="space-y-3">
                  {['PHP 8.1+', 'MySQL Desteği', 'SSL Sertifikası', 'Yazma İzinleri'].map((item, i) => (
                    <div key={i} className="flex justify-between p-3 bg-slate-50 rounded-xl text-sm border border-slate-100">
                      <span className="font-semibold text-slate-600">{item}</span>
                      <span className="font-bold text-emerald-600">✓ Uygun</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADIM 1: LİSANS VE DB */}
            {step === 1 && (
              <div className="space-y-4 text-left">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Lisans ve Veritabanı</h2>
                <div className="space-y-4">
                  <div className="group">
                    <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Lisans Anahtarı</label>
                    <input 
                      type="text" 
                      onChange={(e) => setFormData({...formData, license: e.target.value})}
                      placeholder="CC-XXXX-XXXX" 
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 focus:bg-white transition-all text-sm font-mono" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Veritabanı Adı</label>
                      <input 
                        type="text" 
                        onChange={(e) => setFormData({...formData, dbName: e.target.value})}
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 text-sm" 
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Kullanıcı</label>
                      <input 
                        type="text" 
                        onChange={(e) => setFormData({...formData, dbUser: e.target.value})}
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 text-sm" 
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Parola</label>
                      <input 
                        type="password" 
                        onChange={(e) => setFormData({...formData, dbPass: e.target.value})}
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 text-sm" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ADIM 2: ADMIN */}
            {step === 2 && (
              <div className="space-y-6 text-left border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Yönetici Hesabı</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Admin E-posta</label>
                    <input 
                      type="email" 
                      onChange={(e) => setFormData({...formData, adminUser: e.target.value})}
                      placeholder="admin@site.com" 
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 text-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Panel Parolası</label>
                    <input 
                      type="password" 
                      onChange={(e) => setFormData({...formData, adminPass: e.target.value})}
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 text-sm font-mono" 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Buttons - Sabit konumda kalır */}
          <div className="pt-6 border-t border-slate-50 mt-auto">
            <button 
              onClick={handleNext}
              className="w-full py-4 bg-[#232328] text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              {step === 2 ? 'Kurulumu Tamamla' : 'Sonraki Adım'}
            </button>
            {step > 0 && (
               <button onClick={() => setStep(step - 1)} className="w-full mt-3 text-slate-400 text-xs font-bold hover:text-slate-600 transition-all uppercase tracking-widest">Geri Dön</button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}