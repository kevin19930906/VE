import * as types from "./type"
const mutations={
  [types.SHOW_LOADING]:(state)=>{
    state.bloading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bloading=false;
  },
  [types.SHOW_HEAD]:(state)=>{
    state.bhead=true;
  },
  [types.HIDE_HEAD]:(state)=>{
    state.bhead=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.bfoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bfoot=false;
  },
  [types.USER]:(state,argus)=>{
    state.users=argus;
  },
  [types.LOGIN_OUT]:(state)=>{
    state.users="";
  },
  [types.OBJ_CART]:(state,argus)=>{
    state.users.cart=argus;
  }
};
export default mutations;