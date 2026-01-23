const ImagePlaceholder = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">{alt || 'Image Placeholder'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
