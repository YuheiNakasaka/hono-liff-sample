import { createRoute } from "honox/factory";
import { Account } from "../../models/account";

export const POST = createRoute(async (c) => {
  const { accessToken } = await c.req.parseBody<{ accessToken: string }>();
  const resp = await fetch(`https://api.line.me/oauth2/v2.1/userinfo`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((resp) => resp.json() as Promise<Account>);
  // TODO: Save the account to the database
  return c.json<Account>({
    sub: resp.sub,
    name: resp.name,
    picture: resp.picture,
  });
});
