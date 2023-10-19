import React from 'react'
import '../../scss/_custom.scss'

const Home = () => {
  /**
  |--------------------------------------------------|
  |       FAST FOOD                                  |
  |--------------------------------------------------|
  */
  const fastFood = [
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
  /**
  |--------------------------------------------------|
  |    DRINKS                                        |
  |--------------------------------------------------|
  */
  const drink = [
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
  /**
  |--------------------------------------------------|
  |    ICECREAM                                      |
  |--------------------------------------------------|
  */
  const icecream = [
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
      <h3>FAST FOOD</h3>
      <div className="d-flex data">
        {fastFood.map((product) => {
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
        {drink.map((product) => {
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
        {icecream.map((product) => {
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
