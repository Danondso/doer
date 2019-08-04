# base image
FROM node:12.7.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# setup working directory
WORKDIR /doer 

# add node_modules to path
ENV PATH /doer/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /doer/package.json
RUN npm install
RUN npm install -g @angular/cli@8.2.0

# add app
COPY . /doer

EXPOSE 4200
# start
CMD ng serve --host 0.0.0.0