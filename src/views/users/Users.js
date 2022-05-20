import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmDelete, getUsers } from 'src/redux/actions/Users'
import DeleteUser from './DeleteUser'

const Users = () => {
  const { loading, data, message, error, userDelete } = useSelector((state) => state.UsersReducer)
  const [page, Setpage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(page))
    if (message) {
      dispatch(getUsers(page))
    }
  }, [userDelete, page, message, dispatch])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol xs="auto" className="me-auto">
                <strong>User Management</strong>
              </CCol>
              <CCol xs="auto">
                <CButton
                  color="primary"
                  to="/user/create"
                  component={NavLink}
                  className="text-white"
                >
                  Create User
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data ? (
                  data.data.map((user, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{user.id}</CTableDataCell>
                      <CTableDataCell>{user.name}</CTableDataCell>
                      <CTableDataCell>{user.username}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="danger"
                          onClick={() => {
                            dispatch(confirmDelete(true, user))
                            console.log(userDelete)
                          }}
                        >
                          Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : loading ? (
                  <CTableRow>
                    <CTableDataCell colSpan={5} className="text-center">
                      <CSpinner color="primary" />
                    </CTableDataCell>
                  </CTableRow>
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan={5} className="text-center">
                      {error ? error : 'No Data'}
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
            {data.data && (
              <CPagination align="center" aria-label="Page navigation example">
                {page < 2 ? (
                  <CPaginationItem disabled>Previous</CPaginationItem>
                ) : (
                  <CPaginationItem onClick={() => Setpage(page - 1)}>Previous</CPaginationItem>
                )}
                <CPaginationItem>{page}</CPaginationItem>
                {data.allCount % data.perPageCount === 0 ? (
                  <CPaginationItem disabled>Next</CPaginationItem>
                ) : (
                  <CPaginationItem
                    onClick={() => {
                      Setpage(page + 1)
                    }}
                  >
                    Next
                  </CPaginationItem>
                )}
              </CPagination>
            )}
          </CCardBody>
        </CCard>
      </CCol>
      <DeleteUser />
    </CRow>
  )
}

export default Users
