import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../stores/contacts";
import { profile } from "../../utils/icons";

export type CreateContactModalProps = {
  active: boolean;
  closeModal: () => void;
  number?: string;
};

export const CreateContactModal = (props: CreateContactModalProps) => {
  const dispatch = useDispatch();

  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [numberValue, setNumberValue] = useState(props.number || "");

  useEffect(() => {
    if (props.number) {
      setNumberValue(props.number);
    }
  }, [props.number]);

  const handleSubmit = () => {
    dispatch(
      addContact({
        id: Math.floor(Math.random() * 100),
        name: `${nameValue} ${lastNameValue}`,
        phone: numberValue,
      }),
    );
    props.closeModal();
    setNameValue("");
    setLastNameValue("");
    setNumberValue("");
  };

  return (
    <div
      className={`absolute ${
        props.active ? "block" : "hidden"
      } left-1/2 top-12 z-20 h-[calc(100%-48px)] w-[calc(100%-20px)] -translate-x-1/2 rounded-b-[40px] rounded-t-[10px] bg-[#f3f2f9] p-4 px-6`}
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <button
            onClick={props.closeModal}
            className="flex items-center gap-2 text-blue"
          >
            Cancel
          </button>
          <p className="font-semibold text-black">New contact</p>
          <button
            disabled={!nameValue || !lastNameValue || !numberValue}
            onClick={handleSubmit}
            className={`flex ${
              !nameValue || !lastNameValue || !numberValue
                ? "text-gray-300"
                : "text-blue"
            } items-center gap-2`}
          >
            Done
          </button>
        </div>

        <div className="mt-4 flex size-36 items-center justify-center self-center rounded-full bg-[#979da8]">
          {nameValue && lastNameValue ? (
            <p className="text-[70px] text-white">
              {nameValue[0].toUpperCase()}
              {lastNameValue[0].toUpperCase()}
            </p>
          ) : (
            <img className="w-full" src={profile} alt="profile" />
          )}
        </div>

        <button className="mt-2 w-[150px] self-center rounded-2xl bg-[#e3e3e3] px-2 py-1 font-semibold text-black">
          Add a photo
        </button>

        <div className="-mx-6 mt-4 min-h-[85px] border-b border-t border-[#d8d8d8] bg-white">
          <input
            className="p-2 px-4 text-black outline-none"
            type="text"
            name="name"
            id="Name"
            placeholder="Name"
            autoComplete="off"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <div className="separator mx-4 mb-2 border-b border-gray-200"></div>
          <input
            className="px-4 text-black outline-none"
            type="text"
            placeholder="Last name"
            autoComplete="off"
            id="lastName"
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
          />
        </div>

        <div className="-mx-6 mt-8 flex items-center border-b border-t border-[#d8d8d8] bg-white">
          <div className="relative ml-4 flex size-6 items-center justify-center rounded-full bg-[#35c759]">
            <div className="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 bg-white"></div>
            <div className="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 rotate-90 bg-white"></div>
          </div>
          <input
            className="p-2 px-4 text-black outline-none placeholder:text-black"
            type="text"
            name="phone"
            autoComplete="off"
            placeholder="add a number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
