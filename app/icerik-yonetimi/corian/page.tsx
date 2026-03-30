'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FinalProfessionalTerminal() {
  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- SOL: TAM KAPASİTE ELEMENT PANELİ --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[60px] flex items-center px-5 border-b bg-[#F9FAFB]">
          <span className="font-black text-[10px] tracking-[0.3em] text-[#2F4F4F] uppercase italic">Operasyon Paneli</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-8">
          
          {/* GRUP 1: TİPOGRAFİ & NAVİGASYON */}
          <div className="space-y-4">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] block border-b pb-1">Yapı & Navigasyon</label>
            <div className="flex flex-wrap gap-2">
              <button className="btn-flex border-blue-200 text-blue-700 bg-blue-50/20">İçindekiler</button>
              <button className="btn-flex">H2</button>
              <button className="btn-flex">H3</button>
              <button className="btn-flex">H4</button>
              <button className="btn-flex">Paragraf</button>
              <button className="btn-flex">Maddeli Liste</button>
              <button className="btn-flex">Numaralı Liste</button>
              <button className="btn-flex italic">Alıntı</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA & GÖRSEL */}
          <div className="space-y-4">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] block border-b pb-1">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2">
              <button className="btn-flex">Geniş Görsel (1800x)</button>
              <button className="btn-flex">Resim + Yazı</button>
              <button className="btn-flex">Galeri</button>
              <button className="btn-flex">Video / YouTube</button>
              <button className="btn-flex border-dashed opacity-50">Ayırıcı</button>
            </div>
          </div>

          {/* GRUP 3: TEKNİK & DÖNÜŞÜM */}
          <div className="space-y-4">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] block border-b pb-1">Dönüşüm & Teknik</label>
            <div className="flex flex-wrap gap-2">
              <button className="btn-flex text-orange-600 border-orange-200 bg-orange-50/10">SSS (FAQ)</button>
              <button className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
              <button className="btn-flex text-emerald-700 border-emerald-200">CTA Buton</button>
              <button className="btn-flex text-indigo-700 border-indigo-200">Katalog / PDF</button>
              <button className="btn-flex">Referanslar</button>
              <button className="btn-flex">Fiyat Listesi</button>
              <button className="btn-flex">İletişim</button>
              <button className="btn-flex">Google Harita</button>
            </div>
          </div>

          {/* GRUP 4: OTORİTE & KOD */}
          <div className="space-y-4">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] block border-b pb-1">Otorite & Kod</label>
            <div className="flex flex-wrap gap-2 pb-6">
              <button className="btn-flex font-bold">Yazar Kutusu</button>
              <button className="btn-flex">HTML / Shortcode</button>
              <button className="btn-flex">İlgili Yazılar</button>
            </div>
          </div>
        </div>

        {/* BELİRGİN ÇIKIŞ BUTONU */}
        <div className="p-5 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit">
            SİSTEMDEN AYRIL
          </Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto shadow-inner">
        <div className="max-w-[750px] mx-auto py-20 px-12 space-y-16">
          <div className="space-y-6">
            <div className="inline-block px-2 py-0.5 bg-[#2F4F4F]/10 text-[#2F4F4F] text-[9px] font-black rounded uppercase tracking-widest">İçerik Başlığı (H1)</div>
            <input className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-100 tracking-tight text-[#111]" placeholder="Sayfa Başlığını Girin..." />
            <textarea className="w-full text-lg text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-100 pl-8" placeholder="SEO Odaklı Giriş Özeti..." rows={2} />
          </div>
          <div className="h-px bg-gray-50 w-full"></div>
          <div className="min-h-[600px] border-2 border-dashed border-gray-100 rounded-[3rem] flex items-center justify-center text-gray-200 italic select-none">
            Sol panelden element seçerek makaleyi tasarlayın...
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b bg-white">
          <span className="font-black text-[9px] text-gray-400 uppercase tracking-widest italic">SEO Denetim</span>
        </div>
        <div className="p-6 space-y-10 flex-1 overflow-y-auto">
          <div className="space-y-2">
             <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>SEO Başlığı</span> <span className="text-green-600">0/45</span></div>
             <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#2F4F4F] shadow-sm" />
          </div>
          <div className="space-y-2">
             <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>Meta Açıklama</span> <span className="text-gray-300">0/145</span></div>
             <textarea className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none h-24 resize-none shadow-sm" />
          </div>
          <div className="p-6 bg-white border-2 border-[#2F4F4F] rounded-[2.5rem] flex flex-col items-center justify-center gap-1 shadow-xl">
             <span className="text-[9px] font-black uppercase text-[#2F4F4F] opacity-40">Makale Skoru</span>
             <span className="text-4xl font-black italic tracking-tighter text-[#2F4F4F]">00</span>
          </div>
        </div>
        <div className="p-6 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all shadow-lg active:scale-95">
            İÇERİĞİ KAYDET
          </button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px; /* Hafif kavisli daha profesyonel durur */
          font-size: 11px;
          font-weight: 800;
          color: #475569;
          white-space: nowrap;
          transition: all 0.2s;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }
        .btn-flex:hover {
          border-color: #2F4F4F;
          color: #2F4F4F;
          background: #F8FAFC;
          transform: translateY(-1px);
        }
        .btn-flex:active { transform: scale(0.96); }

        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px;
          background: #B91C1C; color: white; border-radius: 12px; font-weight: 900; font-size: 10px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .btn-exit:hover { background: #111; box-shadow: 0 10px 15px -3px rgba(185, 28, 28, 0.2); }

        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}