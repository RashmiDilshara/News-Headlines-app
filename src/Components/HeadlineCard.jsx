import React from 'react';
import { Link } from 'react-router-dom';

const HeadlineCard = ({ headline }) => {
  const defaultImage = 'https://via.placeholder.com/300';

  return (
    <div className="card mb-4 shadow-sm" style={{ maxWidth: '540px', margin: 'auto' }}>
      <img
        className="card-img-top"
        src={headline.urlToImage || defaultImage}
        alt={headline.title}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{headline.title}</h5>
        <p className="card-text"><strong>Source:</strong> {headline.source.name}</p>
        <p className="card-text"><strong>Author:</strong> {headline.author || 'Unknown'}</p>
        <p className="card-text"><strong>Date:</strong> {new Date(headline.publishedAt).toLocaleDateString()}</p>
        <p className="card-text">{headline.description}</p>
        <Link to={`/article/${encodeURIComponent(headline.url)}`} className="btn btn-primary">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HeadlineCard;
