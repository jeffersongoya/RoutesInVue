import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Cursos from './views/Cursos.vue'
import descr from './views/CursoDescricao'
import Aulinhas from './views/CursoAulas'
// import Home from './views/Home.vue'
// import Cursos from './views/Cursos.vue'
// import Curso from './views/Curso.vue'
// import CursoAulas from './views/CursoAulas.vue'
// import CursoDescricao from './views/CursoDescricao.vue'


Vue.use (Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path: "/", component: Home
        },
        {
            path: "/cursos/", component: Cursos
        },
        {
            path: "/cursos/:dinamic",
             component: Cursos,
             props:true
        },
        {
            path: "/descricao", component: descr
        },
        {
            path: '/aulinhas', component: Aulinhas
        }

        // {
        //     path: "/", component: Home
        // },
        // { 
        //     path: '/cursos/',
        //     component: Cursos,
        //     props: true,
        //     children:[
        //         { 
        //             path: ':curso',
        //             component: Curso,
        //             props: true,
        //             children:[
        //                 {   name:'aulas',
        //                     path:"aulas",
        //                     component:CursoAulas
        //                 },
        //                 {   name:"descricao",
        //                     path:"descricao",
        //                     component:CursoDescricao
        //                 }
        //     ]
        //          }
        //     ]

        //  },
     
    ]
})