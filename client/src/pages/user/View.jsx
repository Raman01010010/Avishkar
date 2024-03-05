const data = {
  name: "NAME",
  username: "USERNAME",
  email: "EMAIL@NCNNC.COM",
  resumeLink: "HTTP://XNSBCNBCNX.COM",
  mobileNo: "735764765",
  gender: "MALE",
  collegeName: "MNNIT",
};
const View = () => {
  return (
    <>
      <section className="text-gray-400 h-[100vh] bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center m-4">
            <div className="rounded-2xl w-[50vw] xs:h-[47vh] sm:h-[57vh] overflow-auto border-black border-2 p-5 bg-gray-100 text-gray-800 ">
              <div className="h-full gap-[3rem] flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[20vw] h-[25vh] object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow  sm:pl-8">
                  <h2 className="title-font font-medium p-4 text-2xl ">
                    Name : {data.name}
                  </h2>
                  <h3 className="text-gray-500 p-4 text-2xl mb-3">
                    Username : {data.username}
                  </h3>

                  <h2 className="title-font p-4 font-medium text-2xl ">
                    Email : {data.email}
                  </h2>
                  <h2 className="title-font p-4 font-medium text-2xl ">
                    M. NO. : {data.mobileNo}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default View;
