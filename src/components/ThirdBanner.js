import { FaHeadset, FaAward, FaGift } from 'react-icons/fa';
import '../styles/banner.css';

export default function ThirdBanner() {
  return (
    <div className="second-banner">
        <div className="perk-card">
            <FaHeadset className="perk-icon" />
            <div>
            <h4>24/7 Support</h4>
            <p>Instant expert assistance anytime</p>
            </div>
        </div>
        <div className="perk-card">
            <FaAward className="perk-icon" />
            <div>
            <h4>Premium Quality</h4>
            <p>Certified genuine and curated goods</p>
            </div>
        </div>
        <div className="perk-card">
            <FaGift className="perk-icon" />
            <div>
            <h4>Loyalty Rewards</h4>
            <p>Earn points and exclusive gifts</p>
            </div>
        </div>
    </div>
  );
}