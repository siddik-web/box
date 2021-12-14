
import './App.css';
import videoLink from './lake.mp4';
function App() {
  return (
    <div className="App">
  
      <video controls={false} style={BGstyle} preload="true" autoPlay muted loop width="100%" height="auto">
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

var BGstyle = {
  position: "absolute",
  zIndex:999,
  right:0,
  bottom:0,
  minWidth:'100%',
  width: 'auto',
  backgroundSize:"cover"
}
export default App;
