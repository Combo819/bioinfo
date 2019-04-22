import React, { Component } from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import aboutImage from "../images/WechatIMG518.jpeg";
import Paragraph from "antd/lib/typography/Paragraph";
const { Title } = Typography;
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="center"
          align="top"
        >
          <Col>
            <Title>About</Title>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "50px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col span={10}>
            <Paragraph style={{ fontSize: "18px", marginTop: 30 }}>
            Welcome to our website, your "number one" source for prediction cases.
<br/>
We are from Georgia State University, Computer Science Department/Biochemistry Department. Here is our 8630 ADVANCED BIOINFORMATICS class project website instructed by Dr. Weber and Dr.Harrison. 
<br/>
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
<br/>
            </Paragraph>
            <Paragraph style={{ fontSize: "18px", marginTop: 30 }}>
            Sincerely,<br/>
Seth Sims, Yang Li, Yutong Gao
            </Paragraph>
          </Col>
          <Col span={6}>
            <img width={300} src={aboutImage} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
