import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const CreateUser = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                <CFormInput type="text" id="name" placeholder="Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Username</CFormLabel>
                <CFormInput type="text" id="username" placeholder="username" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Password</CFormLabel>
                <CFormInput type="password" id="password" placeholder="password" />
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateUser
