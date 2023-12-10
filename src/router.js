import ShrirangSapate from './components/ShrirangSapate.vue'
import AboutPage from './components/About.vue'
// import QuestionPage from './components/Question.vue'
import StatsPage from './components/Stats.vue'
import AnswerPageOne from './components/AnswerPageOne.vue'
import AnswerPageTwo from './components/AnswerPageTwo.vue'
import AnswerPageThree from './components/AnswerPageThree.vue'
import AnswerPageFour from './components/AnswerPageFour.vue'
import AnswerPageFive from './components/AnswerPageFive.vue'
import AnswerPageSix from './components/AnswerPageSix.vue'
import AnswerPageSeven from './components/AnswerPageSeven.vue'
import AnswerPageEight from './components/AnswerPageEight.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'ShrirangSapate',
        component: ShrirangSapate,
        path: '/shrirang-sapate/:section?'
    },
    {
        name:'About',
        component: AboutPage,
        path: '/'
    },
    
    {
        name:'Stats',
        component:StatsPage,
        path: '/stats'
    },
    {
        name:'Answer1',
        component:AnswerPageOne,
        path: '/1'
    },
    {
        name:'Answer2',
        component:AnswerPageTwo,
        path: '/2'
    },
    {
        name:'Answer3',
        component:AnswerPageThree,
        path: '/3'
    },
    {
        name:'Answer4',
        component:AnswerPageFour,
        path: '/4'
    },
    {
        name:'Answer5',
        component:AnswerPageFive,
        path: '/5'
    },
    {
        name:'Answer6',
        component:AnswerPageSix,
        path: '/6'
    },
    {
        name:'Answer7',
        component:AnswerPageSeven,
        path: '/7'
    },
    {
        name:'Answer8',
        component:AnswerPageEight,
        path: '/8'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router