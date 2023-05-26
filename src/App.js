import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Home } from './components/Home';
import { DifRevOrden1 } from './components/Velocidad/DifRevOrden1';
import { DifRevOrden2 } from './components/Velocidad/DifRevOrden2';
import { Navbar } from './components/Navbar';

import { IntRevOrden1 } from './components/Velocidad/IntRevOrden1'; 
import { IntRevOrden2 } from './components/Velocidad/IntRevOrden2'; 
import { IntIrrevOrd0 } from './components/Velocidad/IntIrrevOrd0'; 
import { IntIrrevOrd1_2 } from './components/Velocidad/IntIrrevOrd1_2'; 
import { IntIrrevOrd1 } from './components/Velocidad/IntIrrevOrd1'; 
import { IntIrrevOrd3_2 } from './components/Velocidad/IntIrrevOrd3_2'; 
import { IntIrrevOrd2 } from './components/Velocidad/IntIrrevOrd2'; 
import { IntIrrevOrd5_2 } from './components/Velocidad/IntIrrevOrd5_2'; 
import { IntIrrevOrd3 } from './components/Velocidad/IntIrrevOrd3'; 
import { DifIrrevOrd0 } from './components/Velocidad/DifIrrevOrd0'; 
import { DifIrrevOrd1_2 } from './components/Velocidad/DifIrrevOrd1_2'; 
import { DifIrrevOrd1 } from './components/Velocidad/DifIrrevOrd1'; 
import { DifIrrevOrd3_2 } from './components/Velocidad/DifIrrevOrd3_2'; 
import { DifIrrevOrd2 } from './components/Velocidad/DifIrrevOrd2'; 
import { DifIrrevOrd5_2 } from './components/Velocidad/DifIrrevOrd5_2'; 
import { DifIrrevOrd3 } from './components/Velocidad/DifIrrevOrd3';
import { BATCH } from './components/Reactores/BATCH';
import { RTCADensidad } from './components/Reactores/RTCADensidad';
import { RTCAOrden1 } from './components/Reactores/RTCAOrden1';
import { RTFPOrd1Tip1 } from './components/Reactores/RTFPOrd1Tip1';
import { RTFPOrd1Tip2 } from './components/Reactores/RTFPOrd1Tip2';
import { RTFPOrd1Tip3 } from './components/Reactores/RTFPOrd1Tip3';
import { RTFPOrd1Tip4 } from './components/Reactores/RTFPOrd1Tip4';
import { EnSerie1 } from './components/Reactores/EnSerie1';
import { EnSerie2 } from './components/Reactores/EnSerie2';

function App() {
  return (
    <div className='App container-fluid'>
      <div className=''>
        <div className='row justify-content-center min-vh-100'>
          <div className='col'><Navbar /></div>
          <div className='col-8'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='deployTest' element={<Home />}/>
              <Route path='DifRevOrden1' element={<DifRevOrden1 />}/>
              <Route path='DifRevOrden2' element={<DifRevOrden2 />}/>
              <Route path='IntRevOrden1' element={<IntRevOrden1 />}/>
              <Route path='IntRevOrden2' element={<IntRevOrden2 />}/>
              <Route path='IntIrrevOrd0' element={<IntIrrevOrd0 />}/>
              <Route path='IntIrrevOrd1_2' element={<IntIrrevOrd1_2 />}/>
              <Route path='IntIrrevOrd1' element={<IntIrrevOrd1 />}/>
              <Route path='IntIrrevOrd3_2' element={<IntIrrevOrd3_2 />}/>
              <Route path='IntIrrevOrd2' element={<IntIrrevOrd2 />}/>
              <Route path='IntIrrevOrd5_2' element={<IntIrrevOrd5_2 />}/>
              <Route path='IntIrrevOrd3' element={<IntIrrevOrd3 />}/>
              <Route path='DifIrrevOrd0' element={<DifIrrevOrd0 />}/>
              <Route path='DifIrrevOrd1_2' element={<DifIrrevOrd1_2 />}/>
              <Route path='DifIrrevOrd1' element={<DifIrrevOrd1 />}/>
              <Route path='DifIrrevOrd3_2' element={<DifIrrevOrd3_2 />}/>
              <Route path='DifIrrevOrd2' element={<DifIrrevOrd2 />}/>
              <Route path='DifIrrevOrd5_2' element={<DifIrrevOrd5_2 />}/>
              <Route path='DifIrrevOrd3' element={<DifIrrevOrd3 />}/>

              <Route path='BATCH' element={<BATCH />}/>
              <Route path='RTCADensidad' element={<RTCADensidad />}/>
              <Route path='RTCAOrden1' element={<RTCAOrden1 />}/>
              <Route path='RTFPOrd1Tip1' element={<RTFPOrd1Tip1 />}/>
              <Route path='RTFPOrd1Tip2' element={<RTFPOrd1Tip2 />}/>
              <Route path='RTFPOrd1Tip3' element={<RTFPOrd1Tip3 />}/>
              <Route path='RTFPOrd1Tip4' element={<RTFPOrd1Tip4 />}/>
              <Route path='EnSerie1' element={<EnSerie1 />}/>
              <Route path='EnSerie2' element={<EnSerie2 />}/>

             </Routes>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
