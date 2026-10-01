const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');

if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!open));
    nav.classList.toggle('menu-open');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

const countdown=document.querySelector('.countdown');

if(countdown){
  const launchTime=new Date('2026-10-05T10:00:00-05:00').getTime();
  const fields={
    days:countdown.querySelector('[data-countdown="days"]'),
    hours:countdown.querySelector('[data-countdown="hours"]'),
    minutes:countdown.querySelector('[data-countdown="minutes"]'),
    seconds:countdown.querySelector('[data-countdown="seconds"]')
  };

  let timer;

  const updateCountdown=()=>{
    const remaining=Math.max(0,launchTime-Date.now());
    const days=Math.floor(remaining/86400000);
    const hours=Math.floor((remaining%86400000)/3600000);
    const minutes=Math.floor((remaining%3600000)/60000);
    const seconds=Math.floor((remaining%60000)/1000);

    fields.days.textContent=String(days).padStart(2,'0');
    fields.hours.textContent=String(hours).padStart(2,'0');
    fields.minutes.textContent=String(minutes).padStart(2,'0');
    fields.seconds.textContent=String(seconds).padStart(2,'0');

    if(remaining===0){
      countdown.setAttribute('aria-label','The debut collection is now available');
      clearInterval(timer);
    }
  };

  updateCountdown();
  timer=setInterval(updateCountdown,1000);
}
