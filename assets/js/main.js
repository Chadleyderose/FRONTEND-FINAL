$(document).ready(function(){
    var wrapper = $('#wrapper');
    var loader = $('#preloader');
    var loader2 = $('#preloader2');
    var loader3 = $('#preloader3');
    var sentence = $('#annonce');
    sentence.html(sentence.text().replace(/()\w/g, '<span>$&</span>'));
    var tableLoder = [loader,loader2,loader3];
    var wrapperWdth = (document.body.clientWidth);
    var wrapperheight = (document.body.clientHeight);
    var tl = new TimelineMax();
    $(wrapper).width(wrapperWdth);
    $(wrapper).height(wrapperheight);
    $('body').css({padding:0,margin:0,backgroundColor:'#000'});
    $('#annonce > span').css('display','inline-block');
    
    tl.set(wrapper,{css:{position:'absolute',width:'100%',height:'100%', zIndex:'4500',backgroundColor:'#000',opacity:'4'}})
    .set(loader,{css:{borderTop:'5px solid #f37e24',width:'150px',height:'150px',position:'absolute',left:'50%',marginLeft:'-75px',top:'50%',marginTop:'-75px',borderRadius:'50%',zIndex:'5000'}})
    .set(loader2,{css:{borderTop:'4px solid #f8a358',width:'130px',height:'130px',position:'absolute',left:'50%',marginLeft:'-65px',top:'50%',marginTop:'-65px',borderRadius:'50%',zIndex:'5000'}})
    .set(loader3,{css:{borderTop:'3px solid #656565',width:'110px',height:'110px',position:'absolute',left:'50%',marginLeft:'-55px',top:'50%',marginTop:'-55px',borderRadius:'50%',zIndex:'5000'}})
    .set(sentence,{css:{width:'900px',height:'50px',position:'absolute',left:'50%',marginLeft:'-350px',top:'50%',marginTop:'-125px',zIndex:'-1',textTransform:'uppercase',fontSize:'42px',color:'#ffffff'}})
    
    
    
        tl.to(tableLoder,2,{rotation:360,repeat:1,opacity:1, zIndex: -1},'here')
        .staggerFrom($('#annonce > span'), 0.3,{autoAlpha:0,rotation:-90},0.1,'here')
        .staggerTo([tableLoder,wrapper],2,{opacity:0, zIndex: -1},0.2);
    })
    $('body').append(' <div id="wrapper"><div id="preloader"><div id="preloader2"><div id="preloader3"></div></div></div><div id="annonce">Unexpected Opportunities</div></div>');
$(window).ready('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#wrapperdiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the wrapper div
      $( "#wrapperdiv" ).remove(); //makes page more lightweight 
  });  
}
var x = document.getElementById("login");  
        var y = document.getElementById("register");  
        var z = document.getElementById("btn");
        
        function register(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }
        
        function login(){
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0px";
        }


fetch('http://127.0.0.1:5000/users/')
.then(res => res.json())
.then(data => {
    console.log(data);
})
fetch('http://127.0.0.1:5000/items/')
.then(res => res.json())
.then(data => {
    console.log(data);
})
fetch('http://127.0.0.1:5000/item-qty/')
.then(res => res.json())
.then(data => {
    console.log(data);
})