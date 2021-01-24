const express = require('express');
const {graphqlHTTP} = require(`express-graphql`);
const schema = require('./schema/schema');
const app = express();
const moongoose = require('mongoose');
const mongoURL = '';

app.use(`/graphql`, graphqlHTTP({
    schema,
    graphiql: true
}));

moongoose.connect(mongoURL);
moongoose.connection.once('open', ()=>{
    console.log('connected to db');
})



app.listen(4000, ()=>{
    console.log(`now listening for requrests on port 4000`);
})