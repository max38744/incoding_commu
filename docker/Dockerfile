FROM 	ubuntu:20.04

RUN 	apt-get -y update && \
	apt-get install -y curl

RUN	curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh && \
	bash nodesource_setup.sh
RUN 	apt-get -y install nodejs
RUN 	apt-get -y install build-essential 
RUN	apt-get -y install vim

WORKDIR /usr/src/app
COPY	./package*.json /usr/src/app

RUN	npm i
COPY	. /usr/src/app

RUN 	npm install express-generator -g 
	
RUN	express --view=pug incoding_app
RUN 	cd incoding_app && \
	npm i



