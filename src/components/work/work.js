/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import { getWorkCss } from "./work.styles";

export const Work = () => {
  const {
    containerCss,
    h2Styling,
    imageCss,
    workCardCss,
    workCardNumberCss,
    workCardTextCss,
    workCardTextOverlayCss,
  } = getWorkCss();

  return (
    <section css={containerCss}>
      <Container>
        <h2 css={h2Styling}>Coding</h2>

        <Row>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>01</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>This is the headlin e</h3>
                <h4>This is the sub-headline</h4>
              </figcaption>
              <img
                src="https://via.placeholder.com/600"
                alt="alt"
                css={imageCss}
              />
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>02</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>This is the headlin e</h3>
                <h4>This is the sub-headline</h4>
              </figcaption>
              <img
                src="https://via.placeholder.com/600"
                alt="alt"
                css={imageCss}
              />
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>03</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>This is the headlin e</h3>
                <h4>This is the sub-headline</h4>
              </figcaption>
              <img
                src="https://via.placeholder.com/600"
                alt="alt"
                css={imageCss}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
