module.exports = function (bundler) {
    bundler.addAssetType('css', require.resolve('./url-loader'))
}