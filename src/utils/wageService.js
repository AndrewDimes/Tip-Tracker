import tokenService from './tokenService';

const BASE_URL = '/api/wages/';

function createWage(body,id){
  
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
function getWages(id, viewBy){
  return fetch(BASE_URL + 'getWages/' + id + '/' + viewBy, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    
    
  })
    .then(res => res.json());
}


export default {
  createWage,
  getWages
  
  };