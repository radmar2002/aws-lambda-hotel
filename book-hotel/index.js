const fetch = require("node-fetch");

// let payload = {
//   buyer_id: "mariano",
//   start_date: "2020-03-13",
//   end_date: "2020-03-15",
//   near: "tate gallery",
// };

exports.handler = async (evt) => {
  // hotel's booking process
  const url =
    "https://aiupwhv1v9.execute-api.eu-west-1.amazonaws.com/Prod/hotel";
  const body = evt;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  //   const data = await res.json();
  //   console.log(data);
  return res;
};

// exports.handler(payload);
