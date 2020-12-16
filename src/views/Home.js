import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
// import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
// import LandingPageHeader from "components/Headers/LandingPageHeader";
import IndexHeader from "components/Headers/IndexHeader";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BuildIcon from '@material-ui/icons/Build';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import SectionCarousel from "../views/index-sections/SectionCarousel"

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar active="home" />
      <IndexHeader page="home" />
      <div className="main">
        <div className="section text-center my-2" id="about-us">
          <Container className="mt-5">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description my-5">
                  With a team of young, dynamic and vibrant people, we work together with dedication to master the biggest challenges.
                  Our team is a mix of professionals from technical and creative fields who lead <span className="font-weight-bold">Hash Technologies</span> and its clients towards success.
                  <br /><br />At <span className="font-weight-bold">Hash Technologies</span>, we support, encourage and foster the qualities of respect and transparency within the organisation.
                  We motivate team work for better results and ensure complete customer satisfaction.
                  We owe a lot to our team of energetic and enthusiastic employees who work with the motto—Delivery Always. No Excuses. Period.
                </h5>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="services">
          <Container className="mt-5">
            <Row>
              <Col md="12">
                <div className="section-header my-4">
                  <h2>What we Do.....</h2>
                </div>
              </Col>
              <Col md="4" className="info-wrap">
                <div className="info px-4 py-5">
                  <div className="icon icon-info">
                    <AcUnitIcon />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Blockchain Development</h4>
                    <p className="description">
                      The development of decentralized applications based on blockchain and other related technologies.
                    </p>

                  </div>
                </div>
              </Col>
              <Col md="4" className="info-wrap">
                <div className="info px-4 py-5">
                  <div className="icon icon-info">
                    <LocalMallIcon />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Custom Software Services</h4>
                    <p>
                      We develop user-friendly eCommerce applications for both mobile and web platforms.
                    </p>

                  </div>
                </div>
              </Col>
              <Col md="4" className="info-wrap">
                <div className="info px-4 py-5">
                  <div className="icon icon-info">
                    <BuildIcon />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Development Services</h4>
                    <p>
                      OPEN SOURCE DEVELOPMENT - We are creating smart website
                    </p>

                  </div>
                </div>
              </Col>
              <Col className="offset-6 mt-4">
                <Button
                  className="btn-round mt-4 shadow"
                  color="info"
                  type="button"
                >
                  See More
                      <ArrowRightAltIcon />
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section my-4 text-center section-dark" id="projects">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Latest Work</h2>
                <br />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="6" className="my-4">
                <img src={require("../assets/img/dexchange.png")} alt="DeXchange" width="230px" />
              </Col>
              <Col md="6" className="my-4">
                <img src={require("../assets/img/bankoftron.png")} alt="DeXchange" />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>

        <div className="section my-4 text-center" id="partners">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Who collaborate with us?</h2>
                <h5 className="description my-5">
                  <span className="font-weight-bold">Hash Technologies</span> collaborates with some of multi-national tech companies.
                  <span className="font-weight-bold"> Blockchain</span> is the key factor for our partnership with all leading tech companies.
                </h5>
                <br />
              </Col>
            </Row>
          </Container>
          <div className="w-100 overflow-hidden">
            <Row className="bg-dark py-5">
              <Col md="3" className="my-3">
                <img src={require("../assets/img/bankoftron.png")} alt="DeXchange" />
              </Col>
              <Col md="3" className="my-3">
                <img src={require("../assets/img/bankoftron.png")} alt="DeXchange" />
              </Col>
              <Col md="3" className="my-3">
                <img src={require("../assets/img/bankoftron.png")} alt="DeXchange" />
              </Col>
              <Col md="3" className="my-3">
                <img src={require("../assets/img/bankoftron.png")} alt="DeXchange" />
              </Col>
            </Row>
          </div>
        </div>

        <div className="section text-center" id="teams">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section" id="contact">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="info" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
