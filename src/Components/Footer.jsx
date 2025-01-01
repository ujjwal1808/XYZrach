import React from "react";
import "./style.css"
import mainLogo from "../Pages/images/45 png (2).png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="bb ze ki xn 2xl:ud-px-0">
        
        <div className="ji ">

          <div className="tc uf  fg w-full">
            <div className="animate_top zd/2 to/4">
              <a href="index.html">
                <img src={mainLogo} width={200} alt="Logo Light" className="om" />
              </a>
              <p className="lc my-5">
                Complete Workflow Service Solutions
              </p>
              <div className="mb-7 w-11/12 ">
                <div className="mb-1 flex items-center">

                  <i class="fa-solid fa-envelope mr-2 "></i>
                  <p className="text-sm">
                  info@xyrachsolutions.com
                  </p> 
                </div>

                <div className="flex items-center">

                  <i class="fa-solid fa-location-dot mr-2"></i> 
                  <p className="text-sm">
                  Toronto 🇨🇦
                  </p>
                </div>


              </div>
              <ul className="tc wf cg">
                
                <li>
                  <Link to="https://www.instagram.com/xyrachtech/?igsh=c2tjb2Jsd3o0MDds">
                  <i class="fa-brands fa-instagram text-2xl hover:text-blue-600"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="vd roo tc sf rn un fg">
              <div className="">
                <h4 className="kk wm tj ec">Quick Links</h4>
                <ul>
                  <li><Link to="/" onClick={() => { window.scroll(0, 0); }} className="sc xl vb">Home</Link></li>
                  <li><Link to="/about-us" onClick={() => { window.scroll(0, 0); }} className="sc xl vb">About Us</Link></li>
                  <li><Link to="/services" onClick={() => { window.scroll(0, 0); }} className="sc xl vb">Services</Link></li>
                </ul>
              </div>

              <div className="">
                <h4 className="kk wm tj ec">Services</h4>

                <ul>
                  <li><Link href="/services" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Mobile App Development</Link></li>
                  <li><Link href="/services" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Web Application Development</Link></li>
                  <li><Link href="/services" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Integrated Services</Link></li>
                  <li><Link href="/services" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Ui/Ux Design</Link></li>
                </ul>
              </div>

              <div className="">
                <h4 className="kk wm tj ec">Support</h4>

                <ul>
                  <li><Link to="/blogs" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Our Blog</Link></li>
                  <li><Link to="/contact" onClick={() => {
                    window.scroll(0, 0);
                  }} className="sc xl vb">Contact Us</Link></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
        {/* Footer Bottom */}
        <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
          <div className="animate_top">
            <ul className="tc wf gg">
              <li><Link to="/contact" onClick={() => {
                window.scroll(0, 0);
              }} className="xl">Support</Link></li>
            </ul>
          </div>
          <div className="animate_top">
            <p>&copy; 2025 xyrach. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
