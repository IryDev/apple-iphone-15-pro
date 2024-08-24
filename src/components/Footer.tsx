import { footerLinks, lastLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="bg-black px-10 py-5">
      <div className="max-w-[1440px]">
        <h1 className="my-12 text-5xl font-medium text-gray-200">iPhone</h1>

        <div className="mb-4 flex flex-col gap-24 md:flex-row">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-100">Explore iPhone</p>
            {footerLinks.explore.map((link) => (
              <p key={link} className="text-2xl font-medium">
                {link}
              </p>
            ))}

            <p className="mt-12 text-[15px]">Compare iPhone</p>
            <p className="text-[15px]">Switch from Android</p>
          </div>

          <div className="flex gap-24">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-100">Shop iPhone</p>
              {footerLinks.shop.map((link) => (
                <p key={link} className="text-sm font-medium">
                  {link}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-100">Go Further</p>
              {footerLinks.further.map((link) => (
                <p key={link} className="text-sm font-medium">
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray">
          More ways to shop:{" "}
          <span className="text-blue underline">Find an Apple Store</span> or
          <span className="text-blue underline">other retailer</span> near you.
          Or call 1-800-MY-APPLE.
        </p>

        <div className="my-4 flex h-[1px] w-full bg-gray-100" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs text-gray">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            <p className="text-xs">
              {lastLinks.map((link, index) => (
                <span key={link}>
                  <span className="text-gray-200">{link}</span>
                  {index !== lastLinks.length - 1 && (
                    <span className="text-gray"> | </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
