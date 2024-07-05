import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.css'; // Importing the CSS module
import profile from '../../assets/avatars/charles-bodwell-profile.png';
import Button from '../button';

// Import all icons
import ideationIconPurple from '../../assets/icons/filled/purple/ideation.png';
import productIconPurple from '../../assets/icons/filled/purple/product.png';
import marketingIconPurple from '../../assets/icons/filled/purple/marketing.png';
import financeIconPurple from '../../assets/icons/filled/purple/finance.png';
import logisticsIconPurple from '../../assets/icons/filled/purple/logistics.png';
import launchIconPurple from '../../assets/icons/filled/purple/launch.png';
import bplanIconPurple from '../../assets/icons/filled/purple/bplan.png';

import ideationIconWhite from '../../assets/icons/filled/white/ideation.png';
import productIconWhite from '../../assets/icons/filled/white/product.png';
import marketingIconWhite from '../../assets/icons/filled/white/marketing.png';
import financeIconWhite from '../../assets/icons/filled/white/finance.png';
import logisticsIconWhite from '../../assets/icons/filled/white/logistics.png';
import launchIconWhite from '../../assets/icons/filled/white/launch.png';
import bplanIconWhite from '../../assets/icons/filled/white/bplan.png';

// Create an object to map route names to icons
const icons = {
  ideation: { purple: ideationIconPurple, white: ideationIconWhite },
  product: { purple: productIconPurple, white: productIconWhite },
  marketing: { purple: marketingIconPurple, white: marketingIconWhite },
  finance: { purple: financeIconPurple, white: financeIconWhite },
  logistics: { purple: logisticsIconPurple, white: logisticsIconWhite },
  launch: { purple: launchIconPurple, white: launchIconWhite },
  bplan: { purple: bplanIconPurple, white: bplanIconWhite },
};

const menuItems = [
  { name: 'Ideation', path: '/ideation' },
  { name: 'Product', path: '/product' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Finance', path: '/finance' },
  { name: 'Logistics', path: '/logistics' },
  { name: 'Launch', path: '/launch' },
  { name: 'Bplan', path: '/bplan' },
];

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path);
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
            const iconType = item.path === activePath ? 'white' : 'purple';
            const iconPath = icons[item.name.toLowerCase()][iconType];
            return (
              <Button
                key={item.name}
                variant={variant}
                icon={iconPath}
                width="100%"
                size='default'
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
