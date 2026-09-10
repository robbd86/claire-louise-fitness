const form=document.getElementById('bookForm');
const message=document.getElementById('demoMessage');
if(form){form.addEventListener('submit',e=>{e.preventDefault();form.style.display='none';if(message)message.style.display='block';});}

document.addEventListener('DOMContentLoaded',()=>{
  // Claire's latest brief: keep HYROX as a coaching service, but don't position her as a HYROX athlete.
  const socialHeading=document.querySelector('#social h2');
  const socialCopy=document.querySelector('#social .lede');
  if(socialHeading) socialHeading.textContent='Coach first. Gym girl always.';
  if(socialCopy) socialCopy.textContent='Training clips, coaching, tips and the real-life side of fitness — knowledgeable, approachable and never pretending every workout has to be glamorous.';

  const hyrox=document.getElementById('hyrox');
  if(hyrox){
    const heading=hyrox.querySelector('h2');
    const lede=hyrox.querySelector('.sales-lede');
    const panelHeading=hyrox.querySelector('.offer-panel h3');
    const panelCopy=hyrox.querySelector('.offer-panel p');
    if(heading) heading.textContent='Smart event coaching without turning every session into punishment.';
    if(lede) lede.textContent='Claire’s role is the coaching: planning the build, balancing strength and running, reviewing progress and adjusting the plan as the event gets closer.';
    if(panelHeading) panelHeading.textContent='Good HYROX coaching is about the plan, not the hype.';
    if(panelCopy) panelCopy.textContent='Programming can be built around your experience, event timeline, current strengths and weaknesses, with regular check-ins and changes along the way.';
  }

  // Make the working pricing match what Claire actually described in the chat.
  const pricing=document.getElementById('pricing');
  if(pricing){
    const intro=pricing.querySelector('.pricing-head .sales-lede');
    if(intro) intro.textContent='Claire is still finalising the exact tiers. The structure below reflects how she currently wants to work: a lower-contact plan option, more support at the next level, and event-focused coaching.';

    const cards=[...pricing.querySelectorAll('.price-card')];
    if(cards[0]){
      const tier=cards[0].querySelector('.tier');
      const summary=cards[0].querySelector('.price-summary');
      const list=cards[0].querySelector('.price-list');
      if(tier) tier.textContent='Tier 01 · Plan + monthly check-in';
      if(summary) summary.textContent='A personalised training plan for someone who mainly needs clear direction, with one proper monthly review.';
      if(list) list.innerHTML='<li>Personalised training programme</li><li>Built around your goal and equipment</li><li>One monthly check-in</li><li>Programme review and agreed amendments</li>';
    }

    if(cards[1]){
      const tier=cards[1].querySelector('.tier');
      const price=cards[1].querySelector('.price');
      const summary=cards[1].querySelector('.price-summary');
      const list=cards[1].querySelector('.price-list');
      if(tier) tier.textContent='Tier 02 · More coaching support';
      if(price) price.innerHTML='TBC <small>/ month</small>';
      if(summary) summary.textContent='For clients who want more regular contact, accountability and plan changes. The final price is still being set.';
      if(list) list.innerHTML='<li>Personalised training programme</li><li>Weekly check-ins</li><li>Ongoing tweaks and amendments</li><li>Nutrition / macro guidance where included</li><li>More regular accountability and support</li>';
    }

    if(cards[2]){
      const tier=cards[2].querySelector('.tier');
      const title=cards[2].querySelector('h3');
      const price=cards[2].querySelector('.price');
      const summary=cards[2].querySelector('.price-summary');
      const list=cards[2].querySelector('.price-list');
      if(tier) tier.textContent='Tier 03 · Event focused';
      if(title) title.textContent='HYROX / Event Coaching';
      if(price) price.innerHTML='£100 <small>/ month</small><span class="price-alt">or £25/week during an event build</span>';
      if(summary) summary.textContent='Based on Claire’s current event clients while she reviews the final package structure.';
      if(list) list.innerHTML='<li>Event-focused training plan</li><li>Weekly check-ins</li><li>Training tweaks through the build</li><li>Macro guidance and adjustments</li><li>Programming shaped around the event timeline</li>';
    }

    const foot=pricing.querySelector('.pricing-foot');
    if(foot) foot.innerHTML='<strong>Working draft:</strong> package names, inclusions and final pricing are still being reviewed before launch.';
  }

  // Keep the results section customer-facing while Claire waits for the approved HYROX testimonial.
  const results=document.getElementById('results');
  if(results){
    const lede=results.querySelector('.results-head .sales-lede');
    if(lede) lede.textContent='Real client progress and approved testimonials will be featured here. The aim is to show the story behind the result, not fill the page with generic claims.';
    const cards=[...results.querySelectorAll('.proof-card')];
    if(cards[0]) cards[0].innerHTML='<small>Client progress</small><div><h3>Progress story slot</h3><p>Reserved for Claire’s approved client photo, result and a little context around the work behind it.</p></div>';
    if(cards[1]) cards[1].innerHTML='<small>HYROX client</small><div><h3>Testimonial slot</h3><p>Ready for the short testimonial Claire is currently collecting from her event client.</p></div>';
  }

  // Add a tasteful image framework now, ready for Claire's own photos rather than stock imagery.
  const social=document.getElementById('social');
  if(social && !document.getElementById('action-shots')){
    const section=document.createElement('section');
    section.id='action-shots';
    section.className='action-shots';
    section.innerHTML=`
      <div class="wrap action-shots-grid">
        <div class="action-copy">
          <p class="eyebrow">Claire in action</p>
          <h2>Real coaching. Real training.</h2>
          <p class="lede">This area is ready for Claire’s own imagery — a mix of coaching, a clean portrait and genuine training shots will make the site feel personal without turning it into an Instagram feed.</p>
          <div class="photo-guidance"><span>01 · Coaching a client</span><span>02 · Strong camera-facing portrait</span><span>03 · Mid-exercise training shot</span></div>
        </div>
        <div class="photo-slots" aria-label="Photo placeholders awaiting Claire's images">
          <div class="photo-slot"><strong>Coaching image</strong><small>Client interaction / static coaching position</small></div>
          <div class="photo-slot"><strong>Training image</strong><small>Mid-exercise / natural gym shot</small></div>
        </div>
      </div>`;
    social.parentNode.insertBefore(section,social);
  }

  // Instagram is wanted, but the actual profile link has not been supplied yet. Prepare the space without inventing a URL.
  if(social && !social.querySelector('.instagram-pending')){
    const card=social.querySelector('.tiktok-card');
    if(card){
      const pending=document.createElement('div');
      pending.className='instagram-pending';
      pending.innerHTML='<span>Instagram</span><strong>Profile link ready to add</strong><small>Waiting for Claire’s Instagram profile / QR</small>';
      card.insertAdjacentElement('afterend',pending);
      social.querySelector('.social-grid')?.classList.add('social-grid-expanded');
    }
  }

  const style=document.createElement('style');
  style.textContent=`
    .price-alt{display:block;font-family:"DM Sans",sans-serif;font-size:.78rem;font-weight:600;letter-spacing:0;margin-top:.45rem;color:var(--muted)}
    .price-card.featured .price-alt{color:#bcbcb7}
    .action-shots{background:#fff;padding:5.5rem 0;border-top:1px solid var(--line)}
    .action-shots-grid{display:grid;grid-template-columns:1fr;gap:2.25rem;align-items:center}
    .photo-guidance{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.3rem}
    .photo-guidance span{border:1px solid var(--ink);padding:.55rem .75rem;font-size:.8rem;font-weight:700}
    .photo-slots{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .photo-slot{aspect-ratio:4/5;background:var(--soft);border:1px dashed #aaa;display:flex;flex-direction:column;justify-content:flex-end;padding:1.2rem;position:relative;overflow:hidden}
    .photo-slot:before{content:"IMAGE";position:absolute;inset:auto 1rem 1.2rem auto;font-family:"Space Grotesk",sans-serif;font-size:3rem;font-weight:700;color:#e0e0dc;letter-spacing:-.08em;z-index:0}
    .photo-slot strong,.photo-slot small{position:relative;z-index:1}.photo-slot strong{font-family:"Space Grotesk",sans-serif}.photo-slot small{color:var(--muted)}
    .social-grid-expanded{grid-template-columns:1fr!important}
    .instagram-pending{display:block;background:#fff;border:1px dashed #aaa;color:var(--ink);padding:2rem}
    .instagram-pending span{display:block;color:var(--muted);font-weight:700;margin-bottom:.35rem}.instagram-pending strong{font-family:"Space Grotesk";font-size:1.4rem;display:block}.instagram-pending small{display:block;color:var(--muted);margin-top:.7rem}
    @media(min-width:800px){.action-shots-grid{grid-template-columns:.9fr 1.1fr}.social-grid-expanded{grid-template-columns:1.1fr .75fr .75fr!important}}
    @media(max-width:620px){.photo-slots{grid-template-columns:1fr}.photo-slot{aspect-ratio:16/10}.action-shots{padding:4.3rem 0}}
  `;
  document.head.appendChild(style);
});