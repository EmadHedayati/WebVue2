function getImageUrl(url)
{
    return 'http://localhost.com:8000/' + url;
}

function getImageUrl(url) {
    return require('../../../assets/' + url);
}
