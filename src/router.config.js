import home from "./components/home.vue"
import syqie1 from "./components/syqie1.vue"
import syqie2 from "./components/syqie2.vue"
import syqie3 from "./components/syqie3.vue"
import syqie4 from "./components/syqie4.vue"
import ssjg2 from "./components/ssjg2.vue"
import ssjg3 from "./components/ssjg3.vue"
import shoppingcart from "./components/shoppingcart.vue"
import login from "./components/login.vue"
import reg from "./components/reg.vue"
import scmj from "./components/scmj.vue"
import fbsd from "./components/fbsd.vue"
import user from "./components/user.vue"
import detail from "./components/detail.vue"

var routes=[
  { path:"/home",
    component:home,
    children:[
      {path:"syqie1",component:syqie1},
      {path:"syqie2",component:syqie2},
      {path:"syqie3",component:syqie3},
      {path:"syqie4",component:syqie4},
      {path:"/",redirect:"syqie1"},
    ]
  },
  {path:"/ssjg2",component:ssjg2},
  {path:"/ssjg3",component:ssjg3},
  {path:"/shoppingcart",component:shoppingcart},
  {path:"/login",component:login},
  {path:"/reg",component:reg},
  {path:"/spxqul21",component:scmj},
  {path:"/fbsd",component:fbsd},
  {path:"/user",component:user},
  {path:"/detail/:id",component:detail},

  {path:"/",redirect:"/home"}
  ];

export default routes;




