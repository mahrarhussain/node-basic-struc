const {
    create,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  } = require("../controllers/user");
  const { createRateLimiter } = require("../utils/limiter");
  
  const router = require("express").Router();
  
  const limiter = createRateLimiter({ maxRequests: 3, time: 10 });
  
  router.post("/", create);
  router.get("/:id", getUserById);
  router.get("/", limiter, getAllUsers);
  router.put("/:id", updateUser);
  router.delete("/:id", deleteUser);
  
  module.exports = router;
  