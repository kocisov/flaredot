import "dotenv/config";
import {readTokensFile} from "@features/tokensFile";
import {createAuthProvider} from "@features/authProvider";
import {createChatClient} from "@features/chatClient";
import {buildHandleMessage} from "@features/handleMessage";

async function main() {
  const tokenData = await readTokensFile();
  const authProvider = await createAuthProvider(tokenData);
  const chatClient = await createChatClient(authProvider, ["estkin_"]);
  await chatClient.connect();
  chatClient.onMessage(buildHandleMessage(chatClient));
}

main();
