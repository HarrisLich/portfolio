import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar></Navbar>
      <PageOne/>
    </div>
  );
}

export default App;
