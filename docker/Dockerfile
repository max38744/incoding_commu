FROM 	ubuntu:20.04

RUN 	apt-get -y update && \
	apt-get install -y curl

RUN	curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh && \
	bash nodesource_setup.sh
RUN 	apt-get -y install nodejs
RUN 	apt-get -y install build-essential 
RUN	apt-get -y install vim
RUN 	npm i --location=global npm

WORKDIR /usr/src/app
