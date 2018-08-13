FROM node:8-alpine

COPY ./backend /backend
COPY ./frontend /frontend

RUN npm install -g yarn