import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeadlineCard from '../Components/HeadlineCard';

const HeadlineList = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchHeadlines = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-08-23&to=2024-08-23&sortBy=popularity&apiKey=5545548686e54906932c5cae67ad7791`
      );
      
      const newHeadlines = response.data.articles;
      
      setHeadlines((prevHeadlines) => {
        const headlineUrls = new Set(prevHeadlines.map(h => h.url));
        const uniqueNewHeadlines = newHeadlines.filter(h => !headlineUrls.has(h.url));
        return [...prevHeadlines, ...uniqueNewHeadlines];
      });
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeadlines(page);
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        {headlines
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .map((headline) => (
            <div key={headline.url} className="col-12 mb-4">
              <HeadlineCard headline={headline} />
            </div>
        ))}
      </div>
      {loading && <p className="text-center text-muted">Loading...</p>}
    </div>
  );
};

export default HeadlineList;
