'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- TİPLER ---
interface Block {
  id: string;
  type: string;
  label: string;
  content: string;
  level?: string; 
}

interface MenuGroup {
  title: string;
  items: string[];
}

export default function UltimateSEOEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [mounted, setMounted] = useState(false);
  const [h1Text, setH1Text] = useState('');
  const [snippetText, setSnippetText] = useState('');
  const [introText, setIntroText] = useState('');

  useEffect(() => { 
    setMounted(true); 
  }, []);

  if (!mounted) return null;

  // --- YARDIMCI FONKSİYONLAR ---
  const countWords = (str: string) => {
    return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
  };

  const autoResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  };

  // --- BLOK YÖNETİMİ ---
  const addBlock = (type: string, label: string) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substring(2, 11),
      type: label === 'İçerik Tablosu' ? 'toc' : (label === 'Başlık' ? 'heading' : type.toLowerCase()),
      label: label,
      content: '',
      level: label === 'Başlık' ? 'h2' : undefined
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const deleteBlock = (id: string) => {
    setBlocks((prev) => prev.filter(b => b.id !== id));
  };

  const updateBlockContent = (id: string, newContent: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, content: newContent } : b));
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;
    
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[targetIndex];
    newBlocks[targetIndex] = temp;
    
    setBlocks(newBlocks);
  };

  const updateHeadingLevel = (id: string, newLevel: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, level: newLevel } : b));
  };

  // --- İÇİNDEKİLER ZEKASI ---
  // Sadece H2 olan ve içeriği dolu olan başlıkları yakalıyoruz
  const h2Headings = blocks.filter(b => b.type === 'heading' && b.level === 'h2' && b.content.trim() !== '');

  const menuGroups: MenuGroup[] = [
    { title: 'Modeller', items: ['Hero', 'Slider'] },
    { title: 'Metin', items: ['Paragraf', 'Başlık', 'Liste', 'Alıntı', 'Kod', 'Tablo'] },
    { title: 'Ortam', items: ['Görsel', 'Galeri', 'Manşet', 'Dosya', 'Ortam ve Metin', 'Video'] },
    { title: 'Tasarım', items: ['Akordeon', 'Düğmeler', 'Sütunlar', 'Ayırıcı', 'Aralayıcı'] },
    { title: 'Bileşenler', items: ['Arşivler', 'Kategori Listesi', 'Özel HTML', 'Ara'] },
    { title: 'Tema', items: ['Yazar', 'Yazar Adı', 'Kategoriler', 'Devamını Oku', 'Oturum Aç/Kapat'] },
    { title: 'Gömülüler', items: ['Göm', 'YouTube', 'Twitter', 'Flickr', 'Spotify', 'Vimeo', 'Dailymotion', 'Pinterest'] },
    { title: 'Yapısal Veri', items: ['SSS', 'Nasıl Yapılır'] },
    { title: 'Bağlantı', items: ['Breadcrumbs', 'İçerik Tablosu'] }
  ];

  return (
    <div className="flex h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans overflow-hidden text-left">
      
      {/* 1. SOL PANEL */}
      <aside className="w-80 bg-white border-r border-slate-100 flex flex-col shadow-sm z-30">
        <div className="h-[70px] flex items-center px-8 border-b">
          <span className="font-bold text-[13px] tracking-[0.3em] text-slate-900 uppercase">İçerik Mimarı</span>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-20 scrollbar-hide">
          {menuGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest ml-1">{group.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => addBlock(item, item)}
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

      {/* 2. ORTA: YAZIM ALANI */}
      <main className="flex-1 bg-white overflow-y-auto relative px-4 scrollbar-hide">
        <div className="max-w-[850px] mx-auto py-12 px-12 text-left">
          
          <nav className="flex items-center space-x-3 mb-8 border-b border-slate-50 pb-5">
            <span className="text-[14px] font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Ana Sayfa</span>
            <span className="text-[12px] text-slate-300">/</span>
            <span className="text-[14px] font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">İçerik Yönetimi</span>
            <span className="text-[12px] text-slate-300">/</span>
            <span className="text-[14px] font-bold text-slate-900 tracking-tight">Corian</span>
          </nav>

          {/* H1 BAŞLIK */}
          <div className="space-y-4 mb-10 text-left">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg tracking-widest shadow-sm">
                  H1 Başlık
                </span>
                <span className={`text-[13px] font-bold tracking-tight ${h1Text.length >= 50 && h1Text.length <= 60 ? 'text-emerald-600' : 'text-slate-600'}`}>
                  {h1Text.length >= 50 && h1Text.length <= 60 ? '✓ SEO Altın Oran' : 'Hedef: 50-60 Karakter'}
                </span>
              </div>
              <span className={`text-[13px] font-mono font-bold px-3 py-1 rounded-md ${h1Text.length > 60 || (h1Text.length > 0 && h1Text.length < 50) ? 'text-red-600 bg-red-50' : 'text-slate-600 bg-slate-50'}`}>
                {h1Text.length} / 60
              </span>
            </div>
            <textarea 
              value={h1Text}
              onChange={(e) => setH1Text(e.target.value)}
              rows={1}
              onInput={autoResize}
              className="w-full text-[24px] font-bold border-none outline-none placeholder:text-slate-200 tracking-tight text-slate-900 bg-transparent py-1 resize-none overflow-hidden leading-tight text-left"
              placeholder="DuPont Corian Nedir? Özellikleri ve Kullanım Alanları"
            />
          </div>

          {/* SABİT SNIPPET VE GİRİŞ */}
          <div className="space-y-12 mb-8 border-b border-slate-50 pb-12 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg tracking-widest shadow-sm">Snippet Özet</span>
                  <span className={`text-[12px] font-bold ${countWords(snippetText) >= 35 && countWords(snippetText) <= 45 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {countWords(snippetText) >= 35 && countWords(snippetText) <= 45 ? '✓ SEO Tamam' : 'Hedef: 35-45 Kelime'}
                  </span>
                </div>
                <span className="text-[12px] font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{countWords(snippetText)} Kelime</span>
              </div>
              <textarea 
                value={snippetText}
                onChange={(e) => setSnippetText(e.target.value)}
                onInput={autoResize}
                className="w-full text-[17px] text-slate-600 border-none outline-none resize-none leading-relaxed text-left placeholder:text-slate-300" 
                placeholder="Bu kısımda makalenin kısa bir özeti yazılabilir..." 
                rows={1} 
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg tracking-widest shadow-sm">Giriş Paragrafı</span>
                  <span className={`text-[12px] font-bold ${countWords(introText) >= 50 && countWords(introText) <= 70 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {countWords(introText) >= 50 && countWords(introText) <= 70 ? '✓ SEO Tamam' : 'Hedef: 50-70 Kelime'}
                  </span>
                </div>
                <span className="text-[12px] font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{countWords(introText)} Kelime</span>
              </div>
              <textarea 
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                onInput={autoResize}
                className="w-full text-[18px] text-slate-700 border-none outline-none resize-none leading-relaxed text-left placeholder:text-slate-300 italic border-l-4 border-emerald-400 pl-6" 
                placeholder="Bu kısımda konuya etkileyici bir giriş yapılabilir..." 
                rows={1} 
              />
            </div>
          </div>

          {/* DİNAMİK BLOKLAR (SWAP & TOC) */}
          <div className="space-y-8 pb-40 text-left">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative group p-6 rounded-[2rem] hover:bg-slate-50/50 transition-all border border-transparent hover:border-slate-100 text-left">
                
                {/* TOOLBAR */}
                <div className="absolute -top-4 left-8 opacity-0 group-hover:opacity-100 transition-all flex items-center bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold gap-4 z-40 shadow-2xl">
                  {block.type === 'heading' ? (
                    <select 
                      value={block.level} 
                      onChange={(e) => updateHeadingLevel(block.id, e.target.value)}
                      className="bg-transparent text-emerald-400 border-none outline-none cursor-pointer font-bold uppercase tracking-widest pr-2"
                    >
                      <option value="h2" className="bg-slate-900 text-white">H2 Başlık</option>
                      <option value="h3" className="bg-slate-900 text-white">H3 Başlık</option>
                      <option value="h4" className="bg-slate-900 text-white">H4 Başlık</option>
                    </select>
                  ) : (
                    <span className="text-emerald-400 tracking-widest uppercase">{block.label}</span>
                  )}

                  {/* Taşıma Butonları (Mavi Oklar) */}
                  <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                    <button 
                      onClick={() => moveBlock(index, 'up')}
                      className="text-sky-400 hover:text-sky-200 transition-colors cursor-pointer text-[15px] font-bold"
                    >
                      ↑
                    </button>
                    <button 
                      onClick={() => moveBlock(index, 'down')}
                      className="text-sky-400 hover:text-sky-200 transition-colors cursor-pointer text-[15px] font-bold"
                    >
                      ↓
                    </button>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => deleteBlock(block.id)} 
                    className="text-red-400 hover:text-red-200 border-l border-white/10 pl-4 transition-colors cursor-pointer uppercase"
                  >
                    Kaldır
                  </button>
                </div>
                
                {/* BLOK İÇERİĞİ */}
                {block.type === 'toc' ? (
                  <div className={`bg-[#F8F9FA] rounded-2xl p-8 border-l-4 border-slate-900 transition-all duration-500 ${h2Headings.length < 2 ? 'opacity-40 grayscale pointer-events-none' : 'opacity-100'}`}>
                    <p className="text-[13px] font-bold text-slate-900 tracking-[0.2em] mb-6 uppercase">İçindekiler</p>
                    {h2Headings.length >= 2 ? (
                      <ul className="space-y-4">
                        {h2Headings.map((h, i) => (
                          <li key={h.id} className="flex items-center gap-4 text-slate-600 text-[15px] font-medium group/item cursor-pointer hover:text-slate-900 transition-all">
                            <span className="flex items-center justify-center w-6 h-6 bg-slate-900 text-white text-[10px] rounded-full font-bold">{i + 1}</span>
                            <span className="border-b border-transparent group-hover/item:border-slate-300">{h.content}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-400 text-[13px] italic">Otomatik tablo için en az 2 adet H2 başlık doldurmalısınız.</p>
                    )}
                  </div>
                ) : (
                  <div className="relative text-left">
                    {block.type === 'heading' ? (
                      <textarea 
                        value={block.content}
                        onChange={(e) => updateBlockContent(block.id, e.target.value)}
                        rows={1} 
                        onInput={autoResize} 
                        className={`w-full font-bold text-slate-900 outline-none bg-transparent tracking-tight resize-none overflow-hidden text-left transition-all duration-300 ${
                          block.level === 'h2' ? 'text-3xl' : block.level === 'h3' ? 'text-2xl' : 'text-xl'
                        }`} 
                        placeholder={`${block.level?.toUpperCase()} başlığını yazın...`} 
                      />
                    ) : (
                      <textarea 
                        value={block.content}
                        onChange={(e) => updateBlockContent(block.id, e.target.value)}
                        className="w-full text-base text-slate-600 outline-none bg-transparent resize-none leading-relaxed text-left" 
                        placeholder={`${block.label} içeriği...`} 
                        rows={1} 
                        onInput={autoResize} 
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 3. SAĞ PANEL */}
      <aside className="w-72 bg-white border-l border-slate-200 flex flex-col z-30">
        <div className="h-[70px] flex items-center justify-center border-b text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">SEO Analiz</div>
        <div className="p-8 space-y-6">
           <div className="aspect-square bg-slate-900 rounded-[3.5rem] flex flex-col items-center justify-center text-white shadow-xl">
              <span className="text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1 text-center">Genel Skor</span>
              <span className="text-7xl font-bold italic">
                {Math.min(
                  blocks.length * 5 + 
                  (h1Text.length >= 50 && h1Text.length <= 60 ? 25 : 0) +
                  (countWords(snippetText) >= 35 && countWords(snippetText) <= 45 ? 25 : 0) +
                  (countWords(introText) >= 50 ? 25 : 0), 
                  100
                )}
              </span>
           </div>
           <button className="w-full bg-slate-900 text-white py-5 rounded-2xl text-[11px] font-bold tracking-widest uppercase hover:bg-emerald-600 transition-all duration-300 cursor-pointer shadow-lg active:scale-95">Kaydet</button>
        </div>
      </aside>
    </div>
  );
}