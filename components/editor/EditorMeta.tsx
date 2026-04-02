'use client';
export const EditorMeta = ({ meta, setMeta }: any) => {
  const autoResize = (e: any) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div className="max-w-[800px] mx-auto pt-16 px-8 text-left">
      {/* H1 BAŞLIK: 10px Radius + Ghost Border */}
      <div className="mb-10 p-6 border border-slate-100 rounded-[10px] hover:border-slate-300 transition-all bg-white group shadow-sm">
        <div className="flex justify-between items-center mb-4 text-left">
          <span className="px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">H1 Başlık</span>
          <span className={`text-[11px] font-mono font-bold ${meta.h1.length >= 40 && meta.h1.length <= 45 ? 'text-emerald-500' : 'text-slate-300'}`}>
            {meta.h1.length} / 45
          </span>
        </div>
        <textarea 
          value={meta.h1} 
          onChange={(e) => setMeta({...meta, h1: e.target.value})}
          onInput={autoResize}
          className="w-full text-4xl font-extrabold border-none outline-none resize-none bg-transparent placeholder:text-slate-100 leading-tight text-left" 
          placeholder="Ana SEO Başlığı..." rows={1} 
        />
      </div>

      {/* SNIPPET ALANI */}
      <div className="p-5 border border-slate-50 rounded-[10px] hover:border-slate-200 transition-all mb-12">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Snippet (140-145 Karakter)</span>
        <textarea 
          value={meta.snippet}
          onChange={(e) => setMeta({...meta, snippet: e.target.value})}
          className="w-full text-sm text-slate-500 border-none outline-none resize-none bg-transparent text-left" 
          placeholder="Arama sonucu özeti..."
        />
      </div>
    </div>
  );
};