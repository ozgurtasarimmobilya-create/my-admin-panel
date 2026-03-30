'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState({ t: '', c: '' });
  const [h2List, setH2List] = useState([{ t: '', c: '' }]);
  const [h3List, setH3List] = useState([]);
  const [h4List, setH4List] = useState([]);

  const Counter = ({ current, limit }: { current: number, limit: number }) => (
    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${current > limit ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
      {current}/{limit}
    </span>
  );

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-12 font-sans text-left">
      <div className="max-w-4xl mx-auto">
        <Link href="/icerik-yonetimi" className="text-[#696969] hover:text-[#2F4F4F] mb-8 inline-block text-sm font-medium">← Geri Dön</Link>
        
        <h1 className="text-4xl font-extrabold text-[#2F4F4F] mb-10 tracking-tighter uppercase">Corian Yönetimi</h1>

        <div className="space-y-12">
          {/* SEO SECTION */}
          <section className="space-y-4">
            <h2 className="text-xs font-black text-[#2F4F4F] uppercase tracking-[0.2em] opacity-50">SEO Metalar</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
              <div>
                <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#696969]">SEO Başlığı</label><Counter current={title.length} limit={45} /></div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border-b focus:border-[#2F4F4F] outline-none bg-transparent" placeholder="Google başlığı..." />
              </div>
              <div>
                <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#696969]">Meta Açıklama</label><Counter current={desc.length} limit={145} /></div>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-2 border-b focus:border-[#2F4F4F] outline-none bg-transparent h-16 resize-none" placeholder="Google açıklaması..." />
              </div>
            </div>
          </section>

          {/* CONTENT SECTION */}
          <section className="space-y-6">
            <h2 className="text-xs font-black text-[#2F4F4F] uppercase tracking-[0.2em] opacity-50">Sayfa İçeriği</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-8">
              {/* H1 & Giriş */}
              <div className="space-y-4">
                <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#2F4F4F]">H1 Ana Başlık</label><Counter current={h1.t.length} limit={70} /></div>
                <input type="text" value={h1.t} onChange={(e) => setH1({...h1, t: e.target.value})} className="w-full p-2 font-bold text-xl border-b outline-none" placeholder="H1 Başlığı..." />
                <textarea value={h1.c} onChange={(e) => setH1({...h1, c: e.target.value})} className="w-full p-2 mt-2 text-sm text-gray-600 bg-gray-50 rounded outline-none h-24" placeholder="H1 altı giriş metni (Snippet)..." />
              </div>

              {/* H2 Listesi */}
              {h2List.map((item, i) => (
                <div key={i} className="pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#2F4F4F]">H2 Başlık - {i+1}</label><Counter current={item.t.length} limit={70} /></div>
                  <input type="text" value={item.t} onChange={(e) => {const n=[...h2List]; n[i].t=e.target.value; setH2List(n)}} className="w-full p-2 font-semibold border-b outline-none text-lg" placeholder="H2 Başlığı..." />
                  <textarea value={item.c} onChange={(e) => {const n=[...h2List]; n[i].c=e.target.value; setH2List(n)}} className="w-full p-2 mt-2 text-sm text-gray-600 bg-gray-50 rounded outline-none h-32" placeholder="H2 içerik metni..." />
                </div>
              ))}

              {/* H3 Listesi */}
              {h3List.map((item: any, i) => (
                <div key={i} className="pt-6 border-t border-gray-100 pl-6 border-l-2 border-gray-200 space-y-3">
                  <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#2F4F4F]">H3 Başlık - {i+1}</label><Counter current={item.t.length} limit={70} /></div>
                  <input type="text" value={item.t} onChange={(e) => {const n=[...h3List] as any; n[i].t=e.target.value; setH3List(n)}} className="w-full p-2 font-medium border-b outline-none text-md" placeholder="H3 Başlığı..." />
                  <textarea value={item.c} onChange={(e) => {const n=[...h3List] as any; n[i].c=e.target.value; setH3List(n)}} className="w-full p-2 mt-2 text-sm text-gray-600 bg-gray-50 rounded outline-none h-24" placeholder="H3 içerik metni..." />
                </div>
              ))}

              {/* H4 Listesi */}
              {h4List.map((item: any, i) => (
                <div key={i} className="pt-6 border-t border-gray-100 pl-12 border-l-2 border-gray-100 space-y-3">
                  <div className="flex justify-between mb-1"><label className="text-xs font-bold text-[#2F4F4F]">H4 Başlık - {i+1}</label><Counter current={item.t.length} limit={70} /></div>
                  <input type="text" value={item.t} onChange={(e) => {const n=[...h4List] as any; n[i].t=e.target.value; setH4List(n)}} className="w-full p-2 text-sm border-b outline-none font-medium text-gray-700" placeholder="H4 Başlığı..." />
                  <textarea value={item.c} onChange={(e) => {const n=[...h4List] as any; n[i].c=e.target.value; setH4List(n)}} className="w-full p-2 mt-2 text-xs text-gray-500 bg-gray-50 rounded outline-none h-20" placeholder="H4 içerik metni..." />
                </div>
              ))}

              {/* Kontrol Butonları */}
              <div className="flex gap-3 pt-6 border-t border-gray-100">
                <button onClick={() => setH2List([...h2List, {t:'', c:''}])} className="text-[10px] font-black tracking-widest text-[#2F4F4F] border-2 border-[#2F4F4F] px-4 py-2 rounded-lg hover:bg-[#2F4F4F] hover:text-white transition-all">+ H2 EKLE</button>
                <button onClick={() => setH3List([...h3List as any, {t:'', c:''}])} className="text-[10px] font-black tracking-widest text-[#2F4F4F] border-2 border-[#2F4F4F] px-4 py-2 rounded-lg hover:bg-[#2F4F4F] hover:text-white transition-all">+ H3 EKLE</button>
                <button onClick={() => setH4List([...h4List as any, {t:'', c:''}])} className="text-[10px] font-black tracking-widest text-[#2F4F4F] border-2 border-[#2F4F4F] px-4 py-2 rounded-lg hover:bg-[#2F4F4F] hover:text-white transition-all">+ H4 EKLE</button>
              </div>
            </div>
          </section>

          <button className="w-full bg-[#2F4F4F] text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all uppercase tracking-[0.3em] active:scale-[0.98]">Sistemi Güncelle</button>
        </div>
      </div>
    </main>
  );
}