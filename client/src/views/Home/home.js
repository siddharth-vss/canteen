import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../scss/_custom.scss'

const Home = () => {
  const [drinks, setDrinks] = useState([])
  const [fastfood, setfastFood] = useState([])
  const [ice, setIce] = useState([])

  useEffect(() => {
    return fetch()
  }, [])
  const fetch = async () => {
    let ret = await axios.get('http://localhost:5000/drinks')
    setDrinks(ret.data)
    let sep = await axios.get('http://localhost:5000/ice-cream')
    setIce(sep.data)
    let aet = await axios.get('http://localhost:5000/fast-food')
    setfastFood(aet.data)
  }

  return (
    <>
      <h3>FAST FOOD</h3>
      <div className="d-flex data">
        {fastfood.map((product) => {
          return (
            <div key={product.id}>
              <div className="dt my-3 mx-3 md-4">
                <img src={product.img} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price} </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <h3>DRINKS</h3>
      <div className="d-flex data">
        {drinks.map((product) => {
          return (
            <div key={product.id}>
              <div className="dt my-3 mx-3 md-4">
                <img src={product.img} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price} </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <h3>ICE CREAMS</h3>
      <div className="d-flex data">
        {ice.map((product) => {
          return (
            <div key={product.id}>
              <div className="dt my-3 mx-3 md-4">
                <img src={product.img} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price} </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
