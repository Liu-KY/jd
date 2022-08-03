# WebApp项目总结

## 首页模块

1. 顶部广告
   - 使用了sessionstorage储存用户是否关闭广告，用户关闭广告后会储存，每次打开页面都会从sessionstorage中获取储存的信息 是否显示
2. 搜索框
   - 使用的是vant库中的搜索组件实现的 做了一个随机显示placeholder的效果 通过随机数截取数组中的元素
3. 轮播图
   - vant库中的轮播图组件实现的 封装的是可复用的组件，通过父组件传值动态显示需要展示的轮播图
4. 商品列表
   - 商品列表是手写的 做了触底加载，上拉刷新，使用vant库中的list模块实现，封装了一个可以复用的axions请求方法
5. 底部tabbat
   - 使用的也是vant库中的 里面的每一项都是使用数组遍历出来的，使用了插槽通信解决是否高亮

## 分类模块

1. 左侧商品分类
2. 右侧商品裂变

- 两个模块之间使用了vuex来做组件之间的通信，和数据缓存，当左边的点击后 传递一个商品类型发送actions请求 获取数据 然后纯到vuex里面，vuex是个对象k是商品类型v是商品列表，每次点击都会判断商品类型是否存在如果存在直接渲染不存在就发送请求达到数据缓存的目的

## 购物车

- 购物车主要是做了商品是否选中的判断，先在或去的商品列表中添加一条checked 根据后端给的添加时间判断是否超过24小时，没有超过的默认true，然后渲染商品选中，选中的就变更为true，使用的也是vuex做的，还用了vuex中的getters来判断是否全选 ，其中用的方法是数组some方法，然后做了提交和商品数量的增减都是通过vuex实现的，

## 我的

- 只是简单制作了一个退出登录按钮清除浏览器中储存的sessionstorage，

## 商品详情

- 通过路由传参得到商品id然后发送axions请求得到商品详细信息渲染出来
- 添加购物车，用商品id发送请求 携带用户token字段，添加购物车

## 登录判断

- 通过本地存储sessionstorage然后vuex获取
- 如果本地没有就提下线重新登录
- 如果发送请求时token错误则直接退出登录清除本地token和vuex中的数据

