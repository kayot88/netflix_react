import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export const UseContentHook =  (target) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((mediaData) => {
        console.log(mediaData);
        const allContent = mediaData.docs.map((dataObj) => ({
          ...dataObj.data(),
          docId: dataObj.id,
        }));
       setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }, []);
    return { [target]: content };
};
