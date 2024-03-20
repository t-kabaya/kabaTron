import axios  from "axios";

const kabaTron = async (body: any) => {
  // 引数がオブジェクトでない場合は警告を出す
  if (typeof body !== "object" || body === null || body === undefined) {
    console.log("kabaTron: param must be object");
    return;
  }
  await axios.post("http://localhost:7777", body);
};

export default kabaTron;
