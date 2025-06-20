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
    <input
      type="file"
      accept="image/*,video/*"
      onChange={handleFileChange}
      className="mt-2"
    />
  );
};

export default MediaUpload;
