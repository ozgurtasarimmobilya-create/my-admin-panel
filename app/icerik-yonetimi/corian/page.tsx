'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- TİPLER ---
type Block = { id: string; type: string; label: string; content: string; };

export default function ProfessionalGutenbergEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  const addBlock = (type: string, label: string) => {
    const newId = Math.random().toString(36).substr(2, 9);
    setBlocks([...blocks, { id: newId, type, label, content: '' }]);
    setActiveBlockId(newId);
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    if (activeBlockId === id) setActiveBlockId(null);
  };

  return (
    <div className="flex h-screen bg-white text-[#1e1e1e] font-sans overflow-hidden select-none">
      
      {/* --- ÜST SABİT TOOLBAR (DİNAMİK AYARLAR) --- */}
      <header className="fixed top-0 left-0 right-0 h-14 border-b bg-white flex items-center justify-between px-6 z-[100] shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 bg-[#2F4F4F] rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">ÖT</div>
          
          {/* AKTİF BLOK AYARLARI (YUKARIDA SABİT) */}
          {activeBlockId ? (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              <button className="toolbar-btn font-bold">B</button>
              <button className="toolbar-btn italic">I</button>
              <button className="toolbar-btn underline">U</button>
              <button className="toolbar-btn">🔗</button>
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              <button className="toolbar-btn">≡</button>
              <button className="toolbar-btn text-[10px] font-black">H1/H2</button>
              <button className="toolbar-btn text-red-500 hover:bg-red-50" onClick={() => deleteBlock(activeBlockId!)}>SİL</button>
            </div>
          ) : (
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Düzenlemek için bir bloğa tıklayın</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 hover:bg-gray-100 rounded-md text-xs font-bold border border-gray-200 transition-all">Önizleme</button>
          <button className="px-6 py-1.5 bg-[#2F4F4F] text-white rounded-md text-xs font-black shadow-lg hover:opacity-90 active:scale-95 transition-all uppercase tracking-widest">KAYDET</button>
        </div>
      </header>

      {/* --- SOL PANEL (25+ ELEMENT FULL LİSTE) --- */}
      <aside className="w-72 mt-14 border-r bg-white overflow-y-auto custom-scrollbar flex flex-col z-50">
        <div className="p-4 flex gap-4 border-b text-[10px] font-black uppercase tracking-wider text-gray-400 sticky top-0 bg-white">
          <span className="text-[#2F4F4F] border-b-2 border-[#2F4F4F] pb-4 cursor-pointer">Elementler</span>
          <span className="hover:text-black cursor-pointer">Modeller</span>
        </div>
        
        <div className="p-5 space-y-8 pb-20">
          {[
            { title: 'METİN', items: [{ t: 'p', l: 'Paragraf' }, { t: 'h2', l: 'Başlık' }, { t: 'ul', l: 'Liste' }, { t: 'q', l: 'Alıntı' }, { t: 'code', l: 'Kod' }, { t: 'table', l: 'Tablo' }] },
            { title: 'ORTAM', items: [{ t: 'img', l: 'Görsel' }, { t: 'gal', l: 'Galeri' }, { t: 'vid', l: 'Video' }, { t: 'file', l: 'Dosya' }] },
            { title: 'TASARIM', items: [{ t: 'acc', l: 'Akordeon' }, { t: 'btn', l: 'Düğme' }, { t: 'col', l: 'Sütunlar' }, { t: 'div', l: 'Ayırıcı' }] },
            { title: 'VERİ', items: [{ t: 'faq', l: 'SSS' }, { t: 'how', l: 'Nasıl' }, { t: 'bread', l: 'Yol Haritası' }] }
          ].map((group) => (
            <div key={group.title} className="space-y-3">
              <label className="text-[9px] font-black text-[#64748B] tracking-[0.2em] block uppercase">{group.title}</label>
              <div className="grid grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <button key={item.t} onClick={() => addBlock(item.t, item.l)} className="element-btn">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#2F4F4F]"></span>
                    {item.l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* --- ORTA ALAN (DİRİ YAZIM ALANI) --- */}
      <main className="flex-1 mt-14 bg-[#FCFCFD] overflow-y-auto custom-scrollbar relative px-10">
        <div className="max-w-[750px] mx-auto py-24 space-y-12">
          
          {/* MANŞET H1 */}
          <div className="space-y-4 px-4">
            <input className="w-full text-6xl font-black border-none outline-none placeholder:text-gray-100 tracking-tighter text-[#111] bg-transparent" placeholder="Sayfa Başlığı..." />
            <textarea className="w-full text-xl text-gray-400 border-none outline-none resize-none italic border-l-4 border-gray-100 pl-10 bg-transparent" placeholder="Güçlü bir SEO girişi yazın..." rows={1} />
          </div>

          <div className="min-h-[600px] space-y-6 pb-60">
            {blocks.map((block) => (
              <div 
                key={block.id} 
                onClick={() => setActiveBlockId(block.id)}
                className={`relative group transition-all duration-200 p-6 rounded-2xl cursor-text ${activeBlockId === block.id ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-l-4 border-[#2F4F4F]' : 'hover:bg-gray-50/50'}`}
              >
                <div className={`text-[9px] font-black uppercase tracking-widest mb-3 ${activeBlockId === block.id ? 'text-[#2F4F4F]' : 'text-gray-300'}`}>{block.label}</div>
                <div 
                  contentEditable 
                  className={`outline-none leading-relaxed text-[#111] ${['h2', 'h3'].includes(block.type) ? 'text-4xl font-extrabold' : 'text-lg'}`}
                  placeholder={`${block.label} yazmaya başlayın...`}
                >
                  {block.content}
                </div>
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="h-60 border-4 border-dashed border-gray-50 rounded-[3rem] flex items-center justify-center text-gray-200 text-xl font-black italic">
                Element ekleyerek başlayın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ PANEL (YOAST / SEO ANALİZ) --- */}
      <aside className="w-72 mt-14 border-l bg-white overflow-y-auto custom-scrollbar shadow-2xl">
        <div className="p-4 border-b font-black text-[11px] text-[#2F4F4F] uppercase tracking-widest bg-gray-50/50">SEO & Analiz</div>
        <div className="p-6 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Odak Anahtar Kelime</label>
            <input className="w-full border-2 border-gray-100 rounded-xl p-3 text-sm focus:border-[#2F4F4F] outline-none transition-all" placeholder="Kelime giriniz..." />
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">🟢 SEO Skoru</span>
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded">MÜKEMMEL</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">🟢 Okunabilirlik</span>
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded">İYİ</span>
            </div>
          </div>
        </div>
      </aside>

      <style jsx>{`
        .toolbar-btn {
          padding: 6px 12px; border-radius: 6px; font-size: 13px; color: #4B5563; transition: all 0.2s;
        }
        .toolbar-btn:hover { background: #F3F4F6; color: #000; }
        .element-btn {
          display: flex; align-items: center; gap: 8px; padding: 10px;
          background: white; border: 1px solid #F1F3F5; border-radius: 12px;
          font-size: 11px; font-weight: 800; color: #1e293b; transition: all 0.2s;
          width: 100%; text-align: left; box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }
        .element-btn:hover { border-color: #2F4F4F; color: #2F4F4F; transform: translateY(-1px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        [contentEditable]:empty:before { content: attr(placeholder); color: #E5E7EB; }
      `}</style>
    </div>
  );
}