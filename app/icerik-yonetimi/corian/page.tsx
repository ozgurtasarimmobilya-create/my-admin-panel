'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

// İKONLAR (SVG - Paket Gerektirmez)
const IconPlus = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
const IconTrash = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>;
const IconMonitor = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IconMobile = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;

interface Section { id: string; type: 'h2' | 'h3' | 'sss' | 'line'; t: string; c: string; }

export default function UltimateSEOPanel() {
  const [sections, setSections] = useState<Section[]>([{ id: 's1', type: 'h2', t: '', c: '' }]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState({ t: '', c: '' });
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Üst İlerleme Çubuğu Takibi
  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.getElementById('main-content');
      if (mainElement) {
        const current = mainElement.scrollTop;
        const total = mainElement.scrollHeight - mainElement.clientHeight;
        setScrollProgress((current / total) * 100);
      }
    };
    const mainElement = document.getElementById('main-content');
    mainElement?.addEventListener('scroll', handleScroll);
    return () => mainElement?.removeEventListener('scroll', handleScroll);
  }, []);

  const getWordCount = (text: string) => text.trim() ? text.trim().split(/\s+/).length : 0;
  const totalWords = sections.reduce((acc, s) => acc + getWordCount(s.c), 0) + getWordCount(h1.c);

  const addSection = (type: Section['type']) => {
    setSections([...sections, { id: `s-${Date.now()}`, type, t: '', c: '' }]);
  };

  const removeSection = (id: string) => setSections(sections.filter(s => s.id !== id));

  return (
    <div className="flex h-screen bg-white text-[#1F2937] font-sans overflow-hidden">
      
      {/* İLERLEME ÇUBUĞU */}
      <div className="fixed top-0 left-0 h-1 bg-[#2F4F4F] z-[100] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>

      {/* SOL: BLOK EKLEME PANELİ (SABİT) */}
      <aside className="w-64 bg-[#F9FAFB] border-r border-gray-100 flex flex-col z-50 shadow-sm">
        <div className="p-6 border-b bg-white">
          <h1 className="text-xs font-black tracking-tighter text-[#2F4F4F]">SEO TERMINAL PRO</h1>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Özgür Tasarım</p>
        </div>
        
        <div className="p-4 space-y-6 overflow-y-auto flex-1">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-2 block">Bloklar</label>
            <button onClick={() => addSection('h2')} className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 rounded-xl text-xs font-bold transition-all border border-gray-100 hover:border-[#2F4F4F]">
              <span className="text-blue-500"><IconPlus /></span> H2 Başlığı
            </button>
            <button onClick={() => addSection('h3')} className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 rounded-xl text-xs font-bold transition-all border border-gray-100 hover:border-[#2F4F4F]">
              <span className="text-green-500"><IconPlus /></span> H3 Alt Başlık
            </button>
            <button onClick={() => addSection('sss')} className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 rounded-xl text-xs font-bold transition-all border border-gray-100 hover:border-[#2F4F4F]">
              <span className="text-orange-500"><IconPlus /></span> SSS Bloğu
            </button>
            <button onClick={() => addSection('line')} className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 rounded-xl text-xs font-bold transition-all border border-gray-100 hover:border-[#2F4F4F]">
              <span className="text-gray-300">—</span> Ayırıcı Çizgi
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-2 block">Navigasyon</label>
            <nav className="space-y-1">
              {sections.filter(s => s.t).map((s, i) => (
                <div key={s.id} className="text-[10px] font-semibold text-gray-400 hover:text-black truncate pl-3 border-l-2 border-transparent hover:border-[#2F4F4F] py-1 transition-all cursor-default uppercase">
                  {s.t}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-4 border-t bg-white">
          <Link href="/icerik-yonetimi" className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest block text-center">← GERİ DÖN</Link>
        </div>
      </aside>

      {/* ORTA: YAZIM ALANI (SAF) */}
      <main id="main-content" className="flex-1 overflow-y-auto bg-white custom-scrollbar scroll-smooth">
        <div className="max-w-3xl mx-auto px-12 py-24 space-y-20">
          
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">H1 BAŞLIK</div>
            <textarea 
              value={h1.t} onChange={(e) => setH1({...h1, t: e.target.value})}
              className="w-full text-5xl font-black bg-transparent border-none outline-none resize-none placeholder:text-gray-100 leading-tight tracking-tight" 
              placeholder="Ana Başlığı Girin..." rows={2}
            />
            <textarea 
              value={h1.c} onChange={(e) => setH1({...h1, c: e.target.value})}
              className="w-full text-lg text-gray-400 bg-transparent border-none outline-none resize-none leading-relaxed italic border-l-4 border-gray-50 pl-6" 
              placeholder="SEO giriş paragrafı..." rows={2}
            />
          </div>

          <div className="space-y-16">
            {sections.map((sec, i) => (
              <div key={sec.id} className="relative group animate-in fade-in duration-500">
                {sec.type === 'line' ? (
                  <div className="h-px bg-gray-100 my-12 relative flex justify-center">
                    <button onClick={() => removeSection(sec.id)} className="absolute -top-3 bg-white px-3 text-[10px] text-red-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">SİL</button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-black text-gray-200 uppercase tracking-widest">{sec.type} BÖLÜM</span>
                      <button onClick={() => removeSection(sec.id)} className="text-red-300 hover:text-red-600 transition-colors"><IconTrash /></button>
                    </div>
                    <input 
                      type="text" value={sec.t} onChange={(e) => setSections(sections.map(s => s.id === sec.id ? {...s, t: e.target.value} : s))}
                      className={`w-full font-bold bg-transparent border-none outline-none placeholder:text-gray-200 ${sec.type === 'h2' ? 'text-3xl tracking-tight' : 'text-2xl tracking-tight'}`}
                      placeholder={sec.type === 'sss' ? 'Müşteri Sorusu?' : 'Alt Başlık Yazın...'}
                    />
                    <textarea 
                      value={sec.c} onChange={(e) => setSections(sections.map(s => s.id === sec.id ? {...s, c: e.target.value} : s))}
                      className="w-full text-[16px] leading-[1.8] text-gray-600 bg-transparent border-none outline-none resize-none min-h-[100px]"
                      placeholder="İçeriğinizi buraya dökün..." rows={4}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SAĞ: SEO ANALİZ (SABİT) */}
      <aside className="w-[380px] bg-[#F9FAFB] border-l border-gray-100 flex flex-col z-50">
        <div className="p-6 border-b bg-white flex justify-between items-center shadow-sm">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SEO Analiz</span>
          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 gap-1">
             <button onClick={() => setViewMode('desktop')} className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-300'}`}><IconMonitor /></button>
             <button onClick={() => setViewMode('mobile')} className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-300'}`}><IconMobile /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-12">
          {/* MOCKUP */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Google Görünümü</h3>
            <div className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm transition-all duration-500 ${viewMode === 'mobile' ? 'max-w-[260px] mx-auto' : 'w-full'}`}>
              <div className="text-[11px] text-[#202124] mb-1 flex items-center gap-1 uppercase tracking-tighter opacity-40">site.com.tr › corian</div>
              <div className={`text-[#1a0dab] font-medium leading-snug mb-1 line-clamp-2 ${viewMode === 'mobile' ? 'text-[14px]' : 'text-[18px]'}`}>
                {title || "SEO Başlığı Buraya Gelecek"}
              </div>
              <div className="text-[#4d5156] text-[12px] leading-relaxed line-clamp-2 italic opacity-60">{desc || "Meta açıklama örneği..."}</div>
            </div>
          </div>

          {/* SAYAÇLAR */}
          <div className="space-y-8 pt-8 border-t border-gray-100">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest"><span>Başlık (40-45)</span> <span className={title.length >= 40 && title.length <= 45 ? 'text-green-600' : 'text-orange-500'}>{title.length}</span></div>
              <input 
                value={title} onChange={(e) => setTitle(e.target.value)} 
                className={`w-full p-4 bg-white border rounded-2xl text-xs outline-none transition-all ${title.length >= 40 && title.length <= 45 ? 'border-green-200 bg-green-50/20' : 'border-gray-100 focus:ring-2 focus:ring-gray-50'}`}
                placeholder="Google başlığı..."
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest"><span>Meta (140-145)</span> <span className={desc.length >= 140 && desc.length <= 145 ? 'text-green-600' : 'text-orange-500'}>{desc.length}</span></div>
              <textarea 
                value={desc} onChange={(e) => setDesc(e.target.value)} 
                className={`w-full p-4 bg-white border rounded-2xl text-xs outline-none h-28 resize-none transition-all ${desc.length >= 140 && desc.length <= 145 ? 'border-green-200 bg-green-50/20' : 'border-gray-100 focus:ring-2 focus:ring-gray-50'}`}
                placeholder="Meta açıklaması..."
              />
            </div>
          </div>

          {/* SKOR KARTI */}
          <div className="p-8 bg-[#2F4F4F] rounded-[2.5rem] text-white space-y-6 shadow-2xl">
             <div className="text-[10px] font-black opacity-40 uppercase text-center tracking-widest">Genel Puan</div>
             <div className="text-5xl font-black text-center italic tracking-tighter">%{Math.min(100, (totalWords / 7) + (title.length > 0 ? 30 : 0)).toFixed(0)}</div>
             <div className="flex justify-between text-[10px] font-bold border-t border-white/10 pt-4 opacity-70 italic uppercase">
               <span>Kelimeler: {totalWords}</span>
               <span>H2: {sections.filter(s => s.type === 'h2').length}</span>
             </div>
          </div>
        </div>

        <div className="p-6 bg-white border-t">
          <button className="w-full bg-[#2F4F4F] text-white py-5 rounded-2xl font-black text-[11px] tracking-[0.5em] hover:bg-black transition-all shadow-xl uppercase">İÇERİĞİ KOPYALA</button>
        </div>
      </aside>

    </div>
  );
}