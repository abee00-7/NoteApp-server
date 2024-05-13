const jsonServer= require('json-server')
const NoteServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT
NoteServer.use(middleware)
NoteServer.use(route)
NoteServer.listen(PORT,()=>{
    console.log(`note app server at ${PORT} and waiting for client request`);
})