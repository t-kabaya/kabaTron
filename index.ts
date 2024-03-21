import axios  from "axios";

const kabaTron = async (body: any, url: string = "http://localhost:7777") => {
  // 引数がオブジェクトでない場合は警告を出す
  if (typeof body !== "object" || body === null || body === undefined) {
    console.log("kabaTron: param must be object");
    return;
  }
  await axios.post(url, body);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`kabaTron: Failed to fetch: ${response.statusText}`);
  }
};

export default kabaTron;
