import { useState } from "react";
type DownloadFormProps = {
  onSubmit: (link: string) => void;
  loading: boolean;
};
const DownloadForm = ({ onSubmit, loading }: DownloadFormProps) => {
  const [link, setLink] = useState<string>("");
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link.trim()) {
      onSubmit(link);
      setLink("");
    }
  };
  return (
    <form className="w-full" onSubmit={handelSubmit}>
      <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center gap-2">
        <input
          className=" grow border-1 rounded-md border-neutral-400 outline-0 pt-1 pb-2 px-3 text-base disabled:bg-neutral-100 disabled:cursor-not-allowed"
          type="url"
          placeholder="insert Instagram link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={loading}
        ></input>
        <button
          className="grow md:grow-0 px-3 pt-1 pb-2 p-3 text-base border-1 rounded-md bg-sky-500 text-white cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Download"}
        </button>
      </div>
    </form>
  );
};
export default DownloadForm;
