import { FormEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { init, send } from "@emailjs/browser";

import { ContentLayout, CustomBtn } from "../../utilities/components.styles";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import "./contact.styles.scss";

type ContactPropsType = {
  item?: Item;
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dLocation, setDLocation] = useState("");
  const [text, setText] = useState("");

  const [itemIdNum, setItemIdNum] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemImg, setItemImg] = useState("");

  const location = useLocation();
  const state = location.state as ContactPropsType;
  useEffect(() => {
    if (state && state.item !== undefined) {
      setItemIdNum(state.item.id);
      setItemName(state.item.name);
    }
  }, [state]);
  useEffect(() => {
    if (
      state &&
      state.item !== undefined &&
      state.item.item_img_urls !== undefined
    ) {
      state.item.item_img_urls
        .filter((img) => img.is_main)
        .forEach((img) => setItemImg(img.url));
    }
  }, [state]);

  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // フォームのデフォルトの動作をキャンセル
    e.preventDefault();

    // 必要なIDをそれぞれ環境変数から取得
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      // emailJS初期化
      init(userID);

      // emailJS送信データを定義
      const params = {
        from_first_name: firstName,
        from_last_name: lastName,
        email: email,
        phone: phone,
        dLocation: dLocation,
        text: text,
        itemIdNum: itemIdNum,
        itemName: itemName,
      };

      // emailJS送信
      try {
        await send(serviceID, templateID, params);
        alert("Succès de la transmission");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDLocation("");
        setText("");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(error);
      }
    }
  };

  return (
    <div className="contact-form-container">
      <ContentLayout>
        {state !== null && (
          <div className="contact-form-item-image-container">
            <Card
              className="contact-form-item-image"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={itemImg} />
              <Card.Body>
                <Card.Title>{itemName}</Card.Title>
                <Card.Text>Numéro: {itemIdNum}</Card.Text>
                <Card.Text>50 euros</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}

        <Form onSubmit={(e) => onSubmit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstname">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formLastname">
              <Form.Label>Nom de famille</Form.Label>
              <Form.Control
                placeholder="Nom de famille"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" xs={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone" xs={6}>
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                placeholder="Numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState" xs={5}>
              <Form.Label>Localisation</Form.Label>
              <Form.Select
                defaultValue="Choisir..."
                value={dLocation}
                onChange={(e) => setDLocation(e.target.value)}
              >
                <option>Choisir...</option>
                <option>Saint François</option>
                <option>Le Moule</option>
                <option>Sainte Anne</option>
                <option>Gosier</option>
                <option>Pointe à Pitre</option>
                <option>Jarry</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridContents">
            <Form.Label htmlFor="inputForm">Contenu</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Text id="contentHelpBlock" muted>
              Veuillez préciser la nature de votre demande.
            </Form.Text>
          </Form.Group>

          <div className="contact-form-btn-layout">
            <CustomBtn type="button" onClick={() => navigate(-1)}>
              Retour
            </CustomBtn>
            <Button variant="success" type="submit">
              Soumettre
            </Button>
          </div>
        </Form>
      </ContentLayout>
    </div>
  );
};

export default Contact;
