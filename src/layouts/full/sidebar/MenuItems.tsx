import {
  IconShoppingBag, IconLayoutDashboard, IconShieldLock, IconUser
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Menu',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Produk',
    icon: IconShoppingBag,
    href: '/produk-toko/produk',
  },

  {
    navlabel: true,
    subheader: 'Setting',
  },

  {
    id: uniqueId(),
    title: 'User Profile',
    icon: IconUser,
    href: '/profile/user-profile',
  },
  {
    id: uniqueId(),
    title: 'Ganti Password',
    icon: IconShieldLock,
    href: '/password/ganti-password',
  },
];

export default Menuitems;
