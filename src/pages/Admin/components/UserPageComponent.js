import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const UserPageComponent = ({ fetchUser, deleteUser }) => {
  const [Users, setUsers] = useState([]);
  const [userDeleted, setUserDeleted] = useState(false);
  useEffect(() => {
    const abCtrl = new AbortController();
    fetchUser(abCtrl)
      .then((res) => {
        console.log("🚀 ~ file: UserPageComponent.js:13 ~ useEffect ~ res:", res)
        return setUsers(res)
      })
      .catch((err) => {
        console.log(
          err.response.data.message
            ? err.response.data.message
            : err.response.data
        );
      });
    return () => {
      abCtrl.abort();
      setUsers([]);
    };
  }, [fetchUser,userDeleted]);

  const deleteHandler = async (_id) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteUser(_id);
      setUserDeleted(!userDeleted);
      return data;
    }
  };
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {Users &&
              Users.map((user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <i className="bi bi-check-lg text-success" />
                    ) : (
                      <i className="bi bi-check-lg text-danger" />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/edit-user/${user._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserPageComponent;
