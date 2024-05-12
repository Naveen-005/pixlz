export const brightnessChange=(imageData,brightnessFactor)=>{

    brightnessFactor=brightnessFactor*255/100

    console.log("img dta:",imageData)

    for(var i=0;i<imageData.data.length;i+=4){
        imageData.data[i]+=brightnessFactor;
        imageData.data[i+1]+=brightnessFactor;
        imageData.data[i+2]+=brightnessFactor;
    }

    imageData.data[i] = Math.max(0, Math.min(255, imageData.data[i]));
    imageData.data[i + 1] = Math.max(0, Math.min(255, imageData.data[i + 1]));
    imageData.data[i + 2] = Math.max(0, Math.min(255, imageData.data[i + 2]));

    return imageData
}
