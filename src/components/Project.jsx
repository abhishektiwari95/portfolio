import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg"


const Project = () => {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Project</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hovel:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    lorem ipsuem,dolor sit amet consectetur adipisicing elit.
                    Sit minus dolore quisquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                <img src={Photo1} width={150} height={150} />
              </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hovel:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    lorem ipsuem,dolor sit amet consectetur adipisicing elit.
                    Sit minus dolore quisquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                <img src={Photo2} width={150} height={150} />
              </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hovel:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    lorem ipsuem,dolor sit amet consectetur adipisicing elit.
                    Sit minus dolore quisquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                <img src={Photo1} width={150} height={150} />
              </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hovel:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    lorem ipsuem,dolor sit amet consectetur adipisicing elit.
                    Sit minus dolore quisquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                <img src={Photo2} width={150} height={150} />
              </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Project;
