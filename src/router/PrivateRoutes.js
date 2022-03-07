// Import Modules

const user = () => import('@/modules/Admin/Users/indexUser');
const admhomepage = () => import('@/modules/Admin/Homepage/indexHomepage-add');




export default [

   

    //admin-user
  
    {
      path: '/admin/user',
      component: user,
      name: 'user',
      meta: {

        breadCrumb: [{ name: 'User', link: 'user' }],
      },
    },

    //admin-homepage

    {
      path: '/admin/admhomepage',
      component: admhomepage,
      name: 'admhomepage',
      meta: {

        breadCrumb: [{name: 'Admhomepage', link:'admhomepage'}],
      }
    }



];
