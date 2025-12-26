// views/components/news/NewsCardView.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { getTranslation } from '../../../utils/translations';
import '../../../styles/news.css'; 

// interface Props {
//   news: any; 
// }

interface Props {
  news: {
    id: number;
    title: string;
    body: string;
    image: string;
    author: string;
    date: string;
  };
}

const NewsCardView: React.FC<Props> = ({ news }) => {
  const language = useSelector((state: RootState) => state.language.current);
  const t = getTranslation(language);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://placehold.co/400x300/cccccc/969696?text=News+Image';
  };

  return (
    <Link to={`/news/${news.id}`} className="news-card-link">
      <div className="news-card">
        <div className="image-container">
          <img 
            src={news.image} 
            alt={news.title}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        
        <div className="content">
          <h3>{news.title}</h3>
          <p>{news.body?.substring(0, 100)}...</p>
          
          <div className="footer">
            <span className="author">
              {t('by')} {news.author} · {news.date}
            </span>
            <span className="tag">{t('readMore')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCardView;