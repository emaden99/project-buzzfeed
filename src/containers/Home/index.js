import React from "react";
import {
  Container,
  Row,
  Col,
  Grid,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import soru from "./../../images/soru.png";
import soru2 from "./../../images/soru2.png";
import kizkulesi from "./../../images/kizkulesi.png";
import movie from "./../../images/top10.png";
let images_from = [
  "https://image.winudf.com/v2/image1/Y29tLmNhcmtiaWxpc2ltLnJlYWxjb2ZmZWVmb3J0dW5lX3NjcmVlbl83XzE1NjMyODMxNjNfMDU2/screen-7.jpg?fakeurl=1&type=.jpg",
  "https://yenisistemmatematik.com/wp-content/uploads/2019/03/Test-Logo-Circle-black-transparent.png",
];
//import algida from "./../../images/algida.png";
//import trendyol from "./../../images/trendyol.png";
export const Home = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xs="8">
          <span>
            <div
              class="row"
              className="w-75"
              sm={{ size: 6, order: 2, offset: 1 }}
            >
              <div class="row-lg-6" sm={{ size: 6, order: 2, offset: 1 }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Did You Know?</h5>
                    <img
                      src={soru2}
                      style={{ width: "120px" }}
                      alt="soru"
                    ></img>
                    <p class="card-text">
                      Did you know M&M's chocolate stands for the initials for
                      its inventors Mars and Murrie
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="row-lg-6"
                className="pt-4"
                sm={{ size: 6, order: 2, offset: 1 }}
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Did You Know?</h5>
                    <img src={soru} style={{ width: "120px" }} alt="soru"></img>
                    <p class="card-text">
                      Ralph Lauren's original name was Ralph Lifshitz
                    </p>
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </Col>
        <Col xs="4">
          <span>
          <div
              class="row"
              className="w-75"
              sm={{ size: 6, order: 2, offset: 1 }}
            >
              <div class="row-lg-6" sm={{ size: 6, order: 2, offset: 1 }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Did You Know?</h5>
                    <img
                      src={soru2}
                      style={{ width: "120px" }}
                      alt="soru"
                    ></img>
                    <p class="card-text">
                      Did you know M&M's chocolate stands for the initials for
                      its inventors Mars and Murrie
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="row-lg-6"
                className="pt-4"
                sm={{ size: 6, order: 2, offset: 1 }}
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Did You Know?</h5>
                    <img src={soru} style={{ width: "120px" }} alt="soru"></img>
                    <p class="card-text">
                      Ralph Lauren's original name was Ralph Lifshitz
                    </p>
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col sm="3">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <img src={kizkulesi} style={{ width: "120px" }} alt="soru"></img>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <img src={movie} style={{ width: "100px" }} alt="soru"></img>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <img
              src={images_from[0]}
              style={{ width: "100px" }}
              alt="soru"
            ></img>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <img
              src={images_from[1]}
              style={{ width: "120px" }}
              alt="soru"
            ></img>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
