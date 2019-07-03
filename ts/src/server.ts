import server from './app';
const port = Number(process.env.PORT) || 6060;
server.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
  
    return console.log(`server is listening on ${port}`);
  });