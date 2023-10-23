import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../scss/_custom.scss'

const Icecream = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    return fetch()
  }, [])
  const fetch = async () => {
    let ret = await axios.get('http://localhost:5000/ice-cream')
    setFood(ret.data)
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4data">
        {food.map((product) => {
          return (
            <div key={product._id}>
              <div className="col">
                <div className="dt my-3 md-4">
                  <img src={product.img} className="card-img" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price} </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Icecream
