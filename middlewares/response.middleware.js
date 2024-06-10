const responseMiddleware = (req, res, next) => {
  if (res.locals.error) {
    res.status(400).json({ error: true, message: res.locals.message });
  } else {
    res.status(200).json(res.locals.data);
  }
};

export { responseMiddleware };
