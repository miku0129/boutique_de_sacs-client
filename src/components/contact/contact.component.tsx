import { FormEvent, Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { init, send } from "@emailjs/browser";

import { CustomBtn } from "../../utilities/components.styles";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./contact.styles.scss";

type ContactPropsType = {
  item?: Item;
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatappuserName, setWhatsappuserName] = useState("");
  const [dLocation, setDLocation] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [itemIdNum, setItemIdNum] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [text, setText] = useState("");

  console.log("itemIdNum", itemIdNum)

  const location = useLocation();
  const state = location.state as ContactPropsType;
  useEffect(() => {
    if (state && state.item !== undefined) {
      setItemIdNum(state.item.id);
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

  // console.log("contact state", state);

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

      console.log("item id num ??", itemIdNum)

      // emailJS送信データを定義
      const params = {
        from_first_name: firstName,
        from_last_name: lastName,
        email: email,
        whatappuserName: whatappuserName,
        dLocation: dLocation,
        itemIdNum: itemIdNum,
        text: text,
      };

      // emailJS送信
      try {
        await send(serviceID, templateID, params);
        alert("Succès de la transmission");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(error);
      }
    }
  };

  return (
    <Fragment>
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
          <Form.Group as={Col} controlId="formGridWhatsAppUserName" xs={6}>
            <Form.Label>Nom d'utilisateur WhatsApp</Form.Label>
            <Form.Control
              placeholder="Nom d'utilisateur WhatsApp"
              value={whatappuserName}
              onChange={(e) => setWhatsappuserName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState" xs={3}>
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
              <option>Pointe à Jarry</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWhatsAppUserName" xs={3}>
            <Form.Label>Numéro de l'article</Form.Label>
            <Form.Control
              value={itemIdNum}
              onChange={(e) => setItemIdNum(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridWhatsAppUserName" xs={3}>
            <Form.Label>Image du produit</Form.Label>
            <img src={itemImg} style={{ width: "200px" }} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridContents">
          <Form.Label htmlFor="inputForm">Contenu</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Text id="contentHelpBlock" muted>
            Veuillez préciser la nature de votre demande.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="<Rédiger un texte pour obtenir le consentement au traitement des données personnelles.>"
            onClick={() => setIsAgreed(!isAgreed)}
            value={`${isAgreed}`}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <CustomBtn onClick={() => navigate(-1)}>Retour</CustomBtn>
    </Fragment>
  );
};

export default Contact;
