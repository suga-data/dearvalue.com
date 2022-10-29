
import SceneContent from './components/SceneContent';

// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import CookiePopup from './components/Cookies';
import Info from './components/Info'


const canvasStyle = {
  height: "100vh",
  width: "100vw"
}

function App() {
  // Scene();
  return (
    <>
      <CookiePopup/>
      <Info/>
      <div id="canvas-container" style={canvasStyle}>
        <Canvas>
          <SceneContent/>
        </Canvas>
      </div>
    </>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'))