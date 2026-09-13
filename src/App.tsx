import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useStack } from './hooks/useStack';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';

const App = () => {
  const { technologies, stack, loading, addToStack, removeFromStack, removeAll } = useStack();

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      
      <main className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore the <span className="text-[#cd4eb6]">Technologies</span></h2>
        <p className="text-gray-500 mb-8">Pick one technology per category to build your ideal stack.</p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard 
                    key={tech.id} 
                    tech={tech} 
                    onAdd={addToStack} 
                    isAdded={stack.some(item => item.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-80">
            <Sidebar 
              stack={stack} 
              onRemove={removeFromStack} 
              onRemoveAll={removeAll} 
            />
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
};

export default App;