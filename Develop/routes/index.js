const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');

router.use('/api', apiRoutes);
router.use('/Category', categoryRoutes);
router.use('/Product', productRoutes);
router.use('/Tag', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;