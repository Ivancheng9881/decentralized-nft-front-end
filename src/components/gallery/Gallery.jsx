import styled from "styled-components";
import { useEffect, useState } from "react";
import Chibiz from "../Chibi";
import "./Gallery.css";
import Filter from "./Filter";
import { Container, Row, Col } from "react-bootstrap";

function Gallery() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [filtered, setFiltered] = useState([]);
  const [activeTrait, setActiveTrait] = useState(0);

  

  useEffect(() => {
    fetch("_metadata.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())

      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="section">
        <Container fluid>
          <Row>
            <Col className="column" lg={3}>
              <Filter
                data={data}
                setFiltered={setFiltered}
                activeTrait={activeTrait}
                setActiveTrait={setActiveTrait}
              />
            </Col>
            <Col className="column" lg={9}>
              <div className="chibi-gallery">
                {data.map((chibi) => {
                  return <Chibiz key={chibi.edition} chibi={chibi} />;
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
