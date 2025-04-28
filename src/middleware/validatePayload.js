function validatePayload(req, res, next) {
    const { url } = req.body;
    if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: 'Invalid payload: "url" is required' });
    }
    next();
}

module.exports = { validatePayload };