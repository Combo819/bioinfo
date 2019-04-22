import React, { Component } from "react";
import {
  Row,
  Col,
  Divider,
  message,
  Upload,
  Icon
} from "antd";
import predictiveAnalysis from "../images/Warehouse Predicitve Analytics Process.jpg";

import Title from "antd/lib/typography/Title";
const Dragger = Upload.Dragger;

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model:'Not Selected',
    };
    this.uploadSuccess = this.uploadSuccess.bind(this);
  }
  componentDidMount() {}
  uploadSuccess(model) {
    this.setState({
      model,
    });
  }
  render() {
    const uploadPro = {
      name: "file",
      multiple: true,
      action: "http://127.0.0.1:5000/classification",
      onChange: info => {
        const status = info.file.status;
        console.log(info);

        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
          this.uploadSuccess(info.file.response.model);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    return (
      <div>
        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="center"
          align="top"
        >
          <Col>
            <Title>Analysis</Title>
          </Col>
        </Row>
        <Divider style={{ marginTop: "30px" }}>
          <Title level={3}>Prediction Model</Title>
        </Divider>
        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="space-around"
          align="top"
        >
          <Col span={5}>
            <img width={"350px"} src={predictiveAnalysis} />
          </Col>
          <Col span={4}>
            <Title style={{marginTop:'90px'}} level={4}>
              the input dataset is predicted to be <u>{this.state.model||'Not Selected'}</u>-infected
            </Title>
          </Col>
        </Row>
        <Divider style={{ marginTop: "50px" }}>
          <Title level={3}>Upload Dataset</Title>
        </Divider>

        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="center"
          align="top"
        >
          <Col span={8}>
            <Dragger {...uploadPro}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis;
