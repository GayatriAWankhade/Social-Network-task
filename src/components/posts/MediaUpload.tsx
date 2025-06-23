import React from 'react';

interface MediaUploadProps {
  onFileSelect: (file: File | null) => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    } else {
      onFileSelect(null);
    }
  };

  return (
    <div className="relative">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        id="media-upload"
      />
      
      {/* Custom styled upload area */}
      <label 
        htmlFor="media-upload" 
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 group"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {/* Upload Icon */}
          <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
            <svg 
              className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
          
          {/* Upload Text */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
              Click to upload media
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF, MP4 up to 10MB
            </p>
          </div>
          
          {/* Media Type Icons */}
          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-1 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Image</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Video</span>
            </div>
          </div>
        </div>
      </label>
      
      {/* Alternative: Drag and Drop Text */}
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-400">
          or drag and drop files here
        </p>
      </div>
    </div>
  );
};

export default MediaUpload;