const TailwindCss = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      {/* 1. Basic Styling */}
      <div>
        <p className="text-[30px]">1. Basic Styling</p>
        <div className="ms-8">
          <button className="bg-blue-500 text-white rounded-xl px-[10px] py-[5px] text-[30px]">
            Button
          </button>
        </div>
      </div>

      {/* 2. responsive Design */}
      <div>
        <p className="text-[30px]">2. responsive Design</p>
        <div className="bg-blue-500 sm:bg-green-500 lg:bg-red-500 h-[100px] w-[100%]"></div>
      </div>

      {/* 3. Flexbox Layout */}
      <div>
        <p className="text-[30px]">3. Flexbox Layout</p>
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex items-center justify-center w-1/3 h-24 bg-red-500 text-[20px]">
            Item 1
          </div>
          <div className="flex items-center justify-center w-1/3 h-24 bg-blue-500 text-[20px]">
            Item 2
          </div>
          <div className="flex items-center justify-center w-1/3 h-24 bg-green-500 text-[20px]">
            Item 3
          </div>
        </div>
      </div>

      {/* 4. Customizing Tailwind */}
      <div>
        <p className="text-[30px]">4. Customizing Tailwind</p>
        <div>
          <p className="text-[20px]">
            pada file tailwind.config.js tambahkan warna yang di inginkan di
            dalam properti theme.extend.colors. "custom-blue" : "#0080FF"
          </p>
          <div className="bg-custom-blue h-[100px] text-[20px]">
            ini warna custom
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindCss;
