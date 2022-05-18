import './App.css';
import Map from "./components/map/Map"

import CategoriesBar from "./components/categories/CategoriesBar"

function App() {
  return (
    <div className="container">
     <CategoriesBar/>
     <Map />
     </div>
   
  );
}

export default App;
