import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/page/MainPage' // 라우트 컴포넌트를 import
import NovelPage from './components/page/NovelPage'
import AuthorPage from './components/page/AuthorPage'
import GenrePage from './components/page/GenrePage'
import SearchPage from './components/page/SearchPage'
import ResultPage from './components/page/ResultPage'
import SignIn from './components/page/SignIn'
import SignUp from './components/page/SignUp'
import MyPage from './components/page/MyPage'
import InfomationPage from './components/page/InfomationPage'
import BookMarkPage from './components/page/BookMarkPage'

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
      path: '/result',
      name: 'result',
      component: ResultPage,
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
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: InfomationPage,
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookMarkPage,
    },
  ],
})

export default router
