import axios from 'axios';

export const postContactForm = (payload) => {
  const url = 'http://0.0.0.0:9000/api/dummy';

  return axios.post(url, payload)
    .then(response => {
      console.log('success from postContactForm ', JSON.stringify(response))
      return response;
    })
    .catch(error => {
      console.log('error from postContactForm ', error);
    })
  ;
} 



//call
import * as clientApi from '../clientDummy'

clientApi.postContactForm(stateFields)
.then(response => {
  console.log('success from contactInfoComponet ', JSON.stringify(response))
}) 
.catch(error => {
  console.log('error from contactInfoComponet ', error);
})