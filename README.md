# D3 force-directed-graph & vega-lite

## 运行本项目

- 步骤
  - 安装 node.js: [Node.js (nodejs.org)](https://nodejs.org/en)
  - 安装 Vite (作者用的npm): [Vite | 下一代的前端工具链 (vitejs.cn)](https://vitejs.cn/vite3-cn/)

### 2. 项目依赖安装

```
npm install
```

### 3. 运行

```
npm run dev
```

- 成功后直接在浏览器进入local url即可

## 进度说明

- 完成力导向图 - base config 和 center force config 的可视化配置
- 初步完成 vega-lite 的svg 图与力导向图中结点的结合
  - 现在只在第一个点加了vega-lite画图数据，只能点demo中的那个点进行测试

## demo

![](./demo/demo1.gif)

## 项目文件结构

```bash
│  App.vue
│  main.js
│  router.js
│  style.css
│
├─assets
│      vue.svg
│
├─components
│  ├─force-directed-graph	#画热力图的组件，代码全在这里，其他全是debug/ui的
│  │      ForceDirectedGraph.vue
│  │
│  ├─ui
│  │      BaseButton.vue
│  │      BaseCard.vue
│  │
│  └─vega-lite-graph
│          BarChart.vue
│
├─pages
│      MainPage.vue	# 路由挂载的主页，导入力导向图组件
│      test.vue
│
└─store
    │  index.js
    │
    └─modules
            auth.js
            force.js
```

