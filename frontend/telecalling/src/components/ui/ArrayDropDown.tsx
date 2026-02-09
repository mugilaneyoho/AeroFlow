import { useState, useRef, useEffect } from "react";

const options = [
  { id: 1, value: "React" },
  { id: 2, value: "Vue" },
  { id: 3, value: "Angular" },
  { id: 4, value: "Svelte" },
];

export default function ArrayDropDown() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.some((item) => item.id === option.id)
        ? prev.filter((item) => item.id !== option.id)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="min-h-[44px] cursor-pointer rounded-md border p-2 flex flex-wrap gap-1 items-center"
      >
        {selected.length === 0 && (
          <span className="text-gray-400">Select options</span>
        )}

        {selected.map((item) => (
          <span
            key={item.id}
            className="flex items-center gap-1 rounded bg-blue-100 px-2 py-1 text-sm text-blue-700"
          >
            {item.value}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleOption(item);
              }}
              className="hover:text-blue-900"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.some((item) => item.id === option.id)}
                onChange={() => toggleOption(option)}
                className="accent-blue-600"
              />
              {option.value}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
