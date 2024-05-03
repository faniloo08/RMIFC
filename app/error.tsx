"use client"

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
// import FooterOne from "../common/elements/footer/FooterOne";
// import HeaderOne from "../common/elements/header/HeaderOne";
// // import { getAllPosts } from "../../lib/api";
// import HeadTitle from "../common/elements/head/HeadTitle";
// import { fetchAPI, getAllPosts } from "../../lib/api2";
// import { getGlobalMeta } from "../../lib/api2";

const Error404: FC = () => {
  return (
    <>
      {/* <HeadTitle pageTitle={meta} /> */}
      {/* <HeaderOne
        postData={allPosts}
        meta={meta}
        pClass="header-light header-sticky header-with-shadow"
      /> */}
      <div className="error-area bg-color-grey">
        {/* <div
        className="error-area bg-color-grey"
        style={{ backgroundImage: "url('/images/bg/bg-image-4.webp')" }}
      > */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <Image width={788} height={519} src="/404.png" alt="Error Images" />
                <h1 className="title">Page not found!</h1>
                <p>
                  Sorry, but the page you were looking for could not be found.
                </p>
                <div className="back-totop-button cerchio d-inline-block">
                  <Link href="/">
                    <a className="axil-button button-rounded hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Back to Homepage">
                          Back to Homepage
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterOne /> */}
    </>
  );
};

export default Error404;
