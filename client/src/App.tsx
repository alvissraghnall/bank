import { useState } from 'react';
import "./App.css";
import {Navbar} from './shared';
import { Hero } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white w-full overflow-hidden font-roboto'>
      <Navbar />
      <Hero />
      <div className="text-red-500">
        {/* ghfgdgf */}
      </div>
    </div>
  )
}

export default App;
