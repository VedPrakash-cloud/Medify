import NavBar from './component/home';
import { Outlet } from 'react-router-dom';
import QNA from './component/AskQuestion';
import DownloadApp from './component/AppStore';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App bg-blue-50">
      <NavBar />
      <Outlet />
      <QNA />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
