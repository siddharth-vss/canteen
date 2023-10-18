import React from 'react'
import '../../scss/_custom.scss'

const Details = () => {
  const food = [
    {
      img: 'https://pps.whatsapp.net/v/t61.24694-24/362648268_6490972597686164_7188434511326589666_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSfSV-73-TOB8JO7gZdYJGuQKf4kd9mAf5n8-P4aforoA&oe=653B8443&_nc_sid=000000&_nc_cat=103',
      id: 5,
      name: 'GAURANG',
      role: 'PROGRAMMER',
    },
    // {
    //   img: 'https://pps.whatsapp.net/v/t61.24694-24/366745129_1069892881088456_6827599022453445807_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTIKEMcvVJHo4gPzKQqs3HK1AWN6JoTf3y0FVWZkG_BsA&oe=653B7046&_nc_sid=000000&_nc_cat=101',
    //   id: 6,
    //   name: 'B.K. Patel',
    //   role: 'MANAGER',
    // },
    {
      img: 'https://devasw7xy5fu5.cloudfront.net/manicure-2/wp-content/uploads/sites/451/2020/06/team-04.jpg?x87029',
      id: 1,
      name: 'Jessica Stone',
      role: 'cashier',
    },
    {
      img: 'https://devasw7xy5fu5.cloudfront.net/manicure-2/wp-content/uploads/sites/451/2020/06/team-02.jpg?x87029',
      id: 2,
      name: 'Sarah Calvin',
      role: 'cook',
    },
    {
      img: 'https://devasw7xy5fu5.cloudfront.net/manicure-2/wp-content/uploads/sites/451/2020/06/team-03.jpg?x87029',
      id: 3,
      name: 'Ava Smith',
      role: 'vaiter',
    },
    {
      img: 'https://devasw7xy5fu5.cloudfront.net/manicure-2/wp-content/uploads/sites/451/2020/06/team-01.jpg?x87029',
      id: 4,
      name: 'Ana kelley',
      role: 'vasan vari',
    },
  ]
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4data">
        {food.map((product) => {
          return (
            <div key={product.id}>
              <div className="col">
                <div className="dt my-3 md-4">
                  <img src={product.img} className="card-img" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.role} </p>
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

export default Details
