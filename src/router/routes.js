
const routes = [
  {
    path: '/:id/',
    component: () => import('layouts/MainIndex.vue'),
    children: [
      { path: '', component: () => import('pages/NewIndex.vue') }
    ]
  },

  // {
  //   path: '/:id/recommendations',    
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:'recommendations', component: () => import('pages/Recommendations.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/homeInformation',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:'homeInformation', component: () => import('pages/HomeInformation.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/houseRules',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:'houseRules', component: () => import('pages/HouseRules.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/attractions',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:'attractions', component: () => import('pages/Attractions.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/tours',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:"tours", component: () => import('pages/Tours.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/details',
  //   component: () => import('layouts/MainIndex.vue'),
  //   children: [
  //     { path: '', name:"details", component: () => import('pages/Details.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/homeInformation/:title',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Test.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/tours/id',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', name:'tour', component: () => import('pages/Tour.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/recommendations/party',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Test.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/prueba',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/prueba.vue') }
  //   ]
  // },

  // {
  //   path: '/:id/nuevo',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/mobile/InformationDetails.vue') }
  //   ]
  // },
  // Nuevas

  {
    path: '/:id/recommendations',    
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'recommendations', component: () => import('pages/mobile/Recommendations.vue') }
    ]
  },

  {
    path: '/:id/homeInformation',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'homeInformation', component: () => import('pages/mobile/HomeInformation.vue') }
    ]
  },

  {
    path: '/:id/homeInformation/:title',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mobile/InformationDetails.vue') }
    ]
  },

  {
    path: '/:id/attractions',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'attractions', component: () => import('pages/mobile/Attractions.vue') }
    ]
  },

  {
    path: '/:id/tours',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:"tours", component: () => import('pages/mobile/Tours.vue') }
    ]
  },

  {
    path: '/:id/details',
    component: () => import('layouts/MainIndex.vue'),
    children: [
      { path: '', name:"details", component: () => import('pages/Details.vue') }
    ]
  },

  {
    path: '/:id/tours/id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'tour', component: () => import('pages/Tour.vue') }
    ]
  },

  {
    path: '/:id/store',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Store.vue') }
    ]
  },

  {
    path: '/:id/nuevaInformation',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mobile/HomeInformation.vue') }
    ]
  },

  {
    path: '/:id/recommendations/:idCategoria',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',  component: () => import('pages/mobile/Meals.vue') }
    ]
  },

  {
    path: '/:id/meals/:idMeal',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Meal', component: () => import('pages/mobile/Meal.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
