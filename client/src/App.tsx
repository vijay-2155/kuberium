import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="container">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton  />
        </SignedIn>
      </header>
      <h1>Welcome to mern-init-cli Package</h1>
      <p>A simple CLI tool to set up a MERN stack project effortlessly.</p>
    </div>
  );
}

const App = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
  );
};

export default App;