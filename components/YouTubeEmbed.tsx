import React, { useState, useEffect } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  autoplay?: boolean;
  controls?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  aspectRatio = '16:9',
  autoplay = false,
  controls = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const container = document.getElementById(`youtube-container-${videoId}`);
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, [videoId]);

  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case '4:3':
        return 'pb-[75%]';
      case '1:1':
        return 'pb-[100%]';
      default:
        return 'pb-[56.25%]'; // 16:9
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError('Failed to load video. Please try again later.');
    setIsLoading(false);
  };

  return (
    <div 
      id={`youtube-container-${videoId}`}
      className="w-full max-w-4xl mx-auto my-4"
    >
      <div className={`relative w-full ${getAspectRatioPadding()}`}>
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50 text-red-600 p-4">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            {hasIntersected && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                  autoplay ? 1 : 0
                }&controls=${controls ? 1 : 0}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;