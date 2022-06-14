exports.getToken = async (req, res, next) => {
  res.status(200).send(req.decode);
};
