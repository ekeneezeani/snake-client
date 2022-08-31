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
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connectiong ...");
connect();
