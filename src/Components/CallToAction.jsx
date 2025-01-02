import React from 'react'
import shape16 from "../Pages/images/shape-16.svg";
import '../Pages/style.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="i pg gh ji">
    <img className="h p q" src={shape16} alt="Bg Shape" />

    <div className="bb ye i z-10 ki xn dr">
        <div className="tc uf sn tn un gg">
            <div className="animate_left to/2">
                <h2 className="fk vj zp pr lk ac">Seamless Development, Outstanding Results</h2>
                <p className="lk">
                Looking for tech solutions to elevate your business? We offer mobile apps, web platforms, UI/UX design, and system integration. Our solutions deliver results and lasting value to your customers.</p>
            </div>
            <div className="animate_right bf">
                <Link to="/contact" onClick={() => { window.scroll(0, 0); }} className="vc ek kk hh rg ol il cm gi hi">
                    Get Started Now
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default CallToAction