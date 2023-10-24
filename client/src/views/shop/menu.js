/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const menu = () => {
  const [food, setFood] = useState([])
  const modMenu = async () => {
    let rest = await axios.get('http://localhost:5000')
    setFood(rest.data)
  }
  useEffect(() => {
    return modMenu()
  }, [])
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">ITEM</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">PRICE(IND-RNS)</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {food.map((item, index) => {
          return (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.catagory}</td>
              <td>₹{item.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default menu

/**
|--------------------------------------------------|
|         BASE 64 TO BLOB CONVERTER   👇           |
|--------------------------------------------------|
*/

/*(function () {
  'use strict';

  // From http://stackoverflow.com/questions/14967647/ (continues on next line)
  // encode-decode-image-with-base64-breaks-image (2013-04-21)
  function fixBinary (bin) {
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
  var base64 = <base64 file path>
  var binary = fixBinary(atob(base64));
  var blob = new Blob([binary], {type: 'image/jpeg'});
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

    var returnedBlob = new Blob([xhr.response], {type: 'image/png'});
    var reader = new FileReader();
    reader.onload = function(e) {
      var returnedURL = e.target.result;
      var returnedBase64 = returnedURL.replace(/^[^,]+,/, '');
      log('xhr.response (in base64) is: ' + returnedBase64);
      log('is this the expected base64? ' + (returnedBase64 === base64));
    };
    reader.readAsDataURL(blob); //Convert the blob from clipboard to base64
  };
  xhr.send();
})();*/
