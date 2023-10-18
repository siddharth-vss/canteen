import React from 'react'
import '../../scss/_custom.scss'

const Home = () => {
  const food = [
    {
      img: 'https://b.zmtcdn.com/data/pictures/chains/7/18742887/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg?output-format=webp',
      id: 1,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/chains/5/18740775/bb5da646b27cdb5409ff5a8badd6eacf_o2_featured_v2.jpg?output-format=webp',
      id: 2,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/2/18949162/ec01a212d7b98d44dadad01d64677531_o2_featured_v2.jpg?output-format=webp',
      id: 3,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/chains/2/18742982/c67011e13a81aca80bd967c756bf9f77_o2_featured_v2.jpg?output-format=webp',
      id: 4,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/chains/2/18743862/8f4cbf68784775ccdf316a5db836fca7_o2_featured_v2.jpg',
      id: 5,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/3/18939433/4f101a4bbd5818f4424597c04badd80c_o2_featured_v2.jpg',
      id: 6,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/5/18740705/30389d27107aecd7682e5b397cab96db_o2_featured_v2.jpg',
      id: 7,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/chains/9/19426279/cbaa80e5dd27d9d6cb546a94e33594cc_o2_featured_v2.jpg',
      id: 8,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/3/19902243/2c76ce13c3ba40460dcbe02dec4adce1_o2_featured_v2.jpg',
      id: 9,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/9/19614599/80dda43c300177737398d1ff816962ca_o2_featured_v2.jpg',
      id: 10,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/0/20152780/c7a583aadbf3f9c7f7588e9a9a377082_o2_featured_v2.jpg',
      id: 11,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://b.zmtcdn.com/data/pictures/6/20160016/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg',
      id: 12,
      name: 'dsvs',
      price: 58,
    },
  ]
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4data">
        {food.map((product) => {
          return (
            <div key={product.id}>
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

export default Home
