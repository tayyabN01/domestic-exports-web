
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  teaser: string;
  expanded: string;
  catalogUrl: string;
}

const CategoryCard = ({ title, image, teaser, expanded, catalogUrl }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openCatalog = () => {
    window.open(catalogUrl, '_blank');
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
          <h3 className="font-playfair text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">
          {isExpanded ? expanded : teaser}
        </p>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center space-x-2 text-tan hover:text-tan-600 transition-colors duration-200"
          >
            <span className="font-medium">
              {isExpanded ? 'See Less' : 'See More'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          
          {isExpanded && (
            <Button
              onClick={openCatalog}
              className="w-full bg-tan hover:bg-tan-600 text-white py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 animate-fade-in"
            >
              <span>Preview Catalogue</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
