<template>
  <div id="app">
    <loading v-show="getloading"></loading>
    <qtop v-show="gethead"></qtop>
    <qtitle v-show="gethead"></qtitle>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <syfanhui></syfanhui>
    <quanbufoot v-show="getfoot"></quanbufoot>

  </div>
</template>

<script>
  import qtop from "./components/qtop.vue"
  import qtitle from "./components/qtitle.vue"
  import home from "./components/home.vue"
  import syfanhui from "./components/syfanhui.vue"
  import quanbufoot from "./components/quanbufoot.vue"
  import {mapGetters} from "vuex";
export default {
  name: 'app',
  data () {
    return {
      msg: "",
      user:""
    }
  },
  components:{
    qtop,qtitle,syfanhui,quanbufoot
  },
  computed:mapGetters([
    'gethead','getfoot',"getloading","getusers"
  ]),
  mounted(){
    this.changePath(this.$route.path)
  },
  methods:{
    addCart(id) {
      this.$http({
        method: "post",
        url: "http://localhost:3000/addCart",
        data: {
          id: id,
          username: this.getusers.username,
          sum: 1
        }
      }).then((res) => {
        this.$store.dispatch("objcart", res.data);
      }).catch((res) => {
        throw new Error();
      })
    },
    changePath(path){
      if(/home|ssjg2|ssjg3/.test(path)){
        this.$store.dispatch("showhead");
        this.$store.dispatch("showfoot")
      }
      if(/spxqul21|user/.test(path)){
        this.$store.dispatch("hidehead");
        this.$store.dispatch("showfoot")
      }
      if(/fbsd|shoppingcart|login|reg|detail/.test(path)){
        this.$store.dispatch("hidehead");
        this.$store.dispatch("hidefoot")
      }
    },
    autoLoad(auto){
      if(!auto){
        this.$http({
          method:"post",
          url:"http://localhost:3000/auto"
        }).then((res)=>{
          if(res.data.length!=0){
            this.$store.dispatch("user",res.data[0]);
            this.user=res.data[0].username
          }else{
            this.$router.replace({path:"/login"})
          }
        }).catch((res)=>{
          throw new Error();
        })
      }else{
        this.user=this.getusers.username;
      }
    }
  },
  watch:{
    $route(to){
      this.changePath(to.path)
    }
  },
  created(){
    this.autoLoad()
  }


}
</script>

<style>

</style>
