// const axios = require('axios')
import axios from "axios";

axios.get('https://barebone-2lfyi6wdba-uc.a.run.app/openapi.json').then(res => {
  res.data.forEach(element => {
      console.log(element)
  });
})