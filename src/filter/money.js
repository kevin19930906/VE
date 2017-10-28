export const money=(ipt,currency="￥",digit=2)=>{
  return currency+"  "+ Number(ipt).toFixed(digit);
};