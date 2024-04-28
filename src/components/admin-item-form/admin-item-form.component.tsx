import { useState } from "react";
// import {
//   addDocument_of_a_product,
//   updateDocument_of_a_product,
// } from "../../utils/firebase/firebase.utils";

import { formTypes } from "../../types/types";
// import { redirect_url_after_updating_product } from "../../assets/page-assets";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CustomContentContainer } from "../../utilities/components.styles";
// import "./admin-item-form.styles.scss";


const AdminItemForm = (props: {props: AdminItemFormProps}) => {
    console.log("props", props)
  const { formType, initFormState, id } = props.props;
  const [formData, setFormData] = useState(initFormState);
  const [validated, setValidated] = useState(false);

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  //   };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       window.alert("入力データが正しくありません");
  //       return;
  //     }
  //     setValidated(true);

  //     const product = {
  //       product_name: formData.product_name,
  //       product_description: formData.product_description,
  //       product_price:
  //         typeof formData.product_price === "undefined"
  //           ? null
  //           : Number(formData.product_price),
  //       shop_id: shopId,
  //       is_product_image_used_in_main_visual: false,
  //       is_book: false,
  //     };
  //     const image = {
  //       product_image_url: formData.product_images,
  //     };

  //     if (formType === formTypes["REGISTER"]) {
  //       await addDocument_of_a_product(shopId, product, image);
  //       setFormData(initFormState);
  //       window.location.reload();
  //     }
  //     else if (formType === formTypes["UPDATE"]) {
  //       await updateDocument_of_a_product(shopId, product, product_id, image);
  //       window.location = redirect_url_after_updating_product;
  //     }
  //   };

  return (
    <CustomContentContainer className="admin-item-form">
      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form noValidate validated={validated}>
        <Row>
          <Form.Group>
            <Form.Label htmlFor="product_name">アイテムの名前</Form.Label>
            <Form.Control
              type="text"
              id="product_name"
              name="product_name"
              value={formData.product_name}
              //   onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              アイテムの名前は必須です
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="product_price">
              アイテムの価格(単位/euro)
            </Form.Label>
            <Form.Control
              type="number"
              id="product_price"
              name="product_price"
              value={formData.product_price}
              //   onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="product_description">
              アイテムの説明
            </Form.Label>
            <Form.Control
              type="text"
              id="product_description"
              name="product_description"
              value={formData.product_description}
              //   onChange={handleChange}
            />
          </Form.Group>
          {formType === formTypes["REGISTER"] && (
            <Form.Group>
              <Form.Label htmlFor="product_images">アイテム写真URL</Form.Label>
              <Form.Control
                type="text"
                id="product_images"
                name="product_images"
                value={formData.product_images}
                // onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                アイテム写真のURLは必須です
              </Form.Control.Feedback>
            </Form.Group>
          )}
          {formType === formTypes["UPDATE"] && formData && (
            <Form.Group>
              <Form.Label htmlFor="product_images">アイテム写真URL</Form.Label>
              <Form.Control
                type="text"
                id="product_images"
                name="product_images"
                value={
                  formData.product_images &&
                  formData.product_images[0].product_image_url
                }
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                アイテム写真のURLは必須です
              </Form.Control.Feedback>
            </Form.Group>
          )}
        </Row>
        <br />
        <Button variant="success" type="submit">
          {formType === formTypes["REGISTER"]
            ? "アイテムを追加する"
            : "アイテムを更新する"}
        </Button>
      </Form> */}
    </CustomContentContainer>
  );
};

export default AdminItemForm;
