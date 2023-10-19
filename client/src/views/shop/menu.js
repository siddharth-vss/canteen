import React, { useState } from 'react'

const menu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Image, setImage] = useState('')
  const converter = (e) => {
    console.log(e)
    var render = new FileReader()
    render.readAsDataURL(e.target.files[0])
    render.onloadend = () => {
      console.log(render.result)
      setImage(render.result)
    }
    render.onerror = (error) => {
      alert('Error: ', error)
    }
  }
  return (
    <div>
      <input accept="image/*" type="file" onChange={converter} />
      <img src={Image} alt="SP" />
    </div>
  )
}

export default menu
