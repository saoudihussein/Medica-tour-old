#on télécharge l image de node la plus légère
FROM node:14
#Email de la personne qui gère le SAV xD
LABEL maintainer=amine.jlassi@minotore.com

ENV APP_PATH /home/node/app

#on crée les repertoires pour les dépendances de node et on lui donne les droits adaptés.
RUN mkdir -p ${APP_PATH}/node_modules && chown -R node:node ${APP_PATH}

#on set le path ou docker doit tout intaller
WORKDIR /home/node/app
#update vers la version 7.19
RUN npm install -g npm@latest
RUN npm install -g gatsby-cli

#on recupere le json pour l installation des dépendances node

COPY gatsby-config.js ./

COPY gatsby-node.js ./
#installation des dépendances node
WORKDIR /home/node/app

#on recupere le json pour l installation des dépendances node
COPY package*.json ./

#on sudo en utilisateur 'node'
USER node

#on copie la totalité du repertoire 'prosper-front' dans le repertoire courant de l'image docker
COPY --chown=node:node . .

RUN npm install

# environment has change ??
RUN npm rebuild node-sass

#verification du cache de node
RUN npm cache verify

#on défini le repertoire partagé
VOLUME /home/node/app/src

#on ouvre le port 8080 pour run le serveur en env=dev
EXPOSE 8000

#on lance le serveur en dev
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]

