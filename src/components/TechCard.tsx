
import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, isAdded }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tech.badge}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{tech.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{tech.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200">{tech.category}</span>
          <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200">{tech.difficulty}</span>
          <span className="text-xs flex items-center gap-1 text-yellow-600 font-bold ml-auto">★ {tech.rating}</span>
        </div>
      </div>
      
      <button 
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2 rounded-lg font-semibold transition ${
          isAdded 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;