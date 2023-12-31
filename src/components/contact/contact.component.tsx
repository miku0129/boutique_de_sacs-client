import { FormEvent, Fragment, useState } from "react";
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
  const [destination, setDestination] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState("");

  console.log(firstName)
  console.log(destination)
  console.log(isChecked)
  console.log(content)



  const location = useLocation();
  const state = location.state as ContactPropsType;

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

      // emailJS送信データを定義
      const params = {
        from_first_name: firstName,
        from_last_name: lastName,
        email: email,
        whatappuserName: whatappuserName,
        destination: destination,
        content: content,
      };

      // emailJS送信
      try {
        await send(serviceID, templateID, params);
        alert("送信成功");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(error);
      }
    }
  };

  return (
    <Fragment>
      <div>Contact/ {state && state.item && state.item.name}</div>
      <br />

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
        </Row>

        <Row className="mb-3">
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
          <Form.Group as={Col} controlId="formGridState" xs={6}>
            <Form.Label>Un lieu de livraison</Form.Label>
            <Form.Select
              defaultValue="Saint François"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option>Saint François</option>
              <option>Le Moule</option>
              <option>Sainte Anne</option>
              <option>Gosier</option>
              <option>Pointe à Pitre</option>
              <option>Pointe à Jarry</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="<Rédiger un texte pour obtenir le consentement au traitement des données personnelles.>"
            onClick={() => setIsChecked(!isChecked)}
            value={`${isChecked}`}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridContents">
          <Form.Label htmlFor="inputForm">Contenu</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Form.Text id="contentHelpBlock" muted>
            Veuillez préciser la nature de votre demande.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* <div className="mt-20">
        <h2 className="text-center text-2xl font-bold">お問い合わせフォーム</h2>
        <div className="mx-auto mt-9 max-w-lg">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="w-full space-y-9 rounded bg-white p-3  shadow-2xl"
          >
            <div>
              <label
                htmlFor="name"
                className=" mb-3 block font-bold text-black"
              >
                お名前
              </label>
              <input
                className="form-input"
                id="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className=" mb-3 block font-bold text-black"
              >
                メールアドレス
              </label>
              <input
                className="form-input"
                id="email"
                type="text"
                placeholder="your@examle.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className=" mb-3 block font-bold text-black"
              >
                お問い合わせ内容
              </label>
              <textarea
                className="form-input"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="block w-full rounded bg-blue-700 py-2 px-3 text-lg font-bold text-white  shadow transition-all hover:cursor-pointer hover:opacity-80"
            />
          </form>
        </div>
      </div> */}

      <CustomBtn onClick={() => navigate(-1)}>Retour</CustomBtn>
    </Fragment>
  );
};

export default Contact;
