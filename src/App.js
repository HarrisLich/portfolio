import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import Navbar from './components/Navbar';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar></Navbar>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
    </div>
  );
}

export default App;
