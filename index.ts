// Androidシュミレーターのみ対応している。
const kabaTron = async (body: any, url: string = "http:///10.0.2.2:7777") => {
  // 引数がオブジェクトでない場合は警告を出す
  if (typeof body !== "object" || body === null || body === undefined) {
    console.log("kabaTron: param must be object");
    return;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log(`kabaTron: Failed to fetch: ${response.statusText}`);
  }
};

export default kabaTron;
