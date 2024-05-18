import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
  Table,
} from 'react-bootstrap';

const PageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const onGetCategories = () => {
    setIsLoading(true);
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onGetCategoryProducts = (category) => {
    setIsLoadingProducts(true);
    setCategory(category);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoadingProducts(false);
      });
  };

  useEffect(() => {
    onGetCategories();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between">
            <h4>Kategori</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Nama Kategori</th>
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
                      <Placeholder.Button xs={4} aria-hidden="true" />
                    </td>
                  </tr>
                )}
                {!isLoading &&
                  categories.map((category) => (
                    <tr key={category}>
                      <td>{category}</td>
                      <td>
                        <Button onClick={() => onGetCategoryProducts(category)}>
                          Lihat Produk
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
          {category && (
            <Col md={4}>
              <h5>Produk dalam kategori: {category}</h5>
              {isLoadingProducts ? (
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              ) : (
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                  ))}
                </ul>
              )}
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PageCategory;
