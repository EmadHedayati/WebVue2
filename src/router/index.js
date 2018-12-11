import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/HomePage'
import TeamPage from '../components/pages/TeamPage'
import PlayerPage from '../components/pages/PlayerPage'
import LeagueListPage from '../components/pages/LeagueListPage'
import LeaguePage from '../components/pages/LeaguePage'
import NewsPage from '../components/pages/NewsPage'
import MatchPage from '../components/pages/MatchPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/team/:id',
    component: TeamPage,
    name: 'team',
    props: true
  },
  {
    path: '/player/:id',
    component: PlayerPage,
    name: 'player',
    props: true
  },
  {
    path: '/league-list',
    component: LeagueListPage,
    name: 'leagueList',
    props: true
  },
  {
    path: '/league/:id',
    component: LeaguePage,
    name: 'league',
    props: true
  },
  {
    path: '/news/:id',
    component: NewsPage,
    name: 'news',
    props: true
  },
  {
    path: '/match/:id',
    component: MatchPage,
    name: 'match',
    props: true
  },
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
