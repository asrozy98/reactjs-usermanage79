import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CSpinner,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, onCreateUserForm } from 'src/redux/actions/Users'
import { NavLink } from 'react-router-dom'

const CreateUser = () => {
  const dispatch = useDispatch()
  const { userCreate, loading, error, message } = useSelector((state) => state.UsersReducer)

  const handleChange = (value, inputType) => {
    console.log(userCreate)
    dispatch(onCreateUserForm(value, inputType))
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            {message && <div className="alert alert-warning">{message}</div>}
            {error && Array.isArray(error)
              ? error.map((item, index) => (
                  <div key={index} className="alert alert-danger">
                    {item}
                  </div>
                ))
              : error && <div className="alert alert-danger">{error}</div>}
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  value={userCreate.name ?? ''}
                  placeholder="Name"
                  onInput={(e) => handleChange(e.target.value, 'name')}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Username</CFormLabel>
                <CFormInput
                  type="text"
                  id="username"
                  value={userCreate.username ?? ''}
                  placeholder="username"
                  onInput={(e) => handleChange(e.target.value, 'username')}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="password"
                  value={userCreate.password ?? ''}
                  placeholder="password"
                  onInput={(e) => handleChange(e.target.value, 'password')}
                />
              </div>
            </CForm>
          </CCardBody>
          <CCardFooter>
            {loading ? (
              <CButton color="primary" className="float-end" disabled>
                <CSpinner component="span" size="sm" aria-hidden="true" />
                Loading...
              </CButton>
            ) : (
              <>
                <CButton color="secondary" to="/user" component={NavLink}>
                  Cancel
                </CButton>
                <CButton
                  color="primary"
                  className="float-end"
                  onClick={() => dispatch(createUser(userCreate))}
                >
                  Save User
                </CButton>
              </>
            )}
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateUser
