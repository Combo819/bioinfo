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
          align="top"
        >
          <Col span={8}>
            <Paragraph style={{ fontSize: "20px", marginTop: 30 }}>
              Four score and seven years ago our fathers brought forth on this
              continent, a new nation, conceived in Liberty, and dedicated to
              the proposition that all men are created equal.
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
