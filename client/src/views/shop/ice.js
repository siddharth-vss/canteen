import React from 'react'
import '../../scss/_custom.scss'

const Icecream = () => {
  const food = [
    {
      img: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D',
      id: 1,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1669905375045-990742dc0ca4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D',
      id: 2,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww',
      id: 3,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww',
      id: 4,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww',
      id: 5,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://media.istockphoto.com/id/1319628800/photo/assorted-ice-cream-waffle-cones-in-a-row-colorful-different-flavor-on-pink-and-blue-wood.webp?b=1&s=170667a&w=0&k=20&c=MHjMoRiSb9QFLJanXvhNtU-VqGIB4qpVFd_DY3qyPMU=',
      id: 6,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1625235048091-a974561f181c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMGNyZWFtJTIwc2Nvb3B8ZW58MHx8MHx8fDA%3D',
      id: 7,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1619158403521-ed9795026d47?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxHT19NeGU3UkxqSXx8ZW58MHx8fHx8',
      id: 8,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1602296750425-f025b045f355?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D',
      id: 9,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHT19NeGU3UkxqSXx8ZW58MHx8fHx8',
      id: 10,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1494878354154-772d013c9a26?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTI5NzE4OXx8ZW58MHx8fHx8',
      id: 11,
      name: 'dsvs',
      price: 58,
    },
    {
      img: 'https://images.unsplash.com/photo-1571089465427-cd3c533e809f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTEyOTcxODl8fGVufDB8fHx8fA%3D%3D',
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

export default Icecream
