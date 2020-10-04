import {AuthProvider} from "twitch-auth";
import {ChatClient} from "twitch-chat-client";

export function createChatClient(
  authProvider: AuthProvider,
  channels: Array<string>
) {
  return new ChatClient(authProvider, {
    channels,
  });
}
