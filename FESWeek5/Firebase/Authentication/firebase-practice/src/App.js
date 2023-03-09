import "./App.css";
import React from "react";
import { auth, db } from "./firebase/init";
import { collection, addDoc, getDoc, getDocs, doc, query, where,updateDoc, deleteDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

 async function updatePost() {
    const hardcodeID = "AvZZImngqQD9vW7TcH3u";
    const postRef = doc(db, "posts", hardcodeID);
    const post = await getPostById(hardcodeID);
    console.log(post);
    const newPost = {
      ...post,
      title: "Land a 500k job",
    };
    updateDoc(postRef, newPost);
  }

  function deletePost() {
    const hardcodeID = "AvZZImngqQD9vW7TcH3u";
    const postRef = doc(db, "posts", hardcodeID);
    deleteDoc(postRef);
  }

  function createPost() {
    const post = {
      title: "Land a 400k job",
      description: "Finish Frontend Simplified",
      uid: user.uid
    };

    addDoc(collection(db, "posts"), post);
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
    console.log(posts);
  }

  async function getPostById(id) {
    const postRef = doc(db, "posts", id);
    const postSnap = await getDoc(postRef);
    return postSnap.data();
  }

  async function getPostByUID() {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    );
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map(doc => doc.data()));
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user.email[0].toUpperCase);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    auth.signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? "loading..." : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post By Id</button>
      <button onClick={getPostByUID}>Get Post By UID</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
