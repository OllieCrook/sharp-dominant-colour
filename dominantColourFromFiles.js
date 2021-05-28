const sharp = require('sharp')

module.exports = async function dominantColourFromFiles(images) {
    const colours = [];

    for (const image of images) {
        const { dominant }  = await sharp(`./public/images/${image}`).stats();
        colours.push(dominant)
    }
    
    return colours
}