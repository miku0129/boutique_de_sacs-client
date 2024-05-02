import { useEffect, useState, ChangeEvent } from "react";
import {
  addDocument_of_an_item,
  getItemById,
  getMainImgOfItemById,
} from "../../utilities/firebase/firebase.utils";

import { formTypes } from "../../types/types";
// import { redirect_url_after_updating_product } from "../../assets/page-assets";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CustomContentContainer } from "../../utilities/components.styles";
// import "./admin-item-form.styles.scss";

const AdminItemForm = ({ props }: AdminItemFormProps) => {
  const { formType, initFormState, itemId } = props;
  const [formData, setFormData] = useState(initFormState);
  const [validated, setValidated] = useState(false);
  const [hasInitValForUpdate, setHasInitValForUpdate] = useState(false);

  if (props.formType === formTypes["UPDATE"]) {
    useEffect(() => {
      const setInitFormState = async () => {
        const item = await getItemById(itemId);
        const item_main_img_url = await getMainImgOfItemById(itemId);
        initFormState!.name = item.name;
        initFormState!.category = item.category;
        initFormState!.is_available = item.is_available;
        initFormState!.price = item.price;
        initFormState!.desc_1 = item.desc_1;
        initFormState!.desc_2 = item.desc_2;
        initFormState!.item_img_url = item_main_img_url;
        setFormData(initFormState);
        setHasInitValForUpdate(true);
      };
      setInitFormState();
    }, [hasInitValForUpdate]);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(
      (prevFormData): InitFormState => ({
        ...(prevFormData as InitFormState),
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
      name: formData!.name,
      category: formData!.category,
      is_available: formData!.is_available,
      price:
        typeof formData!.price === "undefined" ? 0 : Number(formData!.price),
      desc_1: formData!.desc_1,
      desc_2: formData!.desc_2,
    };
    const image = {
      item_img_urls: [formData!.item_img_url],
    };

    if (formType === formTypes["REGISTER"]) {
      await addDocument_of_an_item(item, image);
      setFormData(initFormState);
      window.location.reload();
    }
    // else if (formType === formTypes["UPDATE"]) {
    //   await updateDocument_of_a_product(shopId, product, product_id, image);
    //   window.location = redirect_url_after_updating_product;
    // }
  };

  return (
    formData && (
      <CustomContentContainer className="admin-item-form">
        {formType === formTypes["REGISTER"] && <h4>Ajouter un produit</h4>}
        {formType === formTypes["UPDATE"] && <h4>Update un produit</h4>}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
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
                : Unité euros. Pas d'entrée pour les produits commandés, etc.
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
          <Button variant="success" type="submit">
            {formType === formTypes["REGISTER"] ? "Ajouter" : "Update"}
          </Button>
        </Form>
      </CustomContentContainer>
    )
  );
};

export default AdminItemForm;
