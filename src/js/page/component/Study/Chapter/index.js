import React from "react";
import Lesson from "./Lesson";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Chapter() {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Bắt đầu</Accordion.Header>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Kiến thức cốt lõi</Accordion.Header>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Xây dựng website</Accordion.Header>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
        <Accordion.Body>
          <Lesson />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
