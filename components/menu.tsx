import { use } from 'react';
import { headers } from 'next/headers';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

import styles from './ui.module.scss';
import Link from 'next/link';

type MenuItem = {
  name: string;
  href: string;
  className?: string;
};

const menuItems = [
  { name: 'Wanna Wanna', href: '/', className: styles.menu__item_logo },
  { name: 'Blog', href: '/blog' },
  { name: 'All features', href: '/features' },
  { name: 'Sign up for the beta', href: '/beta' },
];

interface MenuProps {
  current?: string | null;
}

export default function Menu({ current }: MenuProps) {
  const path = use(headers()).get('x-current-path');

  function getClassName(item: MenuItem) {
    const classes = [styles.menu__item];
    if (item.href === (current || path)) {
      classes.push(styles.menu__item_active);
    }
    if (item.className) {
      classes.push(item.className);
    }
    return classes.join(' ');
  }

  return (
    <NavigationMenu className={styles.menu}>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.href === (current || path) ? (
              <div className={getClassName(item)}>{item.name}</div>
            ) : (
              <Link className={getClassName(item)} href={item.href}>
                {item.name}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
