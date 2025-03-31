import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Features from "./Features";

function App() {
  const [count, setCount] = useState(0);

  const features = [
    { id: 1, title: "Fast Performance", description: "Built using Vite for lightning-fast updates." },
    { id: 2, title: "Dark Theme", description: "Sleek dark mode for a modern user experience." }
  ];

  if (count >= 3) {
    features.push({ id: 3, title: "Bonus Feature!", description: "You've unlocked a hidden feature!" });
  }

  return (
    <>
      <Header />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + koipop</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {count >= 5 && <p style={{ color: "lime", fontWeight: "bold" }}>🎉 You've clicked 5 times! Keep going! 🎉</p>}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Features features={features} />

      <Sidebar />
      <Footer />
    </>
  );
}

export default App;