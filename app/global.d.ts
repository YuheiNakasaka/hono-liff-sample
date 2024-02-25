import {} from "hono";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}

declare global {
  var liff: {
    init: (config: {
      liffId: string;
      withLoginOnExternalBrowser: boolean;
    }) => Promise<void>;
    isLoggedIn: () => boolean;
    getContext: () => any;
    getAccessToken: () => string;
  };
}
