import './SideMenu.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as ParrotIcon } from '../../assets/side-bar/Parrotv2.svg';
import { ReactComponent as EditorIcon } from '../../assets/side-bar/chess-board.svg';
import { ReactComponent as PlayIcon } from '../../assets/side-bar/chess-stopwatch.svg';
import { ReactComponent as PlayAiIcon } from '../../assets/side-bar/chess-aiv2.svg';
import { ReactComponent as SettingsIcon } from '../../assets/side-bar/settings.svg';
import ScreenSize from '../data/constants';

export default function SideMenu() {
  const [isDesktop, setDesktop] = useState(
    window.innerWidth > ScreenSize.large,
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth > ScreenSize.large);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  type MenuItem = {
    name: string;
    url: string;
    icon: any;
  };

  const items: MenuItem[] = [
    {
      name: 'Parrot chess',
      url: '/',
      icon: <ParrotIcon />,
    },
    {
      name: 'Editor',
      url: '/editor',
      icon: <EditorIcon />,
    },
    {
      name: 'Play',
      url: '/play',
      icon: <PlayIcon />,
    },
    {
      name: 'Play vs AI',
      url: '/play-ai',
      icon: <PlayAiIcon />,
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div className="side-menu">
      {items.map((item) => (
        <Link className="side-item-link" key={item.url} to={item.url}>
          <div className="side-item">
            <div className="side-item-icon">{item.icon}</div>
            {isDesktop && <span className="side-item-name">{item.name}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}
