'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  type: 'h2' | 'h3' | 'h4' | 'sss' | 'line';
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

  // SEO Renk Kontrolü (Trafik Lambası)
  const getStatusColor = (current: number, min: number, max: number) => {
    if (current === 0) return 'bg-gray-50 border-gray-200';
    if (current < min) return 'bg-pink-50 border-pink-200 text-pink-700'; // Çok kısa
    if (current <= max) return 'bg-green-50 border-green-200 text-green-700'; // İdeal
    return 'bg-orange-50 border-orange-200 text-orange-700'; // Çok uzun
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

  const removeSection = (id: string) => setSections(sections.filter(s => s.id !== id));
  
  const updateSection = (id: string, key: 't' | 'c', value: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, [key]: value } : s));
  };

  const tableOfContents = useMemo(() => sections.filter(s => s.type === 'h2' && s.t), [sections]);

  return (
    <main className="min-h-screen bg-[#F4F7F6] p-6 md:p-12 text-[#2F4F4F] font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b-4 border-[#2F4F4F] pb-6">
          <h1 className="text-3xl font-black tracking-tight uppercase italic">Corian® SEO Engine</h1>
          <Link href="/icerik-yonetimi" className="text-xs font-bold border-2 border-[#2F4F4F] px-5 py-2 rounded-full hover:bg-[#2F4F4F] hover:text-white transition-all">← GERİ</Link>
        </div>

        {/* İÇİNDEKİLER */}
        <section className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-[10px] font-black mb-4 opacity-40 tracking-[0.3em]">NAVİGASYON (H2)</h2>
          <div className="flex flex-wrap gap-3">
            {tableOfContents.length === 0 ? <p className="text-xs italic text-gray-300">Başlık bekleniyor...</p> : 
              tableOfContents.map((s, i) => <span key={s.id} className="text-[11px] font-bold bg-gray-100 px-3 py-1 rounded-md">0{i+1}. {s.t}</span>)
            }
          </div>
        </section>

        {/* METALAR (SAYAÇLI & RENKLİ) */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`border-2 rounded-2xl p-6 shadow-sm space-y-3 transition-colors ${getStatusColor(title.length, 40, 45)}`}>
            <div className="flex justify-between items-center text-[10px] font-black uppercase">
              <span>SEO Başlığı (40-45)</span>
              <span>{title.length} / 45</span>
            </div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-white/60 border rounded-lg text-sm outline-none" placeholder="Örn: Corian Mutfak Tezgahı Fiyatları 2026" />
          </div>
          
          <div className={`border-2 rounded-2xl p-6 shadow-sm space-y-3 transition-colors ${getStatusColor(desc.length, 140, 145)}`}>
            <div className="flex justify-between items-center text-[10px] font-black uppercase">
              <span>Meta Açıklama (140-145)</span>
              <span>{desc.length} / 145</span>
            </div>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-3 bg-white/60 border rounded-lg text-sm outline-none h-20 resize-none" placeholder="Corian yüzeylerin dayanıklılığını ve 2026 renk seçeneklerini keşfedin..." />
          </div>
        </div>

        {/* ANA EDİTÖR */}
        <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-10 shadow-2xl space-y-12">
          
          {/* H1 & SNIPPET */}
          <div className="space-y-6 pb-10 border-b-2 border-gray-50">
            <div className="flex justify-between items-center"><label className="text-[10px] font-black bg-[#2F4F4F] text-white px-3 py-1 rounded">H1 / ANA BAŞLIK</label><span className="text-[10px] font-bold opacity-30">{h1.t.length}/70</span></div>
            <input type="text" value={h1.t} onChange={(e) => setH1({...h1, t: e.target.value})} className="w-full text-4xl font-black border-none outline-none" placeholder="Corian Solid Surface Uygulamaları" />
            
            <div className="flex justify-between items-center"><label className="text-[10px] font-black text-gray-400">GİRİŞ / SNIPPET (Kelime: {getWordCount(h1.c)}/200)</label></div>
            <textarea value={h1.c} onChange={(e) => setH1({...h1, c: e.target.value})} className="w-full p-5 bg-gray-50 rounded-2xl text-sm border-none outline-none h-24 italic" placeholder="Corian, mimari tasarımlarda sınırsız özgürlük sunan..." />
          </div>

          {/* DİNAMİK BÖLÜMLER */}
          <div className="space-y-10">
            {sections.map((sec, index) => (
              <div key={sec.id} className="relative group">
                {sec.type === 'line' ? (
                  <div className="py-8 flex items-center gap-4">
                    <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#2F4F4F] to-transparent opacity-20"></div>
                    <span className="text-[9px] font-black text-gray-300 uppercase italic">Hero Seperator</span>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#2F4F4F] via-transparent to-transparent opacity-20"></div>
                    <button onClick={() => removeSection(sec.id)} className="absolute right-0 bg-red-100 text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                  </div>
                ) : (
                  <div className={`p-8 border-2 rounded-[2rem] transition-all shadow-sm ${
                    sec.type === 'h2' ? 'border-blue-50 bg-blue-50/10' : 
                    sec.type === 'sss' ? 'border-yellow-100 bg-yellow-50/20' : 'border-gray-100'
                  }`}>
                    <button onClick={() => removeSection(sec.id)} className="absolute -right-3 -top-3 bg-red-500 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg font-bold z-20">×</button>
                    
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-black uppercase px-2 py-1 rounded border shadow-sm ${sec.type === 'h2' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white'}`}>
                          {sec.type}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 italic">
                          {sec.type === 'h2' ? 'Min. 300 Kelime' : sec.type === 'h3' ? 'Min. 200 Kelime' : ''}
                        </span>
                      </div>
                      <div className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${getWordCount(sec.c) >= (sec.type === 'h2' ? 300 : 200) ? 'text-green-600 bg-green-50' : 'text-orange-400'}`}>
                        Kelime: {getWordCount(sec.c)}
                      </div>
                    </div>

                    <input 
                      type="text" 
                      value={sec.t} 
                      onChange={(e) => updateSection(sec.id, 't', e.target.value)} 
                      className="w-full p-2 mb-4 font-bold border-b-2 bg-transparent outline-none text-xl focus:border-[#2F4F4F]" 
                      placeholder={sec.type === 'sss' ? 'Müşteriler ne soruyor?' : 'Alt başlığınızı buraya yazın...'}
                    />
                    <textarea 
                      value={sec.c} 
                      onChange={(e) => updateSection(sec.id, 'c', e.target.value)} 
                      className="w-full p-5 bg-white rounded-2xl text-sm outline-none min-h-[150px] border border-gray-50 focus:shadow-inner transition-shadow" 
                      placeholder={sec.type === 'sss' ? 'Uzman cevabı buraya...' : 'Detaylı, teknik ve satış odaklı makale içeriği...'}
                    />

                    {/* Araya Ekleme Menüsü */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all flex gap-2 z-30 scale-90 group-hover:scale-100">
                      {['h2', 'h3', 'sss', 'line'].map((type) => (
                        <button key={type} onClick={() => addSection(type as any, index)} className="bg-[#2F4F4F] text-white px-3 py-1.5 rounded-full text-[9px] font-black hover:bg-black uppercase shadow-xl border border-white">
                          + {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button onClick={() => addSection('h2')} className="w-full py-6 border-4 border-dashed border-gray-100 rounded-[2rem] text-[10px] font-black text-gray-300 hover:border-[#2F4F4F] hover:text-[#2F4F4F] transition-all uppercase tracking-[0.4em]">
            + SAYFAYI UZAT (YENİ BÖLÜM)
          </button>
        </div>

        <button className="w-full bg-[#2F4F4F] text-white py-10 rounded-[3rem] font-black text-3xl shadow-2xl hover:bg-black active:scale-95 transition-all uppercase tracking-[0.8em]">
          SİSTEMİ GÜNCELLE
        </button>
      </div>
    </main>
  );
}