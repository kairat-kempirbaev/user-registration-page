import { useState } from "react";
import "./App.css";
import InputComponent from './InputComponent';
function App() {
  return (
    <div className="min-h-screen flex p-6 pt-20  flex-col gap-12 md:gap-0 md:flex-row md:justify-around md:item-center bg-[#ffa2a2] bg-center bg-no-repeat bg-[url('bg-intro-mobile.png')] md:bg-[url('bg-intro-desktop.png')]">
      <section className="md:basis-2/5 flex flex-col text-center text-white gap-5 justify-center">
        <h1 className="leading-[2rem] text-[2rem]  font-bold mx-auto ">
          Learn to code by watching others
        </h1>
        <p className="font-semibold ">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main className="md:basis-3/7 flex flex-col gap-5 justify-center">
        <button className="bg-[rgba(83,20,165,0.97)] w-full py-3 rounded-lg text-center text-white ">
          <p className="font-bold">
            Try it free 7 days{" "}
            <span className="font-normal">then $20/mo. thereafter</span>
          </p>
        </button>
        <form className="bg-white p-4 gap-4 flex flex-col w-full items-center rounded-lg" action="javascript:void(0);">
          <fieldset className=" flex flex-col gap-3 w-full">
          <InputComponent title="first name" type="text"></InputComponent>
          <InputComponent title="last name" type="text"></InputComponent>
          <InputComponent title="email" type="email"></InputComponent>
          <InputComponent title="password" type="password" ></InputComponent>
          </fieldset>
          <button className="bg-[rgba(83,20,165,0.97)] w-full py-3 rounded-lg text-center text-white ">
            <p className="font-bold uppercase">Claim your free trial</p>
          </button>
          <p className="text-[#525252af] text-center w-[40ch]">
            By clicking the button, you are agreeing to our
            <span className="text-[#8601087a] font-extrabold">
              {" "}
              Terms and Services
            </span>
          </p>
        </form>
      </main>
    </div>
  );
}

export default App;
