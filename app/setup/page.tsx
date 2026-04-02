'use client';

import { useState } from 'react';

export default function SmartSetupWizard() {
  const [step, setStep] = useState(0); // 0'dan başlıyoruz (Sistem Kontrolü)

  return (
    <div className="min-h-screen bg-[#232328] flex items-center justify-center font-sans p-6 text-left">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Üst Bilgi Alanı */}
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Yazılım Kurulumu</h1>
            <p className="text-emerald-100 text-xs mt-1 font-medium italic">CC TeamWork v4.0 • Adım 0{step + 1}</p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-black text-white/40">CC</div>
        </div>

        <div className="p-10">
          
          {/* ADIM 0: SİSTEM MUAYENESİ (OTOMATİK) */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Sistem Gereksinimleri</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Kuruluma başlamadan önce hosting ortamınız kontrol ediliyor.</p>
              
              <div className="space-y-3">
                {[
                  { label: 'PHP Sürümü (8.1+)', status: '✓ Uygun' },
                  { label: 'MySQL Desteği', status: '✓ Aktif' },
                  { label: 'SSL Sertifikası (HTTPS)', status: '✓ Güvenli' },
                  { label: 'Yazma İzinleri (Folder Permissions)', status: '✓ Açık' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                    <span className="font-semibold text-slate-600">{item.label}</span>
                    <span className="font-bold text-emerald-600">{item.status}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="w-full py-4 bg-[#232328] text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg mt-4 cursor-pointer">Kuruluma Başla</button>
            </div>
          )}

          {/* ADIM 1: LİSANS VE VERİTABANI */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Lisans ve Veritabanı</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Lisans Anahtarı</label>
                  <input type="text" placeholder="CC-XXXX-XXXX-XXXX" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700 font-mono" />
                  <p className="text-[10px] text-slate-400 ml-1 italic">Lemon Squeezy tarafından gönderilen anahtarı girin.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Veritabanı Adı</label>
                    <input type="text" placeholder="Örn: ccteamwork_db" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Kullanıcı Adı</label>
                    <input type="text" placeholder="root" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">DB Parolası</label>
                    <input type="password" placeholder="••••••" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700" />
                  </div>
                </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full py-4 bg-[#232328] text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg mt-4 cursor-pointer">Doğrula ve Devam Et</button>
            </div>
          )}

          {/* ADIM 2: ADMİN BELİRLEME */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Yönetici Paneli Erişimi</h2>
              <p className="text-slate-500 text-sm italic">Panelde kullanacağınız ana giriş bilgilerini oluşturun.</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Kullanıcı Adı veya E-posta</label>
                  <input type="email" placeholder="admin@ccteamwork.com" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Güçlü Bir Parola Belirleyin</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-600 transition-all text-sm text-slate-700 font-mono" />
                </div>
              </div>
              <button onClick={() => alert('Kurulum Tamamlandı!')} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg mt-4 cursor-pointer underline-offset-4">Kurulumu Bitir ve Giriş Yap</button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}