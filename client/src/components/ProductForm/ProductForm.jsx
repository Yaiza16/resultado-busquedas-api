/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import convertFileToBase64 from '../../utils/convertToBase64'
// import convertFileToBase64 from '../../utils/convertToBase64'
// import axios from 'axios'

const ProductFormSchema = Yup.object().shape({
  displayName: Yup.string()
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
        displayName: '',
        price: 0,
        image: undefined,
      }}
      validationSchema={ProductFormSchema}
      onSubmit={async (values) => {
        await axios.post('http://localhost:5000/api/products', values)
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className="form-products-container">
          <div className="form-field-container">
            <label htmlFor="displayName">Name of product</label>
            <Field type="text" name="displayName" />
            {errors.displayName && touched.displayName ? (
              <span>{errors.displayName}</span>
            ) : null}
          </div>
          <div className="form-field-container">
            <label htmlFor="price">Price</label>
            <Field type="number" name="price" />
            <ErrorMessage
              name="price"
              className="error-msg-input"
              component="span"
            />
          </div>

          <div className="form-field-container">
            <label htmlFor="image">Image</label>
            <Field
              type="file"
              name="image"
              value={undefined}
              onChange={async (e) =>
                setFieldValue(
                  'image',
                  await convertFileToBase64(e.target.files[0])
                )
              }
            />
            <ErrorMessage name="image" />
          </div>

          <button type="submit">Subir</button>
        </Form>
      )}
    </Formik>
  )
}

export default ProductForm
