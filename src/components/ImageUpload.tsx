import { useState } from 'react';

import { uploadButton } from '../styles/style.css';
import { stack } from '../styles/recipes.css';

export const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) {
      return;
    }
    const [newFile] = ev.target.files;
    setUploadedImage(newFile);
  };

  return (
    <section
      style={{
        width: 'min(90%, 500px',
        marginInline: 'auto',
        marginBottom: '10vh',
      }}
      className={stack()}>
      <h2>Upload and preview an image:</h2>
      <form
        action=""
        className={stack({ align: 'stretch' })}
        style={{ padding: '5vh', outline: '1px solid grey', width: '100%' }}>
        <label htmlFor="imgUpload">Upload an image</label>
        <input type="file" className={uploadButton} onChange={handleUpload} />
      </form>
      <img src={uploadedImage ? URL.createObjectURL(uploadedImage) : ''} />
    </section>
  );
};
