document.getElementById('yr').textContent=new Date().getFullYear();
document.getElementById('copy').onclick=function(){
var b=this,t='fozanali83@gmail.com';
function ok(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy email'},1800)}
try{navigator.clipboard.writeText(t).then(ok,function(){b.textContent=t})}catch(e){b.textContent=t}
};
document.getElementById('cf').onsubmit=function(ev){
ev.preventDefault();
var n=document.getElementById('cn').value,e=document.getElementById('ce').value,m=document.getElementById('cm').value;
window.location.href='mailto:fozanali83@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' ('+e+')');
};
var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
/* typing roles */
var roles=['Python Developer','Web Developer','Problem Solver'],ri=0,ci=0,dl=false,te=document.getElementById('typed');
if(!reduce){te.textContent='';(function tk(){
var w=roles[ri];te.textContent=w.slice(0,ci);
if(!dl&&ci<w.length){ci++;setTimeout(tk,85)}
else if(!dl){dl=true;setTimeout(tk,1600)}
else if(ci>0){ci--;setTimeout(tk,45)}
else{dl=false;ri=(ri+1)%roles.length;setTimeout(tk,300)}
})()}
/* mobile menu */
var mm=document.getElementById('mm');
document.getElementById('menu').onclick=function(){mm.classList.toggle('open')};
mm.addEventListener('click',function(){mm.classList.remove('open')});
/* progress bar + back to top */
var pb=document.getElementById('pb'),bt=document.getElementById('btt');
window.addEventListener('scroll',function(){
var h=document.documentElement.scrollHeight-window.innerHeight;
pb.style.width=(h>0?Math.min(window.scrollY/h*100,100):0)+'%';
bt.classList.toggle('show',window.scrollY>600);
},{passive:true});
bt.onclick=function(){window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})};
/* counters */
var nums=document.querySelectorAll('.num');
function count(el){var to=+el.getAttribute('data-to');if(reduce){el.textContent=to;return}
var t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1100,1);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if('IntersectionObserver' in window){
nums.forEach(function(n){n.textContent='0'});
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);io2.unobserve(e.target)}})},{threshold:.6});
nums.forEach(function(n){io2.observe(n)});
}
var rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
rv.forEach(function(n){io.observe(n)});
}else{rv.forEach(function(n){n.classList.add('in')})}
var secs=document.querySelectorAll('section[id]'),as=document.querySelectorAll('.nl a');
window.addEventListener('scroll',function(){
var y=window.scrollY+140,cur='';
secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});
as.forEach(function(a){if(!a.classList.contains('cta'))a.classList.toggle('on',a.getAttribute('href')==='#'+cur)});
},{passive:true});
