'use client';

import { useState } from 'react';
import Link from 'next/link';

// Blok Tip Tanımı
type Block = {
  id: string;
  type: 'h2' | 'h3' | 'paragraph';
  content: string;
};

export default function FunctionalTerminalV11() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Blok Ekleme Fonksiyonu
  const addBlock = (type: Block['type']) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
    };
    setBlocks([...blocks, newBlock]);
  };

  // Blok İçeriği Güncelleme
  const updateBlock = (id: string, newContent: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: newContent } : b));
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- SOL: GELİŞMİŞ PANEL --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[60px] flex items-center px-5 border-b bg-[#F9FAFB]">
          <span className="font-black text-[11px] tracking-[0.2em] text-[#2F4F4F] uppercase italic">Araç Kutusu</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-10">
          
          <div className="space-y-4">
            <label className="text-[11px] font-[900] text-[#111] uppercase tracking-widest block border-b-2 border-[#2F4F4F] pb-1">METİN & BAŞLIK</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('h2')} className="btn-flex">H2</button>
              <button onClick={() => addBlock('h3')} className="btn-flex">H3</button>
              <button onClick={() => addBlock('paragraph')} className="btn-flex">Paragraf</button>
              <button className="btn-flex opacity-50">LİSTE (Yakında)</button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[11px] font-[900] text-[#111] uppercase tracking-widest block border-b-2 border-gray-200 pb-1 opacity-50">MEDYA & GÖRSEL</label>
            <div className="flex flex-wrap gap-2">
              <button className="btn-flex opacity-50">Geniş Görsel</button>
              <button className="btn-flex opacity-50">Video</button>
            </div>
          </div>
        </div>

        <div className="p-5 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: CANLI YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto shadow-inner scroll-smooth">
        <div className="max-w-[750px] mx-auto py-20 px-12 space-y-8 text-[#1A1A1A]">
          
          {/* H1 Sabit */}
          <div className="space-y-4">
            <div className="inline-block px-2 py-0.5 bg-[#2F4F4F]/10 text-[#2F4F4F] text-[9px] font-black rounded uppercase">Sayfa H1</div>
            <input className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-100 tracking-tight" placeholder="Sayfa Başlığını Girin..." />
            <textarea className="w-full text-lg text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-50 pl-8" placeholder="SEO odaklı giriş..." rows={1} />
          </div>

          <div className="h-px bg-gray-100 w-full"></div>

          {/* DİNAMİK BLOKLAR */}
          <div className="min-h-[400px] space-y-6">
            {blocks.map((block) => (
              <div key={block.id} className="relative group animate-in slide-in-from-left-2 duration-300">
                {block.type === 'h2' && (
                  <input 
                    autoFocus
                    className="w-full text-3xl font-bold tracking-tight text-[#111] border-none outline-none placeholder:text-gray-200" 
                    placeholder="H2 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                {block.type === 'h3' && (
                  <input 
                    autoFocus
                    className="w-full text-2xl font-bold tracking-tight text-[#333] border-none outline-none placeholder:text-gray-200" 
                    placeholder="H3 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                {block.type === 'paragraph' && (
                  <textarea 
                    autoFocus
                    className="w-full text-base leading-relaxed text-[#4B5563] border-none outline-none resize-none placeholder:text-gray-200" 
                    placeholder="Paragraf içeriğini yazın..."
                    rows={3}
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                {/* Blok Silme Butonu (Hover'da çıkar) */}
                <button 
                  onClick={() => setBlocks(blocks.filter(b => b.id !== block.id))}
                  className="absolute -left-10 top-2 opacity-0 group-hover:opacity-100 text-red-300 hover:text-red-600 transition-all font-black text-[10px] uppercase"
                >
                  SİL
                </button>
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="h-64 border-2 border-dashed border-gray-50 rounded-[3rem] flex items-center justify-center text-gray-200 italic select-none">
                Sol paneldeki H2 veya Paragraf'a basarak başlayın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ: ANALİZ --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b bg-white text-[9px] font-black uppercase text-gray-400 tracking-widest italic">SEO Denetim</div>
        <div className="p-6 space-y-10 flex-1 overflow-y-auto">
          <div className="space-y-2">
             <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest"><span>SEO Başlığı</span> <span className="text-green-600">0/45</span></div>
             <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none shadow-sm" />
          </div>
          <div className="p-6 bg-white border-2 border-[#2F4F4F] rounded-[2.5rem] flex flex-col items-center justify-center gap-1 shadow-xl">
             <span className="text-[9px] font-black uppercase text-[#2F4F4F] opacity-40">Makale Skoru</span>
             <span className="text-4xl font-black italic text-[#2F4F4F]">{blocks.length * 10 > 100 ? 100 : blocks.length * 10}</span>
          </div>
        </div>
        <div className="p-6 border-t bg-white">
          <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all">İÇERİĞİ KAYDET</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; padding: 8px 16px;
          background: white; border: 1px solid #E2E8F0; border-radius: 12px;
          font-size: 11px; font-weight: 800; color: #475569; white-space: nowrap; transition: all 0.2s;
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-1px); }
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