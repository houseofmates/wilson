import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import regularImg from '../../assets/regular.png';
import sadImg from '../../assets/sad.png';
import bathingImg from '../../assets/bathing.png';
import eatingImg from '../../assets/eating.png';
import tennisImg from '../../assets/tennis.png';
import dirtyImg from '../../assets/dirty.png';
import criticalImg from '../../assets/critical.png';
import readingImg from '../../assets/reading.png';
import pettedImg from '../../assets/petted.png';
import sleepingImg from '../../assets/sleeping.png';
import iconImg from '../../assets/icon.png';

const WILSON_IMAGES = {
  idle:     iconImg,
  happy:    iconImg,
  sad:      iconImg,
  sleeping: iconImg,
  eating:   iconImg,
  playing:  iconImg,
  petted:   iconImg,
  dirty:    iconImg,
  cleaning: iconImg,
  critical: iconImg,
  reading:  iconImg,
};

const containerAnims = {
  idle:     { y:[0,-5,0],transition:{repeat:Infinity,duration:3,ease:'easeInOut'} },
  happy:    { y:[0,-9,0],transition:{repeat:Infinity,duration:1.4,ease:'easeInOut'} },
  sad:      { y:[0,2,0],transition:{repeat:Infinity,duration:4,ease:'easeInOut'} },
  sleeping: { y:[0,3,0],transition:{repeat:Infinity,duration:4.5,ease:'easeInOut'} },
  eating:   { y:[0,-3,0],transition:{repeat:Infinity,duration:0.45} },
  reading:  { y:[0,-7,0],transition:{repeat:Infinity,duration:3,ease:'easeInOut'} },
  petted:   { rotate:[-4,4,-3,3,0],transition:{repeat:Infinity,duration:0.75} },
  playing:  { rotate:[-5,5,-5],y:[0,-12,0],transition:{repeat:Infinity,duration:0.65} },
  dirty:    { y:[0,-3,0],transition:{repeat:Infinity,duration:3.5,ease:'easeInOut'} },
  cleaning: { x:[-3,3,-3,3,0],transition:{repeat:Infinity,duration:0.32} },
  critical: { x:[-2,2,-2,2,0],transition:{repeat:Infinity,duration:0.5} },
};

function WilsonSprite({ state, onPet }) {
  const anim = containerAnims[state] || containerAnims.idle;
  const imgSrc = WILSON_IMAGES[state] || WILSON_IMAGES.idle;

  return (
    <div style={{position:'relative',width:'100%',maxWidth:280,height:0,paddingTop:'130%',userSelect:'none',background:'#000',borderRadius:14,overflow:'hidden'}}>
      {state==='sleeping'&&<div style={{position:'absolute',top:0,right:0,pointerEvents:'none',zIndex:2}}>
        {[{t:20,r:10,s:11,d:0},{t:8,r:28,s:14,d:0.7},{t:-8,r:44,s:18,d:1.4}].map((z,i)=>(
          <motion.span key={i} style={{position:'absolute',top:z.t,right:z.r,color:'#f5af12',fontSize:z.s,fontWeight:'bold'}}
            animate={{y:[-4,-36,-4],opacity:[0,1,0]}} transition={{repeat:Infinity,duration:2.2,delay:z.d}}>z</motion.span>
        ))}
      </div>}
      {state==='petted'&&<div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:2}}>
        {[{t:28,l:'8px',s:22,d:0,e:'💛'},{t:18,r:'8px',s:17,d:0.4,e:'💛'},{t:55,r:'22px',s:13,d:0.8,e:'✨'}].map((h,i)=>(
          <motion.span key={i} style={{position:'absolute',top:h.t,left:h.l,right:h.r,fontSize:h.s}}
            animate={{y:[0,-52],opacity:[1,0]}} transition={{repeat:Infinity,duration:1.6,delay:h.d}}>{h.e}</motion.span>
        ))}
      </div>}
      {state==='cleaning'&&<div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:2}}>
        {['💧','✨','💧','✨'].map((e,i)=>(
          <motion.span key={i} style={{position:'absolute',top:18+i*22,left:i%2===0?2:185,fontSize:14}}
            animate={{y:[0,32],opacity:[1,0]}} transition={{repeat:Infinity,duration:1,delay:i*0.25}}>{e}</motion.span>
        ))}
      </div>}
      <motion.div animate={anim} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <AnimatePresence mode="wait">
          <motion.img
            key={state}
            src={imgSrc}
            alt={`wilson ${state}`}
            onClick={onPet}
            style={{width:'92%',height:'92%',margin:'4%',objectFit:'contain',imageRendering:'pixelated',transform:'scale(0.95)',cursor:'pointer'}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.2}}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function StatBar({ label, value, icon, color }) {
  const pct = Math.max(0, Math.min(100, value));
  const isLow = pct <= 25, isMed = pct <= 50;
  return (
    <div style={{marginBottom:10}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
        <span style={{fontSize:13,color:'#fff',fontFamily:'Varela Round,sans-serif',display:'flex',alignItems:'center',gap:6}}>
          <span style={{fontSize:15}}>{icon}</span>{label}
        </span>
        <span style={{fontSize:12,color:isLow?'#ef4444':'#555',fontFamily:'Varela Round,sans-serif'}}>{Math.round(pct)}%</span>
      </div>
      <div style={{height:8,background:'#1a1a1a',borderRadius:999,overflow:'hidden',border:'1px solid #2a2a2a'}}>
        <div style={{height:'100%',width:`${pct}%`,borderRadius:999,background:isLow?'#ef4444':isMed?'#f5af12':color,transition:'width 0.5s ease,background 0.3s'}}/>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, onClick, disabled, active }) {
  return (
    <motion.button whileTap={{scale:disabled?1:0.88}} whileHover={{scale:disabled?1:1.06}} onClick={disabled?undefined:onClick}
      style={{background:active?'#f5af12':'#111',border:`1.5px solid ${active?'#f5af12':'#222'}`,borderRadius:14,padding:'10px 0',
        display:'flex',flexDirection:'column',alignItems:'center',gap:4,cursor:disabled?'not-allowed':'pointer',
        opacity:disabled?0.4:1,flex:1,minWidth:0,transition:'border-color 0.2s,background 0.2s'}}>
      <span style={{fontSize:22}}>{icon}</span>
      <span style={{fontSize:11,color:active?'#050505':'#fff',fontFamily:'Varela Round,sans-serif',letterSpacing:0.2}}>{label}</span>
    </motion.button>
  );
}

function MessageBubble({ message }) {
  return (
    <AnimatePresence mode="wait">
      {message && (
        <motion.div key={message} initial={{opacity:0,y:8,scale:0.95}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-8,scale:0.95}} transition={{duration:0.25}}
          style={{background:'#111',border:'1.5px solid #f5af12',borderRadius:14,padding:'10px 16px',color:'#fff',fontFamily:'Varela Round,sans-serif',fontSize:13,textAlign:'center',maxWidth:300,margin:'0 auto',position:'relative'}}>
          {message}
          <div style={{position:'absolute',bottom:-8,left:'50%',transform:'translateX(-50%)',width:0,height:0,borderLeft:'8px solid transparent',borderRight:'8px solid transparent',borderTop:'8px solid #f5af12'}}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MSGS = {
  idle:     ["i could really go for a sandwich right now.","have you seen my oncology charts?","i'm just... standing here. being charming.","is house bothering you too?","i need coffee. so much coffee.","do you think house knows i moved his whiteboard?","just... thinking about sandwiches."],
  happy:    ["this is nice. i like this.","you're basically my best friend now.","almost as good as a reuben.","i think i'm actually happy.","don't tell house."],
  sad:      ["i'm fine. i'm totally fine.","house is probably right about something again.","...i think i need a sandwich.","this is a lot."],
  sleeping: ["zzz... ...more turkey... zzz","...don't wake me unless someone's dying...","...cuddy can wait..."],
  eating:   ["mmmph... delicious.","food is basically medicine.","don't talk to me while i'm eating.","this sandwich is everything."],
  petted:   ["oh— okay. that's... nice.","i'm not a dog, but i'll allow it.","you have good instincts.","...thank you."],
  playing:  ["okay, this is actually fun.","racquetball? golf? either works.","i am having fun. definitely."],
  dirty:    ["i've been at the hospital for 14 hours...","i need a shower. badly.","house would not help with this."],
  cleaning: ["aahhh... much better.","cleanliness is next to... well.","fresh as a new white coat."],
  reading:  ["this book is kind of wild...","a little quiet time feels great.","page after page, I'm doing okay."],
  critical: ["i think... i need help.","please. anything. i'm not okay.","even house would notice this."],
  full:     ["i couldn't eat another bite.","no more food, please."],
  rested:   ["i'm not tired! let me be awake."],
  clean:    ["i'm perfectly clean, thank you."],
};
const pick = k => { const p = MSGS[k] || MSGS.idle; return p[Math.floor(Math.random()*p.length)]; };

const DEFAULT_STATS = { hunger:80, happiness:80, cleanliness:80, energy:80 };

export default function WilsonGame() {
  const [stats, setStats] = useState(() => { try { const s=localStorage.getItem('w_s'); return s?JSON.parse(s):DEFAULT_STATS; } catch { return DEFAULT_STATS; } });
  const [age, setAge]     = useState(() => { try { return parseInt(localStorage.getItem('w_a')||'0',10); } catch { return 0; } });
  const [activeAction, setActiveAction] = useState(null);
  const [message, setMessage] = useState(() => pick('idle'));
  const [lastAct, setLastAct] = useState({});
  const msgTimer = useRef(null);

  const getState = useCallback((s=stats, aa=activeAction) => {
    const avg = (s.hunger+s.happiness+s.cleanliness+s.energy)/4;
    if (avg < 20) return 'critical';
    if (aa) return aa;
    if (s.energy < 20) return 'sleeping';
    if (s.cleanliness < 30) return 'dirty';
    if (s.hunger < 30 || s.happiness < 30) return 'sad';
    if (avg > 75) return 'happy';
    return 'idle';
  }, [activeAction, stats]);

  const showMsg = useCallback(key => {
    setMessage(pick(key));
    if (msgTimer.current) clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(pick(getState())), 5000);
  }, [getState]);

  // stat decay
  useEffect(() => {
    const id = setInterval(() => {
      setStats(prev => {
        const sl = activeAction === 'sleeping';
        const n = {
          hunger:      Math.max(0, prev.hunger-(sl?0.5:2)),
          happiness:   Math.max(0, prev.happiness-1.5),
          cleanliness: Math.max(0, prev.cleanliness-1),
          energy:      sl ? Math.min(100, prev.energy+4) : Math.max(0, prev.energy-1.2),
        };
        localStorage.setItem('w_s', JSON.stringify(n));
        return n;
      });
    }, 8000);
    return () => clearInterval(id);
  }, [activeAction]);

  // age counter
  useEffect(() => {
    const id = setInterval(() => setAge(a => { const n=a+1; localStorage.setItem('w_a',String(n)); return n; }), 60000);
    return () => clearInterval(id);
  }, []);

  // idle message rotation
  useEffect(() => {
    const id = setInterval(() => { if (!activeAction) setMessage(pick(getState())); }, 7000);
    return () => clearInterval(id);
  }, [activeAction, getState]);

  const doAction = useCallback((action, changes, msgKey, dur=2500) => {
    const now = Date.now();
    if (lastAct[action] && now-lastAct[action] < 3000) return;
    setLastAct(p => ({...p,[action]:now}));
    setActiveAction(action);
    setStats(prev => {
      const n = {...prev};
      Object.entries(changes).forEach(([k,v]) => { n[k] = Math.max(0, Math.min(100, prev[k]+v)); });
      localStorage.setItem('w_s', JSON.stringify(n));
      return n;
    });
    showMsg(msgKey || action);
    setTimeout(() => setActiveAction(null), dur);
  }, [lastAct, showMsg]);

  const feed  = () => { if (stats.hunger > 90)     { showMsg('full');    return; } doAction('eating',   {hunger:25,happiness:8},          'eating'); };
  const pet   = () => { if (activeAction) return;                                   doAction('petted',   {happiness:20,energy:5},           'petted'); };
  const play  = () => { if (stats.energy < 15)      { showMsg('sad');     return; } doAction('playing',  {happiness:25,hunger:-10,energy:-12},'playing',3000); };
  const clean = () => { if (stats.cleanliness > 90) { showMsg('clean');   return; } doAction('cleaning', {cleanliness:35,happiness:10},     'cleaning'); };
  const sleep = () => { if (stats.energy > 85)       { showMsg('rested');  return; } doAction('sleeping', {energy:30,hunger:-5},            'sleeping',5000); };
  const read  = () => { if (activeAction) return;                                   doAction('reading',  {happiness:15,energy:7},           'reading', 3500); };
  const reset = () => { setStats(DEFAULT_STATS); setAge(0); setActiveAction(null); localStorage.clear(); setMessage(pick('idle')); };

  const cur = getState();
  const overall = Math.round((stats.hunger+stats.happiness+stats.cleanliness+stats.energy)/4);
  const hEmoji = overall > 75 ? '🟢' : overall > 40 ? '🟡' : '🔴';
  const fmtAge = m => m < 60 ? `${m}m` : m < 1440 ? `${Math.floor(m/60)}h ${m%60}m` : `${Math.floor(m/1440)}d`;

  return (
    <>
      <div style={{height:'100vh',maxHeight:'100vh',overflow:'hidden',background:'#050505',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:'calc(env(safe-area-inset-top,24px)+18px) 12px calc(env(safe-area-inset-bottom,20px)+18px)',gap:8,fontFamily:'Varela Round,sans-serif',color:'white'}}>
        <div style={{marginTop:8,marginBottom:8,width:'100%',maxWidth:420}}><MessageBubble message={message}/></div>
        <div style={{cursor:'pointer',marginBottom:2}} title="click to pet wilson">
          <WilsonSprite state={cur} onPet={pet} />
        </div>
        <div style={{width:'100%',maxWidth:340,background:'#0d0d0d',border:'1px solid #1a1a1a',borderRadius:18,padding:'14px 18px',marginBottom:6}}>
          <StatBar label="hunger"      icon="🥪" value={stats.hunger}      color="#22c55e"/>
          <StatBar label="happiness"   icon=":3" value={stats.happiness}   color="#f5af12"/>
          <StatBar label="cleanliness" icon="🧼" value={stats.cleanliness} color="#38bdf8"/>
          <StatBar label="energy"      icon="⚡" value={stats.energy}      color="#a78bfa"/>
        </div>
        <div style={{display:'flex',gap:8,width:'100%',maxWidth:340,marginBottom:6}}>
          <ActionButton icon="🥪" label="feed"  onClick={feed}  disabled={!!activeAction} active={activeAction==='eating'}/>
          <ActionButton icon="💛" label="pet"   onClick={pet}   disabled={!!activeAction} active={activeAction==='petted'}/>
          <ActionButton icon="🎾" label="play"  onClick={play}  disabled={!!activeAction} active={activeAction==='playing'}/>
          <ActionButton icon="📚" label="read"  onClick={read}  disabled={!!activeAction} active={activeAction==='reading'}/>
          <ActionButton icon="🧼" label="clean" onClick={clean} disabled={!!activeAction} active={activeAction==='cleaning'}/>
          <ActionButton icon="🛏️" label="sleep" onClick={sleep} disabled={!!activeAction} active={activeAction==='sleeping'}/>
        </div>
        <AnimatePresence>
          {cur==='critical' && (
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}
              style={{marginTop:18,background:'#1a0000',border:'1.5px solid #ef4444',borderRadius:12,padding:'10px 18px',textAlign:'center',maxWidth:320}}>
              <span style={{color:'#ef4444',fontSize:12,fontFamily:'Varela Round,sans-serif'}}>⚠️ wilson needs attention immediately!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}