import "dotenv/config";
import {readTokensFile} from "./features/tokensFile";
import {createAuthProvider} from "./features/authProvider";
import {createChatClient} from "./features/chatClient";

async function main() {
  const tokenData = await readTokensFile();
  const authProvider = await createAuthProvider(tokenData);
  const chatClient = await createChatClient(authProvider, ["estkin_"]);
  await chatClient.connect();

  chatClient.onMessage((channel, user, message) => {
    console.log(user, message);
    if (message === "!ping") {
      chatClient.action(channel, "Pong!");
    }
  });
}

main();
