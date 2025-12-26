export const getFallbackImage = (seed: string | number) => {
  const fallbacks = [
    `https://picsum.photos/seed/${seed}/400/300`,
    'https://placehold.co/400x300/cccccc/969696?text=News+Image',
    'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=300&fit=crop',
  ];
  return fallbacks[0]; 
};