# 1T3

## PHP
Part of the project runs with PHP and CRON jobs. This code is available on the website.


## Project setup - without Docker
```
https://nodejs.org/en/download/
```

### Install Vue CLI
```
npm install -g @vue/cli @vue/cli-service-global
```

### Installs all packages (Node 16 required)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


## Project setup - with Docker
```
https://www.docker.com/get-started
```

### Builds docker container
```
docker-compose build
```

### Installs npm packages
```
docker-compose run node npm i
```

### Starts container and starts application
```
docker-compose up
```

### Access container
```
docker exec -it 1_thee_3 /bin/sh
```

## Usage

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### For documentation Vue and Bootstrap Vue
```
https://vuejs.org/v2/guide/
https://bootstrap-vue.org/docs/
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
