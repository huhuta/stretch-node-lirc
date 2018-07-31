exports.catchErrors = (fn) => (req, res, next) =>
  fn(req, res, next).catch(next);

exports.developmentErrors = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.send(err.stack);
};

// exports.productionErrors = (err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500);
//   res.send(err.message);
// };
