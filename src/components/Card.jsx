import clsx from "clsx";
import { useState } from "react";

export default function Card(props) {
  const [connected, setConnected] = useState(false);

  const toggleConnect = () => {
    setConnected(!connected);
  };

  return (
    <div
      style={{
        background: "#FEF9F8",
        border: "1px solid #C8C8C8",
      }}
      className="pl-7 pr-7 pt-8 pb-8 w-72 rounded-lg flex flex-col gap-2 border-slate"
    >
      <div className="flex flex-row justify-between items-center">
        <div>
          <img
            src={"/" + props.logo + ".png"}
            alt="logo"
          />
        </div>
        <div>
          <button
            style={{
              border: connected ? "0px" : "1px solid #C8C8C8",
              transition: "all 0.2s ease-in",
            }}
            className={
              "rounded-md py-1 px-2 text-black text-button-small " +
              clsx({
                "bg-hive_green": connected,
                "bg-white": !connected,
              })
            }
            onClick={toggleConnect}
          >
            {connected ? "Connected" : "Connect"}
          </button>
        </div>
      </div>
      <div
        style={{
          color: "#000",
          fontFamily: "Helvetica",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        {props.name}
      </div>
      <div
        style={{
          color: "#000",
          fontFamily: "Helvetica",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        {props.description}
      </div>
    </div>
  );
}
