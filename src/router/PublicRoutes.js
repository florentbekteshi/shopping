const homepage = () => import('@/modules/Homepage/indexHomepage');
const singleproject = () => import('@/modules/Singleproject/indexSingleproject');
const login = () => import('@/modules/Login/indexLogin');



export default [

  //homepage
  {
    path: '/',
    redirect: '/homepage'
  },

  //homepage
  {
    path: '/homepage',
    component: homepage,
    name: 'homepage',
    meta: {

      breadCrumb: [{ name: 'Homepage', link: 'homepage' }],
    },
  },

  //singleproject
  {
    path: '/singleproject/:name',
    component: singleproject,
    name: 'singleproject',
    meta: {
      breadCrumb: [{ name: 'Singleproject', link: 'singleproject' }],
    },
  },

  //login
  {
    path: '/login',
    component: login,
    name: 'login',
    meta: {

      breadCrumb: [{ name: 'Login', link: 'login' }],
    },
  },

]