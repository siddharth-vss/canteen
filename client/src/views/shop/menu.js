/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const menu = () => {
  const navigate = useNavigate()
  const [Image, setImage] = useState('')
  const [form, setForm] = useState({})
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
  const handeler = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setForm({ ...form, [name]: value })
  }
  const Formhandeler = async (e) => {
    let ret = await axios.post('http://localhost:5000', form)
    console.log(form)
    console.log(ret.data)
    setForm(ret.data)
    navigate('/shop/food')
  }

  return (
    <form onSubmit={Formhandeler}>
      <input accept="image/*" type="file" onChange={converter} /> input img <br />
      <input type="text" name="name" value={form.name} onChange={handeler} /> name <br />
      <input type="number" name="price" value={form.price} onChange={handeler} /> price <br />
      <input
        type="text"
        name="img"
        value={Image ? Image : form.img}
        readOnly={Image}
        onChange={handeler}
      />
      URL
      <br />
      {/* <input type="text" name="category"  onChange={handeler} /> */}
      <img src={Image} alt="SP" /> <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default menu
