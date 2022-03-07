import React, { useState, useEffect } from 'react'
import img1 from '../assets/defaultPic.png'
import axios from 'axios'
import './card-style.css'

const Card = () => {
  const [newUser, setNewUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setNewUser(res.data)
    })
  })

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      ></link>
      {newUser.map((data, index) => {
        return (
          <div className="col-xl-4" key={index}>
            <div className="card mb-3 px-3 pt-2 pt-xl-0">
              <div className="row no-gutters d-flex justify-content-center align-items-center">
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={img1}
                    style={{ borderRadius: '50%' }}
                    className="card-img"
                    alt="avatar"
                  />
                  <p className="">
                    <small className="text-muted text-center fw-bold">
                      {data.username}
                    </small>
                  </p>
                </div>
                <div className="col-8 pl-5 pl-xl-0">
                  <div className="card-body">
                    <h5 className="card-title my-1 text-muted fw-bold">
                      {data.name}
                    </h5>
                    <p className="card-text my-0">
                      <small className="text-muted">
                        <i className="fas fa-map-marker-alt" />{' '}
                        {data.address.street}, {data.address.city}
                      </small>
                    </p>
                    <p className="card-text mb-0 mt-1 fw-bold text-muted">
                      {data.company.name}
                    </p>
                    <p className="card-text my-0 py-0">
                      <small className="text-muted">{data.website}</small>
                    </p>
                    <p className="card-text my-0 py-0">
                      <small className="text-muted">{data.email}</small>
                    </p>
                    <p className="card-text my-0 py-0">
                      <small className="text-muted">{data.phone}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card
