# D3 force-directed-graph & vega-lite

![demo](./demo/demo.png)
## Run Project (Use Docker)

### Step 1. Install Docker & Docker-Compose

- Follow the Official Manual: https://docs.docker.com/get-docker/
  - Just install **docker desktop**, and docker-compose will be installed too


### Step 2. Pull our Docker image

- The docker image is pushed to the Docker Hub: [aaapfcs/insight-graph Tags | Docker Hub](https://hub.docker.com/r/aaapfcs/insight-graph/tags)
- After installing Docker, run the command below

```
docker pull aaapfcs/insight-graph:0.1
```

### Step 3. Run In the Container

- Download `docker-compose.yml` in this github repo, then run command:

```
docker-compose up  
```

- Then access the url: `http://localhost:8001` 

![run](./demo/run_project.jpg)



## Function Description

- Embed the **Vega-Lite graph** in the circle of D3 force directed graph
  - You can click **circles** to toggle the display of Vega-Lite graphs
  - three highlight mode: hover, click, select
  - add miniTable view to imply the position of vega-lite graph
  - support filter of link type/ insigh-type / insight score
  - support table headers' transformation

