import {RefreshableAuthProvider, StaticAuthProvider} from "twitch-auth";
import {writeTokensFile} from "./tokensFile";
import {TokenData} from "../interfaces";

const {CLIENT_ID, CLIENT_SECRET} = process.env;

export function createAuthProvider(tokenData: TokenData) {
  return new RefreshableAuthProvider(
    new StaticAuthProvider(CLIENT_ID, tokenData.accessToken),
    {
      clientSecret: CLIENT_SECRET,
      refreshToken: tokenData.refreshToken,
      expiry:
        tokenData.expiryTimestamp === null
          ? null
          : new Date(tokenData.expiryTimestamp),
      async onRefresh({accessToken, refreshToken, expiryDate}) {
        const newTokenData = {
          accessToken,
          refreshToken,
          expiryTimestamp: expiryDate === null ? null : expiryDate.getTime(),
        };
        await writeTokensFile(newTokenData);
      },
    }
  );
}
