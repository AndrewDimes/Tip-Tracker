import tokenService from './tokenService';

const BASE_URL = '/api/wages/';

function createWage(body,id){
  console.log('in wage service')
  return fetch(BASE_URL + 'createWage/' + id, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      if (res.ok) return res.json();
      // Probably a duplicate job
      throw new Error('Job already taken!');
    })
    // Parameter destructuring!
    .then(({ token }) => tokenService.setToken(token));
}


export default {
  createWage
  
  };