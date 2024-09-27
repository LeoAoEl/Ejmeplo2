import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600">
      <h1 className="text-3xl font-bold mb-4">Contador</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrementar
        </button>
        <span className="text-2xl font-semibold text-white">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
};
