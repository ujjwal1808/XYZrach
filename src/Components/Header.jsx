import React, {useState, useEffect} from 'react'
// import logo_light from "./images/logo-light.svg";
import '../Pages/style.css';
import '../Pages/bundle.js';
import { Link } from 'react-router-dom';
import logo_dark from "../Pages/images/logo-dark.svg";
import icon_moon from "../Pages/images/icon-moon.svg";
import mainLogo from "../Pages/images/45 png (2).png"


const Header = (props) => {
    const [page] = useState("home");
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || true
    );
    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.pageYOffset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`${darkMode ? "dark-mode" : "b eh"}`}>
        <header
                className={`g s r vd ya cj ${stickyMenu ? " rh sm _k dj bl ll " : ""
                    } `}
            >
                <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
                    <div className="vd to/4 tc wf yf">
                        <a href="index.html">
                            <img className="om" src={mainLogo} alt="Logo Light" width={150}/>
                            <img className="xc nm" src={logo_dark} alt="Logo Dark" />
                        </a>
                        <button className="po rc" onClick={() => setNavigationOpen(!navigationOpen)}>
                            <span className="rc i pf re pd">
                                <span className="du-block h q vd yc">
                                    <span
                                        className={`rc i r s eh um tg te rd eb ml jl dl ${navigationOpen ? "" : "ue el"
                                            }`}
                                    ></span>
                                    <span
                                        className={`rc i r s eh um tg te rd eb ml jl fl ${navigationOpen ? "" : "ue qr"
                                            }`}
                                    ></span>
                                    <span
                                        className={`rc i r s eh um tg te rd eb ml jl gl ${navigationOpen ? "" : "ue hl"
                                            }`}
                                    ></span>
                                </span>
                                <span className="du-block h q vd yc lf">
                                    <span
                                        className={`rc eh um tg ml jl el h na r ve yc ${navigationOpen ? "" : "sd dl"
                                            }`}
                                    ></span>
                                    <span
                                        className={`rc eh um tg ml jl qr h s pa vd rd ${navigationOpen ? "" : "sd rr"
                                            }`}
                                    ></span>
                                </span>
                            </span>
                        </button>
                    </div>

                    <div
                        className={`vd wo/4 sd qo f ho oo wf yf text-white ${navigationOpen ? "d hh rm sr td ud qg ug jc yh text-black" : ""
                            } ${stickyMenu ? "col-black" : ""}`}
                    >
                        <nav>
                            <ul className="tc _o sf yo cg ep col-white">
                                <li>
                                    <Link
                                        to="/"
                                        className={`xl ${props.data === "home" ? "mk" : ""}`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className={`xl ${props.data === "aboutus" ? "mk" : ""}`}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="c i">
                                    <Link
                                        to="/services"
                                        className={`xl tc wf yf bg ${(
                                            props.data ==="services"
                                        )
                                            ? "mk"
                                            : ""
                                            }`}
                                    >
                                        Services
                                        <svg
                                            className={`th mm we fd pf ${navigationOpen ? "wh" : ""}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </Link>
                                    <ul className={`a ${navigationOpen ? "tc" : ""}`}>
                                        <li>
                                            <Link
                                                to="/services"
                                                className={`xl ${page === "blog-grid" ? "mk" : ""}`}
                                            >
                                                Mobile App Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services"
                                                className={`xl ${page === "blog-single" ? "mk" : ""}`}
                                            >
                                                Web application development
                                            </Link>
                                        </li>
                                    
                                        <li>
                                            <Link
                                                to="/services"
                                                className={`xl ${page === "blog-single" ? "mk" : ""}`}
                                            >
                                                UI/UX design


                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services"
                                                className={`xl ${page === "blog-single" ? "mk" : ""}`}
                                            >
                                                Intergration services


                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services"
                                                className={`xl ${page === "blog-single" ? "mk" : ""}`}
                                            >
                                                Staff Augmentation
                                            </Link>
                                        </li>
                                    
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/blogs" className={`xl ${props.data === "blogs" ? "mk" : ""}`}>
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={`xl ${props.data === "contact" ? "mk" : ""}`}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="tc wf ig pb no">
                            <div className="pc h io pa ra">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                        className="pf vd yc uk h r za ab"
                                    />
                                    <img className="xc nm" src={icon_moon} alt="Moon" />
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Header