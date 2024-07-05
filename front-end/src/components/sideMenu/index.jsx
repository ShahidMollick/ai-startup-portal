import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './index.module.css'; // Importing the CSS module
import profile from '../../assets/avatars/charles-bodwell-profile.png';
import ideationIcon from '../../assets/icons/ideation.png';
import ideationPurpleIcon from '../../assets/icons/ideation-purple.png';
import Button from '../button';

const menuItems = [
  { name: 'Ideation', path: '/ideation', icon: ideationPurpleIcon },
  { name: 'Product', path: '/product', icon: ideationIcon },
  { name: 'Marketing', path: '/marketing', icon: ideationPurpleIcon },
  { name: 'Finance', path: '/finance', icon: ideationPurpleIcon },
  { name: 'Logistics', path: '/logistics', icon: ideationPurpleIcon },
  { name: 'Launch', path: '/launch', icon: ideationPurpleIcon },
  { name: 'Business Plan', path: '/bplan', icon: ideationPurpleIcon },
];

const SideMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setActivePath(path);
    history.push(path);
  };

  return (
    <div className={styles.sideMenu}>
      <div className={styles.menuTop}>
        <div className={styles.logo}>
          <h2>Business advisor</h2>
        </div>
        <div className={styles.menu}>
          {menuItems.map((item, index) => {
            let variant = 'ghost';
            if (item.path === activePath) {
              variant = 'primary';
            } else if (index < menuItems.findIndex((i) => i.path === activePath)) {
              variant = 'secondary';
            }
            return (
              <Button
                key={item.name}
                variant={variant}
                icon={item.icon}
                width="100%"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
      </div>
      <div className={styles.profile}>
        <img src={profile} alt="Charles Bodwell" />
        <div className={styles.profileInfo}>
          <span>Charles Bodwell</span>
          <span>AI Startup founder</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
