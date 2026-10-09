import { Fish } from 'lucide-react';
import { useState } from 'react';

function SafeImage({ src, alt = '', name, className = '', width, height, loading = 'lazy', fetchPriority, ...props }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[#082B45] text-white ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
        aria-label={name || 'Seafood image'}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <Fish className="h-8 w-8 opacity-90" />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">{name || 'Seafood'}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}

export default SafeImage;
