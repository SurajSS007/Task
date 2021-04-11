import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Card,
  FormControl,
  Col,
} from "react-bootstrap";
import axios from "../axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import image from "../player-images";
function Players() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);


  const [searchdata, setSearchdata] = useState('');
  const [searchdataPf, setSearchdataPf] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      axios.get("/b/604f1c137ea6546cf3ddf46e").then((res) => {
        let temp = res.data.playerList;
        temp.reverse();
        setData(temp);
        setDatas(temp)
      });
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
      setSearchdata(e.target.value)
      let ass = e.target.value
     let filtered = data.filter((item)=> item.TName.toLowerCase().indexOf(ass.toLowerCase()) !== -1)
     setDatas(filtered)
  }

  
  const handleSearchTwo = (e) => {
    setSearchdataPf(e.target.value)
    let ass = e.target.value
   let filtered = data.filter((item)=> item.PFName.toLowerCase().indexOf(ass.toLowerCase()) !== -1)
   setDatas(filtered)
}

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FormControl
              placeholder="Enter TName"
              aria-label="Enter TName"
              key="Id"
              onChange={handleSearch}
              value={searchdata}
            />
            <FormControl
            placeholder="Enter PFName"
            aria-label="Enter PFName"
            key="Id"
            onChange={handleSearchTwo}
            value={searchdataPf}
          />
          </Col>
        </Row>
      </Container>
      <div style={{ display: "flex", flexWrap: "wrap", border: "15px" }}>
        {data && searchdata == '' && searchdataPf == '' &&
          data.map((item) => {
            return (
              <div>
                <Card style={{ width: "18rem", margin: "20px" }}>
                  <Card.Img
                    variant="top"
                    src={`/player-images/${item.Id}.jpg`}
                    alt="ImagenotFound"
                  />
                  <Card.Body>
                    <Card.Title>{item.PFName}</Card.Title>
                    <Row>
                      <Col>
                        <Card.Text>{item.SkillDesc}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>Price : ${item.Value}</Card.Text>
                      </Col>
                    </Row>
                    <Card.Text>
                      {item.UpComingMatchesList[0].CCode} Vs{" "}
                      {item.UpComingMatchesList[0].VsCCode}
                    </Card.Text>
                    <Card.Text>{item.UpComingMatchesList[0].MDate}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })} 
          {
            searchdata !== '' && 
            datas.map((item) => {
              return (
                <div>
                  <Card style={{ width: "18rem", margin: "20px" }}>
                    <Card.Img
                      variant="top"
                      src={`/player-images/${item.Id}.jpg`}
                      alt="ImagenotFound"
                    />
                    <Card.Body>
                      <Card.Title>{item.PFName}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text>{item.SkillDesc}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>Price : ${item.Value}</Card.Text>
                        </Col>
                      </Row>
                      <Card.Text>
                        {item.UpComingMatchesList[0].CCode} Vs{" "}
                        {item.UpComingMatchesList[0].VsCCode}
                      </Card.Text>
                      <Card.Text>{item.UpComingMatchesList[0].MDate}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          }
          {
            searchdataPf !== '' && 
            datas.map((item) => {
              return (
                <div>
                  <Card style={{ width: "18rem", margin: "20px" }}>
                    <Card.Img
                      variant="top"
                      src={`/player-images/${item.Id}.jpg`}
                      alt="ImagenotFound"
                    />
                    <Card.Body>
                      <Card.Title>{item.PFName}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text>{item.SkillDesc}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>Price : ${item.Value}</Card.Text>
                        </Col>
                      </Row>
                      <Card.Text>
                        {item.UpComingMatchesList[0].CCode} Vs{" "}
                        {item.UpComingMatchesList[0].VsCCode}
                      </Card.Text>
                      <Card.Text>{item.UpComingMatchesList[0].MDate}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          }
      </div>
    </div>
  );
}

export default Players;
