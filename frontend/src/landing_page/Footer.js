import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Zerodha Logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p><strong>Company</strong></p>
            <Link to="/about">About</Link><br />
            <Link to="/products">Products</Link><br />
            <Link to="/pricing">Pricing</Link><br />
            <Link to="/referral">Referral programme</Link><br />
            <Link to="/careers">Careers</Link><br />
            <Link to="/tech">Zerodha.tech</Link><br />
            <Link to="/press">Press & media</Link><br />
            <Link to="/csr">Zerodha cares (CSR)</Link><br />
          </div>

          <div className="col">
            <p><strong>Support</strong></p>
            <Link to="/contact">Contact</Link><br />
            <Link to="/support">Support portal</Link><br />
            <Link to="/blog">Z-Connect blog</Link><br />
            <Link to="/charges">List of charges</Link><br />
            <Link to="/downloads">Downloads & resources</Link><br />
          </div>

          <div className="col">
            <p><strong>Account</strong></p>
            <Link to="/open-account">Open an account</Link><br />
            <Link to="/fund-transfer">Fund transfer</Link><br />
            <Link to="/challenge">60 day challenge</Link><br />
          </div>

        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
             Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;