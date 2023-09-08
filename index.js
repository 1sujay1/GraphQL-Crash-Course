import express from "express";
import resolvers from "./resolvers.js";
import schema from "./schema.js";
import {graphqlHTTP} from 'express-graphql'
const app =express()

app.get('/',(req,res)=>{
    res.send("Hello world")
})
// const root ={lco:()=>console.log("Learn Code Online")}
app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:resolvers,
    graphiql:true
}))

app.listen(3000,()=>{
    console.log("Listening to 3000");
})