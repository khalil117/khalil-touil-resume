import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import LocationOn from "@material-ui/icons/LocationOn";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SchoolIcon from '@material-ui/icons/School';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PolymerIcon from '@material-ui/icons/Polymer';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Badge from "components/Badge/Badge.js";

import profile from "assets/img/faces/christian.jpg";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import image1 from "assets/img/complete-guide-react.jpg";
import image2 from "assets/img/javascript.jpg";
import image3 from "assets/img/php.jpg";
import image4 from "assets/img/ang4.jpg";
import image5 from "assets/img/ccna.jpg";

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { Card } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ProfilePage(props) {

  const classes = useStyles();
  const [classicModal1, setClassicModal1] = React.useState(false);
  const [classicModal2, setClassicModal2] = React.useState(false);
  const [classicModal3, setClassicModal3] = React.useState(false);
  const [classicModal4, setClassicModal4] = React.useState(false);

  const { ...rest } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Khalil TOUIL</h3>
                    <h6>Front-End Developer</h6>
                    <Button
                      href="https://www.linkedin.com/in/khalil-touil-a10a3514a/"
                      justIcon
                      link
                      className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button
                      href="https://github.com/khalil117"
                      justIcon
                      link
                      className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                21 August 1990
                <br />
                Single
                <br />
                Friedrich-Wilhem-Straße 54,12103 Berlin
                <br />
                +4915734480069
                <br />
                khalil.touil@esprit.tn.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Degrees",
                      tabIcon: SchoolIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12} >
                            <div className={classes.title}>
                              <h2>National Diploma of Engineering</h2>
                              <h4>Private School of Engineering and Technology{" "}
                                <a href="https://esprit.tn/" target="_blank"  > ESPRIT{" "} </a>
                            , September 2018.
                               Telecommunications </h4>
                              <h5>(Option: Embedded systems engineering & mobile development)</h5>
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <h2>Applied Degree in Communication Technologies</h2>
                            <h4>Higher Institute of Computer Science and Communication Technologies{" "}
                              <a href="http://www.isitcom.rnu.tn/" target="_blank"> ISIT'COM{" "} </a>
                              .June 2015  </h4>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">

                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.title}>
                              <h2>Web Developer Freelancer </h2>
                              <Button
                                color="primary"

                                onClick={() => setClassicModal4(true)}
                              >
                                <LibraryBooks className={classes.icon} />
                                  About
                              </Button>
                              <Dialog
                                classes={{
                                  root: classes.center,
                                  paper: classes.modal
                                }}
                                open={classicModal4}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setClassicModal4(false)}
                                aria-labelledby="classic-modal-slide-title"
                                aria-describedby="classic-modal-slide-description"
                              >
                                <DialogTitle
                                  id="classic-modal-slide-title"
                                  disableTypography
                                  className={classes.modalHeader}
                                >
                                  <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setClassicModal4(false)}
                                  >
                                    <Close className={classes.modalClose} />
                                  </IconButton>
                                  <h4 className={classes.modalTitle}>Web Developer</h4>
                                </DialogTitle>
                                <DialogContent
                                  id="classic-modal-slide-description"
                                  className={classes.modalBody}
                                >
                                  <p>
                                  Frontend Developer, Frontend Entwickler, Frontend Engineer, 
                                  Web Developer, Javascript Engineer, TypeScript, React, 
                                  Redux, JavaScript, CSS3, SASS, HTML5
                                  </p>
                                </DialogContent>
                                <DialogActions className={classes.modalFooter}>

                                  <Button color="github" target="_blank" href="https://github.com/khalil117/khalil-touil-resume">
                                    <i className={classes.socialIcons + " fab fa-github"} /> Link To GitHub
                                    </Button>


                                  <Button
                                    onClick={() => setClassicModal4(false)}
                                    color="danger"
                                    simple
                                  >
                                    Close
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                          </GridItem>


                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.title}>
                              <h2>e-Health - ItServ </h2>
                              <Button
                                color="primary"
                                onClick={() => setClassicModal1(true)}
                              >
                                <LibraryBooks className={classes.icon} />
                                  About
                              </Button>
                              <Dialog
                                classes={{
                                  root: classes.center,
                                  paper: classes.modal
                                }}
                                open={classicModal1}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setClassicModal1(false)}
                                aria-labelledby="classic-modal-slide-title"
                                aria-describedby="classic-modal-slide-description"
                              >
                                <DialogTitle
                                  id="classic-modal-slide-title"
                                  disableTypography
                                  className={classes.modalHeader}
                                >
                                  <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setClassicModal1(false)}
                                  >
                                    <Close className={classes.modalClose} />
                                  </IconButton>
                                  <h4 className={classes.modalTitle}>Full-stack Web Developer</h4>
                                </DialogTitle>
                                <DialogContent
                                  id="classic-modal-slide-description"
                                  className={classes.modalBody}
                                >
                                  <p>
                                    Graduation project. Proof of concept (POC) to develop a health portal.
                                    Many features as scheduling appointment online, displaying helth informations,
                                    Viewing bills/making payments. Checking prescription refills/requests.
                                  </p>
                                </DialogContent>
                                <DialogActions className={classes.modalFooter}>

                                  <Button color="github" href="https://github.com/khalil117/final" target="_blank">
                                    <i className={classes.socialIcons + " fab fa-github"} /> Github Repository
                                    </Button>


                                  <Button
                                    onClick={() => setClassicModal1(false)}
                                    color="danger"
                                    simple
                                  >
                                    Close
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                          </GridItem>

                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.title}>
                              <h2>Network equipment supervision - SOTACIBk  </h2>
                              <Button
                                color="primary"
                                onClick={() => setClassicModal2(true)}
                              >
                                <LibraryBooks className={classes.icon} />
                                  About
                              </Button>
                              <Dialog
                                classes={{
                                  root: classes.center,
                                  paper: classes.modal
                                }}
                                open={classicModal2}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setClassicModal2(false)}
                                aria-labelledby="classic-modal-slide-title"
                                aria-describedby="classic-modal-slide-description"
                              >
                                <DialogTitle
                                  id="classic-modal-slide-title"
                                  disableTypography
                                  className={classes.modalHeader}
                                >
                                  <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setClassicModal2(false)}
                                  >
                                    <Close className={classes.modalClose} />
                                  </IconButton>
                                  <h4 className={classes.modalTitle}>IT Administrator</h4>
                                </DialogTitle>
                                <DialogContent
                                  id="classic-modal-slide-description"
                                  className={classes.modalBody}
                                >
                                  <p>
                                    Graduation project. Served as supervisor of all of the network
                                    equipment of different sites of SOTACIB as well as system and
                                    material resources availability of equipment via Nagios monitoring
                                    infrastructure. The supervision solution is presented in the form of
                                    a software program that lists the
                                    different network hardware in a database, known as NMS
                                    (Network Management System). This program checks the equipment
                                    availability by pings and whether
                                    the background processes are running as intended or not.
                                  </p>
                                </DialogContent>
                                <DialogActions className={classes.modalFooter}>

                                  <Button
                                    onClick={() => setClassicModal2(false)}
                                    color="danger"
                                    simple
                                  >
                                    Close
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                          </GridItem>


                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.title}>
                              <h2>Travel agency application - Technoweb  </h2>
                              <Button
                                color="primary"

                                onClick={() => setClassicModal3(true)}
                              >
                                <LibraryBooks className={classes.icon} />
                                  Classic
                              </Button>
                              <Dialog
                                classes={{
                                  root: classes.center,
                                  paper: classes.modal
                                }}
                                open={classicModal3}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setClassicModal3(false)}
                                aria-labelledby="classic-modal-slide-title"
                                aria-describedby="classic-modal-slide-description"
                              >
                                <DialogTitle
                                  id="classic-modal-slide-title"
                                  disableTypography
                                  className={classes.modalHeader}
                                >
                                  <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setClassicModal3(false)}
                                  >
                                    <Close className={classes.modalClose} />
                                  </IconButton>
                                  <h4 className={classes.modalTitle}>Android Developer</h4>
                                </DialogTitle>
                                <DialogContent
                                  id="classic-modal-slide-description"
                                  className={classes.modalBody}
                                >
                                  <p>
                                    Developing an application to manage an online travel agency
                                    Structured analysis for requirements definition
                                    Market analysis and project feasibility study
                                    Mobile development: Android
                                    Web development: HTML, CSS, JavaScript
                                    MySQL RDBMS Management
                                  </p>
                                </DialogContent>
                                <DialogActions className={classes.modalFooter}>
                                  <Button
                                    onClick={() => setClassicModal3(false)}
                                    color="danger"
                                    simple
                                  >
                                    Close
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                          </GridItem>

                          


                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: PolymerIcon,
                      tabContent: (
                        <GridContainer justify="center">

                          <GridItem xs={12} sm={12} md={8}>
                          <div className={classes.title} >
                              <h3>Front End Development </h3>
                            </div>
                            <br />
                            <Badge color="primary">React</Badge>
                            <CustomLinearProgress
                              variant="determinate"
                              color="primary"
                              value={80}
                            />
                            <Badge color="danger">Angular</Badge>
                            <CustomLinearProgress
                              variant="determinate"
                              color="danger"
                              value={70}
                            />

                          </GridItem>

                          <GridItem xs={12} sm={12} md={8}>
                            <div className={classes.title} >
                              <h3>Back End Development </h3>
                            </div>
                            <br />
                            <Badge color="info">Spring </Badge>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                            <br />
                            <Badge color="success" >ExpressJS</Badge>
                            <CustomLinearProgress
                              variant="determinate"
                              color="success"
                              value={75}

                            />
                          </GridItem>
                        
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Certificats",
                      tabIcon: VerifiedUserIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                            <Card carousel>
                              <Carousel  {...settings}>
                                <div>
                                  <img
                                    src={image1}
                                    alt="First slide"
                                    className="slick-image" />
                                  <div className="slick-caption">
                                    <h4>
                                      <LocationOn className="slick-icons" />
                                        Comlete React Guide, Udemy
                                    </h4>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                  />
                                </div>
                                <div>
                                  <img
                                    src={image3}
                                    alt="Second slide"
                                    className="slick-image"
                                  />
                                </div>
                                <div>
                                  <img
                                    src={image4}
                                    alt="Second slide"
                                    className="slick-image"
                                  />
                                </div>
                                <div>
                                  <img
                                    src={image5}
                                    alt="Second slide"
                                    className="slick-image"
                                  />
                                </div>

                              </Carousel>

                            </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
