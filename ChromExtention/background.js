console.log('background is running');

chrome.broserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab)
{
    let msg={
        text:"hello"
    }
    chrome.tabs.sentMessage(tab,id,msg);
}
