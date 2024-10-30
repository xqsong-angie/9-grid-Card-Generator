const deck = [
    'assets/images/cards/2c_PNG.rf.180fa2570741579af4af9e0deaa5eaf8.jpg', 
    'assets/images/cards/2d_PNG.rf.adf80e2f0635e16a0433f70c4404f5e8.jpg',
    'assets/images/cards/2h_PNG.rf.845c7930b80f7a5a810cfedbab8a9ff7.jpg',
    'assets/images/cards/2s_PNG.rf.4e4a0f073209c65c0cc78b836594e168.jpg',
    'assets/images/cards/3c_PNG.rf.e08bea61a3383c40701aad647eda309a.jpg',
    'assets/images/cards/3d_PNG.rf.8a881cec528dbc66d0e47e6b988b5622.jpg',
    'assets/images/cards/3h_PNG.rf.2e8a0a34101aef2333911818821c69e3.jpg',
    'assets/images/cards/3s_PNG.rf.69e63fc5988a323ac847482e380c0535.jpg',
    'assets/images/cards/4c_PNG.rf.308cd0044522cbb5214a4ef50fa71dd7.jpg',
    'assets/images/cards/4d_PNG.rf.03f1925131fdd7b7539d9032d5c5ded7.jpg',
    'assets/images/cards/4h_PNG.rf.41655a3b29c2270e158f29e7f718ed31.jpg',
    'assets/images/cards/4s_PNG.rf.f1993a1bfad9a902e706ea2940367776.jpg',
    'assets/images/cards/5c_PNG.rf.c7a4ea959a9c034196ace4547f8a0253.jpg',
    'assets/images/cards/5d_PNG.rf.9c4fbeb7bdb8767c56029372d5361259.jpg',
    'assets/images/cards/5h_PNG.rf.549ae7d3983f63d3a338e432eda65479.jpg',
    'assets/images/cards/5s_PNG.rf.577fa6c57506a82b72dee2483018deac.jpg',
    'assets/images/cards/6c_PNG.rf.585535b1ca064ee47cb1bf5e40618662.jpg',
    'assets/images/cards/6d_PNG.rf.17f7eef11c06a095b603d74b962d9630.jpg',
    'assets/images/cards/6h_PNG.rf.533e0af95c38d81ecdc51cd3b5f5d251.jpg',
    'assets/images/cards/6s_PNG.rf.c10f7031e7ff64d580bbeda55f07e6a5.jpg',
    'assets/images/cards/7c_PNG.rf.4057f086aaec07e8e6449d088749490f.jpg',
    'assets/images/cards/7d_PNG.rf.b4151ec6ead4392b0a6bb6b5e5a24f87.jpg',
    'assets/images/cards/7h_PNG.rf.1de754ef0195576ef71e2119f7083613.jpg',
    'assets/images/cards/7s_PNG.rf.33ca6f5c4c4116c89e3a13389d7bf5f4.jpg',
    'assets/images/cards/8c_PNG.rf.8575b00df750fe734d6c896cc583ab87.jpg',
    'assets/images/cards/8d_PNG.rf.026293a5cab002e431bbff1c5f8f1965.jpg',
    'assets/images/cards/8h_PNG.rf.7b5c2f38c6d7dc0bf89bff9bb8416f4f.jpg',
    'assets/images/cards/8s_PNG.rf.43a3a658cc48698e27da8bce6343826f.jpg',
    'assets/images/cards/9c_PNG.rf.f7453e3f2f03eebdbb6dbe75be1ae62a.jpg',
    'assets/images/cards/9d_PNG.rf.4ea4ce1b8665afedb95ef53774514354.jpg',
    'assets/images/cards/9h_PNG.rf.2e4ae9ceac7fd482ca350e8930be2167.jpg',
    'assets/images/cards/9s_PNG.rf.04d3d2d868a0098d65c71ee5d3fe26e0.jpg',
    'assets/images/cards/10c_PNG.rf.8a592db802e7289f12f999bfae00abe3.jpg',
    'assets/images/cards/10d_PNG.rf.ac248a70d3437f08794eaf31f9b8fe19.jpg',
    'assets/images/cards/10h_PNG.rf.79647d8085b5c930991ea3950ba17444.jpg',
    'assets/images/cards/10s_PNG.rf.b251abf048909f0b72dfbcc09f70ccbf.jpg',
    'assets/images/cards/ac_PNG.rf.fb445ba3ab0c7d626ce2cf078d1bb9fc.jpg',
    'assets/images/cards/ad_PNG.rf.a886128d83ce6910e9bb5968be940d9e.jpg',
    'assets/images/cards/ah_PNG.rf.97bd7580648b5765966f56c808ec5860.jpg',
    'assets/images/cards/as_png.rf.4d2d1335f36419e1dac4e8813de9a90f.jpg',
    'assets/images/cards/jc_PNG.rf.3c5c8753308589938cd408c09cb77a05.jpg',
    'assets/images/cards/jd_PNG.rf.7a482b8b3cc5357ce87cc04067a4af0d.jpg',
    'assets/images/cards/jh_PNG.rf.6451a7ee49ed9269d68a96b382f0f578.jpg',
    'assets/images/cards/js_PNG.rf.a37d1657c34b206f81ad61b3b0e6027f.jpg',
    'assets/images/cards/kc_PNG.rf.4e7465c92a7d6e2594c39050e4d8d43a.jpg',
    'assets/images/cards/kd_PNG.rf.51d0dc31f4c839d142a067b75f0ad445.jpg',
    'assets/images/cards/kh_PNG.rf.9146ab04652e4bd4f99c590570b39612.jpg',
    'assets/images/cards/ks_PNG.rf.66ede26cde9598be2ab33c974360f1f2.jpg',
    'assets/images/cards/qc_PNG.rf.0fc3d0f0b3d823d629c6466a3d11e623.jpg',
    'assets/images/cards/qd_PNG.rf.e3b232b693f8a227cdef02273e490404.jpg',
    'assets/images/cards/qh_PNG.rf.6de1548ee974f9bc8c2c900cba49ca3f.jpg',
    'assets/images/cards/qs_PNG.rf.77dde3251df240973f0e7ea450dd2c2b.jpg',
    'assets/images/cards/black_jocker.jpeg',
    'assets/images/cards/color_joker.jpeg'
];

let drawnCards = [];
const drawButton = document.getElementById('draw-button');

function resetGame() {
    drawnCards = [];
    document.querySelectorAll('.grid-item').forEach(cell => {
        cell.innerHTML = ''; // 清空每个单元格
    });
    drawButton.textContent = '抽牌'; // 重置按钮文本
}

drawButton.addEventListener('click', () => {
    if (drawnCards.length >= 9 && drawButton.textContent === '重置') {
        resetGame();
        return;

    }

    let cardIndex;
    do {
        cardIndex = Math.floor(Math.random() * deck.length);
    } while (drawnCards.includes(cardIndex));

    drawnCards.push(cardIndex);
    const emptyIndex = drawnCards.length - 1;

    const backImage = document.createElement('img');
    backImage.src = 'assets/images/cards/back.png'; // 背面图片路径
    backImage.alt = 'Card Back';
    backImage.className = 'card-img';
    backImage.addEventListener('click', () => {
        const cardImage = deck[cardIndex];
        backImage.src = cardImage; // 显示正面
        backImage.removeEventListener('click', arguments.callee); // 移除事件监听器
    });

    document.getElementById(`cell-${emptyIndex}`).innerHTML = ''; // 清空单元格
    document.getElementById(`cell-${emptyIndex}`).appendChild(backImage);

    if (drawnCards.length === 9) {
        drawButton.textContent = '重置'; // 所有牌已抽完，显示重置按钮
    }
});