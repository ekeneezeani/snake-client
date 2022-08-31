let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  console.log(key);
  if (key === "\u0003") {
    console.log("I got here!");
    process.exit();
  }
  // connection.on("connect", () => {
  // setInterval(() => {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "p") {
    connection.write("Say: WOO");
  } else if (key === "o") {
    connection.write("Say: LOL");
  }
  // }, 1000);

  // });
};

module.exports = { setupInput };
