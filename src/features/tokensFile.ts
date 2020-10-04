import {readFile, writeFile} from "fs/promises";
import {TokenData} from "@interfaces";

export async function writeTokensFile(tokenData: TokenData) {
  await writeFile("./tokens.json", JSON.stringify(tokenData, null, 2), "utf-8");
}

export async function readTokensFile() {
  const data = await readFile("./tokens.json", "utf-8");
  return JSON.parse(data);
}
