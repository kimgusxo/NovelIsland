import { createRouter, createWebHistory } from 'vue-router'
import PageCarousel from './components/PageCarousel' // 라우트 컴포넌트를 import
import NovelPage from './components/NovelPage'
import AuthorPage from './components/AuthorPage'
import GenrePage from './components/GenrePage'
import SearchPage from './components/SearchPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageCarousel,
    },
    {
      path: '/novel',
      name: 'novel',
      component: NovelPage,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorPage,
    },
    {
      path: '/genre',
      name: 'genre',
      component: GenrePage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
})

export default router
