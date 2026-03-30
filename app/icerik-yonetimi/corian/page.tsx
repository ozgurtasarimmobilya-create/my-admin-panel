'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  type: 'h2' | 'h3' | 'h4' | 'sss' | 'line';
  t: string; 
  c: string;
}

export default function SEOProTerminal() {
  // State Yönetimi
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [keyword, setKeyword] = useState(''); // Anahtar Kelime Takibi
  const [h1, setH1] = useState({ t: '', c: '' });
  const [sections, setSections] = useState<Section[]>([{ id: 's1', type: 'h2', t: '', c: '' }]);

  // SEO Analiz Yardımcıları
  const getWordCount = (text: string) => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const hasKeyword = (text: string) => keyword && text.toLowerCase().includes(keyword.toLowerCase());

  // Yoast Tarzı Puanlama (Traffic Light)
  const getScore = () => {
    let score = 0;
    if (title.length >= 40 && title.length <= 45) score += 25;
    if (desc.length >= 140 && desc.length <= 145) score += 25;
    if (hasKeyword(h1.t)) score += 25;
    if (getWordCount(sections.reduce((acc, s) => acc + s.c, '')) > 600) score += 25;
    return score;
  };

  const addSection = (type: Section['type'], index: number) => {
    const updated = [...sections];
    updated.splice(index + 1, 0, { id: `s-${Date.now()}`, type, t: '', c: '' });
    setSections(updated);
  };

  return (
    <div className="flex h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden font-sans">
      
      {/* 1. SOL: NAVİGASYON & İSKELET */}
      <aside className="w-72 bg-[#1E293B] border-r border-[#334155] p-6 flex flex-col shadow-2xl">
        <div className="mb-8">
          <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Özgür Tasarım SEO Pro</h2>
          <div className="h-1 w-12 bg-blue-500 rounded"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase">İçerik Mimarisi</h3>
          {sections.filter(s => s.t).map((s, i) => (
            <div key={s.id} className="group flex items-center gap-3 text-xs p-2 hover:bg-[#334155] rounded-lg transition-all cursor-pointer border-l-2 border-transparent hover:border-blue-500">
              <span className="text-blue-500/50 font-mono italic">H{s.type.slice(1)}</span>
              <span className="truncate opacity-70 group-hover:opacity-100">{s.t}</span>
            </div>
          ))}
        </div>

        <Link href="/icerik-yonetimi" className="mt-auto text-[10px] font-bold py-3 text-center border border-[#334155] rounded-xl hover:bg-white hover:text-black transition-all uppercase">← Paneli Kapat</Link>
      </aside>

      {/* 2. ORTA: ANA EDİTÖR (GHOST UI) */}
      <main className="flex-1 overflow-y-auto bg-[#0F172A] custom-scrollbar px-12 py-16 relative">
        <div className="max-w-3xl mx-auto space-y-20 pb-40">
          
          {/* H1 Giriş */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[10px] font-bold opacity-30">
              <span className="bg-white text-black px-2 py-0.5 rounded">H1</span>
              <span>Karakter: {h1.t.length} / 70</span>
            </div>
            <textarea 
              value={h1.t} 
              onChange={(e) => setH1({...h1, t: e.target.value})}
              className="w-full text-6xl font-black bg-transparent border-none outline-none resize-none placeholder:text-gray-800 leading-[1.1] tracking-tighter" 
              placeholder="Odak Başlığı Girin"
              rows={2}
            />
            <textarea 
              value={h1.c} 
              onChange={(e) => setH1({...h1, c: e.target.value})}
              className="w-full p-6 bg-[#1E293B]/50 rounded-3xl text-lg text-gray-400 border border-[#334155] outline-none h-32 leading-relaxed italic" 
              placeholder="SEO snippet: Kullanıcıyı içeriğe çekecek ilk 200 kelimelik giriş..."
            />
          </div>

          {/* Dinamik Bloklar */}
          <div className="space-y-12">
            {sections.map((sec, i) => (
              <div key={sec.id} className="relative group p-8 rounded-[2.5rem] border-2 border-transparent hover:border-[#334155] transition-all bg-[#1E293B]/20">
                
                {/* Aksiyon Butonları (Hover) */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button onClick={() => setSections(sections.filter(s => s.id !== sec.id))} className="bg-red-500/20 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all text-xs">×</button>
                </div>

                <div className="flex justify-between mb-6">
                  <span className={`text-[9px] font-black px-2 py-1 rounded ${sec.type === 'h2' ? 'bg-blue-600' : 'bg-[#334155]'}`}>{sec.type.toUpperCase()}</span>
                  <div className="flex gap-4 opacity-40 text-[9px] font-mono font-bold uppercase">
                    <span>Karakter: {sec.t.length}</span>
                    <span>Kelimeler: {getWordCount(sec.c)}</span>
                  </div>
                </div>

                <input 
                  type="text" 
                  value={sec.t} 
                  onChange={(e) => setSections(sections.map(s => s.id === sec.id ? {...s, t: e.target.value} : s))}
                  className="w-full bg-transparent border-b border-[#334155] mb-6 pb-2 text-2xl font-bold outline-none focus:border-blue-500" 
                  placeholder="Başlık girin..."
                />
                <textarea 
                  value={sec.c} 
                  onChange={(e) => setSections(sections.map(s => s.id === sec.id ? {...s, c: e.target.value} : s))}
                  className="w-full bg-transparent text-gray-400 text-sm leading-[1.8] outline-none min-h-[150px] resize-none" 
                  placeholder="Zengin içerik alanı..."
                />

                {/* Bölüm Ekleme (Hover) */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  {['h2', 'h3', 'sss', 'line'].map(t => (
                    <button key={t} onClick={() => addSection(t as any, i)} className="bg-white text-black text-[9px] font-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white uppercase transition-all shadow-xl">
                      + {t}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 3. SAĞ: SEO ANALİZ & ÖNİZLEME */}
      <aside className="w-[400px] bg-[#1E293B] border-l border-[#334155] p-8 overflow-y-auto space-y-10">
        
        {/* Google Önizleme (Mockup) */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Google Önizleme</h3>
          <div className="bg-white p-4 rounded-xl shadow-inner space-y-1">
            <div className="text-[11px] text-[#202124] flex items-center gap-1">ozgurtasarim.com.tr <span className="text-[10px] opacity-50">▼</span></div>
            <div className="text-xl text-[#1a0dab] font-normal leading-tight hover:underline cursor-pointer truncate">
              {title || "Sayfa Başlığı Buraya Gelecek"}
            </div>
            <div className="text-sm text-[#4d5156] leading-snug line-clamp-2">
              {desc || "Arama sonuçlarında görünecek olan meta açıklama metni burada listelenecek..."}
            </div>
          </div>
        </section>

        {/* SEO Puanı (Progress Bar) */}
        <section className="space-y-4 border-t border-[#334155] pt-8 text-center">
          <h3 className="text-[10px] font-black text-gray-500 uppercase">SEO Sağlık Skoru</h3>
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90">
               <circle cx="48" cy="48" r="40" stroke="#334155" strokeWidth="8" fill="transparent" />
               <circle cx="48" cy="48" r="40" stroke={getScore() > 70 ? "#10B981" : "#F59E0B"} strokeWidth="8" fill="transparent" strokeDasharray={251} strokeDashoffset={251 - (251 * getScore()) / 100} className="transition-all duration-1000" />
             </svg>
             <span className="absolute text-2xl font-black italic">%{getScore()}</span>
          </div>
        </section>

        {/* SEO Metrikleri */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase"><span>Odak Kelime</span></div>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-full bg-[#0F172A] p-3 rounded-lg border border-[#334155] text-xs outline-none" placeholder="Örn: Corian" />
          </div>

          <div className="space-y-4">
            <div className={`p-4 rounded-xl border text-[11px] font-bold transition-all ${title.length >= 40 && title.length <= 45 ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-pink-500/10 border-pink-500 text-pink-500'}`}>
               {title.length >= 40 && title.length <= 45 ? '✓' : '×'} Başlık Uzunluğu ({title.length}/45)
            </div>
            <div className={`p-4 rounded-xl border text-[11px] font-bold transition-all ${desc.length >= 140 && desc.length <= 145 ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-pink-500/10 border-pink-500 text-pink-500'}`}>
               {desc.length >= 140 && desc.length <= 145 ? '✓' : '×'} Meta Açıklama ({desc.length}/145)
            </div>
            <div className={`p-4 rounded-xl border text-[11px] font-bold transition-all ${hasKeyword(h1.t) ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-pink-500/10 border-pink-500 text-pink-500'}`}>
               {hasKeyword(h1.t) ? '✓' : '×'} Başlıkta Anahtar Kelime
            </div>
          </div>
        </section>

        <button className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-sm tracking-[0.5em] hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-900/20 uppercase">
          PUBLISH TO WP
        </button>
      </aside>
    </div>
  );
}