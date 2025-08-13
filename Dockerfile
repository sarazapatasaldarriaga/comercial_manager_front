# Stage 1: Build the Angular application
FROM public.ecr.aws/docker/library/node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build --configuration production

# Stage 2: Serve the application with Nginx
FROM public.ecr.aws/mcr-public/nginx:latest-alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/sara-front /usr/share/nginx/html

# Copy the env.js placeholder
COPY src/assets/env.js /usr/share/nginx/html/assets/env.js

# Add a script to replace environment variables
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

CMD ["/docker-entrypoint.sh"]