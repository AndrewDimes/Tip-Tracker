import tokenService from './tokenService';

const BASE_URL = '/api/jobs/';

function createJob(job) {
  return fetch(BASE_URL + 'createJob', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
    .then(res => {
      if (res.ok) return res.json();
      // Probably a duplicate job
      throw new Error('Job already taken!');
    })
    // Parameter destructuring!
    .then(({ token }) => tokenService.setToken(token));
}

function getJobs() {
  return fetch(BASE_URL + 'getJobs', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
    .then(res => res.json());
}

function getJob(id) {
  console.log('getjobbbb', id)
  return fetch(BASE_URL + 'getJob/' + id, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
    .then(res => res.json());
}
function deleteJob(id){
  console.log('in jobservice')
  return fetch(BASE_URL + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('cant delete')
    })
    .then(({ token }) => tokenService.removeToken(token));
}


export default {
  createJob,
  getJobs,
  deleteJob,
  getJob
};