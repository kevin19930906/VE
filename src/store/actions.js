import * as types from "./type"
const actions={
  showloading:({commit,state})=>{
    commit(types.SHOW_LOADING)
  },
  hideloading:({commit,state})=>{
    commit(types.HIDE_LOADING)
  },
  showhead:({commit,state})=>{
    commit(types.SHOW_HEAD)
  },
  hidehead:({commit,state})=>{
    commit(types.HIDE_HEAD)
  },
  showfoot:({commit,state})=>{
    commit(types.SHOW_FOOT)
  },
  hidefoot:({commit,state})=>{
    commit(types.HIDE_FOOT)
  },
  user:({commit,state},argus)=>{
    commit(types.USER,argus)
  },
  loginout:({commit,state})=>{
    commit(types.LOGIN_OUT)
  },
  objcart:({commit,state},argus)=>{
    commit(types.OBJ_CART,argus)
  }

};
export default actions;