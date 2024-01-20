import Ably from "ably";
console.log("Hello via Bun!");

const ably = new Ably.Rest({ key: "key:key" });

console.log("calling requestToken");
ably.auth.requestToken({}, (err, res) => {
  console.log(err, res);
});
