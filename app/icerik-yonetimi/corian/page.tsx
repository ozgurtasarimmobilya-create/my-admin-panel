'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

// --- TİPLER ---
type Block = {
  id: string;
  type: string;
  content: string;
  extra?: string; // Görsel Alt Metni veya Link için
};

// --- BİLEŞENLER (BLOK ŞABLONLARI) ---

// 1. HD Görsel Bloğu (Duyarlı ve Profesyonel)
const ImageHDBlock = ({ block, updateBlock }: { block: Block; updateBlock: (id: string, value: string, isExtra?: boolean) => void }) => (
  <div className="relative group my-12 animate-in fade-in slide-in-from-top-2 duration-300">
    {/* Görsel Alanı Placeholder (1800x1250px Oranı) */}
    <div className="aspect-[1800/1250] bg-gray-50 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center text-gray-300 relative overflow-hidden shadow-inner group-hover:border-[#2F4F4F]/30 transition-colors">
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       <span className="text-[11px] font-black uppercase tracking-[0.2em]">HD Görsel Alanı</span>
       <p className="text-[10px] mt-1 opacity-70">Geniş ve kaliteli sunumlar için optimize edildi.</p>
    </div>
    {/* Alt Etiket Girişi (SEO İçin Kritik) */}
    <input 
      type="text" 
      placeholder="Görsel Alt Etiketi (SEO)..." 
      value={block.extra || ''}
      onChange={(e) => updateBlock(block.id, e.target.value, true)}
      className="w-full mt-4 p-3.5 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#2F4F4F] shadow-sm placeholder:text-gray-300"
    />
  </div>
);

// 2. Teknik Tablo Bloğu (Şablon)
const TableBlock = () => (
    <div className="my-10 p-6 border border-gray-100 rounded-2xl bg-gray-50/50 space-y-3 opacity-60">
        <div className="font-bold text-xs uppercase text-gray-400 tracking-widest">Teknik Tablo Şablonu</div>
        <div className="h-10 w-full bg-white rounded-lg border border-gray-100"></div>
        <div className="h-10 w-full bg-white rounded-lg border border-gray-100"></div>
    </div>
);

// --- ANA KOMPONENT ---
export default function FunctionalTerminalV14() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Blok Ekleme Fonksiyonu
  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
      extra: type === 'image_hd' ? 'HD Mutfak Tezgahı Görseli' : '' // Varsayılan Alt Metin
    };
    setBlocks([...blocks, newBlock]);
    
    // Eklendikten sonra aşağı kaydır (UX)
    setTimeout(() => {
        mainContentRef.current?.scrollTo({ top: mainContentRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  // Blok Güncelleme (İçerik ve Extra)
  const updateBlock = (id: string, value: string, isExtra: boolean = false) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, [isExtra ? 'extra' : 'content']: value } : b));
  };

  // Blok Silme
  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[14px]">
      
      {/* --- 1. SOL: TAM KAPASİTE ELEMENT CEPHANELİĞİ (NET VE OKUNAKLI) --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[70px] flex items-center px-6 border-b bg-[#F9FAFB]">
          <span className="font-black text-[12px] tracking-[0.3em] text-[#2F4F4F] uppercase">Editör Paneli</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
          
          {/* GRUP 1: YAPISAL (BAŞLIKLAR VE YAZI) */}
          <div className="space-y-5">
            <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.2em] block border-b-2 border-gray-100 pb-1.5">Metin & Başlık</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('h2')} className="btn-flex text-[13px] px-4 py-2">H2</button>
              <button onClick={() => addBlock('h3')} className="btn-flex text-[13px] px-4 py-2">H3</button>
              <button onClick={() => addBlock('h4')} className="btn-flex text-[13px] px-4 py-2">H4</button>
              <button onClick={() => addBlock('p')} className="btn-flex text-[13px] px-4 py-2">Paragraf</button>
              <button onClick={() => addBlock('ul')} className="btn-flex text-[12px] px-4 py-2 opacity-60">Liste (•)</button>
              <button onClick={() => addBlock('toc')} className="btn-flex border-blue-100 text-blue-700 bg-blue-50/20 text-[12px] px-4 py-2 opacity-60">İçindekiler</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA (HD ALTYAPISI) */}
          <div className="space-y-5">
            <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.2em] block border-b-2 border-gray-100 pb-1.5">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('image_hd')} className="btn-flex text-[12px] px-5 py-2.5 text-emerald-700 border-emerald-100 bg-emerald-50/20">HD Geniş Görsel</button>
              <button onClick={() => addBlock('video')} className="btn-flex text-[13px] px-4 py-2 opacity-60">Video</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-5 pt-5 border-t opacity-40 pointer-events-none">
            <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.2em] block border-b-2 border-gray-100 pb-1.5">SEO & Dönüşüm</label>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => addBlock('faq')} className="btn-flex text-orange-600 border-orange-200 bg-orange-50/10 text-[12px] px-4 py-2">SSS (FAQ)</button>
              <button onClick={() => addBlock('table')} className="btn-flex font-bold border-gray-400 text-[12px] px-4 py-2">Teknik Tablo</button>
              <button onClick={() => addBlock('cta')} className="btn-flex text-emerald-700 border-emerald-200 text-[12px] px-4 py-2">CTA Buton</button>
            </div>
          </div>
        </div>

        {/* BELİRGİN ÇIKIŞ BUTONU */}
        <div className="p-6 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit text-[11px] py-4 rounded-2xl">
            SİSTEMDEN AYRIL
          </Link>
        </div>
      </aside>

      {/* --- 2. ORTA: CANLI YAZIM ALANI (MAKSİMUM OKUNAKLILIK) --- */}
      <main ref={mainContentRef} className="flex-1 bg-white overflow-y-auto scroll-smooth shadow-inner relative custom-scrollbar">
        <div className="max-w-[780px] mx-auto py-28 px-14 space-y-16 text-[#1A1A1A]">
          
          {/* H1 Sabit Başlık (Net Punto) */}
          <div className="space-y-5 animate-in fade-in duration-700">
            <div className="inline-block px-2 py-0.5 bg-[#2F4F4F]/10 text-[#2F4F4F] text-[10px] font-black rounded uppercase tracking-widest">Master H1</div>
            <input className="w-full text-6xl font-black border-none outline-none placeholder:text-gray-100 tracking-tight text-[#111]" placeholder="Sayfa Başlığını Girin..." />
            <textarea className="w-full text-xl text-gray-400 border-none outline-none resize-none italic border-l-4 border-gray-50 pl-8Placeholder:text-gray-200" placeholder="SEO odaklı giriş özeti / snippet..." rows={1} />
          </div>

          <div className="h-px bg-gray-50 w-full"></div>

          {/* DİNAMİK BLOKLAR ALANI */}
          <div className="min-h-[500px] space-y-10">
            {blocks.map((block) => (
              <div key={block.id} className="relative group animate-in slide-in-from-left-2 duration-300">
                {/* 1. Tipografi Blokları (H2, H3, P) */}
                {block.type === 'h2' && (
                  <input 
                    autoFocus
                    className="w-full text-4xl font-black tracking-tight text-[#111] border-none outline-none placeholder:text-gray-200 my-4" 
                    placeholder="H2 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                {block.type === 'h3' && (
                  <input 
                    autoFocus
                    className="w-full text-3xl font-extrabold tracking-tight text-[#333] border-none outline-none placeholder:text-gray-200 my-3" 
                    placeholder="H3 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                {block.type === 'p' && (
                  <textarea 
                    autoFocus
                    className="w-full text-lg leading-[1.8] text-[#4B5563] border-none outline-none resize-none placeholder:text-gray-200 my-2 custom-scrollbar" 
                    placeholder="Paragraf içeriğini buraya yazmaya başlayın..."
                    rows={4}
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}

                {/* 2. HD Görsel Bloğu (Gerçek Şablon) */}
                {block.type === 'image_hd' && (
                  <ImageHDBlock block={block} updateBlock={updateBlock} />
                )}

                {/* 3. Teknik Tablo (Şablon) */}
                {block.type === 'table' && <TableBlock />}

                {/* Blok Silme Butonu (BÜYÜK VE BELİRGİN) */}
                <button 
                  onClick={() => removeBlock(block.id)}
                  className="absolute -left-16 top-2 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-700 hover:bg-red-50 transition-all p-3 rounded-xl border border-red-100 bg-white shadow-xl"
                  title="Bu elementi sil"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            ))}

            {/* Boş Alan Yer Tutucu */}
            {blocks.length === 0 && (
              <div className="h-96 border-4 border-dashed border-gray-5