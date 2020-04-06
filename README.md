# simple-nodejs

a simple web server

This server implements a health check for the Target Groups created by Typhoon (https://typhoon.psdn.io/). It responds to `/healthz`.

## Build Image

```bash
docker build -t simple-nodejs:0.0.2 .
```

### Run Container

```bash
docker run --name healthz-server -d -p 10254:10254 simple-nodejs:0.0.2
docker stop healthz-server
docker rm healthz-server
```

## Push Image

```bash
docker login
docker tag simple-nodejs:0.0.2 medined/simple-nodejs:0.0.2
docker push medined/simple-nodejs:0.0.2
```
