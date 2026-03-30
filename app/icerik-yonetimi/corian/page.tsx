'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  type: 'h2' | 'h3' | 'h4' | 'sss';
  t: string; // Başlık veya Soru
  c: string; // İçerik veya Cevap
}

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState({ t: '', c: '' });
  const [sections, setSections] = useState<Section[]>([
    { id: 'init-1', type: 'h2', t: '', c: '' }
  ]);

  const getWordCount = (text: string) => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  // Yoast Tarzı Renk Kontrolü (Meta Açıklama için)
  const getDescStatusColor = () => {
    if (desc.length === 0) return 'bg-gray-50';
    if (desc.length < 120) return 'bg-pink-50 border-pink-200'; // Çok kısa
    if (desc.length <= 155) return 'bg-green-50 border-green-200'; // İdeal
    return 'bg-orange-50 border-orange-200'; // Çok uzun
  };

  const addSection = (type: Section['type'], index?: number) => {
    const newSection: Section = { id: `sec-${Date.now()}`, type, t: '', c: '' };
    if (typeof index === 'number') {
      const updated = [...sections];
      updated.splice(index + 1, 0, newSection);
      setSections(updated);
    } else {
      setSections([...sections, newSection]);
    }
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const updateSection = (id: string, key: 't' | 'c', value: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, [key]: value } : s));
  };

  // Sadece H2'lerin göründüğü içindekiler
  const tableOfContents = useMemo(() => sections.filter(s => s.type === 'h2' && s.t), [sections]);

  return (
    <main className="min-h-screen bg-[#F4F7F6] p-6 md:p-12 text-[#2F4F4F] font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b-4 border-[#2F4F4F] pb-6">
          <h1 className="text-3xl font-black tracking-tight uppercase">Corian İçerik Stüdyosu</h1>
          <div className="flex gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold ${getDescStatusColor()}`}>
              <div className={`w-3 h-3 rounded-full ${desc.length >= 120 && desc.length <= 155 ? 'bg-green-500' : 'bg-orange-400'}`} />
              SEO SKORU
            </div>
            <Link href="/icerik-yonetimi" className="text-xs font-bold border-2 border-[#2F4F4F] px-4 py-2 rounded hover:bg-[#2F4F4F] hover:text-white transition-all">PANEL</Link>
          </div>
        </div>

        {/* İÇİNDEKİLER (Sadece H2) */}
        <section className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xs font-black mb-4 opacity-40 tracking-[0.2em]">SİTE ÖN YÜZ İÇİNDEKİLER (H2)</h2>
          <div className="space-y-2 border-l-2 border-gray-100 pl-4">
            {tableOfContents.length === 0 ? <p className="text-xs italic text-gray-400">H2 başlığı girildiğinde burada listelenecek...</p> : 
              tableOfContents.map((s, i) => <div key={s.id} className="text-sm font-semibold opacity-80">0{i+1}. {s.t}</div>)
            }
          </div>
        </section>

        {/* METALAR */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <label className="text-xs font-black uppercase opacity-60">SEO Başlığı</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-gray-50 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2F4F4F]" placeholder="Başlık girin..." />
          </div>
          <div className={`border-2 rounded-2xl p-6 shadow-sm space-y-4 transition-colors duration-500 ${getDescStatusColor()}`}>
            <label className="text-xs font-black uppercase opacity-60">Meta Açıklama</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-3 bg-white/50 border rounded-lg text-sm outline-none h-20 resize-none" placeholder="Açıklama girin..." />
          </div>
        </div>

        {/* EDİTÖR GÖVDESİ */}
        <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-10 shadow-xl space-y-12">
          
          {/* H1 Sabit */}
          <div className="pb-10 border-b-2 border-gray-50 space-y-4">
            <label className="text-[10px] font-black bg-[#2F4F4F] text-white px-3 py-1 rounded">H1 / ANA BAŞLIK</label>
            <input type="text" value={h1.t} onChange={(e) => setH1({...h1, t: e.target.value})} className="w-full text-3xl font-black border-none outline-none placeholder:text-gray-200" placeholder="Sayfa Başlığını Yazın..." />
            <textarea value={h1.c} onChange={(e) => setH1({...h1, c: e.target.value})} className="w-full p-4 bg-gray-50 rounded-xl text-sm border-none outline-none h-24" placeholder="Giriş / Snippet metni..." />
          </div>

          {/* Dinamik Esnek Bölümler */}
          <div className="space-y-8">
            {sections.map((sec, index) => (
              <div key={sec.id} className="relative group">
                <div className={`p-6 border-2 rounded-3xl transition-all ${
                  sec.type === 'h2' ? 'border-blue-100 bg-blue-50/20' : 
                  sec.type === 'sss' ? 'border-yellow-200 bg-yellow-50/30' : 'border-gray-100'
                }`}>
                  {/* Silme Butonu */}
                  <button onClick={() => removeSection(sec.id)} className="absolute -right-3 -top-3 bg-red-500 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg font-bold">×</button>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white border rounded shadow-sm italic">{sec.type} BÖLÜMÜ</span>
                    <span className="text-[9px] font-mono font-bold opacity-40">Kelimeler: {getWordCount(sec.c)}</span>
                  </div>

                  <input 
                    type="text" 
                    value={sec.t} 
                    onChange={(e) => updateSection(sec.id, 't', e.target.value)} 
                    className="w-full p-2 mb-3 font-bold border-b bg-transparent outline-none text-lg" 
                    placeholder={sec.type === 'sss' ? 'Soru yazın...' : 'Başlık yazın...'}
                  />
                  <textarea 
                    value={sec.c} 
                    onChange={(e) => updateSection(sec.id, 'c', e.target.value)} 
                    className="w-full p-4 bg-white/80 rounded-xl text-sm outline-none min-h-[100px] border border-gray-100 focus:border-[#2F4F4F]" 
                    placeholder="İçerik detaylarını buraya girin..."
                  />

                  {/* Aralara Ekleme Butonları */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all flex gap-2 z-10">
                    <button onClick={() => addSection('h2', index)} className="bg-white border shadow-sm px-2 py-1 rounded text-[9px] font-bold hover:bg-blue-500 hover:text-white">+ H2</button>
                    <button onClick={() => addSection('h3', index)} className="bg-white border shadow-sm px-2 py-1 rounded text-[9px] font-bold hover:bg-green-500 hover:text-white">+ H3</button>
                    <button onClick={() => addSection('sss', index)} className="bg-white border shadow-sm px-2 py-1 rounded text-[9px] font-bold hover:bg-yellow-500 hover:text-white">+ SSS</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => addSection('h2')} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-3xl text-xs font-bold text-gray-400 hover:border-[#2F4F4F] hover:text-[#2F4F4F] transition-all uppercase tracking-widest">
            + Sayfa Sonuna Yeni Bölüm Ekle
          </button>
        </div>

        <button className="w-full bg-[#2F4F4F] text-white py-8 rounded-[2rem] font-black text-2xl shadow-2xl hover:scale-[1.01] active:scale-95 transition-all uppercase tracking-[0.6em]">İçeriği Kilitle ve Yayınla</button>
      </div>
    </main>
  );
}