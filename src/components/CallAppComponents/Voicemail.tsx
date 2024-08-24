export const Voicemail = () => {
  return (
    <div className="p-6 px-0">
      <h1 className="text-center text-black">Voicemail</h1>
      <div className="separator my-2 w-full border-b border-[#eeeeee]" />
      <div className="flex items-center justify-between">
        <p className="font-semibold text-black">Voicemail operator</p>

        <button className="rounded-3xl bg-[#efefef] px-4 text-sm text-black">
          Call
        </button>
      </div>
    </div>
  );
};
