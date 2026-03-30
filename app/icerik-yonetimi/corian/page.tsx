'use client';

import { useState } from 'react';
import Link from 'next/link';

type Block = {
  id: string;
  type: string;
  content: string;
};

export default function ProfessionalTerminalV14() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden">
      
      {/* --- SOL: OKUNAKLI VE BÜYÜK ELEMENT PANELİ --- */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[70px] flex items-center px-6 border-b bg-[#F9FAFB]">
          <span className="font-black text-[12px] tracking-[0.3em] text-[#2F4F4F] uppercase italic">İçerik Mimarı</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
          
          {/* GRUP 1: TİPOGRAFİ */}
          <div className="space-y-5">
            <label className="text-[13px] font-extrabold text-[#64748B] uppercase tracking-[0.1em] block border-b-2 border-gray-50 pb-2">Metin & Yapı</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('toc')} className="btn-flex bg-blue-50/30 text-blue-700 border-blue-100">İçindekiler</button>
              <button onClick={() => addBlock('h2')} className="btn-flex">H2 Başlık</button>
              <button onClick={() => addBlock('h3')} className="btn-flex">H3 Başlık</button>
              <button onClick={() => addBlock('h4')} className="btn-flex text-[11px]">H4</button>
              <button onClick={() => addBlock('p')} className="btn-flex font-medium">Paragraf Blok</button>
              <button onClick={() => addBlock('ul')} className="btn-flex">Maddeli Liste</button>
              <button onClick={() => addBlock('ol')} className="btn-flex">Numaralı Liste</button>
              <button onClick={() => addBlock('quote')} className="btn-flex italic font-serif">Blok Alıntı</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA */}
          <div className="space-y-5">
            <label className="text-[13px] font-extrabold text-[#64748B] uppercase tracking-[0.1em] block border-b-2 border-gray-50 pb-2">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('image_hd')} className="btn-flex bg-emerald-50/30 text-emerald-700 border-emerald-100">HD Geniş Görsel</button>
              <button onClick={() => addBlock('gallery')} className="btn-flex">Galeri</button>
              <button onClick={() => addBlock('video')} className="btn-flex">YouTube / Video</button>
              <button onClick={() => addBlock('caption')} className="btn-flex text-[11px]">Resim Altı Metni</button>
              <button onClick={() => addBlock('divider')} className="btn-flex border-dashed opacity-50 text-[10px]">Ayırıcı Hat</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-5">
            <label className="text-[13px] font-extrabold text-[#64748B] uppercase tracking-[0.1em] block border-b-2 border-gray-50 pb-2">Satış & SEO</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('faq')} className="btn-flex bg-orange-50/30 text-orange-700 border-orange-100">SSS (FAQ)</button>
              <button onClick={() => addBlock('table')} className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
              <button onClick={() => addBlock('cta')} className="btn-flex bg-indigo-50/30 text-indigo-700 border-indigo-100">CTA Buton</button>
              <button onClick={() => addBlock('pdf')} className="btn-flex bg-red-50/30 text-red-700 border-red-100">Katalog PDF</button>
              <button onClick={() => addBlock('price')} className="btn-flex">Fiyat Tablosu</button>
              <button onClick={() => addBlock('contact')} className="btn-flex">İletişim Formu</button>
              <button onClick={() => addBlock('map')} className="btn-flex">Google Harita</button>
            </div>
          </div>

          {/* GRUP 4: OTORİTE */}
          <div className="space-y-5">
            <label className="text-[13px] font-extrabold text-[#64748B] uppercase tracking-[0.1em] block border-b-2 border-gray-50 pb-2">E-E-A-T (Otorite)</label>
            <div className="flex flex-wrap gap-2.5 pb-10">
              <button onClick={() => addBlock('author')} className="btn-flex font-bold">Yazar Kartı</button>
              <button onClick={() => addBlock('related')} className="btn-flex">İlgili Yazılar</button>
              <button onClick={() => addBlock('html')} className="btn-flex text-[10px]">Özel Kod (HTML)</button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50/80">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: GENİŞ VE OKUNAKLI YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto shadow-inner">
        <div className="max-w-[800px] mx-auto py-24 px-14 space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-gray-100 text-[#2F4F4F] text-[10px] font-black rounded-lg uppercase tracking-widest">H1 Başlık Alanı</div>
            <input className="w-full text-6xl font-black border-none outline-none placeholder:text-gray-100 tracking-tighter" placeholder="Başlığı Buraya Gir..." />
            <textarea className="w-full text-xl text-gray-400 border-none outline-none resize-none italic border-l-4 border-gray-50 pl-10" placeholder="SEO giriş paragrafı..." rows={1} />
          </div>
          
          <div className="h-px bg-gray-100 w-full"></div>
          
          <div className="min-h-[600px] space-y-10">
            {blocks.map((block) => (
              <div key={block.id} className="relative group p-4 rounded-2xl hover:bg-gray-50/30 transition-all border border-transparent hover:border-gray-100">
                <div className="text-[10px] font-black text-gray-300 uppercase mb-4 tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full"></span> {block.type} Elementi aktif
                </div>
                <div className="min-h-[50px] border-l-2 border-gray-100 pl-6">
                    <input className="w-full bg-transparent outline-none text-2xl font-bold placeholder:text-gray-200" placeholder={`${block.type} içeriği...`} />
                </div>
                <button 
                  onClick={() => setBlocks(blocks.filter(b => b.id !== block.id))}
                  className="absolute -left-14 top-8 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-700 transition-all font-black text-[10px] bg-white shadow-sm border p-2 rounded-full"
                >
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="h-[70px] flex items-center justify-center border-b bg-white font-black text-[10px] text-gray-400 uppercase tracking-widest">SEO Live Score</div>
        <div className="p-8 flex-1">
           <div className="aspect-square bg-white border-4 border-[#2F4F4F] rounded-[3rem] flex flex-col items-center justify-center shadow-2xl group cursor-default">
              <span className="text-[10px] font-black uppercase text-[#2F4F4F] opacity-40 group-hover:opacity-100 transition-opacity">Verimlilik</span>
              <span className="text-5xl font-black italic text-[#2F4F4F]">{blocks.length * 4 > 100 ? 100 : blocks.length * 4}</span>
           </div>
        </div>
        <div className="p-6 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-5 rounded-2xl text-[11px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] shadow-xl transition-all">İÇERİĞİ YAYINLA</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; 
          padding: 10px 20px; /* Daha geniş ve simetrik dokunma alanı */
          background: white; border: 1px solid #E2E8F0; border-radius: 14px;
          font-size: 12.5px; /* Yazıları büyüttüm */
          font-weight: 800; color: #475569; white-space: nowrap; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.05); }
        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 14px;
          background: #B91C1C; color: white; border-radius: 14px; font-weight: 900; font-size: 11px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}