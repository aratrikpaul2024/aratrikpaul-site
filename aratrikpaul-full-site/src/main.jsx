
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="font-sans text-gray-800">
    <header className="text-center p-10 bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600">Hi, I’m Aratrik Paul</h1>
      <p className="text-lg">Product Manager | UC Berkeley MIMS 2026</p>
    </header>

    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Biography</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </section>

    <section className="p-10 bg-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4">
        <li>
          <strong>PwC – Consultant</strong> (2020–2024)<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li>
          <strong>Upsolve – Product Intern</strong> (2024)<br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </section>

    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4">
        <div className="p-4 border rounded shadow">Project A – Lorem ipsum dolor sit amet.</div>
        <div className="p-4 border rounded shadow">Project B – Sed ut perspiciatis unde omnis.</div>
      </div>
    </section>

    <section className="p-10 bg-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p>Lorem ipsum form placeholder. Embed Calendly or form here.</p>
    </section>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
