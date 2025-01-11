import React from 'react';

interface ResponsiveVideoProps {
  src: string;
  poster?: string;
  title?: string;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ src, poster, title = 'Video' }) => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video
          className="video-player"
          controls
          preload="metadata"
          playsInline
          poster={poster}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          {/* WebM format for broader compatibility */}
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          {/* Fallback content */}
          <div className="video-fallback">
            <p>
              Your browser doesn't support HTML5 video. Here is a{' '}
              <a href={src} download>
                link to the video
              </a>{' '}
              instead.
            </p>
          </div>
        </video>
      </div>
    </div>
  );
};

export default ResponsiveVideo;