'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  type: 'h2' | 'h3' | 'h4' | 'sss' | 'line';
  t: string; 
  c: string;
}

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState({ t: '', c: '' });
  const [sections, setSections] = useState<Section[]>([{ id: 'init-1', type: 'h2', t: '', c: '' }]);

  const getWordCount = (text: string) => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  // SEO Renk Kontrolü
  const getStatusColor = (current: number, min: number, max: number) => {
    if (current === 0) return 'bg-gray-100 border-gray-200 text-gray-400';
    if (current < min) return 'bg-pink-100 border-pink-300 text-pink-700';
    if (current <= max) return 'bg-green-100 border-green-300 text-green-700';
    return 'bg-orange-100 border-orange-300 text-orange-700';
  };

  const addSection = (type: Section['type'], index: number) => {
    const newSection: Section = { id: `sec-${Date.now()}`, type, t: '', c: '' };
    const updated = [...sections];
    updated.splice(index + 1, 0, newSection);
    setSections(updated);
  };

  const updateSection = (id: string, key: 't' | 'c', value: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, [key]: value } : s));
  };

  const tableOfContents = useMemo(() => sections.filter(s => s.type === 'h2' && s.t), [sections]);

  return (
    <div className="flex h-screen bg-[#F0F2F5] overflow-hidden font-sans text-[#2F4F4F]">
      
      {/* SOL PANEL: İÇİNDEKİLER (SABİT) */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col shadow-xl z-20">
        <Link href="/icerik-yonetimi" className="text-[10px] font-black tracking-widest mb-10 hover:text-black">← GERİ DÖN</Link>
        <h2 className="text-[10px] font-black uppercase opacity-40 mb-4 tracking-tighter">Navigasyon (H2)</h2>
        <nav className="flex-1 overflow-y-auto space-y-3">
          {tableOfContents.map((s, i) => (
            <div key={s.id} className="text-xs font-bold border-l-2 border-[#2F4F4F] pl-3 py-1 truncate">
              0{i+1}. {s.t || "Başlıksız"}
            </div>
          ))}
        </nav>
      </aside>

      {/* ORTA PANEL: İÇERİK EDİTÖRÜ (KAYDIRILABİLİR) */}
      <main className="flex-1 overflow-y-auto p-12 bg-white/50 relative">
        <div className="max-w-3xl mx-auto space-y-16 pb-32">
          
          {/* H1 BÖLÜMÜ */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-[10px] font-black bg-black text-white px-2 py-0.5">H1</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${h1.t.length > 70 ? 'bg-red-500 text-white' : 'bg-gray-100'}`}>{h1.t.length} / 70</span>
            </div>
            <textarea 
              value={h1.t} 
              onChange={(e) => setH1({...h1, t: e.target.value})}
              className="w-full text-5xl font-black bg-transparent border-none outline-none resize-none leading-tight" 
              placeholder="Ana Başlığı Buraya Yazın..."
              rows={2}
            />
            <textarea 
              value={h1.c} 
              onChange={(e) => setH1({...h1, c: e.target.value})}
              className="w-full p-4 bg-gray-100/50 rounded-xl text-sm italic border-none outline-none min-h-[80px]" 
              placeholder="H1 altı kısa giriş/snippet..."
            />
          </div>

          {/* DİNAMİK BÖLÜMLER */}
          <div className="space-y-12">
            {sections.map((sec, index) => (
              <div key={sec.id} className="relative group animate-in fade-in slide-in-from-bottom-4">
                
                {sec.type === 'line' ? (
                  <div className="h-px bg-gray-200 my-8 relative">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#F0F2F5] px-2 text-[8px] font-bold opacity-30 italic">AYIRICI ÇİZGİ</span>
                  </div>
                ) : (
                  <div className={`p-8 border-2 rounded-3xl transition-all bg-white hover:shadow-2xl ${sec.type === 'h2' ? 'border-[#2F4F4F]' : 'border-gray-100'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black uppercase opacity-40">{sec.type} Bölümü</span>
                      <div className="flex gap-2">
                        <span className="text-[9px] font-bold bg-gray-100 px-2 py-0.5 rounded">Kelime: {getWordCount(sec.c)}</span>
                        <span className="text-[9px] font-bold bg-gray-100 px-2 py-0.5 rounded">Karakter: {sec.t.length}</span>
                      </div>
                    </div>
                    <input 
                      type="text" 
                      value={sec.t} 
                      onChange={(e) => updateSection(sec.id, 't', e.target.value)}
                      className="w-full text-2xl font-bold border-b border-gray-100 mb-4 outline-none focus:border-black"
                      placeholder={`${sec.type === 'sss' ? 'Soru' : 'Başlık'} girin...`}
                    />
                    <textarea 
                      value={sec.c} 
                      onChange={(e) => updateSection(sec.id, 'c', e.target.value)}
                      className="w-full text-sm leading-relaxed text-gray-600 outline-none min-h-[120px] resize-none"
                      placeholder="İçeriğinizi bu alana detaylıca girin..."
                    />
                  </div>
                )}

                {/* ARAYA EKLEME PANELİ (HOVER) */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all flex gap-1 z-30">
                  {['h2', 'h3', 'sss', 'line'].map((t) => (
                    <button key={t} onClick={() => addSection(t as any, index)} className="bg-black text-white text-[8px] font-bold px-3 py-1.5 rounded-full hover:scale-110 uppercase">+ {t}</button>
                  ))}
                  <button onClick={() => setSections(sections.filter(s => s.id !== sec.id))} className="bg-red-500 text-white text-[8px] font-bold px-3 py-1.5 rounded-full hover:scale-110 uppercase">SİL</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SAĞ PANEL: SEO ANALİZ (SABİT) */}
      <aside className="w-80 bg-white border-l border-gray-200 p-8 shadow-2xl z-20 space-y-8 overflow-y-auto">
        <h2 className="text-[10px] font-black uppercase tracking-widest border-b pb-2">SEO Kontrol Paneli</h2>
        
        {/* SEO BAŞLIĞI KONTROL */}
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase">
            <span>Google Başlığı (40-45)</span>
            <span className={`px-2 py-0.5 rounded ${getStatusColor(title.length, 40, 45)}`}>{title.length} / 45</span>
          </div>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-xs outline-none focus:ring-1 focus:ring-black"
            placeholder="SEO Başlığı..."
          />
        </div>

        {/* META AÇIKLAMA KONTROL */}
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase">
            <span>Meta Açıklama (140-145)</span>
            <span className={`px-2 py-0.5 rounded ${getStatusColor(desc.length, 140, 145)}`}>{desc.length} / 145</span>
          </div>
          <textarea 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-xs outline-none h-32 resize-none focus:ring-1 focus:ring-black"
            placeholder="Meta açıklaması..."
          />
        </div>

        {/* HIZLI İSTATİSTİKLER */}
        <div className="pt-6 border-t space-y-4">
          <div className="flex justify-between text-xs font-bold italic opacity-50"><span>Toplam Bölüm:</span> <span>{sections.length}</span></div>
          <div className="flex justify-between text-xs font-bold italic opacity-50"><span>Toplam H2:</span> <span>{tableOfContents.length}</span></div>
        </div>

        <button className="w-full bg-black text-white py-6 rounded-2xl font-black text-sm tracking-[0.4em] hover:bg-[#2F4F4F] transition-all uppercase shadow-lg active:scale-95">
          GÜNCELLE
        </button>
      </aside>
    </div>
  );
}