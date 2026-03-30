'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfessionalTerminalV8() {
  const [openGroup, setOpenGroup] = useState<string | null>('text');

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- SOL: ELEMENT KÜTÜPHANESİ (GRID YAPI) --- */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="p-4 border-b bg-[#F9FAFB] flex justify-between items-center">
          <h1 className="font-black text-[9px] tracking-widest text-[#2F4F4F] uppercase">Elementler</h1>
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6">
          
          {/* GRUP 1: TİPOGRAFİ (BAŞLIKLAR VE YAZI) */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-tighter ml-1">Yazı & Hiyerarşi</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="btn-tool">H2</button>
              <button className="btn-tool">H3</button>
              <button className="btn-tool">H4</button>
              <button className="btn-tool italic">Paragraf</button>
              <button className="btn-tool col-span-2">Maddeli Liste</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA & DÜZEN */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-tighter ml-1">Medya & Yerleşim</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="btn-tool col-span-2 text-[10px]">Görsel (1800x1250)</button>
              <button className="btn-tool">2'li Sütun</button>
              <button className="btn-tool">3'lü Sütun</button>
              <button className="btn-tool col-span-2 border-dashed opacity-60 italic">— Ayırıcı Çizgi —</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & ETKİLEŞİM */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-tighter ml-1">Satış & SEO</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="btn-tool font-bold text-blue-600 border-blue-100">CTA Buton</button>
              <button className="btn-tool font-bold text-orange-600 border-orange-100">SSS (FAQ)</button>
              <button className="btn-tool col-span-2 text-indigo-600 border-indigo-100 bg-indigo-50/10">Vurgu Kutusu (Note)</button>
              <button className="btn-tool col-span-2 border-gray-300 font-bold">Teknik Tablo</button>
            </div>
          </div>

          {/* GRUP 4: EKSTRALAR */}
          <div className="space-y-2 opacity-80">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-tighter ml-1">Ekstralar</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="btn-tool text-[10px]">YouTube</button>
              <button className="btn-tool text-[10px]">Referans</button>
            </div>
          </div>
        </div>

        <div className="p-3 border-t text-center">
          <Link href="/icerik-yonetimi" className="text-[9px] font-bold text-gray-300 hover:text-black transition-colors uppercase tracking-widest">Geri Dön</Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto scroll-smooth shadow-inner">
        <div className="max-w-[720px] mx-auto py-16 px-10 space-y-12">
          <div className="space-y-4">
            <div className="inline-block px-2 py-0.5 bg-gray-100 text-[#2F4F4F] text-[9px] font-black rounded uppercase">Ana Başlık (H1)</div>
            <input className="w-full text-4xl font-bold border-none outline-none placeholder:text-gray-100 tracking-tight text-[#111]" placeholder="Corian Tasarım Başlığı..." />
            <textarea className="w-full text-base text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-100 pl-5" placeholder="Snippet girişi..." rows={2} />
          </div>
          <div className="h-px bg-gray-50 w-full"></div>
          <div className="min-h-[500px] border-2 border-dashed border-gray-50 rounded-[2rem] flex items-center justify-center text-gray-200 font-medium italic">
            Element tuşlarına basarak içeriği inşa edin...
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ (DAR VE NET) --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b bg-white text-center">
          <span className="font-black text-[9px] text-gray-400 uppercase tracking-[0.2em]">SEO Raporu</span>
        </div>
        <div className="p-5 space-y-8 flex-1 overflow-y-auto">
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>Başlık</span> <span className="text-green-600">42/45</span></div>
            <input className="w-full p-2 bg-white border border-gray-200 rounded text-xs outline-none focus:border-[#2F4F4F] shadow-sm" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>Meta</span> <span className="text-orange-500">120/145</span></div>
            <textarea className="w-full p-2 bg-white border border-gray-200 rounded text-xs outline-none h-16 resize-none focus:border-[#2F4F4F] shadow-sm" />
          </div>
          <div className="bg-[#2F4F4F] p-4 rounded-2xl text-white flex flex-col items-center justify-center gap-1 shadow-lg border border-white/5">
             <span className="text-[8px] font-black uppercase tracking-widest opacity-40">SEO Skoru</span>
             <span className="text-3xl font-black italic tracking-tighter">%88</span>
          </div>
        </div>
        <div className="p-4 bg-white border-t">
          <button className="w-full bg-[#2F4F4F] text-white py-3.5 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase hover:bg-black transition-all shadow-md">KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-tool {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 6px;
          padding: 8px 4px;
          font-size: 11px;
          font-weight: 700;
          color: #4B5563;
          transition: all 0.1s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }
        .btn-tool:hover {
          border-color: #2F4F4F;
          color: #2F4F4F;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }
        .btn-tool:active {
          transform: translateY(0);
          background-color: #F9FAFB;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}