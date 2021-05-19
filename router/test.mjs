import express from 'express';
const router = express.Router();

router.get('/test', function(req, res, next) {
    res.send('sad');
});

export default router
