export function buildAuthorizeUri(clientId: string, redirectUri: string) {
  return (
    `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=chat:read+chat:edit`
  );
}

export function buildTokenUri(
  clientId: string,
  redirectUri: string,
  secret: string,
  code: string
) {
  return (
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}` +
    `&client_secret=${secret}` +
    `&code=${code}` +
    `&grant_type=authorization_code` +
    `&redirect_uri=${redirectUri}`
  );
}
