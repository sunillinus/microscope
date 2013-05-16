if (Posts.find().count() === 0) {
  Posts.insert({
    title: "Meteor",
    author: 'Matt DeBergalis',
    url: 'http://meteor.com/',
  });

  Posts.insert({
    title: "Ember",
    author: 'Yehuda Katz',
    url: 'http://emberjs.com/',
  });

  Posts.insert({
    title: "Firebase",
    author: 'James Tamplin',
    url: 'https://www.firebase.com',
  });
}
