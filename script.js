const predictions = [
  "Tumhari life me ek unexpected khushi aayegi — 12 July 2026, 10:21 AM",
  "Tum apne dream career ke bahut kareeb pahuch jaoge — 25 August 2026, 06:45 PM",
  "Tumhe apni life ka sabse pure love moment milega — 07 September 2026, 09:09 PM",
  "Ek chhoti si jeet tumhara confidence aasman tak pahucha degi — 19 October 2026, 11:11 AM",
  "Tumhara luck achanak strong ho jayega — 01 December 2026, 02:02 PM",

  "Tum kisi ko dil se maaf kar paoge — 14 January 2027, 07:07 PM",
  "Tumhari zindagi me ek naya strong rishta banega — 28 February 2027, 08:30 PM",
  "Tum apni life ke sabse proud moment ka hissa banoge — 11 April 2027, 05:05 PM",
  "Tumhari mehnat ka phal achanak milega — 22 May 2027, 09:45 AM",
  "Tum apni life ke best days jeena shuru karoge — 03 July 2027, 12:12 PM",

  "Tum kisi apne ki yaadon me emotional ho jaoge — 17 August 2027, 02:02 AM",
  "Tumhara dil kisi ke liye phir se dhadkega — 29 September 2027, 08:08 PM",
  "Tum apni life ka sabse deep truth samajh jaoge — 12 November 2027, 11:11 PM",
  "Tumhe kisi apne ke jaane ka ehsaas strong bana dega — 24 December 2027, 01:01 AM",
  "Tum zindagi aur maut ke beech ka farq samajh jaoge — 05 February 2028, 03:03 AM",

  "Tum kisi apne ki death ke baad emotionally mature ho jaoge — 18 March 2028, 09:09 PM",
  "Tum apni life ka sabse powerful decision loge — 30 April 2028, 11:11 AM",
  "Tum kisi ki life me farishta ban kar aaoge — 14 June 2028, 07:07 PM",
  "Tumhara future tumhari soch se bhi bright niklega — 27 July 2028, 10:10 AM",
  "Tum apni life ke sabse peaceful din jeeyoge — 08 September 2028, 06:06 PM",

  "Tum apni life ka sabse emotional goodbye sochoge — 21 October 2028, 02:22 AM",
  "Tumhe zindagi aur maut dono ki value samajh aayegi — 02 December 2028, 11:59 PM",
  "Tum apne past ke bojh se free ho jaoge — 15 January 2029, 05:05 AM",
  "Tum apni life ka sabse romantic phase jeeyoge — 28 February 2029, 09:09 PM",
  "Tumhara naam kisi ke liye zindagi ban jayega — 11 April 2029, 07:07 PM",

  "Tum apni life ka sabse brave kaam karoge — 24 May 2029, 01:01 PM",
  "Tum apni maut ke khayal se nahi, apni zindagi se jeena seekhoge — 06 July 2029, 04:44 AM",
  "Tum kisi apne ko zindagi ka naya matlab sikhaoge — 18 August 2029, 08:08 PM",
  "Tum apni life ke sabse proud insaan banoge — 30 September 2029, 10:10 AM",
  "Tumhara future logon ke liye inspiration banega — 12 November 2029, 06:06 PM",

  "Tum zindagi aur maut ke beech ka balance seekh jaoge — 25 December 2029, 11:11 PM",
  "Tum apni life ka sabse powerful truth samajh jaoge — 07 February 2030, 03:03 AM",
  "Tum apni zindagi me sabse gehri khushi mehsoos karoge — 21 March 2030, 09:09 PM",
  "Tum apni life ke sabse meaningful pal jeeyoge — 02 May 2030, 12:12 PM",
  "Tumhari kahani kisi aur ki zindagi badal degi — 15 June 2030, 07:07 PM",
  "Tumhari life me ek unexpected love story shuru hogi — 12 July 2026, 10:21 PM",
  "Ek ladki jiska naam S se shuru hota hai tumhari zindagi badal degi — 28 August 2026, 02:19 AM",
  "Tum apni life ka sabse bada lesson seekhoge — 09 September 2026, 03:33 AM",
  "Tumhara koi bahut apna IAS banega — 22 October 2026, 09:45 PM",
  "Tum apni life ka sabse emotional phase cross karoge — 05 November 2026, 12:01 AM",

  "Tum unexpected tarike se pyaar me pad jaoge — 18 December 2026, 07:07 PM",
  "Tum ek dangerous situation se bal-bal bach jaoge — 03 January 2027, 02:42 AM",
  "Ek ladki jiska naam A se shuru hota hai tumse kuch chhupayegi — 16 February 2027, 01:11 AM",
  "Tumhara future achanak bright ho jayega — 27 March 2027, 10:10 PM",
  "Tum life aur maut ke beech ka asli matlab samajh jaoge — 09 April 2027, 04:44 AM",

  "Tum apni life ka sabse proud moment jeeyoge — 21 May 2027, 11:59 PM",
  "Tumhara pehla bachcha paida hone ki khabar milegi — 07 June 2027, 06:06 PM",
  "Tum kisi apne ki death ke baad zyada mature ho jaoge — 19 July 2027, 03:21 AM",
  "Ek ladki jiska naam R se shuru hota hai tumhara luck badal degi — 30 August 2027, 09:09 PM",
  "Tum apni life ka sabse silent dard mehsoos karoge — 12 September 2027, 02:02 AM",

  "Tum kisi apne ko hamesha ke liye yaad rakhoge — 25 October 2027, 10:30 PM",
  "Tumhari life me ek miracle hoga — 14 November 2027, 05:05 AM",
  "Tum apni destiny ko khud badalte hue dekhoge — 03 December 2027, 11:11 PM",
  "Tum maut ke khayal se nahi, zindagi ki value se jeena seekhoge — 17 January 2028, 01:59 AM",
  "Ek ladki jiska naam N se shuru hota hai tumhara sabse bada support banegi — 28 February 2028, 03:03 AM",

  "Tumhari life me ek emotional toofan aayega — 11 April 2028, 09:21 PM",
  "Tumhara doosra bachcha paida hone ka yog banega — 23 May 2028, 12:12 AM",
  "Tum apni life ka sabse bada risk loge — 07 July 2028, 02:45 AM",
  "Tum kisi apne ke liye sab kuch chhodne ko tayaar ho jaoge — 18 August 2028, 11:58 PM",
  "Tumhara koi dost IAS banega aur tumhe inspire karega — 30 September 2028, 04:04 AM",

  "Tum apni life ke sabse dark sach se rubaru hoge — 11 November 2028, 01:11 AM",
  "Ek ladki jiska naam P se shuru hota hai tumhe propose karegi — 25 December 2028, 08:08 PM",
  "Tum apni life ka sabse bada emotional decision loge — 06 February 2029, 03:33 AM",
  "Tum apne past se finally free ho jaoge — 19 March 2029, 10:10 PM",
  "Tum apni zindagi ka sabse gehra dard mehsoos karoge — 30 April 2029, 02:02 AM",

  "Tumhara koi bahut apna achanak zindagi se door ho sakta hai — 14 June 2029, 11:11 PM",
  "Tum apni life ke sabse ajeeb sapne dekho ge — 27 July 2029, 04:44 AM",
  "Ek ladki jiska naam K se shuru hota hai tumhari kismat likhegi — 08 September 2029, 09:09 PM",
  "Tum apni life ka sabse strong version banoge — 19 October 2029, 12:12 AM",
  "Tum kisi apne ke liye bina bole ro padoge — 02 December 2029, 03:03 AM",

  "Tumhari life ka sabse powerful phase shuru hoga — 15 January 2030, 01:01 AM",
  "Tum apni zindagi ka sabse emotional farewell mehsoos karoge — 26 February 2030, 11:59 PM",
  "Tum apni life ka sabse bada sach jaan loge — 09 April 2030, 02:22 AM",
  "Tumhara naam kisi ke liye zindagi ban jayega — 21 May 2030, 05:55 AM",
  "Ek ladki jiska naam M se shuru hota hai tumhari life me permanent rahegi — 02 July 2030, 10:10 PM",

  "Tum apni life ka sabse peaceful pal jeeyoge — 18 September 2030, 11:11 PM",
  "Tumhara future generations tak yaad rakha jayega — 09 December 2030, 03:33 AM",
  "Tum zindagi aur maut ke beech ka balance seekh jaoge — 15 March 2031, 02:02 AM",
  "Tumhara koi apna desh ka bada officer banega — 21 August 2031, 06:06 PM",
  "Tum apni destiny ke sabse kareeb pahuch jaoge — 30 January 2032, 11:59 PM",

  "Tum apni life ka sabse khubsurat surprise dekhoge — 12 June 2032, 09:09 PM",
  "Tum apne bachchon ke future par garv mehsoos karoge — 05 November 2032, 05:05 AM",
  "Tumhara naam kisi ki dua me shamil hoga — 18 April 2033, 02:22 AM",
  "Tum apni zindagi ka sabse gehra sach samajh jaoge — 07 September 2033, 07:07 PM",
  "Tum apni life ka sabse silent dard paar kar jaoge — 19 February 2034, 01:11 AM",

  "Tumhari kahani kisi aur ki zindagi badal degi — 11 July 2034, 10:10 PM",
  "Tum apni destiny ke sabse strong mode me aa jaoge — 29 November 2034, 03:33 AM",
  "Tumhara future tumhari soch se 100 guna zyada bright niklega — 15 May 2035, 06:06 PM",
  "Tum apni life ka sabse proud moment jeeyoge — 27 October 2035, 11:11 PM"
];


 

function startPrediction(){

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const tob = document.getElementById("tob").value;
  const place = document.getElementById("place").value;

  if(!name || !dob || !tob || !place){
    alert("⚠ Enter all birth details.");
    return;
  }

  const loader = document.getElementById("loader");
  const results = document.getElementById("results");

  results.innerHTML="";
  loader.innerHTML="INITIALIZING NEURAL SCAN...";

  setTimeout(()=>loader.innerHTML="SCANNING LIFE PARAMETERS...",1000);
  setTimeout(()=>loader.innerHTML="ANALYZING FUTURE PROBABILITIES...",2000);
  setTimeout(()=>loader.innerHTML="GENERATING PREDICTION MATRIX...",3000);

  setTimeout(()=>{
    loader.innerHTML="NEURAL OUTPUT READY";
    generateResults(name);
  },4200);
}

function generateResults(name){
  const results=document.getElementById("results");
  let used=new Set();

  while(used.size<5){
    used.add(predictions[Math.floor(Math.random()*predictions.length)]);
  }

  [...used].forEach((p,i)=>{
    const li=document.createElement("li");
    li.innerHTML=`<b>${i+1}.</b> ${name}, ${p}`;
    results.appendChild(li);
  });
}
