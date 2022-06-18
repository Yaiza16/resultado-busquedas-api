import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const ProductFormSchema = Yup.object().shape({
  productName: Yup.string()
    .max(50, 'Menos de 50 carácteres')
    .required('Requerido'),
  price: Yup.number()
    .min(1, 'El precio tiene que ser mayor a 1')
    .required('Requerido'),
})

function ProductForm() {
  return (
    <Formik
      initialValues={{
        productName: '',
        price: 0,
        image: '',
      }}
      validationSchema={ProductFormSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values)
      }}
    >
      <Form className="form-products-container">
        <div className="form-field-container">
          <label htmlFor="productName">Nombre del producto</label>
          <Field name="productName" />
          <ErrorMessage name="productName" />
        </div>
        <div className="form-field-container">
          <label htmlFor="price">Precio</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />
        </div>

        <div className="form-field-container">
          <label htmlFor="image">Imagen</label>
          <Field name="image" type="file" />
          <ErrorMessage name="image" />
        </div>

        <button type="submit">Subir</button>
      </Form>
    </Formik>
  )
}

export default ProductForm
