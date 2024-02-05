import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

interface Snippet {
  id: number;
  name: string;
  code: string;
  creation_date: string;
  user: string | null;
}

const SnippetPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [snippet, setSnippet] = useState<Snippet>();

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/snippets/${id}`
        );
        setSnippet(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-5 ">
        <Row>
          <Col>
            <Card>
              <Card.Header>{snippet?.name}</Card.Header>
              <Card.Body>
                <Card.Title>{snippet?.user || "Anon"}</Card.Title>
                <Card.Text>
                  <pre>
                    <code className="pythob">{snippet?.code}</code>
                  </pre>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SnippetPage;
