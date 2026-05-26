import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column">
          <h4 className="footer__title">Resources</h4>
          <ul className="footer__list">
            <li><a href="#">Store Locations</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Special Offers</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Help</h4>
          <ul className="footer__list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li><a href="#">Our Brand</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© 2026 My First Store | All Rights Reserved</p>
        <div className="footer__links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}