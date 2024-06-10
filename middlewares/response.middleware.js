const responseMiddleware = (req, res, next) => {
  if (req.status == 200) {
    console.log("Code: 200")
  }

  if (req.status == 201) {
    console.log("Code: 201")
  }
  
  if (req.status == 400) {
    console.log("Code: 400")
  }

  if (res.status == 401) {
    console.log("Code: 401")
  }

  if (res.status == 404) {
    console.log("Code: 404")
  }

  if (res.status == 500) {
    console.log("Code: 500")
  }

  next();
};

export { responseMiddleware };