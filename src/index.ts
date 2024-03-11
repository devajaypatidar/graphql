import express from 'express'

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function start(){
    
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

//creating graphql server
const gqlServer = new ApolloServer({
    typeDefs: `
        type Query{
            hello: String
            say(name: String) : String
        }
    ` ,
    resolvers: {
        Query :{
            hello: ()=>`Hey there i am graphQl server`,
            say: (_, {name}: {name : string} )=> `Hey ${name}, How are you `
        }
    },
  });

  await gqlServer.start();
  
app.get('/', (req, res) => {
    res.json({Message : "server is up and running "});

})

app.use('/graphql', expressMiddleware(gqlServer));


app.listen(PORT,()=>{
    console.log("server started");
})
}

start();