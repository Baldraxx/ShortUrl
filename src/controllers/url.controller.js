const {
    createShortUrl,
    getUrlByCode,
    incrementAccessCount,
    updateShortUrl,
    deleteShortUrl,
    getUrlStats,
} = require('../services/url.service');

async function shorten(req, res, next) {
    try {
        const { url } = req.body;
        const doc = await createShortUrl(url);
        res.status(201).json(doc);
    } catch (err) {
        next(err);
    }
}

async function redirect(req, res, next) {
    try {
        const { code } = req.params;
        const doc = await getUrlByCode(code);
        if (!doc) return res.status(404).json({ message: 'Not found' });

        await incrementAccessCount(doc);
        res.redirect(doc.url);
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const { code } = req.params;
        const { url } = req.body;
        const updated = await updateShortUrl(code, url);
        if (!updated) return res.status(404).json({ message: 'Not found' });
        res.json(updated);
    } catch (err) {
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        const { code } = req.params;
        const deleted = await deleteShortUrl(code);
        if (!deleted) return res.status(404).json({ message: 'Not found' });
        res.status(204).end();
    } catch (err) {
        next(err);
    }
}

async function stats(req, res, next) {
    try {
        const { code } = req.params;
        const doc = await getUrlStats(code);
        if (!doc) return res.status(404).json({ message: 'Not found' });
        res.json({
            id: doc._id,
            url: doc.url,
            shortCode: doc.shortCode,
            accessCount: doc.accessCount,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { shorten, redirect, update, remove, stats };