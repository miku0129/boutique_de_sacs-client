import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";
import { deleteDocument_of_an_item } from "../../utilities/firebase/firebase.utils";

import { CustomItemlistBtnGroup } from "./admin-item-list.styles";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./admin-item-list.styles.scss";

const AdminItemList = () => {
  const items = useContext(ItemsContext)[0];
  return (
    <div>
      <hr />
      <h4>Liste de produits</h4>
      <Row xs={1} md={3} className="g-4 admin-item-list-row">
        {items &&
          items.map((item: Item) => {
            return (
              <Col key={item.id}>
                <Card className="admin-item-card">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.item_img_urls
                        ? item.item_img_urls
                            .filter((img) => img.is_main)
                            .map((img) => {
                              return (
                                <img
                                  className="admin-item-list-img"
                                  src={img.url}
                                  alt={`Id:${img.id}`}
                                  key={img.id}
                                />
                              );
                            })
                        : undefined}
                    </Card.Text>
                    <CustomItemlistBtnGroup>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteDocument_of_an_item(item.id)}
                      >
                        Supprimer
                      </Button>
                      <Link to={`item/${item.id}/edit`}>
                        <Button variant="secondary">Modifié</Button>
                      </Link>
                    </CustomItemlistBtnGroup>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default AdminItemList;
