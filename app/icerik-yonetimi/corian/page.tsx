'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- PAKET GEREKTİRMEYEN SVG İKONLAR ---
const IconSEO = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>;
const IconSettings = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;

export default function ProSEOTerminalSkeleton() {
  const [activeTab, setActiveTab] = useState<'seo' | 'ayar'>('seo');

  return (
    <div className="flex h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans overflow-hidden">
      
      {/* --- 1. SOL PANEL: ELEMENT CEPHANELİĞİ (SABİT) --- */}
      <aside className="w-[280px] bg-[#F8F9FA] border-r border-gray-100 flex flex-col z-50">
        <div className="h-[80px] flex items-center px-8 border-b bg-white">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#2F4F4F] uppercase">Terminal Pro</span>
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest italic">SEO Operations v2</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          {/* Element Butonları Buraya Gelecek (Aşama 2) */}
          <div className="space-y-4">
             <div className="flex flex-col gap-2 opacity-30 pointer-events-none">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Elementler</div>
                <div className="h-11 w-full bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                <div className="h-11 w-full bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                <div className="h-11 w-full bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                <div className="h-11 w-full bg-white border border-gray-100 rounded-xl shadow-sm"></div>
             </div>
          </div>
        </div>

        {/* Alt Profil/Durum Alanı */}
        <div className="p-6 border-t bg-white">
          <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-50 bg-[#F9FAFB]">
             <div className="w-9 h-9 rounded-xl bg-[#2F4F4F] flex items-center justify-center text-white text-[11px] font-black shadow-lg">ÖT</div>
             <div className="flex flex-col overflow-hidden">
               <span className="text-[11px] font-black text-[#1A1A1A] truncate uppercase">Özgür Tasarım</span>
               <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Sistem Çevrimiçi</span>
               </div>
             </div>
          </div>
        </div>
      </aside>

      {/* --- 2. ORTA PANEL: AKILLI EDİTÖR (SCROLL) --- */}
      <main className="flex-1 bg-white overflow-y-auto relative scrollbar-hide">
        {/* Üst İlerleme Çubuğu */}
        <div className="fixed top-0 left-[280px] right-[380px] h-1.5 bg-gray-50 z-50">
           <div className="h-full bg-[#2F4F4F] w-1/3 transition-all duration-500 shadow-[0_0_15px_rgba(47,79,79,0.4)]"></div>
        </div>

        {/* Yazım Alanı Konteynırı */}
        <div className="max-w-[850px] mx-auto min-h-screen py-32 px-16 space-y-20">
          
          {/* H1 Alanı Tasarımı */}
          <section className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-1000">
             <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded uppercase tracking-[0.2em] mb-2">H1 Header</div>
             <h1 className="text-6xl font-black tracking-tight text-[#111] leading-[1.1] outline-none border-none placeholder:text-gray-100">
               Corian Mutfak Tezgahı Modelleri 2026
             </h1>
             <div className="relative border-l-[3px] border-gray-100 pl-10 py-2">
                <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                  Modern mutfakların vazgeçilmezi akrilik yüzeyler hakkında her şey. 
                  Bu içerik tamamen SEO odaklı ve kullanıcı deneyimi için optimize edilmiştir.
                </p>
             </div>
          </section>

          <div className="h-px bg-gray-50 w-full"></div>

          {/* İçerik Blokları Yer Tutucu (Görsel Denge İçin) */}
          <section className="space-y-12 opacity-[0.05] select-none pointer-events-none italic">
             <div className="space-y-6">
                <div className="h-8 w-1/3 bg-black rounded"></div>
                <div className="space-y-3">
                   <div className="h-4 w-full bg-black rounded"></div>
                   <div className="h-4 w-full bg-black rounded"></div>
                   <div className="h-4 w-2/3 bg-black rounded"></div>
                </div>
             </div>
             <div className="w-full h-80 bg-black rounded-3xl"></div>
          </section>
        </div>
      </main>

      {/* --- 3. SAĞ PANEL: DENETİM VE AYARLAR (SABİT) --- */}
      <aside className="w-[380px] bg-white border-l border-gray-100 flex flex-col z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
        
        {/* Modern Tab Menü */}
        <div className="h-[80px] flex items-center border-b px-8 gap-10 bg-white">
          <button 
            onClick={() => setActiveTab('seo')}
            className={`group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all relative h-full pt-1
            ${activeTab === 'seo' ? 'text-[#2F4F4F]' : 'text-gray-300 hover:text-gray-500'}`}
          >
            <IconSEO />
            SEO Denetim
            {activeTab === 'seo' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2F4F4F] rounded-t-full"></div>}
          </button>
          
          <button 
            onClick={() => setActiveTab('ayar')}
            className={`group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all relative h-full pt-1
            ${activeTab === 'ayar' ? 'text-[#2F4F4F]' : 'text-gray-300 hover:text-gray-500'}`}
          >
            <IconSettings />
            Element Ayarı
            {activeTab === 'ayar' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2F4F4F] rounded-t-full"></div>}
          </button>
        </div>

        {/* Panel İçeriği */}
        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
           {activeTab === 'seo' ? (
             <div className="space-y-12 animate-in fade-in duration-500">
               {/* Google Preview */}
               <div className="space-y-5">
                 <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Google Search Preview</label>
                 <div className="p-6 border border-gray-50 rounded-3xl bg-[#FBFBFC] space-y-2 shadow-inner">
                   <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <div className="h-2.5 w-32 bg-gray-200 rounded"></div>
                   </div>
                   <div className="h-5 w-full bg-blue-100 rounded-lg"></div>
                   <div className="h-10 w-full bg-gray-100 rounded-lg opacity-60"></div>
                 </div>
               </div>
               
               {/* Premium Skor Kartı */}
               <div className="relative group">
                  <div className="absolute -inset-4 bg-[#2F4F4F]/5 rounded-[4rem] blur-xl group-hover:bg-[#2F4F4F]/10 transition-all duration-700"></div>
                  <div className="relative aspect-square w-full bg-[#2F4F4F] rounded-[3.5rem] shadow-[0_20px_50px_rgba(47,79,79,0.3)] flex flex-col items-center justify-center text-white overflow-hidden border border-white/10">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-24 -mt-24"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-3">Genel Skor</span>
                    <span className="text-8xl font-black italic tracking-tighter drop-shadow-2xl">00</span>
                    <div className="mt-8 flex gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                  </div>
               </div>
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in slide-in-from-right-8 duration-500 px-6">
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-[2rem] flex items-center justify-center text-gray-200 border border-gray-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20v-6M9 20v-10M6 20v-4M12 10V4M15 10V7M18 10V5"/></svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest italic">Düzenleme Modu</h4>
                  <p className="text-[12px] text-gray-400 font-medium leading-relaxed">
                    İçerik alanındaki bir elemente tıklayarak<br/>ayarlarını burada görebilirsin.
                  </p>
                </div>
             </div>
           )}
        </div>

        {/* Alt Kaydet Butonu */}
        <div className="p-8 border-t bg-white">
          <button className="w-full bg-[#2F4F4F] text-white py-6 rounded-[2rem] text-[11px] font-black tracking-[0.5em] uppercase hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl active:scale-95 border border-white/10">
            Yayınla & Bitir
          </button>
        </div>
      </aside>

    </div>
  );
}