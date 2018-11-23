import expressApp from './server/app';

const PORT = process.env.PORT || 3180;

const server = expressApp().listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

export { server };
