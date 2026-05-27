import { FaShippingFast, FaUndoAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import '../styles/banner.css';

export default function SecondBanner() {
  return (
    <div className="second-banner">
        <div className="perk-card">
            <FaShippingFast className="perk-icon" />
            <div>
            <h4>Express Delivery</h4>
            <p>Dispatched globally within 24 hours</p>
            </div>
        </div>

    </div>
  );
}