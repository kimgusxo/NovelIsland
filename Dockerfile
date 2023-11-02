# Node 이미지를 기반으로 새 이미지를 생성
FROM node:14 AS build-stage

# 작업 디렉토리 설정
WORKDIR /app

# 애플리케이션의 의존성을 설치
COPY package*.json ./
RUN npm install

# 애플리케이션의 소스를 Docker 이미지에 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# Nginx 이미지를 기반으로 새 이미지를 생성
FROM nginx as production-stage

# 빌드 결과물을 Nginx에서 호스팅
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx가 80 포트에서 실행됨을 알림
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
