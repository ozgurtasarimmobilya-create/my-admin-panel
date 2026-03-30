'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- TİPLER VE ŞABLONLAR ---
type Block = {
  id: string;
  type: 'h2' | 'h3' | 'paragraph' | 'image_hd';
  content: string;
  extra?: string; // Görsel alt metni (alt) veya link için
};

// Yeni HD Görsel Blok Şablonu (Duyarlı ve Kaliteli)
const ImageHDBlock = ({ id, extra, onChange }: { id: string; extra?: string; onChange: (id: string, value: string) => void }) => (
  <div className="relative group p-4 border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/20 my-10 animate-in slide-in-from-top-2">
    <div className="aspect-[1800/1250] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-300 relative overflow-hidden shadow-inner">
       {/* Placeholder (Büyük Ekran Standardı 1800x1250px) */}
       <div className="text-center space-y-2 opacity-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span className="text-[10px] font-black uppercase tracking-widest">HD Görsel Yer Tutucu</span>
          <p className="text-[9px]">Geniş sunumlar için optimize edilmiş alan.</p>
       </div>
    </div>
    <input 
      type="text" 
      placeholder="Görsel Alt Etiketi (SEO için çok önemli)..." 
      value={extra || ''}
      onChange={(e) => onChange(id, e.target.value)}
      className="w-full p-2.5 bg-white border border-gray-100 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#2F4F4F] shadow-sm mt-3"
    />
  </div>
);

export default function ProfessionalTerminalV12() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Blok Ekleme Fonksiyonu
  const addBlock = (type: Block['type']) => {
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: '',
      extra: type === 'image_hd' ? 'Corian mutfak tezgahı HD modeli' : ''
    };
    setBlocks([...blocks, newBlock]);
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
    <div className="flex h-screen bg-[#F3F4F6] text-[#374151] font-sans overflow-hidden text-[12px]">
      
      {/* --- 1. SOL: TAM KAPASİTE ELEMENT CEPHANELİĞİ --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-[60px] flex items-center px-5 border-b bg-[#F9FAFB]">
          <span className="font-black text-[11px] tracking-[0.2em] text-[#2F4F4F] uppercase italic">Operasyon Merkezi</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-10">
          
          {/* GRUP 1: YAPISAL */}
          <div className="space-y-4">
            <label className="text-[11px] font-[900] text-[#111] uppercase tracking-widest block border-b-2 border-[#2F4F4F] pb-1">Yapı & Tipografi</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('h2')} className="btn-flex">H2 Başlık</button>
              <button onClick={() => addBlock('h3')} className="btn-flex">H3 Alt Başlık</button>
              <button onClick={() => addBlock('paragraph')} className="btn-flex">Paragraf</button>
              <button className="btn-flex opacity-50">T.O.C.</button>
              <button className="btn-flex opacity-50">Liste</button>
            </div>
          </div>

          {/* GRUP 2: MEDYA (HD ALTYAPISI) */}
          <div className="space-y-4">
            <label className="text-[11px] font-[900] text-[#111] uppercase tracking-widest block border-b-2 border-gray-200 pb-1">Medya & Görsel</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('image_hd')} className="btn-flex text-emerald-700 border-emerald-100 bg-emerald-50/20">HD Geniş Görsel</button>
              <button className="btn-flex opacity-50">Video</button>
              <button className="btn-flex opacity-50">Galeri</button>
            </div>
          </div>

          {/* GRUP 3: SATIŞ & TEKNİK */}
          <div className="space-y-4">
            <label className="text-[11px] font-[900] text-[#111] uppercase tracking-widest block border-b-2 border-gray-200 pb-1 opacity-50">Satış & SEO</label>
            <div className="flex flex-wrap gap-2 opacity-50 pointer-events-none">
              <button className="btn-flex text-orange-600 border-orange-200 bg-orange-50/10">SSS (FAQ)</button>
              <button className="btn-flex font-bold border-gray-400">Teknik Tablo</button>
              <button className="btn-flex">CTA Buton</button>
              <button className="btn-flex">PDF Katalog</button>
              <button className="btn-flex">Yazar Kutusu</button>
            </div>
          </div>
        </div>

        {/* BELİRGİN ÇIKIŞ BUTONU */}
        <div className="p-5 border-t bg-gray-50/50">
          <Link href="/icerik-yonetimi" className="btn-exit">
            SİSTEMDEN AYRIL
          </Link>
        </div>
      </aside>

      {/* --- 2. ORTA: CANLI YAZIM ALANI --- */}
      <main className="flex-1 bg-white overflow-y-auto scroll-smooth shadow-inner relative">
        {/* Üst İlerleme Barı */}
        <div className="fixed top-0 left-64 right-64 h-1 bg-gray-100 z-50">
           <div className="h-full bg-[#2F4F4F] w-1/4"></div>
        </div>

        <div className="max-w-[750px] mx-auto py-24 px-12 space-y-12 text-[#1A1A1A]">
          
          {/* H1 Sabit Başlık */}
          <div className="space-y-4">
            <div className="inline-block px-2 py-0.5 bg-[#2F4F4F]/10 text-[#2F4F4F] text-[9px] font-black rounded uppercase tracking-widest">Master H1</div>
            <input 
              className="w-full text-5xl font-black border-none outline-none placeholder:text-gray-100 tracking-tight text-[#111]" 
              placeholder="Makale Başlığını Buraya Girin..." 
            />
            <textarea 
              className="w-full text-lg text-gray-400 border-none outline-none resize-none italic border-l-2 border-gray-50 pl-8" 
              placeholder="SEO snippet / kısa giriş paragrafı..." 
              rows={1} 
            />
          </div>

          <div className="h-px bg-gray-50 w-full"></div>

          {/* DİNAMİK BLOKLAR ALANI */}
          <div className="min-h-[500px] space-y-6">
            {blocks.map((block) => (
              <div key={block.id} className="relative group animate-in slide-in-from-left-2 duration-300">
                {/* H2 Başlık */}
                {block.type === 'h2' && (
                  <input 
                    autoFocus
                    className="w-full text-3xl font-bold tracking-tight text-[#111] border-none outline-none placeholder:text-gray-100 my-4" 
                    placeholder="H2 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}
                
                {/* H3 Alt Başlık */}
                {block.type === 'h3' && (
                  <input 
                    autoFocus
                    className="w-full text-2xl font-semibold tracking-tight text-[#333] border-none outline-none placeholder:text-gray-100 my-3" 
                    placeholder="H3 Başlığı Yazın..."
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}

                {/* Paragraf */}
                {block.type === 'paragraph' && (
                  <textarea 
                    autoFocus
                    className="w-full text-base leading-relaxed text-[#4B5563] border-none outline-none resize-none placeholder:text-gray-200 my-2 custom-scrollbar" 
                    placeholder="Paragraf içeriğini buraya yazmaya başlayın..."
                    rows={4}
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                )}

                {/* HD Görsel Bloğu */}
                {block.type === 'image_hd' && (
                  <ImageHDBlock 
                    id={block.id} 
                    extra={block.extra} 
                    onChange={(id, value) => updateBlock(id, value, true)} 
                  />
                )}

                {/* Blok Silme Butonu (Hover'da Sol Kenarda Çıkar) */}
                <button 
                  onClick={() => removeBlock(block.id)}
                  className="absolute -left-12 top-2 opacity-0 group-hover:opacity-100 text-red-300 hover:text-red-600 transition-all font-black text-[9px] uppercase tracking-widest p-1 bg-white rounded-full shadow-md border"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            ))}

            {/* Boş Alan Yer Tutucu */}
            {blocks.length === 0 && (
              <div className="h-80 border-2 border-dashed border-gray-50 rounded-[3rem] flex items-center justify-center text-gray-200 italic select-none">
                Soldan element seçerek içeriği oluşturmaya başlayın...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- 3. SAĞ: ANALİZ (KOMPAKT) --- */}
      <aside className="w-64 bg-[#F9FAFB] border-l border-gray-200 flex flex-col shadow-inner">
        <div className="p-4 border-b bg-white">
          <span className="font-black text-[9px] text-gray-400 uppercase tracking-[0.2em]">SEO Analiz Paneli</span>
        </div>

        <div className="p-4 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
          {/* Kompakt Sayaçlar */}
          <div className="space-y-4 pt-4 border-t border-gray-100 opacity-60 pointer-events-none">
             <div className="flex flex-col gap-1">
               <div className="flex justify-between text-[9px] font-bold uppercase text-gray-400"><span>SEO Başlık</span> <span className="text-gray-600">0/45</span></div>
               <input className="w-full p-2 bg-white border border-gray-100 rounded text-xs outline-none focus:border-[#2F4F4F]" />
             </div>
             <div className="flex flex-col gap-1">
               <div className="flex justify-between text-[9px] font-bold uppercase text-gray-400"><span>Meta</span> <span className="text-gray-300">0/145</span></div>
               <textarea className="w-full p-2 bg-white border border-gray-100 rounded text-xs outline-none h-16 resize-none focus:border-[#2F4F4F]" />
             </div>
          </div>

          {/* Skor Kutusu */}
          <div className="bg-[#2F4F4F] p-4 rounded-2xl text-white flex items-center justify-between shadow-lg border border-white/5">
             <div className="flex flex-col">
               <span className="text-[8px] font-black uppercase opacity-60">SEO Puanı</span>
               <span className="text-xl font-black italic">{blocks.length * 10 > 100 ? 100 : blocks.length * 10}</span>
             </div>
             <div className="text-[8px] font-bold uppercase border border-white/20 px-2 py-1 rounded">Hazır Değil</div>
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <button className="w-full bg-[#111] text-white py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-[#2F4F4F] transition-all active:scale-95 shadow-lg">
            SAYFAYI KAYDET
          </button>
        </div>
      </aside>

      <style jsx>{`
        .btn-flex {
          display: inline-flex; align-items: center; justify-content: center; padding: 8px 16px;
          background: white; border: 1px solid #E2E8F0; border-radius: 12px;
          font-size: 11px; font-weight: 800; color: #475569; white-space: nowrap; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }
        .btn-flex:hover { border-color: #2F4F4F; color: #2F4F4F; background: #F8FAFC; transform: translateY(-1px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .btn-flex:active { transform: scale(0.96); }

        .btn-exit {
          display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px;
          background: #B91C1C; color: white; border-radius: 12px; font-weight: 900; font-size: 10px;
          letter-spacing: 0.2em; transition: all 0.3s;
        }
        .btn-exit:hover { background: #111; box-shadow: 0 10px 15px -3px rgba(185, 28, 28, 0.2); }

        .custom-scrollbar::-webkit-scrollbar { width: 3px; height: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
}