export const fun3 = (req, res, next) => {
  console.log("I am helper function 3")
  return next();
}