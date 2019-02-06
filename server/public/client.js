console.log('js is ready');

$(document).ready(onReady); 
    
function onReady(){
    console.log('jq is ready');
    $('#quoteTable').append(
        
        `<tr>
          <td> fred (not the fred we know)</td>
          <td> "is dead"</td>
          </tr>
          `
    )
}

