import React, { useMemo } from 'react';
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

  // Fetch all news for related articles - FIXED: removed language parameter
  const { 
    data: allNews, 
    isLoading: isLoadingNews 
  } = useGetNewsQuery({ page: 1, limit: 20 }); // Removed language parameter

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

  // Get 3 related posts (excluding current post)
  const relatedPosts = useMemo(() => {
    if (!allNews || !post) return [];
    
    const filteredNews = allNews.filter(news => news.id !== post.id);
    const shuffled = [...filteredNews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); 
  }, [allNews, post]);

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
        
        <div className="detail-layout">
          {/* Main Article Column - LEFT SIDE */}
          <main className="article-main">
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
                  loading="lazy"
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
                    aria-label={t('shareTwitter')}
                  >
                    <i className="icon-twitter"></i>
                  </button>
                  <button 
                    className="share-btn facebook"
                    onClick={shareOnFacebook}
                    title={t('shareFacebook')}
                    aria-label={t('shareFacebook')}
                  >
                    <i className="icon-facebook"></i>
                  </button>
                  <button 
                    className="share-btn linkedin"
                    onClick={shareOnLinkedIn}
                    title={t('shareLinkedIn')}
                    aria-label={t('shareLinkedIn')}
                  >
                    <i className="icon-linkedin"></i>
                  </button>
                  <button 
                    className="share-btn copy"
                    onClick={copyToClipboard}
                    title={t('copyLink')}
                    aria-label={t('copyLink')}
                  >
                    <i className="icon-link"></i>
                  </button>
                  <button 
                    className="share-btn whatsapp"
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                    title={t('shareWhatsApp')}
                    aria-label={t('shareWhatsApp')}
                  >
                    <i className="icon-whatsapp"></i>
                  </button>
                </div>
              </div>

              {/* Compact Author Info */}
              <div className="author-compact">
                <div className="author-avatar-small">
                  <div className="avatar-initial-small">
                    {post.author?.charAt(0) || 'A'}
                  </div>
                </div>
                <div className="author-info-small">
                  <h4>{post.author}</h4>
                  <p className="author-role">Senior News Writer</p>
                  <div className="author-stats">
                    <span className="author-stat">
                      <i className="icon-article"></i> 245 Articles
                    </span>
                    <span className="author-stat">
                      <i className="icon-followers"></i> 12K Followers
                    </span>
                  </div>
                </div>
                <button className="follow-btn">
                  <i className="icon-follow"></i> Follow
                </button>
              </div>

              {/* Navigation */}
              <div className="article-navigation">
                <Link to="/" className="back-home-btn">
                  ← {t('backToHome')}
                </Link>
              </div>
            </article>
          </main>

          {/* Sidebar Column - RIGHT SIDE with Related News */}
          <aside className="article-sidebar">
            {/* Related Articles Sidebar */}
            <div className="related-sidebar">
              <h3 className="sidebar-title">
                <i className="icon-related"></i> {t('relatedStories')}
              </h3>
              {isLoadingNews ? (
                <div className="related-sidebar-skeleton">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="sidebar-skeleton-card"></div>
                  ))}
                </div>
              ) : relatedPosts.length > 0 ? (
                <div className="related-sidebar-list">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      to={`/news/${relatedPost.id}`} 
                      key={relatedPost.id}
                      className="related-sidebar-item"
                    >
                      <div className="sidebar-item-image">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x200/cccccc/969696?text=News+Image';
                          }}
                          loading="lazy"
                        />
                      </div>
                      <div className="sidebar-item-content">
                        <h4>{relatedPost.title}</h4>
                        <div className="sidebar-item-meta">
                          <span className="sidebar-item-date">
                            <i className="icon-calendar"></i> {new Date(relatedPost.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="sidebar-item-readtime">
                            {Math.ceil((relatedPost.body?.split(/\s+/).length || 0) / 200)} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="no-related-sidebar">{t('noRelatedStories')}</p>
              )}
            </div>

            {/* Newsletter Subscription */}
            <div className="sidebar-newsletter">
              <h4 className="newsletter-title">
                <i className="icon-newsletter"></i> {t('stayUpdated')}
              </h4>
              <p className="newsletter-desc">{t('getLatestNews')}</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder={t('yourEmail')} 
                  className="newsletter-input"
                  aria-label={t('emailForNewsletter')}
                />
                <button type="submit" className="newsletter-btn">
                  {t('subscribe')}
                </button>
              </form>
            </div>

            {/* Trending Tags */}
            <div className="sidebar-tags">
              <h4 className="tags-title">
                <i className="icon-tags"></i> {t('trendingTags')}
              </h4>
              <div className="tags-list">
                <span className="tag-item">Technology</span>
                <span className="tag-item">Politics</span>
                <span className="tag-item">Business</span>
                <span className="tag-item">Sports</span>
                <span className="tag-item">Health</span>
                <span className="tag-item">Entertainment</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;