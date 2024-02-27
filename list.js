const client = require("./client");

async function init() {
  // await client.lpush("messages", 1);
  // await client.lpush("messages", 2);
  // await client.lpush("messages", 3);
  // await client.lpush("messages", 4);
  // await client.lpush("messages", 5);
  // const result = await client.rpop("messages");
  const result = await client.lrange("messages", 0, -1);
  console.log("Result", result);
}

init();
