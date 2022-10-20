
import SceneContent from './components/SceneContent';

// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'


const canvasStyle = {
  height: "100vh",
  width: "100vw"
}

function App() {
  // Scene();
  return (
    <div id="canvas-container" style={canvasStyle}>
      <Canvas>
        <SceneContent/>
      </Canvas>
    </div>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'))