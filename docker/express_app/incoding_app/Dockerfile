FROM 	node:base

WORKDIR	/usr/src/app

COPY	 package*.json ./

RUN 	npm i
RUN 	npm i --location=global pm2

COPY 	. .

EXPOSE	8080 

CMD	["pm2-runtime", "start", "./bin/www"] 
