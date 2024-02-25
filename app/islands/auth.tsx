import { useEffect, useState } from "hono/jsx";
import { Account } from "../models/account";

export default function Auth({ children }: { children: JSX.Element }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
        withLoginOnExternalBrowser: true,
      })
      .then(async () => {
        if (liff.isLoggedIn()) {
          console.log(`isLoggedIn`);
          const accessToken = liff.getAccessToken();
          const formData = new FormData();
          formData.append("accessToken", accessToken);
          await fetch("/auth/login", {
            method: "POST",
            body: formData,
          })
            .then((resp) => resp.json() as Promise<Account>)
            .then((data: Account) => {
              console.log(
                `sub: ${data.sub} name: ${data.name} picture: ${data.picture}`
              );
              setLoggedIn(true);
            })
            .catch((err) => {
              console.error(err);
              return null;
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <>{loggedIn ? children : <div>Loading</div>}</>;
}
