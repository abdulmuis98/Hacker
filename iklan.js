<script type="text/javascript">
function addEvent(obj, eventName, func){
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
} else if(obj.addEventListener)
{ obj.addEventListener(eventName, func, true);
} else
{ obj["on" + eventName] = func;
}
} addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{ if(document.cookie.indexOf("sct=shp") == -1)
{
var w = window.open('https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwj83IS4_rnQAhXBro8KHWewCeMQFgggMAA&url=http%3A%2F%2Fkreatipku.blogspot.com%2F2016%2F11%2Fscrip-iklan-yang-di-klik-hilang-trik.html&usg=AFQjCNHMAbp7mR1xAkQQllsXPUNzLw7nDw','height=10, width=10, top=1900, left=1900, scrollbars=yes')
document.cookie = "sct=scg";
window.focus(); } }); });</script>