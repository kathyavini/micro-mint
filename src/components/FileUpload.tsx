import { uploadButton } from '../styles/style.css';
import { stack } from '../styles/recipes.css';

interface FileUploadProps {
  setCsvData: React.Dispatch<React.SetStateAction<File | null>>;
}

export const FileUpload = ({ setCsvData }: FileUploadProps) => {
  const handleUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) {
      return;
    }

    const [newFile] = ev.target.files;
    setCsvData(newFile);
  };

  return (
    <>
      <h2>Upload CSV file here</h2>
      <form
        action=""
        className={stack({ align: 'stretch' })}
        style={{
          padding: '5vh',
          outline: '1px solid grey',
          width: '100%',
        }}>
        <label htmlFor="fileUpload">Upload the CSV formatted statement</label>
        <input
          id="fileUpload"
          type="file"
          accept=".csv,.txt"
          className={uploadButton}
          onChange={handleUpload}
        />
      </form>
    </>
  );
};
