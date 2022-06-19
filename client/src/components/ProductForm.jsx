/* eslint-disable react/jsx-curly-newline */
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import convertFileToBase64 from '../utils/convertToBase64'
import { addProduct } from '../features/products/productsSlice'

const ProductFormSchema = Yup.object().shape({
  displayName: Yup.string()
    .max(50, 'Product name must have less or equal then 40 characters')
    .required('Required'),
  price: Yup.number().min(1, 'Price must be above 1').required('Required'),
})

function ProductForm() {
  const notify = (text) => toast.success(text)
  const dispatch = useDispatch()

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={{
          displayName: '',
          price: 0,
          image: undefined,
        }}
        validationSchema={ProductFormSchema}
        onSubmit={async (values) => {
          dispatch(addProduct(values))
          notify('Product uploaded successfully')
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form-products-container">
            <div className="form-field-container">
              <label htmlFor="displayName">Name of product</label>
              <Field type="text" name="displayName" />
              <ErrorMessage
                name="displayName"
                className="error-msg-input"
                component="span"
              />
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

            <button type="submit">Upload</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ProductForm
