import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = '/api/';
const coreUrl = `${apiUrl}core/`;

const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const fetchData = async () => {
  try {
    await axios.get(`${coreUrl}csrf`);
  } catch (err) {
    console.log('error');
  }
};

const CSRFToken = () => {
  fetchData();
  return getCookie('csrftoken');
};

export default CSRFToken;
