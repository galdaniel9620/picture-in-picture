const videoElemnet = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElemnet.srcObject = mediaStream;
        videoElemnet.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error){
        //Catch Error Here
        console.log('whoops,error here', error)
    }
}

button.addEventListener('click', async () => {
    //  Disable the botton
    button.disabled = true;
    // Start Picture in Picture
    await videoElemnet.requestPictureInPicture();
    //  Reset Button
    button.disabled = false;
})

// On Load
selectMediaStream();