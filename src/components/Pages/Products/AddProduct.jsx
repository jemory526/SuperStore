import React from "react";
import { Formik, Field } from "formik";
import { Container, Form, FormGroup, Label, Button } from "reactstrap";
import  productService from "../../services/productService";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        type: "",
        description: "",
        price: "",
      },
    };
  }

  componentDidMount() {
    console.log("Component Did mount");
  }

  addProduct = (values) => {
    productService.addProduct(values)
      .then(this.onProductAddSuccess)
      .catch(this.onProductAddError);
  };

  onProductAddSuccess = (response) => {
    console.log("Added product successfully" + response);
    this.props.history.push("/productlist");
  };

  onProductAddError = (response) => {
    console.log("Product add unsuccessful" + response);
  };

  handleSubmit = (values, { resetForm}) => {
    console.log(values);
    this.addProduct(values);
    resetForm(this.state.formData)
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Container>
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  handleSubmit,
                  isValid,
                  isSubmitting,
                } = props;
                return (
                  <Form
                    style={{ textAlign: "center" }}
                    onSubmit={handleSubmit}
                    className={"col-md-12"}
                  >
                    <FormGroup>
                      <Label style={{ fontWeight: "bold", padding: "10px" }}>
                        Product Name:
                      </Label>
                      <Field
                        name="name"
                        type="text"
                        values={values.productName}
                        placeholder="Enter product name here"
                        className={
                          errors.ProductName && touched.ProductName
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.ProductName && touched.ProductName && (
                        <span className="input-feedback">{errors.name}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label style={{ fontWeight: "bold", padding: "10px" }}>
                        Product Description:
                      </Label>
                      <Field
                        name="description"
                        type="text"
                        values={values.productDescription}
                        placeholder="Enter product description here"
                        className={
                          errors.productDescription && touched.productDescription
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.productDescription && touched.productDescription && (
                        <span className="input-feedback">{errors.description}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label style={{ fontWeight: "bold", padding: "10px" }}>
                        Product Type:
                      </Label>
                      <Field
                        name="type"
                        type="text"
                        values={values.productType}
                        placeholder="Enter product type here"
                        className={
                          errors.productType && touched.productType
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.productType && touched.productType && (
                        <span className="input-feedback">{errors.type}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label style={{ fontWeight: "bold", padding: "10px" }}>
                        Product Price:
                      </Label>
                      <Field
                        name="price"
                        type="decimal"
                        values={values.productPrice}
                        placeholder="Enter product price here"
                        className={
                          errors.productPrice && touched.productPrice
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.productPrice && touched.productPrice && (
                        <span className="input-feedback">{errors.price}</span>
                      )}
                    </FormGroup>
                    <Button type="submit" disabled={!isValid || isSubmitting}>
                        Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}


export default AddProduct;