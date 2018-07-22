import home from './views/Home'
import gatherings from './views/Gatherings'
import contact from './views/Contact'
import login from './views/Login'
import singlegathering from './views/SingleGathering'
import register from './views/Register'
import notfound from './views/404'

export default [
  {path: '/', component: home},
  {path: '/gatherings', component: gatherings},
  {path: '/gatherings/:id', component: singlegathering},
  {path: '/next-gathering', component: singlegathering},
  {path: '/contact', component: contact},
  {path: '*', component: notfound},
  // {path: '/register', component: register},
  // {path: '/login', component: login}
]
