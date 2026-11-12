import{h as la,u as rd,a as id,l as nd,c as ad}from"./nexara-guide.CAtOOjrV.js";import"./index.astro_astro_type_script_index_0_lang.CeZYJ3UM.js";const sd="nexara.avatar-manifest/1",od="head02-2.1.1",ld="0.4.1",cd="2026-10-31 (owner, chat): the project moved from E:/Work/NEXARA to D:/Work/NEXARA (product 3196e64), which rewrote drive letters inside six reports: build-report.json, crown-face-moves.json and the v2 build, lip-seam, speech and export reports. Their sha256 values here are re-recorded for the rewritten bytes; each file's pre-move bytes, with E: replaced by D:, equal its bytes now, and the pre-move hashes stay in git (3196e64^). The GLBs, poster, face table, strands, maps and bindings are unchanged. Hashes recorded inside the reports themselves are the original build's and are not rewritten.",ud={path:"nexara-head02-v2.glb",sha256:"289481a8760cee17b63ffa053331719ed522a3742e931bdb9c6bdef46034b26d",bytes:3739024},hd={path:"poster-front.png",sha256:"7644cfa34644c0f8449d12ea3f0b955565f6d773a5e76f9ffdce3c5f2f7e9dc5",bytes:366192,alt:"NEXARA, a calm translucent blue holographic head with a crown of glowing ribbons, seen from the front."},dd=[],pd={kind:"bundled",package:"@nexara/avatar-runtime",preset:"hologram-a"},fd=[{node:"NEXARA_head",role:"head"},{node:"NEXARA_crown",role:"crown"},{node:"NEXARA_mouth_cavity",role:"mouthCavity"}],md={upAxis:"+Y",forwardAxis:"+Z",units:"approved head-02 assembly units (v7 frame; skull length 1.2919)",scale:1,origin:[0,0,0],note:"scale 1 and origin [0,0,0]: the approved assembly coordinates are unchanged; the meshes sit under NEXARA_head_pivot, identity at rest"},gd={min:[-.8088014721870422,-2.002969264984131,-1.106370210647583],max:[.8109493255615234,1.047524333000183,.8012083172798157],note:"exact POSITION accessor bounds of both meshes"},vd={target:[0,-.62,0],fovDeg:30,distance:7.4,canonicalYawDeg:0},_d={yaw:"continuous",pitchMinDeg:-20,pitchMaxDeg:20,pan:!1,zoom:{minScale:1,maxScale:5,aim:"pointer"},dampingSeconds:.12,resetToFront:!0,resetSettleSeconds:.75,zoomNote:"Owner choice 2026-10-11 (CR-LOOK-003): stronger bounded zoom up to 5x closer, aimed at the pointer; the aim stays inside the bounding box and returns to the camera target at 1x; no drag-to-pan."},xd={position:[0,-2.42,.05]},yd={fromY:-2,toY:-1.35},Md=[{name:"jawOpen",min:0,max:1,group:"mouth"},{name:"mouthWide",min:0,max:1,group:"mouth"},{name:"mouthFunnel",min:0,max:1,group:"mouth"},{name:"mouthPucker",min:0,max:1,group:"mouth"},{name:"mouthSmileLeft",min:0,max:1,group:"mouth"},{name:"mouthSmileRight",min:0,max:1,group:"mouth"},{name:"eyeBlinkLeft",min:0,max:1,group:"eyes"},{name:"eyeBlinkRight",min:0,max:1,group:"eyes"},{name:"browInnerUp",min:0,max:1,group:"brow"},{name:"browDownLeft",min:0,max:1,group:"brow"},{name:"browDownRight",min:0,max:1,group:"brow"},{name:"mouthFrownLeft",min:0,max:1,group:"mouth"},{name:"mouthFrownRight",min:0,max:1,group:"mouth"},{name:"mouthPress",min:0,max:1,group:"mouth"}],Sd=["head","mouthCavity","crown"],bd=[],Td={crownStrands:{path:"crown-strands.bin",sha256:"0bfcfba5508e6fc5f24235b99846cf7f10773000f6cec9737f222643c5332774",bytes:851700,report:"crown-strands-build.json",reportSha256:"d71c68aa1169e6ab4f79fd7d40640e476315bb54c263ac3df99bbed32b3b85a8",note:"Crown neuron net (Gabriel-graph nodes and links draped on the crown, two detail levels) plus long band strands; owner direction 2026-10-11; built by product/packages/avatar-runtime/scripts/build-strands.ts --mode both; geometry unchanged.",binding:{path:"crown-strands-binding.bin",sha256:"94d15b12ed9e85cbffb876331c91c11275bd7bce4cfb6dacc47333c1dfc44e37",bytes:137852,report:"crown-strands-binding-report.json",reportSha256:"40ea66384a056ee09bef0a23655843a8b6d9dd7ea109e66fea64a88061dd4361",note:"NXSTB002 (runtime 0.4.1): each net point on a moving surface is bound to its nearest crown or head triangle (owner role, triangle ID, barycentrics, fixed neutral offset; exact ties go to the crown, then the lowest ID; P5-R15), built by product/tools/authoring/speech/net_binding.py from this GLB and crown-strands.bin; the header binds both hashes. Runtime 0.4.1 also reads the crown-only NXSTB001 of 0.4.0 assets."}}},Ed={targetFps:60,minimumFps:30,tiers:["high","medium","low"],fallback:"2d-still",provisional:!0,note:"PERF-002 targets; device profiles and budgets stay provisional until OD-07. Tier contents are defined in the runtime (quality.ts)."},wd={approvedShape:"shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/assembly/assembly.glb (parent workspace)",approvedShapeSha256:"c66407c81f32ab5c2ec63a79dd4f27b95e28b422071c936fda06e10f9801a3d8",ownerAcceptance:'G2 identity acceptance by the owner, 2026-10-10 ("accept"), recorded in AGENT-026 [Claude, 1010, 2239]',geometryChange:"none: every triangle keeps the approved float32 position bytes; 1522 head triangles are regrouped into the crown (build-report.json positionsUnchanged)"},Ad={tool:"D:/tools/nexara-avatar-runtime/build_runtime_glb.py (registered in D:/tools/AGENTS.md)",command:"uv run --no-project D:/tools/nexara-avatar-runtime/build_runtime_glb.py --input ../shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/assembly/assembly.glb --output assets/avatar/nexara-head02-v1.glb --report assets/avatar/build-report.json --move-to-crown assets/avatar/crown-face-moves.json",runFrom:"product/",operations:["weld identical float32 positions","area-weighted smooth normals","uint32 indices","drop source normals/UVs/materials","move 1522 NEXARA_head triangles to NEXARA_crown (crown-face-moves.json), positions unchanged"],deterministic:!0,report:"build-report.json",reportSha256:"532043002b688bb1066fd064c326686a07f448d16c9ecabe4d03659dfbdfde6a",crownFaceMoves:{path:"crown-face-moves.json",sha256:"899f0bab39e81692b92afccd025bd57539eb99275a557cebbf4894be2083027c",reason:'Owner decision 2026-10-11 (AGENT-027): crown surfaces that the Phase 3 split left in NEXARA_head looked like missing crown parts; they are regrouped into the crown. No vertex moves; the approved assembly c66407c8 is unchanged. Stricter split: --thin 0.15; matched triangles connected to the approved crown (1459) plus crown junction walls standing more than 0.03 outside an ellipsoid fitted to the clean skull (63; owner 2026-10-11: "it should not the part of skull, it a part of crown"): 1522 moved.',regenerate:["blender -b --factory-startup --python-exit-code 1 --python D:/tools/nexara-meshy/split_crown.py -- --glb shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/raw/model.glb --out-dir <dir> --thin 0.15 --relief 0.004 --smooth-iter 60 --touch-rings 4 --min-part 200 --neck-band 0.12","uv run --no-project D:/tools/nexara-avatar-runtime/crown_faces.py --assembly <bundle>/assembly/assembly.glb --assembly-json <bundle>/assembly/assembly.json --crown <dir>/crown.glb --out assets/avatar/crown-face-moves.json --junction-excess 0.03 --enclosed-max 200"],stricterCrownSha256:"bdf035abf22e1d75ee8940537bd93a40721e585752525fda25f1c0a49b3e0a33"}},Rd={tool:"Khronos glTF-Validator 2.0.0-dev.3.10 via D:/tools/gltf-validator/validate.mjs",report:"nexara-head02-v2.khronos.json",reportSha256:"cd080f3da6c549fda629388336ac2d7180b9f068bb2554136f1b0fa6cdee426f",errors:0,warnings:0,infos:3,hints:0,allowlist:[{code:"UNUSED_OBJECT",count:3,pointer:"/meshes/*/primitives/0/attributes/TEXCOORD_0",rationale:"UVs exist for AVATAR-010; the runtime's procedural materials do not sample textures"}],note:"The report embeds a validatedAt timestamp, so a re-run changes its bytes but not its counts."},Cd={geometrySource:"Meshy (Pro plan, owner's account) multi-image-to-3D and remesh tasks, inputs limited to the 8 hash-frozen images in hologram_full_18view_4k/Base (CR-SHAPE-003, REQ 5.7)",ownerAdoption:"Owner-adopted under CR-SHAPE-003 rule 7; Meshy task IDs and credits in the Phase 3 bundle README",projectScope:"Personal, non-commercial project (ASK-002 owner decision). If the deployment intent changes, the provenance question reopens.",meshyTerms:"Output terms are Meshy's at generation time; not separately reviewed here.",status:"recorded for personal, non-commercial use; no release approval is implied",generationLineage:[{task:"01a125ce-26f1-732d-8a6f-e183842509f3",kind:"image-to-image",model:"nano-banana-pro",inputs:"Base 03 and 05"},{task:"01a125cf-66ba-7150-8f07-b6d18d531175",kind:"multi-image-to-3d",model:"meshy-7.1"},{task:"01a125da-e474-702a-9cd5-f014a1bb1106",kind:"remesh"}],lineageRecords:"intake records in shape-test/validation/phase3-crown/meshy-head-02-v1/ (parent workspace)",use:"Internal, personal, non-commercial use only (REQ 5.7 rule 4; ASK-002); no public or commercial release approval is implied"},Pd="TEXCOORD_0 on every mesh: head and crown cylindrical about +Y (seam at the back, unwrapped-u duplicates for crossing triangles, pole triangles listed in the export report), cavity a grid; for AVATAR-010, unused by the S4 shaders",Ld={glbBytes:3739024,perf003TargetBytes:8e6,note:"PERF-003: at or below 8 MB initially; OD-07 device targets are still open. Speech targets are sparse (lossless).",strandsBytes:851700,strandBindingBytes:137852},Nd="REQ 5.12/5.14 (CR-SPEECH-001/003): the nine first, then the expression targets; left = NEXARA's left (+X). Head, NEXARA_mouth_cavity and NEXARA_crown (morphRoles, runtime 0.4.0) carry the same targets in this order (cavity: POSITION only, all-zero for eye/brow targets; crown: POSITION and NORMAL, non-zero only on the cheek-ribbon ends and jaw-angle seats welded to the moving jaw, P5-R13, AGENT-030 [1210, 1005/2255]). Sparse accessors store only moving vertices. Default weights 0 = the approved neutral.",Id={node:"NEXARA_head_pivot",point:[0,-1.15,-.05],order:"YXZ",boundsDeg:{yaw:4,pitch:3,roll:2},note:"Architecture 11.2 / AVATAR-012: rest identity; the runtime sets rotation R and translation P - R*P. Prototype bounds and pivot point; the full-neck base moves slightly at the limits (to be measured)."},Dd={path:"nexara-face-table-v1.json",sha256:"ebd0e2b3b96a947f2592f18723fe3578ee8d2af2b9ef0ae1518ecf37113761ea",bytes:4202,schema:"nexara.face-table/1",note:"REQ 5.13/5.14, AVATAR-008/009/012: the one versioned table of L0 speech shapes, speaking-tilt cadence, expression presets, emotion mapping, sigh keys and reset bound, shared by the runtime and the preview. Prototype values for G4."},Ud={tool:"product/tools/authoring/speech/build_speech_asset.py (mirror of D:/tools/nexara-phase5, registered)",command:"uv run --no-project --with numpy python tools/authoring/speech/build_speech_asset.py --source-glb assets/avatar/nexara-head02-v1.glb --lineage assets/avatar/build-report.json --work <empty-dir> --out assets/avatar",runFrom:"product/",source:{path:"nexara-head02-v1.glb",sha256:"8119f1dddbfb30341a812c310cacc7ddc7218bb10f3cc3ec4ada396cc1e932c6",bytes:2398780},build:{path:"nexara-head02-v2-build.json",sha256:"8157bc6613ce6b6bae99dc6ce00c32f2020d0b93ac87f74eabe9b965ee3cc016",bytes:7455},lipSeamReport:{path:"nexara-head02-v2-lip-seam-report.json",sha256:"7676e1d969440da62f08c77ce7cd787dc819d4268db9055bfd71d3969962e091",bytes:25968},speechReport:{path:"nexara-head02-v2-speech-report.json",sha256:"2765c3d139b11b8e1aeac475a5b0239ca00498b2e45e97c5a20cf4a4ea643324",bytes:36266},exportReport:{path:"nexara-head02-v2-export-report.json",sha256:"3558090d61c687c0db60b5c7462518d802971e1f6879d9bc570e9adb07b0229d",bytes:5261},exportMap:{path:"nexara-head02-v2-export-map.json",sha256:"da77a17c99fd7c3e20017faba62ca0c002098dd8085a09b6138af81dcf7255ef",bytes:284462},cavityBindings:{path:"nexara-head02-v2-bindings.json",sha256:"dbd721778e25fddeefe1a282f3388366beb2f641bc2d1cdafb05a15d47016fce",bytes:182311},deterministic:!0,note:"The frozen neutral GLB (target-free, same layout) and the editable .blend are rebuilt by the same tools and kept out of git; the export report records the neutral's SHA-256 and the bindings bind it.",netBindingCommand:"uv run --no-project --with numpy python tools/authoring/speech/net_binding.py --glb assets/avatar/nexara-head02-v2.glb --strands assets/avatar/crown-strands.bin --out assets/avatar/crown-strands-binding.bin --report assets/avatar/crown-strands-binding-report.json --table assets/avatar/nexara-face-table-v1.json"},Od={glb:{path:"nexara-head02-v1.glb",sha256:"8119f1dddbfb30341a812c310cacc7ddc7218bb10f3cc3ec4ada396cc1e932c6",bytes:2398780},note:"Phase 4 runtime asset head02-1.1.0 (contract 0.2.0); the speech build's source"},Fd={schema:sd,assetVersion:od,minimumRuntimeVersion:ld,reportPathRewrite:cd,glb:ud,fallback:hd,textures:dd,shaders:pd,components:fd,frame:md,boundingBox:gd,camera:vd,orbit:_d,core:xd,neckFade:yd,morphTargets:Md,morphRoles:Sd,animations:bd,decorations:Td,quality:Ed,source:wd,build:Ad,validator:Rd,rights:Cd,uvs:Pd,budgets:Ld,morphTargetsNote:Nd,pivot:Id,faceTable:Dd,speechBuild:Ud,phase4Asset:Od},Bd=""+new URL("/_astro/nexara-head02-v2-DJyG5Sw4.DJyG5Sw4.glb",import.meta.url).href,kd=""+new URL("/_astro/crown-strands-BOUkYnN7.BOUkYnN7.bin",import.meta.url).href,zd=""+new URL("/_astro/crown-strands-binding-DsnIHzQ4.DsnIHzQ4.bin",import.meta.url).href,Vd=`{\r
  "schema": "nexara.face-table/1",\r
  "version": "1.1.0",\r
  "status": "Prototype values for G4 review (CR-SPEECH-002/003, AVATAR-008/009/012); not approved product defaults. 1.1.0: presets about 1.8x and a steady emotion glow cue (Hieu, ASK-011: \\"I want both b and c\\").",\r
  "targets": ["jawOpen", "mouthWide", "mouthFunnel", "mouthPucker", "mouthSmileLeft", "mouthSmileRight", "eyeBlinkLeft", "eyeBlinkRight", "browInnerUp", "browDownLeft", "browDownRight", "mouthFrownLeft", "mouthFrownRight", "mouthPress"],\r
  "headBoundsDeg": { "yaw": 4, "pitch": 3, "roll": 2 },\r
  "resetSeconds": 0.6,\r
  "speech": {\r
    "driver": "L0 text-rate v1",\r
    "rate": 14,\r
    "intensity": 0.85,\r
    "lead": 0.15,\r
    "attack": 0.05,\r
    "release": 0.08,\r
    "settle": 0.6,\r
    "sampleHz": 240,\r
    "pauses": { ",": 0.22, ";": 0.22, ":": 0.22, ".": 0.45, "!": 0.45, "?": 0.45 },\r
    "shapes": {\r
      "a": { "jawOpen": 0.55 },\r
      "e": { "jawOpen": 0.3, "mouthWide": 0.55 },\r
      "i": { "jawOpen": 0.18, "mouthWide": 0.8 },\r
      "y": { "jawOpen": 0.18, "mouthWide": 0.7 },\r
      "o": { "jawOpen": 0.35, "mouthFunnel": 0.75 },\r
      "u": { "jawOpen": 0.12, "mouthPucker": 0.7 },\r
      "w": { "jawOpen": 0.08, "mouthPucker": 0.6 },\r
      "m": {}, "b": {}, "p": {},\r
      "f": { "jawOpen": 0.06, "mouthWide": 0.15 },\r
      "v": { "jawOpen": 0.06, "mouthWide": 0.15 },\r
      " ": { "jawOpen": 0.04 }\r
    },\r
    "consonant": { "jawOpen": 0.15 },\r
    "digit": { "jawOpen": 0.2 },\r
    "other": { "jawOpen": 0.04 }\r
  },\r
  "tilt": {\r
    "limitsDeg": { "yaw": 3, "pitch": 2, "roll": 2 },\r
    "firstAt": 0.3,\r
    "interval": 1.2,\r
    "intervalSpread": 1.2,\r
    "endGuard": 0.4,\r
    "ease": 0.35\r
  },\r
  "presets": {\r
    "smileSlight": { "label": "slight smile", "weights": { "mouthSmileLeft": 0.72, "mouthSmileRight": 0.648 }, "head": { "yaw": 0, "pitch": -0.5, "roll": 1.2 } },\r
    "pensive": { "label": "pensive", "weights": { "browInnerUp": 0.9, "mouthPress": 0.81, "mouthFrownLeft": 0.27, "mouthFrownRight": 0.216 }, "head": { "yaw": 2.5, "pitch": -2.5, "roll": 1.5 } },\r
    "frownSlight": { "label": "slight frown", "weights": { "browDownLeft": 0.9, "browDownRight": 0.9, "mouthFrownLeft": 0.54, "mouthFrownRight": 0.54, "mouthPress": 0.36 }, "head": { "yaw": 0, "pitch": -1.0, "roll": -0.8 } }\r
  },\r
  "emotions": { "warm": "smileSlight", "pensive": "pensive", "concerned": "frownSlight" },\r
  "emotionGlow": { "warm": 1.3, "pensive": 0.8, "concerned": 0.7 },\r
  "transition": { "fade": 0.6 },\r
  "sigh": {\r
    "label": "sigh",\r
    "keys": [\r
      { "t": 0.0, "weights": {}, "head": { "yaw": 0, "pitch": 0, "roll": 0 } },\r
      { "t": 0.7, "weights": { "browInnerUp": 0.25, "jawOpen": 0.04 }, "head": { "yaw": 0, "pitch": 1.5, "roll": 0 } },\r
      { "t": 1.6, "weights": { "browInnerUp": 0.4, "jawOpen": 0.16, "mouthFunnel": 0.18 }, "head": { "yaw": 0.5, "pitch": -2.5, "roll": 1.0 } },\r
      { "t": 2.6, "weights": { "browInnerUp": 0.15, "mouthPress": 0.15 }, "head": { "yaw": 0.3, "pitch": -1.0, "roll": 0.5 } },\r
      { "t": 3.6, "weights": {}, "head": { "yaw": 0, "pitch": 0, "roll": 0 } }\r
    ]\r
  },\r
  "mixing": "weights: per target clamp(speech + expression + sigh, 0, 1); head: per axis clamp(speaking tilt + expression pose + sigh pose, -headBoundsDeg, +headBoundsDeg). Each channel stays in the convex hull of its table points and zero: the L0 filter moves all mouth channels by one factor per sample (attack while the jaw opens further, release otherwise); fades, crossfades, cuts and intensities are convex combinations. Terminal events (turn end, cancelSigh, INTERRUPTED, ERROR) settle the applied speech, tilt and sigh within resetSeconds. Reduced motion: no automatic motion (no mouth motion, tilt or sigh; head contributions zero), static expression weights. User orbit is separate. Glow cue (1.1.0): the look's glow is multiplied by 1 + (emotionGlow - 1) x intensity for the held emotion, eased with the expression, static under reduced motion, 1 at neutral and in manual control; it can be switched off. 1.1.0 presets let pensive + sigh exceed 1 on browInnerUp, so the clamp is active there; the C1-B certificate covers it with clamp variants."\r
}\r
`;/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Sl="185",Hd=0,ec=1,Gd=2,ja=1,Wd=2,Fn=3,Lr=0,jt=1,ar=2,Pr=0,en=1,vo=2,tc=3,rc=4,Xd=5,_i=100,jd=101,qd=102,Yd=103,Kd=104,$d=200,Zd=201,Jd=202,Qd=203,_o=204,xo=205,ep=206,tp=207,rp=208,ip=209,np=210,ap=211,sp=212,op=213,lp=214,yo=0,Mo=1,So=2,sn=3,bo=4,To=5,Eo=6,wo=7,ah=0,cp=1,up=2,xr=0,bl=1,Tl=2,El=3,wl=4,Al=5,Rl=6,Cl=7,ic="attached",hp="detached",sh=300,Mi=301,on=302,bs=303,Ts=304,vs=306,ln=1e3,Rr=1001,ts=1002,Rt=1003,oh=1004,Bn=1005,Ct=1006,qa=1007,Wr=1008,Zt=1009,lh=1010,ch=1011,Gn=1012,Pl=1013,Nr=1014,or=1015,Jt=1016,Ll=1017,Nl=1018,Wn=1020,uh=35902,hh=35899,dh=1021,ph=1022,lr=1023,qr=1026,yi=1027,Il=1028,Dl=1029,Si=1030,Ul=1031,Ol=1033,Ya=33776,Ka=33777,$a=33778,Za=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Lo=36196,No=37492,Io=37496,Do=37488,Uo=37489,rs=37490,Oo=37491,Fo=37808,Bo=37809,ko=37810,zo=37811,Vo=37812,Ho=37813,Go=37814,Wo=37815,Xo=37816,jo=37817,qo=37818,Yo=37819,Ko=37820,$o=37821,Zo=36492,Jo=36494,Qo=36495,el=36283,tl=36284,is=36285,rl=36286,Xn=2300,jn=2301,Es=2302,nc=2303,ac=2400,sc=2401,oc=2402,dp=2500,pp=0,fh=1,il=2,fp=3200,nl=0,mp=1,si="",At="srgb",er="srgb-linear",ns="linear",st="srgb",Pi=7680,lc=519,gp=512,vp=513,_p=514,Fl=515,xp=516,yp=517,Bl=518,Mp=519,al=35044,cc="300 es",Cr=2e3,qn=2001;function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){const i=Yn("canvas");return i.style.display="block",i}const uc={};function as(...i){const e="THREE."+i.shift();console.log(e,...i)}function mh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=mh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=mh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tn(...i){const e=i.join(" ");e in uc||(uc[e]=!0,Ce(...i))}function Ep(i,e,t){return new Promise(function(r,n){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const wp={[yo]:Mo,[So]:Eo,[bo]:wo,[sn]:To,[Mo]:yo,[Eo]:So,[wo]:bo,[To]:sn};class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const zn=Math.PI/180,cn=180/Math.PI;function yr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function kl(i,e){return(i%e+e)%e}function Ap(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Rp(i,e,t){return i!==e?(t-i)/(e-i):0}function Vn(i,e,t){return(1-t)*i+t*e}function Cp(i,e,t,r){return Vn(i,e,1-Math.exp(-t*r))}function Pp(i,e=1){return e-Math.abs(kl(i,e*2)-e)}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dp(i,e){return i+Math.random()*(e-i)}function Up(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(hc=i);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fp(i){return i*zn}function Bp(i){return i*cn}function kp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,r,n){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+r)/2),u=s((e+r)/2),h=a((e-r)/2),d=s((e-r)/2),m=a((r-e)/2),f=s((r-e)/2);switch(n){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*f,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*f,o*l);break;case"ZYZ":i.set(c*f,c*m,o*u,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function _r(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Gp={DEG2RAD:zn,RAD2DEG:cn,generateUUID:yr,clamp:Ze,euclideanModulo:kl,mapLinear:Ap,inverseLerp:Rp,lerp:Vn,damp:Cp,pingpong:Pp,smoothstep:Lp,smootherstep:Np,randInt:Ip,randFloat:Dp,randFloatSpread:Up,seededRandom:Op,degToRad:Fp,radToDeg:Bp,isPowerOfTwo:kp,ceilPowerOfTwo:zp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Hp,normalize:lt,denormalize:_r};class Pe{static{Pe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let c=r[n+0],l=r[n+1],u=r[n+2],h=r[n+3],d=a[s+0],m=a[s+1],f=a[s+2],v=a[s+3];if(h!==v||c!==d||l!==m||u!==f){let p=c*d+l*m+u*f+h*v;p<0&&(d=-d,m=-m,f=-f,v=-v,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),A=Math.sin(b);g=Math.sin(g*b)/A,o=Math.sin(o*b)/A,c=c*g+d*o,l=l*g+m*o,u=u*g+f*o,h=h*g+v*o}else{c=c*g+d*o,l=l*g+m*o,u=u*g+f*o,h=h*g+v*o;const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],h=a[s],d=a[s+1],m=a[s+2],f=a[s+3];return e[t]=o*f+u*h+c*m-l*d,e[t+1]=c*f+u*d+l*h-o*m,e[t+2]=l*f+u*m+o*d-c*h,e[t+3]=u*f-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),h=o(a/2),d=c(r/2),m=c(n/2),f=c(a/2);switch(s){case"XYZ":this._x=d*u*h+l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h-d*m*f;break;case"YXZ":this._x=d*u*h+l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h+d*m*f;break;case"ZXY":this._x=d*u*h-l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h-d*m*f;break;case"ZYX":this._x=d*u*h-l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h+d*m*f;break;case"YZX":this._x=d*u*h+l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h-d*m*f;break;case"XZY":this._x=d*u*h-l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h+d*m*f;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=r+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(s-n)*m}else if(r>o&&r>h){const m=2*Math.sqrt(1+r-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-r-h);this._w=(a-l)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-r-o);this._w=(s-n)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*o+n*l-a*c,this._y=n*u+s*c+a*o-r*l,this._z=a*u+s*l+r*c-n*o,this._w=s*u-r*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){let r=e._x,n=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(r=-r,n=-n,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+r*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+r*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{D.prototype.isVector3=!0}constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*r),u=2*(o*t-a*n),h=2*(a*r-s*t);return this.x=t+c*l+s*h-o*u,this.y=r+c*u+o*l-a*h,this.z=n+c*h+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-r*c,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new D,dc=new Ir;class We{static{We.prototype.isMatrix3=!0}constructor(e,t,r,n,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l)}set(e,t,r,n,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],u=r[4],h=r[7],d=r[2],m=r[5],f=r[8],v=n[0],p=n[3],g=n[6],b=n[1],A=n[4],M=n[7],T=n[2],E=n[5],R=n[8];return a[0]=s*v+o*b+c*T,a[3]=s*p+o*A+c*E,a[6]=s*g+o*M+c*R,a[1]=l*v+u*b+h*T,a[4]=l*p+u*A+h*E,a[7]=l*g+u*M+h*R,a[2]=d*v+m*b+f*T,a[5]=d*p+m*A+f*E,a[8]=d*g+m*M+f*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-r*a*u+r*o*c+n*a*l-n*s*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*s-o*l,d=o*c-u*a,m=l*a-s*c,f=t*h+r*d+n*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return e[0]=h*v,e[1]=(n*l-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=d*v,e[4]=(u*t-n*c)*v,e[5]=(n*a-o*t)*v,e[6]=m*v,e[7]=(r*c-l*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(r*c,r*l,-r*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return tn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(As.makeScale(e,t)),this}rotate(e){return tn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(As.makeRotation(-e)),this}translate(e,t){return tn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new We,pc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===st&&(n.r=jr(n.r),n.g=jr(n.g),n.b=jr(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===st&&(n.r=rn(n.r),n.g=rn(n.g),n.b=rn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===si?ns:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return tn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return tn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:r,transfer:ns,toXYZ:pc,fromXYZ:fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:r,transfer:st,toXYZ:pc,fromXYZ:fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const Ke=Wp();function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Li===void 0&&(Li=Yn("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=Li}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=jr(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(jr(t[r]/255)*255):t[r]=jr(t[r]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jp=0;class zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Rs(n[s].image)):a.push(Rs(n[s]))}else a=Rs(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let qp=0;const Cs=new D;class yt extends bi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,r=Rr,n=Rr,a=Ct,s=Wr,o=lr,c=Zt,l=yt.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=yr(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=sh;yt.DEFAULT_ANISOTROPY=1;class ht{static{ht.prototype.isVector4=!0}constructor(e=0,t=0,r=0,n=1){this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],c=s[4],l=s[8],u=s[1],h=s[5],d=s[9],m=s[2],f=s[6],v=s[10];if(Math.abs(c-u)<.01&&Math.abs(l-m)<.01&&Math.abs(d-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+m)<.1&&Math.abs(d+f)<.1&&Math.abs(o+h+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,b=(h+1)/2,A=(v+1)/2,M=(c+u)/4,T=(l+m)/4,E=(d+f)/4;return g>b&&g>A?g<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(g),n=M/r,a=T/r):b>A?b<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),r=M/n,a=E/n):A<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),r=T/a,n=E/a),this.set(r,n,a,t),this}let p=Math.sqrt((f-d)*(f-d)+(l-m)*(l-m)+(u-c)*(u-c));return Math.abs(p)<.001&&(p=1),this.x=(f-d)/p,this.y=(l-m)/p,this.z=(u-c)/p,this.w=Math.acos((o+h+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends bi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:r.depth},a=new yt(n),s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new zl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends Yp{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gh extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xe{static{Xe.prototype.isMatrix4=!0}constructor(e,t,r,n,a,s,o,c,l,u,h,d,m,f,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l,u,h,d,m,f,v,p)}set(e,t,r,n,a,s,o,c,l,u,h,d,m,f,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=n,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=m,g[7]=f,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,n=1/Ni.setFromMatrixColumn(e,0).length(),a=1/Ni.setFromMatrixColumn(e,1).length(),s=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,m=s*h,f=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+f*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=f+m*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,f=l*u,v=l*h;t[0]=d+v*o,t[4]=f*o-m,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=m*o-f,t[6]=v+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,f=l*u,v=l*h;t[0]=d-v*o,t[4]=-s*h,t[8]=f+m*o,t[1]=m+f*o,t[5]=s*u,t[9]=v-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,m=s*h,f=o*u,v=o*h;t[0]=c*u,t[4]=f*l-m,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=m*l-f,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,m=s*l,f=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=f*h+m,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+f,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*c,m=s*l,f=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=s*u,t[9]=m*h-f,t[2]=f*h-m,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Zp)}lookAt(e,t,r){const n=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),$r.crossVectors(r,Kt),$r.lengthSq()===0&&(Math.abs(r.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),$r.crossVectors(r,Kt)),$r.normalize(),ca.crossVectors(Kt,$r),n[0]=$r.x,n[4]=ca.x,n[8]=Kt.x,n[1]=$r.y,n[5]=ca.y,n[9]=Kt.y,n[2]=$r.z,n[6]=ca.z,n[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],u=r[1],h=r[5],d=r[9],m=r[13],f=r[2],v=r[6],p=r[10],g=r[14],b=r[3],A=r[7],M=r[11],T=r[15],E=n[0],R=n[4],x=n[8],S=n[12],P=n[1],L=n[5],B=n[9],J=n[13],te=n[2],G=n[6],Y=n[10],V=n[14],re=n[3],se=n[7],N=n[11],j=n[15];return a[0]=s*E+o*P+c*te+l*re,a[4]=s*R+o*L+c*G+l*se,a[8]=s*x+o*B+c*Y+l*N,a[12]=s*S+o*J+c*V+l*j,a[1]=u*E+h*P+d*te+m*re,a[5]=u*R+h*L+d*G+m*se,a[9]=u*x+h*B+d*Y+m*N,a[13]=u*S+h*J+d*V+m*j,a[2]=f*E+v*P+p*te+g*re,a[6]=f*R+v*L+p*G+g*se,a[10]=f*x+v*B+p*Y+g*N,a[14]=f*S+v*J+p*V+g*j,a[3]=b*E+A*P+M*te+T*re,a[7]=b*R+A*L+M*G+T*se,a[11]=b*x+A*B+M*Y+T*N,a[15]=b*S+A*J+M*V+T*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],f=e[3],v=e[7],p=e[11],g=e[15],b=c*m-l*d,A=o*m-l*h,M=o*d-c*h,T=s*m-l*u,E=s*d-c*u,R=s*h-o*u;return t*(v*b-p*A+g*M)-r*(f*b-p*T+g*E)+n*(f*A-v*T+g*R)-a*(f*M-v*E+p*R)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-r*(a*u-o*c)+n*(a*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],f=e[12],v=e[13],p=e[14],g=e[15],b=t*o-r*s,A=t*c-n*s,M=t*l-a*s,T=r*c-n*o,E=r*l-a*o,R=n*l-a*c,x=u*v-h*f,S=u*p-d*f,P=u*g-m*f,L=h*p-d*v,B=h*g-m*v,J=d*g-m*p,te=b*J-A*B+M*L+T*P-E*S+R*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/te;return e[0]=(o*J-c*B+l*L)*G,e[1]=(n*B-r*J-a*L)*G,e[2]=(v*R-p*E+g*T)*G,e[3]=(d*E-h*R-m*T)*G,e[4]=(c*P-s*J-l*S)*G,e[5]=(t*J-n*P+a*S)*G,e[6]=(p*M-f*R-g*A)*G,e[7]=(u*R-d*M+m*A)*G,e[8]=(s*B-o*P+l*x)*G,e[9]=(r*P-t*B-a*x)*G,e[10]=(f*E-v*M+g*b)*G,e[11]=(h*M-u*E-m*b)*G,e[12]=(o*S-s*L-c*x)*G,e[13]=(t*L-r*S+n*x)*G,e[14]=(v*A-f*T-p*b)*G,e[15]=(u*T-h*A+d*b)*G,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*s,0,l*c-n*o,u*c+n*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,h=o+o,d=a*l,m=a*u,f=a*h,v=s*u,p=s*h,g=o*h,b=c*l,A=c*u,M=c*h,T=r.x,E=r.y,R=r.z;return n[0]=(1-(v+g))*T,n[1]=(m+M)*T,n[2]=(f-A)*T,n[3]=0,n[4]=(m-M)*E,n[5]=(1-(d+g))*E,n[6]=(p+b)*E,n[7]=0,n[8]=(f+A)*R,n[9]=(p-b)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let s=Ni.set(n[0],n[1],n[2]).length();const o=Ni.set(n[4],n[5],n[6]).length(),c=Ni.set(n[8],n[9],n[10]).length();a<0&&(s=-s),mr.copy(this);const l=1/s,u=1/o,h=1/c;return mr.elements[0]*=l,mr.elements[1]*=l,mr.elements[2]*=l,mr.elements[4]*=u,mr.elements[5]*=u,mr.elements[6]*=u,mr.elements[8]*=h,mr.elements[9]*=h,mr.elements[10]*=h,t.setFromRotationMatrix(mr),r.x=s,r.y=o,r.z=c,this}makePerspective(e,t,r,n,a,s,o=Cr,c=!1){const l=this.elements,u=2*a/(t-e),h=2*a/(r-n),d=(t+e)/(t-e),m=(r+n)/(r-n);let f,v;if(c)f=a/(s-a),v=s*a/(s-a);else if(o===Cr)f=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===qn)f=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=Cr,c=!1){const l=this.elements,u=2/(t-e),h=2/(r-n),d=-(t+e)/(t-e),m=-(r+n)/(r-n);let f,v;if(c)f=1/(s-a),v=s/(s-a);else if(o===Cr)f=-2/(s-a),v=-(s+a)/(s-a);else if(o===qn)f=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ni=new D,mr=new Xe,$p=new D(0,0,0),Zp=new D(1,1,1),$r=new D,ca=new D,Kt=new D,mc=new Xe,gc=new Ir;class Yr{constructor(e=0,t=0,r=0,n=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],u=n[9],h=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jp=0;const vc=new D,Ii=new Ir,Br=new Xe,ua=new D,bn=new D,Qp=new D,ef=new Ir,_c=new D(1,0,0),xc=new D(0,1,0),yc=new D(0,0,1),Mc={type:"added"},tf={type:"removed"},Di={type:"childadded",child:null},Ps={type:"childremoved",child:null};class gt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new D,t=new Yr,r=new Ir,n=new D(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ua.copy(e):ua.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(bn,ua,this.up):Br.lookAt(ua,bn,this.up),this.quaternion.setFromRotationMatrix(Br),n&&(Br.extractRotation(n.matrixWorld),Ii.setFromRotationMatrix(Br),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),Di.child=e,this.dispatchEvent(Di),Di.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,n=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*n,a[13]+=r-a[1]*t-a[5]*r-a[9]*n,a[14]+=n-a[2]*t-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),m=s(e.animations),f=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),f.length>0&&(r.nodes=f)}return r.object=n,r;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,r),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,f=.005;l.inputState.pinching&&d>m+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new cr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class be{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ke.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=Ke.workingColorSpace){if(e=kl(e,1),t=Ze(t,0,1),r=Ze(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=Ns(s,a,e+1/3),this.g=Ns(s,a,e),this.b=Ns(s,a,e-1/3)}return Ke.colorSpaceToWorking(this,n),this}setStyle(e,t=At){function r(a){a!==void 0&&parseFloat(a)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const r=vh[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);const r=Ft.r,n=Ft.g,a=Ft.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case r:c=(n-a)/h+(n<a?6:0);break;case n:c=(a-r)/h+2;break;case a:c=(r-n)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=At){Ke.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,r=Ft.g,n=Ft.b;return e!==At?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(ha);const r=Vn(Zr.h,ha.h,t),n=Vn(Zr.s,ha.s,t),a=Vn(Zr.l,ha.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new be;be.NAMES=vh;class nf extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gr=new D,kr=new D,Is=new D,zr=new D,Ui=new D,Oi=new D,Sc=new D,Ds=new D,Us=new D,Os=new D,Fs=new ht,Bs=new ht,ks=new ht;class sr{constructor(e=new D,t=new D,r=new D){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),gr.subVectors(e,t),n.cross(gr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){gr.subVectors(n,t),kr.subVectors(r,t),Is.subVectors(e,t);const s=gr.dot(gr),o=gr.dot(kr),c=gr.dot(Is),l=kr.dot(kr),u=kr.dot(Is),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,f=(s*u-o*c)*d;return a.set(1-m-f,f,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,r,n,a,s,o,c){return this.getBarycoord(e,t,r,n,zr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,zr.x),c.addScaledVector(s,zr.y),c.addScaledVector(o,zr.z),c)}static getInterpolatedAttribute(e,t,r,n,a,s){return Fs.setScalar(0),Bs.setScalar(0),ks.setScalar(0),Fs.fromBufferAttribute(e,t),Bs.fromBufferAttribute(e,r),ks.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Fs,a.x),s.addScaledVector(Bs,a.y),s.addScaledVector(ks,a.z),s}static isFrontFacing(e,t,r,n){return gr.subVectors(r,t),kr.subVectors(e,t),gr.cross(kr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gr.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),gr.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return sr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;Ui.subVectors(n,r),Oi.subVectors(a,r),Ds.subVectors(e,r);const c=Ui.dot(Ds),l=Oi.dot(Ds);if(c<=0&&l<=0)return t.copy(r);Us.subVectors(e,n);const u=Ui.dot(Us),h=Oi.dot(Us);if(u>=0&&h<=u)return t.copy(n);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(Ui,s);Os.subVectors(e,a);const m=Ui.dot(Os),f=Oi.dot(Os);if(f>=0&&m<=f)return t.copy(a);const v=m*l-c*f;if(v<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(r).addScaledVector(Oi,o);const p=u*f-m*h;if(p<=0&&h-u>=0&&m-f>=0)return Sc.subVectors(a,n),o=(h-u)/(h-u+(m-f)),t.copy(n).addScaledVector(Sc,o);const g=1/(p+v+d);return s=v*g,o=d*g,t.copy(r).addScaledVector(Ui,s).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,vr):vr.fromBufferAttribute(a,s),vr.applyMatrix4(e.matrixWorld),this.expandByPoint(vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),da.copy(r.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tn),pa.subVectors(this.max,Tn),Fi.subVectors(e.a,Tn),Bi.subVectors(e.b,Tn),ki.subVectors(e.c,Tn),Jr.subVectors(Bi,Fi),Qr.subVectors(ki,Bi),pi.subVectors(Fi,ki);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-pi.z,pi.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,pi.z,0,-pi.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-pi.y,pi.x,0];return!zs(t,Fi,Bi,ki,pa)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,Fi,Bi,ki,pa))?!1:(fa.crossVectors(Jr,Qr),t=[fa.x,fa.y,fa.z],zs(t,Fi,Bi,ki,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vr=[new D,new D,new D,new D,new D,new D,new D,new D],vr=new D,da=new Kr,Fi=new D,Bi=new D,ki=new D,Jr=new D,Qr=new D,pi=new D,Tn=new D,pa=new D,fa=new D,fi=new D;function zs(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){fi.fromArray(i,a);const o=n.x*Math.abs(fi.x)+n.y*Math.abs(fi.y)+n.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),u=r.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const bt=new D,ma=new Pe;let af=0;class ut extends bi{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=al,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_r(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array),n=lt(n,this.array),a=lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _h extends ut{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xh extends ut{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Qt extends ut{constructor(e,t,r){super(new Float32Array(e),t,r)}}const sf=new Kr,En=new D,Vs=new D;class Dr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):sf.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;En.subVectors(e,this.center);const t=En.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(En,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(En.copy(e.center).add(Vs)),this.expandByPoint(En.copy(e.center).sub(Vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let of=0;const ir=new Xe,Hs=new gt,zi=new D,$t=new Kr,wn=new Kr,It=new D;class Et extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?xh:_h)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new We().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ir.makeRotationFromQuaternion(e),this.applyMatrix4(ir),this}rotateX(e){return ir.makeRotationX(e),this.applyMatrix4(ir),this}rotateY(e){return ir.makeRotationY(e),this.applyMatrix4(ir),this}rotateZ(e){return ir.makeRotationZ(e),this.applyMatrix4(ir),this}translate(e,t,r){return ir.makeTranslation(e,t,r),this.applyMatrix4(ir),this}scale(e,t,r){return ir.makeScale(e,t,r),this.applyMatrix4(ir),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Qt(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const r=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors($t.min,wn.min),$t.expandByPoint(It),It.addVectors($t.max,wn.max),$t.expandByPoint(It)):($t.expandByPoint(wn.min),$t.expandByPoint(wn.max))}$t.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)It.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(It));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)It.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),It.add(zi)),n=Math.max(n,r.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ut(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let x=0;x<r.count;x++)o[x]=new D,c[x]=new D;const l=new D,u=new D,h=new D,d=new Pe,m=new Pe,f=new Pe,v=new D,p=new D;function g(x,S,P){l.fromBufferAttribute(r,x),u.fromBufferAttribute(r,S),h.fromBufferAttribute(r,P),d.fromBufferAttribute(a,x),m.fromBufferAttribute(a,S),f.fromBufferAttribute(a,P),u.sub(l),h.sub(l),m.sub(d),f.sub(d);const L=1/(m.x*f.y-f.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(L),o[x].add(v),o[S].add(v),o[P].add(v),c[x].add(p),c[S].add(p),c[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,S=b.length;x<S;++x){const P=b[x],L=P.start,B=P.count;for(let J=L,te=L+B;J<te;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const A=new D,M=new D,T=new D,E=new D;function R(x){T.fromBufferAttribute(n,x),E.copy(T);const S=o[x];A.copy(S),A.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(E,S);const P=M.dot(c[x])<0?-1:1;s.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,S=b.length;x<S;++x){const P=b[x],L=P.start,B=P.count;for(let J=L,te=L+B;J<te;J+=3)R(e.getX(J+0)),R(e.getX(J+1)),R(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const n=new D,a=new D,s=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const f=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,f),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),o.fromBufferAttribute(r,f),c.fromBufferAttribute(r,v),l.fromBufferAttribute(r,p),o.add(u),c.add(u),l.add(u),r.setXYZ(f,o.x,o.y,o.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,f=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let g=0;g<u;g++)d[f++]=l[m++]}return new ut(d,u,h)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,r);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(n[c]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=yr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new D;class Kn{constructor(e,t,r,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=_r(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_r(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_r(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_r(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_r(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),r=lt(r,this.array),n=lt(n,this.array),a=lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){as("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){as("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lf=0;class hr extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=en,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=sn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector2&&r&&r.isVector2||n&&n.isEuler&&r&&r.isEuler||n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==en&&(r.blending=this.blending),this.side!==Lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_o&&(r.blendSrc=this.blendSrc),this.blendDst!==xo&&(r.blendDst=this.blendDst),this.blendEquation!==_i&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==sn&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mh extends hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vi;const An=new D,Hi=new D,Gi=new D,Wi=new Pe,Rn=new Pe,Sh=new Xe,ga=new D,Cn=new D,va=new D,bc=new Pe,Gs=new Pe,Tc=new Pe;class cf extends gt{constructor(e=new Mh){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new yh(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Kn(r,3,0,!1)),Vi.setAttribute("uv",new Kn(r,2,3,!1))}this.geometry=Vi,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const r=this.material.rotation;let n,a;r!==0&&(a=Math.cos(r),n=Math.sin(r));const s=this.center;_a(ga.set(-.5,-.5,0),Gi,s,Hi,n,a),_a(Cn.set(.5,-.5,0),Gi,s,Hi,n,a),_a(va.set(.5,.5,0),Gi,s,Hi,n,a),bc.set(0,0),Gs.set(1,0),Tc.set(1,1);let o=e.ray.intersectTriangle(ga,Cn,va,!1,An);if(o===null&&(_a(Cn.set(-.5,.5,0),Gi,s,Hi,n,a),Gs.set(0,1),o=e.ray.intersectTriangle(ga,va,Cn,!1,An),o===null))return;const c=e.ray.origin.distanceTo(An);c<e.near||c>e.far||t.push({distance:c,point:An.clone(),uv:sr.getInterpolation(An,ga,Cn,va,bc,Gs,Tc,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _a(i,e,t,r,n,a){Wi.subVectors(i,t).addScalar(.5).multiply(r),n!==void 0?(Rn.x=a*Wi.x-n*Wi.y,Rn.y=n*Wi.x+a*Wi.y):Rn.copy(Wi),i.copy(e),i.x+=Rn.x,i.y+=Rn.y,i.applyMatrix4(Sh)}const Hr=new D,Ws=new D,xa=new D,ei=new D,Xs=new D,ya=new D,js=new D;class Qn{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ws.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Ws);const a=e.distanceTo(t)*.5,s=-this.direction.dot(xa),o=ei.dot(this.direction),c=-ei.dot(xa),l=ei.lengthSq(),u=Math.abs(1-s*s);let h,d,m,f;if(u>0)if(h=s*c-o,d=s*o-c,f=a*u,h>=0)if(d>=-f)if(d<=f){const v=1/u;h*=v,d*=v,m=h*(h+s*d+2*o)+d*(s*h+d+2*c)+l}else d=a,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-f?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+d*(d+2*c)+l):d<=f?(h=0,d=Math.min(Math.max(-a,-c),a),m=d*(d+2*c)+l):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+d*(d+2*c)+l);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ws).addScaledVector(xa,d),m}intersectSphere(e,t){Hr.subVectors(e.center,this.origin);const r=Hr.dot(this.direction),n=Hr.dot(Hr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(r=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(r=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,r,n,a){Xs.subVectors(t,e),ya.subVectors(r,e),js.crossVectors(Xs,ya);let s=this.direction.dot(js),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ei.subVectors(this.origin,e);const c=o*this.direction.dot(ya.crossVectors(ei,ya));if(c<0)return null;const l=o*this.direction.dot(Xs.cross(ei));if(l<0||c+l>s)return null;const u=-o*ei.dot(js);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class li extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ec=new Xe,mi=new Qn,Ma=new Dr,wc=new D,Sa=new D,ba=new D,Ta=new D,qs=new D,Ea=new D,Ac=new D,wa=new D;class Bt extends gt{constructor(e=new Et,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Ea.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],h=a[c];u!==0&&(qs.fromBufferAttribute(h,e),s?Ea.addScaledVector(qs,u):Ea.addScaledVector(qs.sub(t),u))}t.add(Ea)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ma.copy(r.boundingSphere),Ma.applyMatrix4(a),mi.copy(e.ray).recast(e.near),!(Ma.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Ma,wc)===null||mi.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(Ec.copy(a).invert(),mi.copy(e.ray).applyMatrix4(Ec),!(r.boundingBox!==null&&mi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,v=d.length;f<v;f++){const p=d[f],g=s[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,T=A;M<T;M+=3){const E=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);n=Aa(this,g,e,r,l,u,h,E,R,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const f=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=f,g=v;p<g;p+=3){const b=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);n=Aa(this,s,e,r,l,u,h,b,A,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let f=0,v=d.length;f<v;f++){const p=d[f],g=s[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,T=A;M<T;M+=3){const E=M,R=M+1,x=M+2;n=Aa(this,g,e,r,l,u,h,E,R,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const f=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=f,g=v;p<g;p+=3){const b=p,A=p+1,M=p+2;n=Aa(this,s,e,r,l,u,h,b,A,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function uf(i,e,t,r,n,a,s,o){let c;if(e.side===jt?c=r.intersectTriangle(s,a,n,!0,o):c=r.intersectTriangle(n,a,s,e.side===Lr,o),c===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:i}}function Aa(i,e,t,r,n,a,s,o,c,l){i.getVertexPosition(o,Sa),i.getVertexPosition(c,ba),i.getVertexPosition(l,Ta);const u=uf(i,e,t,r,Sa,ba,Ta,Ac);if(u){const h=new D;sr.getBarycoord(Ac,Sa,ba,Ta,h),n&&(u.uv=sr.getInterpolatedAttribute(n,o,c,l,h,new Pe)),a&&(u.uv1=sr.getInterpolatedAttribute(a,o,c,l,h,new Pe)),s&&(u.normal=sr.getInterpolatedAttribute(s,o,c,l,h,new D),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};sr.getNormal(Sa,ba,Ta,d.normal),u.face=d,u.barycoord=h}return u}const Pn=new ht,Rc=new ht,Cc=new ht,hf=new ht,Pc=new Xe,Ra=new D,Ys=new Dr,Lc=new Xe,Ks=new Qn;class df extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ic,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,n=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1&&(Lc.copy(n).invert(),Ks.copy(e.ray).applyMatrix4(Lc),!(this.boundingBox!==null&&Ks.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let r=0,n=t.count;r<n;r++){e.fromBufferAttribute(t,r);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,n=this.geometry;Rc.fromBufferAttribute(n.attributes.skinIndex,e),Cc.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Pn.copy(t),t.set(0,0,0,0)):(Pn.set(...t,1),t.set(0,0,0)),Pn.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const s=Cc.getComponent(a);if(s!==0){const o=Rc.getComponent(a);Pc.multiplyMatrices(r.bones[o].matrixWorld,r.boneInverses[o]),t.addScaledVector(hf.copy(Pn).applyMatrix4(Pc),s)}}return t.isVector4&&(t.w=Pn.w),t.applyMatrix4(this.bindMatrixInverse)}}class bh extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _s extends yt{constructor(e=null,t=1,r=1,n,a,s,o,c,l=Rt,u=Rt,h,d){super(null,s,o,c,l,u,n,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new Xe,pf=new Xe;class Hl{constructor(e=[],t=[]){this.uuid=yr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,n=this.bones.length;r<n;r++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new Xe;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,n=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:pf;Nc.multiplyMatrices(o,t[a]),Nc.toArray(r,a*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new _s(t,e,e,lr,or);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,n=e.bones.length;r<n;r++){const a=e.bones[r];let s=t[a];s===void 0&&(Ce("Skeleton: No bone found with UUID:",a),s=new bh),this.bones.push(s),this.boneInverses.push(new Xe().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let n=0,a=t.length;n<a;n++){const s=t[n];e.bones.push(s.uuid);const o=r[n];e.boneInverses.push(o.toArray())}return e}}class sl extends ut{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new Xe,Ic=new Xe,Ca=[],Dc=new Kr,ff=new Xe,Ln=new Bt,Nn=new Dr;class mf extends Bt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,ff)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Xi),Dc.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Xi),Nn.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Nn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=r.length+1,s=e*a+1;for(let o=0;o<r.length;o++)r[o]=n[s+o]}raycast(e,t){const r=this.matrixWorld,n=this.count;if(Ln.geometry=this.geometry,Ln.material=this.material,Ln.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nn.copy(this.boundingSphere),Nn.applyMatrix4(r),e.ray.intersectsSphere(Nn)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Xi),Ic.multiplyMatrices(r,Xi),Ln.matrixWorld=Ic,Ln.raycast(e,Ca);for(let s=0,o=Ca.length;s<o;s++){const c=Ca[s];c.instanceId=a,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(n*this.count),n,this.count,Il,or));const a=this.morphTexture.source.data.data;let s=0;for(let l=0;l<r.length;l++)s+=r[l];const o=this.geometry.morphTargetsRelative?1:1-s,c=n*e;return a[c]=o,a.set(r,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $s=new D,gf=new D,vf=new We;class ai{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=$s.subVectors(r,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const n=e.delta($s),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vf.getNormalMatrix(e),n=this.coplanarPoint($s).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Dr,_f=new Pe(.5,.5),Pa=new D;class Gl{constructor(e=new ai,t=new ai,r=new ai,n=new ai,a=new ai,s=new ai){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Cr,r=!1){const n=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],h=a[5],d=a[6],m=a[7],f=a[8],v=a[9],p=a[10],g=a[11],b=a[12],A=a[13],M=a[14],T=a[15];if(n[0].setComponents(l-s,m-u,g-f,T-b).normalize(),n[1].setComponents(l+s,m+u,g+f,T+b).normalize(),n[2].setComponents(l+o,m+h,g+v,T+A).normalize(),n[3].setComponents(l-o,m-h,g-v,T-A).normalize(),r)n[4].setComponents(c,d,p,M).normalize(),n[5].setComponents(l-c,m-d,g-p,T-M).normalize();else if(n[4].setComponents(l-c,m-d,g-p,T-M).normalize(),t===Cr)n[5].setComponents(l+c,m+d,g+p,T+M).normalize();else if(t===qn)n[5].setComponents(c,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=_f.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Pa.x=n.normal.x>0?e.max.x:e.min.x,Pa.y=n.normal.y>0?e.max.y:e.min.y,Pa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xs extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ss=new D,os=new D,Uc=new Xe,In=new Qn,La=new Dr,Zs=new D,Oc=new D;class ea extends gt{constructor(e=new Et,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)ss.fromBufferAttribute(t,n-1),os.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=ss.distanceTo(os);e.setAttribute("lineDistance",new Qt(r,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),La.copy(r.boundingSphere),La.applyMatrix4(n),La.radius+=a,e.ray.intersectsSphere(La)===!1)return;Uc.copy(n).invert(),In.copy(e.ray).applyMatrix4(Uc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=r.index,h=r.attributes.position;if(u!==null){const d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let f=d,v=m-1;f<v;f+=l){const p=u.getX(f),g=u.getX(f+1),b=Na(this,e,In,c,p,g,f);b&&t.push(b)}if(this.isLineLoop){const f=u.getX(m-1),v=u.getX(d),p=Na(this,e,In,c,f,v,m-1);p&&t.push(p)}}else{const d=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let f=d,v=m-1;f<v;f+=l){const p=Na(this,e,In,c,f,f+1,f);p&&t.push(p)}if(this.isLineLoop){const f=Na(this,e,In,c,m-1,d,m-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Na(i,e,t,r,n,a,s){const o=i.geometry.attributes.position;if(ss.fromBufferAttribute(o,n),os.fromBufferAttribute(o,a),t.distanceSqToSegment(ss,os,Zs,Oc)>r)return;Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);if(!(c<e.near||c>e.far))return{distance:c,point:Oc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Fc=new D,Bc=new D;class ls extends ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)Fc.fromBufferAttribute(t,n),Bc.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Fc.distanceTo(Bc);e.setAttribute("lineDistance",new Qt(r,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Th extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kc=new Xe,ol=new Qn,Ia=new Dr,Da=new D;class cs extends gt{constructor(e=new Et,t=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ia.copy(r.boundingSphere),Ia.applyMatrix4(n),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;kc.copy(n).invert(),ol.copy(e.ray).applyMatrix4(kc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,u=r.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let m=h,f=d;m<f;m++){const v=l.getX(m);Da.fromBufferAttribute(u,v),zc(Da,v,c,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let m=h,f=d;m<f;m++)Da.fromBufferAttribute(u,m),zc(Da,m,c,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function zc(i,e,t,r,n,a,s){const o=ol.distanceSqToPoint(i);if(o<t){const c=new D;ol.closestPointToPoint(i,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Eh extends yt{constructor(e=[],t=Mi,r,n,a,s,o,c,l,u){super(e,t,r,n,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class un extends yt{constructor(e,t,r=Nr,n,a,s,o=Rt,c=Rt,l,u=qr,h=1){if(u!==qr&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,n,a,s,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yf extends un{constructor(e,t=Nr,r=Mi,n,a,s=Rt,o=Rt,c,l=qr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,r,n,a,s,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends Et{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,m=0;f("z","y","x",-1,-1,r,t,e,s,a,0),f("z","y","x",1,-1,r,t,-e,s,a,1),f("x","z","y",1,1,e,r,t,n,s,2),f("x","z","y",1,-1,e,r,-t,n,s,3),f("x","y","z",1,-1,e,t,r,n,a,4),f("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function f(v,p,g,b,A,M,T,E,R,x,S){const P=M/R,L=T/x,B=M/2,J=T/2,te=E/2,G=R+1,Y=x+1;let V=0,re=0;const se=new D;for(let N=0;N<Y;N++){const j=N*L-J;for(let ie=0;ie<G;ie++){const we=ie*P-B;se[v]=we*b,se[p]=j*A,se[g]=te,l.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[g]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(ie/R),h.push(1-N/x),V+=1}}for(let N=0;N<x;N++)for(let j=0;j<R;j++){const ie=d+j+G*N,we=d+j+G*(N+1),De=d+(j+1)+G*(N+1),Re=d+(j+1)+G*N;c.push(ie,we,Re),c.push(we,De,Re),re+=6}o.addGroup(m,re,S),m+=re,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pn extends Et{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,h=e/o,d=t/c,m=[],f=[],v=[],p=[];for(let g=0;g<u;g++){const b=g*d-s;for(let A=0;A<l;A++){const M=A*h-a;f.push(M,-b,0),v.push(0,0,1),p.push(A/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const A=b+l*g,M=b+l*(g+1),T=b+1+l*(g+1),E=b+1+l*g;m.push(A,M,E),m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}function hn(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];if(Vc(n))n.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone();else if(Array.isArray(n))if(Vc(n[0])){const a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();e[t][r]=a}else e[t][r]=n.slice();else e[t][r]=n}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const r=hn(i[t]);for(const n in r)e[n]=r[n]}return e}function Vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const $n={clone:hn,merge:Ht};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hn(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const n=e.uniforms[r];switch(this.uniforms[r]={},n.type){case"t":this.uniforms[r].value=t[n.value]||null;break;case"c":this.uniforms[r].value=new be().setHex(n.value);break;case"v2":this.uniforms[r].value=new Pe().fromArray(n.value);break;case"v3":this.uniforms[r].value=new D().fromArray(n.value);break;case"v4":this.uniforms[r].value=new ht().fromArray(n.value);break;case"m3":this.uniforms[r].value=new We().fromArray(n.value);break;case"m4":this.uniforms[r].value=new Xe().fromArray(n.value);break;default:this.uniforms[r].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Rh extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wl extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ur extends Wl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tf extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ua(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wf(i){function e(n,a){return i[n]-i[a]}const t=i.length,r=new Array(t);for(let n=0;n!==t;++n)r[n]=n;return r.sort(e),r}function Hc(i,e,t){const r=i.length,n=new i.constructor(r);for(let a=0,s=0;s!==r;++a){const o=t[a]*e;for(let c=0;c!==e;++c)n[s++]=i[o+c]}return n}function Af(i,e,t,r){let n=1,a=i[0];for(;a!==void 0&&a[r]===void 0;)a=i[n++];if(a===void 0)return;let s=a[r];if(s!==void 0)if(Array.isArray(s))do s=a[r],s!==void 0&&(e.push(a.time),t.push(...s)),a=i[n++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[r],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=i[n++];while(a!==void 0);else do s=a[r],s!==void 0&&(e.push(a.time),t.push(s)),a=i[n++];while(a!==void 0)}class fn{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,n=t[r],a=t[r-1];r:{e:{let s;t:{i:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(a=n,n=t[++r],e<n)break e}s=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(r=2,a=o);for(let c=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===c)break;if(n=a,a=t[--r-1],e>=a)break e}s=r,r=0;break t}break r}for(;r<s;){const o=r+s>>>1;e<t[o]?s=o:r=o+1}if(n=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,n)}return this.interpolate_(r,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=r[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Rf extends fn{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,r){const n=this.parameterPositions;let a=e-2,s=e+1,o=n[a],c=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case sc:a=e,o=2*t-r;break;case oc:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=r}if(c===void 0)switch(this.getSettings_().endingEnd){case sc:s=e,c=2*r-t;break;case oc:s=1,c=r+n[1]-n[0];break;default:s=e-1,c=t}const l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-r),this._offsetPrev=a*u,this._offsetNext=s*u}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(r-t)/(n-t),v=f*f,p=v*f,g=-d*p+2*d*v-d*f,b=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*f+1,A=(-1-m)*p+(1.5+m)*v+.5*f,M=m*p-m*v;for(let T=0;T!==o;++T)a[T]=g*s[u+T]+b*s[l+T]+A*s[c+T]+M*s[h+T];return a}}class Cf extends fn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(r-t)/(n-t),h=1-u;for(let d=0;d!==o;++d)a[d]=s[l+d]*h+s[c+d]*u;return a}}class Pf extends fn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Lf extends fn{interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const f=(r-t)/(n-t),v=1-f;for(let p=0;p!==o;++p)a[p]=s[l+p]*v+s[c+p]*f;return a}const d=o*2,m=e-1;for(let f=0;f!==o;++f){const v=s[l+f],p=s[c+f],g=m*d+f*2,b=h[g],A=h[g+1],M=e*d+f*2,T=u[M],E=u[M+1];let R=(r-t)/(n-t),x,S,P,L,B;for(let J=0;J<8;J++){x=R*R,S=x*R,P=1-R,L=P*P,B=L*P;const te=B*t+3*L*R*b+3*P*x*T+S*n-r;if(Math.abs(te)<1e-10)break;const G=3*L*(b-t)+6*P*R*(T-b)+3*x*(n-T);if(Math.abs(G)<1e-10)break;R=R-te/G,R=Math.max(0,Math.min(1,R))}a[f]=B*v+3*L*R*A+3*P*x*E+S*p}return a}}class Mr{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xn:t=this.InterpolantFactoryMethodDiscrete;break;case jn:t=this.InterpolantFactoryMethodLinear;break;case Es:t=this.InterpolantFactoryMethodSmooth;break;case nc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return Ce("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xn;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return Es;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){const r=this.times,n=r.length;let a=0,s=n-1;for(;a!==n&&r[a]<e;)++a;for(;s!==-1&&r[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=r.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,n=this.values,a=r.length;a===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const c=r[o];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){Fe("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(n!==void 0&&bp(n))for(let o=0,c=n.length;o!==c;++o){const l=n[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===Es,a=e.length-1;let s=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(n)c=!0;else{const h=o*r,d=h-r,m=h+r;for(let f=0;f!==r;++f){const v=t[h+f];if(v!==t[d+f]||v!==t[m+f]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];const h=o*r,d=s*r;for(let m=0;m!==r;++m)t[d+m]=t[h+m]}++s}}if(a>0){e[s]=e[a];for(let o=a*r,c=s*r,l=0;l!==r;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Mr.prototype.ValueTypeName="";Mr.prototype.TimeBufferType=Float32Array;Mr.prototype.ValueBufferType=Float32Array;Mr.prototype.DefaultInterpolation=jn;class mn extends Mr{constructor(e,t,r){super(e,t,r)}}mn.prototype.ValueTypeName="bool";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=Xn;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends Mr{constructor(e,t,r,n){super(e,t,r,n)}}Ch.prototype.ValueTypeName="color";class Zn extends Mr{constructor(e,t,r,n){super(e,t,r,n)}}Zn.prototype.ValueTypeName="number";class Nf extends fn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(r-t)/(n-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Ir.slerpFlat(a,0,s,l-o,s,l,c);return a}}class Jn extends Mr{constructor(e,t,r,n){super(e,t,r,n)}InterpolantFactoryMethodLinear(e){return new Nf(this.times,this.values,this.getValueSize(),e)}}Jn.prototype.ValueTypeName="quaternion";Jn.prototype.InterpolantFactoryMethodSmooth=void 0;class gn extends Mr{constructor(e,t,r){super(e,t,r)}}gn.prototype.ValueTypeName="string";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Xn;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Mr{constructor(e,t,r,n){super(e,t,r,n)}}us.prototype.ValueTypeName="vector";class If{constructor(e="",t=-1,r=[],n=dp){this.name=e,this.tracks=r,this.duration=t,this.blendMode=n,this.uuid=yr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,n=1/(e.fps||1);for(let s=0,o=r.length;s!==o;++s)t.push(Uf(r[s]).scale(n));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],r=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,s=r.length;a!==s;++a)t.push(Mr.toJSON(r[a]));return n}static CreateFromMorphTargetSequence(e,t,r,n){const a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const u=wf(c);c=Hc(c,1,u),l=Hc(l,1,u),!n&&c[0]===0&&(c.push(a),l.push(l[0])),s.push(new Zn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const n=e;r=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<r.length;n++)if(r[n].name===t)return r[n];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const n={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(a);if(u&&u.length>1){const h=u[1];let d=n[h];d||(n[h]=d=[]),d.push(l)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,r));return s}resetDuration(){const e=this.tracks;let t=0;for(let r=0,n=e.length;r!==n;++r){const a=this.tracks[r];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let r=0;r<this.tracks.length;r++)e.push(this.tracks[r].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Df(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zn;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Ch;case"quaternion":return Jn;case"bool":case"boolean":return mn;case"string":return gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Uf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Df(i.type);if(i.times===void 0){const t=[],r=[];Af(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Xr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Of{constructor(e,t,r){const n=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(u){o++,a===!1&&n.onStart!==void 0&&n.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],f=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ff=new Of;class vn{constructor(e){this.manager=e!==void 0?e:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,a){r.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gr={};class Bf extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Xr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Gr[e]!==void 0){Gr[e].push({onLoad:t,onProgress:r,onError:n});return}Gr[e]=[],Gr[e].push({onLoad:t,onProgress:r,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Gr[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,f=m!==0;let v=0;const p=new ReadableStream({start(g){b();function b(){h.read().then(({done:A,value:M})=>{if(A)g.close();else{v+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:f,loaded:v,total:m});for(let E=0,R=u.length;E<R;E++){const x=u[E];x.onProgress&&x.onProgress(T)}g.enqueue(M),b()}},A=>{g.error(A)})}}});return new Response(p)}else throw new Bf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Xr.add(`file:${e}`,l);const u=Gr[e];delete Gr[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Gr[e];if(u===void 0)throw this.manager.itemError(e),l;delete Gr[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ji=new WeakMap;class kf extends vn{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let h=ji.get(s);h===void 0&&(h=[],ji.set(s,h)),h.push({onLoad:t,onError:n})}return s}const o=Yn("img");function c(){u(),t&&t(this);const h=ji.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onLoad&&m.onLoad(this)}ji.delete(this),a.manager.itemEnd(e)}function l(h){u(),n&&n(h),Xr.remove(`image:${e}`);const d=ji.get(this)||[];for(let m=0;m<d.length;m++){const f=d[m];f.onError&&f.onError(h)}ji.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xr.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class zf extends vn{constructor(e){super(e)}load(e,t,r,n){const a=new yt,s=new kf(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,n),a}}class Xl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Js=new Xe,Wc=new D,Xc=new D;class jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),Js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Js,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qn||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oa=new D,Fa=new Ir,Tr=new D;class Lh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oa,Fa,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Fa,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Oa,Fa,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Fa,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,jc=new Pe,qc=new Pe;class Wt extends Lh{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cn*2*Math.atan(Math.tan(zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,jc,qc),t.subVectors(qc,jc)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*r/l,n*=s.width/c,r*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vf extends jl{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=cn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(r!==t.fov||n!==t.aspect||a!==t.far)&&(t.fov=r,t.aspect=n,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hf extends Xl{constructor(e,t,r=0,n=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=r,this.angle=n,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Vf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gf extends jl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class Wf extends Xl{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new Gf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ra extends Lh{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xf extends jl{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jf extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Xf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hn{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qs=new WeakMap;class qf extends vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xr.get(`image-bitmap:${e}`);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(l=>{Qs.has(s)===!0?(n&&n(Qs.get(s)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){Xr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){n&&n(l),Qs.set(c,l),Xr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Xr.add(`image-bitmap:${e}`,c),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qi=-90,Yi=1;class Yf extends gt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(qi,Yi,e,t);n.layers=this.layers,this.add(n);const a=new Wt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const s=new Wt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const o=new Wt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const c=new Wt(qi,Yi,e,t);c.layers=this.layers,this.add(c);const l=new Wt(qi,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Cr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(r,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(r,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}}class Kf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $f{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zf(){this._document.hidden===!1&&this.reset()}const ql="\\[\\]\\.:\\/",Jf=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Qf="[^"+ql.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",Yl),tm=/(WCOD+)?/.source.replace("WCOD",Qf),rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),nm=new RegExp("^"+em+tm+rm+im+"$"),am=["material","materials","bones","map"];class sm{constructor(e,t,r){const n=r||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=r.length;n!==a;++n)r[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class ct{constructor(e,t,r){this.path=t,this.parsedPath=r||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,r):new ct(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jf,"")}static parseTrackName(e){const t=nm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const a=r.nodeName.substring(n+1);am.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const c=r(o.children);if(c)return c}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)e[t++]=r[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,n=t.propertyName;let a=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let l=t.objectIndex;switch(r){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[n];if(s===void 0){const l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=sm;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yc=new Xe;class om{constructor(e,t,r=0,n=1/0){this.ray=new Qn(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,r=[]){return ll(e,this,r,t),r.sort(Kc),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)ll(e[n],this,r,t);return r.sort(Kc),r}}function Kc(i,e){return i.distance-e.distance}function ll(i,e,t,r){let n=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)ll(a[s],e,t,!0)}}class Nh{static{Nh.prototype.isMatrix2=!0}constructor(e,t,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,n){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=n,this}}function $c(i,e,t,r){const n=lm(r);switch(t){case dh:return i*e;case Il:return i*e/n.components*n.byteLength;case Dl:return i*e/n.components*n.byteLength;case Si:return i*e*2/n.components*n.byteLength;case Ul:return i*e*2/n.components*n.byteLength;case ph:return i*e*3/n.components*n.byteLength;case lr:return i*e*4/n.components*n.byteLength;case Ol:return i*e*4/n.components*n.byteLength;case Ya:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(i,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case No:case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case rs:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zo:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case is:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lm(i){switch(i){case Zt:case lh:return{byteLength:1,components:1};case Gn:case ch:case Jt:return{byteLength:2,components:1};case Ll:case Nl:return{byteLength:2,components:4};case Nr:case Pl:case or:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Ih(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function cm(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,f)=>m.start-f.start);let d=0;for(let m=1;m<h.length;m++){const f=h[d],v=h[m];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,f=h.length;m<f;m++){const v=h[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:um,alphahash_pars_fragment:hm,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:fm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:vm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:Sm,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Rm,color_fragment:Cm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Nm,common:Im,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Om,displacementmap_vertex:Fm,emissivemap_fragment:Bm,emissivemap_pars_fragment:km,colorspace_fragment:zm,colorspace_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:rg,envmap_vertex:jm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:Km,fog_pars_fragment:$m,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:ng,lights_phong_fragment:ag,lights_phong_pars_fragment:sg,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:hg,lightprobes_pars_fragment:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:vg,map_pars_fragment:_g,map_particle_fragment:xg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:bg,morphcolor_vertex:Tg,morphnormal_vertex:Eg,morphtarget_pars_vertex:wg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Ng,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:Bg,packing:kg,premultiplied_alpha_fragment:zg,project_vertex:Vg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Kg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:rv,tonemapping_pars_fragment:iv,transmission_fragment:nv,transmission_pars_fragment:av,uv_pars_fragment:sv,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:hv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:fv,cube_frag:mv,depth_vert:gv,depth_frag:vv,distance_vert:_v,distance_frag:xv,equirect_vert:yv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:bv,meshbasic_vert:Tv,meshbasic_frag:Ev,meshlambert_vert:wv,meshlambert_frag:Av,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:Nv,meshphong_frag:Iv,meshphysical_vert:Dv,meshphysical_frag:Uv,meshtoon_vert:Ov,meshtoon_frag:Fv,points_vert:Bv,points_frag:kv,shadow_vert:zv,shadow_frag:Vv,sprite_vert:Hv,sprite_frag:Gv},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ar={basic:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ht([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ht([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ht([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ht([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ht([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ar.physical={uniforms:Ht([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ba={r:0,b:0,g:0},Wv=new Xe,Dh=new We;Dh.set(-1,0,0,0,1,0,0,0,1);function Xv(i,e,t,r,n,a){const s=new be(0);let o=n===!0?0:1,c,l,u=null,h=0,d=null;function m(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const M=b.backgroundBlurriness>0;A=e.get(A,M)}return A}function f(b){let A=!1;const M=m(b);M===null?p(s,o):M&&M.isColor&&(p(M,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,A){const M=m(A);M&&(M.isCubeTexture||M.mapping===vs)?(l===void 0&&(l=new Bt(new ta(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:hn(Ar.backgroundCube.uniforms),vertexShader:Ar.backgroundCube.vertexShader,fragmentShader:Ar.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dh),l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==st,(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Bt(new pn(2,2),new ft({name:"BackgroundMaterial",uniforms:hn(Ar.background.uniforms),vertexShader:Ar.background.vertexShader,fragmentShader:Ar.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(Ba,Ah(i)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,A,a)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,A=1){s.set(b),o=A,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(s,o)},render:f,addToRenderList:v,dispose:g}}function jv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=d(null);let a=n,s=!1;function o(L,B,J,te,G){let Y=!1;const V=h(L,te,J,B);a!==V&&(a=V,l(a.object)),Y=m(L,te,J,G),Y&&f(L,te,J,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,M(L,B,J,te),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,B,J,te){const G=te.wireframe===!0;let Y=r[B.id];Y===void 0&&(Y={},r[B.id]=Y);const V=L.isInstancedMesh===!0?L.id:0;let re=Y[V];re===void 0&&(re={},Y[V]=re);let se=re[J.id];se===void 0&&(se={},re[J.id]=se);let N=se[G];return N===void 0&&(N=d(c()),se[G]=N),N}function d(L){const B=[],J=[],te=[];for(let G=0;G<t;G++)B[G]=0,J[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:te,object:L,attributes:{},index:null}}function m(L,B,J,te){const G=a.attributes,Y=B.attributes;let V=0;const re=J.getAttributes();for(const se in re)if(re[se].location>=0){const N=G[se];let j=Y[se];if(j===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;V++}return a.attributesNum!==V||a.index!==te}function f(L,B,J,te){const G={},Y=B.attributes;let V=0;const re=J.getAttributes();for(const se in re)if(re[se].location>=0){let N=Y[se];N===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(N=L.instanceColor));const j={};j.attribute=N,N&&N.data&&(j.data=N.data),G[se]=j,V++}a.attributes=G,a.attributesNum=V,a.index=te}function v(){const L=a.newAttributes;for(let B=0,J=L.length;B<J;B++)L[B]=0}function p(L){g(L,0)}function g(L,B){const J=a.newAttributes,te=a.enabledAttributes,G=a.attributeDivisors;J[L]=1,te[L]===0&&(i.enableVertexAttribArray(L),te[L]=1),G[L]!==B&&(i.vertexAttribDivisor(L,B),G[L]=B)}function b(){const L=a.newAttributes,B=a.enabledAttributes;for(let J=0,te=B.length;J<te;J++)B[J]!==L[J]&&(i.disableVertexAttribArray(J),B[J]=0)}function A(L,B,J,te,G,Y,V){V===!0?i.vertexAttribIPointer(L,B,J,G,Y):i.vertexAttribPointer(L,B,J,te,G,Y)}function M(L,B,J,te){v();const G=te.attributes,Y=J.getAttributes(),V=B.defaultAttributeValues;for(const re in Y){const se=Y[re];if(se.location>=0){let N=G[re];if(N===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){const j=N.normalized,ie=N.itemSize,we=e.get(N);if(we===void 0)continue;const De=we.buffer,Re=we.type,Z=we.bytesPerElement,oe=Re===i.INT||Re===i.UNSIGNED_INT||N.gpuType===Pl;if(N.isInterleavedBufferAttribute){const Q=N.data,Le=Q.stride,ke=N.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<se.locationSize;ve++)g(se.location+ve,Q.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<se.locationSize;ve++)p(se.location+ve);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ve=0;ve<se.locationSize;ve++)A(se.location+ve,ie/se.locationSize,Re,j,Le*Z,(ke+ie/se.locationSize*ve)*Z,oe)}else{if(N.isInstancedBufferAttribute){for(let Q=0;Q<se.locationSize;Q++)g(se.location+Q,N.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Q=0;Q<se.locationSize;Q++)p(se.location+Q);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Q=0;Q<se.locationSize;Q++)A(se.location+Q,ie/se.locationSize,Re,j,ie*Z,ie/se.locationSize*Q*Z,oe)}}else if(V!==void 0){const j=V[re];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(se.location,j);break;case 3:i.vertexAttrib3fv(se.location,j);break;case 4:i.vertexAttrib4fv(se.location,j);break;default:i.vertexAttrib1fv(se.location,j)}}}}b()}function T(){S();for(const L in r){const B=r[L];for(const J in B){const te=B[J];for(const G in te){const Y=te[G];for(const V in Y)u(Y[V].object),delete Y[V];delete te[G]}}delete r[L]}}function E(L){if(r[L.id]===void 0)return;const B=r[L.id];for(const J in B){const te=B[J];for(const G in te){const Y=te[G];for(const V in Y)u(Y[V].object),delete Y[V];delete te[G]}}delete r[L.id]}function R(L){for(const B in r){const J=r[B];for(const te in J){const G=J[te];if(G[L.id]===void 0)continue;const Y=G[L.id];for(const V in Y)u(Y[V].object),delete Y[V];delete G[L.id]}}}function x(L){for(const B in r){const J=r[B],te=L.isInstancedMesh===!0?L.id:0,G=J[te];if(G!==void 0){for(const Y in G){const V=G[Y];for(const re in V)u(V[re].object),delete V[re];delete G[Y]}delete J[te],Object.keys(J).length===0&&delete r[B]}}}function S(){P(),s=!0,a!==n&&(a=n,l(a.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function qv(i,e,t){let r;function n(c){r=c}function a(c,l){i.drawArrays(r,c,l),t.update(l,r,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(r,c,l,u),t.update(l,r,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Yv(i,e,t,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){return!(R!==lr&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==or&&!x)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,maxSamples:T,samples:E}}function Kv(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new ai,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||r!==0||n;return n=d,r=h.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const f=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!n||f===null||f.length===0||a&&!p)a?u(null):l();else{const b=a?0:r,A=b*4;let M=g.clippingState||null;c.value=M,M=u(f,d,A,m);for(let T=0;T!==A;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,d,m,f){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,f!==!0||p===null){const g=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,M=m;A!==v;++A,M+=4)s.copy(h[A]).applyMatrix4(b,o),s.normal.toArray(p,M),p[M+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const ci=4,Zc=[.125,.215,.35,.446,.526,.582],xi=20,$v=256,Dn=new ra,Jc=new be;let eo=null,to=0,ro=0,io=!1;const Zv=new D;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,n=100,a={}){const{size:s=256,position:o=Zv}=a;eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eo,to,ro),this._renderer.xr.enabled=io,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===on?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Jt,format:lr,colorSpace:er,depthBuffer:!1},n=eu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jv(a)),this._blurMaterial=e_(a,e,t),this._ggxMaterial=Qv(a,e,t)}return n}_compileMaterial(e){const t=new Bt(new Et,e);this._renderer.compile(t,Dn)}_sceneToCubeUV(e,t,r,n,a){const s=new Wt(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,h=l.toneMapping;l.getClearColor(Jc),l.toneMapping=xr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new ta,new li({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,m=d.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Jc),f=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(s.up.set(0,o[p],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+c[p],a.y,a.z)):g===1?(s.up.set(0,0,o[p]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+c[p],a.z)):(s.up.set(0,o[p],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+c[p]));const b=this._cubeSize;Ki(n,g*b,p>2?b:0,b,b),l.setRenderTarget(n),f&&l.render(d,s),l.render(e,s)}l.toneMapping=h,l.autoClear=u,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Mi||e.mapping===on;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const a=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Ki(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,Dn)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const n=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[r];o.material=s;const c=s.uniforms,l=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,m=h*d,{_lodMax:f}=this,v=this._sizeLods[r],p=3*v*(r>f-ci?r-f+ci:0),g=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=f-t,Ki(a,p,g,3*v,2*v),n.setRenderTarget(a),n.render(o,Dn),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-r,Ki(e,p,g,3*v,2*v),n.setRenderTarget(e),n.render(o,Dn)}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[n];h.material=l;const d=l.uniforms,m=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*xi-1),v=a/f,p=isFinite(a)?1+Math.floor(u*v):xi;p>xi&&Ce(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const g=[];let b=0;for(let R=0;R<xi;++R){const x=R/v,S=Math.exp(-x*x/2);g.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<g.length;R++)g[R]=g[R]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=f,d.mipInt.value=A-r;const M=this._sizeLods[n],T=3*M*(n>A-ci?n-A+ci:0),E=4*(this._cubeSize-M);Ki(t,T,E,3*M,2*M),c.setRenderTarget(t),c.render(h,Dn)}}function Jv(i){const e=[],t=[],r=[];let n=i;const a=i-ci+1+Zc.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);e.push(o);let c=1/o;s>i-ci?c=Zc[s-i+ci-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,f=6,v=3,p=2,g=1,b=new Float32Array(v*f*m),A=new Float32Array(p*f*m),M=new Float32Array(g*f*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,x=E>2?0:-1,S=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(S,v*f*E),A.set(d,p*f*E);const P=[E,E,E,E,E,E];M.set(P,g*f*E)}const T=new Et;T.setAttribute("position",new ut(b,v)),T.setAttribute("uv",new ut(A,p)),T.setAttribute("faceIndex",new ut(M,g)),r.push(new Bt(T,null)),n>ci&&n--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function eu(i,e,t){const r=new Xt(i,e,t);return r.texture.mapping=vs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ki(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Qv(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function e_(i,e,t){const r=new Float32Array(xi),n=new D(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function tu(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ru(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Uh extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Eh(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ta(5,5,5),a=new ft({name:"CubemapFromEquirect",uniforms:hn(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jt,blending:Pr});a.uniforms.tEquirect.value=t;const s=new Bt(n,a),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Ct),new Yf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}function t_(i){let e=new WeakMap,t=new WeakMap,r=null;function n(d,m=!1){return d==null?null:m?s(d):a(d)}function a(d){if(d&&d.isTexture){const m=d.mapping;if(m===bs||m===Ts)if(e.has(d)){const f=e.get(d).texture;return o(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const v=new Uh(f.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const m=d.mapping,f=m===bs||m===Ts,v=m===Mi||m===on;if(f||v){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return r===null&&(r=new Qc(i)),p=f?r.fromEquirectangular(d,p):r.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const b=d.image;return f&&b&&b.height>0||v&&b&&c(b)?(r===null&&(r=new Qc(i)),p=f?r.fromEquirectangular(d):r.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,m){return m===bs?d.mapping=Mi:m===Ts&&(d.mapping=on),d}function c(d){let m=0;const f=6;for(let v=0;v<f;v++)d[v]!==void 0&&m++;return m===f}function l(d){const m=d.target;m.removeEventListener("dispose",l);const f=e.get(m);f!==void 0&&(e.delete(m),f.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const f=t.get(m);f!==void 0&&(t.delete(m),f.dispose())}function h(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:h}}function r_(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const n=i.getExtension(r);return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&tn("WebGLRenderer: "+r+" extension not supported."),n}}}function i_(i,e,t,r){const n={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",s),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(h){const d=[],m=h.index,f=h.attributes.position;let v=0;if(f===void 0)return;if(m!==null){const b=m.array;v=m.version;for(let A=0,M=b.length;A<M;A+=3){const T=b[A+0],E=b[A+1],R=b[A+2];d.push(T,E,E,R,R,T)}}else{const b=f.array;v=f.version;for(let A=0,M=b.length/3-1;A<M;A+=3){const T=A+0,E=A+1,R=A+2;d.push(T,E,E,R,R,T)}}const p=new(f.count>=65535?xh:_h)(d,1);p.version=v;const g=a.get(h);g&&e.remove(g),a.set(h,p)}function u(h){const d=a.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function n_(i,e,t){let r;function n(h){r=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function c(h,d){i.drawElements(r,d,a,h*s),t.update(d,r,1)}function l(h,d,m){m!==0&&(i.drawElementsInstanced(r,d,a,h*s,m),t.update(d,r,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,a,h,0,m);let f=0;for(let v=0;v<m;v++)f+=d[v];t.update(f,r,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function a_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Fe("WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function s_(i,e,t){const r=new WeakMap,n=new ht;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=r.get(o);if(d===void 0||d.count!==h){let m=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",m)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*h),x=new gh(R,T,E,h);x.type=or,x.needsUpdate=!0;const S=M*4;for(let P=0;P<h;P++){const L=g[P],B=b[P],J=A[P],te=T*E*4*P;for(let G=0;G<L.count;G++){const Y=G*S;f===!0&&(n.fromBufferAttribute(L,G),R[te+Y+0]=n.x,R[te+Y+1]=n.y,R[te+Y+2]=n.z,R[te+Y+3]=0),v===!0&&(n.fromBufferAttribute(B,G),R[te+Y+4]=n.x,R[te+Y+5]=n.y,R[te+Y+6]=n.z,R[te+Y+7]=0),p===!0&&(n.fromBufferAttribute(J,G),R[te+Y+8]=n.x,R[te+Y+9]=n.y,R[te+Y+10]=n.z,R[te+Y+11]=J.itemSize===4?n.w:1)}}d={count:h,texture:x,size:new Pe(T,E)},r.set(o,d),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const f=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function o_(i,e,t,r,n){let a=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;a.get(m)!==u&&(m.update(),a.set(m,u))}return d}function o(){a=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),r.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const l_={[bl]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[wl]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function c_(i,e,t,r,n,a){const s=new Xt(e,t,{type:i,depthBuffer:n,stencilBuffer:a,samples:r?4:0,depthTexture:n?new un(e,t):void 0}),o=new Xt(e,t,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),c=new Et;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new Rh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Bt(c,l),h=new ra(-1,1,1,-1,0,1);let d=null,m=null,f=!1,v,p=null,g=[],b=!1;this.setSize=function(A,M){s.setSize(A,M),o.setSize(A,M);for(let T=0;T<g.length;T++){const E=g[T];E.setSize&&E.setSize(A,M)}},this.setEffects=function(A){g=A,b=g.length>0&&g[0].isRenderPass===!0;const M=s.width,T=s.height;for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(M,T)}},this.begin=function(A,M){if(f||A.toneMapping===xr&&g.length===0)return!1;if(p=M,M!==null){const T=M.width,E=M.height;(s.width!==T||s.height!==E)&&this.setSize(T,E)}return b===!1&&A.setRenderTarget(s),v=A.toneMapping,A.toneMapping=xr,!0},this.hasRenderPass=function(){return b},this.end=function(A,M){A.toneMapping=v,f=!0;let T=s,E=o;for(let R=0;R<g.length;R++){const x=g[R];if(x.enabled!==!1&&(x.render(A,E,T,M),x.needsSwap!==!1)){const S=T;T=E,E=S}}if(d!==A.outputColorSpace||m!==A.toneMapping){d=A.outputColorSpace,m=A.toneMapping,l.defines={},Ke.getTransfer(d)===st&&(l.defines.SRGB_TRANSFER="");const R=l_[m];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(p),A.render(u,h),p=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Oh=new yt,cl=new un(1,1),Fh=new gh,Bh=new Kp,kh=new Eh,iu=[],nu=[],au=new Float32Array(16),su=new Float32Array(9),ou=new Float32Array(4);function _n(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=iu[n];if(a===void 0&&(a=new Float32Array(n),iu[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ms(i,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function u_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function f_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;ou.set(r),i.uniformMatrix2fv(this.addr,!1,ou),Lt(t,r)}}function m_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;su.set(r),i.uniformMatrix3fv(this.addr,!1,su),Lt(t,r)}}function g_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;au.set(r),i.uniformMatrix4fv(this.addr,!1,au),Lt(t,r)}}function v_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function M_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function E_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);let a;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=t.isReversedDepthBuffer()?Bl:Fl,a=cl):a=Oh,t.setTexture2D(e||a,n)}function w_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Bh,n)}function A_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||kh,n)}function R_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Fh,n)}function C_(i){switch(i){case 5126:return u_;case 35664:return h_;case 35665:return d_;case 35666:return p_;case 35674:return f_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return v_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,e){i.uniform1fv(this.addr,e)}function L_(i,e){const t=_n(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){const t=_n(e,this.size,3);i.uniform3fv(this.addr,t)}function I_(i,e){const t=_n(e,this.size,4);i.uniform4fv(this.addr,t)}function D_(i,e){const t=_n(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){const t=_n(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O_(i,e){const t=_n(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F_(i,e){i.uniform1iv(this.addr,e)}function B_(i,e){i.uniform2iv(this.addr,e)}function k_(i,e){i.uniform3iv(this.addr,e)}function z_(i,e){i.uniform4iv(this.addr,e)}function V_(i,e){i.uniform1uiv(this.addr,e)}function H_(i,e){i.uniform2uiv(this.addr,e)}function G_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){const r=this.cache,n=e.length,a=Ms(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=cl:s=Oh;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||s,a[o])}function j_(i,e,t){const r=this.cache,n=e.length,a=Ms(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Bh,a[s])}function q_(i,e,t){const r=this.cache,n=e.length,a=Ms(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||kh,a[s])}function Y_(i,e,t){const r=this.cache,n=e.length,a=Ms(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Fh,a[s])}function K_(i){switch(i){case 5126:return P_;case 35664:return L_;case 35665:return N_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return V_;case 36294:return H_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}class $_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class Z_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const no=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function Q_(i,e,t){const r=i.name,n=r.length;for(no.lastIndex=0;;){const a=no.exec(r),s=no.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){lu(t,l===void 0?new $_(o,i,e):new Z_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new J_(o),lu(t,u)),t=u}}}class Ja{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Q_(o,c,this)}const n=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):a.push(s);n.length>0&&(this.seq=n.concat(a))}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function cu(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const e0=37297;let t0=0;function r0(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const uu=new We;function i0(i){Ke._getMatrix(uu,Ke.workingColorSpace,i);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=(i.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+r0(i.getShaderSource(e),s)}else return n}function n0(i,e){const t=i0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const a0={[bl]:"Linear",[Tl]:"Reinhard",[El]:"Cineon",[wl]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[Al]:"Custom"};function s0(i,e){const t=a0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new D;function o0(){Ke.getLuminanceCoefficients(ka);const i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kn).join(`
`)}function c0(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function u0(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function kn(i){return i!==""}function du(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(h0,p0)}const d0=new Map;function p0(i,e){let t=je[e];if(t===void 0){const r=d0.get(e);if(r!==void 0)t=je[r],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ul(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(f0,m0)}function m0(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function mu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const g0={[ja]:"SHADOWMAP_TYPE_PCF",[Fn]:"SHADOWMAP_TYPE_VSM"};function v0(i){return g0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _0={[Mi]:"ENVMAP_TYPE_CUBE",[on]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function x0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const y0={[on]:"ENVMAP_MODE_REFRACTION"};function M0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S0={[ah]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[up]:"ENVMAP_BLENDING_ADD"};function b0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":S0[i.combine]||"ENVMAP_BLENDING_NONE"}function T0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function E0(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=v0(t),l=x0(t),u=M0(t),h=b0(t),d=T0(t),m=l0(t),f=c0(a),v=n.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(kn).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(kn).join(`
`),g.length>0&&(g+=`
`)):(p=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kn).join(`
`),g=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?je.tonemapping_pars_fragment:"",t.toneMapping!==xr?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),o0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kn).join(`
`)),s=ul(s),s=du(s,t),s=pu(s,t),o=ul(o),o=du(o,t),o=pu(o,t),s=fu(s),o=fu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=b+p+s,M=b+g+o,T=cu(n,n.VERTEX_SHADER,A),E=cu(n,n.FRAGMENT_SHADER,M);n.attachShader(v,T),n.attachShader(v,E),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const B=n.getProgramInfoLog(v)||"",J=n.getShaderInfoLog(T)||"",te=n.getShaderInfoLog(E)||"",G=B.trim(),Y=J.trim(),V=te.trim();let re=!0,se=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,v,T,E);else{const N=hu(n,T,"vertex"),j=hu(n,E,"fragment");Fe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+N+`
`+j)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):(Y===""||V==="")&&(se=!1);se&&(L.diagnostics={runnable:re,programLog:G,vertexShader:{log:Y,prefix:p},fragmentShader:{log:V,prefix:g}})}n.deleteShader(T),n.deleteShader(E),x=new Ja(n,v),S=u0(n,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(v,e0)),P},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let w0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(r)===!1&&(n.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new R0(e),t.set(e,r)),r}}class R0{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}}function C0(i){return i===Si||i===rs||i===is}function P0(i,e,t,r,n,a){const s=new Vl,o=new A0,c=new Set,l=[],u=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,S,P,L,B,J){const te=L.fog,G=B.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,re=e.get(x.envMap||Y,V),se=re&&re.mapping===vs?re.image.height:null,N=m[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=j!==void 0?j.length:0;let we=0;G.morphAttributes.position!==void 0&&(we=1),G.morphAttributes.normal!==void 0&&(we=2),G.morphAttributes.color!==void 0&&(we=3);let De,Re,Z,oe;if(N){const _e=Ar[N];De=_e.vertexShader,Re=_e.fragmentShader}else{De=x.vertexShader,Re=x.fragmentShader;const _e=o.getVertexShaderStage(x),wt=o.getFragmentShaderStage(x);o.update(x,_e,wt),Z=_e.id,oe=wt.id}const Q=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,et=!!x.map,rt=!!x.matcap,Be=!!re,Je=!!x.aoMap,nt=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,pt=!!x.displacementMap,Mt=!!x.emissiveMap,He=!!x.metalnessMap,xt=!!x.roughnessMap,U=x.anisotropy>0,Dt=x.clearcoat>0,tt=x.dispersion>0,w=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,X=U&&!!x.anisotropyMap,q=Dt&&!!x.clearcoatMap,fe=Dt&&!!x.clearcoatNormalMap,he=Dt&&!!x.clearcoatRoughnessMap,O=w&&!!x.iridescenceMap,ce=w&&!!x.iridescenceThicknessMap,de=_&&!!x.sheenColorMap,Te=_&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Ue=!!x.specularColorMap,Ne=!!x.specularIntensityMap,ze=k&&!!x.transmissionMap,Ge=k&&!!x.thicknessMap,I=!!x.gradientMap,K=!!x.alphaMap,le=x.alphaTest>0,pe=!!x.alphaHash,xe=!!x.extensions;let ne=xr;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ae={shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:Re,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:et,matcap:rt,envMap:Be,envMapMode:Be&&re.mapping,envMapCubeUVHeight:se,aoMap:Je,lightMap:nt,bumpMap:dt,normalMap:_t,displacementMap:pt,emissiveMap:Mt,normalMapObjectSpace:_t&&x.normalMapType===mp,normalMapTangentSpace:_t&&x.normalMapType===nl,packedNormalMap:_t&&x.normalMapType===nl&&C0(x.normalMap.format),metalnessMap:He,roughnessMap:xt,anisotropy:U,anisotropyMap:X,clearcoat:Dt,clearcoatMap:q,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,dispersion:tt,iridescence:w,iridescenceMap:O,iridescenceThicknessMap:ce,sheen:_,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:ae,specularColorMap:Ue,specularIntensityMap:Ne,transmission:k,transmissionMap:ze,thicknessMap:Ge,gradientMap:I,opaque:x.transparent===!1&&x.blending===en&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:pe,combine:x.combine,mapUv:et&&f(x.map.channel),aoMapUv:Je&&f(x.aoMap.channel),lightMapUv:nt&&f(x.lightMap.channel),bumpMapUv:dt&&f(x.bumpMap.channel),normalMapUv:_t&&f(x.normalMap.channel),displacementMapUv:pt&&f(x.displacementMap.channel),emissiveMapUv:Mt&&f(x.emissiveMap.channel),metalnessMapUv:He&&f(x.metalnessMap.channel),roughnessMapUv:xt&&f(x.roughnessMap.channel),anisotropyMapUv:X&&f(x.anisotropyMap.channel),clearcoatMapUv:q&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&f(x.sheenRoughnessMap.channel),specularMapUv:ae&&f(x.specularMap.channel),specularColorMapUv:Ue&&f(x.specularColorMap.channel),specularIntensityMapUv:Ne&&f(x.specularIntensityMap.channel),transmissionMapUv:ze&&f(x.transmissionMap.channel),thicknessMapUv:Ge&&f(x.thicknessMap.channel),alphaMapUv:K&&f(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_t||U),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(et||K),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ar,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function A(x){const S=m[x.type];let P;if(S){const L=Ar[S];P=$n.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new E0(i,S,x,n),l.push(P),u.set(S,P)),P}function T(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:R}}function L0(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function n(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:a}}function N0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,f,v,p,g){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:m,material:f,materialVariant:s(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},i[e]=b):(b.id=d.id,b.object=d,b.geometry=m,b.material=f,b.materialVariant=s(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=p,b.group=g),e++,b}function c(d,m,f,v,p,g){const b=o(d,m,f,v,p,g);f.transmission>0?r.push(b):f.transparent===!0?n.push(b):t.push(b)}function l(d,m,f,v,p,g){const b=o(d,m,f,v,p,g);f.transmission>0?r.unshift(b):f.transparent===!0?n.unshift(b):t.unshift(b)}function u(d,m,f){t.length>1&&t.sort(d||N0),r.length>1&&r.sort(m||gu),n.length>1&&n.sort(m||gu),f&&(t.reverse(),r.reverse(),n.reverse())}function h(){for(let d=e,m=i.length;d<m;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:c,unshift:l,finish:h,sort:u}}function I0(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new vu,i.set(r,[s])):n>=a.length?(s=new vu,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new be};break;case"SpotLight":t={position:new D,direction:new D,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function U0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let O0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B0(i){const e=new D0,t=U0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new D);const n=new D,a=new Xe,s=new Xe;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let m=0,f=0,v=0,p=0,g=0,b=0,A=0,M=0,T=0,E=0,R=0;l.sort(F0);for(let S=0,P=l.length;S<P;S++){const L=l[S],B=L.color,J=L.intensity,te=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Si?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*J,h+=B.g*J,d+=B.b*J;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],J);R++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,re=t.get(L);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,r.directionalShadow[m]=re,r.directionalShadowMap[m]=G,r.directionalShadowMatrix[m]=L.shadow.matrix,b++}r.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(J),Y.distance=te,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[v]=Y;const V=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&E++),r.spotLightMatrix[v]=V.matrix,L.castShadow){const re=t.get(L);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,r.spotShadow[v]=re,r.spotShadowMap[v]=G,M++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(B).multiplyScalar(J),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[p]=Y,p++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const V=L.shadow,re=t.get(L);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,re.shadowCameraNear=V.camera.near,re.shadowCameraFar=V.camera.far,r.pointShadow[f]=re,r.pointShadowMap[f]=G,r.pointShadowMatrix[f]=L.shadow.matrix,A++}r.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(J),Y.groundColor.copy(L.groundColor).multiplyScalar(J),r.hemi[g]=Y,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=d;const x=r.hash;(x.directionalLength!==m||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==b||x.numPointShadows!==A||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==R)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=p,r.point.length=f,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=M+T-E,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=R,x.directionalLength=m,x.pointLength=f,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=b,x.numPointShadows=A,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=R,r.version=O0++)}function c(l,u){let h=0,d=0,m=0,f=0,v=0;const p=u.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){const A=l[g];if(A.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),h++}else if(A.isSpotLight){const M=r.spot[m];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const M=r.rectArea[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),s.identity(),a.copy(A.matrixWorld),a.premultiply(p),s.extractRotation(a),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),f++}else if(A.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const M=r.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:r}}function _u(i){const e=new B0(i),t=[],r=[],n=[];function a(d){h.camera=d,t.length=0,r.length=0,n.length=0}function s(d){t.push(d)}function o(d){r.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function k0(i){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new _u(i),e.set(n,[o])):a>=s.length?(o=new _u(i),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],G0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],xu=new Xe,Un=new D,ao=new D;function W0(i,e,t){let r=new Gl;const n=new Pe,a=new Pe,s=new ht,o=new Tf,c=new Ef,l={},u=t.maxTextureSize,h={[Lr]:jt,[jt]:Lr,[ar]:ar},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:z0,fragmentShader:V0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const f=new Et;f.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(E,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Wd&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ja);const S=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const J=g!==this.type;J&&R.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(G=>G.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,G=E.length;te<G;te++){const Y=E[te],V=Y.shadow;if(V===void 0){Ce("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const re=V.getFrameExtents();n.multiply(re),a.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/re.x),n.x=a.x*re.x,V.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/re.y),n.y=a.y*re.y,V.mapSize.y=a.y));const se=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=se,V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fn){if(Y.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xt(n.x,n.y,{format:Si,type:Jt,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new un(n.x,n.y,or),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=qr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt}else Y.isPointLight?(V.map=new Uh(n.x),V.map.depthTexture=new yf(n.x,Nr)):(V.map=new Xt(n.x,n.y),V.map.depthTexture=new un(n.x,n.y,Nr)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=qr,this.type===ja?(V.map.depthTexture.compareFunction=se?Bl:Fl,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt);V.camera.updateProjectionMatrix()}const N=V.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<N;j++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,j),i.clear();else{j===0&&(i.setRenderTarget(V.map),i.clear());const ie=V.getViewport(j);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),B.viewport(s)}if(Y.isPointLight){const ie=V.camera,we=V.matrix,De=Y.distance||ie.far;De!==ie.far&&(ie.far=De,ie.updateProjectionMatrix()),Un.setFromMatrixPosition(Y.matrixWorld),ie.position.copy(Un),ao.copy(ie.position),ao.add(H0[j]),ie.up.copy(G0[j]),ie.lookAt(ao),ie.updateMatrixWorld(),we.makeTranslation(-Un.x,-Un.y,-Un.z),xu.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xu,ie.coordinateSystem,ie.reversedDepth)}else V.updateMatrices(Y);r=V.getFrustum(),M(R,x,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&b(V,x),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(S,P,L)};function b(E,R){const x=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xt(n.x,n.y,{format:Si,type:Jt})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,x,m,v,null)}function A(E,R,x,S){let P=null;const L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=P.uuid,J=R.uuid;let te=l[B];te===void 0&&(te={},l[B]=te);let G=te[J];G===void 0&&(G=P.clone(),te[J]=G,R.addEventListener("dispose",T)),P=G}if(P.visible=R.visible,P.wireframe=R.wireframe,S===Fn?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=i.properties.get(P);B.light=x}return P}function M(E,R,x,S,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Fn)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const B=e.update(E),J=E.material;if(Array.isArray(J)){const te=B.groups;for(let G=0,Y=te.length;G<Y;G++){const V=te[G],re=J[V.materialIndex];if(re&&re.visible){const se=A(E,re,S,P);E.onBeforeShadow(i,E,R,x,B,se,V),i.renderBufferDirect(x,null,B,se,E,V),E.onAfterShadow(i,E,R,x,B,se,V)}}}else if(J.visible){const te=A(E,J,S,P);E.onBeforeShadow(i,E,R,x,B,te,null),i.renderBufferDirect(x,null,B,te,E,null),E.onAfterShadow(i,E,R,x,B,te,null)}}const L=E.children;for(let B=0,J=L.length;B<J;B++)M(L[B],R,x,S,P)}function T(E){E.target.removeEventListener("dispose",T);for(const R in l){const x=l[R],S=E.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function X0(i,e){function t(){let I=!1;const K=new ht;let le=null;const pe=new ht(0,0,0,0);return{setMask:function(xe){le!==xe&&!I&&(i.colorMask(xe,xe,xe,xe),le=xe)},setLocked:function(xe){I=xe},setClear:function(xe,ne,Ae,_e,wt){wt===!0&&(xe*=_e,ne*=_e,Ae*=_e),K.set(xe,ne,Ae,_e),pe.equals(K)===!1&&(i.clearColor(xe,ne,Ae,_e),pe.copy(K))},reset:function(){I=!1,le=null,pe.set(-1,0,0,0)}}}function r(){let I=!1,K=!1,le=null,pe=null,xe=null;return{setReversed:function(ne){if(K!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),K=ne;const _e=xe;xe=null,this.setClear(_e)}},getReversed:function(){return K},setTest:function(ne){ne?Q(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ne){le!==ne&&!I&&(i.depthMask(ne),le=ne)},setFunc:function(ne){if(K&&(ne=wp[ne]),pe!==ne){switch(ne){case yo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case sn:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ne}},setLocked:function(ne){I=ne},setClear:function(ne){xe!==ne&&(xe=ne,K&&(ne=1-ne),i.clearDepth(ne))},reset:function(){I=!1,le=null,pe=null,xe=null,K=!1}}}function n(){let I=!1,K=null,le=null,pe=null,xe=null,ne=null,Ae=null,_e=null,wt=null;return{setTest:function(ot){I||(ot?Q(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ot){K!==ot&&!I&&(i.stencilMask(ot),K=ot)},setFunc:function(ot,qt,kt){(le!==ot||pe!==qt||xe!==kt)&&(i.stencilFunc(ot,qt,kt),le=ot,pe=qt,xe=kt)},setOp:function(ot,qt,kt){(ne!==ot||Ae!==qt||_e!==kt)&&(i.stencilOp(ot,qt,kt),ne=ot,Ae=qt,_e=kt)},setLocked:function(ot){I=ot},setClear:function(ot){wt!==ot&&(i.clearStencil(ot),wt=ot)},reset:function(){I=!1,K=null,le=null,pe=null,xe=null,ne=null,Ae=null,_e=null,wt=null}}}const a=new t,s=new r,o=new n,c=new WeakMap,l=new WeakMap;let u={},h={},d={},m=new WeakMap,f=[],v=null,p=!1,g=null,b=null,A=null,M=null,T=null,E=null,R=null,x=new be(0,0,0),S=0,P=!1,L=null,B=null,J=null,te=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,re=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(se)[1]),V=re>=1):se.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),V=re>=2);let N=null,j={};const ie=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),De=new ht().fromArray(ie),Re=new ht().fromArray(we);function Z(I,K,le,pe){const xe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(I,ne),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<le;Ae++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(K+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ne}const oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),s.setFunc(sn),dt(!1),_t(ec),Q(i.CULL_FACE),Je(Pr);function Q(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Le(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function ke(I,K){return d[I]!==K?(i.bindFramebuffer(I,K),d[I]=K,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function ve(I,K){let le=f,pe=!1;if(I){le=m.get(K),le===void 0&&(le=[],m.set(K,le));const xe=I.textures;if(le.length!==xe.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=xe.length;ne<Ae;ne++)le[ne]=i.COLOR_ATTACHMENT0+ne;le.length=xe.length,pe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,pe=!0);pe&&i.drawBuffers(le)}function et(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const rt={[_i]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[qd]:i.FUNC_REVERSE_SUBTRACT};rt[Yd]=i.MIN,rt[Kd]=i.MAX;const Be={[$d]:i.ZERO,[Zd]:i.ONE,[Jd]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[rp]:i.DST_COLOR,[ep]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[ap]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(I,K,le,pe,xe,ne,Ae,_e,wt,ot){if(I===Pr){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),I!==Xd){if(I!==g||ot!==P){if((b!==_i||T!==_i)&&(i.blendEquation(i.FUNC_ADD),b=_i,T=_i),ot)switch(I){case en:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",I);break}else switch(I){case en:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",I);break}A=null,M=null,E=null,R=null,x.set(0,0,0),S=0,g=I,P=ot}return}xe=xe||K,ne=ne||le,Ae=Ae||pe,(K!==b||xe!==T)&&(i.blendEquationSeparate(rt[K],rt[xe]),b=K,T=xe),(le!==A||pe!==M||ne!==E||Ae!==R)&&(i.blendFuncSeparate(Be[le],Be[pe],Be[ne],Be[Ae]),A=le,M=pe,E=ne,R=Ae),(_e.equals(x)===!1||wt!==S)&&(i.blendColor(_e.r,_e.g,_e.b,wt),x.copy(_e),S=wt),g=I,P=!1}function nt(I,K){I.side===ar?Le(i.CULL_FACE):Q(i.CULL_FACE);let le=I.side===jt;K&&(le=!le),dt(le),I.blending===en&&I.transparent===!1?Je(Pr):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function _t(I){I!==Hd?(Q(i.CULL_FACE),I!==B&&(I===ec?i.cullFace(i.BACK):I===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),B=I}function pt(I){I!==J&&(V&&i.lineWidth(I),J=I)}function Mt(I,K,le){I?(Q(i.POLYGON_OFFSET_FILL),(te!==K||G!==le)&&(te=K,G=le,s.getReversed()&&(K=-K),i.polygonOffset(K,le))):Le(i.POLYGON_OFFSET_FILL)}function He(I){I?Q(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function xt(I){I===void 0&&(I=i.TEXTURE0+Y-1),N!==I&&(i.activeTexture(I),N=I)}function U(I,K,le){le===void 0&&(N===null?le=i.TEXTURE0+Y-1:le=N);let pe=j[le];pe===void 0&&(pe={type:void 0,texture:void 0},j[le]=pe),(pe.type!==I||pe.texture!==K)&&(N!==le&&(i.activeTexture(le),N=le),i.bindTexture(I,K||oe[I]),pe.type=I,pe.texture=K)}function Dt(){const I=j[N];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function _(){try{i.texSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function k(){try{i.texSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function fe(){try{i.texStorage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function he(){try{i.texStorage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function O(){try{i.texImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function ce(){try{i.texImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function de(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function Te(I,K){h[I]!==K&&(i.pixelStorei(I,K),h[I]=K)}function ae(I){De.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function Ue(I){Re.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Re.copy(I))}function Ne(I,K){let le=l.get(K);le===void 0&&(le=new WeakMap,l.set(K,le));let pe=le.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(K,I.name),le.set(I,pe))}function ze(I,K){const le=l.get(K).get(I);c.get(K)!==le&&(i.uniformBlockBinding(K,le,I.__bindingPointIndex),c.set(K,le))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},N=null,j={},d={},m=new WeakMap,f=[],v=null,p=!1,g=null,b=null,A=null,M=null,T=null,E=null,R=null,x=new be(0,0,0),S=0,P=!1,L=null,B=null,J=null,te=null,G=null,De.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Q,disable:Le,bindFramebuffer:ke,drawBuffers:ve,useProgram:et,setBlending:Je,setMaterial:nt,setFlipSided:dt,setCullFace:_t,setLineWidth:pt,setPolygonOffset:Mt,setScissorTest:He,activeTexture:xt,bindTexture:U,unbindTexture:Dt,compressedTexImage2D:tt,compressedTexImage3D:w,texImage2D:O,texImage3D:ce,pixelStorei:Te,getParameter:de,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:fe,texStorage3D:he,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:q,scissor:ae,viewport:Ue,reset:Ge}}function j0(i,e,t,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,u=new WeakMap,h=new Set;let d;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return f?new OffscreenCanvas(w,_):Yn("canvas")}function p(w,_,k){let X=1;const q=tt(w);if((q.width>k||q.height>k)&&(X=k/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const fe=Math.floor(X*q.width),he=Math.floor(X*q.height);d===void 0&&(d=v(fe,he));const O=_?v(fe,he):d;return O.width=fe,O.height=he,O.getContext("2d").drawImage(w,0,0,fe,he),Ce("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+fe+"x"+he+")."),O}else return"data"in w&&Ce("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function g(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,_,k,X,q,fe=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;X&&(he=e.get("EXT_texture_norm16"),he||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=_;if(_===i.RED&&(k===i.FLOAT&&(O=i.R32F),k===i.HALF_FLOAT&&(O=i.R16F),k===i.UNSIGNED_BYTE&&(O=i.R8),k===i.UNSIGNED_SHORT&&he&&(O=he.R16_EXT),k===i.SHORT&&he&&(O=he.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.R8UI),k===i.UNSIGNED_SHORT&&(O=i.R16UI),k===i.UNSIGNED_INT&&(O=i.R32UI),k===i.BYTE&&(O=i.R8I),k===i.SHORT&&(O=i.R16I),k===i.INT&&(O=i.R32I)),_===i.RG&&(k===i.FLOAT&&(O=i.RG32F),k===i.HALF_FLOAT&&(O=i.RG16F),k===i.UNSIGNED_BYTE&&(O=i.RG8),k===i.UNSIGNED_SHORT&&he&&(O=he.RG16_EXT),k===i.SHORT&&he&&(O=he.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RG8UI),k===i.UNSIGNED_SHORT&&(O=i.RG16UI),k===i.UNSIGNED_INT&&(O=i.RG32UI),k===i.BYTE&&(O=i.RG8I),k===i.SHORT&&(O=i.RG16I),k===i.INT&&(O=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RGB8UI),k===i.UNSIGNED_SHORT&&(O=i.RGB16UI),k===i.UNSIGNED_INT&&(O=i.RGB32UI),k===i.BYTE&&(O=i.RGB8I),k===i.SHORT&&(O=i.RGB16I),k===i.INT&&(O=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),k===i.UNSIGNED_INT&&(O=i.RGBA32UI),k===i.BYTE&&(O=i.RGBA8I),k===i.SHORT&&(O=i.RGBA16I),k===i.INT&&(O=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&he&&(O=he.RGB16_EXT),k===i.SHORT&&he&&(O=he.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),_===i.RGBA){const ce=fe?ns:Ke.getTransfer(q);k===i.FLOAT&&(O=i.RGBA32F),k===i.HALF_FLOAT&&(O=i.RGBA16F),k===i.UNSIGNED_BYTE&&(O=ce===st?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&he&&(O=he.RGBA16_EXT),k===i.SHORT&&he&&(O=he.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function T(w,_){let k;return w?_===null||_===Nr||_===Wn?k=i.DEPTH24_STENCIL8:_===or?k=i.DEPTH32F_STENCIL8:_===Gn&&(k=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nr||_===Wn?k=i.DEPTH_COMPONENT24:_===or?k=i.DEPTH_COMPONENT32F:_===Gn&&(k=i.DEPTH_COMPONENT16),k}function E(w,_){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){const _=w.target;_.removeEventListener("dispose",R),S(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function x(w){const _=w.target;_.removeEventListener("dispose",x),L(_)}function S(w){const _=r.get(w);if(_.__webglInit===void 0)return;const k=w.source,X=m.get(k);if(X){const q=X[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(w),Object.keys(X).length===0&&m.delete(k)}r.remove(w)}function P(w){const _=r.get(w);i.deleteTexture(_.__webglTexture);const k=w.source,X=m.get(k);delete X[_.__cacheKey],s.memory.textures--}function L(w){const _=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let q=0;q<_.__webglFramebuffer[X].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[X][q]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=w.textures;for(let X=0,q=k.length;X<q;X++){const fe=r.get(k[X]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),s.memory.textures--),r.remove(k[X])}r.remove(w)}let B=0;function J(){B=0}function te(){return B}function G(w){B=w}function Y(){const w=B;return w>=n.maxTextures&&Ce("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),B+=1,w}function V(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function re(w,_){const k=r.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const X=w.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,w,_);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function se(w,_){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Le(k,w,_);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function N(w,_){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Le(k,w,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function j(w,_){const k=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){ke(k,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const ie={[ln]:i.REPEAT,[Rr]:i.CLAMP_TO_EDGE,[ts]:i.MIRRORED_REPEAT},we={[Rt]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Bn]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Wr]:i.LINEAR_MIPMAP_LINEAR},De={[gp]:i.NEVER,[Mp]:i.ALWAYS,[vp]:i.LESS,[Fl]:i.LEQUAL,[_p]:i.EQUAL,[Bl]:i.GEQUAL,[xp]:i.GREATER,[yp]:i.NOTEQUAL};function Re(w,_){if(_.type===or&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===qa||_.magFilter===Bn||_.magFilter===Wr||_.minFilter===Ct||_.minFilter===qa||_.minFilter===Bn||_.minFilter===Wr)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ie[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,De[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Rt||_.minFilter!==Bn&&_.minFilter!==Wr||_.type===or&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Z(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));const X=_.source;let q=m.get(X);q===void 0&&(q={},m.set(X,q));const fe=V(_);if(fe!==w.__cacheKey){q[fe]===void 0&&(q[fe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),q[fe].usedTimes++;const he=q[w.__cacheKey];he!==void 0&&(q[w.__cacheKey].usedTimes--,he.usedTimes===0&&P(_)),w.__cacheKey=fe,w.__webglTexture=q[fe].texture}return k}function oe(w,_,k){return Math.floor(Math.floor(w/k)/_)}function Q(w,_,k,X){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{q.sort((de,Te)=>de.start-Te.start);let fe=0;for(let de=1;de<q.length;de++){const Te=q[fe],ae=q[de],Ue=Te.start+Te.count,Ne=oe(ae.start,_.width,4),ze=oe(Te.start,_.width,4);ae.start<=Ue+1&&Ne===ze&&oe(ae.start+ae.count-1,_.width,4)===Ne?Te.count=Math.max(Te.count,ae.start+ae.count-Te.start):(++fe,q[fe]=ae)}q.length=fe+1;const he=t.getParameter(i.UNPACK_ROW_LENGTH),O=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let de=0,Te=q.length;de<Te;de++){const ae=q[de],Ue=Math.floor(ae.start/4),Ne=Math.ceil(ae.count/4),ze=Ue%_.width,Ge=Math.floor(Ue/_.width),I=Ne;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,ze,Ge,I,1,k,X,_.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,O),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Le(w,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const q=Z(w,_),fe=_.source;t.bindTexture(X,w.__webglTexture,i.TEXTURE0+k);const he=r.get(fe);if(fe.version!==he.__version||q===!0){if(t.activeTexture(i.TEXTURE0+k),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){const K=Ke.getPrimaries(Ke.workingColorSpace),le=_.colorSpace===si?null:Ke.getPrimaries(_.colorSpace),pe=_.colorSpace===si||K===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let O=p(_.image,!1,n.maxTextureSize);O=Dt(_,O);const ce=a.convert(_.format,_.colorSpace),de=a.convert(_.type);let Te=M(_.internalFormat,ce,de,_.normalized,_.colorSpace,_.isVideoTexture);Re(X,_);let ae;const Ue=_.mipmaps,Ne=_.isVideoTexture!==!0,ze=he.__version===void 0||q===!0,Ge=fe.dataReady,I=E(_,O);if(_.isDepthTexture)Te=T(_.format===yi,_.type),ze&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Te,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,Te,O.width,O.height,0,ce,de,null));else if(_.isDataTexture)if(Ue.length>0){Ne&&ze&&t.texStorage2D(i.TEXTURE_2D,I,Te,Ue[0].width,Ue[0].height);for(let K=0,le=Ue.length;K<le;K++)ae=Ue[K],Ne?Ge&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,de,ae.data):t.texImage2D(i.TEXTURE_2D,K,Te,ae.width,ae.height,0,ce,de,ae.data);_.generateMipmaps=!1}else Ne?(ze&&t.texStorage2D(i.TEXTURE_2D,I,Te,O.width,O.height),Ge&&Q(_,O,ce,de)):t.texImage2D(i.TEXTURE_2D,0,Te,O.width,O.height,0,ce,de,O.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,Te,Ue[0].width,Ue[0].height,O.depth);for(let K=0,le=Ue.length;K<le;K++)if(ae=Ue[K],_.format!==lr)if(ce!==null)if(Ne){if(Ge)if(_.layerUpdates.size>0){const pe=$c(ae.width,ae.height,_.format,_.type);for(const xe of _.layerUpdates){const ne=ae.data.subarray(xe*pe/ae.data.BYTES_PER_ELEMENT,(xe+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,xe,ae.width,ae.height,1,ce,ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,O.depth,ce,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Te,ae.width,ae.height,O.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,O.depth,ce,de,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Te,ae.width,ae.height,O.depth,0,ce,de,ae.data)}else{Ne&&ze&&t.texStorage2D(i.TEXTURE_2D,I,Te,Ue[0].width,Ue[0].height);for(let K=0,le=Ue.length;K<le;K++)ae=Ue[K],_.format!==lr?ce!==null?Ne?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Te,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Ge&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,de,ae.data):t.texImage2D(i.TEXTURE_2D,K,Te,ae.width,ae.height,0,ce,de,ae.data)}else if(_.isDataArrayTexture)if(Ne){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,Te,O.width,O.height,O.depth),Ge)if(_.layerUpdates.size>0){const K=$c(O.width,O.height,_.format,_.type);for(const le of _.layerUpdates){const pe=O.data.subarray(le*K/O.data.BYTES_PER_ELEMENT,(le+1)*K/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,O.width,O.height,1,ce,de,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ce,de,O.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,O.width,O.height,O.depth,0,ce,de,O.data);else if(_.isData3DTexture)Ne?(ze&&t.texStorage3D(i.TEXTURE_3D,I,Te,O.width,O.height,O.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ce,de,O.data)):t.texImage3D(i.TEXTURE_3D,0,Te,O.width,O.height,O.depth,0,ce,de,O.data);else if(_.isFramebufferTexture){if(ze)if(Ne)t.texStorage2D(i.TEXTURE_2D,I,Te,O.width,O.height);else{let K=O.width,le=O.height;for(let pe=0;pe<I;pe++)t.texImage2D(i.TEXTURE_2D,pe,Te,K,le,0,ce,de,null),K>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),O.parentNode!==K){K.appendChild(O),h.add(_),K.onpaint=le=>{const pe=le.changedElements;for(const xe of h)pe.includes(xe.image)&&(xe.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,O);else{const le=i.RGBA,pe=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,pe,xe,O)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ne&&ze){const K=tt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,I,Te,K.width,K.height)}for(let K=0,le=Ue.length;K<le;K++)ae=Ue[K],Ne?Ge&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ce,de,ae):t.texImage2D(i.TEXTURE_2D,K,Te,ce,de,ae);_.generateMipmaps=!1}else if(Ne){if(ze){const K=tt(O);t.texStorage2D(i.TEXTURE_2D,I,Te,K.width,K.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,de,O)}else t.texImage2D(i.TEXTURE_2D,0,Te,ce,de,O);g(_)&&b(X),he.__version=fe.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ke(w,_,k){if(_.image.length!==6)return;const X=Z(w,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const fe=r.get(q);if(q.version!==fe.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const he=Ke.getPrimaries(Ke.workingColorSpace),O=_.colorSpace===si?null:Ke.getPrimaries(_.colorSpace),ce=_.colorSpace===si||he===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let ne=0;ne<6;ne++)!de&&!Te?ae[ne]=p(_.image[ne],!0,n.maxCubemapSize):ae[ne]=Te?_.image[ne].image:_.image[ne],ae[ne]=Dt(_,ae[ne]);const Ue=ae[0],Ne=a.convert(_.format,_.colorSpace),ze=a.convert(_.type),Ge=M(_.internalFormat,Ne,ze,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,K=fe.__version===void 0||X===!0,le=q.dataReady;let pe=E(_,Ue);Re(i.TEXTURE_CUBE_MAP,_);let xe;if(de){I&&K&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,Ue.width,Ue.height);for(let ne=0;ne<6;ne++){xe=ae[ne].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const _e=xe[Ae];_.format!==lr?Ne!==null?I?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,_e.width,_e.height,Ne,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ge,_e.width,_e.height,0,_e.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,_e.width,_e.height,Ne,ze,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ge,_e.width,_e.height,0,Ne,ze,_e.data)}}}else{if(xe=_.mipmaps,I&&K){xe.length>0&&pe++;const ne=tt(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ae[ne].width,ae[ne].height,Ne,ze,ae[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,ae[ne].width,ae[ne].height,0,Ne,ze,ae[ne].data);for(let Ae=0;Ae<xe.length;Ae++){const _e=xe[Ae].image[ne].image;I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,_e.width,_e.height,Ne,ze,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ge,_e.width,_e.height,0,Ne,ze,_e.data)}}else{I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,ze,ae[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Ne,ze,ae[ne]);for(let Ae=0;Ae<xe.length;Ae++){const _e=xe[Ae];I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ne,ze,_e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ge,Ne,ze,_e.image[ne])}}}g(_)&&b(i.TEXTURE_CUBE_MAP),fe.__version=q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ve(w,_,k,X,q,fe){const he=a.convert(k.format,k.colorSpace),O=a.convert(k.type),ce=M(k.internalFormat,he,O,k.normalized,k.colorSpace),de=r.get(_),Te=r.get(k);if(Te.__renderTarget=_,!de.__hasExternalTextures){const ae=Math.max(1,_.width>>fe),Ue=Math.max(1,_.height>>fe);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,fe,ce,ae,Ue,_.depth,0,he,O,null):t.texImage2D(q,fe,ce,ae,Ue,0,he,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,q,Te.__webglTexture,0,He(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,q,Te.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const X=_.depthTexture,q=X&&X.isDepthTexture?X.type:null,fe=T(_.stencilBuffer,q),he=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(_),fe,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(_),fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,w)}else{const X=_.textures;for(let q=0;q<X.length;q++){const fe=X[q],he=a.convert(fe.format,fe.colorSpace),O=a.convert(fe.type),ce=M(fe.internalFormat,he,O,fe.normalized,fe.colorSpace);xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(_),ce,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(w,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=r.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Re(i.TEXTURE_CUBE_MAP,_.depthTexture);const de=a.convert(_.depthTexture.format),Te=a.convert(_.depthTexture.type);let ae;_.depthTexture.format===qr?ae=i.DEPTH_COMPONENT24:_.depthTexture.format===yi&&(ae=i.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,ae,_.width,_.height,0,de,Te,null)}}else re(_.depthTexture,0);const fe=q.__webglTexture,he=He(_),O=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ce=_.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===qr)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,O,fe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ce,O,fe,0);else if(_.depthTexture.format===yi)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,O,fe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ce,O,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(w){const _=r.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)rt(_.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?rt(_.__webglFramebuffer[0],w,0):rt(_.__webglFramebuffer,w,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),et(_.__webglDepthbuffer[X],w,!1);else{const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,fe)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),et(_.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(w,_,k){const X=r.get(w);_!==void 0&&ve(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Be(w)}function nt(w){const _=w.texture,k=r.get(w),X=r.get(_);w.addEventListener("dispose",x);const q=w.textures,fe=w.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,s.memory.textures++),fe){k.__webglFramebuffer=[];for(let O=0;O<6;O++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[O]=[];for(let ce=0;ce<_.mipmaps.length;ce++)k.__webglFramebuffer[O][ce]=i.createFramebuffer()}else k.__webglFramebuffer[O]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let O=0;O<_.mipmaps.length;O++)k.__webglFramebuffer[O]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(he)for(let O=0,ce=q.length;O<ce;O++){const de=r.get(q[O]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&xt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let O=0;O<q.length;O++){const ce=q[O];k.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[O]);const de=a.convert(ce.format,ce.colorSpace),Te=a.convert(ce.type),ae=M(ce.internalFormat,de,Te,ce.normalized,ce.colorSpace,w.isXRRenderTarget===!0),Ue=He(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,k.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),et(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Re(i.TEXTURE_CUBE_MAP,_);for(let O=0;O<6;O++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)ve(k.__webglFramebuffer[O][ce],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ce);else ve(k.__webglFramebuffer[O],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);g(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let O=0,ce=q.length;O<ce;O++){const de=q[O],Te=r.get(de);let ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Te.__webglTexture),Re(ae,de),ve(k.__webglFramebuffer,w,de,i.COLOR_ATTACHMENT0+O,ae,0),g(de)&&b(ae)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,X.__webglTexture),Re(O,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)ve(k.__webglFramebuffer[ce],w,_,i.COLOR_ATTACHMENT0,O,ce);else ve(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,O,0);g(_)&&b(O),t.unbindTexture()}w.depthBuffer&&Be(w)}function dt(w){const _=w.textures;for(let k=0,X=_.length;k<X;k++){const q=_[k];if(g(q)){const fe=A(w),he=r.get(q).__webglTexture;t.bindTexture(fe,he),b(fe),t.unbindTexture()}}}const _t=[],pt=[];function Mt(w){if(w.samples>0){if(xt(w)===!1){const _=w.textures,k=w.width,X=w.height;let q=i.COLOR_BUFFER_BIT;const fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=r.get(w),O=_.length>1;if(O)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ce=w.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<_.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const Te=r.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,q,i.NEAREST),c===!0&&(_t.length=0,pt.length=0,_t.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push(fe),pt.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const Te=r.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(w){return Math.min(n.maxSamples,w.samples)}function xt(w){const _=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(w){const _=s.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Dt(w,_){const k=w.colorSpace,X=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==er&&k!==si&&(Ke.getTransfer(k)===st?(X!==lr||q!==Zt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",k)),_}function tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.getTextureUnits=te,this.setTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=se,this.setTexture3D=N,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q0(i,e){function t(r,n=si){let a;const s=Ke.getTransfer(n);if(r===Zt)return i.UNSIGNED_BYTE;if(r===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===lh)return i.BYTE;if(r===ch)return i.SHORT;if(r===Gn)return i.UNSIGNED_SHORT;if(r===Pl)return i.INT;if(r===Nr)return i.UNSIGNED_INT;if(r===or)return i.FLOAT;if(r===Jt)return i.HALF_FLOAT;if(r===dh)return i.ALPHA;if(r===ph)return i.RGB;if(r===lr)return i.RGBA;if(r===qr)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===Il)return i.RED;if(r===Dl)return i.RED_INTEGER;if(r===Si)return i.RG;if(r===Ul)return i.RG_INTEGER;if(r===Ol)return i.RGBA_INTEGER;if(r===Ya||r===Ka||r===$a||r===Za)if(s===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ao||r===Ro||r===Co||r===Po)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lo||r===No||r===Io||r===Do||r===Uo||r===rs||r===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lo||r===No)return s===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Io)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Do)return a.COMPRESSED_R11_EAC;if(r===Uo)return a.COMPRESSED_SIGNED_R11_EAC;if(r===rs)return a.COMPRESSED_RG11_EAC;if(r===Oo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fo||r===Bo||r===ko||r===zo||r===Vo||r===Ho||r===Go||r===Wo||r===Xo||r===jo||r===qo||r===Yo||r===Ko||r===$o)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ko)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ho)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Go)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yo)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ko)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$o)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zo||r===Jo||r===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zo)return s===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===el||r===tl||r===is||r===rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===el)return a.COMPRESSED_RED_RGTC1_EXT;if(r===tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===is)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ft({vertexShader:Y0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new pn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends bi{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,f=null;const v=typeof XRWebGLBinding<"u",p=new $0,g={},b=t.getContextAttributes();let A=null,M=null;const T=[],E=[],R=new Pe;let x=null;const S=new Wt;S.viewport=new ht;const P=new Wt;P.viewport=new ht;const L=[S,P],B=new Kf;let J=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ls,T[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ls,T[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ls,T[Z]=oe),oe.getHandSpace()};function G(Z){const oe=E.indexOf(Z.inputSource);if(oe===-1)return;const Q=T[oe];Q!==void 0&&(Q.update(Z.inputSource,Z.frame,l||s),Q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",V);for(let Z=0;Z<T.length;Z++){const oe=E[Z];oe!==null&&(E[Z]=null,T[Z].disconnect(oe))}J=null,te=null,p.reset();for(const Z in g)delete g[Z];e.setRenderTarget(A),m=null,d=null,h=null,n=null,M=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,r.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,r.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Q=null,Le=null;b.depth&&(Le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?yi:qr,Q=b.stencil?Wn:Nr);const ke={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(ke),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xt(d.textureWidth,d.textureHeight,{format:lr,type:Zt,depthTexture:new un(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,oe),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Xt(m.framebufferWidth,m.framebufferHeight,{format:lr,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),Re.setContext(n),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(Z){for(let oe=0;oe<Z.removed.length;oe++){const Q=Z.removed[oe],Le=E.indexOf(Q);Le>=0&&(E[Le]=null,T[Le].disconnect(Q))}for(let oe=0;oe<Z.added.length;oe++){const Q=Z.added[oe];let Le=E.indexOf(Q);if(Le===-1){for(let ve=0;ve<T.length;ve++)if(ve>=E.length){E.push(Q),Le=ve;break}else if(E[ve]===null){E[ve]=Q,Le=ve;break}if(Le===-1)break}const ke=T[Le];ke&&ke.connect(Q)}}const re=new D,se=new D;function N(Z,oe,Q){re.setFromMatrixPosition(oe.matrixWorld),se.setFromMatrixPosition(Q.matrixWorld);const Le=re.distanceTo(se),ke=oe.projectionMatrix.elements,ve=Q.projectionMatrix.elements,et=ke[14]/(ke[10]-1),rt=ke[14]/(ke[10]+1),Be=(ke[9]+1)/ke[5],Je=(ke[9]-1)/ke[5],nt=(ke[8]-1)/ke[0],dt=(ve[8]+1)/ve[0],_t=et*nt,pt=et*dt,Mt=Le/(-nt+dt),He=Mt*-nt;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const xt=et+Mt,U=rt+Mt,Dt=_t-He,tt=pt+(Le-He),w=Be*rt/U*xt,_=Je*rt/U*xt;Z.projectionMatrix.makePerspective(Dt,tt,w,_,xt,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function j(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let oe=Z.near,Q=Z.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(Q=p.depthFar)),B.near=P.near=S.near=oe,B.far=P.far=S.far=Q,(J!==B.near||te!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,te=B.far),B.layers.mask=Z.layers.mask|6,S.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;const Le=Z.parent,ke=B.cameras;j(B,Le);for(let ve=0;ve<ke.length;ve++)j(ke[ve],Le);ke.length===2?N(B,S,P):B.projectionMatrix.copy(S.projectionMatrix),ie(Z,B,Le)};function ie(Z,oe,Q){Q===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let we=null;function De(Z,oe){if(u=oe.getViewerPose(l||s),f=oe,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Le=!1;Q.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let ve=0;ve<Q.length;ve++){const et=Q[ve];let rt=null;if(m!==null)rt=m.getViewport(et);else{const Je=h.getViewSubImage(d,et);rt=Je.viewport,ve===0&&(e.setRenderTargetTextures(M,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(M))}let Be=L[ve];Be===void 0&&(Be=new Wt,Be.layers.enable(ve),Be.viewport=new ht,L[ve]=Be),Be.matrix.fromArray(et.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(et.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(rt.x,rt.y,rt.width,rt.height),ve===0&&(B.matrix.copy(Be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Be)}const ke=n.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){h=r.getBinding();const ve=h.getDepthInformation(Q[0]);ve&&ve.isValid&&ve.texture&&p.init(ve,n.renderState)}if(ke&&ke.includes("camera-access")&&v){e.state.unbindTexture(),h=r.getBinding();for(let ve=0;ve<Q.length;ve++){const et=Q[ve].camera;if(et){let rt=g[et];rt||(rt=new wh,g[et]=rt);const Be=h.getCameraImage(et);rt.sourceTexture=Be}}}}for(let Q=0;Q<T.length;Q++){const Le=E[Q],ke=T[Q];Le!==null&&ke!==void 0&&ke.update(Le,oe,l||s)}we&&we(Z,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),f=null}const Re=new Ih;Re.setAnimationLoop(De),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}}const J0=new Xe,zh=new We;zh.set(-1,0,0,0,1,0,0,0,1);function Q0(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function r(p,g){g.color.getRGB(p.fogColor.value,Ah(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,b,A,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(p,g):g.isMeshLambertMaterial?(a(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(p,g),h(p,g)):g.isMeshPhongMaterial?(a(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(p,g),d(p,g),g.isMeshPhysicalMaterial&&m(p,g,M)):g.isMeshMatcapMaterial?(a(p,g),f(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),v(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,A):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===jt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===jt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),A=b.envMap,M=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function ex(i,e,t,r){let n={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const E=T.program;r.uniformBlockBinding(M,E)}function l(M,T){let E=n[M.id];E===void 0&&(p(M),E=u(M),n[M.id]=E,M.addEventListener("dispose",b));const R=T.program;r.updateUBOMapping(M,R);const x=e.render.frame;a[M.id]!==x&&(d(M),a[M.id]=x)}function u(M){const T=h();M.__bindingPointIndex=T;const E=i.createBuffer(),R=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const T=n[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,S=E.length;x<S;x++){const P=E[x];if(Array.isArray(P))for(let L=0,B=P.length;L<B;L++)m(P[L],x,L,R);else m(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,T,E,R){if(v(M,T,E,R)===!0){const x=M.__offset,S=M.value;if(Array.isArray(S)){let P=0;for(let L=0;L<S.length;L++){const B=S[L],J=g(B);f(B,M.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function f(M,T,E){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,E)}function v(M,T,E,R){const x=M.value,S=T+"_"+E;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{const P=R[S];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(M){const T=M.uniforms;let E=0;const R=16;for(let S=0,P=T.length;S<P;S++){const L=Array.isArray(T[S])?T[S]:[T[S]];for(let B=0,J=L.length;B<J;B++){const te=L[B],G=Array.isArray(te.value)?te.value:[te.value];for(let Y=0,V=G.length;Y<V;Y++){const re=G[Y],se=g(re),N=E%R,j=N%se.boundary,ie=N+j;E+=j,ie!==0&&R-ie<se.storage&&(E+=R-ie),te.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=se.storage}}}const x=E%R;return x>0&&(E+=R-x),M.__size=E,M.__cache={},this}function g(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),T}function b(M){const T=M.target;T.removeEventListener("dispose",b);const E=s.indexOf(T.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(n[T.id]),delete n[T.id],delete a[T.id]}function A(){for(const M in n)i.deleteBuffer(n[M]);s=[],n={},a={}}return{bind:c,update:l,dispose:A}}const tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Er=null;function rx(){return Er===null&&(Er=new _s(tx,16,16,Si,Jt),Er.name="DFG_LUT",Er.minFilter=Ct,Er.magFilter=Ct,Er.wrapS=Rr,Er.wrapT=Rr,Er.generateMipmaps=!1,Er.needsUpdate=!0),Er}class ix{constructor(e={}){const{canvas:t=Tp(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const v=m,p=new Set([Ol,Ul,Dl]),g=new Set([Zt,Nr,Gn,Wn,Ll,Nl]),b=new Uint32Array(4),A=new Int32Array(4),M=new D;let T=null,E=null;const R=[],x=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,B=null,J=null,te=null,G=null;this._outputColorSpace=At;let Y=0,V=0,re=null,se=-1,N=null;const j=new ht,ie=new ht;let we=null;const De=new be(0);let Re=0,Z=t.width,oe=t.height,Q=1,Le=null,ke=null;const ve=new ht(0,0,Z,oe),et=new ht(0,0,Z,oe);let rt=!1;const Be=new Gl;let Je=!1,nt=!1;const dt=new Xe,_t=new D,pt=new ht,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function xt(){return re===null?Q:1}let U=r;function Dt(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",qt,!1),U===null){const F="webgl2";if(U=Dt(F,y),U===null)throw Dt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Fe("WebGLRenderer: "+y.message),y}let tt,w,_,k,X,q,fe,he,O,ce,de,Te,ae,Ue,Ne,ze,Ge,I,K,le,pe,xe,ne;function Ae(){tt=new r_(U),tt.init(),pe=new q0(U,tt),w=new Yv(U,tt,e,pe),_=new X0(U,tt),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),J=U.createFramebuffer(),te=U.createFramebuffer(),G=U.createFramebuffer(),k=new a_(U),X=new L0,q=new j0(U,tt,_,X,w,pe,k),fe=new t_(P),he=new cm(U),xe=new jv(U,he),O=new i_(U,he,k,xe),ce=new o_(U,O,he,xe,k),I=new s_(U,w,q),Ne=new Kv(X),de=new P0(P,fe,tt,w,xe,Ne),Te=new Q0(P,X),ae=new I0,Ue=new k0(tt),Ge=new Xv(P,fe,_,ce,f,c),ze=new W0(P,ce,w),ne=new ex(U,k,w,_),K=new qv(U,tt,k),le=new n_(U,tt,k),k.programs=de.programs,P.capabilities=w,P.extensions=tt,P.properties=X,P.renderLists=ae,P.shadowMap=ze,P.state=_,P.info=k}Ae(),v!==Zt&&(S=new c_(v,t.width,t.height,o,n,a));const _e=new Z0(P,U);this.xr=_e,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(Z,oe,!1))},this.getSize=function(y){return y.set(Z,oe)},this.setSize=function(y,F,W=!0){if(_e.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,oe=F,t.width=Math.floor(y*Q),t.height=Math.floor(F*Q),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Z*Q,oe*Q).floor()},this.setDrawingBufferSize=function(y,F,W){Z=y,oe=F,Q=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===Zt){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,F,W,H){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,F,W,H),_.viewport(j.copy(ve).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,F,W,H){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,F,W,H),_.scissor(ie.copy(et).multiplyScalar(Q).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(y){_.setScissorTest(rt=y)},this.setOpaqueSort=function(y){Le=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,W=!0){let H=0;if(y){let z=!1;if(re!==null){const ue=re.texture.format;z=p.has(ue)}if(z){const ue=re.texture.type,me=g.has(ue),Me=Ge.getClearColor(),Se=Ge.getClearAlpha(),Ie=Me.r,C=Me.g,$=Me.b;me?(b[0]=Ie,b[1]=C,b[2]=$,b[3]=Se,U.clearBufferuiv(U.COLOR,0,b)):(A[0]=Ie,A[1]=C,A[2]=$,A[3]=Se,U.clearBufferiv(U.COLOR,0,A))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),Ge.dispose(),ae.dispose(),Ue.dispose(),X.dispose(),fe.dispose(),ce.dispose(),xe.dispose(),ne.dispose(),de.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",yn),_e.removeEventListener("sessionend",Sr),br.stop()};function wt(y){y.preventDefault(),as("WebGLRenderer: Context Lost."),L=!0}function ot(){as("WebGLRenderer: Context Restored."),L=!1;const y=k.autoReset,F=ze.enabled,W=ze.autoUpdate,H=ze.needsUpdate,z=ze.type;Ae(),k.autoReset=y,ze.enabled=F,ze.autoUpdate=W,ze.needsUpdate=H,ze.type=z}function qt(y){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function kt(y){const F=y.target;F.removeEventListener("dispose",kt),ia(F)}function ia(y){na(y),X.remove(y)}function na(y){const F=X.get(y).programs;F!==void 0&&(F.forEach(function(W){de.releaseProgram(W)}),y.isShaderMaterial&&de.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,H,z,ue){F===null&&(F=Mt);const me=z.isMesh&&z.matrixWorld.determinantAffine()<0,Me=oa(y,F,W,H,z);_.setMaterial(H,me);let Se=W.index,Ie=1;if(H.wireframe===!0){if(Se=O.getWireframeAttribute(W),Se===void 0)return;Ie=2}const C=W.drawRange,$=W.attributes.position;let ee=C.start*Ie,ye=(C.start+C.count)*Ie;ue!==null&&(ee=Math.max(ee,ue.start*Ie),ye=Math.min(ye,(ue.start+ue.count)*Ie)),Se!==null?(ee=Math.max(ee,0),ye=Math.min(ye,Se.count)):$!=null&&(ee=Math.max(ee,0),ye=Math.min(ye,$.count));const Ve=ye-ee;if(Ve<0||Ve===1/0)return;xe.setup(z,H,Me,W,Se);let Qe,qe=K;if(Se!==null&&(Qe=he.get(Se),qe=le,qe.setIndex(Qe)),z.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*xt()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if(z.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),_.setLineWidth(Ye*xt()),z.isLineSegments?qe.setMode(U.LINES):z.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else z.isPoints?qe.setMode(U.POINTS):z.isSprite&&qe.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))qe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ye=z._multiDrawStarts,Ee=z._multiDrawCounts,Oe=z._multiDrawCount,Ut=Se?he.get(Se).bytesPerElement:1,Nt=X.get(H).currentProgram.getUniforms();for(let zt=0;zt<Oe;zt++)Nt.setValue(U,"_gl_DrawID",zt),qe.render(Ye[zt]/Ut,Ee[zt])}else if(z.isInstancedMesh)qe.renderInstances(ee,Ve,z.count);else if(W.isInstancedBufferGeometry){const Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Ye);qe.renderInstances(ee,Ve,Ee)}else qe.render(ee,Ve)};function aa(y,F,W){y.transparent===!0&&y.side===ar&&y.forceSinglePass===!1?(y.side=jt,y.needsUpdate=!0,tr(y,F,W),y.side=Lr,y.needsUpdate=!0,tr(y,F,W),y.side=ar):tr(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),E=Ue.get(W),E.init(F),x.push(E),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==W&&y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const H=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const Me=ue[me];aa(Me,W,z),H.add(Me)}else aa(ue,W,z),H.add(ue)}),E=x.pop(),H},this.compileAsync=function(y,F,W=null){const H=this.compile(y,F,W);return new Promise(z=>{function ue(){if(H.forEach(function(me){X.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){z(y);return}setTimeout(ue,10)}tt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dr=null;function sa(y){dr&&dr(y)}function yn(){br.stop()}function Sr(){br.start()}const br=new Ih;br.setAnimationLoop(sa),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(y){dr=y,_e.setAnimationLoop(y),y===null?br.stop():br.start()},_e.addEventListener("sessionstart",yn),_e.addEventListener("sessionend",Sr),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(y,F);const W=_e.enabled===!0&&_e.isPresenting===!0,H=S!==null&&(re===null||W)&&S.begin(P,re);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(F),F=_e.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,F,re),E=Ue.get(y,x.length),E.init(F),E.state.textureUnits=q.getTextureUnits(),x.push(E),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(dt,Cr,F.reversedDepth),nt=this.localClippingEnabled,Je=Ne.init(this.clippingPlanes,nt),T=ae.get(y,R.length),T.init(),R.push(T),_e.enabled===!0&&_e.isPresenting===!0){const ue=P.xr.getDepthSensingMesh();ue!==null&&Yt(ue,F,-1/0,P.sortObjects)}Yt(y,F,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Le,ke,F.reversedDepth),He=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,He&&Ge.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ne.beginShadows();const z=E.state.shadowsArray;if(ze.render(z,y,F),Je===!0&&Ne.endShadows(),(H&&S.hasRenderPass())===!1){const ue=T.opaque,me=T.transmissive;if(E.setupLights(),F.isArrayCamera){const Me=F.cameras;if(me.length>0)for(let Se=0,Ie=Me.length;Se<Ie;Se++){const C=Me[Se];wi(ue,me,y,C)}He&&Ge.render(y);for(let Se=0,Ie=Me.length;Se<Ie;Se++){const C=Me[Se];Ei(T,y,C,C.viewport)}}else me.length>0&&wi(ue,me,y,F),He&&Ge.render(y),Ei(T,y,F)}re!==null&&V===0&&(q.updateMultisampleRenderTarget(re),q.updateRenderTargetMipmap(re)),H&&S.end(P),y.isScene===!0&&y.onAfterRender(P,y,F),xe.resetDefaultState(),se=-1,N=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),Je===!0&&Ne.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,B!==null&&B.renderEnd()};function Yt(y,F,W,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){H&&pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(dt);const ue=ce.update(y),me=y.material;me.visible&&T.push(y,ue,me,W,pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const ue=ce.update(y),me=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),pt.copy(ue.boundingSphere.center)),pt.applyMatrix4(y.matrixWorld).applyMatrix4(dt)),Array.isArray(me)){const Me=ue.groups;for(let Se=0,Ie=Me.length;Se<Ie;Se++){const C=Me[Se],$=me[C.materialIndex];$&&$.visible&&T.push(y,ue,$,W,pt.z,C)}}else me.visible&&T.push(y,ue,me,W,pt.z,null)}}const z=y.children;for(let ue=0,me=z.length;ue<me;ue++)Yt(z[ue],F,W,H)}function Ei(y,F,W,H){const{opaque:z,transmissive:ue,transparent:me}=y;E.setupLightsView(W),Je===!0&&Ne.setGlobalState(P.clippingPlanes,W),H&&_.viewport(j.copy(H)),z.length>0&&hi(z,F,W),ue.length>0&&hi(ue,F,W),me.length>0&&hi(me,F,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function wi(y,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const $=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Xt(1,1,{generateMipmaps:!0,type:$?Jt:Zt,minFilter:Wr,samples:Math.max(4,w.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const z=E.state.transmissionRenderTarget[H.id],ue=H.viewport||j;z.setSize(ue.z*P.transmissionResolutionScale,ue.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Me=P.getActiveCubeFace(),Se=P.getActiveMipmapLevel();P.setRenderTarget(z),P.getClearColor(De),Re=P.getClearAlpha(),Re<1&&P.setClearColor(16777215,.5),P.clear(),He&&Ge.render(W);const Ie=P.toneMapping;P.toneMapping=xr;const C=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Je===!0&&Ne.setGlobalState(P.clippingPlanes,H),hi(y,W,H),q.updateMultisampleRenderTarget(z),q.updateRenderTargetMipmap(z),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $=!1;for(let ee=0,ye=F.length;ee<ye;ee++){const Ve=F[ee],{object:Qe,geometry:qe,material:Ye,group:Ee}=Ve;if(Ye.side===ar&&Qe.layers.test(H.layers)){const Oe=Ye.side;Ye.side=jt,Ye.needsUpdate=!0,Mn(Qe,W,H,qe,Ye,Ee),Ye.side=Oe,Ye.needsUpdate=!0,$=!0}}$===!0&&(q.updateMultisampleRenderTarget(z),q.updateRenderTargetMipmap(z))}P.setRenderTarget(me,Me,Se),P.setClearColor(De,Re),C!==void 0&&(H.viewport=C),P.toneMapping=Ie}function hi(y,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ue=y.length;z<ue;z++){const me=y[z],{object:Me,geometry:Se,group:Ie}=me;let C=me.material;C.allowOverride===!0&&H!==null&&(C=H),Me.layers.test(W.layers)&&Mn(Me,F,W,Se,C,Ie)}}function Mn(y,F,W,H,z,ue){y.onBeforeRender(P,F,W,H,z,ue),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,F,W,H,y,ue),z.transparent===!0&&z.side===ar&&z.forceSinglePass===!1?(z.side=jt,z.needsUpdate=!0,P.renderBufferDirect(W,F,H,z,y,ue),z.side=Lr,z.needsUpdate=!0,P.renderBufferDirect(W,F,H,z,y,ue),z.side=ar):P.renderBufferDirect(W,F,H,z,y,ue),y.onAfterRender(P,F,W,H,z,ue)}function tr(y,F,W){F.isScene!==!0&&(F=Mt);const H=X.get(y),z=E.state.lights,ue=E.state.shadowsArray,me=z.state.version,Me=de.getParameters(y,z.state,ue,F,W,E.state.lightProbeGridArray),Se=de.getProgramCacheKey(Me);let Ie=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const C=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=fe.get(y.envMap||H.environment,C),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",kt),Ie=new Map,H.programs=Ie);let $=Ie.get(Se);if($!==void 0){if(H.currentProgram===$&&H.lightsStateVersion===me)return Ri(y,Me),$}else Me.uniforms=de.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,W,Me),y.onBeforeCompile(Me,P),$=de.acquireProgram(Me,Se),Ie.set(Se,$),H.uniforms=Me.uniforms;const ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ee.clippingPlanes=Ne.uniform),Ri(y,Me),H.needsLights=Or(y),H.lightsStateVersion=me,H.needsLights&&(ee.ambientLightColor.value=z.state.ambient,ee.lightProbe.value=z.state.probe,ee.directionalLights.value=z.state.directional,ee.directionalLightShadows.value=z.state.directionalShadow,ee.spotLights.value=z.state.spot,ee.spotLightShadows.value=z.state.spotShadow,ee.rectAreaLights.value=z.state.rectArea,ee.ltc_1.value=z.state.rectAreaLTC1,ee.ltc_2.value=z.state.rectAreaLTC2,ee.pointLights.value=z.state.point,ee.pointLightShadows.value=z.state.pointShadow,ee.hemisphereLights.value=z.state.hemi,ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ee.spotLightMatrix.value=z.state.spotLightMatrix,ee.spotLightMap.value=z.state.spotLightMap,ee.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=$,H.uniformsList=null,$}function Ai(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Ja.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Ri(y,F){const W=X.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ss(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=y.length;W<H;W++){const z=y[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function oa(y,F,W,H,z){F.isScene!==!0&&(F=Mt),q.resetTextureUnits();const ue=F.fog,me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Me=re===null?P.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ke.workingColorSpace,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ie=fe.get(H.envMap||me,Se),C=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ee=!!W.morphAttributes.position,ye=!!W.morphAttributes.normal,Ve=!!W.morphAttributes.color;let Qe=xr;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qe=P.toneMapping);const qe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=qe!==void 0?qe.length:0,Ee=X.get(H),Oe=E.state.lights;if(Je===!0&&(nt===!0||y!==N)){const at=y===N&&H.id===se;Ne.setState(H,y,at)}let Ut=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Oe.state.version||Ee.outputColorSpace!==Me||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Ie||H.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ne.numPlanes||Ee.numIntersection!==Ne.numIntersection)||Ee.vertexAlphas!==C||Ee.vertexTangents!==$||Ee.morphTargets!==ee||Ee.morphNormals!==ye||Ee.morphColors!==Ve||Ee.toneMapping!==Qe||Ee.morphTargetsCount!==Ye||!!Ee.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,Ee.__version=H.version);let Nt=Ee.currentProgram;Ut===!0&&(Nt=tr(H,F,z),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Nt,Ee));let zt=!1,pr=!1,Fr=!1;const it=Nt.getUniforms(),mt=Ee.uniforms;if(_.useProgram(Nt.program)&&(zt=!0,pr=!0,Fr=!0),H.id!==se&&(se=H.id,pr=!0),Ee.needsLights){const at=Ss(E.state.lightProbeGridArray,z);Ee.lightProbeGrid!==at&&(Ee.lightProbeGrid=at,pr=!0)}if(zt||N!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(U,"projectionMatrix",y.projectionMatrix),it.setValue(U,"viewMatrix",y.matrixWorldInverse);const at=it.map.cameraPosition;at!==void 0&&at.setValue(U,_t.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&it.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),N!==y&&(N=y,pr=!0,Fr=!0)}if(Ee.needsLights&&(Oe.state.directionalShadowMap.length>0&&it.setValue(U,"directionalShadowMap",Oe.state.directionalShadowMap,q),Oe.state.spotShadowMap.length>0&&it.setValue(U,"spotShadowMap",Oe.state.spotShadowMap,q),Oe.state.pointShadowMap.length>0&&it.setValue(U,"pointShadowMap",Oe.state.pointShadowMap,q)),z.isSkinnedMesh){it.setOptional(U,z,"bindMatrix"),it.setOptional(U,z,"bindMatrixInverse");const at=z.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),it.setValue(U,"boneTexture",at.boneTexture,q))}z.isBatchedMesh&&(it.setOptional(U,z,"batchingTexture"),it.setValue(U,"batchingTexture",z._matricesTexture,q),it.setOptional(U,z,"batchingIdTexture"),it.setValue(U,"batchingIdTexture",z._indirectTexture,q),it.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&it.setValue(U,"batchingColorTexture",z._colorsTexture,q));const rr=W.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&I.update(z,W,Nt),(pr||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,it.setValue(U,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(mt.envMapIntensity.value=F.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=rx()),pr){if(it.setValue(U,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&Ci(mt,Fr),ue&&H.fog===!0&&Te.refreshFogUniforms(mt,ue),Te.refreshMaterialUniforms(mt,H,Q,oe,E.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.lightProbeGrid){const at=Ee.lightProbeGrid;mt.probesSH.value=at.texture,mt.probesMin.value.copy(at.boundingBox.min),mt.probesMax.value.copy(at.boundingBox.max),mt.probesResolution.value.copy(at.resolution)}Ja.upload(U,Ai(Ee),mt,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ja.upload(U,Ai(Ee),mt,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(U,"center",z.center),it.setValue(U,"modelViewMatrix",z.modelViewMatrix),it.setValue(U,"normalMatrix",z.normalMatrix),it.setValue(U,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){const at=H.uniformsGroups;for(let di=0,fr=at.length;di<fr;di++){const Sn=at[di];ne.update(Sn,Nt),ne.bind(Sn,Nt)}}return Nt}function Ci(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Or(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(y,F,W){const H=X.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=F,X.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const W=X.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,W=0){re=y,Y=F,V=W;let H=null,z=!1,ue=!1;if(y){const me=X.get(y);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),j.copy(y.viewport),ie.copy(y.scissor),we=y.scissorTest,_.viewport(j),_.scissor(ie),_.setScissorTest(we),se=-1;return}else if(me.__webglFramebuffer===void 0)q.setupRenderTarget(y);else if(me.__hasExternalTextures)q.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&X.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const Se=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Se[F])?H=Se[F][W]:H=Se[F],z=!0):y.samples>0&&q.useMultisampledRTT(y)===!1?H=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[W]:H=Se,j.copy(y.viewport),ie.copy(y.scissor),we=y.scissorTest}else j.copy(ve).multiplyScalar(Q).floor(),ie.copy(et).multiplyScalar(Q).floor(),we=rt;if(W!==0&&(H=J),_.bindFramebuffer(U.FRAMEBUFFER,H)&&_.drawBuffers(y,H),_.viewport(j),_.scissor(ie),_.setScissorTest(we),z){const me=X.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,W)}else if(ue){const me=F;for(let Me=0;Me<y.textures.length;Me++){const Se=X.get(y.textures[Me]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Me,Se.__webglTexture,W,me)}}else if(y!==null&&W!==0){const me=X.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,W)}se=-1},this.readRenderTargetPixels=function(y,F,W,H,z,ue,me,Me=0){if(!(y&&y.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){_.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Ie=y.textures[Me],C=Ie.format,$=Ie.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(C)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable($)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&W>=0&&W<=y.height-z&&U.readPixels(F,W,H,z,pe.convert(C),pe.convert($),ue)}finally{const Ie=re!==null?X.get(re).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,H,z,ue,me,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se)if(F>=0&&F<=y.width-H&&W>=0&&W<=y.height-z){_.bindFramebuffer(U.FRAMEBUFFER,Se);const Ie=y.textures[Me],C=Ie.format,$=Ie.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(C))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(F,W,H,z,pe.convert(C),pe.convert($),0);const ye=re!==null?X.get(re).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,ye);const Ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ep(U,Ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(ee),U.deleteSync(Ve),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,W=0){const H=Math.pow(2,-W),z=Math.floor(y.image.width*H),ue=Math.floor(y.image.height*H),me=F!==null?F.x:0,Me=F!==null?F.y:0;q.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,me,Me,z,ue),_.unbindTexture()},this.copyTextureToTexture=function(y,F,W=null,H=null,z=0,ue=0){let me,Me,Se,Ie,C,$,ee,ye,Ve;const Qe=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(W!==null)me=W.max.x-W.min.x,Me=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,C=W.min.y,$=W.isBox3?W.min.z:0;else{const mt=Math.pow(2,-z);me=Math.floor(Qe.width*mt),Me=Math.floor(Qe.height*mt),y.isDataArrayTexture?Se=Qe.depth:y.isData3DTexture?Se=Math.floor(Qe.depth*mt):Se=1,Ie=0,C=0,$=0}H!==null?(ee=H.x,ye=H.y,Ve=H.z):(ee=0,ye=0,Ve=0);const qe=pe.convert(F.format),Ye=pe.convert(F.type);let Ee;F.isData3DTexture?(q.setTexture3D(F,0),Ee=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),Ee=U.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),Ee=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Oe=_.getParameter(U.UNPACK_ROW_LENGTH),Ut=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Nt=_.getParameter(U.UNPACK_SKIP_PIXELS),zt=_.getParameter(U.UNPACK_SKIP_ROWS),pr=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),_.pixelStorei(U.UNPACK_SKIP_ROWS,C),_.pixelStorei(U.UNPACK_SKIP_IMAGES,$);const Fr=y.isDataArrayTexture||y.isData3DTexture,it=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const mt=X.get(y),rr=X.get(F),at=X.get(mt.__renderTarget),di=X.get(rr.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,at.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fr=0;fr<Se;fr++)Fr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(y).__webglTexture,z,$+fr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,ue,Ve+fr)),U.blitFramebuffer(Ie,C,me,Me,ee,ye,me,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||X.has(y)){const mt=X.get(y),rr=X.get(F);_.bindFramebuffer(U.READ_FRAMEBUFFER,te),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let at=0;at<Se;at++)Fr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,z,$+at):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,z),it?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rr.__webglTexture,ue,Ve+at):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rr.__webglTexture,ue),z!==0?U.blitFramebuffer(Ie,C,me,Me,ee,ye,me,Me,U.COLOR_BUFFER_BIT,U.NEAREST):it?U.copyTexSubImage3D(Ee,ue,ee,ye,Ve+at,Ie,C,me,Me):U.copyTexSubImage2D(Ee,ue,ee,ye,Ie,C,me,Me);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ee,ue,ee,ye,Ve,me,Me,Se,qe,Ye,Qe.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ue,ee,ye,Ve,me,Me,Se,qe,Qe.data):U.texSubImage3D(Ee,ue,ee,ye,Ve,me,Me,Se,qe,Ye,Qe):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,ee,ye,me,Me,qe,Ye,Qe.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,ee,ye,Qe.width,Qe.height,qe,Qe.data):U.texSubImage2D(U.TEXTURE_2D,ue,ee,ye,me,Me,qe,Ye,Qe);_.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(U.UNPACK_SKIP_ROWS,zt),_.pixelStorei(U.UNPACK_SKIP_IMAGES,pr),ue===0&&F.generateMipmaps&&U.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?q.setTextureCube(y,0):y.isData3DTexture?q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?q.setTexture2DArray(y,0):q.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Y=0,V=0,re=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function yu(i,e){if(e===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===il||e===fh){let t=i.getIndex();if(t===null){const s=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const r=t.count-2,n=[];if(e===il)for(let s=1;s<=r;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function nx(i){const e=new Map,t=new Map,r=i.clone();return Vh(i,r,function(n,a){e.set(a,n),t.set(n,a)}),r.traverse(function(n){if(!n.isSkinnedMesh)return;const a=n,s=e.get(n),o=s.skeleton.bones;a.skeleton=s.skeleton.clone(),a.bindMatrix.copy(s.bindMatrix),a.skeleton.bones=o.map(function(c){return t.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),r}function Vh(i,e,t){t(i,e);for(let r=0;r<i.children.length;r++)Vh(i.children[r],e.children[r],t)}class ax extends vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new Mu(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mu(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new bx(t)})}load(e,t,r,n){const a=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Hn.extractUrlBase(e);s=Hn.resolveURL(l,this.path)}else s=Hn.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){n?n(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Ph(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},r,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,n){let a;const s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hh){try{s[$e.KHR_BINARY_GLTF]=new Tx(e)}catch(u){n&&n(u);return}a=JSON.parse(s[$e.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Fx(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,s[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const h=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:s[h]=new lx;break;case $e.KHR_DRACO_MESH_COMPRESSION:s[h]=new Ex(a,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:s[h]=new wx;break;case $e.KHR_MESH_QUANTIZATION:s[h]=new Ax;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(r,n)}parseAsync(e,t){const r=this;return new Promise(function(n,a){r.parse(e,t,n,a)})}}function sx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function St(i,e,t){const r=i.json.materials[e];return r.extensions&&r.extensions[t]?r.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ox{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,n=t.length;r<n;r++){const a=t[r];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let n=t.cache.get(r);if(n)return n;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const c=new be(16777215);s.color!==void 0&&c.setRGB(s.color[0],s.color[1],s.color[2],er);const l=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new jf(c),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Wf(c),o.distance=l;break;case"spot":o=new Hf(c),o.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),wr(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),n=Promise.resolve(o),t.cache.add(r,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,n=r.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return r._getNodeRef(t.cache,a,s)})}}class lx{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,r){const n=[];e.color=new be(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],er),e.opacity=s[3]}a.baseColorTexture!==void 0&&n.push(r.assignTexture(e,"map",a.baseColorTexture,At))}return Promise.all(n)}}class cx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);return r===null||r.emissiveStrength!==void 0&&(t.emissiveIntensity=r.emissiveStrength),Promise.resolve()}}class ux{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(n)}}class hx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);return r===null||(t.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}}class px{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],er)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",r.sheenColorTexture,At)),r.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}}class fx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}}class mx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],er),Promise.all(n)}}class gx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);return r===null||(t.ior=r.ior!==void 0?r.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class vx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],er),r.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",r.specularColorTexture,At)),Promise.all(n)}}class _x{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}}class xx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ur:null}extendMaterialParams(e,t){const r=St(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}}class yx{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,n=r.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const a=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class Mx{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,r=this.parser,n=r.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let c=r.textureLoader;if(o.uri){const l=r.options.manager.getHandler(o.uri);l!==null&&(c=l)}return r.loadTextureImage(e,s.source,c)}}class Sx{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,r=this.parser,n=r.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let c=r.textureLoader;if(o.uri){const l=r.options.manager.getHandler(o.uri);l!==null&&(c=l)}return r.loadTextureImage(e,s.source,c)}}class Mu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const n=r.extensions[this.name],a=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=n.byteOffset||0,l=n.byteLength||0,u=n.count,h=n.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,n.mode,n.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(m),u,h,d,n.mode,n.filter),m})})}else return null}}class bx{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const n=t.meshes[r.mesh];for(const c of n.primitives)if(c.mode!==nr.TRIANGLES&&c.mode!==nr.TRIANGLE_STRIP&&c.mode!==nr.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=r.extensions[this.name].attributes,s=[],o={};for(const c in a)s.push(this.parser.getDependency("accessor",a[c]).then(l=>(o[c]=l,o[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{const l=c.pop(),u=l.isGroup?l.children:[l],h=c[0].count,d=[];for(const m of u){const f=new Xe,v=new D,p=new Ir,g=new D(1,1,1),b=new mf(m.geometry,m.material,h);for(let A=0;A<h;A++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,A),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,A),o.SCALE&&g.fromBufferAttribute(o.SCALE,A),b.setMatrixAt(A,f.compose(v,p,g));for(const A in o)if(A==="_COLOR_0"){const M=o[A];b.instanceColor=new sl(M.array,M.itemSize,M.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&m.geometry.setAttribute(A,o[A]);gt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const Hh="glTF",On=12,Su={JSON:1313821514,BIN:5130562};class Tx{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,On),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-On,a=new DataView(e,On);let s=0;for(;s<n;){const o=a.getUint32(s,!0);s+=4;const c=a.getUint32(s,!0);if(s+=4,c===Su.JSON){const l=new Uint8Array(e,On+s,o);this.content=r.decode(l)}else if(c===Su.BIN){const l=On+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ex{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,n=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(const u in s){const h=hl[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=hl[u]||u.toLowerCase();if(s[u]!==void 0){const d=r.accessors[e.attributes[u]],m=nn[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(h,d){n.decodeDracoFile(u,function(m){for(const f in m.attributes){const v=m.attributes[f],p=c[f];p!==void 0&&(v.normalized=p)}h(m)},o,l,er,d)})})}}class wx{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ax{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Gh extends fn{constructor(e,t,r,n){super(e,t,r,n)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n*3+n;for(let s=0;s!==n;s++)t[s]=r[a+s];return t}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=n-t,h=(r-t)/u,d=h*h,m=d*h,f=e*l,v=f-l,p=-2*m+3*d,g=m-d,b=1-p,A=g-d+h;for(let M=0;M!==o;M++){const T=s[v+M+o],E=s[v+M+c]*u,R=s[f+M+o],x=s[f+M]*u;a[M]=b*T+A*E+p*R+g*x}return a}}const Rx=new Ir;class Cx extends Gh{interpolate_(e,t,r,n){const a=super.interpolate_(e,t,r,n);return Rx.fromArray(a).normalize().toArray(a),a}}const nr={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bu={9728:Rt,9729:Ct,9984:oh,9985:qa,9986:Bn,9987:Wr},Tu={33071:Rr,33648:ts,10497:ln},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Px={CUBICSPLINE:void 0,LINEAR:jn,STEP:Xn},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Lr})),i.DefaultMaterial}function vi(i,e,t){for(const r in t.extensions)i[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function wr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nx(i,e,t){let r=!1,n=!1,a=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(r=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(a=!0),r&&n&&a)break}if(!r&&!n&&!a)return Promise.resolve(i);const s=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(r){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;s.push(d)}if(n){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(a){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return r&&(i.morphAttributes.position=u),n&&(i.morphAttributes.normal=h),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ix(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let r=0,n=t.length;r<n;r++)i.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dx(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lo(t.attributes):e=i.indices+":"+lo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let r=0,n=i.targets.length;r<n;r++)e+=":"+lo(i.targets[r]);return e}function lo(i){let e="";const t=Object.keys(i).sort();for(let r=0,n=t.length;r<n;r++)e+=t[r]+":"+i[t[r]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ux(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ox=new Xe;class Fx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,n=-1,a=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);n=r&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&n<17||a&&s<98?this.textureLoader=new zf(this.options.manager):this.textureLoader=new qf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,n=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:r,userData:{}};return vi(a,o,n),wr(o,n),Promise.all(r._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let n=0,a=t.length;n<a;n++){const s=t[n].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let n=0,a=e.length;n<a;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const n=r.clone(),a=(s,o)=>{const c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(const[l,u]of s.children.entries())a(u,o.children[l])};return a(r,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const n=e(t[r]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let n=0;n<t.length;n++){const a=e(t[n]);a&&r.push(a)}return r}getDependency(e,t){const r=e+":"+t;let n=this.cache.get(r);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":n=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(r,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(a,s){return r.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(a,s){r.load(Hn.resolveURL(t.uri,n.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const n=t.byteLength||0,a=t.byteOffset||0;return r.slice(a,a+n)})}loadAccessor(e){const t=this,r=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=so[n.type],o=nn[n.componentType],c=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new ut(l,s,c))}const a=[];return n.bufferView!==void 0?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),n.sparse!==void 0&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],c=so[n.type],l=nn[n.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=n.byteOffset||0,m=n.bufferView!==void 0?r.bufferViews[n.bufferView].byteStride:void 0,f=n.normalized===!0;let v,p;if(m&&m!==h){const g=Math.floor(d/m),b="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let A=t.cache.get(b);A||(v=new l(o,g*m,n.count*m/u),A=new yh(v,m/u),t.cache.add(b,A)),p=new Kn(A,c,d%m/u,f)}else o===null?v=new l(n.count*c):v=new l(o,d,n.count*c),p=new ut(v,c,f);if(n.sparse!==void 0){const g=so.SCALAR,b=nn[n.sparse.indices.componentType],A=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,T=new b(s[1],A,n.sparse.count*g),E=new l(s[2],M,n.sparse.count*c);o!==null&&(p=new ut(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,x=T.length;R<x;R++){const S=T[R];if(p.setX(S,E[R*c]),c>=2&&p.setY(S,E[R*c+1]),c>=3&&p.setZ(S,E[R*c+2]),c>=4&&p.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=f}return p})}loadTexture(e){const t=this.json,r=this.options,n=t.textures[e].source,a=t.images[n];let s=this.textureLoader;if(a.uri){const o=r.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,r){const n=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,r).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(a.samplers||{})[s.sampler]||{};return u.magFilter=bu[h.magFilter]||Ct,u.minFilter=bu[h.minFilter]||Wr,u.wrapS=Tu[h.wrapS]||ln,u.wrapT=Tu[h.wrapT]||ln,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==Ct,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const r=this,n=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=n.images[e],o=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=r.getDependency("bufferView",s.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let f=d;t.isImageBitmapLoader===!0&&(f=function(v){const p=new yt(v);p.needsUpdate=!0,d(p)}),t.load(Hn.resolveURL(h,a.path),f,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),wr(h,s),h.userData.mimeType=s.mimeType||Ux(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,r,n){const a=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),a.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=r.extensions!==void 0?r.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(s);s=a.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const n=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+r.uuid;let c=this.cache.get(o);c||(c=new Th,hr.prototype.copy.call(c,r),c.color.copy(r.color),c.map=r.map,c.sizeAttenuation=!1,this.cache.add(o,c)),r=c}else if(e.isLine){const o="LineBasicMaterial:"+r.uuid;let c=this.cache.get(o);c||(c=new xs,hr.prototype.copy.call(c,r),c.color.copy(r.color),c.map=r.map,this.cache.add(o,c)),r=c}if(n||a||s){let o="ClonedMaterial:"+r.uuid+":";n&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=r.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(r))),r=c}e.material=r}getMaterialType(){return Wl}loadMaterial(e){const t=this,r=this.json,n=this.extensions,a=r.materials[e];let s;const o={},c=a.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=n[$e.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(o,a,t))}else{const h=a.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],er),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=ar);const u=a.alphaMode||oo.OPAQUE;if(u===oo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===oo.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==li&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Pe(1,1),a.normalTexture.scale!==void 0)){const h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&s!==li&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==li){const h=a.emissiveFactor;o.emissive=new be().setRGB(h[0],h[1],h[2],er)}return a.emissiveTexture!==void 0&&s!==li&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,At)),Promise.all(l).then(function(){const h=new s(o);return a.name&&(h.name=a.name),wr(h,a),t.associations.set(h,{materials:e}),a.extensions&&vi(n,h,a),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,n=this.primitiveCache;function a(o){return r[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Eu(c,o,t)})}const s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Dx(l),h=n[u];if(h)s.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Eu(new Et,l,t),n[u]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,r=this.json,n=this.extensions,a=r.meshes[e],s=a.primitives,o=[];for(let c=0,l=s.length;c<l;c++){const u=s[c].material===void 0?Lx(this.cache):this.getDependency("material",s[c].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,f=u.length;m<f;m++){const v=u[m],p=s[m];let g;const b=l[m];if(p.mode===nr.TRIANGLES||p.mode===nr.TRIANGLE_STRIP||p.mode===nr.TRIANGLE_FAN||p.mode===void 0)g=a.isSkinnedMesh===!0?new df(v,b):new Bt(v,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===nr.TRIANGLE_STRIP?g.geometry=yu(g.geometry,fh):p.mode===nr.TRIANGLE_FAN&&(g.geometry=yu(g.geometry,il));else if(p.mode===nr.LINES)g=new ls(v,b);else if(p.mode===nr.LINE_STRIP)g=new ea(v,b);else if(p.mode===nr.LINE_LOOP)g=new xf(v,b);else if(p.mode===nr.POINTS)g=new cs(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Ix(g,a),g.name=t.createUniqueName(a.name||"mesh_"+e),wr(g,a),p.extensions&&vi(n,g,p),t.assignFinalMaterial(g),h.push(g)}for(let m=0,f=h.length;m<f;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return a.extensions&&vi(n,h[0],a),h[0];const d=new cr;a.extensions&&vi(n,d,a),t.associations.set(d,{meshes:e});for(let m=0,f=h.length;m<f;m++)d.add(h[m]);return d})}loadCamera(e){let t;const r=this.json.cameras[e],n=r[r.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new Wt(Gp.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):r.type==="orthographic"&&(t=new ra(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),wr(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let n=0,a=t.joints.length;n<a;n++)r.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(n){const a=n.pop(),s=n,o=[],c=[];for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h){o.push(h);const d=new Xe;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hl(o,c)})}loadAnimation(e){const t=this.json,r=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,s=[],o=[],c=[],l=[],u=[];for(let h=0,d=n.channels.length;h<d;h++){const m=n.channels[h],f=n.samplers[m.sampler],v=m.target,p=v.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,b=n.parameters!==void 0?n.parameters[f.output]:f.output;v.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",b)),l.push(f),u.push(v))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],f=h[2],v=h[3],p=h[4],g=[];for(let A=0,M=d.length;A<M;A++){const T=d[A],E=m[A],R=f[A],x=v[A],S=p[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const P=r._createAnimationTracks(T,E,R,x,S);if(P)for(let L=0;L<P.length;L++)g.push(P[L])}const b=new If(a,void 0,g);return wr(b,n),b})}createNodeMesh(e){const t=this.json,r=this,n=t.nodes[e];return n.mesh===void 0?null:r.getDependency("mesh",n.mesh).then(function(a){const s=r._getNodeRef(r.meshCache,n.mesh,a);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=n.weights.length;c<l;c++)o.morphTargetInfluences[c]=n.weights[c]}),s})}loadNode(e){const t=this.json,r=this,n=t.nodes[e],a=r._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,u=o.length;l<u;l++)s.push(r.getDependency("node",o[l]));const c=n.skin===void 0?Promise.resolve(null):r.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Ox)});for(let m=0,f=h.length;m<f;m++)u.add(h[m]);if(u.userData.pivot!==void 0&&h.length>0){const m=u.userData.pivot,f=h[0];u.pivot=new D().fromArray(m),u.position.x-=m[0],u.position.y-=m[1],u.position.z-=m[2],f.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,r=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?n.createUniqueName(a.name):"",o=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(n.getDependency("camera",a.camera).then(function(l){return n._getNodeRef(n.cameraCache,a.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(a.isBone===!0?u=new bh:l.length>1?u=new cr:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(a.name&&(u.userData.name=a.name,u.name=s),wr(u,a),a.extensions&&vi(r,u,a),a.matrix!==void 0){const h=new Xe;h.fromArray(a.matrix),u.applyMatrix4(h)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);if(!n.associations.has(u))n.associations.set(u,{});else if(a.mesh!==void 0&&n.meshCache.refs[a.mesh]>1){const h=n.associations.get(u);n.associations.set(u,{...h})}return n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],n=this,a=new cr;r.name&&(a.name=n.createUniqueName(r.name)),wr(a,r),r.extensions&&vi(t,a,r);const s=r.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(n.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){const d=c[u];d.parent!==null?a.add(nx(d)):a.add(d)}const l=u=>{const h=new Map;for(const[d,m]of n.associations)(d instanceof hr||d instanceof yt)&&h.set(d,m);return u.traverse(d=>{const m=n.associations.get(d);m!=null&&h.set(d,m)}),h};return n.associations=l(a),a})}_createAnimationTracks(e,t,r,n,a){const s=[],o=e.name?e.name:e.uuid,c=[];function l(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}ri[a.path]===ri.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(ri[a.path]){case ri.weights:u=Zn;break;case ri.rotation:u=Jn;break;case ri.translation:case ri.scale:u=us;break;default:switch(r.itemSize){case 1:u=Zn;break;case 2:case 3:default:u=us;break}break}const h=n.interpolation!==void 0?Px[n.interpolation]:jn,d=this._getArrayFromAccessor(r);for(let m=0,f=c.length;m<f;m++){const v=new u(c[m]+"."+ri[a.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=dl(t.constructor),n=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)n[a]=t[a]*r;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const r=this instanceof Jn?Cx:Gh;return new r(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Bx(i,e,t){const r=e.attributes,n=new Kr;if(r.POSITION!==void 0){const o=t.json.accessors[r.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(n.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const u=dl(nn[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new D,c=new D;for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,f=d.max;if(m!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(f[2]))),d.normalized){const v=dl(nn[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}i.boundingBox=n;const s=new Dr;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,i.boundingSphere=s}function Eu(i,e,t){const r=e.attributes,n=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){i.setAttribute(o,c)})}for(const s in r){const o=hl[s]||s.toLowerCase();o in i.attributes||n.push(a(r[s],o))}if(e.indices!==void 0&&!i.index){const s=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});n.push(s)}return Ke.workingColorSpace!==er&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),wr(i,e),Bx(i,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Nx(i,e.targets,t):i})}const Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kx=new ra(-1,1,1,-1,0,1);class zx extends Et{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const Vx=new zx;class Kl{constructor(e){this._mesh=new Bt(Vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hx extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$n.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kl(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class wu extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class Gx extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Pe);this._width=r.width,this._height=r.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hx(Qa),this.copyPass.material.blending=Pr,this.timer=new $f}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,a=this.passes.length;n<a;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wu!==void 0&&(s instanceof wu?r=!0:s instanceof Gx&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xx extends xn{constructor(e,t,r=null,n=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=n}}const jx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class dn extends xn{constructor(e,t=1,r,n){super(),this.strength=t,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(a,s,{type:Jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Xt(a,s,{type:Jt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Xt(a,s,{type:Jt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),s=Math.round(s/2)}const o=jx;this.highPassUniforms=$n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Pe(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$n.clone(Qa.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,premultipliedAlpha:!0,blending:vo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new Kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,n),this.renderTargetsVertical[a].setSize(r,n),this.separableBlurMaterials[a].uniforms.invSize.value=new Pe(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=dn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=dn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(r*r))/r);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}dn.BlurDirectionX=new Pe(1,0);dn.BlurDirectionY=new Pe(0,1);const za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qx extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=$n.clone(za.uniforms),this.material=new Rh({name:za.name,uniforms:this.uniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this._fsQuad=new Kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===El?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const hs="nexara.face-table/1",ds=["neutral","warm","pensive","concerned"],ps=600,Va=[.5,1.5],Ha=["yaw","pitch","roll"],Tt=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ii=i=>typeof i=="number"&&Number.isFinite(i),Yx=(i,e)=>Array.isArray(i)&&i.length===e.length&&i.every((t,r)=>typeof t=="string"&&t===e[r]);function Kx(i,e,t){const r=[];if(!Tt(i))return["face table is not an object"];const n=(f,v)=>{f||r.push(v)},a=(f,v,p)=>n(ii(v)&&(p?v>0:v>=0)&&v<=ps,`${f} must be a ${p?"positive":"non-negative"} number of seconds up to ${ps}`),s=(f,v)=>{if(!Tt(v))return void r.push(`${f} must be an object of target weights`);for(const[p,g]of Object.entries(v))e.includes(p)?ii(g)&&g>=0&&g<=1||r.push(`${f}.${p} must be a weight in 0..1`):r.push(`${f}.${p} is not a morph target of this asset`)},o=(f,v,p)=>{if(!Tt(v))return void r.push(`${f} must be {yaw, pitch, roll}`);for(const g of Ha)n(ii(v[g])&&Math.abs(v[g])<=p[g],`${f}.${g} must be a number within +/-${p[g]} degrees`)};n(i.schema===hs,`schema must be ${hs}`),n(typeof i.version=="string"&&/^\d+\.\d+\.\d+$/.test(i.version),"version must be MAJOR.MINOR.PATCH"),n(Yx(i.targets,e),`targets must be exactly ${e.join(", ")} in this order`);let c={yaw:0,pitch:0,roll:0};if(!Tt(i.headBoundsDeg)||!Ha.every(f=>ii(i.headBoundsDeg[f])))r.push("headBoundsDeg must be {yaw, pitch, roll}");else{c=i.headBoundsDeg;for(const f of Ha)n(c[f]>=0&&c[f]<=t[f],`headBoundsDeg.${f} must be within 0..${t[f]} (the asset's pivot bounds)`)}a("resetSeconds",i.resetSeconds,!0);const l=i.speech;if(!Tt(l))r.push("speech missing");else{if(n(typeof l.driver=="string"&&l.driver.length>0,"speech.driver must name the driver"),n(ii(l.rate)&&l.rate>0&&l.rate<=40,"speech.rate must be in (0, 40] characters per second"),n(ii(l.intensity)&&l.intensity>0&&l.intensity<=1,"speech.intensity must be in (0, 1]"),a("speech.lead",l.lead,!1),a("speech.attack",l.attack,!0),a("speech.release",l.release,!0),a("speech.settle",l.settle,!0),n(Number.isInteger(l.sampleHz)&&l.sampleHz>=30&&l.sampleHz<=1e3,"speech.sampleHz must be an integer in 30..1000"),!Tt(l.pauses))r.push("speech.pauses must be an object");else for(const[f,v]of Object.entries(l.pauses))n([...f].length===1,`speech.pauses key ${JSON.stringify(f)} must be one character`),a(`speech.pauses[${JSON.stringify(f)}]`,v,!1);if(!Tt(l.shapes))r.push("speech.shapes must be an object");else for(const[f,v]of Object.entries(l.shapes))n([...f].length===1&&f===f.toLowerCase(),`speech.shapes key ${JSON.stringify(f)} must be one lower-case character`),s(`speech.shapes[${JSON.stringify(f)}]`,v);s("speech.consonant",l.consonant),s("speech.digit",l.digit),s("speech.other",l.other)}const u=i.tilt;Tt(u)?(o("tilt.limitsDeg",u.limitsDeg,c),a("tilt.firstAt",u.firstAt,!1),a("tilt.interval",u.interval,!0),a("tilt.intervalSpread",u.intervalSpread,!1),a("tilt.endGuard",u.endGuard,!1),a("tilt.ease",u.ease,!0)):r.push("tilt missing");const h=Tt(i.presets)?i.presets:null;if(!h)r.push("presets must be an object");else for(const[f,v]of Object.entries(h)){if(!Tt(v)){r.push(`presets.${f} must be an object`);continue}n(typeof v.label=="string"&&v.label.length>0,`presets.${f}.label missing`),s(`presets.${f}.weights`,v.weights),o(`presets.${f}.head`,v.head,c)}const d=i.emotions;if(!Tt(d))r.push("emotions must map warm, pensive and concerned to presets");else{const f=ds.filter(v=>v!=="neutral");n(Object.keys(d).sort().join(",")===[...f].sort().join(","),`emotions must name exactly ${f.join(", ")} (neutral has no preset)`);for(const v of f)n(typeof d[v]=="string"&&!!h&&Tt(h[d[v]]),`emotions.${v} must name a preset`)}if(i.emotionGlow!==void 0){const f=i.emotionGlow,v=ds.filter(p=>p!=="neutral");if(!Tt(f)||Object.keys(f).sort().join(",")!==[...v].sort().join(","))r.push(`emotionGlow must give exactly ${v.join(", ")}`);else for(const p of v)n(ii(f[p])&&f[p]>=Va[0]&&f[p]<=Va[1],`emotionGlow.${p} must be a multiplier in ${Va[0]}..${Va[1]}`)}n(Tt(i.transition),"transition missing"),Tt(i.transition)&&a("transition.fade",i.transition.fade,!0);const m=i.sigh;if(!Tt(m)||!Array.isArray(m.keys)||m.keys.length<2)r.push("sigh must have at least two keys");else{n(typeof m.label=="string"&&m.label.length>0,"sigh.label missing");let f=-1;m.keys.forEach((v,p)=>{if(!Tt(v))return void r.push(`sigh.keys[${p}] must be an object`);a(`sigh.keys[${p}].t`,v.t,p>0),ii(v.t)&&(n(p===0?v.t===0:v.t>f,`sigh.keys[${p}].t must ${p===0?"be 0":"increase"}`),f=v.t),s(`sigh.keys[${p}].weights`,v.weights),o(`sigh.keys[${p}].head`,v.head,c)});for(const v of[0,m.keys.length-1]){const p=m.keys[v];Tt(p)&&Tt(p.weights)&&Tt(p.head)&&n(Object.values(p.weights).every(g=>g===0)&&Ha.every(g=>p.head[g]===0),`sigh.keys[${v}] must be exact neutral`)}}return r}function $x(i,e,t){let r;try{r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(i))}catch{throw new Error("face table is not valid UTF-8 JSON")}const n=Kx(r,e,t);if(n.length)throw new Error(`invalid face table: ${n.join("; ")}`);return r}const Au="0.5.2",co=["jawOpen","mouthWide","mouthFunnel","mouthPucker","mouthSmileLeft","mouthSmileRight","eyeBlinkLeft","eyeBlinkRight","browInnerUp","browDownLeft","browDownRight","mouthFrownLeft","mouthFrownRight","mouthPress"],Ga={yaw:4,pitch:3,roll:2},Zx=/^[0-9a-f]{64}$/,pl=/^(\d+)\.(\d+)\.(\d+)$/,Ru=["head","crown","core","mouthCavity"],Cu=["mouth","eyes","brow"];function vt(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Gt(i){return typeof i=="number"&&Number.isFinite(i)}function Ji(i){return Array.isArray(i)&&i.length===3&&i.every(Gt)}function Jx(i){return Array.isArray(i)&&i.every(e=>typeof e=="string"&&e.length>0)}function Qx(i){return typeof i!="string"||!i||i.length>200||!/^[A-Za-z0-9._\/-]+$/.test(i)||i.startsWith("/")?!1:i.split("/").every(e=>e!==""&&e!=="."&&e!=="..")}const Pu="@nexara/avatar-runtime",Lu=["hologram-a"];function uo(i,e){const t=pl.exec(i),r=pl.exec(e);if(!t||!r)return NaN;for(let n=1;n<=3;n++){const a=Number(t[n])-Number(r[n]);if(a)return Math.sign(a)}return 0}function $i(i,e,t){if(!vt(t))return void i.push(`${e} missing`);Qx(t.path)||i.push(`${e}.path must be a relative path inside the asset folder`),(typeof t.sha256!="string"||!Zx.test(t.sha256))&&i.push(`${e}.sha256 must be 64 lowercase hex characters`),Number.isInteger(t.bytes)&&t.bytes>0||i.push(`${e}.bytes must be a positive integer`)}function ey(i){const e=[];if(!vt(i))return["manifest is not an object"];const t=(u,h)=>{u||e.push(h)};t(i.schema==="nexara.avatar-manifest/1","schema must be nexara.avatar-manifest/1"),t(typeof i.assetVersion=="string"&&i.assetVersion.length>0,"assetVersion missing"),typeof i.minimumRuntimeVersion!="string"||!pl.test(i.minimumRuntimeVersion)?e.push("minimumRuntimeVersion must be MAJOR.MINOR.PATCH"):t(uo(i.minimumRuntimeVersion,Au)<=0,`manifest needs runtime ${i.minimumRuntimeVersion}; this is ${Au}`),$i(e,"glb",i.glb),$i(e,"fallback",i.fallback),vt(i.fallback)&&t(typeof i.fallback.alt=="string"&&i.fallback.alt.length>0,"fallback.alt missing"),Array.isArray(i.textures)?i.textures.forEach((u,h)=>$i(e,`textures[${h}]`,u)):e.push("textures must be a list (empty when none)");const r=i.shaders;if(t(vt(r)&&r.kind==="bundled"&&r.package===Pu&&Lu.includes(r.preset),`shaders must be {kind: bundled, package: ${Pu}, preset: one of ${Lu.join(", ")}}`),!Array.isArray(i.components)||i.components.length===0)e.push("components must be a non-empty list");else{const u=new Set;i.components.forEach((h,d)=>{if(!vt(h)||typeof h.node!="string"||!h.node)return void e.push(`components[${d}].node missing`);Ru.includes(h.role)||e.push(`components[${d}].role must be one of ${Ru.join(", ")}`),u.has(h.node)&&e.push(`components[${d}].node duplicated`),u.add(h.node)}),t(i.components.filter(h=>vt(h)&&h.role==="head").length===1,"components must name exactly one head node")}const n=i.frame;vt(n)?(t(n.upAxis==="+Y"&&n.forwardAxis==="+Z","frame must be +Y up, +Z forward"),t(typeof n.units=="string"&&n.units.length>0,"frame.units missing"),t(Gt(n.scale)&&n.scale>0,"frame.scale must be a positive number"),t(Ji(n.origin),"frame.origin must be a 3-vector")):e.push("frame missing");const a=i.boundingBox;!vt(a)||!Ji(a.min)||!Ji(a.max)?e.push("boundingBox must have min and max 3-vectors"):t(a.min.every((u,h)=>u<a.max[h]),"boundingBox min must be below max on every axis");const s=i.camera;vt(s)?(t(Ji(s.target),"camera.target must be a 3-vector"),t(Gt(s.fovDeg)&&s.fovDeg>=10&&s.fovDeg<=90,"camera.fovDeg must be 10..90"),t(Gt(s.distance)&&s.distance>0,"camera.distance must be positive"),t(Gt(s.canonicalYawDeg),"camera.canonicalYawDeg must be a number")):e.push("camera missing");const o=i.orbit;if(!vt(o))e.push("orbit missing");else{t(o.yaw==="continuous","orbit.yaw must be continuous (AVATAR-002)"),!Gt(o.pitchMinDeg)||!Gt(o.pitchMaxDeg)?e.push("orbit pitch limits must be numbers"):(t(o.pitchMinDeg<0&&o.pitchMaxDeg>0,"orbit pitch range must include 0"),t(o.pitchMinDeg>=-20&&o.pitchMaxDeg<=20,"orbit pitch limited to +/-20 degrees (provisional AVATAR-002)")),t(o.pan===!1,"orbit.pan must be false");const u=o.zoom;t(vt(u)&&u.minScale===1&&Gt(u.maxScale)&&u.maxScale>1&&u.maxScale<=8&&(u.aim==="pointer"||u.aim==="center"),"orbit.zoom must be {minScale: 1, maxScale in (1, 8], aim: pointer|center} (bounded, never further out than the framing)"),t(Gt(o.dampingSeconds)&&o.dampingSeconds>0&&o.dampingSeconds<=2,"orbit.dampingSeconds must be in (0, 2]"),t(o.resetToFront===!0,"orbit.resetToFront must be true (AVATAR-003)"),t(Gt(o.resetSettleSeconds)&&o.resetSettleSeconds>0&&o.resetSettleSeconds<=5,"orbit.resetSettleSeconds must be in (0, 5]")}t(vt(i.core)&&Ji(i.core.position),"core.position must be a 3-vector");const c=i.neckFade;if(t(vt(c)&&Gt(c.fromY)&&Gt(c.toY)&&c.fromY<c.toY,"neckFade must have numeric fromY < toY"),ty(e,i.morphTargets),i.pivot!==void 0&&ry(e,i.pivot),Array.isArray(i.morphTargets)&&i.morphTargets.length>0&&(t(i.pivot!==void 0,"a speech asset (morphTargets) must declare its head pivot"),t(uo(String(i.minimumRuntimeVersion),"0.3.0")>=0,"a speech asset needs minimumRuntimeVersion 0.3.0 or later"),t(Array.isArray(i.components)&&i.components.filter(u=>vt(u)&&u.role==="mouthCavity").length===1,"a speech asset must name exactly one mouthCavity node"),t(i.faceTable!==void 0,"a speech asset must bind its face table (faceTable)")),i.morphRoles!==void 0){const u=i.morphRoles;t(Array.isArray(u)&&u.length===new Set(u).size&&u.every(h=>h==="head"||h==="mouthCavity"||h==="crown")&&u.includes("head")&&u.includes("mouthCavity"),"morphRoles must list head and mouthCavity, optionally crown, each once"),t(Array.isArray(i.morphTargets)&&i.morphTargets.length>0,"morphRoles needs speech targets (morphTargets)"),t(uo(String(i.minimumRuntimeVersion),"0.4.0")>=0,"morphRoles needs minimumRuntimeVersion 0.4.0 or later"),Array.isArray(u)&&u.includes("crown")&&vt(i.decorations)&&vt(i.decorations.crownStrands)&&t(i.decorations.crownStrands.binding!==void 0,"a moving crown with a crown net must bind the net (decorations.crownStrands.binding)")}if(i.faceTable!==void 0&&($i(e,"faceTable",i.faceTable),t(vt(i.faceTable)&&i.faceTable.schema===hs,`faceTable.schema must be ${hs}`)),t(Jx(i.animations),"animations must be a list of names (empty when none)"),i.decorations!==void 0){if(!vt(i.decorations))e.push("decorations must be an object");else if(i.decorations.crownStrands!==void 0){$i(e,"decorations.crownStrands",i.decorations.crownStrands);const u=vt(i.decorations.crownStrands)?i.decorations.crownStrands.binding:void 0;u!==void 0&&$i(e,"decorations.crownStrands.binding",u)}}const l=i.quality;return vt(l)?(t(Gt(l.targetFps)&&l.targetFps>0,"quality.targetFps must be positive"),t(Gt(l.minimumFps)&&l.minimumFps>0&&l.minimumFps<=l.targetFps,"quality.minimumFps must be positive and <= targetFps"),t(Array.isArray(l.tiers)&&l.tiers.length>0&&l.tiers.every(u=>u==="high"||u==="medium"||u==="low"),"quality.tiers must list high/medium/low"),t(l.fallback==="2d-still","quality.fallback must be 2d-still"),t(typeof l.provisional=="boolean","quality.provisional must be a boolean")):e.push("quality missing"),e}function ty(i,e){if(!Array.isArray(e))return void i.push("morphTargets must be a list (empty when none)");if(e.length===0)return;if(e.every(r=>typeof r=="string"))return void i.push("morphTargets must be {name, min, max, group} entries");const t=[];e.forEach((r,n)=>{if(!vt(r)||typeof r.name!="string")return void i.push(`morphTargets[${n}].name missing`);t.push(r.name),(r.min!==0||r.max!==1)&&i.push(`morphTargets[${n}] range must be 0..1`),Cu.includes(r.group)||i.push(`morphTargets[${n}].group must be one of ${Cu.join(", ")}`)}),t.length===e.length&&!(t.length===co.length&&t.every((r,n)=>r===co[n]))&&i.push(`morphTargets must be exactly ${co.join(", ")} in this order`)}function ry(i,e){if(!vt(e))return void i.push("pivot must be an object");(typeof e.node!="string"||!e.node)&&i.push("pivot.node missing"),Ji(e.point)||i.push("pivot.point must be a 3-vector"),e.order!=="YXZ"&&i.push("pivot.order must be YXZ (q = qYaw * qPitch * qRoll)");const t=e.boundsDeg;(!vt(t)||!["yaw","pitch","roll"].every(r=>Gt(t[r])&&t[r]>=0&&t[r]<=Ga[r]))&&i.push(`pivot.boundsDeg must give yaw, pitch, roll within 0..${Ga.yaw}/${Ga.pitch}/${Ga.roll} degrees`)}function iy(i){return i.morphTargets.map(e=>typeof e=="string"?e:e.name)}function ny(i,e){if(!e)return"has no morph targets";const t=Object.entries(e).sort((n,a)=>n[1]-a[1]).map(([n])=>n);if(t.length!==i.length)return`has ${t.length} morph targets, the manifest lists ${i.length}`;const r=t.findIndex((n,a)=>n!==i[a]);return r<0?null:`morph target ${r} is ${t[r]}, the manifest expects ${i[r]}`}async function ay(i){const e=await crypto.subtle.digest("SHA-256",i);return Array.from(new Uint8Array(e),t=>t.toString(16).padStart(2,"0")).join("")}async function es(i,e){const t=await fetch(e);if(!t.ok)throw new Error(`avatar asset fetch failed: HTTP ${t.status}`);const r=await t.arrayBuffer();if(r.byteLength!==i.bytes)throw new Error(`${i.path}: size does not match the manifest`);if(await ay(r)!==i.sha256)throw new Error(`${i.path}: hash does not match the manifest`);return r}function sy(i,e){return es(i.glb,e)}function oy(i,e){const t=new Set(e);return i.components.map(r=>r.node).filter(r=>!t.has(r))}const fl={surface:"hologram",background:"pale",shading:"smooth",crown:"web",neckFade:!0,core:!0,network:!0,glow:1},ly={pale:{bgCenter:"#d6e8fb",bgEdge:"#92bbea",bgHalo:"#f4f8ff",fillDark:"#165cbf",fillLight:"#4f97e2",fillAlpha:.9,rim:"#f2f9ff",rimStrength:1.15,lattice:"#ffffff",latticeAlpha:.16,stippleAlpha:.22,crownFill:"#6fa6e8",crownSheath:"#3f7fd6",crownFillAlpha:.32,crownEdge:"#ffffff",sparkle:"#ffffff",arc:"#ffffff",arcAlpha:.45,core:"#ffffff",ray:"#ffffff",bloom:[.35,.35,.97]},dark:{bgCenter:"#0d1d38",bgEdge:"#03070f",bgHalo:"#1a3560",fillDark:"#0e2d5e",fillLight:"#3d78c8",fillAlpha:.55,rim:"#bfe0ff",rimStrength:1.2,lattice:"#9cc8ff",latticeAlpha:.22,stippleAlpha:.45,crownFill:"#2d63b0",crownSheath:"#1d4f9c",crownFillAlpha:.25,crownEdge:"#d8ecff",sparkle:"#cfe6ff",arc:"#7fb2f0",arcAlpha:.35,core:"#ffffff",ray:"#bfe0ff",bloom:[.9,.5,.35]}},Nu="#7fdcf0",cy="#0b2a55";function fs(i){const e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i.trim());if(!e)return null;const t=e[1].length===3?[...e[1]].map(r=>r+r).join(""):e[1];return[0,2,4].map(r=>parseInt(t.slice(r,r+2),16))}function Iu(i,e,t){const r=fs(e);return"#"+i.map((n,a)=>Math.round(n*(1-t)+r[a]*t).toString(16).padStart(2,"0")).join("")}function uy(i=Nu){const e=fs(i)??fs(Nu),t=r=>Iu(e,cy,r);return{bgCenter:"#ffffff",bgEdge:"#ffffff",bgHalo:t(0),fillDark:"#165cbf",fillLight:"#4f97e2",fillAlpha:.9,rim:t(.6),rimStrength:1,lattice:t(.3),latticeAlpha:.22,stippleAlpha:.25,crownFill:Iu(e,"#3f7fd6",.5),crownSheath:t(.45),crownFillAlpha:.4,crownEdge:t(.6),sparkle:t(.35),arc:t(.2),arcAlpha:0,core:t(0),ray:t(0),bloom:[.35,.35,.97],haloAlpha:.22}}function Du(i){const e=i.index?i.toNonIndexed():i.clone(),t=e.getAttribute("position").count,r=new Float32Array(t*3);for(let n=0;n<t;n++)r[n*3+n%3]=1;return e.setAttribute("barycentric",new ut(r,3)),e}const $l=`
  #include <common>
  #include <morphtarget_pars_vertex>
  attribute vec3 barycentric;
  varying vec3 vNormalV;
  varying vec3 vViewPos;
  varying vec3 vObjPos;
  varying vec3 vBary;
  void main() {
    #include <morphinstance_vertex>
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <begin_vertex>
    #include <morphtarget_vertex>
    vObjPos = transformed;
    vBary = barycentric;
    vNormalV = normalize(normalMatrix * objectNormal);
    vec4 mv = modelViewMatrix * vec4(transformed, 1.0);
    vViewPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,Zl=`
  varying vec3 vNormalV;
  varying vec3 vViewPos;
  varying vec3 vObjPos;
  varying vec3 vBary;
  uniform float uFlat;
  uniform float uTime;
  uniform float uDesaturate;
  uniform float uNeutral;

  // Neutral surface: opaque grey with one key light, for shape comparisons only.
  vec4 neutralColor(vec3 N, vec3 keyDir, float lift) {
    float key = 0.5 + 0.5 * dot(N, normalize(keyDir));
    return vec4(vec3(mix(0.22, 0.86, key) + lift), 1.0);
  }

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.zyx + 31.32);
    return fract((p.x + p.y) * p.z);
  }

  vec3 surfaceNormal() {
    vec3 n = normalize(vNormalV);
    if (uFlat > 0.5) n = normalize(cross(dFdx(vViewPos), dFdy(vViewPos)));
    return gl_FrontFacing ? n : -n;
  }

  // 1 on triangle edges, fading out where triangles are smaller than ~2 pixels so the lattice
  // turns into fine texture instead of a solid haze.
  float latticeLine(float widthPx) {
    vec3 d = fwidth(vBary);
    vec3 a = smoothstep(vec3(0.0), d * widthPx, vBary);
    float line = 1.0 - min(min(a.x, a.y), a.z);
    float density = max(max(d.x, d.y), d.z);
    return line * (1.0 - smoothstep(0.18, 0.45, density));
  }

  vec3 hash33(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.xxy + p.yxx) * p.zyx);
  }

  // Sparse fine round dots in object space (stipple), optionally twinkling.
  float stipple(float cell, float threshold) {
    vec3 q = vObjPos / cell;
    vec3 c = floor(q);
    float h = hash13(c);
    vec3 jitter = hash33(c) * 0.5 + 0.25;
    float d = length(fract(q) - jitter);
    float dotShape = 1.0 - smoothstep(0.12, 0.3, d);
    float tw = 0.65 + 0.35 * sin(uTime * (1.0 + 3.0 * h) + h * 40.0);
    return step(threshold, h) * dotShape * tw;
  }

  vec3 desaturate(vec3 c, float k) {
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    return mix(c, vec3(l), k);
  }
`,hy=`
  ${Zl}
  uniform vec3 uFillDark;
  uniform vec3 uFillLight;
  uniform float uFillAlpha;
  uniform vec3 uRim;
  uniform float uRimStrength;
  uniform vec3 uLattice;
  uniform float uLatticeAlpha;
  uniform float uStippleAlpha;
  uniform float uGlow;
  uniform float uNeckFade;
  uniform vec2 uNeckRange;
  uniform vec3 uKeyDir;

  void main() {
    vec3 N = surfaceNormal();
    if (uNeutral > 1.5) {
      gl_FragColor = vec4(1.0);
      return;
    }
    if (uNeutral > 0.5) {
      gl_FragColor = neutralColor(N, uKeyDir, 0.0);
      #include <colorspace_fragment>
      return;
    }
    vec3 V = normalize(-vViewPos);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 3.0);
    float edge = smoothstep(0.55, 0.95, 1.0 - ndv);
    float key = 0.5 + 0.5 * dot(N, normalize(uKeyDir));
    vec3 col = mix(uFillDark, uFillLight, smoothstep(0.15, 0.95, key));
    float glow = uGlow;
    col = mix(col, uRim, clamp((fres * 0.7 + edge * 0.6) * uRimStrength * glow, 0.0, 1.0));
    float lat = latticeLine(1.1) * uLatticeAlpha;
    float dots = stipple(0.011, 0.6) * uStippleAlpha * (0.4 + 0.6 * key);
    col = mix(col, uLattice, clamp(lat + dots * glow, 0.0, 1.0));
    float alpha = mix(uFillAlpha, 1.0, clamp(fres * (0.6 + 0.4 * glow), 0.0, 1.0));
    if (uNeckFade > 0.5) {
      // Light streaks running down the neck into the projector, brightest near the base.
      float ang = atan(vObjPos.z, vObjPos.x);
      float wob = sin(vObjPos.y * 5.0 + ang * 3.0) * 0.08;
      float jitter = hash13(floor(vec3(ang * 34.0 / 6.2831853, 0.0, 0.0))) * 0.6 + 0.4;
      float streak = pow(0.5 + 0.5 * cos(ang * 34.0 + wob * 10.0), 26.0) * jitter;
      float down = smoothstep(uNeckRange.y + 0.75, uNeckRange.x + 0.1, vObjPos.y);
      col = mix(col, uRim, clamp(streak * down * 0.55 * glow, 0.0, 1.0));
      alpha = max(alpha * smoothstep(uNeckRange.x, uNeckRange.y, vObjPos.y), streak * down * 0.5 * glow * step(uNeckRange.x - 0.02, vObjPos.y));
    }
    col = desaturate(col, uDesaturate);
    gl_FragColor = vec4(col, alpha);
    #include <colorspace_fragment>
  }
`,dy=`
  ${Zl}
  uniform vec3 uFill;
  uniform float uFillAlpha;
  uniform vec3 uEdge;
  uniform vec3 uLattice;
  uniform float uWeb;
  uniform float uGlow;
  uniform float uPulse;

  void main() {
    vec3 N = surfaceNormal();
    if (uNeutral > 1.5) {
      gl_FragColor = vec4(1.0);
      return;
    }
    if (uNeutral > 0.5) {
      gl_FragColor = neutralColor(N, vec3(-0.35, 0.55, 0.75), 0.06);
      #include <colorspace_fragment>
      return;
    }
    vec3 V = normalize(-vViewPos);
    float ndv = abs(dot(N, V));
    float fres = pow(1.0 - ndv, 1.6);
    float pulse = 1.0 + uPulse * sin(uTime * 2.4 + vObjPos.y * 3.0);
    // Web mode: a translucent band whose threads are drawn separately as strands along the band
    // (crownStrands.ts); solid mode: a more opaque ribbon. Both keep the bright rim.
    vec3 col = uFill;
    float glow = uGlow * pulse;
    float rimAlpha = uWeb > 0.5 ? 0.45 : 0.85;
    col = mix(col, uEdge, clamp(fres * 1.1 * glow, 0.0, 1.0));
    float alpha = clamp(uFillAlpha + fres * rimAlpha * max(glow, 0.35), 0.0, 1.0);
    col = desaturate(col, uDesaturate);
    gl_FragColor = vec4(col, alpha);
    #include <colorspace_fragment>
  }
`;function Wh(i,e){return e.crown==="solid"?Math.min(i.crownFillAlpha*2.2,.85):i.crownFillAlpha*.7}function ur(i){return new be(i)}function py(i,e,t){return new ft({name:"nexara-head-shell",vertexShader:$l,fragmentShader:hy,transparent:!0,depthWrite:!0,side:Lr,uniforms:{uFlat:{value:e.shading==="flat"?1:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uFillDark:{value:ur(i.fillDark)},uFillLight:{value:ur(i.fillLight)},uFillAlpha:{value:i.fillAlpha},uRim:{value:ur(i.rim)},uRimStrength:{value:i.rimStrength},uLattice:{value:ur(i.lattice)},uLatticeAlpha:{value:i.latticeAlpha},uStippleAlpha:{value:i.stippleAlpha},uGlow:{value:e.glow},uNeckFade:{value:e.neckFade?1:0},uNeckRange:{value:new Pe(t.fromY,t.toY)},uKeyDir:{value:new D(-.35,.55,.75)}}})}function fy(i,e){return new ft({name:"nexara-crown",vertexShader:$l,fragmentShader:dy,transparent:!0,depthWrite:!1,side:ar,uniforms:{uFlat:{value:e.shading==="flat"?1:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uFill:{value:ur(i.crownFill)},uFillAlpha:{value:Wh(i,e)},uEdge:{value:ur(i.crownEdge)},uLattice:{value:ur(i.lattice)},uWeb:{value:e.crown==="web"?1:0},uGlow:{value:e.glow},uPulse:{value:0}}})}function my(i,e,t,r){const n=i.uniforms;n.uFlat.value=t.shading==="flat"?1:0,n.uFillDark.value.set(e.fillDark),n.uFillLight.value.set(e.fillLight),n.uFillAlpha.value=e.fillAlpha,n.uRim.value.set(e.rim),n.uRimStrength.value=e.rimStrength,n.uLattice.value.set(e.lattice),n.uLatticeAlpha.value=e.latticeAlpha,n.uStippleAlpha.value=e.stippleAlpha,n.uGlow.value=t.glow,n.uNeckFade.value=t.neckFade?1:0,n.uNeckRange.value.set(r.fromY,r.toY)}function gy(i,e,t){const r=i.uniforms;r.uFlat.value=t.shading==="flat"?1:0,r.uFill.value.set(e.crownFill),r.uFillAlpha.value=Wh(e,t),r.uEdge.value.set(e.crownEdge),r.uLattice.value.set(e.lattice),r.uWeb.value=t.crown==="web"?1:0,r.uGlow.value=t.glow}function vy(i){const e=i.getAttribute("position").count,t=new Float32Array(e),r=i.index;if(r){const n=new Map;for(let a=0;a<r.count;a+=3){const s=[r.getX(a),r.getX(a+1),r.getX(a+2)];for(let o=0;o<3;o++){const c=s[o],l=s[(o+1)%3],u=c<l?`${c},${l}`:`${l},${c}`;n.set(u,(n.get(u)??0)+1)}}for(const[a,s]of n)if(s===1)for(const o of a.split(","))t[Number(o)]=1}return i.setAttribute("lipEdge",new ut(t,1)),i}const Xh={fill:.8,depthDim:.7,alpha:1,lattice:.8,stipple:.6,lipRim:.6,edgeRim:.6},_y=$l.replace("attribute vec3 barycentric;",`attribute vec3 barycentric;
  attribute float lipEdge;
  varying float vLip;`).replace("vBary = barycentric;",`vBary = barycentric;
    vLip = lipEdge;`),xy=`
  ${Zl}
  varying float vLip;
  uniform vec3 uCavity;
  uniform vec3 uFillDark;
  uniform vec3 uFillLight;
  uniform vec3 uRim;
  uniform vec3 uLattice;
  uniform float uFill;
  uniform float uDepthDim;
  uniform float uAlpha;
  uniform float uLatticeAlpha;
  uniform float uStippleAlpha;
  uniform float uLipRim;
  uniform float uEdgeRim;
  uniform float uGlow;
  uniform vec3 uKeyDir;

  void main() {
    vec3 N = surfaceNormal();
    // neutral and mask surfaces keep the flat dark interior (shape comparisons, silhouettes)
    if (uNeutral > 0.5) {
      gl_FragColor = vec4(uCavity, 1.0);
      #include <colorspace_fragment>
      return;
    }
    float key = 0.5 + 0.5 * dot(N, normalize(uKeyDir));
    float deep = 1.0 - smoothstep(0.0, 1.0, vLip);
    vec3 col = mix(uFillDark, uFillLight, smoothstep(0.15, 0.95, key)) * uFill * mix(1.0, uDepthDim, deep);
    float lat = latticeLine(1.1) * uLatticeAlpha;
    float dots = stipple(0.011, 0.6) * uStippleAlpha;
    col = mix(col, uLattice, clamp((lat + dots) * uGlow, 0.0, 1.0));
    vec3 V = normalize(-vViewPos);
    float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 3.0);
    col = mix(col, mix(uFillLight, uRim, 0.5), clamp(fres * uEdgeRim * uGlow, 0.0, 1.0));
    float rim = pow(clamp(vLip, 0.0, 1.0), 2.5) * uLipRim * uGlow;
    col = mix(col, uRim, clamp(rim, 0.0, 1.0));
    col = desaturate(col, uDesaturate);
    gl_FragColor = vec4(col, clamp(max(uAlpha, rim), 0.0, 1.0));
    #include <colorspace_fragment>
  }
`;function yy(i,e,t=Xh){const r=new ft({name:"nexara-mouth-cavity",vertexShader:_y,fragmentShader:xy,side:ar,transparent:!0,depthWrite:!0,uniforms:{uFlat:{value:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uCavity:{value:jh(i)},uFillDark:{value:ur(i.fillDark)},uFillLight:{value:ur(i.fillLight)},uRim:{value:ur(i.rim)},uLattice:{value:ur(i.lattice)},uFill:{value:1},uDepthDim:{value:1},uAlpha:{value:1},uLatticeAlpha:{value:0},uStippleAlpha:{value:0},uLipRim:{value:0},uEdgeRim:{value:0},uGlow:{value:e.glow},uKeyDir:{value:new D(-.35,.55,.75)}},polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:4});return ml(r,i,e,t),r}function ml(i,e,t,r=Xh,n=!0){const a=i.uniforms;a.uCavity.value.copy(jh(e)),a.uFillDark.value.set(e.fillDark),a.uFillLight.value.set(e.fillLight),a.uRim.value.set(e.rim),a.uLattice.value.set(e.lattice),a.uFill.value=r.fill,a.uDepthDim.value=r.depthDim,a.uAlpha.value=Math.min(1,e.fillAlpha*r.alpha),a.uLatticeAlpha.value=n?e.latticeAlpha*r.lattice:0,a.uStippleAlpha.value=e.stippleAlpha*r.stipple,a.uLipRim.value=r.lipRim,a.uEdgeRim.value=r.edgeRim,a.uFlat.value=t.shading==="flat"?1:0}function jh(i){return ur(i.fillDark).multiplyScalar(.18)}function qh(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function My(i){const e=new ft({name:"nexara-background",depthTest:!1,depthWrite:!1,uniforms:{uCenter:{value:new be(i.bgCenter)},uEdge:{value:new be(i.bgEdge)},uHalo:{value:new be(i.bgHalo)},uAspect:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uCenter; uniform vec3 uEdge; uniform vec3 uHalo; uniform float uAspect;
      void main() {
        vec2 p = (vUv - vec2(0.5, 0.56)) * vec2(uAspect, 1.0);
        float r = length(p);
        vec3 col = mix(uCenter, uEdge, smoothstep(0.05, 0.85, r));
        float halo = exp(-pow((r - 0.42) / 0.05, 2.0)) * 0.18;
        col = mix(col, uHalo, halo);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `}),t=new Bt(new pn(2,2),e);return t.frustumCulled=!1,t.renderOrder=-10,t.name="nexara-background",t}function Uu(i,e,t){const r=i.material.uniforms;r.uCenter.value.set(e.bgCenter),r.uEdge.value.set(e.bgEdge),r.uHalo.value.set(e.bgHalo),r.uAspect.value=t}function Sy(i){const e=new ft({name:"nexara-halo",depthTest:!1,depthWrite:!1,uniforms:{uHalo:{value:new be(i.bgHalo)},uAlpha:{value:i.haloAlpha??0},uAspect:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uHalo; uniform float uAlpha; uniform float uAspect;
      void main() {
        vec2 p = (vUv - vec2(0.5, 0.56)) * vec2(uAspect, 1.0);
        float r = length(p);
        float a = uAlpha * (0.8 * exp(-pow(r / 0.34, 2.0)) + 0.6 * exp(-pow((r - 0.42) / 0.06, 2.0)));
        // exactly zero beyond the ring, so the page shows through untouched at the slot's edges
        a = clamp(a, 0.0, 1.0) * (1.0 - smoothstep(0.5, 0.62, r));
        vec4 c = linearToOutputTexel(vec4(uHalo, 1.0));
        gl_FragColor = vec4(c.rgb * a, a);
      }
    `}),t=new Bt(new pn(2,2),e);return t.frustumCulled=!1,t.renderOrder=-10,t.name="nexara-halo",t}function Ou(i,e,t){const r=i.material.uniforms;r.uHalo.value.set(e.bgHalo),r.uAlpha.value=e.haloAlpha??0,r.uAspect.value=t}const Zi=2400,by=30;function Ty(i,e=20261011){const t=qh(e),r=new cr;r.name="nexara-network";const n=new cr,a=new xs({color:new be(i.arc),transparent:!0,opacity:i.arcAlpha,depthWrite:!1}),s=[];for(let f=0;f<by;f++){const v=1.3+t()*2.6,p=t()*Math.PI*2,g=Math.PI*(.35+t()*1.4),b=[],A=96;for(let R=0;R<=A;R++){const x=p+g*R/A;b.push(new D(Math.cos(x)*v,Math.sin(x)*v*1.15,0))}const M=new Et().setFromPoints(b),T=new ea(M,a);T.rotation.set((t()-.5)*1.2,t()*Math.PI*2,(t()-.5)*.6),T.position.set((t()-.5)*.4,-.55+(t()-.5)*.6,(t()-.5)*.4),T.updateMatrix();const E=2+Math.floor(t()*4);for(let R=0;R<E;R++){const x=b[Math.floor(t()*b.length)].clone().applyMatrix4(T.matrix);s.push(x.x,x.y,x.z)}T.renderOrder=1,n.add(T)}r.add(n);const o=new Float32Array(Zi*3),c=new Float32Array(Zi),l=new Float32Array(Zi),u=Math.min(s.length/3,Zi);for(let f=0;f<Zi;f++){if(f<u)o.set(s.slice(f*3,f*3+3),f*3),c[f]=5+t()*4;else{const v=1.5+Math.pow(t(),.7)*3.5,p=t()*Math.PI*2,g=-3.2+t()*5.6;o[f*3]=Math.cos(p)*v,o[f*3+1]=g,o[f*3+2]=Math.sin(p)*v-.5,c[f]=t()<.14?5+t()*6:1.8+t()*2.8}l[f]=t()*100}const h=new Et;h.setAttribute("position",new ut(o,3)),h.setAttribute("size",new ut(c,1)),h.setAttribute("phase",new ut(l,1));const d=new ft({name:"nexara-sparkles",transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new be(i.sparkle)},uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1}},vertexShader:`
      attribute float size; attribute float phase;
      uniform float uPixelRatio; uniform float uTime; uniform float uTwinkle;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = mix(1.0, 0.55 + 0.45 * sin(uTime * (0.8 + fract(phase) * 2.0) + phase), uTwinkle);
        vAlpha = tw;
        gl_PointSize = size * uPixelRatio * (16.0 / -mv.z) * tw;
      }
    `,fragmentShader:`
      uniform vec3 uColor; varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float core = smoothstep(0.5, 0.0, d);
        float a = pow(core, 2.5) * vAlpha;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }
    `}),m=new cs(h,d);return m.name="nexara-sparkles",m.renderOrder=2,m.frustumCulled=!1,r.add(m),{group:r,sparkleMaterial:d,arcMaterial:a,setCounts(f,v){h.setDrawRange(0,Math.min(Math.max(f,u),Zi)),n.children.forEach((p,g)=>p.visible=i.arcAlpha>0&&g<v)}}}function Ey(){const i=new Uint8Array(65536);for(let t=0;t<128;t++)for(let r=0;r<128;r++){const n=(r+.5)/128-.5,a=(t+.5)/128-.5,s=Math.sqrt(n*n+a*a)*2,o=Math.exp(-s*s*60),c=Math.exp(-s*s*6)*.55,l=Math.exp(-Math.abs(a)*70)*Math.max(0,1-Math.abs(n)*2)*.5,u=Math.min(1,o+c+l),h=(t*128+r)*4;i[h]=i[h+1]=i[h+2]=255,i[h+3]=Math.round(u*255)}const e=new _s(i,128,128);return e.colorSpace=At,e.needsUpdate=!0,e}function wy(i,e,t,r=7){const n=qh(r),a=new cr;a.name="nexara-projector";const s=new Mh({map:Ey(),color:new be(i.core),transparent:!0,depthWrite:!1,depthTest:!1}),o=new cf(s);o.position.copy(e),o.scale.set(.75,.75,1),o.renderOrder=5,a.add(o);const c=56,l=new Float32Array(c*6),u=new Float32Array(c*2);for(let v=0;v<c;v++){const p=v/c*Math.PI*2+n()*.05,g=.18+n()*.45,b=t+.15+n()*.75;l.set([e.x,e.y,e.z,Math.cos(p)*g,b,Math.sin(p)*g*.8],v*6),u[v*2]=1,u[v*2+1]=0}const h=new Et;h.setAttribute("position",new ut(l,3)),h.setAttribute("fade",new ut(u,1));const d=new ft({name:"nexara-rays",transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new be(i.ray)},uIntensity:{value:1}},vertexShader:`
      attribute float fade; varying float vFade;
      void main() { vFade = fade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform vec3 uColor; uniform float uIntensity; varying float vFade;
      void main() {
        gl_FragColor = vec4(uColor, pow(vFade, 2.2) * 0.4 * uIntensity);
        #include <colorspace_fragment>
      }
    `}),m=new ls(h,d);m.renderOrder=3,a.add(m);const f=new xs({color:new be(i.ray),transparent:!0,opacity:.4,depthWrite:!1});for(let v=0;v<7;v++){const p=.35+v*v*.06+v*.18,g=[];for(let M=0;M<=160;M++){const T=M/160*Math.PI*2;g.push(new D(Math.cos(T)*p,0,Math.sin(T)*p))}const b=f.clone();b.opacity=.42*Math.pow(.78,v);const A=new ea(new Et().setFromPoints(g),b);A.position.copy(e),A.renderOrder=1,a.add(A)}return{group:a,coreMaterial:s,rayMaterial:d,ringMaterial:f,setIntensity(v){s.opacity=Math.min(1,v),o.scale.setScalar(.75*(.7+.3*v)),d.uniforms.uIntensity.value=v}}}const Ti={pitchMinDeg:-20,pitchMaxDeg:20,dampingSeconds:.12,keyStepDeg:15,dragDegPerPx:.35,idleYawDegPerSec:0};function Ay(i=0,e=0,t=Ti){const r=ui(e,t.pitchMinDeg,t.pitchMaxDeg);return{yawDeg:i,pitchDeg:r,targetYawDeg:i,targetPitchDeg:r,yawVel:0,pitchVel:0,userHasInteracted:!1}}function ui(i,e,t){return i<e?e:i>t?t:i}function Fu(i){const e=i%360;return e<0?e+360:e===0?0:e}function Qi(i,e,t,r=Ti){return{...i,targetYawDeg:i.targetYawDeg+e,targetPitchDeg:ui(i.targetPitchDeg+t,r.pitchMinDeg,r.pitchMaxDeg),userHasInteracted:!0}}function Ry(i,e,t,r=Ti){return Qi(i,-e*r.dragDegPerPx,t*r.dragDegPerPx,r)}function Cy(i,e,t=Ti){switch(e){case"ArrowLeft":return Qi(i,t.keyStepDeg,0,t);case"ArrowRight":return Qi(i,-t.keyStepDeg,0,t);case"ArrowUp":return Qi(i,0,t.keyStepDeg/3,t);case"ArrowDown":return Qi(i,0,-t.keyStepDeg/3,t);case"Home":return Yh(i);default:return null}}function Yh(i){return{...i,targetYawDeg:Math.round(i.yawDeg/360)*360,targetPitchDeg:0,userHasInteracted:!0}}function Py(i,e,t,r=Ti){const n=ui(t,r.pitchMinDeg,r.pitchMaxDeg);return{...i,yawDeg:e,pitchDeg:n,targetYawDeg:e,targetPitchDeg:n,yawVel:0,pitchVel:0}}function Ly(i,e,t=Ti){const r=ui(e.dt,0,.1);let n=i.targetYawDeg;if(!e.reducedMotion&&!e.conversationActive&&!i.userHasInteracted&&t.idleYawDegPerSec>0&&(n+=t.idleYawDegPerSec*r),e.reducedMotion)return{...i,targetYawDeg:n,yawDeg:n,pitchDeg:i.targetPitchDeg,yawVel:0,pitchVel:0};const a=Kh(t.dampingSeconds,r),s=i.yawDeg+(n-i.yawDeg)*a,o=ui(i.pitchDeg+(i.targetPitchDeg-i.pitchDeg)*a,t.pitchMinDeg,t.pitchMaxDeg);return{...i,targetYawDeg:n,yawDeg:s,yawVel:r>0?(s-i.yawDeg)/r:0,pitchDeg:o,pitchVel:r>0?(o-i.pitchDeg)/r:0}}function Ny(i,e=.01){return Math.abs(i.yawDeg-i.targetYawDeg)<e&&Math.abs(i.pitchDeg-i.targetPitchDeg)<e}function Kh(i,e){return e<=0?0:i<=0?1:1-Math.exp(-e/i)}function Iy(i,e,t){const r=i*Math.PI/180,n=e*Math.PI/180;return[t*Math.cos(n)*Math.sin(r),t*Math.sin(n),t*Math.cos(n)*Math.cos(r)]}function gl(i=1,e=[0,0,0],t){const r=t?$h(i,t):i,n=t?r===t.minScale?[0,0,0]:Zh(e,t):e;return{scale:r,targetScale:r,aim:[...n],targetAim:[...n]}}function Dy(i,e,t,r,n,a="pointer"){return{minScale:i,maxScale:e,aimMode:a,aimMin:[t[0]-n[0],t[1]-n[1],t[2]-n[2]],aimMax:[r[0]-n[0],r[1]-n[1],r[2]-n[2]],keyFactor:1.25,wheelFactorPer100:1.15}}const $h=(i,e)=>Math.min(Math.max(i,e.minScale),e.maxScale);function Zh(i,e){return[0,1,2].map(t=>Math.min(Math.max(i[t],e.aimMin[t]),e.aimMax[t]))}function vl(i,e,t,r){if(!(e>0)||!Number.isFinite(e))return i;const n=i.targetScale,a=$h(n*e,r);if(a===r.minScale)return{...i,targetScale:a,targetAim:[0,0,0]};if(a===n)return i;r.aimMode==="center"&&(t=i.targetAim);let s;if(a>n){const o=n/a;s=[0,1,2].map(c=>t[c]+(i.targetAim[c]-t[c])*o)}else{const o=n-r.minScale,c=o>0?(a-r.minScale)/o:0;s=[0,1,2].map(l=>i.targetAim[l]*c)}return{...i,targetScale:a,targetAim:Zh(s,r)}}function Uy(i,e){return Math.pow(e.wheelFactorPer100,-i/100)}function Oy(i,e,t){return e==="+"||e==="="?vl(i,t.keyFactor,i.targetAim,t):e==="-"||e==="_"?vl(i,1/t.keyFactor,i.targetAim,t):null}function Bu(i,e){return{...i,targetScale:e.minScale,targetAim:[0,0,0]}}function Fy(i,e,t,r){return gl(e,t,r)}function By(i,e,t){return t||e>=1?{...i,scale:i.targetScale,aim:[...i.targetAim]}:{...i,scale:i.scale+(i.targetScale-i.scale)*e,aim:[0,1,2].map(r=>i.aim[r]+(i.targetAim[r]-i.aim[r])*e)}}function ky(i,e=1e-4){return Math.abs(i.scale-i.targetScale)<e&&[0,1,2].every(t=>Math.abs(i.aim[t]-i.targetAim[t])<e)}const ku="#include <morphtarget_pars_vertex>",zu=`
        #include <morphinstance_vertex>
        #include <begin_vertex>
        #include <morphtarget_vertex>`;function Vu(i){const e=i.points.length/3,t=new Float32Array(e),r=new Float32Array(e),n=new Float32Array(e),a=[];for(let o=0;o+1<i.starts.length;o++){const c=i.starts[o],l=i.starts[o+1];for(let u=c;u<l;u++)t[u]=i.ranks[o],r[u]=l-c<24?1:Math.min(1,Math.min(u-c,l-1-u)/8),n[u]=(u-c)*.09+i.ranks[o]*50,u+1<l&&a.push(u,u+1)}const s=new Et;return s.setAttribute("position",new ut(i.points,3)),s.setAttribute("rank",new ut(t,1)),s.setAttribute("taper",new ut(r,1)),s.setAttribute("along",new ut(n,1)),s.setIndex(a),{geo:s,rank:t,segments:a.length/2}}function Hu(i,e){const t=i.nodes.length,r=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++){const o=i.nodes[s];r.set(i.points.subarray(o*3,o*3+3),s*3),n[s]=e[o]}const a=new Et;return a.setAttribute("position",new ut(r,3)),a.setAttribute("rank",new ut(n,1)),a}function Gu(i,e,t){i.morphAttributes.position=e.map((r,n)=>{const a=new ut(r,3);return a.name=t[n],a}),i.morphTargetsRelative=!0}function zy(i,e){const t=e?e.morph.rest:i,{geo:r,rank:n,segments:a}=Vu(t),s=new ft({name:"nexara-crown-strands",transparent:!0,depthWrite:!1,uniforms:{uVisible:{value:.5},uIntensity:{value:1},uCore:{value:new be("#ffffff")},uSheath:{value:new be("#3f7fd6")},uTime:{value:0},uPulse:{value:0}},vertexShader:`
      ${ku}
      attribute float rank; attribute float taper; attribute float along;
      varying float vRank; varying float vTaper; varying float vAlong;
      void main() {
        vRank = rank; vTaper = taper; vAlong = along;
        ${zu}
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
      }
    `,fragmentShader:`
      uniform float uVisible; uniform float uIntensity; uniform vec3 uCore; uniform vec3 uSheath;
      uniform float uTime; uniform float uPulse;
      varying float vRank; varying float vTaper; varying float vAlong;
      void main() {
        // strands above the visible share fade in over a short rank band (no popping)
        float show = 1.0 - smoothstep(uVisible - 0.08, uVisible, vRank);
        if (show <= 0.001) discard;
        float shimmer = 0.75 + 0.25 * sin(vAlong);
        float pulse = 1.0 + uPulse * sin(uTime * 2.4 - vAlong * 0.6);
        // a few bright white threads (lowest ranks), the rest light blue and softer
        float bright = 1.0 - smoothstep(0.25, 0.4, vRank);
        vec3 col = mix(mix(uSheath, uCore, 0.45), uCore, bright);
        float a = vTaper * show * clamp(uIntensity * pulse * mix(0.55, 0.95, bright) * shimmer, 0.0, 1.0);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }
    `}),o=new ls(r,s);o.name="nexara-crown-strands",o.frustumCulled=!1,o.renderOrder=5;const c=Hu(t,n),l=new ft({name:"nexara-crown-nodes",transparent:!0,depthWrite:!1,uniforms:{uVisible:{value:.5},uIntensity:{value:1},uCore:{value:new be("#ffffff")},uPixelRatio:{value:1}},vertexShader:`
      ${ku}
      attribute float rank; varying float vRank; uniform float uPixelRatio;
      void main() {
        vRank = rank;
        ${zu}
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        gl_PointSize = 6.0 * uPixelRatio;
      }
    `,fragmentShader:`
      uniform float uVisible; uniform float uIntensity; uniform vec3 uCore; varying float vRank;
      void main() {
        float show = 1.0 - smoothstep(uVisible - 0.08, uVisible, vRank);
        float d = length(gl_PointCoord - 0.5);
        float core = smoothstep(0.22, 0.05, d);
        float halo = smoothstep(0.5, 0.15, d) * 0.45;
        float a = (core + halo) * show * clamp(uIntensity, 0.0, 1.0);
        if (a < 0.01) discard;
        gl_FragColor = vec4(uCore, a);
        #include <colorspace_fragment>
      }
    `}),u=new cs(c,l);u.name="nexara-crown-nodes",u.frustumCulled=!1,u.renderOrder=6;const h=new cr;h.name="nexara-crown-strand-group",h.add(o,u);const d=[s],m=[l],f=[];let v={strands:0,segments:0,nodes:0,points:0};if(e&&e.morph.moving.ranks.length){const p=e.morph,g=Vu(p.moving);Gu(g.geo,p.deltas,e.names);const b=Hu(p.moving,g.rank);Gu(b,p.deltas.map(R=>{const x=new Float32Array(p.moving.nodes.length*3);return p.moving.nodes.forEach((S,P)=>x.set(R.subarray(S*3,S*3+3),P*3)),x}),e.names);const A=s.clone(),M=l.clone();d.push(A),m.push(M);const T=new ls(g.geo,A);T.name="nexara-crown-strands-moving",T.frustumCulled=!1,T.renderOrder=5;const E=new cs(b,M);E.name="nexara-crown-nodes-moving",E.frustumCulled=!1,E.renderOrder=6,h.add(T,E),f.push(T,E),v={strands:p.moving.ranks.length,segments:g.segments,nodes:p.moving.nodes.length,points:p.moving.points.length/3}}return{group:h,lineMaterial:s,nodeMaterial:l,morphObjects:f,counts:{strands:t.ranks.length+v.strands,segments:a+v.segments,nodes:t.nodes.length+v.nodes,movingStrands:v.strands,movingPoints:v.points,boundPoints:e?.morph.boundPoints??0},update(p){for(const g of d){const b=g.uniforms;b.uVisible.value=p.visible,b.uIntensity.value=p.intensity,b.uCore.value.copy(p.core),b.uSheath.value.copy(p.sheath),b.uTime.value=p.time,b.uPulse.value=p.pulse}for(const g of m){const b=g.uniforms;b.uVisible.value=p.visible,b.uIntensity.value=p.intensity,b.uCore.value.copy(p.core),b.uPixelRatio.value=p.pixelRatio}}}}const Vy="NXSTR001",Wa=i=>i+3&-4;function Hy(i){const e=new DataView(i);let t=0,r="";for(let f=0;f<8;f++)r+=String.fromCharCode(e.getUint8(t++));if(r!==Vy)throw new Error("not a NEXARA strand asset");const n=e.getUint32(t,!0),a=e.getUint32(t+4,!0),s=e.getUint32(t+8,!0);t+=12;const o=[0,1,2].map(f=>e.getFloat32(t+f*4,!0)),c=[0,1,2].map(f=>e.getFloat32(t+12+f*4,!0));t+=24;const l=44+4*(n+1)+Wa(n)+Wa(a*6)+4*s;if(i.byteLength!==l)throw new Error("strand asset size mismatch");const u=new Uint32Array(n+1);for(let f=0;f<=n;f++,t+=4)u[f]=e.getUint32(t,!0);const h=new Float32Array(n);for(let f=0;f<n;f++)h[f]=e.getUint8(t+f)/255;t+=Wa(n);const d=new Float32Array(a*3);for(let f=0;f<a*3;f++){const v=f%3;d[f]=o[v]+(e.getInt16(t+f*2,!0)+32768)/65535*(c[v]-o[v]||1)}t+=Wa(a*6);const m=new Uint32Array(s);for(let f=0;f<s;f++,t+=4)m[f]=e.getUint32(t,!0);if(u[0]!==0||u[n]!==a)throw new Error("strand asset starts do not cover the points");for(let f=1;f<=n;f++)if(u[f]<u[f-1])throw new Error("strand asset starts are not ordered");for(let f=0;f<s;f++)if(m[f]>=a)throw new Error("strand asset node index out of range");for(let f=0;f<3;f++)if(!Number.isFinite(o[f])||!Number.isFinite(c[f])||o[f]>c[f])throw new Error("strand asset bounds are invalid");return{points:d,starts:u,ranks:h,nodes:m,directionCoverage:1}}const Jl=0,_l=1,Wu=(i,e)=>{let t="";for(let r=0;r<32;r++)t+=i.getUint8(e+r).toString(16).padStart(2,"0");return t};function Gy(i){const e=new DataView(i);if(i.byteLength<76)throw new Error("strand binding too short");let t="";for(let o=0;o<8;o++)t+=String.fromCharCode(e.getUint8(o));if(t!=="NXSTB001"&&t!=="NXSTB002")throw new Error("not a NEXARA strand binding");const r=e.getUint32(8,!0),n=t==="NXSTB002"?4*Math.ceil(r/4):0;if(i.byteLength!==76+n+r*32)throw new Error("strand binding size mismatch");const a={format:t,strandsSha256:Wu(e,12),glbSha256:Wu(e,44),owners:new Uint8Array(r),points:new Uint32Array(r),triangles:new Uint32Array(r),bary:new Float32Array(r*3),offsets:new Float32Array(r*3)};let s=76;if(t==="NXSTB002"){for(let o=0;o<r;o++){const c=e.getUint8(s+o);if(c!==Jl&&c!==_l)throw new Error("strand binding owner role is invalid");a.owners[o]=c}for(let o=r;o<n;o++)if(e.getUint8(s+o)!==0)throw new Error("strand binding role padding is not zero");s+=n}for(let o=0;o<r;o++,s+=4)a.points[o]=e.getUint32(s,!0);for(let o=0;o<r;o++,s+=4)a.triangles[o]=e.getUint32(s,!0);for(let o=0;o<r*3;o++,s+=4)a.bary[o]=e.getFloat32(s,!0);for(let o=0;o<r*3;o++,s+=4)a.offsets[o]=e.getFloat32(s,!0);for(let o=1;o<r;o++)if(a.points[o]<=a.points[o-1])throw new Error("strand binding points are not strictly ascending");for(let o=0;o<r;o++){const c=a.bary[o*3],l=a.bary[o*3+1],u=a.bary[o*3+2];if(![c,l,u].every(h=>Number.isFinite(h)&&h>=-1e-6)||Math.abs(c+l+u-1)>1e-5)throw new Error("strand binding barycentrics are invalid")}if(!a.offsets.every(Number.isFinite))throw new Error("strand binding offsets are not finite");return a}function Xu(i,e){const t=i.ranks.length,r=new Int32Array(i.points.length/3).fill(-1),n=[],a=[0],s=[],o=[];for(let l=0;l<t;l++)if(e(l)){n.push(l),s.push(i.ranks[l]);for(let u=i.starts[l];u<i.starts[l+1];u++)r[u]=o.length/3,o.push(i.points[u*3],i.points[u*3+1],i.points[u*3+2]);a.push(o.length/3)}const c=[];for(const l of i.nodes)r[l]>=0&&c.push(r[l]);return{sub:{points:new Float32Array(o),starts:new Uint32Array(a),ranks:new Float32Array(s),nodes:new Uint32Array(c),directionCoverage:i.directionCoverage},strands:n,pointMap:r}}function Wy(i,e,t){const r=i.points.length/3,n=i.ranks.length,a=new Uint32Array(r);for(let h=0;h<n;h++)for(let d=i.starts[h];d<i.starts[h+1];d++)a[d]=h;const s=new Uint8Array(n),o=t[Jl]?.deltas.length??0;for(const h of t){if(!h||h.deltas.length!==o)throw new Error("owner meshes must carry the same targets");for(const d of h.deltas)if(d.length!==h.triangleCount*9)throw new Error("owner corner deltas do not match the triangle count")}for(let h=0;h<e.points.length;h++){const d=t[e.owners[h]];if(!d)throw new Error("strand binding owner mesh is missing");if(e.points[h]>=r)throw new Error("strand binding point out of range");if(e.triangles[h]>=d.triangleCount)throw new Error("strand binding triangle out of range");s[a[e.points[h]]]=1}const c=Xu(i,h=>s[h]===1),l=Xu(i,h=>s[h]===0),u=Array.from({length:o},()=>new Float32Array(c.sub.points.length));for(let h=0;h<e.points.length;h++){const d=c.pointMap[e.points[h]]*3,m=e.triangles[h],f=t[e.owners[h]].deltas;for(let v=0;v<o;v++){const p=f[v];for(let g=0;g<3;g++){let b=0;for(let A=0;A<3;A++)b+=e.bary[h*3+A]*p[(m*3+A)*3+g];u[v][d+g]=b}}}return{moving:c.sub,movingStrands:new Uint32Array(c.strands),rest:l.sub,deltas:u,boundPoints:e.points.length}}const Xy=["BOOTING","IDLE","LISTENING","THINKING","SPEAKING","INTERRUPTED","ERROR"],jy={BOOTING:{glow:.6,crown:.5,crownPulse:0,core:.6,desaturate:0,conversationActive:!1},IDLE:{glow:1,crown:1,crownPulse:0,core:1,desaturate:0,conversationActive:!1},LISTENING:{glow:1.1,crown:1.15,crownPulse:0,core:1.1,desaturate:0,conversationActive:!0},THINKING:{glow:1,crown:1.2,crownPulse:.35,core:1,desaturate:0,conversationActive:!0},SPEAKING:{glow:1.2,crown:1.1,crownPulse:0,core:1.3,desaturate:0,conversationActive:!0},INTERRUPTED:{glow:.85,crown:.8,crownPulse:0,core:.8,desaturate:0,conversationActive:!0},ERROR:{glow:.7,crown:.6,crownPulse:0,core:.5,desaturate:.7,conversationActive:!1}};function ho(i){return jy[i]}function qy(i){return typeof i=="string"&&Xy.includes(i)}const Yy=["complete","stop","cancel","interrupt","error"],an=["yaw","pitch","roll"],oi=()=>({yaw:0,pitch:0,roll:0}),ms=i=>{const e=Math.min(1,Math.max(0,i));return e*e*(3-2*e)};function Ky(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ju(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}function $y(i){return i.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase()}function Zy(i,e){return Object.prototype.hasOwnProperty.call(e.shapes,i)?e.shapes[i]:Object.prototype.hasOwnProperty.call(e.pauses,i)?{}:/\p{L}/u.test(i)?e.consonant:/\p{N}/u.test(i)?e.digit:e.other}function qu(i,e,t){const r=i.speech,n=[];let a=r.lead;for(const b of e){const A=$y(b);n.push([a,Zy(A,r)]),a+=1/r.rate+(Object.prototype.hasOwnProperty.call(r.pauses,A)?r.pauses[A]:0)}const s=n.length?a:0,o=s+r.settle;if(o>ps)throw new RangeError(`utterance would last ${o.toFixed(1)} s; the limit is ${ps} s`);const c=r.sampleHz,l=Math.ceil(s*c)+1,u=new Set;for(const b of[...Object.values(r.shapes),r.consonant,r.digit,r.other])for(const A of Object.keys(b))u.add(A);const h=i.targets.filter(b=>u.has(b)),d={};for(const b of h)d[b]=new Float64Array(l);const m=Object.fromEntries(h.map(b=>[b,0])),f=h.includes("jawOpen")?"jawOpen":null,v=1-Math.exp(-1/(c*r.attack)),p=1-Math.exp(-1/(c*r.release));let g=0;for(let b=0;b<l;b++){const A=b/c;for(;g+1<n.length&&n[g+1][0]<=A;)g++;const M=n.length>0&&A>=n[0][0]&&A<s,T=R=>M?(n[g][1][R]??0)*r.intensity:0,E=f!==null&&T(f)>m[f]?v:p;for(const R of h)m[R]+=(T(R)-m[R])*E,d[R][b]=m[R]}return{end:s,duration:o,n:l,hz:c,channels:h,w:d,head:Jh(i,s,l,c,t)}}function Jh(i,e,t,r,n){const a=i.tilt,s=Ky(n),o=[];for(let h=a.firstAt;h<e-a.endGuard;h+=a.interval+a.intervalSpread*s())o.push([h,{yaw:(s()*2-1)*a.limitsDeg.yaw,pitch:(s()*2-1)*a.limitsDeg.pitch,roll:(s()*2-1)*a.limitsDeg.roll}]);const c={yaw:new Float64Array(t),pitch:new Float64Array(t),roll:new Float64Array(t)},l=oi();let u=-1;for(let h=0;h<t;h++){const d=h/r;for(;u+1<o.length&&o[u+1][0]<=d;)u++;for(const m of an){const f=u>=0&&d<e?o[u][1][m]:0;l[m]+=(f-l[m])*(1-Math.exp(-1/(r*a.ease))),c[m][h]=l[m]}}return c}const Yu=(i,e)=>Math.max(1,Math.ceil(i*e/1e3-1e-9));function Qh(i){const{rateHz:e,voice:t}=i.envelope;if(!Number.isInteger(e)||e<10||e>200)return`rateHz must be an integer in 10..200, not ${e}`;if(!Number.isFinite(i.durationMs)||!(i.durationMs>0)||i.durationMs>12e4)return`durationMs must be in (0, 120000], not ${i.durationMs}`;if(!Array.isArray(t)||t.length!==Yu(i.durationMs,e))return`the voice track must have ${Yu(i.durationMs,e)} frames`;for(let r=0;r<t.length;r++){const n=t[r];if(typeof n!="number"||!Number.isFinite(n)||n<0||n>1)return`voice level ${r} must be a finite number in [0, 1]`}return!Number.isFinite(i.offsetMs)||i.offsetMs<0||i.offsetMs>=i.durationMs?`offsetMs must be in [0, durationMs), not ${i.offsetMs}`:!Number.isFinite(i.gain)||i.gain<0||i.gain>20?`gain must be in [0, 20], not ${i.gain}`:null}function Jy(i,e,t){const r=Qh(e);if(r)throw new RangeError(r);const n=i.speech,a=n.sampleHz,s=(e.durationMs-e.offsetMs)/1e3,o=s+n.settle,c=Math.ceil(s*a)+1,l=n.shapes.a??{},u=i.targets.filter(g=>(l[g]??0)!==0),h={};for(const g of u)h[g]=new Float64Array(c);const d=1-Math.exp(-1/(a*n.attack)),m=1-Math.exp(-1/(a*n.release)),{rateHz:f,voice:v}=e.envelope;let p=0;for(let g=0;g<c;g++){const b=e.offsetMs+1e3*g/a,A=Math.floor(b*f/1e3),M=b<e.durationMs&&A<v.length?v[A]:0,T=Math.min(1,Math.max(0,M*e.gain));p+=(T-p)*(T>p?d:m);for(const E of u)h[E][g]=p*(l[E]??0)*n.intensity}return{end:s,duration:o,n:c,hz:a,channels:u,w:h,head:Jh(i,s,c,a,t)}}function Qy(i,e){return i*e}function Ku(i,e,t){if(!(t>=0)||t>=i.duration)return 0;const r=n=>{const a=Math.max(0,Math.min(i.n-1,n*i.hz)),s=Math.floor(a),o=a-s;return s+1<i.n?e[s]*(1-o)+e[s+1]*o:e[i.n-1]};return t<=i.end?r(t):r(i.end)*(1-ms((t-i.end)/(i.duration-i.end)))}const ni=()=>({weights:{},head:oi()}),eM=i=>Object.values(i.weights).every(e=>e===0)&&an.every(e=>i.head[e]===0);function po(i,e,t,r=!1){return eM(i)?null:{t0:e,dur:t,terminal:r,...i}}function gs(i,e,t=1){for(const[r,n]of Object.entries(e))i[r]=(i[r]??0)+n*t}function xl(i,e,t){const r={};gs(r,i.weights,1-t),gs(r,e.weights,t);const n=oi();for(const a of an)n[a]=i.head[a]*(1-t)+e.head[a]*t;return{weights:r,head:n}}function fo(i,e,t){return!i||t>=i.t0+i.dur?e:xl(i,e,ms((t-i.t0)/i.dur))}function $u(i){if(typeof i!="number"||!Number.isFinite(i))throw new RangeError(`time must be a finite number of seconds, got ${i}`)}function Zu(i){for(const e of["epoch","turn","chunk","segment"]){const t=i?.[e];if(!Number.isSafeInteger(t)||t<0)throw new RangeError(`delivery key ${e} must be a non-negative integer, got ${t}`)}}const tM=(i,e)=>i.epoch===e.epoch&&i.turn===e.turn&&i.chunk===e.chunk&&i.segment===e.segment;function mo(i){const e=i.resetSeconds,t=i.transition.fade,r=i.headBoundsDeg;let n=-1/0,a="IDLE",s=!1,o=-1,c=-1,l=null,u=null,h="neutral",d=0,m={t0:-1/0,dur:t,...ni()},f={t0:-1/0,dur:t,from:1},v=null,p=null;const g=i.sigh.keys,b=g[g.length-1].t;let A=0,M=[-1,-1],T=null;const E=(i.speech.shapes.a?.jawOpen??0)*i.speech.intensity;function R(N){if($u(N),N<n)throw new RangeError(`commands must come in time order (got ${N} after ${n})`);n=N,u&&N>=u.t0+u.dur&&(u=null),p&&N>=p.t0+p.dur&&(p=null),l&&N-l.start>=l.curve.duration&&(l=null),v&&N-v.start>=b&&(v=null)}function x(N,j){if(!N)return ni();const ie=j-N.start,we={};for(const Re of N.curve.channels)we[Re]=Ku(N.curve,N.curve.w[Re],ie);const De=oi();if(N.tilts)for(const Re of an)De[Re]=Ku(N.curve,N.curve.head[Re],ie);return{weights:we,head:De}}function S(N){return fo(u,x(l,N),N)}function P(){if(h==="neutral"||d===0)return ni();const N=i.presets[i.emotions[h]],j={};return gs(j,N.weights,d),{weights:j,head:{yaw:N.head.yaw*d,pitch:N.head.pitch*d,roll:N.head.roll*d}}}function L(){return h==="neutral"||d===0||!i.emotionGlow?1:1+(i.emotionGlow[h]-1)*d}function B(N){const j=L();if(s||!(f.dur>0))return j;const ie=ms((N-f.t0)/f.dur);return ie>=1?j:f.from*(1-ie)+j*ie}function J(N){const j=P();return s?{weights:j.weights,head:oi()}:fo(m.dur>0?m:null,j,N)}function te(N){if(!v)return ni();const j=N-v.start;if(!(j>=0)||j>=b)return ni();let ie=0;for(;ie+1<g.length&&g[ie+1].t<=j;)ie++;const we=g[ie],De=g[Math.min(ie+1,g.length-1)],Re=De.t>we.t?ms((j-we.t)/(De.t-we.t)):0,Z=xl(we,De,Re);return xl(ni(),Z,v.intensity)}function G(N){return fo(p,te(N),N)}function Y(N){!l&&u?.terminal||(u=po(S(N),N,e,!0),l=null)}function V(N){!v&&p?.terminal||(p=po(G(N),N,e,!0),v=null)}function re(){return!!v||!!p&&!p.terminal}function se(N,j,ie,we,De){o=Math.max(o,N.turn),M=[N.turn,N.chunk],Y(De),s||(l={turn:N.turn,start:De,curve:ie,tilts:!0}),T={key:{epoch:N.epoch,turn:N.turn,chunk:N.chunk,segment:N.segment},mode:j,ended:!1,cutSinceSegment:!1,segStartOffsetMs:we,endsAt:De+ie.duration}}return{table:i,setPresence(N,j){if(!qy(N))throw new RangeError(`unknown presence state ${String(N)}`);R(j),a==="SPEAKING"&&N!=="SPEAKING"&&(Y(j),T&&(T.cutSinceSegment=!0)),(N==="INTERRUPTED"||N==="ERROR")&&V(j),a=N},speak(N,j,ie){if(typeof j!="string")throw new TypeError("text must be a string");if(R(ie),!Number.isSafeInteger(N)||N<0)throw new RangeError(`turn must be a non-negative integer, got ${N}`);if(N<=o||a!=="SPEAKING")return!1;const we=qu(i,j,ju(`nexara-tilt:${N}`));return se({epoch:A,turn:N,chunk:0,segment:0},"animation",we,0,ie),!0},startDelivery(N,j,ie){if(j?.mode!=="audio"&&j?.mode!=="animation")throw new RangeError(`unknown delivery mode ${String(j?.mode)}`);if(typeof j.text!="string")throw new TypeError("text must be a string");if(R(ie),Zu(N),a!=="SPEAKING"||N.epoch!==A||j.mode==="audio"&&Qh(j)!==null)return!1;const we=j.mode==="audio"?j.offsetMs:0,De=N.segment===0&&(N.turn>M[0]||N.turn===M[0]&&N.chunk>M[1])&&N.turn>c,Re=!!T&&!T.ended&&N.turn===T.key.turn&&N.chunk===T.key.chunk&&N.segment===T.key.segment+1&&j.mode===T.mode&&T.cutSinceSegment&&(j.mode!=="audio"||we>=T.segStartOffsetMs);if(!De&&!Re)return!1;const Z=ju(`nexara-tilt:${N.epoch}:${N.turn}:${N.chunk}:${N.segment}`);let oe;try{oe=j.mode==="audio"?Jy(i,j,Z):qu(i,j.text,Z)}catch(Q){if(Q instanceof RangeError)return!1;throw Q}return se(N,j.mode,oe,we,ie),!0},endDelivery(N,j){return R(j),Zu(N),!T||T.ended||!tM(T.key,N)?!1:(Y(j),T.ended=!0,!0)},resetSession(N,j){if(R(j),!Number.isSafeInteger(N)||N<0)throw new RangeError(`epoch must be a non-negative integer, got ${N}`);return N<=A?!1:(A=N,Y(j),V(j),T=null,M=[-1,-1],o=-1,c=-1,!0)},endTurn(N,j,ie){if(!Yy.includes(ie))throw new RangeError(`unknown turn end reason ${String(ie)}`);if(R(j),!Number.isSafeInteger(N)||N<0)throw new RangeError(`turn must be a non-negative integer, got ${N}`);return N<o||N<=c?!1:(o=N,c=N,Y(j),V(j),T&&(T.ended=!0),!0)},setEmotion(N,j,ie){if(!ds.includes(N))throw new RangeError(`unknown emotion ${String(N)}`);if(typeof j!="number"||!Number.isFinite(j)||j<0||j>1)throw new RangeError(`intensity must be in 0..1, got ${j}`);R(ie);const we=J(ie),De=B(ie);h=N,d=N==="neutral"?0:j,m={t0:ie,dur:t,terminal:!1,...we},f={t0:ie,dur:t,from:De}},sigh(N,j=1){if(typeof j!="number"||!Number.isFinite(j)||j<=0||j>1)throw new RangeError(`sigh intensity must be in (0, 1], got ${j}`);return R(N),s?!1:(p=po(G(N),N,t),v={start:N,intensity:j},!0)},cancelSigh(N){return R(N),re()?(V(N),!0):!1},setReducedMotion(N,j){if(R(j),N!==s)if(N)s=!0,l=null,u=null,v=null,p=null;else{const ie={weights:P().weights,head:oi()};s=!1,m={t0:j,dur:t,terminal:!1,...ie},f={t0:j,dur:0,from:L()}}},clear(N){R(N),l=null,u=null,v=null,p=null,h="neutral",d=0,m={t0:N,dur:0,terminal:!1,...ni()},f={t0:N,dur:0,from:1}},sample(N){if($u(N),N<n)throw new RangeError(`sample time ${N} is before the last command (${n})`);const j={},ie=oi(),we=s?ni():S(N),De=s?[J(N)]:[we,J(N),G(N)];for(const Q of De){gs(j,Q.weights);for(const Le of an)ie[Le]+=Q.head[Le]}const Re={};for(const Q of i.targets)Re[Q]=Math.min(1,Math.max(0,j[Q]??0));const Z=oi();if(!s)for(const Q of an)Z[Q]=Math.min(r[Q],Math.max(-r[Q],ie[Q]))||0;const oe=E>0?Math.min(1,Math.max(0,(we.weights.jawOpen??0)/E)):0;return{weights:Re,head:Z,glow:B(N),speechLevel:oe}},state(){return{presence:a,reducedMotion:s,turn:o,speaking:!!l&&n-l.start<l.curve.duration,tilts:!!l&&l.tilts,emotion:h,intensity:d,sigh:re(),epoch:A,delivery:T?{key:{...T.key},mode:T.mode,ended:T.ended,endsAt:T.endsAt}:null}}}}const yl=Object.freeze({version:"nexara-glow/1.0.0",speakingGain:.12});function Ju(i){const e=i?.emotionGlow?Object.values(i.emotionGlow):[];return 2*Math.max(1,...e)}function rM(i,e,t,r,n=yl){return Math.min(Qy(i,e)*(1+n.speakingGain*t),r)}const iM={complete:"complete",interrupted:"interrupt",failed:"error",revoked:"stop"};function nM(i,e){let t,r=0,n=new Set,a=null,s=null,o=!1,c=null,l=null,u=null,h=null;const d={starts:0,resumes:0,refused:0,lateFrames:0,deliveryEnds:0,turnEnds:0,unknownEnds:0,resets:0,emotions:0,unknownEmotions:0};function m(f){const v=i.transcript().find(g=>g.turnId===f)?.status;return(v===void 0?void 0:iM[v])||(d.unknownEnds++,"stop")}return{sync(f){const v=f/1e3,p=i.snapshot(f),g=i.delivery(f);p.sessionId!==t&&(t&&(r+=1,e.resetSession(r,v),d.resets++,n=new Set,a=null,s=null,c=null,l=null,u=null,h=null),t=p.sessionId),p.reducedMotion!==l&&(e.setReducedMotion(p.reducedMotion,v),l=p.reducedMotion);const b=`${p.emotion}:${p.emotionIntensity}`;if(b!==h)if(h=b,ds.includes(p.emotion)&&Number.isFinite(p.emotionIntensity)){const E={emotion:p.emotion,intensity:Math.min(1,Math.max(0,p.emotionIntensity))};e.setEmotion(E.emotion,E.intensity,v),u=E,d.emotions++}else d.unknownEmotions++;if(a&&a.turnId!==p.activeTurnId&&(e.endTurn(a.ordinal,v,m(a.turnId)),d.turnEnds++,a=null,s=null),s&&!(g&&g.turnId===s.turnId&&g.captionIndex===s.key.chunk)&&(e.endDelivery(s.key,v),d.deliveryEnds++,s=null),o=!!s&&!!g&&g.stalled,p.state!==c&&(e.setPresence(p.state,v),c=p.state),p.state!=="SPEAKING"||!g||g.stalled)return;const A={epoch:r,turn:g.turnOrdinal,chunk:g.captionIndex,segment:g.segment},M=`${A.turn}:${A.chunk}:${A.segment}`;if(n.has(M))return;n.add(M);let T;if(g.mode==="audio"){const E=g.anchorOffsetMs+(f-g.anchorAt);if(E>=g.durationMs){d.lateFrames++;return}T={mode:"audio",text:g.text,envelope:g.envelope,gain:i.config.l1JawGain,offsetMs:Math.max(0,E),durationMs:g.durationMs}}else T={mode:"animation",text:g.text};if(!e.startDelivery(A,T,v)){d.refused++;return}s={key:A,turnId:g.turnId},o=!1,a={turnId:g.turnId,ordinal:g.turnOrdinal},A.segment>0?d.resumes++:d.starts++},stats(){return{...d}},state(){let f=null;if(s&&!o){const v=e.state().delivery;v&&!v.ended&&v.key.epoch===s.key.epoch&&v.key.turn===s.key.turn&&v.key.chunk===s.key.chunk&&v.key.segment===s.key.segment&&(f=v.endsAt*1e3)}return{epoch:r,heldTurn:a?{...a}:null,running:s?{...s.key}:null,runningEndsAt:f,presence:c,reducedMotion:l,emotion:u?{...u}:null}}}}function aM(i,e,t){const r=nM(i,e);let n=-1/0,a=null,s=null;return{adapter:r,sync(o){const c=Math.max(o,n);r.sync(c),n=c;const l=r.state();l.reducedMotion!==null&&l.reducedMotion!==s&&(s=l.reducedMotion,t.reducedMotion(s)),l.presence!==null&&l.presence!==a&&(a=l.presence,t.presence(a))},faceTime:()=>n/1e3}}function sM(i){const e=new Set;let t=!1;return{add(r){return t?()=>{}:(e.add(r),()=>{e.delete(r)})},run(r){for(const n of[...e]){if(t||!r())return!1;if(e.has(n))try{n()}catch(a){i(a)}}return!t&&r()},close(){t=!0,e.clear()}}}function oM(i,e){let t={...i};const r=new Set;let n=!1;const a=()=>({...t,framesDrawn:e()});return{status:a,subscribe(s){return n?()=>{}:(r.add(s),()=>{r.delete(s)})},set(s){if(n)return;const o={...t,...s};if(o.head===t.head&&o.drawable===t.drawable&&o.net===t.net&&o.lastError===t.lastError)return;t=o;const c=a();for(const l of[...r]){if(n)return;if(r.has(l))try{l({...c})}catch{}}},close(){n=!0,r.clear()}}}function Qu(i,e){try{return i(),!0}catch(t){return e(t),!1}}const lM={high:{maxPixelRatio:2,bloom:!0,bloomScale:.5,sparkles:2400,arcs:30,lattice:!0,strands:1},medium:{maxPixelRatio:1.5,bloom:!0,bloomScale:.35,sparkles:1200,arcs:18,lattice:!0,strands:.6},low:{maxPixelRatio:1,bloom:!1,bloomScale:0,sparkles:250,arcs:8,lattice:!1,strands:0}},Xa=["high","medium","low"],cM={downMs:25,downAfter:2,upMs:12,upAfter:8,alpha:.1};function eh(i){return{tier:i,avgMs:16.7,slowFor:0,fastFor:0}}function th(i,e,t=cM){const r=Math.min(Math.max(e,0),250),n=i.avgMs+t.alpha*(r-i.avgMs),a=r/1e3;let s=n>t.downMs?i.slowFor+a:0,o=n<t.upMs?i.fastFor+a:0,c=i.tier;const l=Xa.indexOf(c);return s>=t.downAfter&&l<Xa.length-1?(c=Xa[l+1],s=0,o=0):o>=t.upAfter&&l>0&&(c=Xa[l-1],s=0,o=0),{tier:c,avgMs:n,slowFor:s,fastFor:o}}function uM(i,e){return e?{...i,sparkles:Math.min(i.sparkles,200)}:i}function hM(i){const e=i.transparent===!0;return{clearAlpha:e?0:1,background:!e,halo:e,bloom:!e}}const Ml=i=>typeof i=="number"&&Number.isFinite(i)&&i>=1&&i<=4;function dM(i,e,t,r){let n=i;return e<t&&(n=Math.atan(Math.tan(i*Math.PI/360)*t/e)*360/Math.PI),!Ml(r)||r===1?n:Math.atan(Math.tan(n*Math.PI/360)*r)*360/Math.PI}function pM(i){return typeof i=="number"&&Number.isFinite(i)&&i>0&&i<=40?null:`speechRate must be in (0, 40] characters per second, not ${String(i)}`}function fM(i){const e=i?.trim();if(e){if(fs(e))return e.startsWith("#")?e:`#${e}`;if(!(!/^(rgba?|hsla?)\(/i.test(e)&&!Object.prototype.hasOwnProperty.call(be.NAMES,e.toLowerCase())))return`#${new be().setStyle(e).getHexString()}`}}function mM(i,e,t,r){const n=new Wx(i);n.addPass(new Xx(e,t));const a=new dn(new Pe(256,256),...r);return n.addPass(a),n.addPass(new qx),{composer:n,bloom:a}}function gM(i){for(const e of i.passes){e.dispose();for(const t of Object.values(e))for(const r of Array.isArray(t)?t:[t])(r instanceof Xt||r instanceof hr)&&r.dispose()}i.dispose()}function vM(i){let e=i,t=!1;return{step(r){const n=t?0:r-e;return t=!1,e=r,n},resume(){t=!0}}}let _M=0;function xM(i){const e=ey(i.manifest);if(e.length)throw new Error(`invalid avatar manifest: ${e.join("; ")}`);const t=i.manifest,r=i.canvas;if(i.palette!==void 0&&i.palette!=="on-white")throw new RangeError(`unknown stage palette ${String(i.palette)}`);if(i.speechRate!==void 0){const C=pM(i.speechRate);if(C)throw new RangeError(C)}const n=hM(i),a=i.palette==="on-white"?uy(fM(i.accent)):null,s=C=>a??ly[C];let o={...i.look??fl},c=s(o.background),l=Ml(i.framing)?i.framing:1,u=i.quality??"high",h=eh(u),d=i.reducedMotion??!1,m="IDLE";const f=iy(t),v=Object.fromEntries(f.map(C=>[C,0])),p={yaw:0,pitch:0,roll:0},g=[],b=new Set(t.morphRoles??["head","mouthCavity"]);let A=null,M=null,T=null,E=[],R=null;const x=new D(...t.pivot?.point??[0,0,0]);let S=null,P=null,L=i.emotionGlow??!0,B=1,J=0,te=Ju(null);const G=()=>rM(o.glow,B,J,te);let Y="manual",V=null,re=0;const se=++_M,N=()=>V?V.follower.faceTime():K,j={...Ti,pitchMinDeg:t.orbit.pitchMinDeg,pitchMaxDeg:t.orbit.pitchMaxDeg,dampingSeconds:t.orbit.dampingSeconds};let ie=Ay(i.initialYawDeg??t.camera.canonicalYawDeg,i.initialPitchDeg??0,j);const we=new ix({canvas:r,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});we.outputColorSpace=At,we.toneMapping=xr,we.setClearColor(0,n.clearAlpha);const De=new nf,Re=new Wt(t.camera.fovDeg,1,.05,60),Z=new D(...t.camera.target),oe=Dy(t.orbit.zoom.minScale,t.orbit.zoom.maxScale,t.boundingBox.min,t.boundingBox.max,t.camera.target,t.orbit.zoom.aim);let Q=gl(i.initialZoom??1,i.initialAim??[0,0,0],oe);const Le=new D,ke=My(c);ke.visible=n.background,De.add(ke);const ve=n.halo&&c.haloAlpha?Sy(c):null;ve&&De.add(ve);const et=new cr;et.name="nexara-avatar",De.add(et);const rt={fromY:t.neckFade.fromY,toY:t.neckFade.toY},Be=py(c,o,rt),Je=fy(c,o);let nt=null,dt=null,_t=null,pt=null,Mt=0,He=!1;const xt=new D(...t.core.position);function U(){nt&&(De.remove(nt.group),Ie(nt.group)),dt&&(De.remove(dt.group),Ie(dt.group)),nt=Ty(c),dt=wy(c,xt,t.neckFade.fromY),_t=o.background,De.add(nt.group,dt.group),k()}function Dt(){return mM(we,De,Re,c.bloom)}let{composer:tt,bloom:w}=Dt();function _(){return uM(lM[u],d)}function k(){const C=_();nt&&(nt.group.visible=o.network,nt.setCounts(C.sparkles,C.arcs),nt.sparkleMaterial.uniforms.uTwinkle.value=d?0:1),dt&&(dt.group.visible=o.core),Be.uniforms.uLatticeAlpha.value=C.lattice?c.latticeAlpha:0,S&&ml(S,c,o,void 0,C.lattice),Je.uniforms.uWeb.value=o.crown==="web"&&C.lattice?1:0,q(o.surface),w.enabled=X(),w.strength=c.bloom[0]*G(),w.radius=c.bloom[1],w.threshold=c.bloom[2]}function X(){return n.bloom&&_().bloom&&o.glow>0&&o.surface==="hologram"}function q(C){const $=C!=="hologram",ee=C==="mask"?2:$?1:0;Be.uniforms.uNeutral.value=ee,S&&(S.uniforms.uNeutral.value=ee),Je.uniforms.uNeutral.value=ee,ke.visible=n.background&&C!=="mask",ve&&(ve.visible=C==="hologram"),C==="mask"&&(nt&&(nt.group.visible=!1),dt&&(dt.group.visible=!1));for(const ye of[Be,Je]){const Ve=!$;ye.transparent!==Ve&&(ye.transparent=Ve,ye.needsUpdate=!0)}Je.depthWrite=$}function fe(){c=s(o.background),my(Be,c,o,rt),gy(Je,c,o),S&&ml(S,c,o,void 0,_().lattice),Uu(ke,c,Re.aspect),ve&&Ou(ve,c,Re.aspect),_t!==o.background?U():k(),he()}function he(){const C=ho(m);Be.uniforms.uGlow.value=G()*C.glow,Be.uniforms.uDesaturate.value=C.desaturate,S&&(S.uniforms.uGlow.value=o.glow*C.glow,S.uniforms.uDesaturate.value=C.desaturate),Je.uniforms.uGlow.value=G()*C.crown,Je.uniforms.uPulse.value=d?0:C.crownPulse,Je.uniforms.uDesaturate.value=C.desaturate,dt?.setIntensity(C.core)}function O(){Re.fov=dM(t.camera.fovDeg,Re.aspect,.62,l),Re.updateProjectionMatrix()}function ce(){const C=Math.max(1,r.clientWidth),$=Math.max(1,r.clientHeight),ee=Math.min(window.devicePixelRatio||1,_().maxPixelRatio);we.setPixelRatio(ee),we.setSize(C,$,!1),tt.setPixelRatio(ee),tt.setSize(C,$);const ye=Math.max(_().bloomScale,.1);w.setSize(Math.max(1,Math.round(C*ee*ye)),Math.max(1,Math.round($*ee*ye))),Re.aspect=C/$,O(),Uu(ke,c,Re.aspect),ve&&Ou(ve,c,Re.aspect),nt&&(nt.sparkleMaterial.uniforms.uPixelRatio.value=ee)}function de(){const[C,$,ee]=Iy(ie.yawDeg,ie.pitchDeg,t.camera.distance/Q.scale);Le.set(Z.x+Q.aim[0],Z.y+Q.aim[1],Z.z+Q.aim[2]),Re.position.set(Le.x+C,Le.y+$,Le.z+ee),Re.up.set(0,1,0),Re.lookAt(Le)}const Te=new om,ae=new ai,Ue=new D,Ne=new Pe;function ze(C,$){if(C===void 0||$===void 0)return[...Q.targetAim];de(),Re.updateMatrixWorld();const ee=r.getBoundingClientRect();Ne.set((C-ee.left)/ee.width*2-1,-(($-ee.top)/ee.height)*2+1),Te.setFromCamera(Ne,Re);const ye=Re.getWorldDirection(new D);return ae.setFromNormalAndCoplanarPoint(ye,Le),Te.ray.intersectPlane(ae,Ue)?[Ue.x-Z.x,Ue.y-Z.y,Ue.z-Z.z]:[...Q.targetAim]}function Ge(C,$,ee){Q=vl(Q,C,ze($,ee),oe),ie={...ie,userHasInteracted:!0}}const I=new be;let K=i.fixedTime??0,le=0;const pe=oM({head:"loading",drawable:!0,net:t.decorations?.crownStrands&&i.strandsUrl?"loading":"absent",lastError:null},()=>le),xe=sM(C=>pe.set({lastError:`frame callback: ${String(C)}`}));function ne(){if(He||tr||dr)return;de();const C=i.fixedTime??K;if(Be.uniforms.uTime.value=d?0:C,Je.uniforms.uTime.value=d?0:C,pt){const $=_(),ee=ui((Q.scale-1)/2,0,1);Mt=$.strands*(.4+.3*ee),pt.group.visible=o.crown==="web"&&o.surface==="hologram"&&$.strands>0;const ye=ho(m);pt.update({visible:Mt,intensity:Math.max(G(),.4)*ye.crown,core:Je.uniforms.uLattice.value,sheath:I.set(c.crownSheath),pixelRatio:we.getPixelRatio(),time:d?0:C,pulse:d?0:ye.crownPulse})}nt&&(nt.sparkleMaterial.uniforms.uTime.value=d?0:C,!d&&i.fixedTime===void 0&&(nt.group.rotation.y=C*.01)),X()?tt.render():we.render(De,Re),le++,pe.status().drawable||pe.set({drawable:!0})}const Ae=new Map;let _e=0;const wt=()=>{const[C,$]=[...Ae.values()];return{x:(C.x+$.x)/2,y:(C.y+$.y)/2,d:Math.hypot(C.x-$.x,C.y-$.y)}},ot=C=>{Ae.set(C.pointerId,{x:C.clientX,y:C.clientY}),r.setPointerCapture(C.pointerId),Ae.size===2&&(_e=wt().d)},qt=C=>{const $=Ae.get(C.pointerId);if($&&(Ae.size===1&&(ie=Ry(ie,C.clientX-$.x,C.clientY-$.y,j)),$.x=C.clientX,$.y=C.clientY,Ae.size===2)){const ee=wt();_e>0&&ee.d>0&&Ge(ee.d/_e,ee.x,ee.y),_e=ee.d}},kt=C=>{Ae.delete(C.pointerId),_e=Ae.size===2?wt().d:0},ia=C=>{C.preventDefault();const $=C.deltaMode===1?C.deltaY*33:C.deltaMode===2?C.deltaY*400:C.deltaY;Ge(Uy($,oe),C.clientX,C.clientY)};r.addEventListener("pointerdown",ot),r.addEventListener("pointermove",qt),r.addEventListener("pointerup",kt),r.addEventListener("pointercancel",kt),r.addEventListener("wheel",ia,{passive:!1}),r.style.touchAction="none";const na=new ResizeObserver(()=>{ce(),Yt&&wi()});na.observe(r);function aa(){const C=new Set,$=ee=>{if(!ee||typeof ee!="object"||C.has(ee))return;C.add(ee);const ye=ee._listeners;ye?.dispose&&(ye.dispose=[])};De.traverse(ee=>{const ye=ee;$(ye.geometry);const Ve=Array.isArray(ye.material)?ye.material:ye.material?[ye.material]:[];for(const Qe of Ve){$(Qe);for(const Ye of Object.values(Qe))Ye instanceof yt&&$(Ye);const qe=Qe.uniforms;if(qe)for(const Ye of Object.values(qe))Ye.value instanceof yt&&$(Ye.value)}}),{composer:tt,bloom:w}=Dt()}let dr=!1;const sa=C=>{C.preventDefault(),dr=!0,pe.set({drawable:!1})},yn=()=>{aa(),ce(),k(),dr=!1,Yt&&wi()};r.addEventListener("webglcontextlost",sa),r.addEventListener("webglcontextrestored",yn);let Sr=0;const br=vM(performance.now());let Yt=!1,Ei=!1;function wi(){Ei&&!He&&!tr&&!dr&&Qu(ne,Ri)}let hi=NaN,Mn=NaN,tr=!1;function Ai(C){He||tr||Yt||(Sr=requestAnimationFrame(Ai),!dr&&xe.run(()=>!He&&!dr&&!tr)&&Qu(()=>Ss(C),Ri))}function Ri(C){tr=!0,cancelAnimationFrame(Sr),pe.set({drawable:!1,lastError:`render: ${String(C)}`})}function Ss(C){const $=br.step(C);K+=$/1e3,V&&H(V.clock()),P&&Y==="driver"&&Or();const ee=ho(m);if(ie=Ly(ie,{dt:$/1e3,reducedMotion:d,conversationActive:ee.conversationActive},j),Q=By(Q,Kh(j.dampingSeconds,ui($/1e3,0,.1)),d),i.adaptiveQuality){const Qe=th(h,$);Qe.tier!==h.tier&&(u=Qe.tier,ce(),k(),i.onTierChange?.(u)),h=Qe}else h=th(h,$);ne();const ye=Math.round(Fu(ie.yawDeg)*10)/10,Ve=Math.round(ie.pitchDeg*10)/10;(ye!==hi||Ve!==Mn)&&(hi=ye,Mn=Ve,i.onOrientationChange?.(ye,Ve))}const oa=(async()=>{const C=await sy(t,i.glbUrl);if(He)return;let $=null;if(t.faceTable&&i.faceTableUrl&&($=$x(await es(t.faceTable,i.faceTableUrl),f,t.pivot?.boundsDeg??{yaw:0,pitch:0,roll:0}),He))return;const ee=await new ax().parseAsync(C,"");if(He){Ie(ee.scene);return}const ye=new Map(t.components.map(Oe=>[Oe.node,Oe.role])),Ve=[],Qe=[];ee.scene.traverse(Oe=>{Qe.push(Oe.name),Oe.isMesh&&Ve.push(Oe)});const qe=oy(t,Qe);if(qe.length)throw new Error(`avatar GLB lacks manifest nodes: ${qe.join(", ")}`);for(const Oe of Ve){const Ut=ye.get(Oe.name)??ye.get(Oe.parent?.name??"");if(f.length&&Ut!==void 0&&b.has(Ut)){const Nt=ny(f,Oe.morphTargetDictionary);if(Nt)throw new Error(`avatar GLB ${Oe.name} ${Nt}`);g.push(Oe)}if(Ut==="mouthCavity"){Oe.geometry=Du(vy(Oe.geometry)),S=yy(c,o),o.surface!=="hologram"&&(S.uniforms.uNeutral.value=o.surface==="mask"?2:1),Oe.material=S,Oe.renderOrder=3,T=Oe;continue}Oe.geometry=Du(Oe.geometry),Ut==="crown"?(Oe.material=Je,Oe.renderOrder=4,A=Oe):(Oe.material=Be,Oe.renderOrder=2,Ut==="head"&&(M=Oe))}if(f.length&&g.length!==b.size)throw new Error(`avatar GLB: speech targets need exactly one mesh for each of ${[...b].join(", ")}`);if(t.pivot){const Oe=ee.scene.getObjectByName(t.pivot.node);if(!Oe)throw new Error(`avatar GLB lacks the pivot node ${t.pivot.node}`);if(!Oe.position.equals(new D)||Oe.quaternion.w!==1||!Oe.scale.equals(new D(1,1,1)))throw new Error(`pivot node ${t.pivot.node} must be identity at rest`);R=Oe}$&&i.speechRate!==void 0&&($={...$,speech:{...$.speech,rate:i.speechRate}}),$&&(P=mo($),te=Ju($),P.setReducedMotion(d,K),P.setPresence(m,K),Y="driver"),Ci(),Me(),et.add(ee.scene),U(),ce(),he(),ne(),Ei=!0,Yt||(Sr=requestAnimationFrame(Ai));const Ye=t.decorations?.crownStrands,Ee=i.strandsUrl;Ye&&Ee&&(async()=>{try{const Oe=await es(Ye,Ee);if(He)return;const Ut=Hy(Oe);let Nt;if(b.has("crown")&&f.length){const pr=Ye.binding,Fr=i.strandBindingUrl;if(!pr||!Fr)throw new Error("the crown moves but the strand binding is missing");const it=Gy(await es(pr,Fr));if(He)return;if(it.strandsSha256!==Ye.sha256||it.glbSha256!==t.glb.sha256)throw new Error("the strand binding was made for a different strand asset or GLB");const mt=(at,di)=>{const fr=at?.geometry,Sn=at?.morphTargetDictionary,Ql=fr?.morphAttributes.position;if(!fr||!Sn||!Ql||fr.index)throw new Error(`the ${di} has no morph targets on its non-indexed geometry`);return{deltas:f.map(td=>Ql[Sn[td]].array),triangleCount:fr.getAttribute("position").count/3}},rr=[];rr[Jl]=mt(A,"crown"),it.owners.includes(_l)&&(rr[_l]=mt(M,"head")),Nt={morph:Wy(Ut,it,rr),names:f}}const zt=zy(Ut,Nt);if(He){Ie(zt.group);return}pt=zt,E=zt.morphObjects,(R??et).add(zt.group),Ci(),pe.set({net:"ready"})}catch(Oe){He||(console.warn("crown strands unavailable:",Oe),pe.set({net:"failed",lastError:`net: ${String(Oe)}`}))}})()})();oa.then(()=>{He||pe.set({head:"ready"})},C=>{He||pe.set({head:"failed",net:pe.status().net==="loading"?"absent":pe.status().net,lastError:`head: ${String(C)}`})});function Ci(){for(const C of[...g,...E]){const $=C.morphTargetDictionary,ee=C.morphTargetInfluences;for(const[ye,Ve]of Object.entries(v))ee[$[ye]]=Ve}}function Or(){const C=P.sample(N());Object.assign(v,C.weights),Object.assign(p,C.head),Ci(),Me(),y(L?C.glow:1,L?C.speechLevel:0)}function y(C,$=0){C===B&&$===J||(B=C,J=$,he(),w.strength=c.bloom[0]*G())}function F(){if(!P)throw new Error("no face table loaded (speech asset with manifest.faceTable and faceTableUrl)");return P}function W(){if(V)throw new Error("the stage follows a presence core: its face takes no direct commands");return F()}function H(C){V.follower.sync(C)}const z={presence(C){m=C,he()},reducedMotion(C){d=C,k(),he()}},ue=new Ir,me=new Yr;function Me(){if(!R)return;const C=Math.PI/180;me.set(p.pitch*C,p.yaw*C,p.roll*C,"YXZ"),ue.setFromEuler(me),R.quaternion.copy(ue),R.position.copy(x).sub(x.clone().applyQuaternion(ue))}function Se(C){for(const ee of Object.values(C))ee instanceof yt&&ee.dispose();const $=C.uniforms;if($)for(const ee of Object.values($))ee.value instanceof yt&&ee.value.dispose();C.dispose()}function Ie(C){C.traverse($=>{const ee=$;ee.geometry?.dispose?.();const ye=ee.material;Array.isArray(ye)?ye.forEach(Se):ye&&Se(ye)})}return{ready:oa,setLook(C){o={...C},fe()},getLook:()=>({...o}),setPresence(C){if(V)throw new Error("the stage follows a presence core: its presence comes from the core");P?.setPresence(C,K),m=C,he()},setFaceControl(C){if(C!=="driver"&&C!=="manual")throw new RangeError(`face control must be driver or manual, got ${String(C)}`);C==="driver"&&F(),Y=C,C==="driver"?Or():y(1)},speak:(C,$)=>W().speak(C,$,K),endTurn:(C,$)=>W().endTurn(C,K,$),startDelivery:(C,$)=>W().startDelivery(C,$,K),endDelivery:C=>W().endDelivery(C,K),resetSession:C=>W().resetSession(C,K),setEmotion:(C,$=1)=>W().setEmotion(C,$,K),sigh:(C=1)=>W().sigh(K,C),cancelSigh:()=>W().cancelSigh(K),clearFace(){W().clear(K),Y==="driver"&&Or()},followPresence(C,$={}){const ee=F().table;if(V)throw new Error("the stage already follows a presence core");const ye=$.clock??(()=>performance.now());P=mo(ee);const Ve={follower:aM(C,P,z),clock:ye},Qe=`stage${se}-follower-${++re}`;return V=Ve,H(ye()),Y==="driver"&&Or(),{notify(qe){V!==Ve||He||(H(qe??ye()),Y==="driver"&&Or())},stats:()=>Ve.follower.adapter.stats(),state(){const qe=V===Ve&&!He,Ye=Ve.follower.adapter.state();return{owner:Qe,detached:!qe,epoch:Ye.epoch,running:qe&&Ye.running?{...Ye.running}:null,runningEndsAt:qe?Ye.runningEndsAt:null}},detach(){V===Ve&&(V=null,P=mo(ee),P.setReducedMotion(d,K),P.setPresence(m,K),Y==="driver"&&Or())}}},setMorphWeights(C){for(const[$,ee]of Object.entries(C)){if(!($ in v))throw new RangeError(`unknown morph target ${$}`);if(!Number.isFinite(ee))throw new RangeError(`morph weight for ${$} must be finite`)}for(const[$,ee]of Object.entries(C))v[$]=Math.min(1,Math.max(0,ee));Ci()},getMorphWeights:()=>({...v}),setHeadPose(C){const $=t.pivot?.boundsDeg??{yaw:0,pitch:0,roll:0};for(const ee of["yaw","pitch","roll"]){if(!Number.isFinite(C[ee]))throw new RangeError(`head pose ${ee} must be finite`);p[ee]=Math.min($[ee],Math.max(-$[ee],C[ee]))}Me()},getHeadPose:()=>({...p}),setEmotionGlow(C){L=!!C,L?P&&Y==="driver"&&Or():y(1)},setReducedMotion(C){if(V)throw new Error("the stage follows a presence core: change the core's reduced-motion preference instead");d=C,P?.setReducedMotion(C,K),k(),he()},setQuality(C){u=C,h=eh(u),ce(),k(),i.onTierChange?.(u)},getQuality:()=>u,setOrientation(C,$,ee){ie=ee?.animate?{...Qi(ie,0,0,j),targetYawDeg:C,targetPitchDeg:ui($,j.pitchMinDeg,j.pitchMaxDeg)}:Py(ie,C,$,j)},getOrientation:()=>({yawDeg:Fu(ie.yawDeg),pitchDeg:ie.pitchDeg}),isSettled:()=>Ny(ie,.001)&&ky(Q),setZoom(C,$,ee){const ye=$??[0,0,0];if(ee?.animate){const Ve=gl(C,ye,oe);Q={...Q,targetScale:Ve.targetScale,targetAim:Ve.targetAim}}else Q=Fy(Q,C,ye,oe)},getZoom:()=>({scale:Q.scale,aim:[...Q.aim]}),zoomBy:Ge,resetToFront(){ie=Yh(ie),Q=Bu(Q,oe)},handleKey(C){const $=Oy(Q,C,oe);if($)return Q=$,!0;const ee=Cy(ie,C,j);return ee?(ie=ee,C==="Home"&&(Q=Bu(Q,oe)),!0):!1},renderNow(){if(!(He||tr||dr))try{ne()}catch(C){throw Ri(C),C}},frameStats:()=>({avgMs:h.avgMs,tier:u}),debugInfo:()=>{const C=w.renderTargetBright;return{disposed:He,framesDrawn:le,textures:we.info.memory.textures,geometries:we.info.memory.geometries,tier:u,reducedMotion:d,presence:m,bloomEnabled:X(),bloomTargetPx:[C.width,C.height],crownWeb:Je.uniforms.uWeb.value,headLattice:Be.uniforms.uLatticeAlpha.value,strands:{loaded:!!pt,visible:!!pt?.group.visible,share:Mt,parent:pt?.group.parent?.name??null,...pt?.counts??{strands:0,segments:0,nodes:0,movingStrands:0,movingPoints:0,boundPoints:0},morphObjects:E.map($=>$.name),morphInfluences:E[0]?Object.fromEntries(Object.entries(E[0].morphTargetDictionary).map(([$,ee])=>[$,E[0].morphTargetInfluences[ee]])):null},surface:o.surface,drawOrder:{head:M?.renderOrder??null,cavity:T?.renderOrder??null,headTransparent:Be.transparent,headDepthWrite:Be.depthWrite,cavityPolygonOffset:S?.polygonOffset?[S.polygonOffsetFactor,S.polygonOffsetUnits]:null},speech:{targets:[...f],morphMeshes:g.map($=>$.name),weights:{...v},pivot:R?.name??null,pose:{...p},faceControl:Y,face:P?.state()??null,faceTableVersion:P?.table.version??null,emotionGlow:{enabled:L,factor:B},glow:{version:yl.version,speakingGain:yl.speakingGain,ceiling:te,speechLevel:J,amount:G()},following:V?V.follower.adapter.stats():null}}},setPaused(C){const $=!!C;He||$===Yt||(Yt=$,Yt?(cancelAnimationFrame(Sr),Sr=0):Ei&&!tr&&(br.resume(),Sr=requestAnimationFrame(Ai)))},isPaused:()=>Yt,setFraming(C){He||!Ml(C)||C===l||(l=C,O(),Yt&&wi())},onFrame:C=>xe.add(C),status:()=>pe.status(),onStatus:C=>pe.subscribe(C),dispose(){He||(He=!0,xe.close(),pe.close(),V=null,cancelAnimationFrame(Sr),na.disconnect(),r.removeEventListener("pointerdown",ot),r.removeEventListener("pointermove",qt),r.removeEventListener("pointerup",kt),r.removeEventListener("pointercancel",kt),r.removeEventListener("wheel",ia),r.removeEventListener("webglcontextlost",sa),r.removeEventListener("webglcontextrestored",yn),Ie(De),gM(tt),we.dispose())}}}const yM={alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1},rh=new Map;function ih(){const i=new Error("aborted");return i.name="AbortError",i}async function nh(i,e,t){const r=await i.fetch(e,{signal:t});if(!r.ok)throw new Error(`HTTP ${r.status} for ${e}`);return r.arrayBuffer()}const MM=i=>i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength);async function SM(i,e){const{canvas:t,signal:r}=i,n=t.getContext("webgl2",yM);if(!n)throw new la("webgl-unavailable","no WebGL2 context");const a=new Set,s=(S,P)=>{const L=e.createObjectURL(new Blob([S],{type:P}));return a.add(L),L},o=S=>{S&&a.delete(S)&&e.revokeObjectURL(S)},c=()=>{try{return n.getExtension("WEBGL_lose_context")?.loseContext(),!0}catch{return!1}},l=()=>{for(const S of[...a])o(S);c()},u=e.assets.manifest,h=MM(new TextEncoder().encode(e.assets.faceTableText));let d,m=null,f=null,v;try{const S=JSON.parse(e.assets.faceTableText);v=rd(S.speech,i.speechRate);const P=i.src??e.assets.glbUrl,L=async J=>{if(!J)return null;try{return await nh(e,J,r)}catch(te){if(r.aborted)throw te;return null}},B=rh.get(P);[d,m,f]=await Promise.all([B?Promise.resolve(B):nh(e,P,r),L(e.assets.strandsUrl),L(e.assets.strandBindingUrl)]),B||rh.set(P,d)}catch(S){throw l(),r.aborted||S?.name==="AbortError"?ih():new la("asset-failed",String(S?.message??S))}if(r.aborted)throw l(),ih();const p=s(d,"model/gltf-binary"),g=s(h,"application/json"),b=m&&f?s(m,"application/octet-stream"):void 0,A=m&&f?s(f,"application/octet-stream"):void 0;let M;try{M=e.createStage({canvas:t,manifest:u,glbUrl:p,faceTableUrl:g,strandsUrl:b,strandBindingUrl:A,quality:"high",adaptiveQuality:!0,reducedMotion:i.reducedMotion,initialYawDeg:0,initialPitchDeg:0,speechRate:i.speechRate??void 0,framing:i.framing,...i.look==="dark"?{look:{...fl,background:"dark"},transparent:!1}:{look:{...fl},transparent:!0,palette:"on-white",accent:i.accent??void 0}})}catch(S){throw l(),new la(id(nd(S)),String(S?.message??S))}M.setPresence(i.initialPresence);let T=!1,E=null,R=M.status();const x=M.onStatus(S=>{const P=ad(R,S);R=S,S.net!=="loading"&&(o(b),o(A)),P==="lost"?i.events.lost():P==="restored"?i.events.restored():P==="broken"&&i.events.broken()});return{ready:M.ready.then(()=>{o(p),o(g)},S=>{throw new la("asset-failed",String(S?.message??S))}),timing:v,apply(S){if(T)return;let P=null;for(const L of S)try{L.type==="presence"?M.setPresence(L.state):L.type==="endTurn"?M.endTurn(L.turn,"complete"):M.speak(L.turn,L.text)}catch(B){P??=B}if(P)throw P},setDrawing(S){T||M.setPaused(!S)},framesDrawn:()=>M.status().framesDrawn,setReducedMotion(S){T||M.setReducedMotion(S)},resetView(){T||M.resetToFront()},setFraming(S){T||M.setFraming(S)},handleKey:S=>!T&&M.handleKey(S),dispose(){if(E)return E;T=!0,x(),M.dispose();const S=M.debugInfo(),P=c();for(const L of[...a])o(L);return E={textures:S.textures,geometries:S.geometries,contextReleased:P},E}}}const go=i=>new URL(i,import.meta.url).href,ed={assets:{manifest:Fd,glbUrl:go(Bd),strandsUrl:go(kd),strandBindingUrl:go(zd),faceTableText:Vd},createStage:xM,fetch:(i,e)=>fetch(i,e),createObjectURL:i=>URL.createObjectURL(i),revokeObjectURL:i=>URL.revokeObjectURL(i)};function EM(i){return SM(i,ed)}const wM=ed.assets.glbUrl;export{wM as DEFAULT_GLB_URL,EM as openStage};
