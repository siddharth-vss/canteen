import React from 'react'
import '../../scss/_custom.scss'

const Drink = () => {
  const food = [
    {
      img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D',
      id: 1,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D',
      id: 2,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D',
      id: 3,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp1aWNlfGVufDB8fDB8fHww',
      id: 4,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1621547216203-b1cad0f1b774?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8anVpY2UlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D',
      id: 5,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1578620483522-c957ea110465?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NjY3MDA5fHxlbnwwfHx8fHw%3D',
      id: 6,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1562952546-12992a813a51?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xJYUdsMGpVcFU4MHx8ZW58MHx8fHx8',
      id: 7,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1520568444554-4698653b539c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxJYUdsMGpVcFU4MHx8ZW58MHx8fHx8',
      id: 8,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1504123311630-7a21d62be4a2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXx5aDdnaTEzWVBvOHx8ZW58MHx8fHx8',
      id: 9,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1569484880821-9e0db6418f8f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODd8eWg3Z2kxM1lQbzh8fGVufDB8fHx8fA%3D%3D',
      id: 10,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1472555794301-77353b152fb7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTEwfHloN2dpMTNZUG84fHxlbnwwfHx8fHw%3D',
      id: 11,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1500630967344-3b1f546423ce?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzY0MjE2fHxlbnwwfHx8fHw%3D',
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

export default Drink
