
let imgURL = [];
let albums = [];


function preload() {
    imgURL[12] = 'https://i.scdn.co/image/ab67616d0000b273574accbc3e8c702bb6ee68f0'; // fuego
    imgURL[1] = 'https://i.scdn.co/image/ab67616d0000b273b30c8b93cef6fa26f8a7f17a'; //ewf
    imgURL[0] = 'https://i.scdn.co/image/94461c3b78e8a75248e6310cb077cf274cb5ff4d'; //rikarena
    imgURL[3] = 'https://i.scdn.co/image/ab67616d0000b273461762c15f05e141fe6f3097'; //southern
    imgURL[4] = 'https://i.scdn.co/image/ab67616d0000b27300c19509bc68575495f3dbc5'; // together
    imgURL[5] = 'https://i.scdn.co/image/ab67616d0000b27331c469bafacbe77490dd6ba9'; // force
    imgURL[6] = 'https://i.scdn.co/image/ab67616d0000b273d5e5fa11384e993588b78bec'; //murphys
    imgURL[7] = 'https://i.scdn.co/image/ab67616d0000b2734fb6ce69eb4254c6cf5e3c25'; //i feel it
    imgURL[8] = 'https://i.scdn.co/image/ab67616d0000b2736b32a59fcc8bcd8172bd54d6'; //clash
    imgURL[9] = 'https://i.scdn.co/image/ab67616d0000b2735cf05521594fbf41d2a48893'; //troye
    imgURL[10] = 'https://i.scdn.co/image/ab67616d0000b273488df3d22b1f5c0ea15b686a'; //clouds
    imgURL[11] = 'https://i.scdn.co/image/ab67616d0000b273250de27b0e29b2341a4d82bf'; //iz
    imgURL[2] = 'https://i.scdn.co/image/ab67616d0000b273922a7339d969b5f0262580f5'; //JOSE
    imgURL[13] = 'https://i.scdn.co/image/ab67616d0000b273a75bd33684083600569dd3bf'; //danny
    for (let i=0;i<imgURL.length;i++){
        albums[i] = loadImage(imgURL[i]);
    }
//    for (let i=0; i < 25; i++){
//        let albumLoc = 'albums/album' + i + '.jpg'
//        albums[i] = loadImage(albumLoc);
//    }
}
function setup() {
    createCanvas(1000,1000);
    console.log(imgURL.length);
    console.log(albums.length);
    for (let i =0; i < albums.length; i++){
        tint(255, (255-((255/albums.length)*i)));
        image(albums[albums.length-1-i],0,0,1000,1000);
    }


}


function draw() {
  // put drawing code here

}
