import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/page/MainPage' // 라우트 컴포넌트를 import
import NovelPage from './components/page/NovelPage'
import AuthorPage from './components/page/AuthorPage'
import GenrePage from './components/page/GenrePage'
import SearchPage from './components/page/SearchPage'
import SignIn from './components/page/SignIn'
import SignUp from './components/page/SignUp'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
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
