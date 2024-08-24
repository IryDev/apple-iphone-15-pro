import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { touches } from "../../constants";
import { addRecent } from "../../stores/recents";
import { iosCall, iosClear } from "../../utils/icons";
import { CallingModal, CreateContactModal } from "./";

export const KeyPad = () => {
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);

  const dispatch = useDispatch();

  const contacts = useSelector(
    (state: { contacts: { id: number; name: string; phone: string }[] }) =>
      state.contacts,
  );

  const resetKeyPad = () => {
    setNumber("");
  };

  const closeModal = () => {
    setActive(false);
    resetKeyPad();
  };

  const closeCreateModal = () => {
    setCreateActive(false);
    resetKeyPad();
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <CallingModal
        active={active}
        number={
          contacts.find((contact) => contact.phone === number)?.name || number
        }
        closeModal={closeModal}
      />
      <CreateContactModal
        active={createActive}
        closeModal={closeCreateModal}
        number={number}
      />
      <div className="relative h-24">
        <input
          className="h-16 w-full p-4 text-center text-2xl text-black outline-none"
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        {number ===
        contacts.find((contact) => contact.phone === number)?.phone ? (
          <p className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-lg uppercase text-black">
            {contacts.find((contact) => contact.phone === number)?.name}
          </p>
        ) : (
          number.length > 0 && (
            <button
              onClick={() => {
                setCreateActive(true);
              }}
              className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-lg text-blue"
            >
              Add Number
            </button>
          )
        )}
      </div>

      <div className="mx-auto my-4 inline-grid grid-cols-3 gap-4">
        {touches.map((touch, index) => (
          <button
            onClick={() => {
              setNumber(number + touch.touch);
            }}
            key={index}
            className="flex size-[60px] flex-col items-center justify-center rounded-full bg-[#e5e5e5] text-black transition-colors duration-300 hover:bg-[#d9d9d9] active:bg-[#a8a8a8]"
          >
            <span className="text-3xl">{touch.touch}</span>
            <span className="text-[6px] font-bold tracking-widest">
              {touch.description}
            </span>
          </button>
        ))}

        <div></div>
        <a
          href={`tel:${number}`}
          onClick={() => {
            dispatch(
              addRecent({
                id: Math.floor(Math.random() * 100),
                name:
                  contacts.find((contact) => contact.phone === number)?.name ||
                  number,
                place: "Mobile",
                date: new Date().toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }),
                outGoing: true,
              }),
            );
            setActive(!active);
          }}
          className={`flex cursor-pointer ${
            number === "" && "pointer-events-none"
          } size-[60px] items-center justify-center rounded-full bg-[#35c759] transition-colors hover:bg-[#2ea84b] active:bg-[#1e6f2c]`}
        >
          <img className="size-7" src={iosCall} alt="call" />
        </a>

        {number !== "" && (
          <div className="flex size-[60px] items-center justify-center">
            <button>
              <img
                onClick={() => {
                  setNumber(number.slice(0, number.length - 1));
                }}
                width="30"
                src={iosClear}
                alt="clear"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
