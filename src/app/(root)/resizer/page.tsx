import { Compare } from "@/components/ui/Compare";
import { Button } from "@/components/ui/button";
import React from "react";
import Header from "@/components/custom/Header";
import ResizerFileUpload from "@/app/(root)/resizer/(components)/ResizerFileUpload";
import Result from "./(components)/Result";

export default function page() {
  return (
    <div>
      <div
        className="h-[80vh] md:h-screen"
        style={{
          background:
            "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)"
        }}
      >
        <div className="h-full max-w-6xl mx-auto relative flex items-start justify-center flex-col gap-12">
          <div className="w-full grid gap-4 md:pe-32 xl:pe-[32rem]">
            <Header
              title={"Image Resizer"}
              description={"Instantly resizes your image"}
              about={
                "Adjust the size of your image and the file size in just a few seconds."
              }
            />
          </div>
        </div>
        <ResizerFileUpload />
      </div>
      <div
        className="w-full h-44"
        style={{
          background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)"
        }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <Result />
        <div className="py-12 mt-24 grid md:grid-cols-3 gap-3">
          {[
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M9.28881 25.6318L23.278 3.64879C23.5465 3.22677 24.1998 3.417 24.1998 3.91722V19.7002C24.1998 19.7554 24.2446 19.8002 24.2998 19.8002H34.2395C34.644 19.8002 34.8811 20.2555 34.6491 20.5869L20.7094 40.5007C20.4291 40.9012 19.7998 40.7029 19.7998 40.214V26.5002C19.7998 26.445 19.755 26.4002 19.6998 26.4002H9.71064C9.3161 26.4002 9.07699 25.9646 9.28881 25.6318Z"
                    stroke="#DFEE0A"
                    strokeWidth="2"
                  />
                </svg>
              ),
              title: "Lighting Fast",
              description: "Remove background in seconds, not minutes"
            },
            {
              svg: (
                <svg
                  height="44"
                  width="44"
                  fill="none"
                  viewBox="0 0 44 44"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9275 23.5167L15.281 22.7537L15.281 22.7537L15.9275 23.5167ZM16.0182 23.4298L15.3058 22.7281L15.305 22.7289L16.0182 23.4298ZM12.1997 26.6753L11.5532 25.9123L11.5532 25.9123L12.1997 26.6753ZM11.9955 26.8903L12.8163 27.4615L12.8163 27.4615L11.9955 26.8903ZM31.784 23.6487L31.0915 24.3701L31.0915 24.3701L31.784 23.6487ZM28.6024 20.5943L27.9099 21.3157L27.9099 21.3157L28.6024 20.5943ZM27.4209 20.586L26.7386 19.855L26.7361 19.8573L27.4209 20.586ZM21.5278 26.1247L22.2101 26.8558L22.2127 26.8534L21.5278 26.1247ZM20.3281 26.0985L19.6122 26.7966L19.6136 26.7981L20.3281 26.0985ZM20.3126 26.0826L19.596 26.7801L19.5967 26.7808L20.3126 26.0826ZM20.2284 26.0009L20.8832 25.245L20.8831 25.245L20.2284 26.0009ZM17.3576 23.5142L18.0123 22.7584L18.0123 22.7584L17.3576 23.5142ZM17.273 23.4321L17.9899 22.7349L17.9892 22.7342L17.273 23.4321ZM17.2579 23.4166L17.9741 22.7187L17.9727 22.7173L17.2579 23.4166ZM16.0345 23.4132L15.3235 22.7101L15.3221 22.7115L16.0345 23.4132ZM29.4242 12.7184V11.7184C28.8719 11.7184 28.4242 12.1661 28.4242 12.7184H29.4242ZM30.014 12.7184H31.014C31.014 12.1661 30.5663 11.7184 30.014 11.7184V12.7184ZM30.014 13.2179V14.2179C30.5663 14.2179 31.014 13.7702 31.014 13.2179H30.014ZM29.4242 13.2179H28.4242C28.4242 13.7702 28.8719 14.2179 29.4242 14.2179V13.2179ZM4.5 11.6875V32.3125H6.5V11.6875H4.5ZM11.6875 39.5H32.3125V37.5H11.6875V39.5ZM39.5 32.3125V11.6875H37.5V32.3125H39.5ZM32.3125 4.5H11.6875V6.5H32.3125V4.5ZM39.5 11.6875C39.5 7.71795 36.282 4.5 32.3125 4.5V6.5C35.1775 6.5 37.5 8.82252 37.5 11.6875H39.5ZM32.3125 39.5C36.282 39.5 39.5 36.282 39.5 32.3125H37.5C37.5 35.1775 35.1775 37.5 32.3125 37.5V39.5ZM4.5 32.3125C4.5 36.282 7.71795 39.5 11.6875 39.5V37.5C8.82252 37.5 6.5 35.1775 6.5 32.3125H4.5ZM6.5 11.6875C6.5 8.82252 8.82252 6.5 11.6875 6.5V4.5C7.71795 4.5 4.5 7.71795 4.5 11.6875H6.5ZM16.5739 24.2797C16.6465 24.2181 16.7075 24.1551 16.7315 24.1307L15.305 22.7289C15.2973 22.7367 15.2919 22.7421 15.2869 22.7472C15.2821 22.7521 15.2789 22.7552 15.2767 22.7573C15.2721 22.7618 15.2743 22.7595 15.281 22.7537L16.5739 24.2797ZM12.8461 27.4382L16.5739 24.2797L15.281 22.7537L11.5532 25.9123L12.8461 27.4382ZM12.8163 27.4615C12.8078 27.4737 12.8033 27.4776 12.808 27.4727C12.8131 27.4675 12.8242 27.4568 12.8461 27.4382L11.5532 25.9123C11.4488 26.0008 11.3028 26.135 11.1747 26.3191L12.8163 27.4615ZM12.6875 27.872C12.6875 27.7247 12.7327 27.5815 12.8163 27.4615L11.1747 26.3191C10.8586 26.7733 10.6875 27.3149 10.6875 27.872H12.6875ZM12.6875 31.4531V27.872H10.6875V31.4531H12.6875ZM12.5469 31.3125C12.6245 31.3125 12.6875 31.3755 12.6875 31.4531H10.6875C10.6875 32.48 11.52 33.3125 12.5469 33.3125V31.3125ZM31.4531 31.3125H12.5469V33.3125H31.4531V31.3125ZM31.3125 31.4531C31.3125 31.3755 31.3755 31.3125 31.4531 31.3125V33.3125C32.48 33.3125 33.3125 32.48 33.3125 31.4531H31.3125ZM31.3125 24.8885V31.4531H33.3125V24.8885H31.3125ZM31.0915 24.3701C31.2327 24.5056 31.3125 24.6928 31.3125 24.8885H33.3125C33.3125 24.1482 33.0106 23.44 32.4766 22.9273L31.0915 24.3701ZM27.9099 21.3157L31.0915 24.3701L32.4766 22.9273L29.295 19.873L27.9099 21.3157ZM28.1033 21.3171C28.0487 21.368 27.9638 21.3674 27.9099 21.3157L29.295 19.873C28.5828 19.1892 27.4604 19.1813 26.7386 19.855L28.1033 21.3171ZM22.2127 26.8534L28.1058 21.3147L26.7361 19.8573L20.843 25.396L22.2127 26.8534ZM19.6136 26.7981C20.3132 27.5126 21.4662 27.5501 22.2101 26.8558L20.8455 25.3936C20.9021 25.3408 20.989 25.3441 21.0427 25.3989L19.6136 26.7981ZM19.5967 26.7808L19.6122 26.7966L21.0441 25.4004L21.0286 25.3845L19.5967 26.7808ZM19.5737 26.7567C19.5674 26.7513 19.5654 26.7491 19.5697 26.7533C19.5718 26.7553 19.5747 26.7583 19.5792 26.7629C19.5839 26.7676 19.5889 26.7727 19.596 26.7801L21.0293 25.3852C21.007 25.3623 20.9503 25.3032 20.8832 25.245L19.5737 26.7567ZM16.7029 24.2701L19.5737 26.7567L20.8831 25.245L18.0123 22.7584L16.7029 24.2701ZM16.5561 24.1293C16.5785 24.1523 16.6354 24.2117 16.7029 24.2701L18.0123 22.7584C18.0186 22.7638 18.0206 22.766 18.0163 22.7618C18.0142 22.7597 18.0113 22.7568 18.0068 22.7522C18.0021 22.7474 17.9971 22.7423 17.9899 22.7349L16.5561 24.1293ZM16.5417 24.1145L16.5568 24.13L17.9892 22.7342L17.9741 22.7187L16.5417 24.1145ZM16.7456 24.1163C16.6889 24.1737 16.5995 24.1736 16.543 24.1158L17.9727 22.7173C17.2473 21.9756 16.0521 21.9733 15.3235 22.7101L16.7456 24.1163ZM16.7307 24.1315L16.747 24.1149L15.3221 22.7115L15.3058 22.7281L16.7307 24.1315ZM29.4242 13.7184H30.014V11.7184H29.4242V13.7184ZM29.014 12.7184V13.2179H31.014V12.7184H29.014ZM30.014 12.2179H29.4242V14.2179H30.014V12.2179ZM30.4242 13.2179V12.7184H28.4242V13.2179H30.4242Z"
                    fill="#1CB4EC"
                  />
                </svg>
              ),
              title: "High Quality product",
              description: "Get crips,clean edges on your processed images"
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="stroke-[#63E810]"
                >
                  <path
                    d="M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C24.5888 5.5 27.0383 6.09618 29.2188 7.15873M35.4062 11.6875L20.9688 26.125L16.8438 22"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "Easy to use",
              description: "No technical skills required. Just upload and go"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`grid gap-2 pe-4 xl:pe-12 place-content-start bg-gray-900 p-4 xl:p-6 rounded-lg transition-transform duration-500 ${
                index === 0
                  ? "hover:shadow-neon-yellow"
                  : index === 1
                  ? "hover:shadow-neon-blue"
                  : "hover:shadow-neon-green"
              }`}
            >
              {item.svg}
              <span className="text-lg xl:text-2xl font-bold">
                {item.title}
              </span>
              <span className="text-sm xl:text-lg">{item.description}</span>
            </div>
          ))}
        </div>
        <div className="py-24">
          <div className="bg-gray-900 p-4 md:p-6 rounded-xl space-y-12">
            <span className="text-lg md:text-2xl font-bold">
              Why Choose Photocess bg remover?
            </span>
            <div className="space-y-6">
              {[
                {
                  title: "Professional-Grade Results",
                  desc: "Our Al-powered technology ensures clean, precise background removal for any image."
                },
                {
                  title: "Time-Saving Solution",
                  desc: "Process images in seconds, not hours. Perfect for bulk editing and tight deadlines."
                },
                {
                  title: "Versatile Applications",
                  desc: "Ideal for e-commerce, graphic design, social media content, and more"
                },
                {
                  title: "No Technical Skills Required",
                  desc: "User-friendly interface makes it easy for anyone to achieve professional results."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    className="size-10 md:size-6"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M11.9339 27.5295C8.23067 26.6608 5.33916 23.7693 4.4705 20.0661C3.84316 17.3917 3.84316 14.6083 4.4705 11.9339C5.33916 8.23068 8.23067 5.33916 11.9339 4.4705C14.6083 3.84317 17.3917 3.84317 20.0661 4.4705C23.7693 5.33916 26.6608 8.23067 27.5295 11.9339C28.1568 14.6083 28.1568 17.3917 27.5295 20.0661C26.6608 23.7693 23.7693 26.6608 20.0661 27.5295C17.3917 28.1568 14.6083 28.1568 11.9339 27.5295Z"
                      stroke="#0095FF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11.9339 27.5295C14.6083 28.1568 17.3917 28.1568 20.0661 27.5295C23.7693 26.6608 26.6608 23.7693 27.5295 20.0661C28.1568 17.3917 28.1568 14.6083 27.5295 11.9339C26.6608 8.23067 23.7693 5.33916 20.0661 4.4705C17.3917 3.84317 14.6083 3.84317 11.9339 4.4705C8.23067 5.33916 5.33916 8.23068 4.4705 11.9339"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.333 15.6668L14.9997 18.3335L19.6663 13.3335"
                      stroke="#0095FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="grid gap-1">
                    <span className="text-lg md:text-xl font-semibold">
                      {item.title}
                    </span>
                    <span className="text-sm md:text-base font-normal">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-center flex-wrap gap-6 items-center">
          {[
            {
              firstImage: "/beautiful little girl.png",
              secondImage: "/beautiful little girl bgremoved.png"
            },
            {
              firstImage: "/anime machanical girl.png",
              secondImage: "/anime machanical girl bgremoved.png"
            },
            {
              firstImage: "/Pet.png",
              secondImage: "/Pet bgremoved.png"
            },
            {
              firstImage: "/gamming laptop.png",
              secondImage: "/gamming laptop bgremoved.png"
            }
          ].map((item, index) => (
            <div className="" key={index}>
              <Compare
                firstImage={item.firstImage}
                secondImage={item.secondImage}
                initialSliderPercentage={50}
                slideMode="drag"
                showHandlebar
              />
            </div>
          ))}
        </div>
        <div className="py-12 grid place-content-center text-center gap-4">
          <span className="text-xl md:text-3xl font-bold">
            Explore more of our services
          </span>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {[
              {
                svg: (
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    className="size-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.03207 2.56006C5.74088 2.56006 3.05957 5.24137 3.05957 8.53256V23.4676C3.05957 26.7588 5.74088 29.4401 9.03207 29.4401H23.9671C27.2583 29.4401 29.9396 26.7581 29.9396 23.4663V8.53256C29.9396 5.24137 27.2576 2.56006 23.9658 2.56006H9.03207ZM9.03207 3.84006H23.9658C26.5659 3.84006 28.6596 5.93319 28.6596 8.53256V23.4663C28.6596 26.0664 26.5664 28.1601 23.9671 28.1601H9.03207C6.4327 28.1601 4.33957 26.0669 4.33957 23.4676V8.53256C4.33957 5.93319 6.4327 3.84006 9.03207 3.84006ZM10.3546 7.08631C9.93693 7.08631 9.48505 7.36647 9.33457 7.82381C9.0971 8.54582 8.53184 9.112 7.81082 9.34881C7.35371 9.499 7.07332 9.95023 7.07332 10.3676C7.07332 10.7852 7.35348 11.2358 7.81082 11.3863C8.53242 11.6238 9.09713 12.1894 9.33457 12.9113C9.48495 13.3684 9.9369 13.6488 10.3546 13.6488C10.7722 13.6488 11.2229 13.3684 11.3733 12.9113C11.6108 12.1897 12.1751 11.6238 12.8971 11.3863C13.3541 11.2359 13.6346 10.7852 13.6346 10.3676C13.6346 9.94989 13.3541 9.49919 12.8971 9.34881C12.1758 9.11142 11.611 8.54649 11.3733 7.82506V7.82381C11.2231 7.36669 10.7719 7.08631 10.3546 7.08631ZM20.1108 8.29131C19.6611 8.29131 19.1772 8.58993 19.0146 9.08381L18.2908 11.2863C17.9977 12.1779 17.2983 12.8762 16.4058 13.1701L14.2046 13.8951C13.7106 14.0575 13.4108 14.54 13.4108 14.9901C13.4108 15.4401 13.7106 15.9239 14.2046 16.0863L16.4071 16.8101C17.2986 17.1032 17.9964 17.8016 18.2896 18.6938L19.0146 20.8963C19.177 21.3903 19.6595 21.6901 20.1096 21.6901C20.5596 21.6901 21.0434 21.3903 21.2058 20.8963L21.9296 18.6938C22.2227 17.8023 22.9215 17.1038 23.8133 16.8101L26.0158 16.0863C26.5098 15.9239 26.8083 15.4401 26.8083 14.9901C26.8083 14.54 26.5098 14.0575 26.0158 13.8951L23.8133 13.1701C22.9221 12.877 22.2229 12.1786 21.9296 11.2876V11.2863L21.2058 9.08381C21.0432 8.58993 20.5606 8.29131 20.1108 8.29131ZM10.3546 8.54381C10.7227 9.36268 11.3587 9.99955 12.1771 10.3676C11.358 10.7356 10.7226 11.3727 10.3546 12.1913C9.98639 11.372 9.34968 10.7356 8.53082 10.3676C9.3498 9.99969 9.98654 9.36309 10.3546 8.54381ZM20.1096 9.85006L20.7146 11.6863C21.1344 12.9631 22.1366 13.9665 23.4133 14.3863L25.2508 14.9901L23.4133 15.5938C22.1368 16.0143 21.1344 17.017 20.7146 18.2938L20.1096 20.1313L19.5058 18.2938C19.0862 17.0168 18.0833 16.0138 16.8071 15.5938H16.8058L14.9696 14.9901L16.8071 14.3863C18.0842 13.9659 19.086 12.9631 19.5058 11.6863L20.1096 9.85006ZM12.4083 17.5338C11.9586 17.5338 11.4747 17.8324 11.3121 18.3263L11.2233 18.5963V18.5976C10.9302 19.4891 10.2314 20.1875 9.33957 20.4813L9.06957 20.5701C8.57623 20.7328 8.27707 21.2153 8.27707 21.6651C8.27707 22.1148 8.57623 22.5986 9.06957 22.7613L9.33957 22.8501H9.34082C10.2324 23.1432 10.9302 23.841 11.2233 24.7326V24.7338L11.3121 25.0038C11.4748 25.4972 11.9586 25.7963 12.4083 25.7963C12.8584 25.7963 13.3409 25.4965 13.5033 25.0026L13.5921 24.7338V24.7326C13.8852 23.841 14.5836 23.1433 15.4758 22.8501H15.4771L15.7471 22.7613C16.241 22.5989 16.5396 22.1151 16.5396 21.6651C16.5396 21.215 16.241 20.7325 15.7471 20.5701L15.4771 20.4813H15.4758C14.5843 20.1882 13.8859 19.4888 13.5921 18.5963L13.5033 18.3263C13.3407 17.8324 12.8581 17.5338 12.4083 17.5338ZM12.4083 19.0476C12.8329 20.2779 13.796 21.2408 15.0258 21.6651C13.7957 22.0892 12.8325 23.053 12.4083 24.2826C11.9841 23.053 11.0203 22.0892 9.79082 21.6651C11.0206 21.2404 11.984 20.2774 12.4083 19.0476Z"
                      fill="black"
                    />
                  </svg>
                ),
                text: "BG Remover"
              },
              {
                svg: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="size-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.55957 8.16006C2.55957 5.06758 5.06709 2.56006 8.15957 2.56006H23.8396C26.932 2.56006 29.4396 5.06758 29.4396 8.16006V23.8401C29.4396 26.9325 26.932 29.4401 23.8396 29.4401H8.15957C5.06709 29.4401 2.55957 26.9325 2.55957 23.8401V8.16006ZM21.7596 9.60006H17.2796C16.9256 9.60006 16.6396 9.88614 16.6396 10.2401C16.6396 10.594 16.9256 10.8801 17.2796 10.8801H20.2146L17.0146 14.0801H11.5196C10.461 14.0801 9.59957 14.9415 9.59957 16.0001V20.4801C9.59957 21.5386 10.461 22.4001 11.5196 22.4001H15.9996C17.0581 22.4001 17.9196 21.5386 17.9196 20.4801V14.985L21.1196 11.785V14.7201C21.1196 15.074 21.4056 15.3601 21.7596 15.3601C22.1135 15.3601 22.3996 15.074 22.3996 14.7201V10.2401C22.3996 9.88614 22.1135 9.60006 21.7596 9.60006Z"
                      fill="black"
                    />
                  </svg>
                ),
                text: "Image Upscaler"
              },
              {
                svg: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="size-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.55957 8.16006C2.55957 5.06758 5.06709 2.56006 8.15957 2.56006H23.8396C26.932 2.56006 29.4396 5.06758 29.4396 8.16006V23.8401C29.4396 26.9325 26.932 29.4401 23.8396 29.4401H8.15957C5.06709 29.4401 2.55957 26.9325 2.55957 23.8401V8.16006ZM21.7596 9.60006H17.2796C16.9256 9.60006 16.6396 9.88614 16.6396 10.2401C16.6396 10.594 16.9256 10.8801 17.2796 10.8801H20.2146L17.0146 14.0801H11.5196C10.461 14.0801 9.59957 14.9415 9.59957 16.0001V20.4801C9.59957 21.5386 10.461 22.4001 11.5196 22.4001H15.9996C17.0581 22.4001 17.9196 21.5386 17.9196 20.4801V14.985L21.1196 11.785V14.7201C21.1196 15.074 21.4056 15.3601 21.7596 15.3601C22.1135 15.3601 22.3996 15.074 22.3996 14.7201V10.2401C22.3996 9.88614 22.1135 9.60006 21.7596 9.60006Z"
                      fill="black"
                    />
                  </svg>
                ),
                text: "Image Upscaler"
              }
            ].map((item, index) => (
              <Button key={index} className="w-full bg-white hover:bg-white/90">
                {item.svg}
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
