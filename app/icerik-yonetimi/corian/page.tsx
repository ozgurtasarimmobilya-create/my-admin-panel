'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  t: string;
  c: string;
}

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [h1, setH1] = useState<ContentItem>({ id: 'h1', t: '', c: '' });
  const [snippet, setSnippet] = useState<ContentItem>({ id: 'snip', t: '', c: '' });
  const [h2List, setH2List] = useState<ContentItem[]>([{ id: 'h2-init', t: '', c: '' }]);
  const [h3List, setH3List] = useState<ContentItem[]>([]);
  const [h4List, setH4List] = useState<ContentItem[]>([]);
  const [sssList, setSssList] = useState<{id: string, q: string, a: string}[]>([]);
  const [showSSS, setShowSSS] = useState(false);

  const getWordCount = (text: string) => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const Counter = ({ current, limit, type = 'char' }: { current: number, limit: number, type?: 'char' | 'word' }) => (
    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${current > limit || (type === 'word' && current > 0 && current < limit) ? 'bg-red-50 text-red-600 border-red-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
      {type === 'char' ? `${current}/${limit}` : `Kelime: ${current}/${limit}`}
    </span>
  );

  const innerContents = useMemo(() => {
    const items = [];
    if (h1.t) items.push({ t: h1.t, l: 1 });
    h2List.forEach(i => i.t && items.push({ t: i.t, l: 2 }));
    h3List.forEach(i => i.t && items.push({ t: i.t, l: 3 }));
    h4List.forEach(i => i.t && items.push({ t: i.t, l: 4 }));
    return items;
  }, [h1, h2List, h3List, h4List]);

  return (
    <main className="min-h-screen bg-[#F8F9FA] p-6 md:p-12 text-[#2F4F4F]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="flex justify-between items-end border-b-2 border-[#2F4F4F] pb-4">
          <div>
            <p className="text-xs font-bold opacity-50 uppercase tracking-widest mb-1">Özgür Tasarım İçerik Bulutu</p>
            <h1 className="text-4xl font-black tracking-tighter">CORIAN® YÖNETİMİ</h1>
          </div>
          <Link href="/icerik-yonetimi" className="text-xs font-bold border-2 border-[#2F4F4F] px-4 py-2 rounded hover:bg-[#2F4F4F] hover:text-white transition-all">GERİ DÖN</Link>
        </div>

        {/* OTOMATİK İÇİNDEKİLER */}
        <section className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-sm font-black mb-4 flex items-center gap-2">📋 İÇİNDEKİLER <span className="font-normal opacity-50">(Otomatik)</span></h2>
          <div className="bg-gray-50 p-4 rounded border border-gray-100 min-h-[60px]">
            {innerContents.length === 0 ? <p className="text-xs italic text-gray-400">Başlık girdikçe liste burada şekillenecek...</p> : 
              <ul className="text-xs space-y-2">
                {innerContents.map((c, i) => (
                  <li key={i} style={{ paddingLeft: `${(c.l - 1) * 15}px` }} className={c.l === 1 ? "font-bold" : "opacity-70"}>
                    {c.l > 1 && "— "} {c.t}
                  </li>
                ))}
              </ul>
            }
          </div>
        </section>

        {/* SEO BÖLÜMÜ */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between"><label className="text-xs font-black uppercase">SEO Başlığı</label><Counter current={title.length} limit={45} /></div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 bg-gray-50 border rounded text-sm outline-none focus:border-[#2F4F4F]" placeholder="Örn: Corian Mutfak Tezgahı Fiyatları 2026" />
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between"><label className="text-xs font-black uppercase">Meta Açıklama</label><Counter current={desc.length} limit={145} /></div>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-2 bg-gray-50 border rounded text-sm outline-none focus:border-[#2F4F4F] h-[72px] resize-none" placeholder="Corian yüzeylerin avantajlarını ve güncel fiyat listesini hemen inceleyin..." />
          </div>
        </div>

        {/* ANA İÇERİK BÖLÜMÜ */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md space-y-10">
          
          {/* H1 & Giriş */}
          <div className="space-y-4">
            <div className="flex justify-between"><label className="text-sm font-black border-l-4 border-[#2F4F4F] pl-2">H1 BAŞLIK & GİRİŞ</label><Counter current={h1.t.length} limit={70} /></div>
            <input type="text" value={h1.t} onChange={(e) => setH1({...h1, t: e.target.value})} className="w-full p-3 font-bold text-lg border-b-2 outline-none" placeholder="H1: Ana Kategori Başlığı" />
            <div className="flex justify-between mt-2"><span className="text-[10px] font-bold opacity-50">Giriş / Snippet Paragrafı</span><Counter current={getWordCount(snippet.c)} limit={200} type="word" /></div>
            <textarea value={snippet.c} onChange={(e) => setSnippet({...snippet, c: e.target.value})} className="w-full p-3 bg-gray-50 border rounded-lg text-sm h-24 outline-none" placeholder="H1 altında görünecek, SEO odaklı kısa tanıtım metni..." />
          </div>

          {/* Dinamik Başlıklar */}
          <div className="space-y-6">
            {h2List.map((item, i) => (
              <div key={item.id} className="p-5 border-2 border-gray-100 rounded-xl space-y-3">
                <div className="flex justify-between"><label className="text-xs font-black uppercase tracking-widest text-blue-800">H2 Başlık {i+1}</label><Counter current={item.t.length} limit={70} /></div>
                <input type="text" value={item.t} onChange={(e) => {const n=[...h2List]; n[i].t=e.target.value; setH2List(n)}} className="w-full p-2 border-b font-bold text-md outline-none" placeholder="H2: Genel Tanıtım / Rehber" />
                <div className="flex justify-between pt-2"><span className="text-[10px] font-bold opacity-50">H2 İçerik Detayı</span><Counter current={getWordCount(item.c)} limit={300} type="word" /></div>
                <textarea value={item.c} onChange={(e) => {const n=[...h2List]; n[i].c=e.target.value; setH2List(n)}} className="w-full p-3 bg-gray-50 border rounded text-sm h-32 outline-none" placeholder="Bu başlık altında en az 300 kelimelik teknik ve kullanıcı odaklı içerik..." />
              </div>
            ))}

            {h3List.map((item, i) => (
              <div key={item.id} className="p-5 border-2 border-gray-100 rounded-xl ml-8 space-y-3 bg-gray-50/30">
                <div className="flex justify-between"><label className="text-xs font-black uppercase tracking-widest text-green-800">H3 Başlık {i+1}</label><Counter current={item.t.length} limit={70} /></div>
                <input type="text" value={item.t} onChange={(e) => {const n=[...h3List]; n[i].t=e.target.value; setH3List(n)}} className="w-full p-2 border-b font-bold text-sm outline-none" placeholder="H3: İlgili Makale / Alt Konu" />
                <textarea value={item.c} onChange={(e) => {const n=[...h3List]; n[i].c=e.target.value; setH3List(n)}} className="w-full p-3 bg-white border rounded text-sm h-24 outline-none" placeholder="H3 içeriği..." />
              </div>
            ))}

            {/* Kontroller */}
            <div className="flex gap-3 pt-4">
              <button onClick={() => setH2List([...h2List, {id: `h2-${Date.now()}`, t:'', c:''}])} className="text-[10px] font-black border-2 border-[#2F4F4F] px-4 py-2 rounded hover:bg-[#2F4F4F] hover:text-white transition-all">+ H2 EKLE</button>
              <button onClick={() => setH3List([...h3List, {id: `h3-${Date.now()}`, t:'', c:''}])} className="text-[10px] font-black border-2 border-[#2F4F4F] px-4 py-2 rounded hover:bg-[#2F4F4F] hover:text-white transition-all">+ H3 EKLE</button>
              {!showSSS && <button onClick={() => setShowSSS(true)} className="text-[10px] font-black bg-yellow-400 border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition-all">+ SSS BÖLÜMÜ EKLE</button>}
            </div>
          </div>

          {/* SSS BÖLÜMÜ (Şartlı Gösterim) */}
          {showSSS && (
            <div className="mt-10 p-6 border-4 border-yellow-100 rounded-2xl space-y-6">
              <div className="flex justify-between items-center"><h3 className="text-sm font-black uppercase tracking-tighter italic">❓ Sıkça Sorulan Sorular</h3><button onClick={() => setSssList([...sssList, {id: `sss-${Date.now()}`, q:'', a:''}])} className="text-[10px] font-bold underline">+ Yeni Soru</button></div>
              {sssList.map((item, i) => (
                <div key={item.id} className="space-y-2 border-b border-yellow-50 pb-4">
                  <input type="text" value={item.q} onChange={(e) => {const n=[...sssList]; n[i].q=e.target.value; setSssList(n)}} className="w-full p-2 text-xs font-bold border rounded outline-none" placeholder={`Soru ${i+1}: Corian tezgah dayanıklı mıdır?`} />
                  <textarea value={item.a} onChange={(e) => {const n=[...sssList]; n[i].a=e.target.value; setSssList(n)}} className="w-full p-2 text-xs border rounded h-16 outline-none bg-yellow-50/30" placeholder="Cevap..." />
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="w-full bg-[#2F4F4F] text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:bg-[#1a2e2e] transition-all uppercase tracking-[0.5em]">YAYINA AL</button>
      </div>
    </main>
  );
}