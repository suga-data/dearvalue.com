
import SceneContent from './components/SceneContent';

// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
// import CookiePopup from './components/Cookies';
// import Info from './components/Info'
// import Link from './components/Link'
import './App.css'


const canvasStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "black"
}

function App() {
  // Scene();
  return (
    <div id='root'>
      {/* <CookiePopup/>
      <Info/> */}
      {/* <Link/> */}
      <div id="canvas-container" style={canvasStyle}>
        <Canvas>
          <SceneContent/>
        </Canvas>
      </div>
    </div>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'))

