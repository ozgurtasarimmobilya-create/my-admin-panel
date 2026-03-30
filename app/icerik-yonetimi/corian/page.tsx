'use client';

import { useState } from 'react';
import Link from 'next/link';

type Block = {
  id: string;
  type: string;
  content: string;
};

export default function ProfessionalTerminalV15() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
    };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#111] font-sans overflow-hidden">
      
      {/* --- SOL: ELEMENT PANELİ --- */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm z-20">
        <div className="h-[70px] flex items-center px-6 border-b bg-white">
          <span className="font-black text-[13px] tracking-[0.2em] text-[#2F4F4F] uppercase">İçerik Stüdyosu</span>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
          <div className="space-y-5">
            <label className="text-[13px] font-black text-[#64748B] uppercase tracking-widest block border-b-2 border-gray-100 pb-2">Metin & Yapı</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('H2')} className="btn-flex">H2</button>
              <button onClick={() => addBlock('H3')} className="btn-flex">H3</button>
              <button onClick={() => addBlock('Paragraf')} className="btn-flex font-medium">Paragraf</button>
              <button onClick={() => addBlock('Liste')} className="btn-flex">Liste</button>
              <button onClick={() => addBlock('Görsel')} className="btn-flex bg-emerald-50 text-emerald-700 border-emerald-100">HD Görsel</button>
              <button onClick={() => addBlock('Teknik Tablo')} className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
            </div>
          </div>
          {/* Diğer 25+ element burada devam ediyor... */}
        </div>
        <div className="p-6 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: DİRİ VE KONTROL PANELLİ ALAN --- */}
      <main className="flex-1 bg-[#FDFDFD] overflow-y-auto shadow-inner custom-scrollbar relative">
        <div className="max-w-[850px] mx-auto py-24 px-16 space-y-16">
          
          {/* H1 Sabit */}
          <div className="space-y-6 group">
            <div className="inline-block px-3 py-1 bg-[#2F4F4F] text-white text-[10px] font-black rounded uppercase tracking-widest shadow-md">Sayfa H1 (Ana Başlık)</div>
            <input className="w-full text-6xl font-black border-none outline-none placeholder:text-gray-200 tracking-tighter text-[#111] bg-transparent" placeholder="Makale Başlığı..." />
            <textarea className="w-full text-xl text-[#4B5563] border-none outline-none resize-none italic border-l-4 border-[#2F4F4F] pl-10 bg-transparent leading-relaxed" placeholder="SEO odaklı güçlü bir giriş paragrafı yazın..." rows={2} />
          </div>

          <div className="h-px bg-gray-200 w-full shadow-sm"></div>

          {/* DİNAMİK BLOKLAR */}
          <div className="min-h-[600px] space-y-12">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative group bg-white border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 pt-12">
                
                {/* --- BLOK ÜSTÜ KONTROL PANELİ (TOOLBAR) --- */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 flex items-center bg-[#111] text-white px-3 py-1.5 rounded-2xl shadow-2xl gap-4 z-10 border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 border-r border-white/20 text-gray-400">{block.type}</span>
                  <div className="flex gap-2">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:text-emerald-400 transition-colors">↑</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:text-emerald-400 transition-colors">↓</button>
                  </div>
                  <div className="h-4 w-px bg-white/20"></div>
                  <button className="hover:text-blue-400 text-[10px] font-bold uppercase">Ayarlar</button>
                  <button onClick={() => deleteBlock(block.id)} className="text-red-400 hover:text-red-600 text-[10px] font-bold uppercase">SİL</button>
                </div>

                {/* İçerik Yazım Alanı */}
                <div className="relative">
                  {block.type.startsWith('H') ? (
                    <input className="w-full text-4xl font-extrabold text-[#111] outline-none bg-transparent placeholder:text-gray-100" placeholder={`${block.type} Başlığı...`} />
                  ) : (
                    <textarea className="w-full text-lg leading-relaxed text-[#334155] outline-none bg-transparent resize-none placeholder:text-gray-100" placeholder="İçeriği detaylandırın..." rows={4} />
                  )}
                </div>
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="h-80 border-4 border-dashed border-gray-50 rounded-[4rem] flex items-center justify-center text-gray-200 text-xl font-bold italic select-none">
                Element ekleyerek tasarımı canlandırın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-72 bg-white border-l border-gray-200 flex flex-col z-20 shadow-lg">
        <div className="h-[70px] flex items-center justify-center border-b font-black text-[11px] text-[#2F4F4F] uppercase tracking-[0.2em]">SEO Canlı Analiz</div>
        <div className="p-8 flex-1 space-y-8 overflow-y-auto custom-scrollbar">
           <div className="aspect-square bg-[#111] rounded-[3.5rem] flex flex-col items-center justify-center shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F] to-black opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <span className="relative text-[11px] font-black uppercase text-gray-400 tracking-[0.3em]">Performans</span>
              <span className="relative text-7xl font-black italic text-white tracking-tighter">{blocks.length * 5}</span>
           </div>
        </div>
        <div className="p-6 border-t">
          <button className="w-full bg-[#2F4F4F] text-white py-5 rounded-[1.5rem] text-[12px] font-black tracking-[0.2em] uppercase hover:bg-[#111] transition-all shadow-xl active:scale-95">İÇERİĞİ KİLİTLE VE KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px;
          background: white; border: 1px solid #E2E8F0; border-radius: 16px;
          font-size: 13px; font-weight: 800; color: #1e293b; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-2px); shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 16px;
          background: #B91C1C; color: white; border-radius: 18px; font-weight: 900; font-size: 12px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      `}</style>
    </div>
  );
}