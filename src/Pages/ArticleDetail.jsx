import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { url } = useParams();
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true);
  };

  if (iframeError) {
    window.location.href = decodeURIComponent(url); 
    return null;
  }

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <iframe
          src={decodeURIComponent(url)}
          title="Full Article"
          className="w-100 h-100 border-0"
          onError={handleIframeError} 
        ></iframe>
      </div>
    </div>
  );
};

export default ArticlePage;
