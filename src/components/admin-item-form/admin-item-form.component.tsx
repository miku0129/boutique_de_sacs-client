import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  addDocument_of_an_item,
  getItemById,
  getMainImgOfItemById,
  updateDocument_of_an_item,
} from "../../utilities/firebase/firebase.utils";

import { formTypes } from "../../types/types";
import { redirect_url_after_updating_item, btn_back } from "../../asset/asset";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {
  CustomBtnGroup,
  CustomBtn,
  CustomContentContainer,
} from "../../utilities/components.styles";
import "./admin-item-form.styles.scss";

const AdminItemForm = ({ props }: AdminItemFormProps) => {
  const { formType, formStateTemplate, itemId } = props;
  const [formData, setFormData] = useState(formStateTemplate);
  const [itemImgId, setItemImgId] = useState(null);
  const [hasInitValForUpdate, setHasInitValForUpdate] = useState(false);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  if (props.formType === formTypes["UPDATE"]) {
    useEffect(() => {
      const setInitFormState = async () => {
        const item = await getItemById(itemId);
        formStateTemplate!.item_id_number = item.item_id_number;
        formStateTemplate!.name = item.name;
        formStateTemplate!.category = item.category;
        formStateTemplate!.is_available = item.is_available;
        formStateTemplate!.price = item.price;
        formStateTemplate!.desc_1 = item.desc_1;
        formStateTemplate!.desc_2 = item.desc_2;
        setFormData(formStateTemplate);
        const item_main_img = await getMainImgOfItemById(itemId);
        formStateTemplate!.item_img_url = item_main_img.url;
        setItemImgId(item_main_img.id);
        setHasInitValForUpdate(true);
      };
      setInitFormState();
    }, [hasInitValForUpdate]);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(
      (prevFormData): FormStateTemplate => ({
        ...(prevFormData as FormStateTemplate),
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      window.alert("Données incorrectes.");
      return;
    }
    setValidated(true);

    const item = {
      item_id_number: formData!.item_id_number,
      name: formData!.name,
      category: formData!.category,
      is_available: formData!.is_available,
      price:
        typeof formData!.price === "undefined" ? 0 : Number(formData!.price),
      desc_1: formData!.desc_1,
      desc_2: formData!.desc_2,
    };
    const image = {
      id: itemImgId,
      is_main: true,
      url: formData!.item_img_url,
    };

    if (formType === formTypes["REGISTER"]) {
      await addDocument_of_an_item(item, image);
      setFormData(formStateTemplate);
      window.location.reload();
    } else if (formType === formTypes["UPDATE"]) {
      await updateDocument_of_an_item(itemId, item, itemImgId, image);
      window.location.href = redirect_url_after_updating_item;
    }
  };

  const clearFormData = () => {
    formStateTemplate!.item_id_number = "";
    formStateTemplate!.name = "";
    formStateTemplate!.category = undefined;
    formStateTemplate!.is_available = undefined;
    formStateTemplate!.price = 0;
    formStateTemplate!.desc_1 = "";
    formStateTemplate!.desc_2 = "";
    formStateTemplate!.item_img_url = "";
    setFormData(formStateTemplate);
    navigate(-1);
  };

  return (
    <div>
      {(formType === formTypes["UPDATE"] && !hasInitValForUpdate && (
        <h4>Loading...</h4>
      )) ||
        (formData && (
          <CustomContentContainer className="admin-item-form">
            {formType === formTypes["REGISTER"] && <h4>Ajouter un produit</h4>}
            {formType === formTypes["UPDATE"] && <h4>Update un produit</h4>}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="form-row">
                <Form.Group>
                  <Form.Label htmlFor="item_id_number">
                    numéro d'identification de l'article
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="item_id_number"
                    name="item_id_number"
                    value={formData!.item_id_number}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Le nnuméro d'identification de l'article est obligatoire
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="name">Nom de l'article</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    value={formData!.name}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Le nom de l'article est obligatoire
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select
                    value={formData!.category}
                    onChange={(e) => {
                      setFormData({
                        ...formData!,
                        category: e.target.value as Category,
                      });
                    }}
                    required
                  >
                    <option></option>
                    <option>sacs</option>
                    <option>vannerie</option>
                    <option>autre</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Disponibilité</Form.Label>
                  <Form.Text muted>
                    : Produits de la commande définis comme "false".
                  </Form.Text>
                  <Form.Select
                    value={String(formData!.is_available)}
                    onChange={(e) =>
                      setFormData({
                        ...formData!,
                        is_available: e.target.value === "true" ? true : false,
                      })
                    }
                    required
                  >
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="price">Prix de l'article</Form.Label>
                  <Form.Text muted>
                    : Unité euros. Pas d'entrée pour les produits commandés,
                    etc.
                  </Form.Text>
                  <Form.Control
                    type="number"
                    id="price"
                    name="price"
                    value={formData!.price}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="desc_1">
                    Description de l'article.
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="desc_1"
                    name="desc_1"
                    value={formData!.desc_1}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="desc_2">
                    Description de matériaux de l'objet, etc.
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="desc_2"
                    name="desc_2"
                    value={formData!.desc_2}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formType === formTypes["REGISTER"] && (
                  <Form.Group>
                    <Form.Label htmlFor="item_img_url">
                      L'URL de la photo de l'article
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="item_img_url"
                      name="item_img_url"
                      value={formData!.item_img_url}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      L'URL de la photo de l'article est obligatoire
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
                {formType === formTypes["UPDATE"] && formData && (
                  <Form.Group>
                    <Form.Label htmlFor="product_images">
                      URL de la photo de l'article
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="item_img_url"
                      name="item_img_url"
                      value={formData.item_img_url}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      L'URL de la photo de l'article est obligatoire.
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              </Row>
              <br />
              <CustomBtnGroup>
                {formType === formTypes["UPDATE"] && (
                  <CustomBtn type="button" onClick={() => clearFormData()}>
                    {btn_back}
                  </CustomBtn>
                )}

                <Button variant="success" type="submit">
                  {formType === formTypes["REGISTER"] ? "Ajouter" : "Update"}
                </Button>
              </CustomBtnGroup>
            </Form>
          </CustomContentContainer>
        ))}
    </div>
  );
};

export default AdminItemForm;
