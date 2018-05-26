const passport = require('passport');

const reviews = [
  { id: 1, name: 'review1'},
  { id: 2, name: 'review2'},
  { id: 3, name: 'review3'},
];

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/dashboard', (req, res) => {
    res.send('Dashboard');
  });

  app.get('/reviews', (req, res) => {
    res.send(reviews);
  });

  app.get('/reviews/:id', (req, res) => {
    res.send(req.params.id);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}

