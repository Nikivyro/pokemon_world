import React from 'react';
import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  image: string;
  gif: string
  stats: any[];
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, gif, stats, types }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-indigo-950">{name}</p>
        <img
          src={image}
          alt={name}
        />
        <img
          src={gif}
          alt={name}
        />
      </div>
      <div className="stats grid grid-cols-2 gap-4">
        <h3 className="text-lg font-bold text-indigo-950">Stats</h3>
        <ul className="stat-list text-indigo-950">
          {stats.map((stat) => (
            <li key={stat.stat.name} className="stat-item">
              <span className="stat-name">{stat.stat.name}</span>:
              <span className="stat-value">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="types grid grid-cols-2 gap-4">
        <h3 className="text-lg font-bold text-indigo-950">Types</h3>
        <ul className="type-list text-indigo-950">
          {types.map((type) => (
            <li key={type.type.name} className="type-item">
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>        
    </div>
  );
};

export default PokemonCard;