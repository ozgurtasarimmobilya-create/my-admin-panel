'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- COMPACT SVG ICONS ---
const IconPlus = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconChevron = ({ open }: { open: boolean }) => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={open ? 'rotate-180' : ''}><polyline points="6 9 12 15 18 9"/></svg>;

export default function CompactSEOTerminal() {
  const [openGroup, setOpenGroup] = useState<string | null>('text');

  return (
    <div className="flex h-screen bg-[#F4F4F7] text-[#333] font-sans overflow-hidden text-[13px]">
      
      {/* --- SOL: ELEMENT CEPHANELİĞİ (DARALTILMIŞ) --- */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="p-4 border-b bg-[#FAFAFB]">
          <h1 className="font-black text-[10px] tracking-widest text-[#2F4F4F] uppercase">SEO EDITOR</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* GRUP: METİN */}
          <div className="border-b border-gray-50">
            <button onClick={() => setOpenGroup(openGroup === 'text' ? null : 'text')} className="w-full p-3 flex justify-between items-center bg-gray-50/50 hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[10px] uppercase text-gray-500 tracking-wider">Metin Yapısı</span>
              <IconChevron open={openGroup === 'text'} />
            </button>
            {openGroup === 'text' && (
              <div className="p-2 grid grid-cols-1 gap-1 animate-in slide-in-from-top-1 duration-200">
                <button className="btn-el"><span>H2 Başlık</span> <IconPlus /></button>
                <button className="btn-el"><span>H3 Başlık</span> <IconPlus /></button>
                <button className="btn-el"><span>H4 Başlık</span> <IconPlus /></button>
                <button className="btn-el"><span>Paragraf</span> <IconPlus /></button>
                <button className="btn-el"><span>Liste</span> <IconPlus /></button>
              </div>
            )}
          </div>

          {/* GRUP: MEDYA */}
          <div className="border-b border-gray-50">
            <button onClick={() => setOpenGroup(openGroup === 'media' ? null : 'media')} className="w-full p-3 flex justify-between items-center bg-gray-50/50 hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[10px] uppercase text-gray-500 tracking-wider">Medya & Düzen</span>
              <IconChevron open={openGroup === 'media'} />
            </button>
            {openGroup === 'media' && (
              <div className="p-2 grid grid-cols-1 gap-1">
                <button className="btn-el"><span>Görsel (1800x)</span> <IconPlus /></button>
                <button className="btn-el"><span>2'li Sütun</span> <IconPlus /></button>
                <button className="btn-el"><span>Ayırıcı</span> <IconPlus /></button>
              </div>
            )}
          </div>

          {/* GRUP: TEKNİK */}
          <div className="border-b border-gray-50">
            <button onClick={() => setOpenGroup(openGroup === 'tech' ? null : 'tech')} className="w-full p-3 flex justify-between items-center bg-gray-50/50 hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[10px] uppercase text-gray-500 tracking-wider">SEO & Satış</span>
              <IconChevron open={openGroup === 'tech'} />
            </button>
            {openGroup === 'tech' && (
              <div className="p-2 grid grid-cols-1 gap-1">
                <button className="btn-el"><span>CTA Buton</span> <IconPlus /></button>
                <button className="btn-el"><span>Vurgu Kutusu</span> <IconPlus /></button>
                <button className="btn-el"><span>SSS Bloğu</span> <IconPlus /></button>
                <button className="btn-el"><span>Teknik Tablo</span> <IconPlus /></button>
              </div>
            )}
          </div>
        </div>

        <div className="p-3 border-t text-center">
          <Link href="/icerik-yonetimi" className="text-[10px] font-bold text-gray-400 hover:text-black tracking-tighter transition-colors">ÇIKIŞ YAP</Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI (MAKSİMUM ODAK) --- */}
      <main className="flex-1 bg-white overflow-y-auto scrollbar-thin">
        <div className="max-w-[700px] mx-auto py-16 px-8 space-y-12">
          {/* H1 Alanı */}
          <div className="space-y-4">
            <span className="text-[10px] font-black text-blue-500 uppercase">H1 Başlık</span>
            <input className="w-full text-4xl font-bold border-none outline-none placeholder:text-gray-200 tracking-tight" placeholder="Corian Mutfak Tezgahı..." />
            <textarea className="w-full text-base text-gray-500 border-none outline-none resize-none italic border-l-2 border-gray-100 pl-4" placeholder="SEO Giriş Metni..." rows={2} />
          </div>

          <div className="h-px bg-gray-100 w-full"></div>

          {/* Dinamik İçerik Alanı (Gelecek Aşama) */}
          <div className="space-y-8 min-h-[400px] text-gray-300 italic flex items-center justify-center border-2 border-dashed border-gray-50 rounded-3xl">
             Soldan element ekleyerek başlayın...
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ VE AYARLAR (KOMPAKT) --- */}
      <aside className="w-72 bg-[#F8F9FA] border-l border-gray-200 flex flex-col shadow-inner">
        <div className="p-4 border-b bg-white flex justify-between items-center">
          <span className="font-black text-[10px] text-gray-400 uppercase tracking-widest">SEO LAB</span>
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
        </div>

        <div className="p-5 space-y-8 overflow-y-auto flex-1">
          {/* Google Preview (Küçültülmüş) */}
          <div className="space-y-3">
             <label className="text-[10px] font-bold text-gray-400 uppercase">Google Önizleme</label>
             <div className="bg-white p-3 border border-gray-100 rounded-xl shadow-sm text-[12px] leading-snug">
               <div className="text-blue-700 font-medium truncate mb-1">Corian Mutfak Tezgahı Modelleri 2026</div>
               <div className="text-green-700 text-[10px] mb-1">ozgurtasarim.com.tr › corian</div>
               <div className="text-gray-500 text-[11px] line-clamp-2">En şık ve dayanıklı mutfak tezgahı modelleri Özgür Tasarım'da. Hemen incele...</div>
             </div>
          </div>

          {/* Sayaçlar (Kompakt) */}
          <div className="space-y-4">
             <div className="space-y-1">
               <div className="flex justify-between text-[10px] font-bold"><span>Başlık</span> <span className="text-green-600">42/45</span></div>
               <input className="w-full p-2 bg-white border border-gray-100 rounded-lg outline-none text-xs" />
             </div>
             <div className="space-y-1">
               <div className="flex justify-between text-[10px] font-bold"><span>Meta</span> <span className="text-orange-500">120/145</span></div>
               <textarea className="w-full p-2 bg-white border border-gray-100 rounded-lg outline-none text-xs h-16 resize-none" />
             </div>
          </div>

          {/* Teknik Skor (Minimalist) */}
          <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-between shadow-sm">
             <div className="flex flex-col">
               <span className="text-[9px] font-black text-gray-300 uppercase">İçerik Skoru</span>
               <span className="text-2xl font-black text-[#2F4F4F] tracking-tighter">%84</span>
             </div>
             <div className="w-10 h-10 bg-[#2F4F4F] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg">OK</div>
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <button className="w-full bg-[#2F4F4F] text-white py-3 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all">SAYFAYI KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-el {
          @apply flex items-center justify-between w-full px-3 py-2 text-[11px] font-semibold text-gray-600 bg-white border border-gray-100 rounded-lg hover:border-[#2F4F4F] hover:text-[#2F4F4F] transition-all mb-1;
          display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0.5rem 0.75rem; font-size: 11px; font-weight: 600; color: #4b5563; background: white; border: 1px solid #f3f4f6; border-radius: 0.5rem; transition: all 0.2s; margin-bottom: 4px;
        }
        .btn-el:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateX(2px); }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}