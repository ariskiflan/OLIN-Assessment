import useFetchData from "./Hooks/useFetchData";

const ApiFetch = () => {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return <div className="text-center text-[50px]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-[50px]">
        An error has occurred: {error.message}
      </div>
    );
  }

  return (
    <div>
      <div className="bg-body h-[450px]">
        <div className="w-full flex flex-col items-center ">
          <h1 className="text-[30px] font-bold my-[30px] text-center">
            Arcanine
          </h1>
          <p className="text-[20px] font-bold">Height: {data?.height}</p>
          <p className="text-[20px] font-bold">Weight: {data?.weight}</p>
          <p className="text-[20px] font-bold my-[30px] text-center">
            Abilities
          </p>
          <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
            <thead className="">
              <tr className="bg-white">
                <th className="p-3 text-center border">Slot</th>
                <th className="border ps-2 pe-40">Name</th>
                <th className="border ps-2 pe-40">Url</th>
              </tr>
            </thead>
            <tbody>
              {data?.abilities.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border ps-2 ">{item.slot}</td>
                  <td className="border ps-2 ">{item.ability.name}</td>
                  <td className="border ps-2 ">{item.ability.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApiFetch;
