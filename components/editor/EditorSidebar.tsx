'use client';
export const EditorSidebar = ({ addBlock }: any) => {
  const items = ['Başlık', 'Paragraf', 'Liste', 'Görsel', 'İçerik Tablosu', 'SSS'];
  return (
    <aside className="w-72 bg-white border-r border-slate-100 h-full p-6 flex flex-col gap-8 fixed left-0 top-0">
      <div className="text-xl font-black tracking-tighter italic">MİMAR.</div>
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Bileşen Ekle</p>
        {items.map(item => (
          <button 
            key={item} 
            onClick={() => addBlock(item)}
            className="w-full text-left p-3 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 rounded-[10px] text-xs font-bold transition-all cursor-pointer active:scale-95"
          >
            + {item}
          </button>
        ))}
      </div>
    </aside>
  );
};