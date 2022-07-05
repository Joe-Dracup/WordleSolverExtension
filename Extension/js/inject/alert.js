console.log('Wordle Scripts Loaded');

var scripts = document.getElementsByTagName("script");
for (var i = 0; i < scripts.length; i++) {
  if (scripts[i].src.includes('main')) {
  	console.log(i, scripts[i].src);
    loadWordsToStorage(scripts[i].src);
  }
}


function loadWordsToStorage(theUrl)
{
    fetch(theUrl).then((r)=>{r.text().then((d)=>{
        var list = getListOfWords(d, 'a=["cigar"');
        console.log(list);
        // chrome.storage.sync.remove("list");
        chrome.storage.sync.set({ list });
    })});
}

function getListOfWords(d, searchString) {
    var startPos = d.indexOf(searchString) + searchString.length;
    var endPos = d.indexOf(']', startPos);
    var substring = d.substring(startPos, endPos);
    substring = substring.replaceAll('"','');
    substring = substring.replaceAll(' ','');
    var list = substring.split(',');
    return list;
}
