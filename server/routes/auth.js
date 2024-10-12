const {Router} = require('express')
const router = Router()

router.post('/table-date', require('../controlers/TableControler'))
router.post('/termin-submition', require('../controlers/TerminSubmition'))
router.get('/get-table-data/:dateToStr/:terapeut/:usluga', require('../controlers/GetTableData'))


module.exports = router