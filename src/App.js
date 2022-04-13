import './App.css';
import { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { getImage } from './services/images';

function App() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImage();
      setImage(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <h2>loading</h2>;
  }

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button onClick={image}>Upload Image</button>

      <Image cloudName="dumtya5g3" publicId="" />
    </div>
  );
}

export default App;
