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

export default {
  createJob,
  getJobs
};