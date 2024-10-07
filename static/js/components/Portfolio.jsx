import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Button, ButtonGroup, Col, Container, Image, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";
import '../components/Portfolio.css';
import { projects } from "../data/constants";
import Pre from "./pre";
  

export default function Portfolio() {
    const [theme, settheme] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [part, setPart] = useState('');
    const [button1Clicked, setButton1Clicked] = useState(true);
    const [button2Clicked, setButton2Clicked] = useState(false);
    const [button3Clicked, setButton3Clicked] = useState(false);
    const [toggle, setToggle] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const form = useRef();



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1700);
    }, [])


    const openModal = (project) => {
        setSelectedProject(project);
        handleShow();
    };

    const handleCategoryClick = (category) => {
        setToggle(category);
    };

    let buttonClickTimeout;
    const handleButtonabout = (buttonNumber) => {
        const updateStateWithDelay = (buttonNumberToUpdate) => {
            switch (buttonNumberToUpdate) {
                case 1:
                    setButton1Clicked(true);
                    setButton2Clicked(false);
                    setButton3Clicked(false);
                    break;
                case 2:
                    setButton1Clicked(false);
                    setButton2Clicked(true);
                    setButton3Clicked(false);
                    break;
                case 3:
                    setButton1Clicked(false);
                    setButton2Clicked(false);
                    setButton3Clicked(true);
                    break;
                default:
                    break;
            }
        };

        clearTimeout(buttonClickTimeout);


        buttonClickTimeout = setTimeout(() => {
            updateStateWithDelay(buttonNumber);
        }, 300);
    };


    useEffect(() => {
        document.body.className = theme ? 'darkTheme' : 'lightTheme';
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const words = [
        'Flutter Developer',
        'MERN stack Developer',
        'Front-end Developer',
        'Back-end Developer',
        'Mobile App Developer',
    ];

    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 15;
    const speed = 70;


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            setPart(words[i].substr(0, offset));
            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [i, offset, forwards, skip_count]);


    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
            navbarToggler.click();
        }
    };


    return (
        <>
            {loading ? (
                <Container fluid className='loader bg-light d-flex justify-content-center align-items-center'>
                    <div>
                        <Pre />
                    </div>
                </Container>
            ) : (
            <Fade duration={1000} triggerOnce={true}>
                <div className="bgimg">
                    <ScrollToTop
                        smooth={true}
                        top={100}
                        svgPath="M128 8l-96 96h64v112h64v-112h64l-96-96z"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                        style={{ borderRadius: "50%" }}
                        className="custom-scroll-to-top animate__animated animate__bounce animate__delay-0.5s animate__fadeInRight"
                    />
                    {/* Navbar Start*/}
                    <Navbar expand="lg" className="navbarbg fixed-top " >
                        <Container>
                            <Navbar.Brand className='d-flex'>
                                <span className="devname d-flex" style={{ verticalAlign: 'top' }}>Midhun.dev<span style={{ fontSize: '80%' }} className="ms-1"> &copy;</span></span>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={`border-0 text-center ${theme && 'p-0 rounded-1 '} `}>
                                <Nav className="ms-auto p-1">
                                    <Nav.Link href="#Home" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Home</div></Nav.Link>
                                    <Nav.Link href="#About" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">About</div></Nav.Link>
                                    <Nav.Link href="#Techstack" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Tech Stack</div></Nav.Link>
                                    <Nav.Link href="#Projects" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Projects</div></Nav.Link>
                                    <Nav.Link href="#Contact" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Contact</div></Nav.Link>
                                    <Nav.Link className='ms-4' onClick={() => { settheme(!theme) }}>  {theme
                                        ?
                                        <svg viewBox="0 0 24 24" width="24" height="24" className="pointer navlink lightToggleIcon_pyhR" onClick={handleNavLinkClick}><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                                        :
                                        <svg viewBox="0 0 24 24" width="24" height="24" className="pointer navlink darkToggleIcon_wfgR" onClick={handleNavLinkClick}><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
                                    }</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* Navbar End*/}

                    {/* Section 1 - Intro */}
                    <Container id="Home" className="maincontainer mt-3 my-3 my-lg-0 ">
                        <Row className="h-100">
                            <Col lg={5} md={7} sm={12} className="order-lg-2 d-flex align-items-center justify-content-center" >
                                <div className="rightimg d-flex justify-content-lg-start align-items-center mt-5 mt-lg-0">
                                    <Image src="./assets/dp.jpeg" alt="" className="dpimg" />
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center ms-lg-5">
                                <div>
                                    <div>
                                        <Fade direction="down" duration={1000} triggerOnce={true}>
                                            <h1 className="leftfirsthead">Hi There!<span className="wave" role="img" aria-labelledby="wave">
                                                👋🏻
                                            </span></h1>
                                        </Fade>
                                        <Fade direction="down" duration={1500} triggerOnce={true}>
                                        <h1 className="leftsecondhead">I'm <strong className="main-name">Midhun Raj</strong></h1>
                                        </Fade>
                                        <Fade direction="down" duration={1500} triggerOnce={true}>
                                        <div className=" "><h2 className=" welcomtext ">{part}</h2></div>
                                        </Fade>
                                        <Fade direction="down" duration={1500} triggerOnce={true}>
                                        <p className="description">
                                            "Brief description with insights into myself, my vocational journey and what i engage in professionally."
                                        </p>
                                        </Fade>
                                    </div>
                                    <div>
                                    <Fade direction="up" duration={1500} triggerOnce={true}>
                                        <Row className="d-flex proicons">
                                            {theme
                                                ?
                                                <>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://github.com/MidhunrajGit0022" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillGithub size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://twitter.com/Midhun_raj0077" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <FaXTwitter size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://www.linkedin.com/in/midhunraj0022/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillLinkedin size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://www.instagram.com/_mi_._dhun_/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillInstagram size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="mailto:midhunraj0022@gmail.com" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillMail size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                </>
                                                :
                                                <>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://github.com/MidhunrajGit0022" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillGithub size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://twitter.com/Midhun_raj0077" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <FaXTwitter size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://www.linkedin.com/in/midhunraj0022/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillLinkedin size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="https://www.instagram.com/_mi_._dhun_/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillInstagram size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                        <a href="mailto:midhunraj0022@gmail.com" target="_blank" rel="noreferrer" className="home-social-icons">
                                                            <span className="social-icons">
                                                                <AiFillMail size={20} />
                                                            </span>
                                                        </a>
                                                    </Col>
                                                </>
                                            }
                                        </Row>
                                        </Fade>
                                        <Fade direction="up" duration={1500} triggerOnce={true}>
                                        <Row>
                                            {theme ? <>
                                                <div className="resumebtn">
                                                    <a href="./assets/cv.pdf" target="_blank">
                                                        <Button variant="outline-light" type="button" className="mt-4 rounded-5">
                                                            Get Resume 
                                                        </Button>

                                                    </a>
                                                </div>
                                            </>
                                                :
                                                <div className="resumebtn">
                                                    <a href="./assets/cv.pdf" target="_blank">
                                                        <Button variant="outline-dark" type="button" className="mt-4 rounded-5">
                                                            Get Resume 
                                                        </Button>

                                                    </a>
                                                </div>
                                            }
                                        </Row>
                                        </Fade>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* Section 1 Ended*/}


                    {/* Section 2 - About */}
                    <div>
                        <Container id="About">
                            {/* style={{ backgroundColor: '#da3cb7' }} */}
                            <Row>
                                <Col lg={7} className="order-lg-2">
                                    <div className="p-5 mt-lg-5 aboutdiv">
                                    <Fade direction="up" duration={1500} triggerOnce={true}>
                                        <span className="portfoliohead">ABOUT ME</span>
                                        </Fade>
                                        {/* <h5 className="navheads text-secondary mb-3"><b><i>{'<--  Who am I  --/>'}</i></b></h5> */}
                                        <Fade direction="up" duration={1500} triggerOnce={true}>
                                        <p className="aboutpara">Experienced developer adept in Flutter and MERN stack technologies
                                            (Flutter, Dart, Firebase, MongoDB, Express.js, React.js, Node.js).
                                            Skilled in frontend and backend development, with a focus on user-friendly design.
                                            Eager to collaborate and learn within a development team.</p>
                                            </Fade>
                                            <Fade direction="up" duration={1000} triggerOnce={true}>
                                        <Row>
                                            <Col xs={4}>
                                                <span className={`aboutcategoryhead ${button1Clicked && 'custom-underline'} `} onClick={() => handleButtonabout(1)}>Skills</span>
                                            </Col>
                                            <Col xs={4}>
                                                <span className={`aboutcategoryhead ${button2Clicked && 'custom-underline'} `} onClick={() => handleButtonabout(2)}>Experience</span>
                                            </Col>
                                            <Col xs={4}>
                                                <span className={`aboutcategoryhead ${button3Clicked && 'custom-underline'} `} onClick={() => handleButtonabout(3)}>Education</span>
                                            </Col>
                                        </Row>
                                        </Fade>
                                        <Row className="mt-4">
                                            {
                                                button1Clicked &&
                                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                                <div>
                                                    <Row>
                                                        <div>
                                                            <Row>
                                                                <span className="aboutrole">Web Development</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent">Web App Development</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <div className="mt-2">
                                                            <Row>
                                                                <span className="aboutrole">App Development</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent">Mobile App Development</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </div>
                                                </Fade>
                                            }
                                            {
                                                button2Clicked &&
                                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                                <div>
                                                    <Row>
                                                        <div>
                                                            <Row>
                                                                <span className="aboutrole">2023 - Current (1 Year)</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent">Softzane Solutions, Ayoor</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </div>
                                                </Fade>
                                            }
                                            {
                                                button3Clicked &&
                                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                                <div>
                                                    <Row>
                                                        <div>
                                                            <Row>
                                                                <span className="aboutrole">2018</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent text-start">Boys High Secondary School, Punalur - Kollam, Kerala</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <div className="mt-2">
                                                            <Row>
                                                                <span className="aboutrole">2018 - 2020</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent text-start">Boys Higher Secondary School, Punalur - Kollam, Kerala</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <div className="mt-2">
                                                            <Row>
                                                                <span className="aboutrole">2020 - 2023</span>
                                                            </Row>
                                                            <Row>
                                                                <span className="aboutcontent text-start">University Institute of Technology, Pathanapuram - Kollam, Kerala</span>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </div>
                                                </Fade>
                                            }

                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={5} className="d-none d-lg-block" >
                                    <>
                                        <Container  >
                                        <Fade  duration={1000} triggerOnce={true}>
                                            <div className="mt-lg-5 d-flex  justify-content-center align-items-center  ">

                                                <Image src="./assets/abut.jpg" className="aboutimg my-5" alt="Aboutpic"></Image>
                                            </div>
                                            </Fade>
                                        </Container>
                                    </>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* Section 2 Ended*/}

                    {/* Section 3 Tech Stack*/}
                    <div id="Techstack">
                        <Container className="text-lg-center text-center mt-5 techcontainer">
                            <div className="my-4 mx-lg-5 mx-2 ">
                            <Fade direction="up" duration={1000} triggerOnce={true}>
                                <span className="portfoliohead">TECH STACK</span>
                                </Fade>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                <p className="techstackpara mt-lg-1">These are the few Technologies, languages and frameworks that i grind on a regular basis...</p>
                           </Fade>
                            </div>
                            <Row className="mx-auto p-lg-3 mx-lg-3 py-1">
                                <Col lg={2} md={3} sm={4} xs={6} >
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Html</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1200} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">CSS 3</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1400} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">JS</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1600} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Flutter</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1800} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Dart</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={2000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">MongoDb</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://skillicons.dev/icons?i=express"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Express.js</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1200} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">React.js</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1400} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Node.js</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1600} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.simpleicons.org/redux/764ABC"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Redux</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1800} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Firebase</div>
                                    </div>
                                </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={2000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Git</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://skillicons.dev/icons?i=github"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">GitHub</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1200} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Bootstrap</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1400} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://react-bootstrap.netlify.app/img/logo.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">React Bootstrap</div>
                                    </div>
                                </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1600} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://jwt.io/img/pic_logo.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">JWT</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1800} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.simpleicons.org/php/777BB4"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-3"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Php</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={2000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">MySql</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">CodeIgniter</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1200} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">NPM</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6}>
                                <Fade direction="up" duration={1400} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://cdn.simpleicons.org/postman/FF6C37"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Postman</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6} className="rounded-5">
                                <Fade direction="up" duration={1600} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="./assets/api.png"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4 rounded-5"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">API</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6} className="rounded-5">
                                <Fade direction="up" duration={1800} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="./assets/Tailwind.webp"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-5 p-4 rounded-5"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Tailwind</div>
                                    </div>
                                    </Fade>
                                </Col>
                                <Col lg={2} md={3} sm={4} xs={6} className="rounded-5">
                                <Fade direction="up" duration={2000} triggerOnce={true}>
                                    <div className="stackcontent mt-3">
                                        <picture>
                                            <img
                                                src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png"
                                                alt="React"
                                                width="100"
                                                height="100"
                                                className="w-auto p-4 rounded-5"
                                            />
                                        </picture>
                                        <div className="text-center mb-2 text-sm md:text-md">Material UI</div>
                                    </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* Section 3 Ended*/}

                    {/* Section 4 Projects*/}
                    <div id="Projects">
                        <Container className="text-lg-center text-center mt-5 techcontainer">
                            <div className="my-4 mx-lg-5 mx-2">
                            <Fade direction="up" duration={1000} triggerOnce={true}>
                                <span className="portfoliohead">PROJECTS</span>
                                </Fade>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                <p className="techstackpara mt-lg-1">I have worked on a wide range of projects. From web apps to mobile apps. Here are some of my projects.</p>
                           </Fade>
                            </div>
                            <div>
                            <Fade direction="up" duration={1000} triggerOnce={true}>
                                {theme ? <>
                                    <ButtonGroup>
                                        <Button className={` rounded-start-5   ${toggle === 'all' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('all')}>ALL</Button>
                                        <Button className={` ${toggle === 'web app' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('web app')}>WEB APP'S</Button>
                                        <Button className={` rounded-end-5  ${toggle === 'android app' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('android app')}>ANDROID APP'S</Button>
                                    </ButtonGroup>
                                </>
                                    :
                                    <ButtonGroup className="">
                                        <Button className={`rounded-start-5 ${toggle === 'all' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('all')}>ALL</Button>
                                        <Button className={` ${toggle === 'web app' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('web app')}>WEB APP'S</Button>
                                        <Button className={`rounded-end-5 ${toggle === 'android app' ? 'active' : ''}`} variant={theme ? "outline-light" : "outline-dark"} onClick={() => handleCategoryClick('android app')}>ANDROID APP'S</Button>
                                    </ButtonGroup>
                                }
                                </Fade>
                            </div>
                            <div>
                                <Container className="p-lg-5 p-4">
                                <Fade direction="up" duration={1500} triggerOnce={true}>
                                    <Row>
                                        {projects
                                            .filter(project => toggle === 'all' || project.category === toggle)
                                            .map((project, index) => (
                                                <Col lg={4} md={6} sm={12} className="mt-3" key={index}>
                                                    <div className="Cardproject p-4" onClick={() => openModal(project)}>
                                                        <img className="projectimg img-fluid" src={project.image} alt="Project" />
                                                        <div className="projecttags mt-3">
                                                            {project.tags?.map((tag, index) => (
                                                                <span className="projecttag" key={index}>{tag}</span>
                                                            ))}
                                                        </div>
                                                        <div className="ProjectDetails mt-lg-2">
                                                            <div className="Projecttitle">{project.title}</div>
                                                            <div className="Projectrole">{project.role}</div>
                                                            <div className="Projectmainrole">{project.mainrole}</div>
                                                            <div className="Projectdate">{project.date}</div>
                                                            <div className="Projectdescription mt-2">{project.description}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                    </Row>
                                    </Fade>
                                    <Fade direction="up" duration={1000} triggerOnce={true}>
                                    {selectedProject && (
                                        <Modal show={show} onHide={handleClose} style={{ cursor: "pointer" }}>
                                            <Modal.Header closeButton className="modalbg">{selectedProject.role}</Modal.Header>
                                            <Modal.Body className="modalbg">
                                                <>
                                                    {/* <img src={selectedProject.image} className="modalimage" alt="Project Image" /> */}
                                                    {selectedProject.video ? (
                                                        <video className="modalimage img-fluid" controls>
                                                            <source src={selectedProject.video} type="video/mp4" />
                                                        </video>
                                                    ) : (
                                                        <img className="modalimage img-fluid" src={selectedProject.image} alt="Project" />
                                                    )}
                                                    <div className="ProjectDetails mt-lg-2">
                                                        <div className="modaltitle">{selectedProject.title}</div>
                                                        <div className="modaldate">{selectedProject.date}</div>
                                                        <div className="modaltags mt-2">
                                                            {selectedProject.tags?.map((tag, index) => (
                                                                <span className="modaltag" key={index}>{tag}</span>
                                                            ))}
                                                        </div>
                                                        <div className="modaldescription mt-2">{selectedProject.description}</div>
                                                    </div>
                                                </>
                                            </Modal.Body>
                                            <div className="modalbg rounded-bottom-3">
                                                <Modal.Footer className="modalbtngroup d-flex justify-content-center  align-items-center ">

                                                    {theme ? <>
                                                        {selectedProject?.github && (
                                                            <Button variant="outline-light" href={selectedProject?.github} target="_blank">
                                                                <BsGithub /> &nbsp;
                                                                GitHub
                                                            </Button>
                                                        )}
                                                        {selectedProject?.webapp && (
                                                            <Button
                                                                variant="outline-light"
                                                                href={selectedProject?.webapp}
                                                                target="_blank"
                                                               
                                                            >
                                                                <CgWebsite /> &nbsp;
                                                                Demo
                                                            </Button>
                                                        )}
                                                    </>
                                                        :
                                                        <>
                                                            {selectedProject?.github && (
                                                                <Button variant="outline-dark" href={selectedProject?.github} target="_blank">
                                                                    <BsGithub /> &nbsp;
                                                                    GitHub
                                                                </Button>
                                                            )}
                                                            {selectedProject?.webapp && (
                                                                <Button
                                                                    variant="outline-dark"
                                                                    href={selectedProject?.webapp}
                                                                    target="_blank"
                                                                   
                                                                >
                                                                    <CgWebsite /> &nbsp;
                                                                    Demo
                                                                </Button>
                                                            )}
                                                        </>

                                                    }
                                                </Modal.Footer>
                                            </div>
                                        </Modal>
                                    )}
                                    </Fade>
                                </Container>
                            </div>
                        </Container>
                    </div>
                    {/* Section 4 Ended*/}

                    {/* Section 5 Contact */}
                    <div id="Contact">
                        <Container className="text-lg-center text-center p-lg-5 p-4 contactcontainer">
                            <div className="my-4 mx-lg-5 mx-2">
                            <Fade direction="up" duration={1000} triggerOnce={true}>
                                <span className="portfoliohead">CONTACT</span>
                                </Fade>
                                <Fade direction="up" duration={1000} triggerOnce={true}>
                                <p className="techstackpara mt-lg-1">Feel free to reach out to me for any questions or opportunities!</p>
                                </Fade>
                            </div>
                            <Row className="text-lg-start text-center mt-5 p-lg-2">
                                <Col lg className="mx-lg-5 ">
                                    <Fade direction="up" duration={1500} triggerOnce={true}>
                                        <Row>
                                            <Col lg={3} className="py-3 px-3 contact__icon-box">
                                                <i className="fa-solid fa-location-dot fa-lg iconcontact"></i>
                                            </Col>
                                            <Col lg={9}>
                                                <span className="concthead">Location</span>
                                                <p className="contactcontent">Kerala, India</p>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Col>
                                <Col lg className="mx-lg-5 ">
                                    <Fade direction="up"  duration={2000} triggerOnce={true}> 
                                        <Row className="bg-info1">
                                            <Col lg={3} className="py-3 px-3 contactiocn">
                                                <i className="fa-solid fa-phone fa-lg iconcontact"></i>
                                            </Col>
                                            <Col lg={9}>
                                                <span className="concthead">Phone</span>
                                                <p className="contactcontent">+91 8086370435</p>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Col>
                                <Col lg className="mx-lg-5 ">
                                    <Fade direction="up" duration={2500} triggerOnce={true}>
                                        <Row className="bg-info1">
                                            <Col lg={3} className="py-3 px-3 contactiocn">
                                                <i className="fa-solid fa-envelope fa-lg iconcontact"></i>
                                            </Col>
                                            <Col lg={9}>
                                                <span className="concthead">Email</span>
                                                <a href="mailto:midhunraj0022@gmail.com" target="_blank" className=" text-decoration-none ">
                                                    <p className="contactcontent">midhunraj0022@gmail.com</p>
                                                </a>

                                            </Col>
                                        </Row>
                                    </Fade>
                                </Col>
                                {/* <Col lg className="mx-lg-5 ">
                                    <Fade direction="up" duration={3000} triggerOnce={true}>
                                        <Row className="bg-info1">
                                            <Col lg={3} md={3} className="py-3 px-3 contactiocn">
                                                <LuLanguages className="iconcontact fa-lg" />
                                            </Col>
                                            <Col lg={5} md={9}> 
                                                <span className="concthead">Language</span>
                                                <p className="contactcontent">Malayalam,English,Tamil</p>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Col> */}
                            </Row>
                        </Container>
                    </div>
                    {/* Section 5 Ended */}
                    {/* Section 6 Footer */}
                    <Container fluid className="footer">
                        <Row>
                            <Col md={4} className="footer-copywright">
                            <Fade direction="up" duration={2000} triggerOnce={true}>
                                <h3>Designed and Developed by Midhun Raj</h3>
                                </Fade>
                            </Col>
                            <Col md={4} className="footer-copywright">
                            <Fade direction="up" duration={2000} triggerOnce={true}>
                                <h3>Copyright © {new Date().getFullYear()} Midhun.dev</h3>
                                </Fade>
                            </Col>
                            <Col md={4} className="footer-body">
                            <Fade direction="up" duration={2000} triggerOnce={true}>
                                <div className="footer-icons">
                                    <a
                                        href="https://github.com/MidhunrajGit0022"
                                        style={{ color: "white" }}
                                        target="_blank"
                                       
                                        className="ms-3"
                                    >
                                        <AiFillGithub className="footericoncolor" />
                                    </a>
                                    <a
                                        href="https://twitter.com/Midhun_raj0077"
                                        style={{ color: "white" }}
                                        target="_blank"
                                       
                                        className="ms-3"
                                    >
                                        <FaXTwitter className="footericoncolor" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/midhunraj0022/"
                                        style={{ color: "white" }}
                                        target="_blank"
                                       
                                        className="ms-3"
                                    >
                                        <FaLinkedinIn className="footericoncolor" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/_mi_._dhun_/"
                                        style={{ color: "white" }}
                                        target="_blank"
                                       
                                        className="ms-3"
                                    >
                                        <AiFillInstagram className="footericoncolor" />
                                    </a>
                                </div>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                    {/* Section 6 Ended */}
                </div>
            </Fade>
            )}
        </>
    )
}
