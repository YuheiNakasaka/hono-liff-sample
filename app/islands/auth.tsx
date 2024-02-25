import { useEffect } from "hono/jsx";

export default function Auth({ children }: { children: JSX.Element }) {
  useEffect(() => {
    console.log(`Auth ${import.meta.env.VITE_LIFF_ID} ${liff}`);
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
        withLoginOnExternalBrowser: true,
      })
      .then(() => {
        console.log(`init`);
        if (liff.isLoggedIn()) {
          console.log(`isLoggedIn`);
          const context = liff.getContext();
          const liffToken = liff.getAccessToken();
          console.log(
            `context: ${JSON.stringify(context)} liffToken: ${liffToken}`
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <>{children}</>;
}
