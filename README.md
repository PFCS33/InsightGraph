# D3 force-directed-graph & vega-lite

## 👻Play with Demo

This project has been deployed to github pages, you can play it over there: [online demo](https://pfcs33.github.io/customed-force-directed-graph/)

## Run Project

### Step 1. Environment Requirement

- Install node.js: [Node.js (nodejs.org)](https://nodejs.org/en)
- Install Vite (the author uses npm): [Vite | 下一代的前端工具链 (vitejs.cn)](https://vitejs.cn/vite3-cn/)

### Step 2. Install Dependencies

```
npm install
```

### Step 3. Run in Dev Mode

```
npm run dev
```

- Then access the `local url` in prompt

## Function Description

- ~~Complete the visualization of the **numerical** configuration of the D3 force directed graph~~
  - ~~You can have a quick view of almost all the API of D3's directed force graph over there~~
    - ~~Base on the Official Documentation: https://d3js.org/d3-force~~
    
  - ~~The params which can be set as a function is marked by \*~~
- Embed the **Vega-Lite graph** in the circle of D3 force directed graph
  - You can click **circles** to toggle the display of Vega-Lite graphs
  - three highlight mode: hover, click, select
  - add miniTable view to imply the position of vega-lite graph
  - support filter of link type/ insigh-type / insight score

## Todo

- Visualization of different states and relationships between states
