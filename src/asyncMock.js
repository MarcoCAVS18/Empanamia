import { db } from "./config/firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const productsRef = collection(db, "products");
      const q = query(productsRef, where("category", "==", category));
      const querySnapshot = await getDocs(q);
      const filteredProducts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const product = {
          ...data,
          id: doc.id,
        }
        filteredProducts.push(product);

        
      });
      resolve(filteredProducts);
    }, 2000);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);
      const allProducts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const product = {
          ...data,
          id: doc.id,
        }
        allProducts.push(product);

      });
      resolve(allProducts);
    }, 2000);
  });
};

export const getProductsByID = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        const product = {
          ...data,
          id: docSnap.id,
        };
        resolve(product);
      } else {
        reject(new Error("Document not found"));
      }
    }, 2000);
  });
};