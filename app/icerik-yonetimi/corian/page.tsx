'use client';

import { useState } from 'react';
import Link from 'next/link';

// Blok Yapısı
type Block = {
  id: string;
  type: string;
  content: string;
  extra?: string;
};

export default function ProfessionalTerminalV13() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
      extra: ''
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- SOL: 25+ ELEMENTLİ DEV CEPHANELİK --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[60px] flex items-center px-5 border-b bg-[#F9FAFB]">
          <span className="font-black text-[10px] tracking-[0.3em] text-[#2F4F4F] uppercase">Editör Paneli</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-9">
          
          {/* GRUP 1: YAPI & TİPOGRAFİ */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] block border-b border-gray-100 pb-1">Yapı & Tipografi</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('toc')} className="btn-flex border-blue-100 text-blue-600 bg-blue-50/20 text-[10px]">İçindekiler (TOC)</button>
              <button onClick={() => addBlock('h2')} className="btn-flex">H2</button>
              <button onClick={() => addBlock('h3')} className="btn-flex">H3</button>
              <button onClick={() => addBlock('h4')} className="btn-flex">H4</button>
              <button onClick={() => addBlock('h5')} className="btn-flex">H5</button>
              <button onClick={() => addBlock('p')} className="btn-flex">Paragraf</button>
              <button onClick={() => addBlock('ul')} className="btn-flex">Maddeli Liste</button>
              <button onClick={() => addBlock('ol')} className="btn-flex">Numaralı Liste</button>
              <button onClick={() => addBlock('quote')} className="btn-flex italic font-serif">Alıntı</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA & GÖRSEL (HD) */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] block border-b border-gray-100 pb-1">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('image_hd')} className="btn-flex text-emerald-700 border-emerald-100 bg-emerald-50/20">HD Geniş Görsel</button>
              <button onClick={() => addBlock('image_text')} className="btn-flex text-[10px]">Görsel + Metin</button>
              <button onClick={() => addBlock('gallery')} className="btn-flex">Galeri</button>
              <button onClick={() => addBlock('video')} className="btn-flex">Video / YouTube</button>
              <button onClick={() => addBlock('divider')} className="btn-flex border-dashed opacity-60">Ayırıcı Çizgi</button>
              <button onClick={() => addBlock('caption')} className="btn-flex text-[10px]">Resim Altı Yazı</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] block border-b border-gray-100 pb-1">Satış & SEO</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('faq')} className="btn-flex text-orange-600 border-orange-100 bg-orange-50/10">SSS (FAQ)</button>
              <button onClick={() => addBlock('table')} className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
              <button onClick={() => addBlock('cta')} className="btn-flex text-indigo-700 border-indigo-100 bg-indigo-50/10">CTA Buton</button>
              <button onClick={() => addBlock('pdf')} className="btn-flex text-red-700 border-red-100 bg-red-50/10 text-[10px]">PDF Katalog</button>
              <button onClick={() => addBlock('price')} className="btn-flex">Fiyat Listesi</button>
              <button onClick={() => addBlock('refs')} className="btn-flex">Referanslar</button>
              <button onClick={() => addBlock('contact')} className="btn-flex">İletişim Formu</button>
              <button onClick={() => addBlock('map')} className="btn-flex">Google Harita</button>
            </div>
          </div>

          {/* GRUP 4: OTORİTE & KOD */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] block border-b border-gray-100 pb-1">Otorite & Kod</label>
            <div className="flex flex-wrap gap-2 pb-8">
              <button onClick={() => addBlock('author')} className="btn-flex font-bold">Yazar Kutusu</button>
              <button onClick={() => addBlock('html')} className="btn-flex">HTML / Kod</button>
              <button onClick={() => addBlock('related')} className="btn-flex">İlgili Yazılar</button>
              <button onClick={() => addBlock('social')} className="btn-flex">Paylaşım</button>
            </div>
          </div>
        </div>

        <div className="p-5 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto shadow-inner relative">
        <div className="max-w-[750px] mx-auto py-24 px-12 space-y-12">
          {/* H1 Alanı */}
          <div className="space-y-5">
            <div className="inline-block px-2 py-0.5 bg-gray-100 text-[#2F4F4F] text-[9px] font-black rounded uppercase">Sayfa H1</div>
            <input className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-100 tracking-tight" placeholder="Başlık Giriniz..." />
            <textarea className="w-full text-lg text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-50 pl-8" placeholder="SEO Giriş Özeti..." rows={1} />
          </div>
          <div className="h-px bg-gray-100 w-full"></div>
          
          {/* Bloklar */}
          <div className="min-h-[500px] space-y-8">
            {blocks.map((block) => (
              <div key={block.id} className="relative group p-2 rounded-xl hover:bg-gray-50/50 transition-all">
                <div className="text-[9px] font-bold text-gray-300 uppercase mb-2 tracking-widest">{block.type} Elementi</div>
                <div className="min-h-[40px] border border-transparent border-l-gray-200 pl-4">
                    {/* Buraya her block tipi için input gelecek */}
                    <input className="w-full bg-transparent outline-none text-lg" placeholder={`${block.type} içeriğini yazın...`} />
                </div>
                <button 
                  onClick={() => setBlocks(blocks.filter(b => b.id !== block.id))}
                  className="absolute -left-12 top-4 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all font-black text-[9px] uppercase tracking-tighter"
                >
                  SİL
                </button>
              </div>
            ))}
            {blocks.length === 0 && (
              <div className="h-64 border-2 border-dashed border-gray-50 rounded-[3rem] flex items-center justify-center text-gray-200 italic select-none">
                Sol taraftaki 25 elementten birini seçerek başlayın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b bg-white font-black text-[9px] text-gray-400 uppercase tracking-widest">SEO Skor</div>
        <div className="p-6 flex-1 space-y-6">
           <div className="p-8 bg-white border-2 border-[#2F4F4F] rounded-[2.5rem] text-center shadow-xl">
              <span className="text-4xl font-black italic text-[#2F4F4F]">{blocks.length * 4 > 100 ? 100 : blocks.length * 4}</span>
           </div>
        </div>
        <div className="p-6 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all">KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; 
          padding: 8px 16px; /* Tam simetrik, nefes alan boşluk */
          background: white; border: 1px solid #E2E8F0; border-radius: 12px;
          font-size: 11px; font-weight: 800; color: #475569; white-space: nowrap; transition: all 0.2s;
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-1px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px;
          background: #B91C1C; color: white; border-radius: 12px; font-weight: 900; font-size: 10px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}