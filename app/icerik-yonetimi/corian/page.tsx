'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- TİPLER ---
type Block = {
  id: string;
  type: string;
  label: string;
  content: string;
};

export default function UltimateSEOEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  // --- FONKSİYONLAR ---
  const addBlock = (type: string, label: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      label,
      content: '',
    };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id: string) => setBlocks(blocks.filter(b => b.id !== id));

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  return (
    <div className="flex h-screen bg-[#F0F2F5] text-[#111] font-sans overflow-hidden select-none">
      
      {/* --- SOL: 25+ ELEMENTLİ SABİT CEPHANELİK --- */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-xl z-30">
        <div className="h-[70px] flex items-center px-8 border-b bg-white">
          <span className="font-black text-[13px] tracking-[0.3em] text-[#2F4F4F] uppercase italic">SEO Studio v1.0</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
          
          {/* GRUP 1: METİN VE YAPI */}
          <div className="space-y-4">
            <label className="text-[13px] font-black text-[#64748B] uppercase tracking-widest block border-b-2 border-gray-100 pb-2">Metin & Yapı</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('toc', 'İçindekiler')} className="btn-flex bg-blue-50 text-blue-700 border-blue-100">İçindekiler</button>
              <button onClick={() => addBlock('h2', 'H2 Başlık')} className="btn-flex">H2</button>
              <button onClick={() => addBlock('h3', 'H3 Başlık')} className="btn-flex">H3</button>
              <button onClick={() => addBlock('h4', 'H4 Başlık')} className="btn-flex text-[11px]">H4</button>
              <button onClick={() => addBlock('p', 'Paragraf')} className="btn-flex font-medium">Paragraf</button>
              <button onClick={() => addBlock('ul', 'Maddeli Liste')} className="btn-flex">Maddeli Liste</button>
              <button onClick={() => addBlock('ol', 'Numaralı Liste')} className="btn-flex">Numaralı Liste</button>
              <button onClick={() => addBlock('quote', 'Alıntı')} className="btn-flex italic font-serif">Alıntı</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA & GÖRSEL */}
          <div className="space-y-4">
            <label className="text-[13px] font-black text-[#64748B] uppercase tracking-widest block border-b-2 border-gray-100 pb-2">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('img_hd', 'HD Görsel')} className="btn-flex bg-emerald-50 text-emerald-700 border-emerald-100">HD Geniş Görsel</button>
              <button onClick={() => addBlock('img_text', 'Görsel + Metin')} className="btn-flex text-[11px]">Görsel + Metin</button>
              <button onClick={() => addBlock('gallery', 'Galeri')} className="btn-flex">Galeri</button>
              <button onClick={() => addBlock('video', 'Video')} className="btn-flex">YouTube / Video</button>
              <button onClick={() => addBlock('caption', 'Resim Altı')} className="btn-flex text-[11px]">Resim Altı Metni</button>
              <button onClick={() => addBlock('divider', 'Ayırıcı')} className="btn-flex border-dashed opacity-50">Ayırıcı Hat</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-4">
            <label className="text-[13px] font-black text-[#64748B] uppercase tracking-widest block border-b-2 border-gray-100 pb-2">Satış & SEO</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('faq', 'SSS')} className="btn-flex bg-orange-50 text-orange-700 border-orange-100">SSS (FAQ)</button>
              <button onClick={() => addBlock('table', 'Teknik Tablo')} className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
              <button onClick={() => addBlock('cta', 'CTA Buton')} className="btn-flex bg-indigo-50 text-indigo-700 border-indigo-100">CTA Buton</button>
              <button onClick={() => addBlock('pdf', 'Katalog')} className="btn-flex bg-red-50 text-red-700 border-red-100">PDF Katalog</button>
              <button onClick={() => addBlock('price', 'Fiyatlar')} className="btn-flex">Fiyat Listesi</button>
              <button onClick={() => addBlock('refs', 'Referanslar')} className="btn-flex">Referanslar</button>
              <button onClick={() => addBlock('contact', 'Form')} className="btn-flex">İletişim Formu</button>
              <button onClick={() => addBlock('map', 'Harita')} className="btn-flex">Google Harita</button>
            </div>
          </div>

          {/* GRUP 4: OTORİTE */}
          <div className="space-y-4">
            <label className="text-[13px] font-black text-[#64748B] uppercase tracking-widest block border-b-2 border-gray-100 pb-2">Otorite</label>
            <div className="flex flex-wrap gap-2 pb-12">
              <button onClick={() => addBlock('author', 'Yazar')} className="btn-flex font-bold">Yazar Kartı</button>
              <button onClick={() => addBlock('related', 'İlgili')} className="btn-flex">İlgili Yazılar</button>
              <button onClick={() => addBlock('html', 'HTML')} className="btn-flex text-[10px]">Özel Kod</button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: DİRİ, KONTRASTLI VE İŞLEVCEL YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto shadow-inner relative custom-scrollbar">
        <div className="max-w-[850px] mx-auto py-32 px-16 space-y-16">
          
          {/* SABİT H1 BAŞLIK */}
          <div className="space-y-6 group select-text">
            <div className="inline-block px-3 py-1 bg-[#111] text-white text-[10px] font-black rounded-lg uppercase tracking-[0.2em] shadow-lg">Makale H1 (Zorunlu)</div>
            <input className="w-full text-7xl font-black border-none outline-none placeholder:text-gray-100 tracking-tighter text-[#111] bg-transparent" placeholder="Manşet Başlığı..." />
            <textarea className="w-full text-2xl text-[#4B5563] border-none outline-none resize-none italic border-l-4 border-[#2F4F4F] pl-12 bg-transparent leading-relaxed" placeholder="Güçlü bir SEO giriş özeti..." rows={2} />
          </div>

          <div className="h-px bg-gray-200 w-full"></div>

          {/* DİNAMİK BLOKLAR LİSTESİ */}
          <div className="min-h-[700px] space-y-14 pb-40">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative group bg-white border border-transparent hover:border-gray-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-[2.5rem] p-10 pt-16 select-text">
                
                {/* --- BLOK ARAÇ ÇUBUĞU (TOOLBAR) --- */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-90 group-hover:scale-100 flex items-center bg-[#111] text-white px-4 py-2 rounded-2xl shadow-2xl gap-5 z-40 border border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 border-r border-white/10 pr-3">{block.label}</span>
                  <div className="flex gap-3 text-lg font-bold">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:text-blue-400">↑</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:text-blue-400">↓</button>
                  </div>
                  <div className="h-4 w-px bg-white/20"></div>
                  <button className="text-[10px] font-bold uppercase hover:text-orange-400">Ayarlar</button>
                  <button onClick={() => deleteBlock(block.id)} className="text-[10px] font-bold uppercase text-red-500 hover:text-red-300">SİL</button>
                </div>

                {/* İÇERİK INPUTLARI (TİPE GÖRE) */}
                <div className="relative">
                  {block.type.startsWith('h') ? (
                    <input className="w-full text-4xl font-extrabold text-[#111] outline-none bg-transparent placeholder:text-gray-100 tracking-tight" placeholder={`${block.label} içeriği...`} />
                  ) : (
                    <textarea className="w-full text-lg leading-relaxed text-[#334155] outline-none bg-transparent resize-none placeholder:text-gray-100" placeholder={`${block.label} için metin girin...`} rows={4} />
                  )}
                </div>
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="h-96 border-4 border-dashed border-gray-100 rounded-[4rem] flex items-center justify-center text-gray-200 text-2xl font-black italic select-none">
                Sol panelden bir element seçerek tasarıma başlayın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ: CANLI SEO SKOR --- */}
      <aside className="w-80 bg-white border-l border-gray-200 flex flex-col z-30 shadow-2xl">
        <div className="h-[70px] flex items-center justify-center border-b font-black text-[11px] text-[#2F4F4F] uppercase tracking-[0.3em]">SEO Denetçisi</div>
        <div className="p-10 flex-1 space-y-10">
           <div className="aspect-square bg-[#111] rounded-[4rem] flex flex-col items-center justify-center shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F] to-black opacity-60"></div>
              <span className="relative text-[11px] font-black uppercase text-gray-400 tracking-[0.3em]">Sayfa Skoru</span>
              <span className="relative text-8xl font-black italic text-white tracking-tighter">{blocks.length * 5 > 100 ? 100 : blocks.length * 5}</span>
           </div>
        </div>
        <div className="p-8 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-6 rounded-[2rem] text-[12px] font-black tracking-[0.3em] uppercase hover:bg-[#2F4F4F] transition-all shadow-2xl active:scale-95">İÇERİĞİ KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px;
          background: white; border: 1px solid #E2E8F0; border-radius: 16px;
          font-size: 13px; font-weight: 800; color: #1e293b; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 18px;
          background: #B91C1C; color: white; border-radius: 20px; font-weight: 900; font-size: 11px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      `}</style>
    </div>
  );
}