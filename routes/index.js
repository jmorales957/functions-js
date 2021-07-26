const router = require( 'express' ).Router();
const functionRoutes = require('./functions')

router.use('/functions', functionRoutes)


module.exports = router;