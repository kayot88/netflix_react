import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function AuthUserListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {

        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    console.log("listener", listener);
    return () => listener();
  }, []);

  return { user };
}
