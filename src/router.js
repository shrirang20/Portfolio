import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'
import QuestionPage from './components/Question.vue'
import AnswerPageOne from './components/AnswerPageOne.vue'
import StatsPage from './components/Stats.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'Home',
        component: HomePage,
        path: '/'
    },
    {
        name:'About',
        component: AboutPage,
        path: '/about'
    },
    {
        name:'Question',
        component: QuestionPage,
        path: '/about/:id'
    },
    {
        name:'Stats',
        component:StatsPage,
        path: '/stats'
    },
    {
        name:'Answer1',
        component:AnswerPageOne,
        path: '/answer/1'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router