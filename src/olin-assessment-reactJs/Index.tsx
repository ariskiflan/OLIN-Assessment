import { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";

interface Ability {
  ability: { name: string; url: string };
  slot: number;
}

interface PokemonData {
  abilities: Ability[];
  height: number;
  weight: number;
}

const ReactJsAssessment = () => {
  // 1. Basic Component
  const item = ["item 1", "item 2", "item 3"];

  //   2. State and Events
  const [count, setCount] = useState(0);

  const incerement = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // 3. Lifecycle Methods
  const [data, setData] = useState<PokemonData>();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/arcanine");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   4. Hooks
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[30px]">
      {/* 1. Basic Component */}
      <div>
        <p className="text-[30px]">1. Basic Component</p>
        <div className="ms-14">
          <Items listItem={item} />
        </div>
      </div>

      {/* 2. State and Events */}
      <div>
        <p className="text-[30px]">2. State and Events</p>

        <div className="ms-8">
          <p className="text-[20px] mb-[20px] font-bold">counter: {count}</p>

          <div className="flex gap-4">
            <button
              className="bg-green-500 p-[6px] rounded-md"
              onClick={incerement}
            >
              Increment
            </button>
            <button
              className="bg-red-500 p-[6px] rounded-md text-white"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

      {/* 3. Lifecycle Methods */}
      <div>
        <p className="text-[30px]">3. Lifecycle Methods</p>
        <div className="ms-8">
          <p className="text-[20px] mb-[10px]">
            "componentDidMount" adalah metode lifecycle di React yang digunakan
            pada class components. Metode ini dipanggil sekali setelah komponen
            dipasang (mounted) ke DOM. Ini berguna untuk melakukan operasi
            side-effect seperti fetching data dari API. dalam functional
            components dengan penggunaan hooks, kita bisa mencapai hal yang sama
            menggunakan useEffect. Hook useEffect dengan dependensi kosong ([])
            berfungsi seperti componentDidMount, yaitu dipanggil sekali setelah
            komponen dipasang ke DOM. Berikut contohnya:
          </p>

          <div>
            <p className="text-[20px]">Arcanine</p>
            <p className="text-[20px]">Height: {data?.height}</p>
            <p className="text-[20px]">Weight: {data?.weight}</p>
            <p className="text-[20px]">Abilities</p>
            <ul className="list-disc ms-5">
              {data?.abilities.map((ability, index) => (
                <li className="text-[20px]" key={index}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Hooks */}
      <div>
        <p className="text-[30px]">4. Hooks</p>
        <div className="ms-8">
          <p className="text-[20px]">Timer: {time} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ReactJsAssessment;
