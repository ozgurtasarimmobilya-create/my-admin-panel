'use client';
import { useState } from 'react';
// Oluşturduğun parçaları içeri çağırıyoruz
import { EditorSidebar } from '@/components/editor/EditorSidebar';
import { EditorMeta } from '@/components/editor/EditorMeta';
import { DynamicBlocks } from '@/components/editor/DynamicBlocks';

export default function EditorPage() {
  const [blocks, setBlocks] = useState<any>([]);
  const [meta, setMeta] = useState({ h1: '', snippet: '' });

  const addBlock = (label: string) => {
    setBlocks([...blocks, { 
      id: Math.random().toString(36).substring(2, 9), 
      label, 
      content: '' 
    }]);
  };

  return (
    <div className="flex h-screen bg-[#F5F5F7] overflow-hidden">
      {/* 1. Parça */}
      <EditorSidebar addBlock={addBlock} />
      
      {/* Sağ taraf (Yazım Alanı) */}
      <main className="flex-1 ml-72 overflow-y-auto bg-white scrollbar-hide">
        {/* 2. Parça */}
        <EditorMeta meta={meta} setMeta={setMeta} />
        {/* 3. Parça */}
        <DynamicBlocks blocks={blocks} setBlocks={setBlocks} />
      </main>
    </div>
  );
}