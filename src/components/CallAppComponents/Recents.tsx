import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecent } from "../../stores/recents";
import { iosInfo, outgoingCall } from "../../utils/icons";
import { CallingModal } from "./CallingModal";

export const Recents = () => {
  const [mode, setMode] = useState("view");
  const [allMissed, setAllMissed] = useState("all");
  const [active, setActive] = useState(false);
  const [number, setNumber] = useState("");

  const closeModal = () => {
    setActive(false);
  };

  const dispatch = useDispatch();

  const recents = useSelector(
    (state: {
      recents: {
        id: number;
        name: string;
        place: string;
        date: string;
        status?: string;
        outGoing?: boolean;
      }[];
    }) => state.recents,
  );

  const filteredRecents = recents.filter((recent) => {
    if (allMissed === "all") {
      return recent;
    } else {
      return recent.status === "missed";
    }
  });

  const groupRecents = (recents: typeof filteredRecents) => {
    const grouped: {
      id: number;
      name: string;
      place: string;
      date: string;
      status?: string;
      outGoing?: boolean;
      count: number;
    }[] = [];

    for (let i = 0; i < recents.length; i++) {
      const current = recents[i];
      const previous = grouped[grouped.length - 1];

      if (
        previous &&
        previous.name === current.name &&
        previous.place === current.place &&
        previous.status === current.status &&
        previous.outGoing === current.outGoing
      ) {
        previous.count++;
      } else {
        grouped.push({ ...current, count: 1 });
      }
    }

    return grouped;
  };

  const formattedRecents = groupRecents(filteredRecents);

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    if (
      newDate.toLocaleDateString() === new Date().toLocaleDateString() &&
      newDate.getHours() === new Date().getHours()
    ) {
      return newDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return newDate.toLocaleDateString("en-US", {
      year: "2-digit",
      month: newDate.getMonth() < 10 ? "2-digit" : "numeric",
      day: newDate.getDate() < 10 ? "2-digit" : "numeric",
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <CallingModal active={active} number={number} closeModal={closeModal} />
      <div className="p-6 px-0">
        <div className="grid grid-cols-3 justify-between justify-items-center">
          {mode === "view" ? (
            <>
              <button
                onClick={() => {
                  if (mode === "view") {
                    setMode("edit");
                  } else {
                    setMode("view");
                  }
                }}
                style={{
                  justifySelf: "baseline",
                }}
                className="relative justify-self-end text-blue"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setAllMissed(allMissed === "all" ? "missed" : "all");
                }}
                className={`grid grid-cols-[50px_50px] ${
                  allMissed === "missed"
                    ? "after:translate-x-[calc(100%-2px)]"
                    : ""
                } relative z-20 h-6 w-[100px] items-center rounded-[4px] bg-[#eeeeef] text-[10px] text-black after:absolute after:left-[1px] after:z-10 after:h-[22px] after:w-[50px] after:rounded-[4px] after:bg-white after:shadow-lg after:transition-transform after:duration-500 after:content-['']`}
              >
                <span
                  className={`z-20 ${
                    allMissed === "all" && "font-semibold"
                  } transition-all`}
                >
                  All
                </span>

                <span
                  className={`z-20 ${
                    allMissed === "missed" && "font-semibold"
                  } transition-all`}
                >
                  Missed
                </span>
              </button>

              <button className="justify-self-[baseline]">Clear</button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  dispatch({
                    type: "recents/clearRecents",
                  });
                }}
                style={{
                  justifySelf: "baseline",
                }}
                className="text-blue"
              >
                Clear
              </button>

              <button
                onClick={() => {
                  setAllMissed(allMissed === "all" ? "missed" : "all");
                }}
                className={`grid grid-cols-[50px_50px] ${
                  allMissed === "missed"
                    ? "after:translate-x-[calc(100%-2px)]"
                    : ""
                } relative z-20 h-6 w-[100px] items-center rounded-[4px] bg-[#eeeeef] text-[10px] text-black after:absolute after:left-[1px] after:z-10 after:h-[22px] after:w-[50px] after:rounded-[4px] after:bg-white after:shadow-lg after:transition-transform after:duration-500 after:content-['']`}
              >
                <span
                  className={`z-20 ${
                    allMissed === "all" && "font-semibold"
                  } transition-all`}
                >
                  All
                </span>

                <span
                  className={`z-20 ${
                    allMissed === "missed" && "font-semibold"
                  } transition-all`}
                >
                  Missed
                </span>
              </button>
              <button
                onClick={() => {
                  setMode("view");
                }}
                className="justify-self-end text-blue"
              >
                Done
              </button>
            </>
          )}
        </div>

        <div className="recents-list max-h-[500px] overflow-x-hidden overflow-y-scroll pl-5">
          <h1 className="text-2xl font-bold text-black">Recents</h1>

          {formattedRecents.length > 0 ? (
            <div className="recents-list">
              {formattedRecents.map(
                (recent: {
                  id: number;
                  name: string;
                  place: string;
                  date: string;
                  status?: string;
                  outGoing?: boolean;
                  count: number;
                }) => (
                  <div
                    className={`${
                      mode === "view" && "cursor-pointer"
                    } transition-colors duration-300 hover:bg-[#f9f9f9]`}
                    onClick={() => {
                      if (mode === "view") {
                        dispatch(
                          addRecent({
                            id: Math.floor(Math.random() * 100),
                            name: recent.name,
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
                        setActive(true);
                        setNumber(recent.name);
                      }
                    }}
                    key={recent.id}
                  >
                    <div className="recent relative flex items-center justify-between gap-4 py-2">
                      <button
                        onClick={() => {
                          dispatch({
                            type: "recents/removeRecent",
                            payload: recent.id,
                          });
                        }}
                        className={`bg-[#ff3c2f] ${
                          mode === "edit" ? "translate-x-4" : "translate-x-0"
                        } absolute -left-9 flex size-4 items-center justify-center rounded-full transition-transform duration-300`}
                      >
                        <span className="h-[1px] w-2 bg-white"></span>
                      </button>

                      {recent.outGoing && (
                        <img
                          width={10}
                          src={outgoingCall}
                          alt=""
                          className={`${
                            mode === "edit" ? "translate-x-6" : "translate-x-0"
                          } absolute -left-5 top-[13px] transition-transform duration-300`}
                        />
                      )}

                      <div
                        className={`flex flex-col ${
                          mode === "edit" ? "translate-x-7" : "translate-x-0"
                        } transition-transform duration-300`}
                      >
                        <h2
                          className={`-mb-1 text-sm font-semibold ${
                            recent.status === "missed"
                              ? "text-red-500"
                              : "text-black"
                          }`}
                        >
                          {recent.name}{" "}
                          {recent.count > 1 && `(${recent.count})`}
                        </h2>
                        <p className="text-xs text-gray-400">{recent.place}</p>
                      </div>

                      <div
                        className={`recents-infos ${
                          mode === "edit" ? "translate-x-6" : "translate-x-0"
                        } flex items-center gap-2 transition-transform duration-300`}
                      >
                        <p className="text-xs text-gray-400">
                          {formatDate(recent.date)}
                        </p>
                        <img width="20" height="20" src={iosInfo} alt="" />
                      </div>
                    </div>
                    <div
                      className={`separator ${
                        mode === "edit" ? "translate-x-6" : "translate-x-0"
                      } w-full border-b border-[#eeeeee] transition-transform duration-300`}
                    />
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="flex h-[400px] items-center justify-center">
              <p className="text-lg text-gray">No Recents</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
