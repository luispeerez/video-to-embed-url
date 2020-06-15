import React,{useCallback, useState, ChangeEvent} from 'react';
import youtubeTransform from './services/youtube'
import './App.css';

function App() {
  const [url, setUrl]: [string, Function] = useState('')
  const [embedUrl, setEmbedUrl]: [string, Function] = useState('')

  const handleOnChangeUrl = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const {target: {value}} = event
    setUrl(value)
  }, [setUrl])

  const handleConvert = useCallback(() =>{
    setEmbedUrl(youtubeTransform(url))
  },[url, setEmbedUrl])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video url to embed url</h1>
        <p>Youtube, Facebook, Vimeo</p>
        
        <p><input type="text" className="url-input" placeholder="Enter your video url here." onChange={handleOnChangeUrl} value={url} /></p>
        <p><button className="submit-btn" onClick={handleConvert}>Get embed url</button></p>
        {embedUrl &&
          <div>
            <h2>Your embed url:</h2>
            <p>{embedUrl}</p>
          </div>
        }


        <p className="github-buttons">
          <a className="github-button" href="https://github.com/luispeerez/video-to-embed-url" data-size="large" data-show-count="true" aria-label="Star luispeerez/video-to-embed-url on GitHub">Star</a>
          <a className="github-button" href="https://github.com/luispeerez/video-to-embed-url/subscription" data-size="large" data-show-count="true" aria-label="Watch luispeerez/video-to-embed-url on GitHub">Watch</a>
          <a className="github-button" href="https://github.com/luispeerez/video-to-embed-url/issues" data-size="large" data-show-count="true" aria-label="Issue luispeerez/video-to-embed-url on GitHub">Issue</a>
        </p>

      </header>
    </div>
  );
}

export default App;
