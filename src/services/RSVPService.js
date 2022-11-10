const baseURL = 'http://localhost:3000/RSVP/';

const RSVPService =  {
  getRSVP() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addRSVP(RSVP) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(RSVP),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateRSVP(RSVP) {
    return fetch(baseURL + RSVP._id, {
      method: 'PUT',
      body: JSON.stringify(RSVP),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteRSVP(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default RSVPService;