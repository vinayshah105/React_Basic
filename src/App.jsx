import Header from './component/Header';
import CoreConcepts from './component/CoreConcepts.jsx';
import Examples from './component/Examples.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
