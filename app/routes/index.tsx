import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Auth from "../islands/auth";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <Auth>
      <div class={className}>
        <h1>Hello, {name}!</h1>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </Auth>,
    { title: name }
  );
});
