import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmDelete, deleteUser } from 'src/redux/actions/Users'

const DeleteUser = () => {
  const dispatch = useDispatch()
  const { userDelete } = useSelector((state) => state.UsersReducer)
  return (
    <CModal
      alignment="center"
      visible={userDelete.show}
      onClose={() => dispatch(confirmDelete(false, null))}
    >
      <CModalHeader onClose={() => dispatch(confirmDelete(false, null))}>
        <CModalTitle>Confirm Delete User</CModalTitle>
      </CModalHeader>
      {userDelete.userData && (
        <CModalBody>
          Are you sure you want to delete {userDelete.userData.name}/{userDelete.userData.username}?
        </CModalBody>
      )}
      <CModalFooter>
        <CButton color="secondary" onClick={() => dispatch(confirmDelete(false, null))}>
          Close
        </CButton>
        <CButton
          color="danger"
          onClick={() => {
            dispatch(deleteUser(userDelete.userData.id))
            dispatch(confirmDelete(false, null))
          }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DeleteUser
