'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfessionalTerminalV9() {
  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- SOL: GELİŞMİŞ ELEMENT CEPHANELİĞİ --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[60px] flex items-center px-5 border-b bg-[#F9FAFB]">
          <span className="font-black text-[10px] tracking-[0.3em] text-[#2F4F4F] uppercase italic">Araç Kutusu</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
          
          {/* GRUP 1: TİPOGRAFİ */}
          <div className="space-y-3">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block border-b pb-1">Metin & Başlık</label>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn-tool">H2</button>
              <button className="btn-tool">H3</button>
              <button className="btn-tool">H4</button>
              <button className="btn-tool">H5</button>
              <button className="btn-tool col-span-2">Paragraf</button>
              <button className="btn-tool">Liste (•)</button>
              <button className="btn-tool">Liste (1.)</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA & DÜZEN */}
          <div className="space-y-3">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block border-b pb-1">Görsel & Düzen</label>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn-tool col-span-2">Geniş Görsel</button>
              <button className="btn-tool">2 Sütun</button>
              <button className="btn-tool">3 Sütun</button>
              <button className="btn-tool">Galeri</button>
              <button className="btn-tool">Video</button>
              <button className="btn-tool col-span-2 text-[10px] border-dashed">— Ayırıcı Çizgi —</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-3">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block border-b pb-1">SEO & Dönüşüm</label>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn-tool text-blue-600 font-bold">Buton</button>
              <button className="btn-tool text-orange-600 font-bold">SSS</button>
              <button className="btn-tool col-span-2 text-emerald-600 font-bold bg-emerald-50/30">Vurgu Kutusu</button>
              <button className="btn-tool col-span-2 font-bold">Teknik Tablo</button>
              <button className="btn-tool">Referans</button>
              <button className="btn-tool">İletişim</button>
            </div>
          </div>

          {/* GRUP 4: İLERİ SEVİYE ELEMENTLER */}
          <div className="space-y-3">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block border-b pb-1">Gelişmiş</label>
            <div className="grid grid-cols-2 gap-2 pb-4">
              <button className="btn-tool">HTML Kod</button>
              <button className="btn-tool">Harita</button>
              <button className="btn-tool">Fiyat</button>
              <button className="btn-tool">Dosya</button>
            </div>
          </div>
        </div>

        {/* BELİRGİN ÇIKIŞ BUTONU */}
        <div className="p-4 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="flex items-center justify-center w-full py-3 bg-white border-2 border-red-100 rounded-xl text-[10px] font-black text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm tracking-widest uppercase">
            Sistemden Ayrıl
          </Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto scroll-smooth shadow-inner">
        <div className="max-w-[720px] mx-auto py-20 px-10 space-y-12">
          <div className="space-y-5">
            <div className="inline-block px-2 py-0.5 bg-gray-100 text-[#2F4F4F] text-[8px] font-black rounded uppercase tracking-tighter">İçerik Başlığı (H1)</div>
            <input className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-200 tracking-tight text-[#111]" placeholder="Corian Başlığınız..." />
            <textarea className="w-full text-base text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-50 pl-6" placeholder="SEO Giriş Özeti..." rows={2} />
          </div>
          <div className="h-px bg-gray-50 w-full"></div>
          <div className="min-h-[600px] border-2 border-dashed border-gray-100 rounded-[2.5rem] flex items-center justify-center text-gray-200 font-medium italic select-none">
            Sol taraftaki tuşlara basarak yapıyı kurun...
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b bg-white">
          <span className="font-black text-[9px] text-gray-400 uppercase tracking-widest">SEO Skor Kartı</span>
        </div>
        <div className="p-6 space-y-10 flex-1">
          <div className="space-y-3">
             <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>Başlık</span> <span className="text-green-600">0/45</span></div>
             <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#2F4F4F] transition-all shadow-sm" />
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>Meta</span> <span className="text-gray-300">0/145</span></div>
             <textarea className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none h-20 resize-none shadow-sm" />
          </div>
          <div className="bg-[#2F4F4F] p-6 rounded-[2rem] text-white flex flex-col items-center justify-center gap-2 shadow-xl border border-white/10 group">
             <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40">Verimlilik</span>
             <span className="text-4xl font-black italic tracking-tighter group-hover:scale-110 transition-transform">00</span>
          </div>
        </div>
        <div className="p-6 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all shadow-lg active:scale-95">
            İçeriği Kilitle
          </button>
        </div>
      </aside>

      <style jsx>{`
        .btn-tool {
          background: white;
          border: 1px solid #EDEDED;
          border-radius: 8px;
          padding: 10px 6px;
          font-size: 11px;
          font-weight: 800;
          color: #555;
          transition: all 0.1s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
          display: flex; align-items: center; justify-content: center;
          text-transform: uppercase;
        }
        .btn-tool:hover {
          border-color: #2F4F4F;
          color: #2F4F4F;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .btn-tool:active { transform: translateY(0); background: #F9FAFB; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}