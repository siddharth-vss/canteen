/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const menu = () => {
  const navigate = useNavigate()
  const [Image, setImage] = useState('')
  const [form, setForm] = useState({})

  function fixBinary(bin) {
    var length = bin.length
    var buf = new ArrayBuffer(length)
    var arr = new Uint8Array(buf)
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i)
    }
    return buf
  }
  const converter = (e) => {
    console.log(e)

    var render = new FileReader()
    render.readAsDataURL(e.target.files[0])
    render.onloadend = () => {
      // console.log(render.result)
      // setImage(render.result)
      let arr = render.result.split('data:image/jpeg;base64,')[1]

      var binary = fixBinary(atob(arr))
      var blob = new Blob([binary], { type: 'image/jpeg' })
      var url = URL.createObjectURL(blob)
      console.log(url)
      setImage(url)
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

/**
|--------------------------------------------------|
|         BASE 64 TO BLOB CONVERTER   👇           |
|--------------------------------------------------|
*/

/*function fixBinary(bin) {
      var length = bin.length;
      var buf = new ArrayBuffer(length);
      var arr = new Uint8Array(buf);
      for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
      }
      return buf;
    }

    var display = document.getElementById('display');
    display.innerHTML = (display.innerHTML || '');
    function log(text) {
      display.innerHTML += "\n" + text;
    }
    var base64 =


    var binary = fixBinary(atob(base64));
    var blob = new Blob([binary], { type: 'image/jpeg' });
    var url = URL.createObjectURL(blob);
    log('Created a png blob of size: ' + blob.size);
    log('Inserting an img...');
    var img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
    log('Blob URL is: ' + url);
    log('Fetching with ajax...');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      log('xhr.status is: ' + xhr.status);
      log('returned content-type is: ' + xhr.getResponseHeader('Content-Type'));
      log('returned content-length is: ' + xhr.getResponseHeader('Content-Length'));

      var returnedBlob = new Blob([xhr.response], { type: 'image/png' });
      var reader = new FileReader();
      reader.onload = function (e) {
        var returnedURL = e.target.result;
        var returnedBase64 = returnedURL.replace(/^[^,]+,/, '');
        log('xhr.response (in base64) is: ' + returnedBase64);
        log('is this the expected base64? ' + (returnedBase64 === base64));
      };
      reader.readAsDataURL(blob); //Convert the blob from clipboard to base64
    };
    xhr.send();*/
