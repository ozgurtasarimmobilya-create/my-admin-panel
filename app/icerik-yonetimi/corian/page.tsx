'use client';

import { useState, useEffect } from 'react';
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
  const [mounted, setMounted] = useState(false);

  // Hydration hatasını önlemek için (Vercel Build fix)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
    <div className="flex h-screen bg-[#F8FAFC] text-[#1E293B] font-sans overflow-hidden select-none">
      
      {/* --- SOL PANEL: ELEMENT CEPHANELİĞİ --- */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-2xl z-30">
        <div className="h-[70px] flex items-center px-8 border-b bg-white">
          <span className="font-black text-[11px] tracking-[0.4em] text-slate-900 uppercase italic">DENGE TASARIM SEO</span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar pb-20">
          
          {/* SEO VE YAPI */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-2">H Etiketleri & Yapı</label>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => addBlock('h2', 'H2 Başlık')} className="btn-element">H2 Başlık</button>
              <button onClick={() => addBlock('h3', 'H3 Başlık')} className="btn-element">H3 Başlık</button>
              <button onClick={() => addBlock('p', 'Paragraf')} className="btn-element col-span-2">Metin Bloğu</button>
              <button onClick={() => addBlock('toc', 'İçindekiler')} className="btn-element bg-blue-50 text-blue-700">İçindekiler</button>
              <button onClick={() => addBlock('ul', 'Liste')} className="btn-element underline">Maddeli Liste</button>
            </div>
          </div>

          {/* MEDYA VE GÖRSEL */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-2">Görsel & Medya</label>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => addBlock('img', 'Geniş Görsel')} className="btn-element bg-emerald-50 text-emerald-700">HD Görsel</button>
              <button onClick={() => addBlock('gallery', 'Galeri')} className="btn-element">Galeri</button>
              <button onClick={() => addBlock('video', 'YouTube')} className="btn-element col-span-2 text-red-600">YouTube Video</button>
            </div>
          </div>

          {/* TEKNİK VE SATIŞ */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-2">Teknik & SEO</label>
            <div className="grid grid-cols-1 gap-2">
              <button onClick={() => addBlock('table', 'Teknik Tablo')} className="btn-element border-slate-400 font-black tracking-tighter italic">TEKNİK TABLO EKLE</button>
              <button onClick={() => addBlock('faq', 'SSS Bloğu')} className="btn-element bg-orange-50 text-orange-700">SSS (FAQ) JSON-LD</button>
              <button onClick={() => addBlock('cta', 'CTA Buton')} className="btn-element bg-indigo-600 text-white shadow-lg">TEKLİF AL BUTONU</button>
            </div>
          </div>

        </div>

        <div className="p-6 border-t bg-slate-50">
          <Link href="/icerik-yonetimi" className="btn-exit">SİSTEMDEN AYRIL</Link>
        </div>
      </aside>

      {/* --- ORTA: YAZIM ALANI --- */}
      <main className="flex-1 bg-[#F1F5F9] overflow-y-auto relative custom-scrollbar px-4">
        <div className="max-w-[800px] mx-auto py-24 px-12 bg-white shadow-2xl min-h-screen my-10 rounded-[3rem]">
          
          {/* MANŞET */}
          <div className="space-y-6 mb-16">
            <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">Makale H1</div>
            <input className="w-full text-6xl font-black border-none outline-none placeholder:text-slate-100 tracking-tighter text-slate-900" placeholder="İçerik Başlığı..." />
            <textarea className="w-full text-xl text-slate-500 border-none outline-none resize-none italic border-l-4 border-emerald-500 pl-10 bg-transparent leading-relaxed" placeholder="Google'ı etkileyecek giriş paragrafı..." rows={2} />
          </div>

          {/* BLOKLAR */}
          <div className="space-y-12">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative group p-8 rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
                
                {/* TOOLBAR */}
                <div className="absolute -top-5 left-8 opacity-0 group-hover:opacity-100 transition-all flex items-center bg-slate-900 text-white px-4 py-2 rounded-xl shadow-2xl gap-4 z-40">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 border-r border-white/10 pr-3">{block.label}</span>
                  <div className="flex gap-2 text-sm font-bold border-r border-white/10 pr-3">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:text-blue-400">↑</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:text-blue-400">↓</button>
                  </div>
                  <button onClick={() => deleteBlock(block.id)} className="text-[9px] font-black text-red-400 hover:text-red-200 uppercase">SİL</button>
                </div>

                {/* INPUTLAR */}
                <div className="relative">
                  {block.type.startsWith('h') ? (
                    <input className="w-full text-4xl font-black text-slate-900 outline-none bg-transparent placeholder:text-slate-200" placeholder={`${block.label} başlığını girin...`} />
                  ) : (
                    <textarea className="w-full text-lg leading-relaxed text-slate-600 outline-none bg-transparent resize-none placeholder:text-slate-200" placeholder={`${block.label} içeriği...`} rows={3} />
                  )}
                </div>
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="py-40 text-center border-4 border-dashed border-slate-50 rounded-[3rem] text-slate-200 text-2xl font-black uppercase tracking-widest italic">
                Element seçerek taslağı oluştur
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- SAĞ: SEO ANALİZ --- */}
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col z-30 shadow-2xl">
        <div className="h-[70px] flex items-center justify-center border-b font-black text-[10px] text-slate-400 uppercase tracking-widest">SEO Canlı Denetim</div>
        <div className="p-10 flex-1 space-y-10">
           <div className="aspect-square bg-slate-900 rounded-[3.5rem] flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">SEO PUANI</span>
              <span className="relative text-7xl font-black italic text-white tracking-tighter">{Math.min(blocks.length * 12, 100)}</span>
           </div>
           
           <div className="space-y-4">
              <div className="flex items-center gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-tighter">
                <span className={`w-2 h-2 rounded-full ${blocks.length > 3 ? 'bg-emerald-500' : 'bg-orange-400'}`} />
                Kelime Uzunluğu: {blocks.length * 40} Kelime
              </div>
              <div className="flex items-center gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-tighter">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                H Etiketi Hiyerarşisi: Diri
              </div>
           </div>
        </div>
        <div className="p-8 border-t bg-white">
          <button className="w-full bg-slate-900 text-white py-6 rounded-3xl text-[11px] font-black tracking-[0.3em] uppercase hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95">İÇERİĞİ SİSTEME GÖNDER</button>
        </div>
      </aside>

      <style jsx>{`
        .btn-element {
          display: inline-flex; align-items: center; justify-content: center; padding: 14px;
          background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px;
          font-size: 11px; font-weight: 800; color: #475569; transition: all 0.2s;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .btn-element:hover { border-color: #0F172A; color: #0F172A; background: white; transform: translateY(-2px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1); }
        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 18px;
          background: #000; color: white; border-radius: 20px; font-weight: 900; font-size: 10px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .btn-exit:hover { background: #DC2626; transform: scale(1.02); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
      `}</style>
    </div>
  );
}