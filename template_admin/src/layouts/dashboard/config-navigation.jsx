import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Member',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Staff',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Manager',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Auction',
    path: '/products',
    icon: icon('ic_cart'),
  }
];

export default navConfig;
