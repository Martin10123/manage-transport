import { taxi1, taxi2, taxi3, taxi4 } from "@/images";

export const ImagesTaxi = () => {
  return (
    <div className="max-w-full grid gap-4 bg-white rounded-lg shadow-md">
      <div>
        <img
          className="h-auto max-h-[40rem] w-full max-w-full rounded-lg object-cover object-center"
          src={taxi1}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 gap-4 p-2">
        <div>
          <img
            src={taxi1}
            className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer md:w-full md:h-40 border-2 border-gray-500"
            alt="taxi1-image"
          />
        </div>
        <div>
          <img
            src={taxi2}
            className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer md:w-full md:h-40"
            alt="taxi2-image"
          />
        </div>
        <div>
          <img
            src={taxi3}
            className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer md:w-full md:h-40"
            alt="taxi3-image"
          />
        </div>
        <div>
          <img
            src={taxi4}
            className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer md:w-full md:h-40"
            alt="taxi4-image"
          />
        </div>
      </div>
    </div>
  );
};
