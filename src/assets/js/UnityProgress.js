function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module)
        return;
    if (!gameInstance.logo) {
        gameInstance.logo = document.createElement("div");
    }
    if (!gameInstance.progress) {
        gameInstance.progress = document.createElement("div");
        gameInstance.progress.className = "BB";
        gameInstance.progress = document.createElement("div");
        gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
        gameInstance.progress.wrap = document.createElement("div");
        gameInstance.progress.wrap.className = "wrap"
        gameInstance.progress.appendChild(gameInstance.progress.wrap);
        gameInstance.progress.wrap.empty = document.createElement("div");
        gameInstance.progress._img = document.createElement("img");
        gameInstance.progress._img.className = "_img";
        gameInstance.progress.wrap.empty.className = "empty";
        gameInstance.progress.appendChild(gameInstance.progress._img);
        gameInstance.progress.wrap.appendChild(gameInstance.progress.wrap.empty);
        gameInstance.progress.wrap.full = document.createElement("div");
        gameInstance.progress.wrap.full.className = "full";
        gameInstance.progress.wrap.appendChild(gameInstance.progress.wrap.full);
        gameInstance.container.appendChild(gameInstance.progress);
    }
    gameInstance.progress.wrap.full.style.width = (100 * progress) + "%";
    gameInstance.progress.wrap.empty.style.width = gameInstance.progress.wrap.full.style.width;
    var loadPercent = parseFloat(progress * Number(100));
    loadPercent = loadPercent.toFixed(2) + "%";
    console.log(loadPercent);
    document.getElementById('textNote').text = loadPercent;
    gameInstance.progress._img.width = 960;
    gameInstance.progress._img.height = 600;
    gameInstance.progress._img.style.display = "block";
    if (progress == 1) {
        gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
        document.getElementById('textNote').style.display = 'none';
    } else {
        document.getElementById('textNote').style.display = 'block';
    }
}
export {
	UnityProgress
}