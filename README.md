# D3 force-directed-graph & vega-lite

## Run Project

### Step 1. Environment Requirement

- install node.js: [Node.js (nodejs.org)](https://nodejs.org/en)
- install Vite (the author uses npm): [Vite | 下一代的前端工具链 (vitejs.cn)](https://vitejs.cn/vite3-cn/)

### Step 2. Install Dependencies

```
npm install
```

### Step 3. Run in dev mode

```
npm run dev
```

- then access the `local url` in prompt

## Function Description

- Complete the visualization of the **numerical** configuration of the D3 force directed graph

  - You can have a quick view of almost all the API of D3's directed force graph over there.

    - Base on the official Documentation: https://d3js.org/d3-force

  - the params which can be set as a function is marked by \*

- embed the **Vega-Lite graph** in the circle of D3 force directed graph
  - you can click **circles** to toggle the display of Vega-Lite graphs
  - Note: add collision force will look better (which is not set by default config of project)

## 👻Play with Demo

This project has been deployed to github pages, you can play it over there: [online demo](https://pfcs33.github.io/customed-force-directed-graph/)
