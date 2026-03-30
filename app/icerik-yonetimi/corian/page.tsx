'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- TİPLER ---
type Block = { id: string; type: string; label: string; content: string; };

export default function MinimalistProEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: string, label: string) => {
    setBlocks([...blocks, { id: Math.random().toString(36).substr(2, 9), type, label, content: '' }]);
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target >= 0 && target < blocks.length) {
      [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
      setBlocks(newBlocks);
    }
  };

  return (
    <div className="flex h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans overflow-hidden">
      
      {/* --- SOL: KOMPAKT SİDEBAR (25+ ELEMENT) --- */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col z-30 shadow-sm">
        <div className="h-14 flex items-center px-5 border-b">
          <span className="font-black text-[10px] tracking-[0.4em] text-[#2F4F4F] uppercase opacity-70">Mimari Panel</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-8">
          
          {/* GRUPLAR (Kısa & Öz) */}
          {[
            { title: 'MODELLER', items: [{ t: 'hero', l: 'Hero' }, { t: 'slider', l: 'Slider' }] },
            { title: 'METİN', items: [{ t: 'p', l: 'Paragraf' }, { t: 'h2', l: 'Başlık' }, { t: 'ul', l: 'Liste' }, { t: 'q', l: 'Alıntı' }, { t: 'code', l: 'Kod' }, { t: 'table', l: 'Tablo' }] },
            { title: 'ORTAM', items: [{ t: 'img', l: 'Görsel' }, { t: 'gal', l: 'Galeri' }, { t: 'man', l: 'Manşet' }, { t: 'file', l: 'Dosya' }, { t: 'vid', l: 'Video' }] },
            { title: 'TASARIM', items: [{ t: 'acc', l: 'Akordeon' }, { t: 'btn', l: 'Düğme' }, { t: 'col', l: 'Sütun' }, { t: 'div', l: 'Ayırıcı' }] },
            { title: 'TEMA & VERİ', items: [{ t: 'faq', l: 'SSS' }, { t: 'how', l: 'Nasıl' }, { t: 'bread', l: 'Breadcrumb' }, { t: 'author', l: 'Yazar' }] },
            { title: 'GÖMÜLÜ', items: [{ t: 'yt', l: 'YouTube' }, { t: 'tw', l: 'Twitter' }, { t: 'spo', l: 'Spotify' }] }
          ].map((group) => (
            <div key={group.title} className="space-y-2 text-left">
              <label className="text-[9px] font-black text-[#64748B] tracking-widest pl-1">{group.title}</label>
              <div className="grid grid-cols-2 gap-1.5">
                {group.items.map((item) => (
                  <button key={item.t} onClick={() => addBlock(item.t, item.l)} className="btn-compact">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#2F4F4F]"></span>
                    {item.l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-gray-50/50">
          <Link href="/" className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:text-black transition-all">Sistemden Çık</Link>
        </div>
      </aside>

      {/* --- ORTA: MODERN & ZARİF YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto relative custom-scrollbar">
        <div className="max-w-[700px] mx-auto py-24 px-10 space-y-16">
          
          {/* MANŞET */}
          <div className="space-y-4">
            <input className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-100 tracking-tighter text-[#111]" placeholder="Makale Başlığı..." />
            <textarea className="w-full text-lg text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-100 pl-8" placeholder="SEO odaklı giriş..." rows={1} />
          </div>

          <div className="min-h-[500px] space-y-10 pb-40">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative group rounded-2xl hover:bg-gray-50/30 p-6 transition-all duration-300">
                
                {/* --- ZARİF TOOLBAR (GOOGLE AI STYLE) --- */}
                <div className="absolute -top-3 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 flex items-center bg-[#111] text-white px-3 py-1.5 rounded-full shadow-2xl gap-4 z-40 border border-white/10 overflow-hidden">
                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 border-r border-white/10 pr-3">{block.label}</span>
                  <div className="flex gap-2.5 text-[10px]">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:text-blue-400">↑</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:text-blue-400">↓</button>
                    <div className="w-px h-3 bg-white/20 mx-1"></div>
                    <button className="hover:text-orange-400 font-bold uppercase text-[8px]">Ayarlar</button>
                    <button onClick={() => setBlocks(blocks.filter(b => b.id !== block.id))} className="text-red-400 hover:text-red-600 font-bold uppercase text-[8px]">Sil</button>
                  </div>
                </div>

                {/* İÇERİK */}
                <div className="relative">
                  {['h2', 'h3', 'hero', 'man'].includes(block.type) ? (
                    <input className="w-full text-3xl font-bold text-[#111] outline-none bg-transparent placeholder:text-gray-100" placeholder={`${block.label} yazın...`} />
                  ) : (
                    <textarea className="w-full text-base leading-relaxed text-[#444] outline-none bg-transparent resize-none placeholder:text-gray-100" placeholder={`${block.label} metni...`} rows={3} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#FCFCFD] border-l border-gray-200 p-8 flex flex-col justify-between">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">SEO Score</span>
            <div className="text-6xl font-black text-[#2F4F4F] italic tracking-tighter">{blocks.length * 5}</div>
          </div>
        </div>
        <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all shadow-xl">KAYDET</button>
      </aside>

      <style jsx>{`
        .btn-compact {
          display: flex; align-items: center; gap: 8px; padding: 6px 10px;
          background: white; border: 1px solid #F1F3F5; border-radius: 8px;
          font-size: 11px; font-weight: 700; color: #495057; transition: all 0.2s;
          width: 100%; text-align: left;
        }
        .btn-compact:hover { border-color: #2F4F4F; color: #2F4F4F; background: #F8F9FA; transform: translateY(-1px); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E9ECEF; border-radius: 10px; }
      `}</style>
    </div>
  );
}