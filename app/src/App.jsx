import {
  useState,
  useEffect,
  useRef,
  Suspense,
  lazy,
  useCallback,
} from "react";
import "./App.css";
import EXTERNAL_API from "./constants";
import sort from "./utils/sort";
import Spinner from "./components/Spinner";

const LazyCard = lazy(() => import("./components/Card"));

const sortOptions = [
  { value: "asc", label: "Yards Asc" },
  { value: "desc", label: "Yards Desc" },
  { value: "under-10", label: "Under 10 yards" },
  { value: "more-10", label: "More than 10 yards" },
];

function App() {
  const [data, setData] = useState([]);
  const initialData = useRef([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(EXTERNAL_API);
        const result = await response.json();
        setData(result);
        initialData.current = result;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const sortData = useCallback((value) => {
    const newData = sort(initialData.current, value, "size");
    setData([...newData]);
  }, []);

  return (
    <div>
      <div className="header text-center mt-4 flex items-center">
        <div className="flex-1">
          <h1 className="text-red-500 font-bold text-2xl">
            Choose Your Skip Size
          </h1>
          <p className="text-lg text-white">
            Select the skip size that best suits your needs
          </p>
        </div>
      </div>

      <div className="text-white text-left flex fixed bg-black w-full bottom-0  gap-x-2 justify-center p-4 z-[9999] shadow-lg">
        <p className="font-bold text-green-500">
          {" "}
          <span className="font-bold text-white">Total yards: </span>{" "}
          {(selected && selected.size) || 0}
        </p>
        <p className="font-bold text-green-500">
          <span className="font-bold text-white">Hire Period: </span>
          {(selected && selected.hire_period_days) || 0} days
        </p>
      </div>

      <div className="text-black px-6 flex xs: justify-center md:justify-end mt-4">
        <select
          className="bg-blue-50 rounded-lg p-2 w-full md:w-fit mt-2"
          name="sort"
          id="sort"
          onChange={(e) => sortData(e.target.value)}
        >
          <option>Sort by</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <Suspense fallback={<Spinner />}>
        <div className="content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {data.map((item) => (
            <LazyCard
              key={item.id}
              item={item}
              isSelected={selected?.id === item.id}
              onSelect={() =>
                setSelected((prev) => (prev?.id === item.id ? null : item))
              }
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
