### How To Start

```shell
# node 18 환경 베이스 도커 이미지 빌드
docker build -t likegecko/node-app .

# 빌드된 이미지를 베이스로 도커 컨테이너 실행, 4999 포트를 3000 포트로 포워딩
docker run -p 4999:3000 likegecko/node-app
```
