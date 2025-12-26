// views/components/common/SkeletonLoader.tsx
import React from 'react';
import '../../../styles/skeleton.css';

interface SkeletonLoaderProps {
  type?: 'card' | 'detail';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type = 'card', 
  count = 6 
}) => {
  const CardSkeleton = () => (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line wide"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-footer">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line short"></div>
        </div>
      </div>
    </div>
  );

  const DetailSkeleton = () => (
    <div className="skeleton-detail">
      <div className="skeleton-image-large"></div>
      <div className="skeleton-content">
        <div className="skeleton-line extra-wide"></div>
        <div className="skeleton-line medium"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );

  
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        type === 'detail' ? 
          <DetailSkeleton key={index} /> : 
          <CardSkeleton key={index} />
      ))}
    </>
  );
};

export default SkeletonLoader;