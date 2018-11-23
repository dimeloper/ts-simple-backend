import expressApp from './server/app';

const PORT = 3180;

expressApp().listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});
