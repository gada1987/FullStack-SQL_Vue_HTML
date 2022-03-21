const routes= [
    {path:'/befolkning',component:befolkning},
    {path:'/information',component:information}

]
const router = new VueRouter({
    routes
})
const app = new Vue({
    router
}).$mount('#app')