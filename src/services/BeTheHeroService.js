import axios from 'axios';

import { responseHandler, errorHandler } from '../lib/handleAxiosResponse';

const BeTheHeroApi = axios.create({ baseURL: 'http://localhost:3333/' });

function registerOng({ data }) {
  return BeTheHeroApi.post('ongs/create', data)
    .then(responseHandler)
    .catch(errorHandler);
}

function logonOng({ id }) {
  return BeTheHeroApi.post('session/login', { ongId: id })
    .then(responseHandler)
    .catch(errorHandler);
}

function listOngIncidents({ ongId }) {
  return BeTheHeroApi.get('incidents/ong', {
    headers: { Authorization: ongId }
  })
    .then(responseHandler)
    .catch(errorHandler);
}

function deleteOngIncident({ incidentId, ongId }) {
  return BeTheHeroApi.get(`incidents/delete/${incidentId}`, {
    headers: { Authorization: ongId }
  })
    .then(responseHandler)
    .catch(errorHandler);
}

function registerIncident({ data, ongId }) {
  return BeTheHeroApi.post('incidents/create', data, {
    headers: { Authorization: ongId }
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export default {
  registerOng,
  logonOng,
  listOngIncidents,
  deleteOngIncident,
  registerIncident,
};
