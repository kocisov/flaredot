import {ChatClient} from "twitch-chat-client";
import {TwitchPrivateMessage} from "twitch-chat-client/lib/StandardCommands/TwitchPrivateMessage";

export function buildHandleMessage(chatClient: ChatClient) {
  return async (
    channel: string,
    userName: string,
    message: string,
    msg: TwitchPrivateMessage
  ) => {
    console.log(
      userName,
      `${msg.userInfo.isMod ? "is moderator" : "isn't moderator"}`,
      message
    );

    const [command, ...restOfTheMessage] = message.split(/\s+/);

    if (command === "!test") {
      chatClient.action(channel, `Bot is working... ${restOfTheMessage}`);
    }
  };
}
