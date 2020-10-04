import fetch from "node-fetch";
import {buildTokenUri} from "./features/buildUris";
import {writeTokensFile} from "./features/tokensFile";

const {CLIENT_ID, REDIRECT_URI, CLIENT_SECRET} = process.env;

export async function obtainAccessToken(code: string) {
  const tokenUri = buildTokenUri(CLIENT_ID, REDIRECT_URI, CLIENT_SECRET, code);
  const response = await fetch(tokenUri, {
    method: "POST",
  });
  const data = await response.json();
  if (data?.access_token) {
    await writeTokensFile({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiryTimestamp: data.expires_in,
    });
  } else {
    console.log("Wrong code.");
  }
}

// const authorizeUri = buildAuthorizeUri(CLIENT_ID, REDIRECT_URI);
// obtainAccessToken("ab01...");
