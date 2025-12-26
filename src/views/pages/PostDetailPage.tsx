import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetNewsDetailQuery, useGetNewsQuery } from '../../store/api/newsApi';
import NavbarView from '../components/common/NavbarView';
import SkeletonLoader from '../components/common/SkeletonLoader';
import { getTranslation } from '../../utils/translations';
import '../../styles/detail.css';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const language = useSelector((state: RootState) => state.language.current);
  
  const t = getTranslation(language);
  
  // Fetch current post details
  const { 
    data: post, 
    isLoading, 
    isError 
  } = useGetNewsDetailQuery(Number(id), {
    skip: !id,
  });

  // Fetch random
  const { 
    data: allNews, 
    isLoading: isLoadingNews 
  } = useGetNewsQuery({ page: 1, limit: 10 });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://placehold.co/1200x600/cccccc/969696?text=News+Image';
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${post?.title} - Check out this article on NewsPlus!`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t('linkCopied'));
  };

  // Get 2 random 
  const getRelatedPosts = () => {
    if (!allNews || !post) return [];
    
    
    const filteredNews = allNews.filter(news => news.id !== post.id);
    const shuffled = [...filteredNews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  const relatedPosts = getRelatedPosts();

  if (isLoading) {
    return (
      <>
        <NavbarView />
        <div className="detail-container">
          <Link to="/" className="back-link">
            ← {t('backToNews')}
          </Link>
          <SkeletonLoader type="detail" count={1} />
        </div>
      </>
    );
  }

  if (isError || !post) {
    return (
      <>
        <NavbarView />
        <div className="detail-container">
          <Link to="/" className="back-link">
            ← {t('backToNews')}
          </Link>
          <div className="error-message">
            <h2>{t('errorLoading')}</h2>
            <p>{t('postNotFound')}</p>
            <Link to="/" className="back-home-btn">
              {t('backToNews')}
            </Link>
          </div>
        </div>
      </>
    );
  }

  const readingTime = Math.ceil(post.body.split(/\s+/).length / 200);

  return (
    <>
      <NavbarView />
      <div className="detail-container">
        <Link to="/" className="back-link">
          ← {t('backToNews')}
        </Link>
        
        <article className="post-detail">
          {/* Article Header */}
          <header className="article-header">
            <div className="article-tags">
              <span className="article-category">News</span>
              <span className="article-tag">Technology</span>
            </div>
            
            <h1 className="article-title">{post.title}</h1>
            
            <div className="article-meta">
              <span className="publish-date">
                <i className="icon-calendar"></i> {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="read-time">
                <i className="icon-clock"></i> {readingTime} {t('minRead')}
              </span>
              <span className="author-name">
                <i className="icon-user"></i> {t('by')} {post.author}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="featured-image">
            <img 
              src={post.image} 
              alt={post.title}
              onError={handleImageError}
            />
            <div className="image-caption">
              <p>{post.title}</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content">
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Share Section */}
          <div className="share-section">
            <h3>{t('shareThisStory')}</h3>
            <div className="share-buttons">
              <button 
                className="share-btn twitter"
                onClick={shareOnTwitter}
                title={t('shareTwitter')}
              >
                <i className="icon-twitter"></i>
              </button>
              <button 
                className="share-btn facebook"
                onClick={shareOnFacebook}
                title={t('shareFacebook')}
              >
                <i className="icon-facebook"></i>
              </button>
              <button 
                className="share-btn linkedin"
                onClick={shareOnLinkedIn}
                title={t('shareLinkedIn')}
              >
                <i className="icon-linkedin"></i>
              </button>
              <button 
                className="share-btn copy"
                onClick={copyToClipboard}
                title={t('copyLink')}
              >
                <i className="icon-link"></i>
              </button>
              <button 
                className="share-btn whatsapp"
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                title={t('shareWhatsApp')}
              >
                <i className="icon-whatsapp"></i>
              </button>
            </div>
          </div>

          {/* Author Info */}
          <div className="author-info">
            <div className="author-avatar">
              <div className="avatar-initial">
                {post.author?.charAt(0) || 'A'}
              </div>
            </div>
            <div className="author-details">
              <h3>{t('writtenBy')} {post.author}</h3>
              <div className="author-contact">
                {post.email && (
                  <p><i className="icon-email"></i> {post.email}</p>
                )}
                {post.website && (
                  <p>
                    <i className="icon-website"></i>
                    <a 
                      href={`https://${post.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {post.website}
                    </a>
                  </p>
                )}
                {post.company && (
                  <p><i className="icon-company"></i> {post.company}</p>
                )}
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="related-articles">
            <h3>{t('relatedStories')}</h3>
            {isLoadingNews ? (
              <div className="related-skeleton">
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
              </div>
            ) : relatedPosts.length > 0 ? (
              <div className="related-grid">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    to={`/news/${relatedPost.id}`} 
                    key={relatedPost.id}
                    className="related-card-link"
                  >
                    <div className="related-card">
                      <div className="related-image">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x200/cccccc/969696?text=News+Image';
                          }}
                        />
                      </div>
                      <div className="related-content">
                        <h4>{relatedPost.title}</h4>
                        <p>{relatedPost.body?.substring(0, 100)}...</p>
                        <div className="related-meta">
                          <span className="related-author">
                            <i className="icon-user"></i> {relatedPost.author}
                          </span>
                          <span className="related-date">
                            <i className="icon-calendar"></i> {relatedPost.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="no-related">{t('noRelatedStories')}</p>
            )}
          </div>

          {/* Navigation */}
          <div className="article-navigation">
            <Link to="/" className="back-home-btn">
              ← {t('backToHome')}
            </Link>
            {/* <div className="page-nav">
              <button className="nav-btn prev">
                ← {t('previous')}
              </button>
              <button className="nav-btn next">
                {t('next')} →
              </button>
            </div> */}
          </div>
        </article>
      </div>
    </>
  );
};

export default PostDetailPage;