FROM    incoding:220604

WORKDIR /usr/src/app/incoding_app/

COPY    ./package*.json /usr/src/app/incoding_app/
RUN     npm i

COPY    ./app.js /usr/src/app/incoding_app/

EXPOSE	3000

CMD 	["npm", "start"]
