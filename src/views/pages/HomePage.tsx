// views/pages/HomePage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetNewsQuery } from '../../store/api/newsApi';
import NavbarView from '../components/common/NavbarView';
import NewsCardView from '../components/news/NewsCardView';
import SkeletonLoader from '../components/common/SkeletonLoader';
import { getTranslation } from '../../utils/translations';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';
import '../../styles/banner.css';

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
  const bannerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const language = useSelector((state: RootState) => state.language.current);
  const t = getTranslation(language);
  
  const { data: news, isLoading, isError } = useGetNewsQuery({ 
    page, 
    limit: 18 
  });

  
  const totalPages = 5;

  // Get featured posts for banner (first 3 posts)
  const featuredPosts = news?.slice(0, 3) || [];

  // Random Unsplash images for banner
  const bannerImages = [
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80',
    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80',
    'https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80'
  ];

  // Alternative random 
  const alternativeImages = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80', // Breaking News
    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80', // World News
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80'  // Tech News
  ];

  // Get-img from banner slide
  const getBannerImage = (index: number) => {
    // Use different image sets based on indexs
    if (index === 0) return bannerImages[0]; 
    if (index === 1) return bannerImages[1]; 
    if (index === 2) return bannerImages[2]; 
    
    // Fallback to alternative images or post image
    return featuredPosts[index]?.image || alternativeImages[index % alternativeImages.length];
  };

  
  useEffect(() => {
    if (featuredPosts.length > 0) {
      bannerIntervalRef.current = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => 
          prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => {
      if (bannerIntervalRef.current) {
        clearInterval(bannerIntervalRef.current);
      }
    };
  }, [featuredPosts.length]);

 
  const goToBanner = (index: number) => {
    setCurrentBannerIndex(index);
    if (bannerIntervalRef.current) {
      clearInterval(bannerIntervalRef.current);
     
      setTimeout(() => {
        if (featuredPosts.length > 0) {
          bannerIntervalRef.current = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => 
              prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
            );
          }, 20000);
        }
      }, 3000); 
    }
  };

  // Generate page numbers for paginationn
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);
      
      if (page <= 3) {
        end = 4;
      } else if (page >= totalPages - 2) {
        start = totalPages - 3;
      }
      
      if (start > 2) {
        pages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (isError) {
    return (
      <>
        <NavbarView />
        <div className="container error">
          <h2>{t('errorLoading')}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="retry-btn"
          >
            {t('tryAgain')}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarView />
      <main className="container">
        {/* Featured News Banner */}
        <div className="news-banner">
          {isLoading ? (
            <div className="banner-skeleton">
              <div className="banner-skeleton-image"></div>
              <div className="banner-skeleton-content">
                <div className="banner-skeleton-title"></div>
                <div className="banner-skeleton-desc"></div>
              </div>
            </div>
          ) : featuredPosts.length > 0 ? (
            <>
              <div className="banner-container">
                {featuredPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className={`banner-slide ${index === currentBannerIndex ? 'active' : ''}`}
                  >
                    <div className="banner-image">
                      <img 
                        src={getBannerImage(index)} 
                        alt={post.title}
                        onError={(e) => {
                          // Fallback to placeholder if image fails
                          e.currentTarget.src = `https://placehold.co/1200x500/cccccc/969696?text=${encodeURIComponent(post.title.substring(0, 30))}`;
                        }}
                      />
                      <div className="banner-overlay"></div>
                    </div>
                    <div className="banner-content">
                      <div className="banner-tag">
                        {index === 0 ? 'Breaking News' : 
                         index === 1 ? 'World News' : 
                         'Tech News'}
                      </div>
                      <h2 className="banner-title">
                        <Link to={`/news/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="banner-description">
                        {post.body.substring(0, 150)}...
                      </p>
                      <div className="banner-meta">
                        <span className="banner-author">
                          {t('by')} {post.author}
                        </span>
                        <span className="banner-date">{post.date}</span>
                      </div>
                      <Link to={`/news/${post.id}`} className="banner-read-btn">
                        {t('readFullStory')} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner Dots Navigation */}
              <div className="banner-dots">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    className={`banner-dot ${index === currentBannerIndex ? 'active' : ''}`}
                    onClick={() => goToBanner(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Banner Arrows */}
              <button 
                className="banner-arrow prev"
                onClick={() => goToBanner(
                  currentBannerIndex === 0 ? featuredPosts.length - 1 : currentBannerIndex - 1
                )}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button 
                className="banner-arrow next"
                onClick={() => goToBanner(
                  currentBannerIndex === featuredPosts.length - 1 ? 0 : currentBannerIndex + 1
                )}
                aria-label="Next slide"
              >
                →
              </button>
            </>
          ) : (
            <div className="banner-placeholder">
              <div className="placeholder-image">
                <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" alt="News Banner" />
              </div>
              <h2>{t('latestNews')}</h2>
              <p>Stay updated with the latest headlines</p>
            </div>
          )}
        </div>

        <h1 className="page-title">{t('latestNews')}</h1>
        
        <section className="grid">
          {isLoading ? (
            <SkeletonLoader type="card" count={6} />
          ) : (
            news?.slice(3).map((item) => ( // Skip first 3 posts (they're in banner)
              <NewsCardView key={item.id} news={item} />
            ))
          )}
        </section>

        {/* Pagination */}
        {!isLoading && news && news.length > 0 && totalPages > 1 && (
          <div className="pagination old-style">
            <button 
              onClick={() => setPage(prev => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="pagination-btn prev"
            >
              ← {t('previous')}
            </button>
            
            <div className="page-numbers">
              {pageNumbers.map((pageNum, index) => {
                if (pageNum === '...') {
                  return (
                    <span 
                      key={`dots-${index}`} 
                      className="dots"
                    >
                      ...
                    </span>
                  );
                }
                
                const pageNumber = pageNum as number;
                
                return (
                  <button
                    key={`page-${pageNumber}`}
                    onClick={() => setPage(pageNumber)}
                    className={`page-btn ${page === pageNumber ? 'active' : ''}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={() => setPage(prev => prev + 1)}
              disabled={page === totalPages}
              className="pagination-btn next"
            >
              {t('next')} →
            </button>
          </div>
        )}

        {/* No results message */}
        {!isLoading && (!news || news.length === 0) && (
          <div className="no-results">
            <p>{t('noPostsFound')}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;