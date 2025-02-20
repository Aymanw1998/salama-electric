function importAll(r) {
    let images = [];
    r.keys().forEach((item) => {
        images.push({
            src: r(item), 
            name: item.replace('./', '') // שם הקובץ בלי הנתיב
        });
    });
    return images;
}

const imagesT = importAll(require.context('../../images/proj-images', false, /\.(png|jpe?g|svg)$/));

console.log("imagesT", imagesT)
export const images = imagesT;
