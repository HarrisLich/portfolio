import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import Navbar from './components/Navbar';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar></Navbar>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
    </div>
  );
}

export default App;
