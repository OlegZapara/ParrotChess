import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import SideMenu from '../components/SideMenu';
import HomePage from '../pages/Home/HomePage';
import EditorPage from '../pages/Editor/EditorPage';
import PlayPage from '../pages/Play/PlayPage';
import PlayAiPage from '../pages/PlayAiPage/PlayAiPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import { store } from '../main/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <SideMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/play-ai" element={<PlayAiPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
