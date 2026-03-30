'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  type: 'h2' | 'h3' | 'h4' | 'sss' | 'line';
  t: string; 
  c: string;
}

export default function SEOProWorkspace() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState({ t: '', c: '' });
  const [sections, setSections] = useState<Section[]>([{ id: 's1', type: 'h2', t: '', c: '' }]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // İlerleme Çubuğu Takibi
  useEffect(() => {
    const updateScroll = () => {
      const current = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((current / total) * 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const getWordCount = (text: string) => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const addSection = (type: Section['type']) => {
    setSections([...sections, { id: `s-${Date.now()}`, type, t: '', c: '' }]);
  };

  const updateSection = (id: string, key: 't' | 'c', value: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, [key]: value } : s));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#333] font-sans flex overflow-x-hidden">
      
      {/* 1. SABİT ÜST İLERLEME ÇUBUĞU */}
      <div className="fixed top-0 left-0 h-1 bg-[#2F4F4F] z-[100] transition-all duration-75 shadow-sm" style={{ width: `${scrollProgress}%` }}></div>

      {/* 2. SOL PANEL: ELEMENT EKLEME (SABİT) */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-[#F8F9FA] border-r border-gray-200 p-6 z-50 flex flex-col gap-6">
        <div className="pb-4 border-b">
          <h2 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Bloklar</h2>
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={() => addSection('h2')} className="text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-[#2F4F4F] transition-all shadow-sm">H2 Başlığı Ekle</button>
          <button onClick={() => addSection('h3')} className="text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-[#2F4F4F] transition-all shadow-sm">H3 Alt Başlık Ekle</button>
          <button onClick={() => addSection('sss')} className="text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-[#2F4F4F] transition-all shadow-sm">Sıkça Sorulan Sorular</button>
          <button onClick={() => addSection('line')} className="text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-[#2F4F4F] transition-all shadow-sm">Ayırıcı Çizgi</button>
        </div>
        
        <div className="mt-auto">
          <Link href="/icerik-yonetimi" className="text-[10px] font-bold text-gray-400 hover:text-black">← ÇIKIŞ YAP</Link>
        </div>
      </aside>

      {/* 3. ORTA PANEL: İÇERİK ALANI (SCROLL) */}
      <main className="flex-1 ml-64 mr-[350px] p-16 max-w-4xl mx-auto min-h-screen">
        <div className="space-y-12">
          {/* H1 Alanı */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-30 text-[10px] font-bold">H1 BAŞLIK <span className={h1.t.length > 70 ? 'text-red-500' : ''}>({h1.t.length}/70)</span></div>
            <textarea 
              value={h1.t} 
              onChange={(e) => setH1({...h1, t: e.target.value})}
              className="w-full text-4xl font-bold bg-transparent border-none outline-none resize-none placeholder:text-gray-200" 
              placeholder="Ana Başlığı Buraya Yazın..."
              rows={1}
            />
            <textarea 
              value={h1.c} 
              onChange={(e) => setH1({...h1, c: e.target.value})}
              className="w-full p-0 text-lg text-gray-500 bg-transparent border-none outline-none resize-none leading-relaxed italic" 
              placeholder="Giriş / Snippet paragrafı..."
              rows={2}
            />
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Dinamik Bölümler */}
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={sec.id} className="relative group">
                {sec.type === 'line' ? (
                  <div className="h-px bg-gray-100 my-10 relative">
                    <button onClick={() => setSections(sections.filter(s => s.id !== sec.id))} className="absolute right-0 -top-3 opacity-0 group-hover:opacity-100 text-[10px] text-red-500 font-bold">SİL</button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black opacity-20 uppercase tracking-tighter">
                      <span>{sec.type} BÖLÜMÜ / Kelime: {getWordCount(sec.c)}</span>
                      <button onClick={() => setSections(sections.filter(s => s.id !== sec.id))} className="opacity-0 group-hover:opacity-100 text-red-500">Kaldır</button>
                    </div>
                    <input 
                      type="text" 
                      value={sec.t} 
                      onChange={(e) => updateSection(sec.id, 't', e.target.value)}
                      className={`w-full font-bold bg-transparent border-none outline-none focus:border-b focus:border-gray-100 pb-1 ${sec.type === 'h2' ? 'text-2xl' : 'text-xl'}`}
                      placeholder={sec.type === 'sss' ? 'Soru yazın...' : 'Başlık yazın...'}
                    />
                    <textarea 
                      value={sec.c} 
                      onChange={(e) => updateSection(sec.id, 'c', e.target.value)}
                      className="w-full text-base leading-relaxed text-gray-600 bg-transparent border-none outline-none resize-none min-h-[50px]"
                      placeholder="Buraya yazmaya başlayın..."
                      rows={4}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 4. SAĞ PANEL: SEO DENETİM (SABİT) */}
      <aside className="fixed right-0 top-0 w-[350px] h-full bg-white border-l border-gray-200 p-8 z-50 flex flex-col gap-10">
        <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] border-b pb-4">SEO Denetim</h2>
        
        {/* Google Snippet (Sade) */}
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-gray-400">GOOGLE GÖRÜNÜMÜ</span>
          <div className="space-y-1">
            <div className="text-sm text-blue-700 truncate">{title || "SEO Başlığı Henüz Girilmedi"}</div>
            <div className="text-xs text-green-700 truncate">https://ozgurtasarim.com.tr › corian</div>
            <div className="text-xs text-gray-500 line-clamp-2">{desc || "Meta açıklaması buraya gelecek..."}</div>
          </div>
        </div>

        {/* Sayaçlar (İşlevsel) */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black"><span>SEO BAŞLIK (40-45)</span> <span className={title.length > 45 ? 'text-red-500' : ''}>{title.length}</span></div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={`w-full p-3 bg-gray-50 border rounded-lg text-xs outline-none focus:border-black transition-colors ${title.length >= 40 && title.length <= 45 ? 'bg-green-50 border-green-200' : ''}`} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black"><span>META AÇIKLAMA (140-145)</span> <span className={desc.length > 145 ? 'text-red-500' : ''}>{desc.length}</span></div>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className={`w-full p-3 bg-gray-50 border rounded-lg text-xs outline-none h-24 resize-none transition-colors ${desc.length >= 140 && desc.length <= 145 ? 'bg-green-50 border-green-200' : ''}`} />
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center">
            <span className="text-[10px] font-black opacity-40 uppercase tracking-widest text-center">İçerik Uzunluğu</span>
            <span className="text-xs font-bold">{sections.reduce((acc, s) => acc + getWordCount(s.c), 0)} Kelime</span>
          </div>
          <button className="w-full bg-[#2F4F4F] text-white py-5 rounded-2xl font-black text-xs tracking-[0.5em] hover:bg-black transition-all shadow-xl">YAYINLA</button>
        </div>
      </aside>

    </div>
  );
}