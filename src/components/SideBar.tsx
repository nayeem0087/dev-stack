import React from 'react';
import type { Technology } from '../types';
interface SidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit sticky top-24">
      <h2 className="text-xl font-bold text-gray-800">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-6">{stack.length} Technology Selected</p>
      
      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 border border-gray-100 p-3 rounded-xl">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 font-bold text-lg">✕</button>
            </div>
          ))}
          <button onClick={onRemoveAll} className="w-full mt-4 py-2 border border-red-200 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition">
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;




