'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Block {
  id: string;
  type: string;
  label: string;
  content: string;
}

interface MenuGroup {
  title: string;
  items: string[];
}

export default function UltimateSEOEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const addBlock = (type: string, label: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substring(2, 11),
      type,
      label,
      content: '',
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const deleteBlock = (id: string) => {
    setBlocks((prev) => prev.filter(b => b.id !== id));
  };

  const menuGroups: MenuGroup[] = [
    { title: 'Modeller', items: ['Hero', 'Slider'] },
    { title: 'Metin', items: ['Paragraf', 'Başlık', 'Liste', 'Alıntı', 'Kod', 'Tablo'] },
    { title: 'Ortam', items: ['Görsel', 'Galeri', 'Manşet', 'Dosya', 'Ortam ve Metin', 'Video'] },
    { title: 'Tasarım', items: ['Akordeon', 'Düğmeler', 'Sütunlar', 'Ayırıcı', 'Aralayıcı'] },
    { title: 'Bileşenler', items: ['Arşivler', 'Kategori Listesi', 'Özel HTML', 'Ara'] },
    { title: 'Tema', items: ['Yazar', 'Yazar Adı', 'Kategoriler', 'Devamını Oku', 'Oturum Aç/Kapat'] },
    { title: 'Gömülüler', items: ['Göm', 'YouTube', 'Twitter', 'Flickr', 'Spotify', 'Vimeo', 'Dailymotion', 'Pinterest'] },
    { title: 'Yapısal Veri', items: ['SSS', 'Nasıl Yapılır'] },
    { title: 'Bağlantı', items: ['Breadcrumbs'] }
  ];

  return (
    <div className="flex h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans overflow-hidden">
      
      {/* SOL PANEL */}
      <aside className="w-80 bg-white border-r border-slate-100 flex flex-col shadow-sm z-30">
        <div className="h-[70px] flex items-center px-8 border-b">
          <span className="font-bold text-[13px] tracking-[0.3em] text-slate-900 uppercase">İÇERİK MİMARI</span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-20 scrollbar-hide">
          {menuGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest ml-1">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => addBlock(item.toLowerCase(), item)}
                    // CURSOR-POINTER eklendi (İşaret parmağı)
                    className="inline-flex items-center px-4 py-2 bg-[#F5F5F7] text-[#1D1D1F] border border-transparent rounded-lg text-[13px] font-medium hover:bg-[#E8E8ED] hover:border-slate-300 transition-all duration-300 whitespace-nowrap active:scale-95 cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t bg-white">
          <Link href="/icerik-yonetimi" className="flex items-center justify-center w-full py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl font-bold text-[12px] tracking-widest hover:bg-red-50 hover:text-red-600 transition-all duration-300 uppercase cursor-pointer">
            Sistemden Ayrıl
          </Link>
        </div>
      </aside>

      {/* ORTA: YAZIM ALANI */}
      <main className="flex-1 bg-white overflow-y-auto relative px-4 scrollbar-hide">
        <div className="max-w-[800px] mx-auto py-24 px-12">
          
          <div className="space-y-6 mb-16">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-bold rounded-md uppercase tracking-widest">H1 Manşet</span>
            <input className="w-full text-6xl font-bold border-none outline-none placeholder:text-slate-100 tracking-tight text-slate-900 bg-transparent" placeholder="İçerik Başlığı..." />
            <textarea className="w-full text-xl text-slate-400 border-none outline-none resize-none italic border-l-2 border-slate-200 pl-8 bg-transparent" placeholder="SEO Odaklı Giriş..." rows={1} />
          </div>

          <div className="space-y-10 pb-40">
            {blocks.map((block) => (
              <div key={block.id} className="relative group p-6 rounded-2xl hover:bg-slate-50/30 transition-all border border-transparent hover:border-slate-100 cursor-text">
                <div className="absolute -top-4 left-4 opacity-0 group-hover:opacity-100 transition-all flex items-center bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase gap-3 z-40">
                  <span className="text-emerald-400">{block.label}</span>
                  {/* SİL BUTONU İÇİN İŞARET PARMAĞI */}
                  <button type="button" onClick={() => deleteBlock(block.id)} className="text-red-400 hover:text-red-200 cursor-pointer">Kaldır</button>
                </div>
                <div className="relative">
                  {block.type.includes('başlık') || block.type === 'h2' || block.type === 'h3' ? (
                    <input className="w-full text-3xl font-bold text-slate-900 outline-none bg-transparent" placeholder={`${block.label}...`} />
                  ) : (
                    <textarea className="w-full text-lg text-slate-600 outline-none bg-transparent resize-none leading-relaxed" placeholder={`${block.label} içeriği...`} rows={2} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SAĞ: SEO ANALİZ */}
      <aside className="w-72 bg-white border-l border-slate-200 flex flex-col z-30">
        <div className="h-[70px] flex items-center justify-center border-b text-[10px] text-slate-400 font-bold uppercase tracking-widest font-sans">SEO Canlı Skor</div>
        <div className="p-8 space-y-6">
           <div className="aspect-square bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center text-white shadow-xl">
              <span className="text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1">Puan</span>
              <span className="text-6xl font-bold italic">{Math.min(blocks.length * 10, 100)}</span>
           </div>
           {/* KAYDET BUTONU İÇİN İŞARET PARMAĞI */}
           <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[11px] font-bold tracking-widest uppercase hover:bg-emerald-600 transition-all duration-300 cursor-pointer shadow-lg active:scale-95">
             Kaydet
           </button>
        </div>
      </aside>

    </div>
  );
}