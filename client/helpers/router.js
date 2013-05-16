Meteor.Router.add({
  '/': 'postsList',

  '/posts': 'postsList',

  '/posts/:_id': {
    to: 'postPage',
    and: function(id) { Session.set('id', id); }
  },

  '/submit': 'postSubmit'
});
