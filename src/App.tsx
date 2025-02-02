import { useState } from "react";
import DownloadForm from "./components/DownloadForm";
import Headers from "./components/Header";
import FormSection from "./components/FormSection";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import Media from "./components/Media";
const App = () => {
  const [downloadUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [media, setMedia] = useState<
    | {
        thumbnail: string;
        mediaUrl: string;
      }[]
    | null
  >(null);
  const handleLinkSubmit = async (link: string) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(
        "https://downloader.almoloo.com/instagram?url=" + link,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setMedia(
        data.media.map((mediaItem: any) => {
          return {
            mediaUrl: mediaItem.url,
            thumbnail: mediaItem.thumbnail,
          };
        })
      );
      console.log(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : " Please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 min-h-screen md:w-[500px] md:mx-auto">
      <Headers />
      <div className="flex flex-col px-4 py-8 md:p-12 md:rounded-sm bg-white shadow gap-7">
        <FormSection />
        <DownloadForm onSubmit={handleLinkSubmit} loading={loading} />
        {error && <div>{error}</div>}
      </div>
      {downloadUrl && (
        <div>
          <p>Instagram Downloader</p>
          <a href={downloadUrl} download>
            Download File
          </a>
        </div>
      )}
      {media ? (
        media.map((mediaItem) => (
          <Media
            download={mediaItem.mediaUrl}
            img={mediaItem.thumbnail}
            key={mediaItem.thumbnail}
          />
        ))
      ) : (
        <EmptyState />
      )}
      <Footer />
    </div>
  );
};

export default App;
