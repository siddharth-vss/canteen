import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../scss/_custom.scss'
const Food = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    return fetch()
  }, [])
  const fetch = async () => {
    let ret = await axios.get('http://localhost:5000')
    // ret = ret.data
    console.log(ret.data)
    console.log(food)
    setFood(ret.data)
    console.log(food)
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
export default Food
