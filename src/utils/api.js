import instance from "./fetch";

export function fetchGoodList(params = {}) {
  return instance({
    url: "/api/v1/vant/good/list",
    method: "GET",
    params,
  });
}


// fetchGoodInfo
// fetchCates
export function  fetchGoodInfo(params={}){
  return instance ({
    url:'/api/v1/vant/good/info',
    method:'GET',
    params
  })  
}

export function fetchCates (){
  return instance ({
    url:'/api/v1/vant/good/cates',
    method:'GET',
  })
}


// 注册
export function fetchRegist (data) {
  return instance({
    url:'/api/v1/vant/user/regist',
    method:'POST',
    data
  })
}

// 登录fetchLogin 
export function fetchLogin (data){
  return instance({
    url:'/api/v1/vant/user/login',
    method:'POST',
    data
  })
}


// 添加购物车fetchCartAdd 
export function fetchCartAdd(data){
  return instance({
    url:'/api/v1/vant/cart/add',
    method:'POST',
    data
  })
}


// 获取我的购物车列表fetchCartList
export function fetchCartList(params={}){
  return instance({
    url:'/api/v1/vant/cart/list',
    method:'GET',
    params
  })

}


// 删除一条购物车商品 fetchCartDel 
export function fetchCartDel(params={}){
  return instance({
    url:'/api/v1/vant/cart/delete',
    method:'GET',
    params
  })
}


// 提交购物车fetchCartSubmit
export function fetchCartSubmit (data){
  return instance({
    url:'/api/v1/vant/cart/submit',
    method:'POST',
    data
  })
}


export function fetchCardUpd(params){
  return instance({
    url:'/api/v1/vant/cart/update',
    method:'GET',
    params
  })
}