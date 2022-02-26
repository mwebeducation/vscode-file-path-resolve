export const fun2 = (req, res, next) => {
  console.log("I am helper function 2")
  return next();
}