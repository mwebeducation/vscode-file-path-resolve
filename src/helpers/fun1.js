export const fun1 = (req, res, next) => {
  console.log("I am helper function 1")
  return next();
}