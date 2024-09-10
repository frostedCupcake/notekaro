import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <section className="relative bg-[#FFF555]/60 px-2">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-md mx-auto text-center lg:max-w-lg lg:text-left lg:flex lg:items-center">
              <div>
                <div className="flex flex-row gap-2 items-center ">
                  <img src="assets/logo.png" alt="logo" className="h-10 w-10" />
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 px-2 sm:text-5xl">
                    NoteKaro
                  </h2>
                </div>
                <p className="mt-4 text-xl leading-6 text-gray-700">
                  A powerful, minimalistic, and AI-enhanced app that works
                  offline, respects your privacy, and is optimized for mobile.
                </p>
                <p className="mt-4 text-xl leading-6 text-gray-700 bg-white/90 p-1 rounded-md border-2 border-b">
                  オフラインで動作し、プライバシーを尊重し、モバイル向けに最適化された、強力でミニマルな
                  AI 強化アプリです。
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image
                src="/assets/landing.png"
                alt="AI Note-Taking App"
                width={700}
                className="rounded-lg shadow-xl border-2 border-black"
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section
        id="problem"
        className="py-20 bg-[#FF71AE]/30 text-gray-800 px-2"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">The Challange</h3>
          <ul className="list-disc pl-5 space-y-10">
            <span className="flex flex-row items-center">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Most solutions rely on cloud storage. Privacy-conscious users in
                Japan and India worry about the misuse of personal data,
                especially in cloud-based app
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  ほとんどのソリューションはクラウド
                  ストレージに依存しています。日本とインドのプライバシーを重視するユーザーは、特にクラウドベースのアプリでの個人データの悪用を懸念しています。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/pr-1.png"
                  alt=""
                  className="xl:block hidden w-[40rem] h-[15rem]"
                />
                <img
                  src="/assets/pr-3.png"
                  alt=""
                  className="xl:block hidden w-[40rem] h-[15rem]"
                />
              </span>
            </span>
            <span className="flex flex-row-reverse gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                AI-powered features like paraphrasing, speech-to-command, and
                speech-to-text typically require internet connectivity, limiting
                their use in offline scenarios.
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  言い換え、音声からコマンドへの変換、音声からテキストへの変換などの
                  AI
                  を活用した機能は通常、インターネット接続を必要とするため、オフライン
                  シナリオでの使用は制限されます。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/2023-10/microsoftteams-image_3.png"
                  alt=""
                  className="xl:block hidden w-[40rem] h-[15rem]"
                />
              </span>
            </span>
            <span className="flex flex-row gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Most note-taking apps have cluttered designs, overwhelming
                users/Elderly people who prefer a minimalist and
                distraction-free experience
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  ほとんどのメモアプリはデザインが乱雑で、ミニマリストで気を散らすことのないエクスペリエンスを好むユーザーや高齢者を圧倒しています。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/clutter.webp"
                  alt=""
                  className="xl:block hidden w-[25rem] h-[20rem]"
                />
              </span>
            </span>
          </ul>
        </div>
      </section>
      <section
        id="problem"
        className="py-20 bg-[#49C1FF]/30 text-gray-800 px-2"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">The Innovation</h3>
          <ul className="list-disc pl-5 space-y-10">
            <span className="flex flex-row items-center">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Privacy First: No cloud storage – all data is stored locally and
                encrypted, ensuring complete user control
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  プライバシー第一: クラウド ストレージは使用しません –
                  すべてのデータはローカルに保存され暗号化され、完全なユーザー
                  コントロールが保証されます。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/in-1.webp"
                  alt=""
                  className="xl:block hidden w-[20rem] h-[20rem]"
                />
              </span>
            </span>
            <span className="flex flex-row-reverse gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                AI Assistant - Using a pre-trained tensorflow-lite model
                optimized to run on low end devices for paraphrasing, text to
                speech, speech to text etc which can even run offline.
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  AI アシスタント - ローエンド
                  デバイスで実行するように最適化された事前トレーニング済みの
                  tensorflow lite
                  モデルを使用して、言い換え、テキストから音声への変換、音声からテキストへの変換などをオフラインで実行することもできます。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/2023-10/microsoftteams-image_3.png"
                  alt=""
                  className="xl:block hidden w-[40rem] h-[15rem]"
                />
              </span>
            </span>
            <span className="flex flex-row gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Simplified & Minimalistic UI, voice commands for ease of use,
                large fonts for better accessibility, better themes and
                background music.
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  簡素化されたミニマルな
                  UI、使いやすさを追求した音声コマンド、アクセシビリティを高める大きなフォント、優れたテーマと
                  BGM
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/declutter.webp"
                  alt=""
                  className="xl:block hidden w-[25rem] h-[25rem]"
                />
              </span>
            </span>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-[#FF71AE]/30 text-gray-800 px-2"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10">Features</h3>
          <ul className="list-disc pl-5 space-y-10 xl:w-[50%] mx-auto text-left font-semibold">
            <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
              Privacy First: Data never leaves your device – fully encrypted and
              secure.
              <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                プライバシー第一: データがデバイスから流出することはありません -
                完全に暗号化されており安全です。
              </span>
            </li>

            <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
              Offline AI Assistant.
              <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                オフラインAIアシスタント。
              </span>
            </li>

            <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
              Minimalist UI: Clean interface designed for accessibility with
              large fonts and simple navigation.
              <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                ミニマリスト UI:
                大きなフォントとシンプルなナビゲーションによるアクセシビリティを考慮して設計されたすっきりとしたインターフェイス。
              </span>
            </li>

            <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
              Voice Commands: Use voice commands to manage and organize your
              notes with ease.
              <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                音声コマンド:
                音声コマンドを使用してメモを簡単に管理および整理します。
              </span>
            </li>

            <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
              Background Music & Custom Themes.
              <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                バックグラウンドミュージックとカスタムテーマ。
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="problem" className="py-20 bg-white/30 text-gray-800 px-2">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Target Market</h3>
          <ul className="list-disc pl-5 space-y-10">
            <span className="flex flex-row items-center">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Student: 24-25 million college Indian College Students & 15
                million Japanese students
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  学生: インドの大学生 2,400 ～ 2,500 万人、日本人学生 1,500
                  万人
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/m-1.png"
                  alt=""
                  className="xl:block hidden w-[25rem] h-[10rem]"
                />
              </span>
            </span>
            <span className="flex flex-row-reverse gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Privacy-Conscious Users: Growing concerns over digital privacy,
                especially post-GDPR, make privacy a strong selling point
                globally.
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  プライバシーを意識するユーザー: デジタル
                  プライバシーに対する懸念が高まり、特に GDPR
                  以降、プライバシーが世界的に強力なセールス
                  ポイントとなっています。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="assets/m-2.png"
                  alt=""
                  className="xl:block hidden w-[25rem] h-[10rem]"
                />
              </span>
            </span>
            <span className="flex flex-row gap-10 items-center mt-10">
              <li className="max-w-2xl mx-auto text-xl xl:text-[1.5rem] leading-relaxed text-left">
                Many international travelers, especially to remote or
                underdeveloped areas, face unreliable or expensive internet
                access, making offline tools essential. In countries like India,
                domestic tourism is very strong, with 1.8 billion domestic
                tourists in 2019. Japan also sees significant domestic travel,
                with over 330 million domestic trips annually
                <span className="mt-4 text-xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
                  多くの海外旅行者、特に遠隔地や発展途上地域への旅行者は、インターネット
                  アクセスが不安定または高価であるため、オフライン
                  ツールが不可欠となっています。インドのような国では、国内観光が非常に好調で、2019年の国内観光客は18億人です。日本でも国内旅行が盛んで、年間3億3,000万人以上の国内旅行が行われています。
                </span>
              </li>
              <span className="flex flex-col gap-5 items-center">
                <img
                  src="/assets/m-3.webp"
                  alt=""
                  className="xl:block hidden w-[25rem] h-[25rem]"
                />
              </span>
            </span>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#49C1FF]/30 text-gray-800 px-2">
        <h1 className="font-bold text-5xl text-center">
          Thank You{" "}
          <span className="mt-4 text-3xl leading-6 bg-white/90 p-1 rounded-md border-2 border-b">
            ありがとう
          </span>
        </h1>
      </footer>
    </div>
  );
}
