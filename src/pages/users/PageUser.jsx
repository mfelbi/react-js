import axios from "axios";
import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
  Table,
} from "react-bootstrap";

const PageUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Mengambil data semua pengguna dari API
  const onGetUsers = () => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Fungsi ini untuk menyimpan pengguna yang dipilih ke dalam user
  const onGetUser = (value) => {
    setUser(value);
  };

  useEffect(() => {
    onGetUsers();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between">
            <h4>Data User</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder.Button xs={4} aria-hidden="true" />
                    </td>
                  </tr>
                )}
                {!isLoading &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{`${user.name.firstname} ${user.name.lastname}`}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <Button onClick={() => onGetUser(user)}>Detail</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
          {user && (
            <Col md={4}>
              <Card className="d-flex flex-column align-items-center">
                <Card.Header className="w-100">
                  <Badge bg="secondary">{user.username}</Badge>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{`${user.name.firstname} ${user.name.lastname}`}</Card.Title>
                  <Card.Text>
                    <strong>Email: </strong>
                    {user.email}
                    <br />
                    <strong>Telepon: </strong>
                    {user.phone}
                    <br />
                    <strong>Alamat: </strong>
                    {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PageUser;
