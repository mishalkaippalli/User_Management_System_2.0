import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../redux/reducers/userSlice"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const { users } = useSelector((state) => state.users)

  return (
    <div className="continer flex items-center justify-content-center">
      <h2
        style={{ backgroundColor: "blue" }}
        className="text-center text-white p-2 m-2"
      >
        {" "}
        User Management System
      </h2>

      <Link to={"/register"}>
        <button className="btn btn-primary">
          <i className="fa fa-home" />
          &nbsp; Add Users
        </button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.city}</td>
                      <img
                        src={`http://localhost:9000/${user.profile}`}
                        className="img img-rounded"
                        height='100px'
                        width='100px'
                      />
                  </tr>
                )
              })}
          </tbody>
        </thead>
      </table>
    </div>
  )
}

export default Home
