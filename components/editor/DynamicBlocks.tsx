'use client';
export const DynamicBlocks = ({ blocks, setBlocks }: any) => {
  const autoResize = (e: any) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div className="max-w-[800px] mx-auto px-8 space-y-6 pb-40 text-left">
      {blocks.map((block: any, index: number) => (
        <div key={block.id} className="relative group p-6 border border-slate-50 hover:border-slate-300 rounded-[10px] hover:bg-[#fafafa]/30 transition-all duration-300 text-left">
          <div className="absolute -top-4 left-4 opacity-0 group-hover:opacity-100 transition-all flex items-center bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-bold gap-3 z-20 shadow-xl">
            <span className="text-emerald-400 uppercase">{block.label}</span>
            <button onClick={() => setBlocks(blocks.filter((b: any) => b.id !== block.id))} className="text-red-400 border-l border-white/10 pl-3 cursor-pointer">SİL</button>
          </div>
          <textarea 
            value={block.content}
            onChange={(e) => {
              const newBlocks = [...blocks];
              newBlocks[index].content = e.target.value;
              setBlocks(newBlocks);
            }}
            onInput={autoResize}
            className={`w-full bg-transparent border-none outline-none resize-none text-left ${
              block.label === 'Başlık' ? 'text-2xl font-bold text-slate-800' : 'text-base text-slate-600 font-medium'
            }`}
            placeholder={`${block.label} içeriği buraya...`}
            rows={1}
          />
        </div>
      ))}
    </div>
  );
};