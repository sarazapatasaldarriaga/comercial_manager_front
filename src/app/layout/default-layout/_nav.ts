import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Products',
    url: '/products',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Sale',
    url: '/sale',
    iconComponent: { name: 'cil-drop' }
  }
];
