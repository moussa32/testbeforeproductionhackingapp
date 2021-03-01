import React from "react";
import { Link } from "react-router-dom";
import { FaTwitterSquare, FaSnapchatSquare, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col first">
                <h5 style={{ color: "rgb(243, 247, 253)" }}>
                  Hacking Technology
                </h5>
                <p className="p-medium py-3">
                  شركة{" "}
                  <strong style={{ color: "#08cc96" }}>
                    Hacking Technology
                  </strong>{" "}
                  هي شركة عربية برؤية عالمية، تسعى لخلق فضاء الكتروني آمن، وجعل
                  الانترنت مكاناً أفضل.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-col first">
                <h5 style={{ color: "rgb(243, 247, 253)" }}>الاتصال بنا</h5>
                <p className="p-medium py-3">
                  يمكنكم الاتصال بنا عند الحاجة من خلال الضغط على رابط اتصل بنا
                  المتوفر في روابط موقعنا أو الإرسال إلى بريدنا الالكتروني على
                  اسم النطاق أعلاه
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-col last">
                <h5 style={{ color: "rgb(243, 247, 253)" }}>
                  وسائل التواصل الاجتماعي
                </h5>
                <ul className="media-list li-space-lg p-medium d-flex px-0 py-3">
                  <li className="media">
                    <a href="https://twitter.com/h2ckingtech/">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li className="media">
                    <a href="https://www.snapchat.com/add/tzb">
                      <FaSnapchatSquare />
                    </a>
                  </li>
                  <li className="media">
                    <a href="https://www.youtube.com/channel/UC_nkNXJN-v5KXvig99sEBIw">
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="media">
                    <a href="https://t.me/H2ckingTech">
                      <FaTelegramPlane />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
              <p className="p-small text-muted">
                جميع الحقوق محفوظة ©<span id="ftDate"> 2021</span>
              </p>
              <div className="d-flex justify-content-between privacy-terms">
                <Link className="p-small mx-2" to="/privacy-policy">
                  سياسة الخصوصية
                </Link>
                <Link className="p-small mx-2" to="/terms-of-use">
                  اتفاقية الاستخدام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
