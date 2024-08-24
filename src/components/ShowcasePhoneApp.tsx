import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CallApp } from "./CallApp";

export const ShowcasePhoneApp = () => {
  useGSAP(() => {
    gsap.from("#call-intro", {
      scrollTrigger: {
        trigger: "#call-intro",
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from("#call-outro", {
      scrollTrigger: {
        trigger: "#call-outro",
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium text-white lg:text-7xl">
            iOS 17
          </h2>
          <h2 className="mb-8 text-center text-3xl font-medium text-white lg:text-7xl">
            A new way to contact.
          </h2>
          <h3 className="mb-12 text-center text-xl text-gray-100 lg:text-3xl">
            Keep your content private and secure with the new iOS 17.
          </h3>

          <div className="flex flex-col items-center gap-16 md:flex-row">
            <CallApp />
            <div className="flex max-w-[300px] flex-col gap-6">
              <p id="call-intro" className="max-w-[300px] text-2xl text-gray">
                The new iOS 17 is designed to keep your content{" "}
                <span className="text-white">private</span> and{" "}
                <span className="text-white"> secure</span>.
              </p>
              <p id="call-outro" className="max-w-[300px] text-2xl text-gray">
                With the new <span className="text-white">Private Relay</span>{" "}
                feature, your browsing history is kept private from ISPs and
                websites you visit. And with{" "}
                <span className="text-white">Hide My Email</span>, you can
                create unique, random email addresses that forward to your
                personal inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
