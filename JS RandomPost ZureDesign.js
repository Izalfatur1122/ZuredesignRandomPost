//<![CDATA[
function showRandom(root){
    var feed = root.feed;
    var entries = feed.entry || [];
    var entry = feed.entry[0];
      for (var j = 0; j < entry.link.length; ++j) {
       if (entry.link[j].rel == "alternate") { 
       window.location = entry.link[j].href; 
       } 
      } 
   }

function fetchPost(Post){
    script = document.createElement('script');
    script.src = '/feeds/posts/summary?start-index='+Post+'&max-results=1&alt=json-in-script&callback=showRandom';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
   }
function readRandom(root){
    var feed = root.feed;
    var total = parseInt(feed.openSearch$totalResults.$t,10);
    var RandomNumber = Math.floor(Math.random()*total);
    RandomNumber++;
    fetchPost(RandomNumber);
    }
function RandomPost(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readRandom';
    document.getElementsByTagName('head')[0].appendChild(script);
    }
//]]>