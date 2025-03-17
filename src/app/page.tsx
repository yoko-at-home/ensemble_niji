import { audioFiles } from "./audio";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl text-center">
          第十二回コンサート
          <br />
          <span className="text-base">横山潤子先生委嘱4作品</span>
        </h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {audioFiles.map((audio) => (
            <li key={audio.id} className="mb-4">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">{audio.title}</span>
                <audio controls className="w-[300px]">
                  <source src={audio.src} type="audio/mp3" />
                  お使いのブラウザは音声の再生に対応していません。
                </audio>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row" />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        アンサンブル虹
      </footer>
    </div>
  );
}
