const Url = require('../models/url.model');
const generateShortCode = require('../utils/generateShortCode');

async function createShortUrl(originalUrl) {
    let code;
    let exists;

    do {
        code = generateShortCode();
        exists = await Url.findOne({ shortCode: code });
    } while (exists);

    const urlDoc = await Url.create({ url: originalUrl, shortCode: code });
    return urlDoc;
}

async function getUrlByCode(code) {
    return Url.findOne({ shortCode: code });
}

async function incrementAccessCount(urlDoc) {
    urlDoc.accessCount += 1;
    return urlDoc.save();
}

async function updateShortUrl(code, newUrl) {
    return Url.findOneAndUpdate({ shortCode: code }, { url: newUrl }, { new: true, runValidators: true });
}

async function deleteShortUrl(code) {
    return Url.findOneAndDelete({ shortCode: code });
}

async function getUrlStats(code) {
    return Url.findOne({ shortCode: code });
}

module.exports = {
    createShortUrl,
    getUrlByCode,
    incrementAccessCount,
    updateShortUrl,
    deleteShortUrl,
    getUrlStats,
};