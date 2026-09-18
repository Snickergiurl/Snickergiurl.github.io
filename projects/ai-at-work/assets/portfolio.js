(() => {
  'use strict';
  const feedback = [
    'AI can help here, but the safeguards are essential. Use approved information, verify the facts and commitments, and review the tone before sending.',
    'Exactly. A useful draft still needs approved input, factual checks, and human review. The employee owns the final message.',
    'You can use AI for this first draft when the tool and information are approved. Checking facts, commitments, and tone makes the assistance appropriate.'
  ];
  document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click',()=>{
    document.querySelectorAll('[data-demo]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    document.getElementById('demo-feedback').textContent=feedback[Number(button.dataset.demo)];
  }));
  const tabs=[...document.querySelectorAll('[data-preview]')];
  function selectTab(button,focus=false){
    const view=button.dataset.preview,name=button.textContent;
    tabs.forEach(b=>{b.setAttribute('aria-selected',String(b===button));b.tabIndex=b===button?0:-1;});
    document.getElementById('course-preview-panel').setAttribute('aria-labelledby',button.id);
    const frame=document.getElementById('course-preview-frame');
    frame.src=`course.html?preview=${view}`;frame.title=`${name} screen preview from the AI at Work course`;
    document.getElementById('preview-screen-name').textContent=`AI at Work / ${name}`;
    if(focus)button.focus();
  }
  tabs.forEach((button,i)=>{
    button.addEventListener('click',()=>selectTab(button));
    button.addEventListener('keydown',e=>{
      let next;
      if(e.key==='ArrowRight')next=(i+1)%tabs.length;
      else if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;
      else if(e.key==='Home')next=0;
      else if(e.key==='End')next=tabs.length-1;
      if(next!==undefined){e.preventDefault();selectTab(tabs[next],true);}
    });
  });
  // A pixel ratio also supports browsers without CSS typed length division.
  const stage=document.getElementById('preview-stage');
  const resize=()=>{document.getElementById('course-preview-frame').style.transform=`scale(${stage.clientWidth/1100})`;};
  resize();
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(resize).observe(stage);else window.addEventListener('resize',resize);
})();
