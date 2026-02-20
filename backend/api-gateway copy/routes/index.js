import express from "express";
import dotenv from "@dotenvx/dotenvx"
dotenv.config()
import {createProxyMiddleware} from "http-proxy-middleware"
import { AuthVerify } from "../middelware/AuthVerify.js";
import http from "http"

const routes = express.Router()

const agent = new http.Agent({
  keepAlive: true,
  maxSockets: 50,
  maxFreeSockets: 20,
  rejectUnauthorized:false,
});

routes.use("/auth",createProxyMiddleware({
    target:process.env.auth_url,
    changeOrigin:true,
    agent,
    secure:true,
    proxyTimeout:10000,
    timeout:10000,
}))

routes.use("/institute",AuthVerify,createProxyMiddleware({
    target:process.env.institute_url,
    changeOrigin:true,
     agent,
     secure:true,
    proxyTimeout:10000,
    timeout:10000,
}))

routes.use("/telecalling",AuthVerify,createProxyMiddleware({
    target:process.env.telecalling_url,
    changeOrigin:true,
     agent,
     secure:true,
    proxyTimeout:10000,
    timeout:10000,
}))

routes.use("/training",AuthVerify,createProxyMiddleware({
    target:process.env.training_url,
    changeOrigin:true,
     agent,
     secure:true,
    proxyTimeout:10000,
    timeout:10000,
}))


export default routes