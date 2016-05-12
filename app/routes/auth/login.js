import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
