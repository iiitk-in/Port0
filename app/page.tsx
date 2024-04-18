import React from "react";

export default function Page() {
  return (
    <main className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <h1 className="dark:text-white text-4xl port0 my-8">Port0</h1>
      <section className="rounded-lg p-5 dark:text-white border md:max-w-3xl md:mt-9 border-red-900 dark:border-white backdrop-blur-3xl">
        <h3 className="block mb-3">
          <span className="port0">Port0</span>, the authentication service that
          is at the centre of IIITK.in.
        </h3>
        <h2 className="text-2xl">Safe.</h2>
        <span className="port0">Port0</span> doesn&apos;t requre your LMS
        password. It stores all your personal info in a 256-bit AES encrypted
        vault.
        <h2 className="text-2xl mt-3">Local.</h2>
        Whenver you login to any service, your vault is fetched from the server
        and decrypted locally on your device. Noone can access your data without
        your permission, not even us.
        <h2 className="text-2xl mt-3">Private.</h2>
        Only data that you authorize is shared with the service you are logging
        into.
      </section>

      <div className="grow"></div>

      <footer>
        <p className="dark:text-white text-center">
          &copy; 2024 <span className="port0">Port0</span> Team, IIITK.in
          <br />
          Liscensed under the MIT License.{" "}
          <a
            href="https://github.com/iiitk-in/port0"
            className="dark:text-white underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
