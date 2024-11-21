# toc-website
A basic business website
- If you have node installed:
  - You can run the file locally with `npm i && npm start`
  - To build for production `npm run build-dev`
  - To build for dev `npm run build-prod`

- You can also use docker by following these steps:
  - You can also build a docker container with `docker build -t container-name .`
  - To run your built container use `docker run -p 8080:3000 container-name`

- To configure contact form :
  - You can obtain the required env variables by making your own template and service here: https://www.emailjs.com/docs/