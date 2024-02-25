import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Auth from "../islands/auth";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  return c.render(
    <Auth>
      <div class={className}>
        <h1>About Page</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </Auth>,
    { title: "About" }
  );
});
