const net = require("net");

const config = {
  host: "localhost",
  port: 50541,
};

const connect = function () {
  const conn = net.createConnection(config);
  conn.on('data', (data) =>{
    console.log('data from server  ', data);
  });
  conn.on('connect',()=>{
    conn.write('Name: EES')
    console.log("Successfully connected to the server")
  })
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};