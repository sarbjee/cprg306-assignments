"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }
  async function handleSignOut() {
    await firebaseSignOut();
  }

  return (
    <div className="bg-gray-100 p-4">
      {user ? (
        <button
          onClick={handleSignOut}
          className="p-1 m-1 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          className="p-1 m-1 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Sign In
        </button>
      )}
      {user && (
        <p className="p-1 text-gray-700">
          Welcome, {user.displayName} ({user.email})
          <br />
          <Link
            href="week10/shopping-list"
            className="p-1 text-white bg-gray-500 rounded hover:bg-gray-600"
          >
            Shopping List
          </Link>
        </p>
      )}
      <p className="mt-3 ml-1 text-gray-700">
        <Link
          href="/"
          className="p-1 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
