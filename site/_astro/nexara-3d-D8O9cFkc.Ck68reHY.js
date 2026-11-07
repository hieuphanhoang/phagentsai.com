import{i as la,r as Qh,t as ed,n as td,s as rd}from"./nexara-guide.Dq3jRKyL.js";import"./index.astro_astro_type_script_index_0_lang.D55aJrDj.js";const id="nexara.avatar-manifest/1",nd="head02-2.1.1",ad="0.4.1",sd="2026-10-31 (owner, chat): the project moved from E:/Work/NEXARA to D:/Work/NEXARA (product 3196e64), which rewrote drive letters inside six reports: build-report.json, crown-face-moves.json and the v2 build, lip-seam, speech and export reports. Their sha256 values here are re-recorded for the rewritten bytes; each file's pre-move bytes, with E: replaced by D:, equal its bytes now, and the pre-move hashes stay in git (3196e64^). The GLBs, poster, face table, strands, maps and bindings are unchanged. Hashes recorded inside the reports themselves are the original build's and are not rewritten.",od={path:"nexara-head02-v2.glb",sha256:"289481a8760cee17b63ffa053331719ed522a3742e931bdb9c6bdef46034b26d",bytes:3739024},ld={path:"poster-front.png",sha256:"7644cfa34644c0f8449d12ea3f0b955565f6d773a5e76f9ffdce3c5f2f7e9dc5",bytes:366192,alt:"NEXARA, a calm translucent blue holographic head with a crown of glowing ribbons, seen from the front."},cd=[],ud={kind:"bundled",package:"@nexara/avatar-runtime",preset:"hologram-a"},hd=[{node:"NEXARA_head",role:"head"},{node:"NEXARA_crown",role:"crown"},{node:"NEXARA_mouth_cavity",role:"mouthCavity"}],dd={upAxis:"+Y",forwardAxis:"+Z",units:"approved head-02 assembly units (v7 frame; skull length 1.2919)",scale:1,origin:[0,0,0],note:"scale 1 and origin [0,0,0]: the approved assembly coordinates are unchanged; the meshes sit under NEXARA_head_pivot, identity at rest"},pd={min:[-.8088014721870422,-2.002969264984131,-1.106370210647583],max:[.8109493255615234,1.047524333000183,.8012083172798157],note:"exact POSITION accessor bounds of both meshes"},fd={target:[0,-.62,0],fovDeg:30,distance:7.4,canonicalYawDeg:0},md={yaw:"continuous",pitchMinDeg:-20,pitchMaxDeg:20,pan:!1,zoom:{minScale:1,maxScale:5,aim:"pointer"},dampingSeconds:.12,resetToFront:!0,resetSettleSeconds:.75,zoomNote:"Owner choice 2026-10-11 (CR-LOOK-003): stronger bounded zoom up to 5x closer, aimed at the pointer; the aim stays inside the bounding box and returns to the camera target at 1x; no drag-to-pan."},gd={position:[0,-2.42,.05]},vd={fromY:-2,toY:-1.35},_d=[{name:"jawOpen",min:0,max:1,group:"mouth"},{name:"mouthWide",min:0,max:1,group:"mouth"},{name:"mouthFunnel",min:0,max:1,group:"mouth"},{name:"mouthPucker",min:0,max:1,group:"mouth"},{name:"mouthSmileLeft",min:0,max:1,group:"mouth"},{name:"mouthSmileRight",min:0,max:1,group:"mouth"},{name:"eyeBlinkLeft",min:0,max:1,group:"eyes"},{name:"eyeBlinkRight",min:0,max:1,group:"eyes"},{name:"browInnerUp",min:0,max:1,group:"brow"},{name:"browDownLeft",min:0,max:1,group:"brow"},{name:"browDownRight",min:0,max:1,group:"brow"},{name:"mouthFrownLeft",min:0,max:1,group:"mouth"},{name:"mouthFrownRight",min:0,max:1,group:"mouth"},{name:"mouthPress",min:0,max:1,group:"mouth"}],xd=["head","mouthCavity","crown"],yd=[],bd={crownStrands:{path:"crown-strands.bin",sha256:"0bfcfba5508e6fc5f24235b99846cf7f10773000f6cec9737f222643c5332774",bytes:851700,report:"crown-strands-build.json",reportSha256:"d71c68aa1169e6ab4f79fd7d40640e476315bb54c263ac3df99bbed32b3b85a8",note:"Crown neuron net (Gabriel-graph nodes and links draped on the crown, two detail levels) plus long band strands; owner direction 2026-10-11; built by product/packages/avatar-runtime/scripts/build-strands.ts --mode both; geometry unchanged.",binding:{path:"crown-strands-binding.bin",sha256:"94d15b12ed9e85cbffb876331c91c11275bd7bce4cfb6dacc47333c1dfc44e37",bytes:137852,report:"crown-strands-binding-report.json",reportSha256:"40ea66384a056ee09bef0a23655843a8b6d9dd7ea109e66fea64a88061dd4361",note:"NXSTB002 (runtime 0.4.1): each net point on a moving surface is bound to its nearest crown or head triangle (owner role, triangle ID, barycentrics, fixed neutral offset; exact ties go to the crown, then the lowest ID; P5-R15), built by product/tools/authoring/speech/net_binding.py from this GLB and crown-strands.bin; the header binds both hashes. Runtime 0.4.1 also reads the crown-only NXSTB001 of 0.4.0 assets."}}},Sd={targetFps:60,minimumFps:30,tiers:["high","medium","low"],fallback:"2d-still",provisional:!0,note:"PERF-002 targets; device profiles and budgets stay provisional until OD-07. Tier contents are defined in the runtime (quality.ts)."},Md={approvedShape:"shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/assembly/assembly.glb (parent workspace)",approvedShapeSha256:"c66407c81f32ab5c2ec63a79dd4f27b95e28b422071c936fda06e10f9801a3d8",ownerAcceptance:'G2 identity acceptance by the owner, 2026-10-10 ("accept"), recorded in AGENT-026 [Claude, 1010, 2239]',geometryChange:"none: every triangle keeps the approved float32 position bytes; 1522 head triangles are regrouped into the crown (build-report.json positionsUnchanged)"},Td={tool:"D:/tools/nexara-avatar-runtime/build_runtime_glb.py (registered in D:/tools/AGENTS.md)",command:"uv run --no-project D:/tools/nexara-avatar-runtime/build_runtime_glb.py --input ../shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/assembly/assembly.glb --output assets/avatar/nexara-head02-v1.glb --report assets/avatar/build-report.json --move-to-crown assets/avatar/crown-face-moves.json",runFrom:"product/",operations:["weld identical float32 positions","area-weighted smooth normals","uint32 indices","drop source normals/UVs/materials","move 1522 NEXARA_head triangles to NEXARA_crown (crown-face-moves.json), positions unchanged"],deterministic:!0,report:"build-report.json",reportSha256:"532043002b688bb1066fd064c326686a07f448d16c9ecabe4d03659dfbdfde6a",crownFaceMoves:{path:"crown-face-moves.json",sha256:"899f0bab39e81692b92afccd025bd57539eb99275a557cebbf4894be2083027c",reason:'Owner decision 2026-10-11 (AGENT-027): crown surfaces that the Phase 3 split left in NEXARA_head looked like missing crown parts; they are regrouped into the crown. No vertex moves; the approved assembly c66407c8 is unchanged. Stricter split: --thin 0.15; matched triangles connected to the approved crown (1459) plus crown junction walls standing more than 0.03 outside an ellipsoid fitted to the clean skull (63; owner 2026-10-11: "it should not the part of skull, it a part of crown"): 1522 moved.',regenerate:["blender -b --factory-startup --python-exit-code 1 --python D:/tools/nexara-meshy/split_crown.py -- --glb shape-test/validation/phase3-crown/meshy-head-02-v1/jobs/head-02-remesh/raw/model.glb --out-dir <dir> --thin 0.15 --relief 0.004 --smooth-iter 60 --touch-rings 4 --min-part 200 --neck-band 0.12","uv run --no-project D:/tools/nexara-avatar-runtime/crown_faces.py --assembly <bundle>/assembly/assembly.glb --assembly-json <bundle>/assembly/assembly.json --crown <dir>/crown.glb --out assets/avatar/crown-face-moves.json --junction-excess 0.03 --enclosed-max 200"],stricterCrownSha256:"bdf035abf22e1d75ee8940537bd93a40721e585752525fda25f1c0a49b3e0a33"}},Ed={tool:"Khronos glTF-Validator 2.0.0-dev.3.10 via D:/tools/gltf-validator/validate.mjs",report:"nexara-head02-v2.khronos.json",reportSha256:"cd080f3da6c549fda629388336ac2d7180b9f068bb2554136f1b0fa6cdee426f",errors:0,warnings:0,infos:3,hints:0,allowlist:[{code:"UNUSED_OBJECT",count:3,pointer:"/meshes/*/primitives/0/attributes/TEXCOORD_0",rationale:"UVs exist for AVATAR-010; the runtime's procedural materials do not sample textures"}],note:"The report embeds a validatedAt timestamp, so a re-run changes its bytes but not its counts."},wd={geometrySource:"Meshy (Pro plan, owner's account) multi-image-to-3D and remesh tasks, inputs limited to the 8 hash-frozen images in hologram_full_18view_4k/Base (CR-SHAPE-003, REQ 5.7)",ownerAdoption:"Owner-adopted under CR-SHAPE-003 rule 7; Meshy task IDs and credits in the Phase 3 bundle README",projectScope:"Personal, non-commercial project (ASK-002 owner decision). If the deployment intent changes, the provenance question reopens.",meshyTerms:"Output terms are Meshy's at generation time; not separately reviewed here.",status:"recorded for personal, non-commercial use; no release approval is implied",generationLineage:[{task:"01a125ce-26f1-732d-8a6f-e183842509f3",kind:"image-to-image",model:"nano-banana-pro",inputs:"Base 03 and 05"},{task:"01a125cf-66ba-7150-8f07-b6d18d531175",kind:"multi-image-to-3d",model:"meshy-7.1"},{task:"01a125da-e474-702a-9cd5-f014a1bb1106",kind:"remesh"}],lineageRecords:"intake records in shape-test/validation/phase3-crown/meshy-head-02-v1/ (parent workspace)",use:"Internal, personal, non-commercial use only (REQ 5.7 rule 4; ASK-002); no public or commercial release approval is implied"},Ad="TEXCOORD_0 on every mesh: head and crown cylindrical about +Y (seam at the back, unwrapped-u duplicates for crossing triangles, pole triangles listed in the export report), cavity a grid; for AVATAR-010, unused by the S4 shaders",Rd={glbBytes:3739024,perf003TargetBytes:8e6,note:"PERF-003: at or below 8 MB initially; OD-07 device targets are still open. Speech targets are sparse (lossless).",strandsBytes:851700,strandBindingBytes:137852},Cd="REQ 5.12/5.14 (CR-SPEECH-001/003): the nine first, then the expression targets; left = NEXARA's left (+X). Head, NEXARA_mouth_cavity and NEXARA_crown (morphRoles, runtime 0.4.0) carry the same targets in this order (cavity: POSITION only, all-zero for eye/brow targets; crown: POSITION and NORMAL, non-zero only on the cheek-ribbon ends and jaw-angle seats welded to the moving jaw, P5-R13, AGENT-030 [1210, 1005/2255]). Sparse accessors store only moving vertices. Default weights 0 = the approved neutral.",Pd={node:"NEXARA_head_pivot",point:[0,-1.15,-.05],order:"YXZ",boundsDeg:{yaw:4,pitch:3,roll:2},note:"Architecture 11.2 / AVATAR-012: rest identity; the runtime sets rotation R and translation P - R*P. Prototype bounds and pivot point; the full-neck base moves slightly at the limits (to be measured)."},Ld={path:"nexara-face-table-v1.json",sha256:"ebd0e2b3b96a947f2592f18723fe3578ee8d2af2b9ef0ae1518ecf37113761ea",bytes:4202,schema:"nexara.face-table/1",note:"REQ 5.13/5.14, AVATAR-008/009/012: the one versioned table of L0 speech shapes, speaking-tilt cadence, expression presets, emotion mapping, sigh keys and reset bound, shared by the runtime and the preview. Prototype values for G4."},Nd={tool:"product/tools/authoring/speech/build_speech_asset.py (mirror of D:/tools/nexara-phase5, registered)",command:"uv run --no-project --with numpy python tools/authoring/speech/build_speech_asset.py --source-glb assets/avatar/nexara-head02-v1.glb --lineage assets/avatar/build-report.json --work <empty-dir> --out assets/avatar",runFrom:"product/",source:{path:"nexara-head02-v1.glb",sha256:"8119f1dddbfb30341a812c310cacc7ddc7218bb10f3cc3ec4ada396cc1e932c6",bytes:2398780},build:{path:"nexara-head02-v2-build.json",sha256:"8157bc6613ce6b6bae99dc6ce00c32f2020d0b93ac87f74eabe9b965ee3cc016",bytes:7455},lipSeamReport:{path:"nexara-head02-v2-lip-seam-report.json",sha256:"7676e1d969440da62f08c77ce7cd787dc819d4268db9055bfd71d3969962e091",bytes:25968},speechReport:{path:"nexara-head02-v2-speech-report.json",sha256:"2765c3d139b11b8e1aeac475a5b0239ca00498b2e45e97c5a20cf4a4ea643324",bytes:36266},exportReport:{path:"nexara-head02-v2-export-report.json",sha256:"3558090d61c687c0db60b5c7462518d802971e1f6879d9bc570e9adb07b0229d",bytes:5261},exportMap:{path:"nexara-head02-v2-export-map.json",sha256:"da77a17c99fd7c3e20017faba62ca0c002098dd8085a09b6138af81dcf7255ef",bytes:284462},cavityBindings:{path:"nexara-head02-v2-bindings.json",sha256:"dbd721778e25fddeefe1a282f3388366beb2f641bc2d1cdafb05a15d47016fce",bytes:182311},deterministic:!0,note:"The frozen neutral GLB (target-free, same layout) and the editable .blend are rebuilt by the same tools and kept out of git; the export report records the neutral's SHA-256 and the bindings bind it.",netBindingCommand:"uv run --no-project --with numpy python tools/authoring/speech/net_binding.py --glb assets/avatar/nexara-head02-v2.glb --strands assets/avatar/crown-strands.bin --out assets/avatar/crown-strands-binding.bin --report assets/avatar/crown-strands-binding-report.json --table assets/avatar/nexara-face-table-v1.json"},Id={glb:{path:"nexara-head02-v1.glb",sha256:"8119f1dddbfb30341a812c310cacc7ddc7218bb10f3cc3ec4ada396cc1e932c6",bytes:2398780},note:"Phase 4 runtime asset head02-1.1.0 (contract 0.2.0); the speech build's source"},Dd={schema:id,assetVersion:nd,minimumRuntimeVersion:ad,reportPathRewrite:sd,glb:od,fallback:ld,textures:cd,shaders:ud,components:hd,frame:dd,boundingBox:pd,camera:fd,orbit:md,core:gd,neckFade:vd,morphTargets:_d,morphRoles:xd,animations:yd,decorations:bd,quality:Sd,source:Md,build:Td,validator:Ed,rights:wd,uvs:Ad,budgets:Rd,morphTargetsNote:Cd,pivot:Pd,faceTable:Ld,speechBuild:Nd,phase4Asset:Id},Ud=""+new URL("/_astro/nexara-head02-v2-DJyG5Sw4.DJyG5Sw4.glb",import.meta.url).href,Od=""+new URL("/_astro/crown-strands-BOUkYnN7.BOUkYnN7.bin",import.meta.url).href,Fd=""+new URL("/_astro/crown-strands-binding-DsnIHzQ4.DsnIHzQ4.bin",import.meta.url).href,Bd=`{\r
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
*/const yl="185",kd=0,Zl=1,Hd=2,ja=1,zd=2,Hn=3,Rr=0,Gt=1,nr=2,Ar=0,Qi=1,vo=2,Jl=3,Ql=4,Vd=5,_i=100,Gd=101,Wd=102,Xd=103,jd=104,Yd=200,qd=201,$d=202,Kd=203,_o=204,xo=205,Zd=206,Jd=207,Qd=208,ep=209,tp=210,rp=211,ip=212,np=213,ap=214,yo=0,bo=1,So=2,an=3,Mo=4,To=5,Eo=6,wo=7,rh=0,sp=1,op=2,vr=0,bl=1,Sl=2,Ml=3,Tl=4,El=5,wl=6,Al=7,ec="attached",lp="detached",ih=300,bi=301,sn=302,Ms=303,Ts=304,vs=306,on=1e3,Er=1001,ts=1002,Rt=1003,nh=1004,zn=1005,Ct=1006,Ya=1007,Wr=1008,Kt=1009,ah=1010,sh=1011,jn=1012,Rl=1013,Cr=1014,sr=1015,Zt=1016,Cl=1017,Pl=1018,Yn=1020,oh=35902,lh=35899,ch=1021,uh=1022,or=1023,Yr=1026,yi=1027,Ll=1028,Nl=1029,Si=1030,Il=1031,Dl=1033,qa=33776,$a=33777,Ka=33778,Za=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Lo=36196,No=37492,Io=37496,Do=37488,Uo=37489,rs=37490,Oo=37491,Fo=37808,Bo=37809,ko=37810,Ho=37811,zo=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,jo=37817,Yo=37818,qo=37819,$o=37820,Ko=37821,Zo=36492,Jo=36494,Qo=36495,el=36283,tl=36284,is=36285,rl=36286,qn=2300,$n=2301,Es=2302,tc=2303,rc=2400,ic=2401,nc=2402,cp=2500,up=0,hh=1,il=2,hp=3200,nl=0,dp=1,li="",At="srgb",Qt="srgb-linear",ns="linear",nt="srgb",Ci=7680,ac=519,pp=512,fp=513,mp=514,Ul=515,gp=516,vp=517,Ol=518,_p=519,al=35044,sc="300 es",wr=2e3,Kn=2001;function xp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){const i=Zn("canvas");return i.style.display="block",i}const oc={};function as(...i){const e="THREE."+i.shift();console.log(e,...i)}function dh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=dh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=dh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function en(...i){const e=i.join(" ");e in oc||(oc[e]=!0,Le(...i))}function Sp(i,e,t){return new Promise(function(r,n){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const Mp={[yo]:bo,[So]:Eo,[Mo]:wo,[an]:To,[bo]:yo,[Eo]:So,[wo]:Mo,[To]:an};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Gn=Math.PI/180,ln=180/Math.PI;function _r(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Fl(i,e){return(i%e+e)%e}function Tp(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Ep(i,e,t){return i!==e?(t-i)/(e-i):0}function Wn(i,e,t){return(1-t)*i+t*e}function wp(i,e,t,r){return Wn(i,e,1-Math.exp(-t*r))}function Ap(i,e=1){return e-Math.abs(Fl(i,e*2)-e)}function Rp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lp(i,e){return i+Math.random()*(e-i)}function Np(i){return i*(.5-Math.random())}function Ip(i){i!==void 0&&(lc=i);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dp(i){return i*Gn}function Up(i){return i*ln}function Op(i){return(i&i-1)===0&&i!==0}function Fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kp(i,e,t,r,n){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+r)/2),u=s((e+r)/2),h=a((e-r)/2),d=s((e-r)/2),f=a((r-e)/2),m=s((r-e)/2);switch(n){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*u,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hp={DEG2RAD:Gn,RAD2DEG:ln,generateUUID:_r,clamp:Je,euclideanModulo:Fl,mapLinear:Tp,inverseLerp:Ep,lerp:Wn,damp:wp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Lp,randFloatSpread:Np,seededRandom:Ip,degToRad:Dp,radToDeg:Up,isPowerOfTwo:Op,ceilPowerOfTwo:Fp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:kp,normalize:st,denormalize:gr};class Ie{static{Ie.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let c=r[n+0],l=r[n+1],u=r[n+2],h=r[n+3],d=a[s+0],f=a[s+1],m=a[s+2],v=a[s+3];if(h!==v||c!==d||l!==f||u!==m){let p=c*d+l*f+u*m+h*v;p<0&&(d=-d,f=-f,m=-m,v=-v,p=-p);let g=1-o;if(p<.9995){const M=Math.acos(p),A=Math.sin(M);g=Math.sin(g*M)/A,o=Math.sin(o*M)/A,c=c*g+d*o,l=l*g+f*o,u=u*g+m*o,h=h*g+v*o}else{c=c*g+d*o,l=l*g+f*o,u=u*g+m*o,h=h*g+v*o;const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],h=a[s],d=a[s+1],f=a[s+2],m=a[s+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),h=o(a/2),d=c(r/2),f=c(n/2),m=c(a/2);switch(s){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=r+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(s-n)*f}else if(r>o&&r>h){const f=2*Math.sqrt(1+r-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(a+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-r-h);this._w=(a-l)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-r-o);this._w=(s-n)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*o+n*l-a*c,this._y=n*u+s*c+a*o-r*l,this._z=a*u+s*l+r*c-n*o,this._w=s*u-r*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){let r=e._x,n=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(r=-r,n=-n,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+r*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+r*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{D.prototype.isVector3=!0}constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*r),u=2*(o*t-a*n),h=2*(a*r-s*t);return this.x=t+c*l+s*h-o*u,this.y=r+c*u+o*l-a*h,this.z=n+c*h+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-r*c,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new D,cc=new Pr;class ze{static{ze.prototype.isMatrix3=!0}constructor(e,t,r,n,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l)}set(e,t,r,n,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],u=r[4],h=r[7],d=r[2],f=r[5],m=r[8],v=n[0],p=n[3],g=n[6],M=n[1],A=n[4],b=n[7],T=n[2],E=n[5],R=n[8];return a[0]=s*v+o*M+c*T,a[3]=s*p+o*A+c*E,a[6]=s*g+o*b+c*R,a[1]=l*v+u*M+h*T,a[4]=l*p+u*A+h*E,a[7]=l*g+u*b+h*R,a[2]=d*v+f*M+m*T,a[5]=d*p+f*A+m*E,a[8]=d*g+f*b+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-r*a*u+r*o*c+n*a*l-n*s*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*s-o*l,d=o*c-u*a,f=l*a-s*c,m=t*h+r*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(n*l-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=d*v,e[4]=(u*t-n*c)*v,e[5]=(n*a-o*t)*v,e[6]=f*v,e[7]=(r*c-l*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(r*c,r*l,-r*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return en("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(As.makeScale(e,t)),this}rotate(e){return en("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(As.makeRotation(-e)),this}translate(e,t){return en("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new ze,uc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zp(){const i={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===nt&&(n.r=jr(n.r),n.g=jr(n.g),n.b=jr(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(n.r=tn(n.r),n.g=tn(n.g),n.b=tn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===li?ns:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return en("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return en("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Qt]:{primaries:e,whitePoint:r,transfer:ns,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:r,transfer:nt,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const Ke=zp();function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Vp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Pi===void 0&&(Pi=Zn("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=Pi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=jr(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(jr(t[r]/255)*255):t[r]=jr(t[r]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gp=0;class Bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Rs(n[s].image)):a.push(Rs(n[s]))}else a=Rs(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Wp=0;const Cs=new D;class xt extends Mi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,r=Er,n=Er,a=Ct,s=Wr,o=or,c=Kt,l=xt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=_r(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=ih;xt.DEFAULT_ANISOTROPY=1;class ut{static{ut.prototype.isVector4=!0}constructor(e=0,t=0,r=0,n=1){this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],c=s[4],l=s[8],u=s[1],h=s[5],d=s[9],f=s[2],m=s[6],v=s[10];if(Math.abs(c-u)<.01&&Math.abs(l-f)<.01&&Math.abs(d-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+f)<.1&&Math.abs(d+m)<.1&&Math.abs(o+h+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,M=(h+1)/2,A=(v+1)/2,b=(c+u)/4,T=(l+f)/4,E=(d+m)/4;return g>M&&g>A?g<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(g),n=b/r,a=T/r):M>A?M<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(M),r=b/n,a=E/n):A<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),r=T/a,n=E/a),this.set(r,n,a,t),this}let p=Math.sqrt((m-d)*(m-d)+(l-f)*(l-f)+(u-c)*(u-c));return Math.abs(p)<.001&&(p=1),this.x=(m-d)/p,this.y=(l-f)/p,this.z=(u-c)/p,this.w=Math.acos((o+h+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xp extends Mi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:r.depth},a=new xt(n),s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vt extends Xp{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ph extends xt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends xt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ve{static{Ve.prototype.isMatrix4=!0}constructor(e,t,r,n,a,s,o,c,l,u,h,d,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l,u,h,d,f,m,v,p)}set(e,t,r,n,a,s,o,c,l,u,h,d,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=n,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,n=1/Li.setFromMatrixColumn(e,0).length(),a=1/Li.setFromMatrixColumn(e,1).length(),s=1/Li.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,f=s*h,m=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,v=l*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,v=l*h;t[0]=d-v*o,t[4]=-s*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=s*u,t[9]=v-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,f=s*h,m=o*u,v=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,f=s*l,m=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*c,f=s*l,m=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=s*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yp,e,qp)}lookAt(e,t,r){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Jr.crossVectors(r,qt),Jr.lengthSq()===0&&(Math.abs(r.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Jr.crossVectors(r,qt)),Jr.normalize(),ca.crossVectors(qt,Jr),n[0]=Jr.x,n[4]=ca.x,n[8]=qt.x,n[1]=Jr.y,n[5]=ca.y,n[9]=qt.y,n[2]=Jr.z,n[6]=ca.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],u=r[1],h=r[5],d=r[9],f=r[13],m=r[2],v=r[6],p=r[10],g=r[14],M=r[3],A=r[7],b=r[11],T=r[15],E=n[0],R=n[4],x=n[8],S=n[12],N=n[1],P=n[5],B=n[9],Q=n[13],J=n[2],V=n[6],Y=n[10],q=n[14],te=n[3],oe=n[7],L=n[11],z=n[15];return a[0]=s*E+o*N+c*J+l*te,a[4]=s*R+o*P+c*V+l*oe,a[8]=s*x+o*B+c*Y+l*L,a[12]=s*S+o*Q+c*q+l*z,a[1]=u*E+h*N+d*J+f*te,a[5]=u*R+h*P+d*V+f*oe,a[9]=u*x+h*B+d*Y+f*L,a[13]=u*S+h*Q+d*q+f*z,a[2]=m*E+v*N+p*J+g*te,a[6]=m*R+v*P+p*V+g*oe,a[10]=m*x+v*B+p*Y+g*L,a[14]=m*S+v*Q+p*q+g*z,a[3]=M*E+A*N+b*J+T*te,a[7]=M*R+A*P+b*V+T*oe,a[11]=M*x+A*B+b*Y+T*L,a[15]=M*S+A*Q+b*q+T*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15],M=c*f-l*d,A=o*f-l*h,b=o*d-c*h,T=s*f-l*u,E=s*d-c*u,R=s*h-o*u;return t*(v*M-p*A+g*b)-r*(m*M-p*T+g*E)+n*(m*A-v*T+g*R)-a*(m*b-v*E+p*R)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-r*(a*u-o*c)+n*(a*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],M=t*o-r*s,A=t*c-n*s,b=t*l-a*s,T=r*c-n*o,E=r*l-a*o,R=n*l-a*c,x=u*v-h*m,S=u*p-d*m,N=u*g-f*m,P=h*p-d*v,B=h*g-f*v,Q=d*g-f*p,J=M*Q-A*B+b*P+T*N-E*S+R*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/J;return e[0]=(o*Q-c*B+l*P)*V,e[1]=(n*B-r*Q-a*P)*V,e[2]=(v*R-p*E+g*T)*V,e[3]=(d*E-h*R-f*T)*V,e[4]=(c*N-s*Q-l*S)*V,e[5]=(t*Q-n*N+a*S)*V,e[6]=(p*b-m*R-g*A)*V,e[7]=(u*R-d*b+f*A)*V,e[8]=(s*B-o*N+l*x)*V,e[9]=(r*N-t*B-a*x)*V,e[10]=(m*E-v*b+g*M)*V,e[11]=(h*b-u*E-f*M)*V,e[12]=(o*S-s*P-c*x)*V,e[13]=(t*P-r*S+n*x)*V,e[14]=(v*A-m*T-p*M)*V,e[15]=(u*T-h*A+d*M)*V,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*s,0,l*c-n*o,u*c+n*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,h=o+o,d=a*l,f=a*u,m=a*h,v=s*u,p=s*h,g=o*h,M=c*l,A=c*u,b=c*h,T=r.x,E=r.y,R=r.z;return n[0]=(1-(v+g))*T,n[1]=(f+b)*T,n[2]=(m-A)*T,n[3]=0,n[4]=(f-b)*E,n[5]=(1-(d+g))*E,n[6]=(p+M)*E,n[7]=0,n[8]=(m+A)*R,n[9]=(p-M)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let s=Li.set(n[0],n[1],n[2]).length();const o=Li.set(n[4],n[5],n[6]).length(),c=Li.set(n[8],n[9],n[10]).length();a<0&&(s=-s),pr.copy(this);const l=1/s,u=1/o,h=1/c;return pr.elements[0]*=l,pr.elements[1]*=l,pr.elements[2]*=l,pr.elements[4]*=u,pr.elements[5]*=u,pr.elements[6]*=u,pr.elements[8]*=h,pr.elements[9]*=h,pr.elements[10]*=h,t.setFromRotationMatrix(pr),r.x=s,r.y=o,r.z=c,this}makePerspective(e,t,r,n,a,s,o=wr,c=!1){const l=this.elements,u=2*a/(t-e),h=2*a/(r-n),d=(t+e)/(t-e),f=(r+n)/(r-n);let m,v;if(c)m=a/(s-a),v=s*a/(s-a);else if(o===wr)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Kn)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=wr,c=!1){const l=this.elements,u=2/(t-e),h=2/(r-n),d=-(t+e)/(t-e),f=-(r+n)/(r-n);let m,v;if(c)m=1/(s-a),v=s/(s-a);else if(o===wr)m=-2/(s-a),v=-(s+a)/(s-a);else if(o===Kn)m=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Li=new D,pr=new Ve,Yp=new D(0,0,0),qp=new D(1,1,1),Jr=new D,ca=new D,qt=new D,dc=new Ve,pc=new Pr;class qr{constructor(e=0,t=0,r=0,n=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const fc=new D,Ni=new Pr,Br=new Ve,ua=new D,wn=new D,Kp=new D,Zp=new Pr,mc=new D(1,0,0),gc=new D(0,1,0),vc=new D(0,0,1),_c={type:"added"},Jp={type:"removed"},Ii={type:"childadded",child:null},Ps={type:"childremoved",child:null};class mt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new qr,r=new Pr,n=new D(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ze}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ua.copy(e):ua.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(wn,ua,this.up):Br.lookAt(ua,wn,this.up),this.quaternion.setFromRotationMatrix(Br),n&&(Br.extractRotation(n.matrixWorld),Ni.setFromRotationMatrix(Br),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_c),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_c),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,Zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,n=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*n,a[13]+=r-a[1]*t-a[5]*r-a[9]*n,a[14]+=n-a[2]*t-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),m=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),d.length>0&&(r.skeletons=d),f.length>0&&(r.animations=f),m.length>0&&(r.nodes=m)}return r.object=n,r;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lr extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qp={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,r),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new lr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ke.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=Ke.workingColorSpace){if(e=Fl(e,1),t=Je(t,0,1),r=Je(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=Ns(s,a,e+1/3),this.g=Ns(s,a,e),this.b=Ns(s,a,e-1/3)}return Ke.colorSpaceToWorking(this,n),this}setStyle(e,t=At){function r(a){a!==void 0&&parseFloat(a)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const r=fh[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace(Ut.copy(this),e),Math.round(Je(Ut.r*255,0,255))*65536+Math.round(Je(Ut.g*255,0,255))*256+Math.round(Je(Ut.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ut.copy(this),t);const r=Ut.r,n=Ut.g,a=Ut.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case r:c=(n-a)/h+(n<a?6:0);break;case n:c=(a-r)/h+2;break;case a:c=(r-n)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=At){Ke.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,r=Ut.g,n=Ut.b;return e!==At?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(ha);const r=Wn(Qr.h,ha.h,t),n=Wn(Qr.s,ha.s,t),a=Wn(Qr.l,ha.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ee;Ee.NAMES=fh;class ef extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fr=new D,kr=new D,Is=new D,Hr=new D,Di=new D,Ui=new D,xc=new D,Ds=new D,Us=new D,Os=new D,Fs=new ut,Bs=new ut,ks=new ut;class ar{constructor(e=new D,t=new D,r=new D){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),fr.subVectors(e,t),n.cross(fr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){fr.subVectors(n,t),kr.subVectors(r,t),Is.subVectors(e,t);const s=fr.dot(fr),o=fr.dot(kr),c=fr.dot(Is),l=kr.dot(kr),u=kr.dot(Is),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(s*u-o*c)*d;return a.set(1-f-m,m,f)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(e,t,r,n,a,s,o,c){return this.getBarycoord(e,t,r,n,Hr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Hr.x),c.addScaledVector(s,Hr.y),c.addScaledVector(o,Hr.z),c)}static getInterpolatedAttribute(e,t,r,n,a,s){return Fs.setScalar(0),Bs.setScalar(0),ks.setScalar(0),Fs.fromBufferAttribute(e,t),Bs.fromBufferAttribute(e,r),ks.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Fs,a.x),s.addScaledVector(Bs,a.y),s.addScaledVector(ks,a.z),s}static isFrontFacing(e,t,r,n){return fr.subVectors(r,t),kr.subVectors(e,t),fr.cross(kr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fr.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),fr.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return ar.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;Di.subVectors(n,r),Ui.subVectors(a,r),Ds.subVectors(e,r);const c=Di.dot(Ds),l=Ui.dot(Ds);if(c<=0&&l<=0)return t.copy(r);Us.subVectors(e,n);const u=Di.dot(Us),h=Ui.dot(Us);if(u>=0&&h<=u)return t.copy(n);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(Di,s);Os.subVectors(e,a);const f=Di.dot(Os),m=Ui.dot(Os);if(m>=0&&f<=m)return t.copy(a);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(r).addScaledVector(Ui,o);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return xc.subVectors(a,n),o=(h-u)/(h-u+(f-m)),t.copy(n).addScaledVector(xc,o);const g=1/(p+v+d);return s=v*g,o=d*g,t.copy(r).addScaledVector(Di,s).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $r{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,mr):mr.fromBufferAttribute(a,s),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),da.copy(r.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(An),pa.subVectors(this.max,An),Oi.subVectors(e.a,An),Fi.subVectors(e.b,An),Bi.subVectors(e.c,An),ei.subVectors(Fi,Oi),ti.subVectors(Bi,Fi),pi.subVectors(Oi,Bi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-pi.z,pi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!Hs(t,Oi,Fi,Bi,pa)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,Oi,Fi,Bi,pa))?!1:(fa.crossVectors(ei,ti),t=[fa.x,fa.y,fa.z],Hs(t,Oi,Fi,Bi,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zr=[new D,new D,new D,new D,new D,new D,new D,new D],mr=new D,da=new $r,Oi=new D,Fi=new D,Bi=new D,ei=new D,ti=new D,pi=new D,An=new D,pa=new D,fa=new D,fi=new D;function Hs(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){fi.fromArray(i,a);const o=n.x*Math.abs(fi.x)+n.y*Math.abs(fi.y)+n.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),u=r.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const St=new D,ma=new Ie;let tf=0;class lt extends Mi{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=al,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=gr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=st(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),r=st(r,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),r=st(r,this.array),n=st(n,this.array),a=st(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class mh extends lt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class gh extends lt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Jt extends lt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const rf=new $r,Rn=new D,zs=new D;class Lr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):rf.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rn.subVectors(e,this.center);const t=Rn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Rn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rn.copy(e.center).add(zs)),this.expandByPoint(Rn.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nf=0;const rr=new Ve,Vs=new mt,ki=new D,$t=new $r,Cn=new $r,It=new D;class Tt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?gh:mh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ze().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,r){return rr.makeTranslation(e,t,r),this.applyMatrix4(rr),this}scale(e,t,r){return rr.makeScale(e,t,r),this.applyMatrix4(rr),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Jt(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const r=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors($t.min,Cn.min),$t.expandByPoint(It),It.addVectors($t.max,Cn.max),$t.expandByPoint(It)):($t.expandByPoint(Cn.min),$t.expandByPoint(Cn.max))}$t.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)It.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(It));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)It.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(e,l),It.add(ki)),n=Math.max(n,r.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new lt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let x=0;x<r.count;x++)o[x]=new D,c[x]=new D;const l=new D,u=new D,h=new D,d=new Ie,f=new Ie,m=new Ie,v=new D,p=new D;function g(x,S,N){l.fromBufferAttribute(r,x),u.fromBufferAttribute(r,S),h.fromBufferAttribute(r,N),d.fromBufferAttribute(a,x),f.fromBufferAttribute(a,S),m.fromBufferAttribute(a,N),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),o[x].add(v),o[S].add(v),o[N].add(v),c[x].add(p),c[S].add(p),c[N].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,S=M.length;x<S;++x){const N=M[x],P=N.start,B=N.count;for(let Q=P,J=P+B;Q<J;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const A=new D,b=new D,T=new D,E=new D;function R(x){T.fromBufferAttribute(n,x),E.copy(T);const S=o[x];A.copy(S),A.sub(T.multiplyScalar(T.dot(S))).normalize(),b.crossVectors(E,S);const N=b.dot(c[x])<0?-1:1;s.setXYZW(x,A.x,A.y,A.z,N)}for(let x=0,S=M.length;x<S;++x){const N=M[x],P=N.start,B=N.count;for(let Q=P,J=P+B;Q<J;Q+=3)R(e.getX(Q+0)),R(e.getX(Q+1)),R(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,f=r.count;d<f;d++)r.setXYZ(d,0,0,0);const n=new D,a=new D,s=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),o.fromBufferAttribute(r,m),c.fromBufferAttribute(r,v),l.fromBufferAttribute(r,p),o.add(u),c.add(u),l.add(u),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let g=0;g<u;g++)d[m++]=l[f++]}return new lt(d,u,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,r);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(n[c]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=_r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new D;class Jn{constructor(e,t,r,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=gr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=st(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gr(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),r=st(r,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),r=st(r,this.array),n=st(n,this.array),a=st(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){as("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){as("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let af=0;class ur extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Qi,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=an,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector2&&r&&r.isVector2||n&&n.isEuler&&r&&r.isEuler||n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_o&&(r.blendSrc=this.blendSrc),this.blendDst!==xo&&(r.blendDst=this.blendDst),this.blendEquation!==_i&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==an&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ie().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _h extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const Pn=new D,zi=new D,Vi=new D,Gi=new Ie,Ln=new Ie,xh=new Ve,ga=new D,Nn=new D,va=new D,yc=new Ie,Gs=new Ie,bc=new Ie;class sf extends mt{constructor(e=new _h){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new vh(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Jn(r,3,0,!1)),Hi.setAttribute("uv",new Jn(r,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),xh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Vi.z);const r=this.material.rotation;let n,a;r!==0&&(a=Math.cos(r),n=Math.sin(r));const s=this.center;_a(ga.set(-.5,-.5,0),Vi,s,zi,n,a),_a(Nn.set(.5,-.5,0),Vi,s,zi,n,a),_a(va.set(.5,.5,0),Vi,s,zi,n,a),yc.set(0,0),Gs.set(1,0),bc.set(1,1);let o=e.ray.intersectTriangle(ga,Nn,va,!1,Pn);if(o===null&&(_a(Nn.set(-.5,.5,0),Vi,s,zi,n,a),Gs.set(0,1),o=e.ray.intersectTriangle(ga,va,Nn,!1,Pn),o===null))return;const c=e.ray.origin.distanceTo(Pn);c<e.near||c>e.far||t.push({distance:c,point:Pn.clone(),uv:ar.getInterpolation(Pn,ga,Nn,va,yc,Gs,bc,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _a(i,e,t,r,n,a){Gi.subVectors(i,t).addScalar(.5).multiply(r),n!==void 0?(Ln.x=a*Gi.x-n*Gi.y,Ln.y=n*Gi.x+a*Gi.y):Ln.copy(Gi),i.copy(e),i.x+=Ln.x,i.y+=Ln.y,i.applyMatrix4(xh)}const Vr=new D,Ws=new D,xa=new D,ri=new D,Xs=new D,ya=new D,js=new D;class ra{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ws.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ws);const a=e.distanceTo(t)*.5,s=-this.direction.dot(xa),o=ri.dot(this.direction),c=-ri.dot(xa),l=ri.lengthSq(),u=Math.abs(1-s*s);let h,d,f,m;if(u>0)if(h=s*c-o,d=s*o-c,m=a*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+s*d+2*o)+d*(s*h+d+2*c)+l}else d=a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ws).addScaledVector(xa,d),f}intersectSphere(e,t){Vr.subVectors(e.center,this.origin);const r=Vr.dot(this.direction),n=Vr.dot(Vr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(r=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(r=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,r,n,a){Xs.subVectors(t,e),ya.subVectors(r,e),js.crossVectors(Xs,ya);let s=this.direction.dot(js),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ri.subVectors(this.origin,e);const c=o*this.direction.dot(ya.crossVectors(ri,ya));if(c<0)return null;const l=o*this.direction.dot(Xs.cross(ri));if(l<0||c+l>s)return null;const u=-o*ri.dot(js);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sc=new Ve,mi=new ra,ba=new Lr,Mc=new D,Sa=new D,Ma=new D,Ta=new D,Ys=new D,Ea=new D,Tc=new D,wa=new D;class Ot extends mt{constructor(e=new Tt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Ea.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],h=a[c];u!==0&&(Ys.fromBufferAttribute(h,e),s?Ea.addScaledVector(Ys,u):Ea.addScaledVector(Ys.sub(t),u))}t.add(Ea)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ba.copy(r.boundingSphere),ba.applyMatrix4(a),mi.copy(e.ray).recast(e.near),!(ba.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ba,Mc)===null||mi.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(Sc.copy(a).invert(),mi.copy(e.ray).applyMatrix4(Sc),!(r.boundingBox!==null&&mi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=s[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,T=A;b<T;b+=3){const E=o.getX(b),R=o.getX(b+1),x=o.getX(b+2);n=Aa(this,g,e,r,l,u,h,E,R,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const M=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);n=Aa(this,s,e,r,l,u,h,M,A,b),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=s[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,T=A;b<T;b+=3){const E=b,R=b+1,x=b+2;n=Aa(this,g,e,r,l,u,h,E,R,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const M=p,A=p+1,b=p+2;n=Aa(this,s,e,r,l,u,h,M,A,b),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function of(i,e,t,r,n,a,s,o){let c;if(e.side===Gt?c=r.intersectTriangle(s,a,n,!0,o):c=r.intersectTriangle(n,a,s,e.side===Rr,o),c===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:i}}function Aa(i,e,t,r,n,a,s,o,c,l){i.getVertexPosition(o,Sa),i.getVertexPosition(c,Ma),i.getVertexPosition(l,Ta);const u=of(i,e,t,r,Sa,Ma,Ta,Tc);if(u){const h=new D;ar.getBarycoord(Tc,Sa,Ma,Ta,h),n&&(u.uv=ar.getInterpolatedAttribute(n,o,c,l,h,new Ie)),a&&(u.uv1=ar.getInterpolatedAttribute(a,o,c,l,h,new Ie)),s&&(u.normal=ar.getInterpolatedAttribute(s,o,c,l,h,new D),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};ar.getNormal(Sa,Ma,Ta,d.normal),u.face=d,u.barycoord=h}return u}const In=new ut,Ec=new ut,wc=new ut,lf=new ut,Ac=new Ve,Ra=new D,qs=new Lr,Rc=new Ve,$s=new ra;class cf extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,n=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1&&(Rc.copy(n).invert(),$s.copy(e.ray).applyMatrix4(Rc),!(this.boundingBox!==null&&$s.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let r=0,n=t.count;r<n;r++){e.fromBufferAttribute(t,r);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,n=this.geometry;Ec.fromBufferAttribute(n.attributes.skinIndex,e),wc.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(In.copy(t),t.set(0,0,0,0)):(In.set(...t,1),t.set(0,0,0)),In.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const s=wc.getComponent(a);if(s!==0){const o=Ec.getComponent(a);Ac.multiplyMatrices(r.bones[o].matrixWorld,r.boneInverses[o]),t.addScaledVector(lf.copy(In).applyMatrix4(Ac),s)}}return t.isVector4&&(t.w=In.w),t.applyMatrix4(this.bindMatrixInverse)}}class yh extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _s extends xt{constructor(e=null,t=1,r=1,n,a,s,o,c,l=Rt,u=Rt,h,d){super(null,s,o,c,l,u,n,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cc=new Ve,uf=new Ve;class Hl{constructor(e=[],t=[]){this.uuid=_r(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,n=this.bones.length;r<n;r++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new Ve;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,n=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:uf;Cc.multiplyMatrices(o,t[a]),Cc.toArray(r,a*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new _s(t,e,e,or,sr);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,n=e.bones.length;r<n;r++){const a=e.bones[r];let s=t[a];s===void 0&&(Le("Skeleton: No bone found with UUID:",a),s=new yh),this.bones.push(s),this.boneInverses.push(new Ve().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let n=0,a=t.length;n<a;n++){const s=t[n];e.bones.push(s.uuid);const o=r[n];e.boneInverses.push(o.toArray())}return e}}class sl extends lt{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Ve,Pc=new Ve,Ca=[],Lc=new $r,hf=new Ve,Dn=new Ot,Un=new Lr;class df extends Ot{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,hf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Wi),Lc.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Wi),Un.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Un)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=r.length+1,s=e*a+1;for(let o=0;o<r.length;o++)r[o]=n[s+o]}raycast(e,t){const r=this.matrixWorld,n=this.count;if(Dn.geometry=this.geometry,Dn.material=this.material,Dn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Un.copy(this.boundingSphere),Un.applyMatrix4(r),e.ray.intersectsSphere(Un)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Wi),Pc.multiplyMatrices(r,Wi),Dn.matrixWorld=Pc,Dn.raycast(e,Ca);for(let s=0,o=Ca.length;s<o;s++){const c=Ca[s];c.instanceId=a,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(n*this.count),n,this.count,Ll,sr));const a=this.morphTexture.source.data.data;let s=0;for(let l=0;l<r.length;l++)s+=r[l];const o=this.geometry.morphTargetsRelative?1:1-s,c=n*e;return a[c]=o,a.set(r,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ks=new D,pf=new D,ff=new ze;class oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Ks.subVectors(r,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const n=e.delta(Ks),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ff.getNormalMatrix(e),n=this.coplanarPoint(Ks).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Lr,mf=new Ie(.5,.5),Pa=new D;class zl{constructor(e=new oi,t=new oi,r=new oi,n=new oi,a=new oi,s=new oi){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wr,r=!1){const n=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],h=a[5],d=a[6],f=a[7],m=a[8],v=a[9],p=a[10],g=a[11],M=a[12],A=a[13],b=a[14],T=a[15];if(n[0].setComponents(l-s,f-u,g-m,T-M).normalize(),n[1].setComponents(l+s,f+u,g+m,T+M).normalize(),n[2].setComponents(l+o,f+h,g+v,T+A).normalize(),n[3].setComponents(l-o,f-h,g-v,T-A).normalize(),r)n[4].setComponents(c,d,p,b).normalize(),n[5].setComponents(l-c,f-d,g-p,T-b).normalize();else if(n[4].setComponents(l-c,f-d,g-p,T-b).normalize(),t===wr)n[5].setComponents(l+c,f+d,g+p,T+b).normalize();else if(t===Kn)n[5].setComponents(c,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=mf.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Pa.x=n.normal.x>0?e.max.x:e.min.x,Pa.y=n.normal.y>0?e.max.y:e.min.y,Pa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xs extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ss=new D,os=new D,Nc=new Ve,On=new ra,La=new Lr,Zs=new D,Ic=new D;class ia extends mt{constructor(e=new Tt,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)ss.fromBufferAttribute(t,n-1),os.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=ss.distanceTo(os);e.setAttribute("lineDistance",new Jt(r,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),La.copy(r.boundingSphere),La.applyMatrix4(n),La.radius+=a,e.ray.intersectsSphere(La)===!1)return;Nc.copy(n).invert(),On.copy(e.ray).applyMatrix4(Nc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=r.index,h=r.attributes.position;if(u!==null){const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let m=d,v=f-1;m<v;m+=l){const p=u.getX(m),g=u.getX(m+1),M=Na(this,e,On,c,p,g,m);M&&t.push(M)}if(this.isLineLoop){const m=u.getX(f-1),v=u.getX(d),p=Na(this,e,On,c,m,v,f-1);p&&t.push(p)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let m=d,v=f-1;m<v;m+=l){const p=Na(this,e,On,c,m,m+1,m);p&&t.push(p)}if(this.isLineLoop){const m=Na(this,e,On,c,f-1,d,f-1);m&&t.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Na(i,e,t,r,n,a,s){const o=i.geometry.attributes.position;if(ss.fromBufferAttribute(o,n),os.fromBufferAttribute(o,a),t.distanceSqToSegment(ss,os,Zs,Ic)>r)return;Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);if(!(c<e.near||c>e.far))return{distance:c,point:Ic.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Dc=new D,Uc=new D;class ls extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)Dc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Dc.distanceTo(Uc);e.setAttribute("lineDistance",new Jt(r,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gf extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bh extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oc=new Ve,ol=new ra,Ia=new Lr,Da=new D;class cs extends mt{constructor(e=new Tt,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ia.copy(r.boundingSphere),Ia.applyMatrix4(n),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;Oc.copy(n).invert(),ol.copy(e.ray).applyMatrix4(Oc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,u=r.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let f=h,m=d;f<m;f++){const v=l.getX(f);Da.fromBufferAttribute(u,v),Fc(Da,v,c,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let f=h,m=d;f<m;f++)Da.fromBufferAttribute(u,f),Fc(Da,f,c,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Fc(i,e,t,r,n,a,s){const o=ol.distanceSqToPoint(i);if(o<t){const c=new D;ol.closestPointToPoint(i,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Sh extends xt{constructor(e=[],t=bi,r,n,a,s,o,c,l,u){super(e,t,r,n,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cn extends xt{constructor(e,t,r=Cr,n,a,s,o=Rt,c=Rt,l,u=Yr,h=1){if(u!==Yr&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,n,a,s,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vf extends cn{constructor(e,t=Cr,r=bi,n,a,s=Rt,o=Rt,c,l=Yr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,r,n,a,s,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mh extends xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class na extends Tt{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,r,t,e,s,a,0),m("z","y","x",1,-1,r,t,-e,s,a,1),m("x","z","y",1,1,e,r,t,n,s,2),m("x","z","y",1,-1,e,r,-t,n,s,3),m("x","y","z",1,-1,e,t,r,n,a,4),m("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function m(v,p,g,M,A,b,T,E,R,x,S){const N=b/R,P=T/x,B=b/2,Q=T/2,J=E/2,V=R+1,Y=x+1;let q=0,te=0;const oe=new D;for(let L=0;L<Y;L++){const z=L*P-Q;for(let ae=0;ae<V;ae++){const we=ae*N-B;oe[v]=we*M,oe[p]=z*A,oe[g]=J,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[p]=0,oe[g]=E>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(ae/R),h.push(1-L/x),q+=1}}for(let L=0;L<x;L++)for(let z=0;z<R;z++){const ae=d+z+V*L,we=d+z+V*(L+1),Ce=d+(z+1)+V*(L+1),Ue=d+(z+1)+V*L;c.push(ae,we,Ue),c.push(we,Ce,Ue),te+=6}o.addGroup(f,te,S),f+=te,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dn extends Tt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const M=g*d-s;for(let A=0;A<l;A++){const b=A*h-a;m.push(b,-M,0),v.push(0,0,1),p.push(A/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){const A=M+l*g,b=M+l*(g+1),T=M+1+l*(g+1),E=M+1+l*g;f.push(A,b,E),f.push(b,T,E)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}function un(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];if(Bc(n))n.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone();else if(Array.isArray(n))if(Bc(n[0])){const a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();e[t][r]=a}else e[t][r]=n.slice();else e[t][r]=n}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const r=un(i[t]);for(const n in r)e[n]=r[n]}return e}function Bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _f(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Qn={clone:un,merge:kt};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=un(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const n=e.uniforms[r];switch(this.uniforms[r]={},n.type){case"t":this.uniforms[r].value=t[n.value]||null;break;case"c":this.uniforms[r].value=new Ee().setHex(n.value);break;case"v2":this.uniforms[r].value=new Ie().fromArray(n.value);break;case"v3":this.uniforms[r].value=new D().fromArray(n.value);break;case"v4":this.uniforms[r].value=new ut().fromArray(n.value);break;case"m3":this.uniforms[r].value=new ze().fromArray(n.value);break;case"m4":this.uniforms[r].value=new Ve().fromArray(n.value);break;default:this.uniforms[r].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eh extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vl extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nr extends Vl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bf extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sf extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ua(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mf(i){function e(n,a){return i[n]-i[a]}const t=i.length,r=new Array(t);for(let n=0;n!==t;++n)r[n]=n;return r.sort(e),r}function kc(i,e,t){const r=i.length,n=new i.constructor(r);for(let a=0,s=0;s!==r;++a){const o=t[a]*e;for(let c=0;c!==e;++c)n[s++]=i[o+c]}return n}function Tf(i,e,t,r){let n=1,a=i[0];for(;a!==void 0&&a[r]===void 0;)a=i[n++];if(a===void 0)return;let s=a[r];if(s!==void 0)if(Array.isArray(s))do s=a[r],s!==void 0&&(e.push(a.time),t.push(...s)),a=i[n++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[r],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=i[n++];while(a!==void 0);else do s=a[r],s!==void 0&&(e.push(a.time),t.push(s)),a=i[n++];while(a!==void 0)}class pn{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,n=t[r],a=t[r-1];r:{e:{let s;t:{i:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(a=n,n=t[++r],e<n)break e}s=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(r=2,a=o);for(let c=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===c)break;if(n=a,a=t[--r-1],e>=a)break e}s=r,r=0;break t}break r}for(;r<s;){const o=r+s>>>1;e<t[o]?s=o:r=o+1}if(n=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,n)}return this.interpolate_(r,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=r[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ef extends pn{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(e,t,r){const n=this.parameterPositions;let a=e-2,s=e+1,o=n[a],c=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case ic:a=e,o=2*t-r;break;case nc:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=r}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:s=e,c=2*r-t;break;case nc:s=1,c=r+n[1]-n[0];break;default:s=e-1,c=t}const l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-r),this._offsetPrev=a*u,this._offsetNext=s*u}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(r-t)/(n-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,A=(-1-f)*p+(1.5+f)*v+.5*m,b=f*p-f*v;for(let T=0;T!==o;++T)a[T]=g*s[u+T]+M*s[l+T]+A*s[c+T]+b*s[h+T];return a}}class wf extends pn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(r-t)/(n-t),h=1-u;for(let d=0;d!==o;++d)a[d]=s[l+d]*h+s[c+d]*u;return a}}class Af extends pn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rf extends pn{interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const m=(r-t)/(n-t),v=1-m;for(let p=0;p!==o;++p)a[p]=s[l+p]*v+s[c+p]*m;return a}const d=o*2,f=e-1;for(let m=0;m!==o;++m){const v=s[l+m],p=s[c+m],g=f*d+m*2,M=h[g],A=h[g+1],b=e*d+m*2,T=u[b],E=u[b+1];let R=(r-t)/(n-t),x,S,N,P,B;for(let Q=0;Q<8;Q++){x=R*R,S=x*R,N=1-R,P=N*N,B=P*N;const J=B*t+3*P*R*M+3*N*x*T+S*n-r;if(Math.abs(J)<1e-10)break;const V=3*P*(M-t)+6*N*R*(T-M)+3*x*(n-T);if(Math.abs(V)<1e-10)break;R=R-J/V,R=Math.max(0,Math.min(1,R))}a[m]=B*v+3*P*R*A+3*N*x*E+S*p}return a}}class xr{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Rf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qn:t=this.InterpolantFactoryMethodDiscrete;break;case $n:t=this.InterpolantFactoryMethodLinear;break;case Es:t=this.InterpolantFactoryMethodSmooth;break;case tc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return Le("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qn;case this.InterpolantFactoryMethodLinear:return $n;case this.InterpolantFactoryMethodSmooth:return Es;case this.InterpolantFactoryMethodBezier:return tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){const r=this.times,n=r.length;let a=0,s=n-1;for(;a!==n&&r[a]<e;)++a;for(;s!==-1&&r[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=r.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,n=this.values,a=r.length;a===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const c=r[o];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){Fe("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(n!==void 0&&yp(n))for(let o=0,c=n.length;o!==c;++o){const l=n[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===Es,a=e.length-1;let s=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(n)c=!0;else{const h=o*r,d=h-r,f=h+r;for(let m=0;m!==r;++m){const v=t[h+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];const h=o*r,d=s*r;for(let f=0;f!==r;++f)t[d+f]=t[h+f]}++s}}if(a>0){e[s]=e[a];for(let o=a*r,c=s*r,l=0;l!==r;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}xr.prototype.ValueTypeName="";xr.prototype.TimeBufferType=Float32Array;xr.prototype.ValueBufferType=Float32Array;xr.prototype.DefaultInterpolation=$n;class fn extends xr{constructor(e,t,r){super(e,t,r)}}fn.prototype.ValueTypeName="bool";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=qn;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;class wh extends xr{constructor(e,t,r,n){super(e,t,r,n)}}wh.prototype.ValueTypeName="color";class ea extends xr{constructor(e,t,r,n){super(e,t,r,n)}}ea.prototype.ValueTypeName="number";class Cf extends pn{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(r-t)/(n-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Pr.slerpFlat(a,0,s,l-o,s,l,c);return a}}class ta extends xr{constructor(e,t,r,n){super(e,t,r,n)}InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}}ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;class mn extends xr{constructor(e,t,r){super(e,t,r)}}mn.prototype.ValueTypeName="string";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=qn;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends xr{constructor(e,t,r,n){super(e,t,r,n)}}us.prototype.ValueTypeName="vector";class Pf{constructor(e="",t=-1,r=[],n=cp){this.name=e,this.tracks=r,this.duration=t,this.blendMode=n,this.uuid=_r(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,n=1/(e.fps||1);for(let s=0,o=r.length;s!==o;++s)t.push(Nf(r[s]).scale(n));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],r=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,s=r.length;a!==s;++a)t.push(xr.toJSON(r[a]));return n}static CreateFromMorphTargetSequence(e,t,r,n){const a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const u=Mf(c);c=kc(c,1,u),l=kc(l,1,u),!n&&c[0]===0&&(c.push(a),l.push(l[0])),s.push(new ea(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const n=e;r=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<r.length;n++)if(r[n].name===t)return r[n];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const n={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(a);if(u&&u.length>1){const h=u[1];let d=n[h];d||(n[h]=d=[]),d.push(l)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,r));return s}resetDuration(){const e=this.tracks;let t=0;for(let r=0,n=e.length;r!==n;++r){const a=this.tracks[r];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let r=0;r<this.tracks.length;r++)e.push(this.tracks[r].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return wh;case"quaternion":return ta;case"bool":case"boolean":return fn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Nf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lf(i.type);if(i.times===void 0){const t=[],r=[];Tf(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Xr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Hc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Hc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Hc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class If{constructor(e,t,r){const n=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(u){o++,a===!1&&n.onStart!==void 0&&n.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Df=new If;class gn{constructor(e){this.manager=e!==void 0?e:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,a){r.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gr={};class Uf extends Error{constructor(e,t){super(e),this.response=t}}class Ah extends gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Xr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Gr[e]!==void 0){Gr[e].push({onLoad:t,onProgress:r,onError:n});return}Gr[e]=[],Gr[e].push({onLoad:t,onProgress:r,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Gr[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){M();function M(){h.read().then(({done:A,value:b})=>{if(A)g.close();else{v+=b.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,R=u.length;E<R;E++){const x=u[E];x.onProgress&&x.onProgress(T)}g.enqueue(b),M()}},A=>{g.error(A)})}}});return new Response(p)}else throw new Uf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(f=>d.decode(f))}}}).then(l=>{Xr.add(`file:${e}`,l);const u=Gr[e];delete Gr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Gr[e];if(u===void 0)throw this.manager.itemError(e),l;delete Gr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xi=new WeakMap;class Of extends gn{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let h=Xi.get(s);h===void 0&&(h=[],Xi.set(s,h)),h.push({onLoad:t,onError:n})}return s}const o=Zn("img");function c(){u(),t&&t(this);const h=Xi.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Xi.delete(this),a.manager.itemEnd(e)}function l(h){u(),n&&n(h),Xr.remove(`image:${e}`);const d=Xi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Xi.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xr.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Ff extends gn{constructor(e){super(e)}load(e,t,r,n){const a=new xt,s=new Of(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,n),a}}class Gl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Js=new Ve,zc=new D,Vc=new D;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),Js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Js,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Kn||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oa=new D,Fa=new Pr,br=new D;class Rh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=wr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oa,Fa,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Fa,br.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Oa,Fa,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Fa,br.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new D,Gc=new Ie,Wc=new Ie;class zt extends Rh{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ln*2*Math.atan(Math.tan(Gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,Wc),t.subVectors(Wc,Gc)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*r/l,n*=s.width/c,r*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bf extends Wl{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=ln*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(r!==t.fov||n!==t.aspect||a!==t.far)&&(t.fov=r,t.aspect=n,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kf extends Gl{constructor(e,t,r=0,n=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=r,this.angle=n,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Hf extends Wl{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}}class zf extends Gl{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class aa extends Rh{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vf extends Wl{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gf extends Gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Vf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xn{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qs=new WeakMap;class Wf extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xr.get(`image-bitmap:${e}`);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(l=>{Qs.has(s)===!0?(n&&n(Qs.get(s)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){Xr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){n&&n(l),Qs.set(c,l),Xr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Xr.add(`image-bitmap:${e}`,c),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ji=-90,Yi=1;class Xf extends mt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new zt(ji,Yi,e,t);n.layers=this.layers,this.add(n);const a=new zt(ji,Yi,e,t);a.layers=this.layers,this.add(a);const s=new zt(ji,Yi,e,t);s.layers=this.layers,this.add(s);const o=new zt(ji,Yi,e,t);o.layers=this.layers,this.add(o);const c=new zt(ji,Yi,e,t);c.layers=this.layers,this.add(c);const l=new zt(ji,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===wr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(r,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(r,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,r.texture.needsPMREMUpdate=!0}}class jf extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qf(){this._document.hidden===!1&&this.reset()}const Xl="\\[\\]\\.:\\/",$f=new RegExp("["+Xl+"]","g"),jl="[^"+Xl+"]",Kf="[^"+Xl.replace("\\.","")+"]",Zf=/((?:WC+[\/:])*)/.source.replace("WC",jl),Jf=/(WCOD+)?/.source.replace("WCOD",Kf),Qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),tm=new RegExp("^"+Zf+Jf+Qf+em+"$"),rm=["material","materials","bones","map"];class im{constructor(e,t,r){const n=r||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=r.length;n!==a;++n)r[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class ot{constructor(e,t,r){this.path=t,this.parsedPath=r||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,r):new ot(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){const t=tm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const a=r.nodeName.substring(n+1);rm.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const c=r(o.children);if(c)return c}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)e[t++]=r[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,n=t.propertyName;let a=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let l=t.objectIndex;switch(r){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[n];if(s===void 0){const l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=im;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Xc=new Ve;class nm{constructor(e,t,r=0,n=1/0){this.ray=new ra(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xc),this}intersectObject(e,t=!0,r=[]){return ll(e,this,r,t),r.sort(jc),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)ll(e[n],this,r,t);return r.sort(jc),r}}function jc(i,e){return i.distance-e.distance}function ll(i,e,t,r){let n=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)ll(a[s],e,t,!0)}}class Ch{static{Ch.prototype.isMatrix2=!0}constructor(e,t,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,n){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=n,this}}function Yc(i,e,t,r){const n=am(r);switch(t){case ch:return i*e;case Ll:return i*e/n.components*n.byteLength;case Nl:return i*e/n.components*n.byteLength;case Si:return i*e*2/n.components*n.byteLength;case Il:return i*e*2/n.components*n.byteLength;case uh:return i*e*3/n.components*n.byteLength;case or:return i*e*4/n.components*n.byteLength;case Dl:return i*e*4/n.components*n.byteLength;case qa:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(i,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case No:case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case rs:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zo:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case is:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function am(i){switch(i){case Kt:case ah:return{byteLength:1,components:1};case jn:case sh:case Zt:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case Cr:case Rl:case sr:return{byteLength:4,components:1};case oh:case lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Ph(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function sm(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const v=h[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ag=`uniform sampler2D dfgLUT;
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
}`,sg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Mv=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,kv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:hm,alphatest_pars_fragment:dm,aomap_fragment:pm,aomap_pars_fragment:fm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:vm,beginnormal_vertex:_m,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:bm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Em,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Im,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Om,colorspace_fragment:Fm,colorspace_pars_fragment:Bm,envmap_fragment:km,envmap_common_pars_fragment:Hm,envmap_pars_fragment:zm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:Qm,envmap_vertex:Gm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:jm,fog_pars_fragment:Ym,gradientmap_pars_fragment:qm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:rg,lights_phong_pars_fragment:ig,lights_physical_fragment:ng,lights_physical_pars_fragment:ag,lights_fragment_begin:sg,lights_fragment_maps:og,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:pg,map_fragment:fg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:vg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:xg,morphinstance_vertex:yg,morphcolor_vertex:bg,morphnormal_vertex:Sg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Tg,normal_fragment_begin:Eg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Dg,opaque_fragment:Ug,packing:Og,premultiplied_alpha_fragment:Fg,project_vertex:Bg,dithering_fragment:kg,dithering_pars_fragment:Hg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:jg,skinbase_vertex:Yg,skinning_pars_vertex:qg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:rv,uv_pars_fragment:iv,uv_pars_vertex:nv,uv_vertex:av,worldpos_vertex:sv,background_vert:ov,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:hv,cube_frag:dv,depth_vert:pv,depth_frag:fv,distance_vert:mv,distance_frag:gv,equirect_vert:vv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:bv,meshbasic_frag:Sv,meshlambert_vert:Mv,meshlambert_frag:Tv,meshmatcap_vert:Ev,meshmatcap_frag:wv,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Ov,shadow_vert:Fv,shadow_frag:Bv,sprite_vert:kv,sprite_frag:Hv},_e={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Tr={basic:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:kt([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:kt([_e.lights,_e.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Tr.physical={uniforms:kt([Tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ba={r:0,b:0,g:0},zv=new Ve,Lh=new ze;Lh.set(-1,0,0,0,1,0,0,0,1);function Vv(i,e,t,r,n,a){const s=new Ee(0);let o=n===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function m(M){let A=!1;const b=f(M);b===null?p(s,o):b&&b.isColor&&(p(b,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,A){const b=f(A);b&&(b.isCubeTexture||b.mapping===vs)?(l===void 0&&(l=new Ot(new na(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:un(Tr.backgroundCube.uniforms),vertexShader:Tr.backgroundCube.vertexShader,fragmentShader:Tr.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lh),l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,(u!==b||h!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ot(new dn(2,2),new dt({name:"BackgroundMaterial",uniforms:un(Tr.background.uniforms),vertexShader:Tr.background.vertexShader,fragmentShader:Tr.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(Ba,Th(i)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,A,a)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,A=1){s.set(M),o=A,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(s,o)},render:m,addToRenderList:v,dispose:g}}function Gv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=d(null);let a=n,s=!1;function o(P,B,Q,J,V){let Y=!1;const q=h(P,J,Q,B);a!==q&&(a=q,l(a.object)),Y=f(P,J,Q,V),Y&&m(P,J,Q,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,b(P,B,Q,J),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,B,Q,J){const V=J.wireframe===!0;let Y=r[B.id];Y===void 0&&(Y={},r[B.id]=Y);const q=P.isInstancedMesh===!0?P.id:0;let te=Y[q];te===void 0&&(te={},Y[q]=te);let oe=te[Q.id];oe===void 0&&(oe={},te[Q.id]=oe);let L=oe[V];return L===void 0&&(L=d(c()),oe[V]=L),L}function d(P){const B=[],Q=[],J=[];for(let V=0;V<t;V++)B[V]=0,Q[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:J,object:P,attributes:{},index:null}}function f(P,B,Q,J){const V=a.attributes,Y=B.attributes;let q=0;const te=Q.getAttributes();for(const oe in te)if(te[oe].location>=0){const L=V[oe];let z=Y[oe];if(z===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),L===void 0||L.attribute!==z||z&&L.data!==z.data)return!0;q++}return a.attributesNum!==q||a.index!==J}function m(P,B,Q,J){const V={},Y=B.attributes;let q=0;const te=Q.getAttributes();for(const oe in te)if(te[oe].location>=0){let L=Y[oe];L===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(L=P.instanceColor));const z={};z.attribute=L,L&&L.data&&(z.data=L.data),V[oe]=z,q++}a.attributes=V,a.attributesNum=q,a.index=J}function v(){const P=a.newAttributes;for(let B=0,Q=P.length;B<Q;B++)P[B]=0}function p(P){g(P,0)}function g(P,B){const Q=a.newAttributes,J=a.enabledAttributes,V=a.attributeDivisors;Q[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),V[P]!==B&&(i.vertexAttribDivisor(P,B),V[P]=B)}function M(){const P=a.newAttributes,B=a.enabledAttributes;for(let Q=0,J=B.length;Q<J;Q++)B[Q]!==P[Q]&&(i.disableVertexAttribArray(Q),B[Q]=0)}function A(P,B,Q,J,V,Y,q){q===!0?i.vertexAttribIPointer(P,B,Q,V,Y):i.vertexAttribPointer(P,B,Q,J,V,Y)}function b(P,B,Q,J){v();const V=J.attributes,Y=Q.getAttributes(),q=B.defaultAttributeValues;for(const te in Y){const oe=Y[te];if(oe.location>=0){let L=V[te];if(L===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),L!==void 0){const z=L.normalized,ae=L.itemSize,we=e.get(L);if(we===void 0)continue;const Ce=we.buffer,Ue=we.type,K=we.bytesPerElement,re=Ue===i.INT||Ue===i.UNSIGNED_INT||L.gpuType===Rl;if(L.isInterleavedBufferAttribute){const ie=L.data,De=ie.stride,Oe=L.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<oe.locationSize;ye++)g(oe.location+ye,ie.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<oe.locationSize;ye++)p(oe.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let ye=0;ye<oe.locationSize;ye++)A(oe.location+ye,ae/oe.locationSize,Ue,z,De*K,(Oe+ae/oe.locationSize*ye)*K,re)}else{if(L.isInstancedBufferAttribute){for(let ie=0;ie<oe.locationSize;ie++)g(oe.location+ie,L.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ie=0;ie<oe.locationSize;ie++)p(oe.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let ie=0;ie<oe.locationSize;ie++)A(oe.location+ie,ae/oe.locationSize,Ue,z,ae*K,ae/oe.locationSize*ie*K,re)}}else if(q!==void 0){const z=q[te];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(oe.location,z);break;case 3:i.vertexAttrib3fv(oe.location,z);break;case 4:i.vertexAttrib4fv(oe.location,z);break;default:i.vertexAttrib1fv(oe.location,z)}}}}M()}function T(){S();for(const P in r){const B=r[P];for(const Q in B){const J=B[Q];for(const V in J){const Y=J[V];for(const q in Y)u(Y[q].object),delete Y[q];delete J[V]}}delete r[P]}}function E(P){if(r[P.id]===void 0)return;const B=r[P.id];for(const Q in B){const J=B[Q];for(const V in J){const Y=J[V];for(const q in Y)u(Y[q].object),delete Y[q];delete J[V]}}delete r[P.id]}function R(P){for(const B in r){const Q=r[B];for(const J in Q){const V=Q[J];if(V[P.id]===void 0)continue;const Y=V[P.id];for(const q in Y)u(Y[q].object),delete Y[q];delete V[P.id]}}}function x(P){for(const B in r){const Q=r[B],J=P.isInstancedMesh===!0?P.id:0,V=Q[J];if(V!==void 0){for(const Y in V){const q=V[Y];for(const te in q)u(q[te].object),delete q[te];delete V[Y]}delete Q[J],Object.keys(Q).length===0&&delete r[B]}}}function S(){N(),s=!0,a!==n&&(a=n,l(a.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:S,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Wv(i,e,t){let r;function n(c){r=c}function a(c,l){i.drawArrays(r,c,l),t.update(l,r,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(r,c,l,u),t.update(l,r,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Xv(i,e,t,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){return!(R!==or&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kt&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sr&&!x)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:T,samples:E}}function jv(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new oi,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||r!==0||n;return n=d,r=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!n||m===null||m.length===0||a&&!p)a?u(null):l();else{const M=a?0:r,A=M*4;let b=g.clippingState||null;c.value=b,b=u(m,d,A,f);for(let T=0;T!==A;++T)b[T]=t[T];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,m!==!0||p===null){const g=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,b=f;A!==v;++A,b+=4)s.copy(h[A]).applyMatrix4(M,o),s.normal.toArray(p,b),p[b+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const hi=4,qc=[.125,.215,.35,.446,.526,.582],xi=20,Yv=256,Fn=new aa,$c=new Ee;let eo=null,to=0,ro=0,io=!1;const qv=new D;class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,n=100,a={}){const{size:s=256,position:o=qv}=a;eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eo,to,ro),this._renderer.xr.enabled=io,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===sn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Zt,format:or,colorSpace:Qt,depthBuffer:!1},n=Zc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$v(a)),this._blurMaterial=Zv(a,e,t),this._ggxMaterial=Kv(a,e,t)}return n}_compileMaterial(e){const t=new Ot(new Tt,e);this._renderer.compile(t,Fn)}_sceneToCubeUV(e,t,r,n,a){const s=new zt(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,h=l.toneMapping;l.getClearColor($c),l.toneMapping=vr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new na,new ui({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,f=d.material;let m=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,m=!0):(f.color.copy($c),m=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(s.up.set(0,o[p],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+c[p],a.y,a.z)):g===1?(s.up.set(0,0,o[p]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+c[p],a.z)):(s.up.set(0,o[p],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+c[p]));const M=this._cubeSize;qi(n,g*M,p>2?M:0,M,M),l.setRenderTarget(n),m&&l.render(d,s),l.render(e,s)}l.toneMapping=h,l.autoClear=u,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===bi||e.mapping===sn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const a=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;qi(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,Fn)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const n=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[r];o.material=s;const c=s.uniforms,l=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:m}=this,v=this._sizeLods[r],p=3*v*(r>m-hi?r-m+hi:0),g=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,qi(a,p,g,3*v,2*v),n.setRenderTarget(a),n.render(o,Fn),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=m-r,qi(e,p,g,3*v,2*v),n.setRenderTarget(e),n.render(o,Fn)}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[n];h.material=l;const d=l.uniforms,f=this._sizeLods[r]-1,m=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=a/m,p=isFinite(a)?1+Math.floor(u*v):xi;p>xi&&Le(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const g=[];let M=0;for(let R=0;R<xi;++R){const x=R/v,S=Math.exp(-x*x/2);g.push(S),R===0?M+=S:R<p&&(M+=2*S)}for(let R=0;R<g.length;R++)g[R]=g[R]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=m,d.mipInt.value=A-r;const b=this._sizeLods[n],T=3*b*(n>A-hi?n-A+hi:0),E=4*(this._cubeSize-b);qi(t,T,E,3*b,2*b),c.setRenderTarget(t),c.render(h,Fn)}}function $v(i){const e=[],t=[],r=[];let n=i;const a=i-hi+1+qc.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);e.push(o);let c=1/o;s>i-hi?c=qc[s-i+hi-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,p=2,g=1,M=new Float32Array(v*m*f),A=new Float32Array(p*m*f),b=new Float32Array(g*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,x=E>2?0:-1,S=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(S,v*m*E),A.set(d,p*m*E);const N=[E,E,E,E,E,E];b.set(N,g*m*E)}const T=new Tt;T.setAttribute("position",new lt(M,v)),T.setAttribute("uv",new lt(A,p)),T.setAttribute("faceIndex",new lt(b,g)),r.push(new Ot(T,null)),n>hi&&n--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Zc(i,e,t){const r=new Vt(i,e,t);return r.texture.mapping=vs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qi(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Kv(i,e,t){return new dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Zv(i,e,t){const r=new Float32Array(xi),n=new D(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ys(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Jc(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Qc(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function ys(){return`

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
	`}class Nh extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Sh(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new na(5,5,5),a=new dt({name:"CubemapFromEquirect",uniforms:un(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gt,blending:Ar});a.uniforms.tEquirect.value=t;const s=new Ot(n,a),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Ct),new Xf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}function Jv(i){let e=new WeakMap,t=new WeakMap,r=null;function n(d,f=!1){return d==null?null:f?s(d):a(d)}function a(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ms||f===Ts)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Nh(m.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const f=d.mapping,m=f===Ms||f===Ts,v=f===bi||f===sn;if(m||v){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return r===null&&(r=new Kc(i)),p=m?r.fromEquirectangular(d,p):r.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&c(M)?(r===null&&(r=new Kc(i)),p=m?r.fromEquirectangular(d):r.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Ms?d.mapping=bi:f===Ts&&(d.mapping=sn),d}function c(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:h}}function Qv(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const n=i.getExtension(r);return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&en("WebGLRenderer: "+r+" extension not supported."),n}}}function e_(i,e,t,r){const n={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete n[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let A=0,b=M.length;A<b;A+=3){const T=M[A+0],E=M[A+1],R=M[A+2];d.push(T,E,E,R,R,T)}}else{const M=m.array;v=m.version;for(let A=0,b=M.length/3-1;A<b;A+=3){const T=A+0,E=A+1,R=A+2;d.push(T,E,E,R,R,T)}}const p=new(m.count>=65535?gh:mh)(d,1);p.version=v;const g=a.get(h);g&&e.remove(g),a.set(h,p)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function t_(i,e,t){let r;function n(h){r=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function c(h,d){i.drawElements(r,d,a,h*s),t.update(d,r,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(r,d,a,h*s,f),t.update(d,r,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,a,h,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];t.update(m,r,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function r_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Fe("WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function i_(i,e,t){const r=new WeakMap,n=new ut;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=r.get(o);if(d===void 0||d.count!==h){let f=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*h),x=new ph(R,T,E,h);x.type=sr,x.needsUpdate=!0;const S=b*4;for(let N=0;N<h;N++){const P=g[N],B=M[N],Q=A[N],J=T*E*4*N;for(let V=0;V<P.count;V++){const Y=V*S;m===!0&&(n.fromBufferAttribute(P,V),R[J+Y+0]=n.x,R[J+Y+1]=n.y,R[J+Y+2]=n.z,R[J+Y+3]=0),v===!0&&(n.fromBufferAttribute(B,V),R[J+Y+4]=n.x,R[J+Y+5]=n.y,R[J+Y+6]=n.z,R[J+Y+7]=0),p===!0&&(n.fromBufferAttribute(Q,V),R[J+Y+8]=n.x,R[J+Y+9]=n.y,R[J+Y+10]=n.z,R[J+Y+11]=Q.itemSize===4?n.w:1)}}d={count:h,texture:x,size:new Ie(T,E)},r.set(o,d),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function n_(i,e,t,r,n){let a=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function o(){a=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),r.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const a_={[bl]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[El]:"CUSTOM_TONE_MAPPING"};function s_(i,e,t,r,n,a){const s=new Vt(e,t,{type:i,depthBuffer:n,stencilBuffer:a,samples:r?4:0,depthTexture:n?new cn(e,t):void 0}),o=new Vt(e,t,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),c=new Tt;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const l=new Eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ot(c,l),h=new aa(-1,1,1,-1,0,1);let d=null,f=null,m=!1,v,p=null,g=[],M=!1;this.setSize=function(A,b){s.setSize(A,b),o.setSize(A,b);for(let T=0;T<g.length;T++){const E=g[T];E.setSize&&E.setSize(A,b)}},this.setEffects=function(A){g=A,M=g.length>0&&g[0].isRenderPass===!0;const b=s.width,T=s.height;for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(b,T)}},this.begin=function(A,b){if(m||A.toneMapping===vr&&g.length===0)return!1;if(p=b,b!==null){const T=b.width,E=b.height;(s.width!==T||s.height!==E)&&this.setSize(T,E)}return M===!1&&A.setRenderTarget(s),v=A.toneMapping,A.toneMapping=vr,!0},this.hasRenderPass=function(){return M},this.end=function(A,b){A.toneMapping=v,m=!0;let T=s,E=o;for(let R=0;R<g.length;R++){const x=g[R];if(x.enabled!==!1&&(x.render(A,E,T,b),x.needsSwap!==!1)){const S=T;T=E,E=S}}if(d!==A.outputColorSpace||f!==A.toneMapping){d=A.outputColorSpace,f=A.toneMapping,l.defines={},Ke.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");const R=a_[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(p),A.render(u,h),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Ih=new xt,cl=new cn(1,1),Dh=new ph,Uh=new jp,Oh=new Sh,eu=[],tu=[],ru=new Float32Array(16),iu=new Float32Array(9),nu=new Float32Array(4);function vn(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=eu[n];if(a===void 0&&(a=new Float32Array(n),eu[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function bs(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function o_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function h_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;nu.set(r),i.uniformMatrix2fv(this.addr,!1,nu),Lt(t,r)}}function d_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;iu.set(r),i.uniformMatrix3fv(this.addr,!1,iu),Lt(t,r)}}function p_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,r))return;ru.set(r),i.uniformMatrix4fv(this.addr,!1,ru),Lt(t,r)}}function f_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function __(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function S_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);let a;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=t.isReversedDepthBuffer()?Ol:Ul,a=cl):a=Ih,t.setTexture2D(e||a,n)}function M_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Uh,n)}function T_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Oh,n)}function E_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Dh,n)}function w_(i){switch(i){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return h_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return f_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return __;case 36294:return x_;case 36295:return y_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(i,e){i.uniform1fv(this.addr,e)}function R_(i,e){const t=vn(e,this.size,2);i.uniform2fv(this.addr,t)}function C_(i,e){const t=vn(e,this.size,3);i.uniform3fv(this.addr,t)}function P_(i,e){const t=vn(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){const t=vn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N_(i,e){const t=vn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I_(i,e){const t=vn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function D_(i,e){i.uniform1iv(this.addr,e)}function U_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function F_(i,e){i.uniform4iv(this.addr,e)}function B_(i,e){i.uniform1uiv(this.addr,e)}function k_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function z_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){const r=this.cache,n=e.length,a=bs(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=cl:s=Ih;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||s,a[o])}function G_(i,e,t){const r=this.cache,n=e.length,a=bs(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Uh,a[s])}function W_(i,e,t){const r=this.cache,n=e.length,a=bs(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Oh,a[s])}function X_(i,e,t){const r=this.cache,n=e.length,a=bs(t,n);Pt(r,a)||(i.uniform1iv(this.addr,a),Lt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Dh,a[s])}function j_(i){switch(i){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return L_;case 35675:return N_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return B_;case 36294:return k_;case 36295:return H_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}}class q_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const no=/(\w+)(\])?(\[|\.)?/g;function au(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){const r=i.name,n=r.length;for(no.lastIndex=0;;){const a=no.exec(r),s=no.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){au(t,l===void 0?new Y_(o,i,e):new q_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new $_(o),au(t,u)),t=u}}}class Ja{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);K_(o,c,this)}const n=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):a.push(s);n.length>0&&(this.seq=n.concat(a))}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function su(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Z_=37297;let J_=0;function Q_(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const ou=new ze;function e0(i){Ke._getMatrix(ou,Ke.workingColorSpace,i);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=(i.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Q_(i.getShaderSource(e),s)}else return n}function t0(i,e){const t=e0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const r0={[bl]:"Linear",[Sl]:"Reinhard",[Ml]:"Cineon",[Tl]:"ACESFilmic",[wl]:"AgX",[Al]:"Neutral",[El]:"Custom"};function i0(i,e){const t=r0[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new D;function n0(){Ke.getLuminanceCoefficients(ka);const i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function s0(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function o0(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Vn(i){return i!==""}function cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(l0,u0)}const c0=new Map;function u0(i,e){let t=je[e];if(t===void 0){const r=c0.get(e);if(r!==void 0)t=je[r],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ul(t)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(h0,d0)}function d0(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const p0={[ja]:"SHADOWMAP_TYPE_PCF",[Hn]:"SHADOWMAP_TYPE_VSM"};function f0(i){return p0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m0={[bi]:"ENVMAP_TYPE_CUBE",[sn]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function g0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const v0={[sn]:"ENVMAP_MODE_REFRACTION"};function _0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":v0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x0={[rh]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[op]:"ENVMAP_BLENDING_ADD"};function y0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x0[i.combine]||"ENVMAP_BLENDING_NONE"}function b0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function S0(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=f0(t),l=g0(t),u=_0(t),h=y0(t),d=b0(t),f=a0(t),m=s0(a),v=n.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vn).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vn).join(`
`),g.length>0&&(g+=`
`)):(p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),g=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?je.tonemapping_pars_fragment:"",t.toneMapping!==vr?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vn).join(`
`)),s=ul(s),s=cu(s,t),s=uu(s,t),o=ul(o),o=cu(o,t),o=uu(o,t),s=hu(s),o=hu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=M+p+s,b=M+g+o,T=su(n,n.VERTEX_SHADER,A),E=su(n,n.FRAGMENT_SHADER,b);n.attachShader(v,T),n.attachShader(v,E),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const B=n.getProgramInfoLog(v)||"",Q=n.getShaderInfoLog(T)||"",J=n.getShaderInfoLog(E)||"",V=B.trim(),Y=Q.trim(),q=J.trim();let te=!0,oe=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,v,T,E);else{const L=lu(n,T,"vertex"),z=lu(n,E,"fragment");Fe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+L+`
`+z)}else V!==""?Le("WebGLProgram: Program Info Log:",V):(Y===""||q==="")&&(oe=!1);oe&&(P.diagnostics={runnable:te,programLog:V,vertexShader:{log:Y,prefix:p},fragmentShader:{log:q,prefix:g}})}n.deleteShader(T),n.deleteShader(E),x=new Ja(n,v),S=o0(n,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(v,Z_)),N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let M0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(r)===!1&&(n.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new E0(e),t.set(e,r)),r}}class E0{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}}function w0(i){return i===Si||i===rs||i===is}function A0(i,e,t,r,n,a){const s=new kl,o=new T0,c=new Set,l=[],u=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,S,N,P,B,Q){const J=P.fog,V=B.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,te=e.get(x.envMap||Y,q),oe=te&&te.mapping===vs?te.image.height:null,L=f[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=z!==void 0?z.length:0;let we=0;V.morphAttributes.position!==void 0&&(we=1),V.morphAttributes.normal!==void 0&&(we=2),V.morphAttributes.color!==void 0&&(we=3);let Ce,Ue,K,re;if(L){const be=Tr[L];Ce=be.vertexShader,Ue=be.fragmentShader}else{Ce=x.vertexShader,Ue=x.fragmentShader;const be=o.getVertexShaderStage(x),Nt=o.getFragmentShaderStage(x);o.update(x,be,Nt),K=be.id,re=Nt.id}const ie=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,et=!!x.map,Ge=!!x.matcap,Be=!!te,Xe=!!x.aoMap,ht=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,ct=!!x.normalMap,_t=!!x.displacementMap,qe=!!x.emissiveMap,pt=!!x.metalnessMap,gt=!!x.roughnessMap,U=x.anisotropy>0,bt=x.clearcoat>0,$e=x.dispersion>0,w=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,W=U&&!!x.anisotropyMap,$=bt&&!!x.clearcoatMap,ce=bt&&!!x.clearcoatNormalMap,pe=bt&&!!x.clearcoatRoughnessMap,O=w&&!!x.iridescenceMap,he=w&&!!x.iridescenceThicknessMap,de=_&&!!x.sheenColorMap,Te=_&&!!x.sheenRoughnessMap,se=!!x.specularMap,ke=!!x.specularColorMap,Ne=!!x.specularIntensityMap,He=k&&!!x.transmissionMap,Ae=k&&!!x.thicknessMap,I=!!x.gradientMap,Z=!!x.alphaMap,le=x.alphaTest>0,xe=!!x.alphaHash,ge=!!x.extensions;let ne=vr;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Pe={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:Ue,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:et,matcap:Ge,envMap:Be,envMapMode:Be&&te.mapping,envMapCubeUVHeight:oe,aoMap:Xe,lightMap:ht,bumpMap:Et,normalMap:ct,displacementMap:_t,emissiveMap:qe,normalMapObjectSpace:ct&&x.normalMapType===dp,normalMapTangentSpace:ct&&x.normalMapType===nl,packedNormalMap:ct&&x.normalMapType===nl&&w0(x.normalMap.format),metalnessMap:pt,roughnessMap:gt,anisotropy:U,anisotropyMap:W,clearcoat:bt,clearcoatMap:$,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,dispersion:$e,iridescence:w,iridescenceMap:O,iridescenceThicknessMap:he,sheen:_,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:se,specularColorMap:ke,specularIntensityMap:Ne,transmission:k,transmissionMap:He,thicknessMap:Ae,gradientMap:I,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:xe,combine:x.combine,mapUv:et&&m(x.map.channel),aoMapUv:Xe&&m(x.aoMap.channel),lightMapUv:ht&&m(x.lightMap.channel),bumpMapUv:Et&&m(x.bumpMap.channel),normalMapUv:ct&&m(x.normalMap.channel),displacementMapUv:_t&&m(x.displacementMap.channel),emissiveMapUv:qe&&m(x.emissiveMap.channel),metalnessMapUv:pt&&m(x.metalnessMap.channel),roughnessMapUv:gt&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:$&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(x.sheenRoughnessMap.channel),specularMapUv:se&&m(x.specularMap.channel),specularColorMapUv:ke&&m(x.specularColorMap.channel),specularIntensityMapUv:Ne&&m(x.specularIntensityMap.channel),transmissionMapUv:He&&m(x.transmissionMap.channel),thicknessMapUv:Ae&&m(x.thicknessMap.channel),alphaMapUv:Z&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ct||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(et||Z),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:qe&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nr,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)S.push(N),S.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function A(x){const S=f[x.type];let N;if(S){const P=Tr[S];N=Qn.clone(P.uniforms)}else N=x.uniforms;return N}function b(x,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new S0(i,S,x,n),l.push(N),u.set(S,N)),N}function T(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:R}}function R0(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function n(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:a}}function C0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fu(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,p,g){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:s(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=s(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=g),e++,M}function c(d,f,m,v,p,g){const M=o(d,f,m,v,p,g);m.transmission>0?r.push(M):m.transparent===!0?n.push(M):t.push(M)}function l(d,f,m,v,p,g){const M=o(d,f,m,v,p,g);m.transmission>0?r.unshift(M):m.transparent===!0?n.unshift(M):t.unshift(M)}function u(d,f,m){t.length>1&&t.sort(d||C0),r.length>1&&r.sort(f||pu),n.length>1&&n.sort(f||pu),m&&(t.reverse(),r.reverse(),n.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:c,unshift:l,finish:h,sort:u}}function P0(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new fu,i.set(r,[s])):n>=a.length?(s=new fu,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ee};break;case"SpotLight":t={position:new D,direction:new D,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function N0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let I0=0;function D0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U0(i){const e=new L0,t=N0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new D);const n=new D,a=new Ve,s=new Ve;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,M=0,A=0,b=0,T=0,E=0,R=0;l.sort(D0);for(let S=0,N=l.length;S<N;S++){const P=l[S],B=P.color,Q=P.intensity,J=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=B.r*Q,h+=B.g*Q,d+=B.b*Q;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(P.sh.coefficients[Y],Q);R++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.directionalShadow[f]=te,r.directionalShadowMap[f]=V,r.directionalShadowMatrix[f]=P.shadow.matrix,M++}r.directional[f]=Y,f++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(B).multiplyScalar(Q),Y.distance=J,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,r.spot[v]=Y;const q=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&E++),r.spotLightMatrix[v]=q.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.spotShadow[v]=te,r.spotShadowMap[v]=V,b++}v++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(B).multiplyScalar(Q),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),r.rectArea[p]=Y,p++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=V,r.pointShadowMatrix[m]=P.shadow.matrix,A++}r.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(Q),Y.groundColor.copy(P.groundColor).multiplyScalar(Q),r.hemi[g]=Y,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=d;const x=r.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==b||x.numSpotMaps!==T||x.numLightProbes!==R)&&(r.directional.length=f,r.spot.length=v,r.rectArea.length=p,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+T-E,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=R,x.directionalLength=f,x.pointLength=m,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=b,x.numSpotMaps=T,x.numLightProbes=R,r.version=I0++)}function c(l,u){let h=0,d=0,f=0,m=0,v=0;const p=u.matrixWorldInverse;for(let g=0,M=l.length;g<M;g++){const A=l[g];if(A.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),h++}else if(A.isSpotLight){const b=r.spot[f];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),f++}else if(A.isRectAreaLight){const b=r.rectArea[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),s.identity(),a.copy(A.matrixWorld),a.premultiply(p),s.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),m++}else if(A.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const b=r.hemi[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:r}}function mu(i){const e=new U0(i),t=[],r=[],n=[];function a(d){h.camera=d,t.length=0,r.length=0,n.length=0}function s(d){t.push(d)}function o(d){r.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function O0(i){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new mu(i),e.set(n,[o])):a>=s.length?(o=new mu(i),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`,k0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],H0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],gu=new Ve,Bn=new D,ao=new D;function z0(i,e,t){let r=new zl;const n=new Ie,a=new Ie,s=new ut,o=new bf,c=new Sf,l={},u=t.maxTextureSize,h={[Rr]:Gt,[Gt]:Rr,[nr]:nr},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:F0,fragmentShader:B0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Tt;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(E,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===zd&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ja);const S=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ar),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Q=g!==this.type;Q&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(V=>V.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,V=E.length;J<V;J++){const Y=E[J],q=Y.shadow;if(q===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const te=q.getFrameExtents();n.multiply(te),a.copy(q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/te.x),n.x=a.x*te.x,q.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/te.y),n.y=a.y*te.y,q.mapSize.y=a.y));const oe=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=oe,q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Hn){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Vt(n.x,n.y,{format:Si,type:Zt,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new cn(n.x,n.y,sr),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=Yr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Rt,q.map.depthTexture.magFilter=Rt}else Y.isPointLight?(q.map=new Nh(n.x),q.map.depthTexture=new vf(n.x,Cr)):(q.map=new Vt(n.x,n.y),q.map.depthTexture=new cn(n.x,n.y,Cr)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=Yr,this.type===ja?(q.map.depthTexture.compareFunction=oe?Ol:Ul,q.map.depthTexture.minFilter=Ct,q.map.depthTexture.magFilter=Ct):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Rt,q.map.depthTexture.magFilter=Rt);q.camera.updateProjectionMatrix()}const L=q.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<L;z++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,z),i.clear();else{z===0&&(i.setRenderTarget(q.map),i.clear());const ae=q.getViewport(z);s.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),B.viewport(s)}if(Y.isPointLight){const ae=q.camera,we=q.matrix,Ce=Y.distance||ae.far;Ce!==ae.far&&(ae.far=Ce,ae.updateProjectionMatrix()),Bn.setFromMatrixPosition(Y.matrixWorld),ae.position.copy(Bn),ao.copy(ae.position),ao.add(k0[z]),ae.up.copy(H0[z]),ae.lookAt(ao),ae.updateMatrixWorld(),we.makeTranslation(-Bn.x,-Bn.y,-Bn.z),gu.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),q._frustum.setFromProjectionMatrix(gu,ae.coordinateSystem,ae.reversedDepth)}else q.updateMatrices(Y);r=q.getFrustum(),b(R,x,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&M(q,x),q.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(S,N,P)};function M(E,R){const x=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vt(n.x,n.y,{format:Si,type:Zt})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,x,f,v,null)}function A(E,R,x,S){let N=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)N=P;else if(N=x.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=N.uuid,Q=R.uuid;let J=l[B];J===void 0&&(J={},l[B]=J);let V=J[Q];V===void 0&&(V=N.clone(),J[Q]=V,R.addEventListener("dispose",T)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,S===Hn?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=i.properties.get(N);B.light=x}return N}function b(E,R,x,S,N){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Hn)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const B=e.update(E),Q=E.material;if(Array.isArray(Q)){const J=B.groups;for(let V=0,Y=J.length;V<Y;V++){const q=J[V],te=Q[q.materialIndex];if(te&&te.visible){const oe=A(E,te,S,N);E.onBeforeShadow(i,E,R,x,B,oe,q),i.renderBufferDirect(x,null,B,oe,E,q),E.onAfterShadow(i,E,R,x,B,oe,q)}}}else if(Q.visible){const J=A(E,Q,S,N);E.onBeforeShadow(i,E,R,x,B,J,null),i.renderBufferDirect(x,null,B,J,E,null),E.onAfterShadow(i,E,R,x,B,J,null)}}const P=E.children;for(let B=0,Q=P.length;B<Q;B++)b(P[B],R,x,S,N)}function T(E){E.target.removeEventListener("dispose",T);for(const R in l){const x=l[R],S=E.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function V0(i,e){function t(){let I=!1;const Z=new ut;let le=null;const xe=new ut(0,0,0,0);return{setMask:function(ge){le!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),le=ge)},setLocked:function(ge){I=ge},setClear:function(ge,ne,Pe,be,Nt){Nt===!0&&(ge*=be,ne*=be,Pe*=be),Z.set(ge,ne,Pe,be),xe.equals(Z)===!1&&(i.clearColor(ge,ne,Pe,be),xe.copy(Z))},reset:function(){I=!1,le=null,xe.set(-1,0,0,0)}}}function r(){let I=!1,Z=!1,le=null,xe=null,ge=null;return{setReversed:function(ne){if(Z!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Z=ne;const be=ge;ge=null,this.setClear(be)}},getReversed:function(){return Z},setTest:function(ne){ne?ie(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ne){le!==ne&&!I&&(i.depthMask(ne),le=ne)},setFunc:function(ne){if(Z&&(ne=Mp[ne]),xe!==ne){switch(ne){case yo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case an:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ne}},setLocked:function(ne){I=ne},setClear:function(ne){ge!==ne&&(ge=ne,Z&&(ne=1-ne),i.clearDepth(ne))},reset:function(){I=!1,le=null,xe=null,ge=null,Z=!1}}}function n(){let I=!1,Z=null,le=null,xe=null,ge=null,ne=null,Pe=null,be=null,Nt=null;return{setTest:function(rt){I||(rt?ie(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(rt){Z!==rt&&!I&&(i.stencilMask(rt),Z=rt)},setFunc:function(rt,Wt,Xt){(le!==rt||xe!==Wt||ge!==Xt)&&(i.stencilFunc(rt,Wt,Xt),le=rt,xe=Wt,ge=Xt)},setOp:function(rt,Wt,Xt){(ne!==rt||Pe!==Wt||be!==Xt)&&(i.stencilOp(rt,Wt,Xt),ne=rt,Pe=Wt,be=Xt)},setLocked:function(rt){I=rt},setClear:function(rt){Nt!==rt&&(i.clearStencil(rt),Nt=rt)},reset:function(){I=!1,Z=null,le=null,xe=null,ge=null,ne=null,Pe=null,be=null,Nt=null}}}const a=new t,s=new r,o=new n,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,A=null,b=null,T=null,E=null,R=null,x=new Ee(0,0,0),S=0,N=!1,P=null,B=null,Q=null,J=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(oe)[1]),q=te>=1):oe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),q=te>=2);let L=null,z={};const ae=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ce=new ut().fromArray(ae),Ue=new ut().fromArray(we);function K(I,Z,le,xe){const ge=new Uint8Array(4),ne=i.createTexture();i.bindTexture(I,ne),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<le;Pe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(Z+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ne}const re={};re[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),s.setFunc(an),Et(!1),ct(Zl),ie(i.CULL_FACE),Xe(Ar);function ie(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function De(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Oe(I,Z){return d[I]!==Z?(i.bindFramebuffer(I,Z),d[I]=Z,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function ye(I,Z){let le=m,xe=!1;if(I){le=f.get(Z),le===void 0&&(le=[],f.set(Z,le));const ge=I.textures;if(le.length!==ge.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Pe=ge.length;ne<Pe;ne++)le[ne]=i.COLOR_ATTACHMENT0+ne;le.length=ge.length,xe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,xe=!0);xe&&i.drawBuffers(le)}function et(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const Ge={[_i]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Wd]:i.FUNC_REVERSE_SUBTRACT};Ge[Xd]=i.MIN,Ge[jd]=i.MAX;const Be={[Yd]:i.ZERO,[qd]:i.ONE,[$d]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Qd]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[Kd]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Jd]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,Z,le,xe,ge,ne,Pe,be,Nt,rt){if(I===Ar){p===!0&&(De(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),I!==Vd){if(I!==g||rt!==N){if((M!==_i||T!==_i)&&(i.blendEquation(i.FUNC_ADD),M=_i,T=_i),rt)switch(I){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",I);break}A=null,b=null,E=null,R=null,x.set(0,0,0),S=0,g=I,N=rt}return}ge=ge||Z,ne=ne||le,Pe=Pe||xe,(Z!==M||ge!==T)&&(i.blendEquationSeparate(Ge[Z],Ge[ge]),M=Z,T=ge),(le!==A||xe!==b||ne!==E||Pe!==R)&&(i.blendFuncSeparate(Be[le],Be[xe],Be[ne],Be[Pe]),A=le,b=xe,E=ne,R=Pe),(be.equals(x)===!1||Nt!==S)&&(i.blendColor(be.r,be.g,be.b,Nt),x.copy(be),S=Nt),g=I,N=!1}function ht(I,Z){I.side===nr?De(i.CULL_FACE):ie(i.CULL_FACE);let le=I.side===Gt;Z&&(le=!le),Et(le),I.blending===Qi&&I.transparent===!1?Xe(Ar):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);const xe=I.stencilWrite;o.setTest(xe),xe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function ct(I){I!==kd?(ie(i.CULL_FACE),I!==B&&(I===Zl?i.cullFace(i.BACK):I===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),B=I}function _t(I){I!==Q&&(q&&i.lineWidth(I),Q=I)}function qe(I,Z,le){I?(ie(i.POLYGON_OFFSET_FILL),(J!==Z||V!==le)&&(J=Z,V=le,s.getReversed()&&(Z=-Z),i.polygonOffset(Z,le))):De(i.POLYGON_OFFSET_FILL)}function pt(I){I?ie(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function gt(I){I===void 0&&(I=i.TEXTURE0+Y-1),L!==I&&(i.activeTexture(I),L=I)}function U(I,Z,le){le===void 0&&(L===null?le=i.TEXTURE0+Y-1:le=L);let xe=z[le];xe===void 0&&(xe={type:void 0,texture:void 0},z[le]=xe),(xe.type!==I||xe.texture!==Z)&&(L!==le&&(i.activeTexture(le),L=le),i.bindTexture(I,Z||re[I]),xe.type=I,xe.texture=Z)}function bt(){const I=z[L];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function _(){try{i.texSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function k(){try{i.texSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function pe(){try{i.texStorage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function O(){try{i.texImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function he(){try{i.texImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function de(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function Te(I,Z){h[I]!==Z&&(i.pixelStorei(I,Z),h[I]=Z)}function se(I){Ce.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ce.copy(I))}function ke(I){Ue.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ue.copy(I))}function Ne(I,Z){let le=l.get(Z);le===void 0&&(le=new WeakMap,l.set(Z,le));let xe=le.get(I);xe===void 0&&(xe=i.getUniformBlockIndex(Z,I.name),le.set(I,xe))}function He(I,Z){const le=l.get(Z).get(I);c.get(Z)!==le&&(i.uniformBlockBinding(Z,le,I.__bindingPointIndex),c.set(Z,le))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},L=null,z={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,A=null,b=null,T=null,E=null,R=null,x=new Ee(0,0,0),S=0,N=!1,P=null,B=null,Q=null,J=null,V=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:De,bindFramebuffer:Oe,drawBuffers:ye,useProgram:et,setBlending:Xe,setMaterial:ht,setFlipSided:Et,setCullFace:ct,setLineWidth:_t,setPolygonOffset:qe,setScissorTest:pt,activeTexture:gt,bindTexture:U,unbindTexture:bt,compressedTexImage2D:$e,compressedTexImage3D:w,texImage2D:O,texImage3D:he,pixelStorei:Te,getParameter:de,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:ce,texStorage3D:pe,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:se,viewport:ke,reset:Ae}}function G0(i,e,t,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return m?new OffscreenCanvas(w,_):Zn("canvas")}function p(w,_,k){let W=1;const $=$e(w);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor(W*$.width),pe=Math.floor(W*$.height);d===void 0&&(d=v(ce,pe));const O=_?v(ce,pe):d;return O.width=ce,O.height=pe,O.getContext("2d").drawImage(w,0,0,ce,pe),Le("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+pe+")."),O}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function g(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,_,k,W,$,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;W&&(pe=e.get("EXT_texture_norm16"),pe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=_;if(_===i.RED&&(k===i.FLOAT&&(O=i.R32F),k===i.HALF_FLOAT&&(O=i.R16F),k===i.UNSIGNED_BYTE&&(O=i.R8),k===i.UNSIGNED_SHORT&&pe&&(O=pe.R16_EXT),k===i.SHORT&&pe&&(O=pe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.R8UI),k===i.UNSIGNED_SHORT&&(O=i.R16UI),k===i.UNSIGNED_INT&&(O=i.R32UI),k===i.BYTE&&(O=i.R8I),k===i.SHORT&&(O=i.R16I),k===i.INT&&(O=i.R32I)),_===i.RG&&(k===i.FLOAT&&(O=i.RG32F),k===i.HALF_FLOAT&&(O=i.RG16F),k===i.UNSIGNED_BYTE&&(O=i.RG8),k===i.UNSIGNED_SHORT&&pe&&(O=pe.RG16_EXT),k===i.SHORT&&pe&&(O=pe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RG8UI),k===i.UNSIGNED_SHORT&&(O=i.RG16UI),k===i.UNSIGNED_INT&&(O=i.RG32UI),k===i.BYTE&&(O=i.RG8I),k===i.SHORT&&(O=i.RG16I),k===i.INT&&(O=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RGB8UI),k===i.UNSIGNED_SHORT&&(O=i.RGB16UI),k===i.UNSIGNED_INT&&(O=i.RGB32UI),k===i.BYTE&&(O=i.RGB8I),k===i.SHORT&&(O=i.RGB16I),k===i.INT&&(O=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),k===i.UNSIGNED_INT&&(O=i.RGBA32UI),k===i.BYTE&&(O=i.RGBA8I),k===i.SHORT&&(O=i.RGBA16I),k===i.INT&&(O=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&pe&&(O=pe.RGB16_EXT),k===i.SHORT&&pe&&(O=pe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),_===i.RGBA){const he=ce?ns:Ke.getTransfer($);k===i.FLOAT&&(O=i.RGBA32F),k===i.HALF_FLOAT&&(O=i.RGBA16F),k===i.UNSIGNED_BYTE&&(O=he===nt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pe&&(O=pe.RGBA16_EXT),k===i.SHORT&&pe&&(O=pe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function T(w,_){let k;return w?_===null||_===Cr||_===Yn?k=i.DEPTH24_STENCIL8:_===sr?k=i.DEPTH32F_STENCIL8:_===jn&&(k=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cr||_===Yn?k=i.DEPTH_COMPONENT24:_===sr?k=i.DEPTH_COMPONENT32F:_===jn&&(k=i.DEPTH_COMPONENT16),k}function E(w,_){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){const _=w.target;_.removeEventListener("dispose",R),S(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function x(w){const _=w.target;_.removeEventListener("dispose",x),P(_)}function S(w){const _=r.get(w);if(_.__webglInit===void 0)return;const k=w.source,W=f.get(k);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(w),Object.keys(W).length===0&&f.delete(k)}r.remove(w)}function N(w){const _=r.get(w);i.deleteTexture(_.__webglTexture);const k=w.source,W=f.get(k);delete W[_.__cacheKey],s.memory.textures--}function P(w){const _=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[W][$]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=w.textures;for(let W=0,$=k.length;W<$;W++){const ce=r.get(k[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(k[W])}r.remove(w)}let B=0;function Q(){B=0}function J(){return B}function V(w){B=w}function Y(){const w=B;return w>=n.maxTextures&&Le("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),B+=1,w}function q(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function te(w,_){const k=r.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const W=w.image;if(W===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,w,_);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function oe(w,_){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){De(k,w,_);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function L(w,_){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){De(k,w,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function z(w,_){const k=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){Oe(k,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const ae={[on]:i.REPEAT,[Er]:i.CLAMP_TO_EDGE,[ts]:i.MIRRORED_REPEAT},we={[Rt]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[zn]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[Wr]:i.LINEAR_MIPMAP_LINEAR},Ce={[pp]:i.NEVER,[_p]:i.ALWAYS,[fp]:i.LESS,[Ul]:i.LEQUAL,[mp]:i.EQUAL,[Ol]:i.GEQUAL,[gp]:i.GREATER,[vp]:i.NOTEQUAL};function Ue(w,_){if(_.type===sr&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===Ya||_.magFilter===zn||_.magFilter===Wr||_.minFilter===Ct||_.minFilter===Ya||_.minFilter===zn||_.minFilter===Wr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ae[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ae[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ae[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Rt||_.minFilter!==zn&&_.minFilter!==Wr||_.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function K(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));const W=_.source;let $=f.get(W);$===void 0&&($={},f.set(W,$));const ce=q(_);if(ce!==w.__cacheKey){$[ce]===void 0&&($[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),$[ce].usedTimes++;const pe=$[w.__cacheKey];pe!==void 0&&($[w.__cacheKey].usedTimes--,pe.usedTimes===0&&N(_)),w.__cacheKey=ce,w.__webglTexture=$[ce].texture}return k}function re(w,_,k){return Math.floor(Math.floor(w/k)/_)}function ie(w,_,k,W){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,W,_.data);else{$.sort((de,Te)=>de.start-Te.start);let ce=0;for(let de=1;de<$.length;de++){const Te=$[ce],se=$[de],ke=Te.start+Te.count,Ne=re(se.start,_.width,4),He=re(Te.start,_.width,4);se.start<=ke+1&&Ne===He&&re(se.start+se.count-1,_.width,4)===Ne?Te.count=Math.max(Te.count,se.start+se.count-Te.start):(++ce,$[ce]=se)}$.length=ce+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),O=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let de=0,Te=$.length;de<Te;de++){const se=$[de],ke=Math.floor(se.start/4),Ne=Math.ceil(se.count/4),He=ke%_.width,Ae=Math.floor(ke/_.width),I=Ne;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,He,Ae,I,1,k,W,_.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,O),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function De(w,_,k){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);const $=K(w,_),ce=_.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+k);const pe=r.get(ce);if(ce.version!==pe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){const Z=Ke.getPrimaries(Ke.workingColorSpace),le=_.colorSpace===li?null:Ke.getPrimaries(_.colorSpace),xe=_.colorSpace===li||Z===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let O=p(_.image,!1,n.maxTextureSize);O=bt(_,O);const he=a.convert(_.format,_.colorSpace),de=a.convert(_.type);let Te=b(_.internalFormat,he,de,_.normalized,_.colorSpace,_.isVideoTexture);Ue(W,_);let se;const ke=_.mipmaps,Ne=_.isVideoTexture!==!0,He=pe.__version===void 0||$===!0,Ae=ce.dataReady,I=E(_,O);if(_.isDepthTexture)Te=T(_.format===yi,_.type),He&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Te,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,Te,O.width,O.height,0,he,de,null));else if(_.isDataTexture)if(ke.length>0){Ne&&He&&t.texStorage2D(i.TEXTURE_2D,I,Te,ke[0].width,ke[0].height);for(let Z=0,le=ke.length;Z<le;Z++)se=ke[Z],Ne?Ae&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,he,de,se.data):t.texImage2D(i.TEXTURE_2D,Z,Te,se.width,se.height,0,he,de,se.data);_.generateMipmaps=!1}else Ne?(He&&t.texStorage2D(i.TEXTURE_2D,I,Te,O.width,O.height),Ae&&ie(_,O,he,de)):t.texImage2D(i.TEXTURE_2D,0,Te,O.width,O.height,0,he,de,O.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,Te,ke[0].width,ke[0].height,O.depth);for(let Z=0,le=ke.length;Z<le;Z++)if(se=ke[Z],_.format!==or)if(he!==null)if(Ne){if(Ae)if(_.layerUpdates.size>0){const xe=Yc(se.width,se.height,_.format,_.type);for(const ge of _.layerUpdates){const ne=se.data.subarray(ge*xe/se.data.BYTES_PER_ELEMENT,(ge+1)*xe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ge,se.width,se.height,1,he,ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,O.depth,he,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Te,se.width,se.height,O.depth,0,se.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,O.depth,he,de,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Te,se.width,se.height,O.depth,0,he,de,se.data)}else{Ne&&He&&t.texStorage2D(i.TEXTURE_2D,I,Te,ke[0].width,ke[0].height);for(let Z=0,le=ke.length;Z<le;Z++)se=ke[Z],_.format!==or?he!==null?Ne?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,he,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Te,se.width,se.height,0,se.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Ae&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,he,de,se.data):t.texImage2D(i.TEXTURE_2D,Z,Te,se.width,se.height,0,he,de,se.data)}else if(_.isDataArrayTexture)if(Ne){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,Te,O.width,O.height,O.depth),Ae)if(_.layerUpdates.size>0){const Z=Yc(O.width,O.height,_.format,_.type);for(const le of _.layerUpdates){const xe=O.data.subarray(le*Z/O.data.BYTES_PER_ELEMENT,(le+1)*Z/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,O.width,O.height,1,he,de,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,he,de,O.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,O.width,O.height,O.depth,0,he,de,O.data);else if(_.isData3DTexture)Ne?(He&&t.texStorage3D(i.TEXTURE_3D,I,Te,O.width,O.height,O.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,he,de,O.data)):t.texImage3D(i.TEXTURE_3D,0,Te,O.width,O.height,O.depth,0,he,de,O.data);else if(_.isFramebufferTexture){if(He)if(Ne)t.texStorage2D(i.TEXTURE_2D,I,Te,O.width,O.height);else{let Z=O.width,le=O.height;for(let xe=0;xe<I;xe++)t.texImage2D(i.TEXTURE_2D,xe,Te,Z,le,0,he,de,null),Z>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),O.parentNode!==Z){Z.appendChild(O),h.add(_),Z.onpaint=le=>{const xe=le.changedElements;for(const ge of h)xe.includes(ge.image)&&(ge.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,O);else{const le=i.RGBA,xe=i.RGBA,ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,xe,ge,O)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ne&&He){const Z=$e(ke[0]);t.texStorage2D(i.TEXTURE_2D,I,Te,Z.width,Z.height)}for(let Z=0,le=ke.length;Z<le;Z++)se=ke[Z],Ne?Ae&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,he,de,se):t.texImage2D(i.TEXTURE_2D,Z,Te,he,de,se);_.generateMipmaps=!1}else if(Ne){if(He){const Z=$e(O);t.texStorage2D(i.TEXTURE_2D,I,Te,Z.width,Z.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,de,O)}else t.texImage2D(i.TEXTURE_2D,0,Te,he,de,O);g(_)&&M(W),pe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Oe(w,_,k){if(_.image.length!==6)return;const W=K(w,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const ce=r.get($);if($.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const pe=Ke.getPrimaries(Ke.workingColorSpace),O=_.colorSpace===li?null:Ke.getPrimaries(_.colorSpace),he=_.colorSpace===li||pe===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,se=[];for(let ne=0;ne<6;ne++)!de&&!Te?se[ne]=p(_.image[ne],!0,n.maxCubemapSize):se[ne]=Te?_.image[ne].image:_.image[ne],se[ne]=bt(_,se[ne]);const ke=se[0],Ne=a.convert(_.format,_.colorSpace),He=a.convert(_.type),Ae=b(_.internalFormat,Ne,He,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,Z=ce.__version===void 0||W===!0,le=$.dataReady;let xe=E(_,ke);Ue(i.TEXTURE_CUBE_MAP,_);let ge;if(de){I&&Z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ae,ke.width,ke.height);for(let ne=0;ne<6;ne++){ge=se[ne].mipmaps;for(let Pe=0;Pe<ge.length;Pe++){const be=ge[Pe];_.format!==or?Ne!==null?I?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,be.width,be.height,Ne,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Ae,be.width,be.height,0,be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,be.width,be.height,Ne,He,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Ae,be.width,be.height,0,Ne,He,be.data)}}}else{if(ge=_.mipmaps,I&&Z){ge.length>0&&xe++;const ne=$e(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ae,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,se[ne].width,se[ne].height,Ne,He,se[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ae,se[ne].width,se[ne].height,0,Ne,He,se[ne].data);for(let Pe=0;Pe<ge.length;Pe++){const be=ge[Pe].image[ne].image;I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,be.width,be.height,Ne,He,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Ae,be.width,be.height,0,Ne,He,be.data)}}else{I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,He,se[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ae,Ne,He,se[ne]);for(let Pe=0;Pe<ge.length;Pe++){const be=ge[Pe];I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ne,He,be.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Ae,Ne,He,be.image[ne])}}}g(_)&&M(i.TEXTURE_CUBE_MAP),ce.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ye(w,_,k,W,$,ce){const pe=a.convert(k.format,k.colorSpace),O=a.convert(k.type),he=b(k.internalFormat,pe,O,k.normalized,k.colorSpace),de=r.get(_),Te=r.get(k);if(Te.__renderTarget=_,!de.__hasExternalTextures){const se=Math.max(1,_.width>>ce),ke=Math.max(1,_.height>>ce);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ce,he,se,ke,_.depth,0,pe,O,null):t.texImage2D($,ce,he,se,ke,0,pe,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Te.__webglTexture,0,pt(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Te.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,ce=T(_.stencilBuffer,$),pe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(_),ce,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,w)}else{const W=_.textures;for(let $=0;$<W.length;$++){const ce=W[$],pe=a.convert(ce.format,ce.colorSpace),O=a.convert(ce.type),he=b(ce.internalFormat,pe,O,ce.normalized,ce.colorSpace);gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(_),he,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(_),he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(w,_,k){const W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=r.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_.depthTexture);const de=a.convert(_.depthTexture.format),Te=a.convert(_.depthTexture.type);let se;_.depthTexture.format===Yr?se=i.DEPTH_COMPONENT24:_.depthTexture.format===yi&&(se=i.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,se,_.width,_.height,0,de,Te,null)}}else te(_.depthTexture,0);const ce=$.__webglTexture,pe=pt(_),O=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,he=_.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yr)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,O,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,he,O,ce,0);else if(_.depthTexture.format===yi)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,O,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,he,O,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(w){const _=r.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ge(_.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?Ge(_.__webglFramebuffer[0],w,0):Ge(_.__webglFramebuffer,w,0)}else if(k){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),et(_.__webglDepthbuffer[W],w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),et(_.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(w,_,k){const W=r.get(w);_!==void 0&&ye(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Be(w)}function ht(w){const _=w.texture,k=r.get(w),W=r.get(_);w.addEventListener("dispose",x);const $=w.textures,ce=w.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,s.memory.textures++),ce){k.__webglFramebuffer=[];for(let O=0;O<6;O++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[O]=[];for(let he=0;he<_.mipmaps.length;he++)k.__webglFramebuffer[O][he]=i.createFramebuffer()}else k.__webglFramebuffer[O]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let O=0;O<_.mipmaps.length;O++)k.__webglFramebuffer[O]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pe)for(let O=0,he=$.length;O<he;O++){const de=r.get($[O]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&gt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let O=0;O<$.length;O++){const he=$[O];k.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[O]);const de=a.convert(he.format,he.colorSpace),Te=a.convert(he.type),se=b(he.internalFormat,de,Te,he.normalized,he.colorSpace,w.isXRRenderTarget===!0),ke=pt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,k.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),et(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let O=0;O<6;O++)if(_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ye(k.__webglFramebuffer[O][he],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,he);else ye(k.__webglFramebuffer[O],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);g(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let O=0,he=$.length;O<he;O++){const de=$[O],Te=r.get(de);let se=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Te.__webglTexture),Ue(se,de),ye(k.__webglFramebuffer,w,de,i.COLOR_ATTACHMENT0+O,se,0),g(de)&&M(se)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,W.__webglTexture),Ue(O,_),_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ye(k.__webglFramebuffer[he],w,_,i.COLOR_ATTACHMENT0,O,he);else ye(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,O,0);g(_)&&M(O),t.unbindTexture()}w.depthBuffer&&Be(w)}function Et(w){const _=w.textures;for(let k=0,W=_.length;k<W;k++){const $=_[k];if(g($)){const ce=A(w),pe=r.get($).__webglTexture;t.bindTexture(ce,pe),M(ce),t.unbindTexture()}}}const ct=[],_t=[];function qe(w){if(w.samples>0){if(gt(w)===!1){const _=w.textures,k=w.width,W=w.height;let $=i.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=r.get(w),O=_.length>1;if(O)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const he=w.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const Te=r.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,$,i.NEAREST),c===!0&&(ct.length=0,_t.length=0,ct.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ct.push(ce),_t.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const Te=r.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function pt(w){return Math.min(n.maxSamples,w.samples)}function gt(w){const _=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(w){const _=s.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function bt(w,_){const k=w.colorSpace,W=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Qt&&k!==li&&(Ke.getTransfer(k)===nt?(W!==or||$!==Kt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",k)),_}function $e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.getTextureUnits=J,this.setTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=oe,this.setTexture3D=L,this.setTextureCube=z,this.rebindTextures=Xe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function W0(i,e){function t(r,n=li){let a;const s=Ke.getTransfer(n);if(r===Kt)return i.UNSIGNED_BYTE;if(r===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===ah)return i.BYTE;if(r===sh)return i.SHORT;if(r===jn)return i.UNSIGNED_SHORT;if(r===Rl)return i.INT;if(r===Cr)return i.UNSIGNED_INT;if(r===sr)return i.FLOAT;if(r===Zt)return i.HALF_FLOAT;if(r===ch)return i.ALPHA;if(r===uh)return i.RGB;if(r===or)return i.RGBA;if(r===Yr)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===Ll)return i.RED;if(r===Nl)return i.RED_INTEGER;if(r===Si)return i.RG;if(r===Il)return i.RG_INTEGER;if(r===Dl)return i.RGBA_INTEGER;if(r===qa||r===$a||r===Ka||r===Za)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ao||r===Ro||r===Co||r===Po)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lo||r===No||r===Io||r===Do||r===Uo||r===rs||r===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lo||r===No)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Io)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Do)return a.COMPRESSED_R11_EAC;if(r===Uo)return a.COMPRESSED_SIGNED_R11_EAC;if(r===rs)return a.COMPRESSED_RG11_EAC;if(r===Oo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fo||r===Bo||r===ko||r===Ho||r===zo||r===Vo||r===Go||r===Wo||r===Xo||r===jo||r===Yo||r===qo||r===$o||r===Ko)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ko)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ho)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Go)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qo)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$o)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ko)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zo||r===Jo||r===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zo)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===el||r===tl||r===is||r===rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===el)return a.COMPRESSED_RED_RGTC1_EXT;if(r===tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===is)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yn?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new dt({vertexShader:X0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new dn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends Mi{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new Y0,g={},M=t.getContextAttributes();let A=null,b=null;const T=[],E=[],R=new Ie;let x=null;const S=new zt;S.viewport=new ut;const N=new zt;N.viewport=new ut;const P=[S,N],B=new jf;let Q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=T[K];return re===void 0&&(re=new Ls,T[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=T[K];return re===void 0&&(re=new Ls,T[K]=re),re.getGripSpace()},this.getHand=function(K){let re=T[K];return re===void 0&&(re=new Ls,T[K]=re),re.getHandSpace()};function V(K){const re=E.indexOf(K.inputSource);if(re===-1)return;const ie=T[re];ie!==void 0&&(ie.update(K.inputSource,K.frame,l||s),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",q);for(let K=0;K<T.length;K++){const re=E[K];re!==null&&(E[K]=null,T[K].disconnect(re))}Q=null,J=null,p.reset();for(const K in g)delete g[K];e.setRenderTarget(A),f=null,d=null,h=null,n=null,b=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,r.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,r.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ie=null,De=null;M.depth&&(De=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?yi:Yr,ie=M.stencil?Yn:Cr);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Oe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Vt(d.textureWidth,d.textureHeight,{format:or,type:Kt,depthTexture:new cn(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,re),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Vt(f.framebufferWidth,f.framebufferHeight,{format:or,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),Ue.setContext(n),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(K){for(let re=0;re<K.removed.length;re++){const ie=K.removed[re],De=E.indexOf(ie);De>=0&&(E[De]=null,T[De].disconnect(ie))}for(let re=0;re<K.added.length;re++){const ie=K.added[re];let De=E.indexOf(ie);if(De===-1){for(let ye=0;ye<T.length;ye++)if(ye>=E.length){E.push(ie),De=ye;break}else if(E[ye]===null){E[ye]=ie,De=ye;break}if(De===-1)break}const Oe=T[De];Oe&&Oe.connect(ie)}}const te=new D,oe=new D;function L(K,re,ie){te.setFromMatrixPosition(re.matrixWorld),oe.setFromMatrixPosition(ie.matrixWorld);const De=te.distanceTo(oe),Oe=re.projectionMatrix.elements,ye=ie.projectionMatrix.elements,et=Oe[14]/(Oe[10]-1),Ge=Oe[14]/(Oe[10]+1),Be=(Oe[9]+1)/Oe[5],Xe=(Oe[9]-1)/Oe[5],ht=(Oe[8]-1)/Oe[0],Et=(ye[8]+1)/ye[0],ct=et*ht,_t=et*Et,qe=De/(-ht+Et),pt=qe*-ht;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Oe[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const gt=et+qe,U=Ge+qe,bt=ct-pt,$e=_t+(De-pt),w=Be*Ge/U*gt,_=Xe*Ge/U*gt;K.projectionMatrix.makePerspective(bt,$e,w,_,gt,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function z(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let re=K.near,ie=K.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),B.near=N.near=S.near=re,B.far=N.far=S.far=ie,(Q!==B.near||J!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,J=B.far),B.layers.mask=K.layers.mask|6,S.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const De=K.parent,Oe=B.cameras;z(B,De);for(let ye=0;ye<Oe.length;ye++)z(Oe[ye],De);Oe.length===2?L(B,S,N):B.projectionMatrix.copy(S.projectionMatrix),ae(K,B,De)};function ae(K,re,ie){ie===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ln*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(K){return g[K]};let we=null;function Ce(K,re){if(u=re.getViewerPose(l||s),m=re,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let De=!1;ie.length!==B.cameras.length&&(B.cameras.length=0,De=!0);for(let ye=0;ye<ie.length;ye++){const et=ie[ye];let Ge=null;if(f!==null)Ge=f.getViewport(et);else{const Xe=h.getViewSubImage(d,et);Ge=Xe.viewport,ye===0&&(e.setRenderTargetTextures(b,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(b))}let Be=P[ye];Be===void 0&&(Be=new zt,Be.layers.enable(ye),Be.viewport=new ut,P[ye]=Be),Be.matrix.fromArray(et.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(et.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ye===0&&(B.matrix.copy(Be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),De===!0&&B.cameras.push(Be)}const Oe=n.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){h=r.getBinding();const ye=h.getDepthInformation(ie[0]);ye&&ye.isValid&&ye.texture&&p.init(ye,n.renderState)}if(Oe&&Oe.includes("camera-access")&&v){e.state.unbindTexture(),h=r.getBinding();for(let ye=0;ye<ie.length;ye++){const et=ie[ye].camera;if(et){let Ge=g[et];Ge||(Ge=new Mh,g[et]=Ge);const Be=h.getCameraImage(et);Ge.sourceTexture=Be}}}}for(let ie=0;ie<T.length;ie++){const De=E[ie],Oe=T[ie];De!==null&&Oe!==void 0&&Oe.update(De,re,l||s)}we&&we(K,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),m=null}const Ue=new Ph;Ue.setAnimationLoop(Ce),this.setAnimationLoop=function(K){we=K},this.dispose=function(){}}}const $0=new Ve,Fh=new ze;Fh.set(-1,0,0,0,1,0,0,0,1);function K0(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function r(p,g){g.color.getRGB(p.fogColor.value,Th(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,M,A,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(p,g):g.isMeshLambertMaterial?(a(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(p,g),h(p,g)):g.isMeshPhongMaterial?(a(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(a(p,g),m(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),v(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,M,A):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Gt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Gt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=e.get(g),A=M.envMap,b=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Fh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,M,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Z0(i,e,t,r){let n={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const E=T.program;r.uniformBlockBinding(b,E)}function l(b,T){let E=n[b.id];E===void 0&&(p(b),E=u(b),n[b.id]=E,b.addEventListener("dispose",M));const R=T.program;r.updateUBOMapping(b,R);const x=e.render.frame;a[b.id]!==x&&(d(b),a[b.id]=x)}function u(b){const T=h();b.__bindingPointIndex=T;const E=i.createBuffer(),R=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function h(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=n[b.id],E=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,S=E.length;x<S;x++){const N=E[x];if(Array.isArray(N))for(let P=0,B=N.length;P<B;P++)f(N[P],x,P,R);else f(N,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,T,E,R){if(v(b,T,E,R)===!0){const x=b.__offset,S=b.value;if(Array.isArray(S)){let N=0;for(let P=0;P<S.length;P++){const B=S[P],Q=g(B);m(B,b.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function m(b,T,E){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,E)}function v(b,T,E,R){const x=b.value,S=T+"_"+E;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{const N=R[S];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function p(b){const T=b.uniforms;let E=0;const R=16;for(let S=0,N=T.length;S<N;S++){const P=Array.isArray(T[S])?T[S]:[T[S]];for(let B=0,Q=P.length;B<Q;B++){const J=P[B],V=Array.isArray(J.value)?J.value:[J.value];for(let Y=0,q=V.length;Y<q;Y++){const te=V[Y],oe=g(te),L=E%R,z=L%oe.boundary,ae=L+z;E+=z,ae!==0&&R-ae<oe.storage&&(E+=R-ae),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=oe.storage}}}const x=E%R;return x>0&&(E+=R-x),b.__size=E,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",b),T}function M(b){const T=b.target;T.removeEventListener("dispose",M);const E=s.indexOf(T.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(n[T.id]),delete n[T.id],delete a[T.id]}function A(){for(const b in n)i.deleteBuffer(n[b]);s=[],n={},a={}}return{bind:c,update:l,dispose:A}}const J0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sr=null;function Q0(){return Sr===null&&(Sr=new _s(J0,16,16,Si,Zt),Sr.name="DFG_LUT",Sr.minFilter=Ct,Sr.magFilter=Ct,Sr.wrapS=Er,Sr.wrapT=Er,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}class ex{constructor(e={}){const{canvas:t=bp(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kt}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=s;const v=f,p=new Set([Dl,Il,Nl]),g=new Set([Kt,Cr,jn,Yn,Cl,Pl]),M=new Uint32Array(4),A=new Int32Array(4),b=new D;let T=null,E=null;const R=[],x=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,B=null,Q=null,J=null,V=null;this._outputColorSpace=At;let Y=0,q=0,te=null,oe=-1,L=null;const z=new ut,ae=new ut;let we=null;const Ce=new Ee(0);let Ue=0,K=t.width,re=t.height,ie=1,De=null,Oe=null;const ye=new ut(0,0,K,re),et=new ut(0,0,K,re);let Ge=!1;const Be=new zl;let Xe=!1,ht=!1;const Et=new Ve,ct=new D,_t=new ut,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function gt(){return te===null?ie:1}let U=r;function bt(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),U===null){const F="webgl2";if(U=bt(F,y),U===null)throw bt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Fe("WebGLRenderer: "+y.message),y}let $e,w,_,k,W,$,ce,pe,O,he,de,Te,se,ke,Ne,He,Ae,I,Z,le,xe,ge,ne;function Pe(){$e=new Qv(U),$e.init(),xe=new W0(U,$e),w=new Xv(U,$e,e,xe),_=new V0(U,$e),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),Q=U.createFramebuffer(),J=U.createFramebuffer(),V=U.createFramebuffer(),k=new r_(U),W=new R0,$=new G0(U,$e,_,W,w,xe,k),ce=new Jv(N),pe=new sm(U),ge=new Gv(U,pe),O=new e_(U,pe,k,ge),he=new n_(U,O,pe,ge,k),I=new i_(U,w,$),Ne=new jv(W),de=new A0(N,ce,$e,w,ge,Ne),Te=new K0(N,W),se=new P0,ke=new O0($e),Ae=new Vv(N,ce,_,he,m,c),He=new z0(N,he,w),ne=new Z0(U,k,w,_),Z=new Wv(U,$e,k),le=new t_(U,$e,k),k.programs=de.programs,N.capabilities=w,N.extensions=$e,N.properties=W,N.renderLists=se,N.shadowMap=He,N.state=_,N.info=k}Pe(),v!==Kt&&(S=new s_(v,t.width,t.height,o,n,a));const be=new q0(N,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(K,re,!1))},this.getSize=function(y){return y.set(K,re)},this.setSize=function(y,F,X=!0){if(be.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,re=F,t.width=Math.floor(y*ie),t.height=Math.floor(F*ie),X===!0&&(t.style.width=y+"px",t.style.height=F+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(K*ie,re*ie).floor()},this.setDrawingBufferSize=function(y,F,X){K=y,re=F,ie=X,t.width=Math.floor(y*X),t.height=Math.floor(F*X),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===Kt){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,F,X,G){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,F,X,G),_.viewport(z.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,F,X,G){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,F,X,G),_.scissor(ae.copy(et).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(y){_.setScissorTest(Ge=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){Oe=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,X=!0){let G=0;if(y){let H=!1;if(te!==null){const ue=te.texture.format;H=p.has(ue)}if(H){const ue=te.texture.type,ve=g.has(ue),Me=Ae.getClearColor(),C=Ae.getClearAlpha(),j=Me.r,ee=Me.g,fe=Me.b;ve?(M[0]=j,M[1]=ee,M[2]=fe,M[3]=C,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=j,A[1]=ee,A[2]=fe,A[3]=C,U.clearBufferiv(U.COLOR,0,A))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),Ae.dispose(),se.dispose(),ke.dispose(),W.dispose(),ce.dispose(),he.dispose(),ge.dispose(),ne.dispose(),de.dispose(),be.dispose(),be.removeEventListener("sessionstart",yn),be.removeEventListener("sessionend",hr),dr.stop()};function Nt(y){y.preventDefault(),as("WebGLRenderer: Context Lost."),P=!0}function rt(){as("WebGLRenderer: Context Restored."),P=!1;const y=k.autoReset,F=He.enabled,X=He.autoUpdate,G=He.needsUpdate,H=He.type;Pe(),k.autoReset=y,He.enabled=F,He.autoUpdate=X,He.needsUpdate=G,He.type=H}function Wt(y){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Xt(y){const F=y.target;F.removeEventListener("dispose",Xt),Ss(F)}function Ss(y){Ir(y),W.remove(y)}function Ir(y){const F=W.get(y).programs;F!==void 0&&(F.forEach(function(X){de.releaseProgram(X)}),y.isShaderMaterial&&de.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,X,G,H,ue){F===null&&(F=qe);const ve=H.isMesh&&H.matrixWorld.determinantAffine()<0,Me=Ur(y,F,X,G,H);_.setMaterial(G,ve);let C=X.index,j=1;if(G.wireframe===!0){if(C=O.getWireframeAttribute(X),C===void 0)return;j=2}const ee=X.drawRange,fe=X.attributes.position;let me=ee.start*j,We=(ee.start+ee.count)*j;ue!==null&&(me=Math.max(me,ue.start*j),We=Math.min(We,(ue.start+ue.count)*j)),C!==null?(me=Math.max(me,0),We=Math.min(We,C.count)):fe!=null&&(me=Math.max(me,0),We=Math.min(We,fe.count));const Qe=We-me;if(Qe<0||Qe===1/0)return;ge.setup(H,G,Me,X,C);let Ye,at=Z;if(C!==null&&(Ye=pe.get(C),at=le,at.setIndex(Ye)),H.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*gt()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(H.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),_.setLineWidth(Re*gt()),H.isLineSegments?at.setMode(U.LINES):H.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else H.isPoints?at.setMode(U.POINTS):H.isSprite&&at.setMode(U.TRIANGLES);if(H.isBatchedMesh)if($e.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,Se=H._multiDrawCounts,wt=H._multiDrawCount,tr=C?pe.get(C).bytesPerElement:1,Ft=W.get(G).currentProgram.getUniforms();for(let jt=0;jt<wt;jt++)Ft.setValue(U,"_gl_DrawID",jt),at.render(Re[jt]/tr,Se[jt])}else if(H.isInstancedMesh)at.renderInstances(me,Qe,H.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,Re);at.renderInstances(me,Qe,Se)}else at.render(me,Qe)};function xn(y,F,X){y.transparent===!0&&y.side===nr&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,Kr(y,F,X),y.side=Rr,y.needsUpdate=!0,Kr(y,F,X),y.side=nr):Kr(y,F,X)}this.compile=function(y,F,X=null){X===null&&(X=y),E=ke.get(X),E.init(F),x.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];xn(Me,X,H),G.add(Me)}else xn(ue,X,H),G.add(ue)}),E=x.pop(),G},this.compileAsync=function(y,F,X=null){const G=this.compile(y,F,X);return new Promise(H=>{function ue(){if(G.forEach(function(ve){W.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){H(y);return}setTimeout(ue,10)}$e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ei=null;function Dr(y){Ei&&Ei(y)}function yn(){dr.stop()}function hr(){dr.start()}const dr=new Ph;dr.setAnimationLoop(Dr),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(y){Ei=y,be.setAnimationLoop(y),y===null?dr.stop():dr.start()},be.addEventListener("sessionstart",yn),be.addEventListener("sessionend",hr),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;B!==null&&B.renderStart(y,F);const X=be.enabled===!0&&be.isPresenting===!0,G=S!==null&&(te===null||X)&&S.begin(N,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,F,te),E=ke.get(y,x.length),E.init(F),E.state.textureUnits=$.getTextureUnits(),x.push(E),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(Et,wr,F.reversedDepth),ht=this.localClippingEnabled,Xe=Ne.init(this.clippingPlanes,ht),T=se.get(y,R.length),T.init(),R.push(T),be.enabled===!0&&be.isPresenting===!0){const ue=N.xr.getDepthSensingMesh();ue!==null&&wi(ue,F,-1/0,N.sortObjects)}wi(y,F,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(De,Oe,F.reversedDepth),pt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,pt&&Ae.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ne.beginShadows();const H=E.state.shadowsArray;if(He.render(H,y,F),Xe===!0&&Ne.endShadows(),(G&&S.hasRenderPass())===!1){const ue=T.opaque,ve=T.transmissive;if(E.setupLights(),F.isArrayCamera){const Me=F.cameras;if(ve.length>0)for(let C=0,j=Me.length;C<j;C++){const ee=Me[C];Sn(ue,ve,y,ee)}pt&&Ae.render(y);for(let C=0,j=Me.length;C<j;C++){const ee=Me[C];bn(T,y,ee,ee.viewport)}}else ve.length>0&&Sn(ue,ve,y,F),pt&&Ae.render(y),bn(T,y,F)}te!==null&&q===0&&($.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te)),G&&S.end(N),y.isScene===!0&&y.onAfterRender(N,y,F),ge.resetDefaultState(),oe=-1,L=null,x.pop(),x.length>0?(E=x[x.length-1],$.setTextureUnits(E.state.textureUnits),Xe===!0&&Ne.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,B!==null&&B.renderEnd()};function wi(y,F,X,G){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){G&&_t.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);const ue=he.update(y),ve=y.material;ve.visible&&T.push(y,ue,ve,X,_t.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const ue=he.update(y),ve=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_t.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),_t.copy(ue.boundingSphere.center)),_t.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(ve)){const Me=ue.groups;for(let C=0,j=Me.length;C<j;C++){const ee=Me[C],fe=ve[ee.materialIndex];fe&&fe.visible&&T.push(y,ue,fe,X,_t.z,ee)}}else ve.visible&&T.push(y,ue,ve,X,_t.z,null)}}const H=y.children;for(let ue=0,ve=H.length;ue<ve;ue++)wi(H[ue],F,X,G)}function bn(y,F,X,G){const{opaque:H,transmissive:ue,transparent:ve}=y;E.setupLightsView(X),Xe===!0&&Ne.setGlobalState(N.clippingPlanes,X),G&&_.viewport(z.copy(G)),H.length>0&&er(H,F,X),ue.length>0&&er(ue,F,X),ve.length>0&&er(ve,F,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Sn(y,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const fe=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Vt(1,1,{generateMipmaps:!0,type:fe?Zt:Kt,minFilter:Wr,samples:Math.max(4,w.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const H=E.state.transmissionRenderTarget[G.id],ue=G.viewport||z;H.setSize(ue.z*N.transmissionResolutionScale,ue.w*N.transmissionResolutionScale);const ve=N.getRenderTarget(),Me=N.getActiveCubeFace(),C=N.getActiveMipmapLevel();N.setRenderTarget(H),N.getClearColor(Ce),Ue=N.getClearAlpha(),Ue<1&&N.setClearColor(16777215,.5),N.clear(),pt&&Ae.render(X);const j=N.toneMapping;N.toneMapping=vr;const ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Xe===!0&&Ne.setGlobalState(N.clippingPlanes,G),er(y,X,G),$.updateMultisampleRenderTarget(H),$.updateRenderTargetMipmap(H),$e.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let me=0,We=F.length;me<We;me++){const Qe=F[me],{object:Ye,geometry:at,material:Re,group:Se}=Qe;if(Re.side===nr&&Ye.layers.test(G.layers)){const wt=Re.side;Re.side=Gt,Re.needsUpdate=!0,Ai(Ye,X,G,at,Re,Se),Re.side=wt,Re.needsUpdate=!0,fe=!0}}fe===!0&&($.updateMultisampleRenderTarget(H),$.updateRenderTargetMipmap(H))}N.setRenderTarget(ve,Me,C),N.setClearColor(Ce,Ue),ee!==void 0&&(G.viewport=ee),N.toneMapping=j}function er(y,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ue=y.length;H<ue;H++){const ve=y[H],{object:Me,geometry:C,group:j}=ve;let ee=ve.material;ee.allowOverride===!0&&G!==null&&(ee=G),Me.layers.test(X.layers)&&Ai(Me,F,X,C,ee,j)}}function Ai(y,F,X,G,H,ue){y.onBeforeRender(N,F,X,G,H,ue),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(N,F,X,G,y,ue),H.transparent===!0&&H.side===nr&&H.forceSinglePass===!1?(H.side=Gt,H.needsUpdate=!0,N.renderBufferDirect(X,F,G,H,y,ue),H.side=Rr,H.needsUpdate=!0,N.renderBufferDirect(X,F,G,H,y,ue),H.side=nr):N.renderBufferDirect(X,F,G,H,y,ue),y.onAfterRender(N,F,X,G,H,ue)}function Kr(y,F,X){F.isScene!==!0&&(F=qe);const G=W.get(y),H=E.state.lights,ue=E.state.shadowsArray,ve=H.state.version,Me=de.getParameters(y,H.state,ue,F,X,E.state.lightProbeGridArray),C=de.getProgramCacheKey(Me);let j=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=ce.get(y.envMap||G.environment,ee),G.envMapRotation=G.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,j===void 0&&(y.addEventListener("dispose",Xt),j=new Map,G.programs=j);let fe=j.get(C);if(fe!==void 0){if(G.currentProgram===fe&&G.lightsStateVersion===ve)return Mn(y,Me),fe}else Me.uniforms=de.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,Me),y.onBeforeCompile(Me,N),fe=de.acquireProgram(Me,C),j.set(C,fe),G.uniforms=Me.uniforms;const me=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(me.clippingPlanes=Ne.uniform),Mn(y,Me),G.needsLights=En(y),G.lightsStateVersion=ve,G.needsLights&&(me.ambientLightColor.value=H.state.ambient,me.lightProbe.value=H.state.probe,me.directionalLights.value=H.state.directional,me.directionalLightShadows.value=H.state.directionalShadow,me.spotLights.value=H.state.spot,me.spotLightShadows.value=H.state.spotShadow,me.rectAreaLights.value=H.state.rectArea,me.ltc_1.value=H.state.rectAreaLTC1,me.ltc_2.value=H.state.rectAreaLTC2,me.pointLights.value=H.state.point,me.pointLightShadows.value=H.state.pointShadow,me.hemisphereLights.value=H.state.hemi,me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,me.spotLightMatrix.value=H.state.spotLightMatrix,me.spotLightMap.value=H.state.spotLightMap,me.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=fe,G.uniformsList=null,fe}function sa(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Ja.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Mn(y,F){const X=W.get(y);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Ri(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=y.length;X<G;X++){const H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function Ur(y,F,X,G,H){F.isScene!==!0&&(F=qe),$.resetTextureUnits();const ue=F.fog,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Me=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ke.workingColorSpace,C=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,j=ce.get(G.envMap||ve,C),ee=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,fe=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),me=!!X.morphAttributes.position,We=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color;let Ye=vr;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ye=N.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=at!==void 0?at.length:0,Se=W.get(G),wt=E.state.lights;if(Xe===!0&&(ht===!0||y!==L)){const tt=y===L&&G.id===oe;Ne.setState(G,y,tt)}let tr=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==wt.state.version||Se.outputColorSpace!==Me||H.isBatchedMesh&&Se.batching===!1||!H.isBatchedMesh&&Se.batching===!0||H.isBatchedMesh&&Se.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Se.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||H.isSkinnedMesh&&Se.skinning===!1||!H.isSkinnedMesh&&Se.skinning===!0||H.isInstancedMesh&&Se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Se.instancingMorph===!1&&H.morphTexture!==null||Se.envMap!==j||G.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ne.numPlanes||Se.numIntersection!==Ne.numIntersection)||Se.vertexAlphas!==ee||Se.vertexTangents!==fe||Se.morphTargets!==me||Se.morphNormals!==We||Se.morphColors!==Qe||Se.toneMapping!==Ye||Se.morphTargetsCount!==Re||!!Se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tr=!0):(tr=!0,Se.__version=G.version);let Ft=Se.currentProgram;tr===!0&&(Ft=Kr(G,F,H),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Ft,Se));let jt=!1,Yt=!1,Or=!1;const it=Ft.getUniforms(),ft=Se.uniforms;if(_.useProgram(Ft.program)&&(jt=!0,Yt=!0,Or=!0),G.id!==oe&&(oe=G.id,Yt=!0),Se.needsLights){const tt=Ri(E.state.lightProbeGridArray,H);Se.lightProbeGrid!==tt&&(Se.lightProbeGrid=tt,Yt=!0)}if(jt||L!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(U,"projectionMatrix",y.projectionMatrix),it.setValue(U,"viewMatrix",y.matrixWorldInverse);const tt=it.map.cameraPosition;tt!==void 0&&tt.setValue(U,ct.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&it.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),L!==y&&(L=y,Yt=!0,Or=!0)}if(Se.needsLights&&(wt.state.directionalShadowMap.length>0&&it.setValue(U,"directionalShadowMap",wt.state.directionalShadowMap,$),wt.state.spotShadowMap.length>0&&it.setValue(U,"spotShadowMap",wt.state.spotShadowMap,$),wt.state.pointShadowMap.length>0&&it.setValue(U,"pointShadowMap",wt.state.pointShadowMap,$)),H.isSkinnedMesh){it.setOptional(U,H,"bindMatrix"),it.setOptional(U,H,"bindMatrixInverse");const tt=H.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),it.setValue(U,"boneTexture",tt.boneTexture,$))}H.isBatchedMesh&&(it.setOptional(U,H,"batchingTexture"),it.setValue(U,"batchingTexture",H._matricesTexture,$),it.setOptional(U,H,"batchingIdTexture"),it.setValue(U,"batchingIdTexture",H._indirectTexture,$),it.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(U,"batchingColorTexture",H._colorsTexture,$));const yr=X.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&I.update(H,X,Ft),(Yt||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,it.setValue(U,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(ft.envMapIntensity.value=F.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Q0()),Yt){if(it.setValue(U,"toneMappingExposure",N.toneMappingExposure),Se.needsLights&&Tn(ft,Or),ue&&G.fog===!0&&Te.refreshFogUniforms(ft,ue),Te.refreshMaterialUniforms(ft,G,ie,re,E.state.transmissionRenderTarget[y.id]),Se.needsLights&&Se.lightProbeGrid){const tt=Se.lightProbeGrid;ft.probesSH.value=tt.texture,ft.probesMin.value.copy(tt.boundingBox.min),ft.probesMax.value.copy(tt.boundingBox.max),ft.probesResolution.value.copy(tt.resolution)}Ja.upload(U,sa(Se),ft,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ja.upload(U,sa(Se),ft,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(U,"center",H.center),it.setValue(U,"modelViewMatrix",H.modelViewMatrix),it.setValue(U,"normalMatrix",H.normalMatrix),it.setValue(U,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const tt=G.uniformsGroups;for(let Zr=0,Fr=tt.length;Zr<Fr;Zr++){const oa=tt[Zr];ne.update(oa,Ft),ne.bind(oa,Ft)}}return Ft}function Tn(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function En(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,F,X){const G=W.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=F,W.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const X=W.get(y);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,X=0){te=y,Y=F,q=X;let G=null,H=!1,ue=!1;if(y){const ve=W.get(y);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),z.copy(y.viewport),ae.copy(y.scissor),we=y.scissorTest,_.viewport(z),_.scissor(ae),_.setScissorTest(we),oe=-1;return}else if(ve.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(ve.__hasExternalTextures)$.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const j=y.depthTexture;if(ve.__boundDepthTexture!==j){if(j!==null&&W.has(j)&&(y.width!==j.image.width||y.height!==j.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const C=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(C[F])?G=C[F][X]:G=C[F],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=W.get(y).__webglMultisampledFramebuffer:Array.isArray(C)?G=C[X]:G=C,z.copy(y.viewport),ae.copy(y.scissor),we=y.scissorTest}else z.copy(ye).multiplyScalar(ie).floor(),ae.copy(et).multiplyScalar(ie).floor(),we=Ge;if(X!==0&&(G=Q),_.bindFramebuffer(U.FRAMEBUFFER,G)&&_.drawBuffers(y,G),_.viewport(z),_.scissor(ae),_.setScissorTest(we),H){const ve=W.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,X)}else if(ue){const ve=F;for(let Me=0;Me<y.textures.length;Me++){const C=W.get(y.textures[Me]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Me,C.__webglTexture,X,ve)}}else if(y!==null&&X!==0){const ve=W.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,X)}oe=-1},this.readRenderTargetPixels=function(y,F,X,G,H,ue,ve,Me=0){if(!(y&&y.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let C=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(C=C[ve]),C){_.bindFramebuffer(U.FRAMEBUFFER,C);try{const j=y.textures[Me],ee=j.format,fe=j.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(ee)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(fe)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-G&&X>=0&&X<=y.height-H&&U.readPixels(F,X,G,H,xe.convert(ee),xe.convert(fe),ue)}finally{const j=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(y,F,X,G,H,ue,ve,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let C=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(C=C[ve]),C)if(F>=0&&F<=y.width-G&&X>=0&&X<=y.height-H){_.bindFramebuffer(U.FRAMEBUFFER,C);const j=y.textures[Me],ee=j.format,fe=j.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,me),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(F,X,G,H,xe.convert(ee),xe.convert(fe),0);const We=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,We);const Qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Sp(U,Qe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(me),U.deleteSync(Qe),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,X=0){const G=Math.pow(2,-X),H=Math.floor(y.image.width*G),ue=Math.floor(y.image.height*G),ve=F!==null?F.x:0,Me=F!==null?F.y:0;$.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ve,Me,H,ue),_.unbindTexture()},this.copyTextureToTexture=function(y,F,X=null,G=null,H=0,ue=0){let ve,Me,C,j,ee,fe,me,We,Qe;const Ye=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(X!==null)ve=X.max.x-X.min.x,Me=X.max.y-X.min.y,C=X.isBox3?X.max.z-X.min.z:1,j=X.min.x,ee=X.min.y,fe=X.isBox3?X.min.z:0;else{const ft=Math.pow(2,-H);ve=Math.floor(Ye.width*ft),Me=Math.floor(Ye.height*ft),y.isDataArrayTexture?C=Ye.depth:y.isData3DTexture?C=Math.floor(Ye.depth*ft):C=1,j=0,ee=0,fe=0}G!==null?(me=G.x,We=G.y,Qe=G.z):(me=0,We=0,Qe=0);const at=xe.convert(F.format),Re=xe.convert(F.type);let Se;F.isData3DTexture?($.setTexture3D(F,0),Se=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Se=U.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Se=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const wt=_.getParameter(U.UNPACK_ROW_LENGTH),tr=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Ft=_.getParameter(U.UNPACK_SKIP_PIXELS),jt=_.getParameter(U.UNPACK_SKIP_ROWS),Yt=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,Ye.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ye.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,j),_.pixelStorei(U.UNPACK_SKIP_ROWS,ee),_.pixelStorei(U.UNPACK_SKIP_IMAGES,fe);const Or=y.isDataArrayTexture||y.isData3DTexture,it=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const ft=W.get(y),yr=W.get(F),tt=W.get(ft.__renderTarget),Zr=W.get(yr.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,tt.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Fr=0;Fr<C;Fr++)Or&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(y).__webglTexture,H,fe+Fr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(F).__webglTexture,ue,Qe+Fr)),U.blitFramebuffer(j,ee,ve,Me,me,We,ve,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||W.has(y)){const ft=W.get(y),yr=W.get(F);_.bindFramebuffer(U.READ_FRAMEBUFFER,J),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let tt=0;tt<C;tt++)Or?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ft.__webglTexture,H,fe+tt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,H),it?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yr.__webglTexture,ue,Qe+tt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yr.__webglTexture,ue),H!==0?U.blitFramebuffer(j,ee,ve,Me,me,We,ve,Me,U.COLOR_BUFFER_BIT,U.NEAREST):it?U.copyTexSubImage3D(Se,ue,me,We,Qe+tt,j,ee,ve,Me):U.copyTexSubImage2D(Se,ue,me,We,j,ee,ve,Me);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Se,ue,me,We,Qe,ve,Me,C,at,Re,Ye.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,ue,me,We,Qe,ve,Me,C,at,Ye.data):U.texSubImage3D(Se,ue,me,We,Qe,ve,Me,C,at,Re,Ye):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,me,We,ve,Me,at,Re,Ye.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,me,We,Ye.width,Ye.height,at,Ye.data):U.texSubImage2D(U.TEXTURE_2D,ue,me,We,ve,Me,at,Re,Ye);_.pixelStorei(U.UNPACK_ROW_LENGTH,wt),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tr),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),_.pixelStorei(U.UNPACK_SKIP_ROWS,jt),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt),ue===0&&F.generateMipmaps&&U.generateMipmap(Se),_.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Y=0,q=0,te=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function vu(i,e){if(e===up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===il||e===hh){let t=i.getIndex();if(t===null){const s=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const r=t.count-2,n=[];if(e===il)for(let s=1;s<=r;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function tx(i){const e=new Map,t=new Map,r=i.clone();return Bh(i,r,function(n,a){e.set(a,n),t.set(n,a)}),r.traverse(function(n){if(!n.isSkinnedMesh)return;const a=n,s=e.get(n),o=s.skeleton.bones;a.skeleton=s.skeleton.clone(),a.bindMatrix.copy(s.bindMatrix),a.skeleton.bones=o.map(function(c){return t.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),r}function Bh(i,e,t){t(i,e);for(let r=0;r<i.children.length;r++)Bh(i.children[r],e.children[r],t)}class rx extends gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ox(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new _u(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _u(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yx(t)})}load(e,t,r,n){const a=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Xn.extractUrlBase(e);s=Xn.resolveURL(l,this.path)}else s=Xn.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){n?n(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Ah(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},r,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,n){let a;const s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kh){try{s[Ze.KHR_BINARY_GLTF]=new bx(e)}catch(u){n&&n(u);return}a=JSON.parse(s[Ze.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Dx(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,s[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const h=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:s[h]=new ax;break;case Ze.KHR_DRACO_MESH_COMPRESSION:s[h]=new Sx(a,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:s[h]=new Mx;break;case Ze.KHR_MESH_QUANTIZATION:s[h]=new Tx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(r,n)}parseAsync(e,t){const r=this;return new Promise(function(n,a){r.parse(e,t,n,a)})}}function ix(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function yt(i,e,t){const r=i.json.materials[e];return r.extensions&&r.extensions[t]?r.extensions[t]:null}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nx{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,n=t.length;r<n;r++){const a=t[r];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let n=t.cache.get(r);if(n)return n;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const c=new Ee(16777215);s.color!==void 0&&c.setRGB(s.color[0],s.color[1],s.color[2],Qt);const l=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new Gf(c),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new zf(c),o.distance=l;break;case"spot":o=new kf(c),o.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),Mr(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),n=Promise.resolve(o),t.cache.add(r,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,n=r.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return r._getNodeRef(t.cache,a,s)})}}class ax{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(e,t,r){const n=[];e.color=new Ee(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Qt),e.opacity=s[3]}a.baseColorTexture!==void 0&&n.push(r.assignTexture(e,"map",a.baseColorTexture,At))}return Promise.all(n)}}class sx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);return r===null||r.emissiveStrength!==void 0&&(t.emissiveIntensity=r.emissiveStrength),Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(n)}}class lx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);return r===null||(t.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}}class cx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}}class ux{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];if(t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1,r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",r.sheenColorTexture,At)),r.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}}class hx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}}class dx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],Qt),Promise.all(n)}}class px{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);return r===null||(t.ior=r.ior!==void 0?r.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class fx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],Qt),r.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",r.specularColorTexture,At)),Promise.all(n)}}class mx{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}}class gx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Nr:null}extendMaterialParams(e,t){const r=yt(this.parser,e,this.name);if(r===null)return Promise.resolve();const n=[];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}}class vx{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,n=r.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const a=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class _x{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,r=this.parser,n=r.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let c=r.textureLoader;if(o.uri){const l=r.options.manager.getHandler(o.uri);l!==null&&(c=l)}return r.loadTextureImage(e,s.source,c)}}class xx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,r=this.parser,n=r.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let c=r.textureLoader;if(o.uri){const l=r.options.manager.getHandler(o.uri);l!==null&&(c=l)}return r.loadTextureImage(e,s.source,c)}}class _u{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const n=r.extensions[this.name],a=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=n.byteOffset||0,l=n.byteLength||0,u=n.count,h=n.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,n.mode,n.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(f),u,h,d,n.mode,n.filter),f})})}else return null}}class yx{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const n=t.meshes[r.mesh];for(const c of n.primitives)if(c.mode!==ir.TRIANGLES&&c.mode!==ir.TRIANGLE_STRIP&&c.mode!==ir.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=r.extensions[this.name].attributes,s=[],o={};for(const c in a)s.push(this.parser.getDependency("accessor",a[c]).then(l=>(o[c]=l,o[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{const l=c.pop(),u=l.isGroup?l.children:[l],h=c[0].count,d=[];for(const f of u){const m=new Ve,v=new D,p=new Pr,g=new D(1,1,1),M=new df(f.geometry,f.material,h);for(let A=0;A<h;A++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,A),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,A),o.SCALE&&g.fromBufferAttribute(o.SCALE,A),M.setMatrixAt(A,m.compose(v,p,g));for(const A in o)if(A==="_COLOR_0"){const b=o[A];M.instanceColor=new sl(b.array,b.itemSize,b.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&f.geometry.setAttribute(A,o[A]);mt.prototype.copy.call(M,f),this.parser.assignFinalMaterial(M),d.push(M)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const kh="glTF",kn=12,xu={JSON:1313821514,BIN:5130562};class bx{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kn),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-kn,a=new DataView(e,kn);let s=0;for(;s<n;){const o=a.getUint32(s,!0);s+=4;const c=a.getUint32(s,!0);if(s+=4,c===xu.JSON){const l=new Uint8Array(e,kn+s,o);this.content=r.decode(l)}else if(c===xu.BIN){const l=kn+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,n=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(const u in s){const h=hl[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=hl[u]||u.toLowerCase();if(s[u]!==void 0){const d=r.accessors[e.attributes[u]],f=rn[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(h,d){n.decodeDracoFile(u,function(f){for(const m in f.attributes){const v=f.attributes[m],p=c[m];p!==void 0&&(v.normalized=p)}h(f)},o,l,Qt,d)})})}}class Mx{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tx{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Hh extends pn{constructor(e,t,r,n){super(e,t,r,n)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n*3+n;for(let s=0;s!==n;s++)t[s]=r[a+s];return t}interpolate_(e,t,r,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=n-t,h=(r-t)/u,d=h*h,f=d*h,m=e*l,v=m-l,p=-2*f+3*d,g=f-d,M=1-p,A=g-d+h;for(let b=0;b!==o;b++){const T=s[v+b+o],E=s[v+b+c]*u,R=s[m+b+o],x=s[m+b]*u;a[b]=M*T+A*E+p*R+g*x}return a}}const Ex=new Pr;class wx extends Hh{interpolate_(e,t,r,n){const a=super.interpolate_(e,t,r,n);return Ex.fromArray(a).normalize().toArray(a),a}}const ir={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yu={9728:Rt,9729:Ct,9984:nh,9985:Ya,9986:zn,9987:Wr},bu={33071:Er,33648:ts,10497:on},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ax={CUBICSPLINE:void 0,LINEAR:$n,STEP:qn},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Vl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rr})),i.DefaultMaterial}function vi(i,e,t){for(const r in t.extensions)i[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function Mr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cx(i,e,t){let r=!1,n=!1,a=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(r=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(a=!0),r&&n&&a)break}if(!r&&!n&&!a)return Promise.resolve(i);const s=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(r){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;s.push(d)}if(n){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(a){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return r&&(i.morphAttributes.position=u),n&&(i.morphAttributes.normal=h),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Px(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let r=0,n=t.length;r<n;r++)i.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lx(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lo(t.attributes):e=i.indices+":"+lo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let r=0,n=i.targets.length;r<n;r++)e+=":"+lo(i.targets[r]);return e}function lo(i){let e="";const t=Object.keys(i).sort();for(let r=0,n=t.length;r<n;r++)e+=t[r]+":"+i[t[r]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ix=new Ve;class Dx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,n=-1,a=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);n=r&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&n<17||a&&s<98?this.textureLoader=new Ff(this.options.manager):this.textureLoader=new Wf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,n=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:r,userData:{}};return vi(a,o,n),Mr(o,n),Promise.all(r._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let n=0,a=t.length;n<a;n++){const s=t[n].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let n=0,a=e.length;n<a;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const n=r.clone(),a=(s,o)=>{const c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(const[l,u]of s.children.entries())a(u,o.children[l])};return a(r,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const n=e(t[r]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let n=0;n<t.length;n++){const a=e(t[n]);a&&r.push(a)}return r}getDependency(e,t){const r=e+":"+t;let n=this.cache.get(r);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":n=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(r,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(a,s){return r.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(a,s){r.load(Xn.resolveURL(t.uri,n.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const n=t.byteLength||0,a=t.byteOffset||0;return r.slice(a,a+n)})}loadAccessor(e){const t=this,r=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=so[n.type],o=rn[n.componentType],c=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new lt(l,s,c))}const a=[];return n.bufferView!==void 0?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),n.sparse!==void 0&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],c=so[n.type],l=rn[n.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=n.byteOffset||0,f=n.bufferView!==void 0?r.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let v,p;if(f&&f!==h){const g=Math.floor(d/f),M="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let A=t.cache.get(M);A||(v=new l(o,g*f,n.count*f/u),A=new vh(v,f/u),t.cache.add(M,A)),p=new Jn(A,c,d%f/u,m)}else o===null?v=new l(n.count*c):v=new l(o,d,n.count*c),p=new lt(v,c,m);if(n.sparse!==void 0){const g=so.SCALAR,M=rn[n.sparse.indices.componentType],A=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,T=new M(s[1],A,n.sparse.count*g),E=new l(s[2],b,n.sparse.count*c);o!==null&&(p=new lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,x=T.length;R<x;R++){const S=T[R];if(p.setX(S,E[R*c]),c>=2&&p.setY(S,E[R*c+1]),c>=3&&p.setZ(S,E[R*c+2]),c>=4&&p.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,r=this.options,n=t.textures[e].source,a=t.images[n];let s=this.textureLoader;if(a.uri){const o=r.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,r){const n=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,r).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(a.samplers||{})[s.sampler]||{};return u.magFilter=yu[h.magFilter]||Ct,u.minFilter=yu[h.minFilter]||Wr,u.wrapS=bu[h.wrapS]||on,u.wrapT=bu[h.wrapT]||on,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==Ct,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const r=this,n=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=n.images[e],o=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=r.getDependency("bufferView",s.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const p=new xt(v);p.needsUpdate=!0,d(p)}),t.load(Xn.resolveURL(h,a.path),m,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Mr(h,s),h.userData.mimeType=s.mimeType||Nx(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,r,n){const a=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),a.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=r.extensions!==void 0?r.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(s);s=a.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const n=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+r.uuid;let c=this.cache.get(o);c||(c=new bh,ur.prototype.copy.call(c,r),c.color.copy(r.color),c.map=r.map,c.sizeAttenuation=!1,this.cache.add(o,c)),r=c}else if(e.isLine){const o="LineBasicMaterial:"+r.uuid;let c=this.cache.get(o);c||(c=new xs,ur.prototype.copy.call(c,r),c.color.copy(r.color),c.map=r.map,this.cache.add(o,c)),r=c}if(n||a||s){let o="ClonedMaterial:"+r.uuid+":";n&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=r.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(r))),r=c}e.material=r}getMaterialType(){return Vl}loadMaterial(e){const t=this,r=this.json,n=this.extensions,a=r.materials[e];let s;const o={},c=a.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=n[Ze.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(o,a,t))}else{const h=a.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=nr);const u=a.alphaMode||oo.OPAQUE;if(u===oo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===oo.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==ui&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ie(1,1),a.normalTexture.scale!==void 0)){const h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&s!==ui&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==ui){const h=a.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],Qt)}return a.emissiveTexture!==void 0&&s!==ui&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,At)),Promise.all(l).then(function(){const h=new s(o);return a.name&&(h.name=a.name),Mr(h,a),t.associations.set(h,{materials:e}),a.extensions&&vi(n,h,a),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,n=this.primitiveCache;function a(o){return r[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Su(c,o,t)})}const s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Lx(l),h=n[u];if(h)s.push(h.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Su(new Tt,l,t),n[u]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,r=this.json,n=this.extensions,a=r.meshes[e],s=a.primitives,o=[];for(let c=0,l=s.length;c<l;c++){const u=s[c].material===void 0?Rx(this.cache):this.getDependency("material",s[c].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const v=u[f],p=s[f];let g;const M=l[f];if(p.mode===ir.TRIANGLES||p.mode===ir.TRIANGLE_STRIP||p.mode===ir.TRIANGLE_FAN||p.mode===void 0)g=a.isSkinnedMesh===!0?new cf(v,M):new Ot(v,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===ir.TRIANGLE_STRIP?g.geometry=vu(g.geometry,hh):p.mode===ir.TRIANGLE_FAN&&(g.geometry=vu(g.geometry,il));else if(p.mode===ir.LINES)g=new ls(v,M);else if(p.mode===ir.LINE_STRIP)g=new ia(v,M);else if(p.mode===ir.LINE_LOOP)g=new gf(v,M);else if(p.mode===ir.POINTS)g=new cs(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Px(g,a),g.name=t.createUniqueName(a.name||"mesh_"+e),Mr(g,a),p.extensions&&vi(n,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return a.extensions&&vi(n,h[0],a),h[0];const d=new lr;a.extensions&&vi(n,d,a),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const r=this.json.cameras[e],n=r[r.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new zt(Hp.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):r.type==="orthographic"&&(t=new aa(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),Mr(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let n=0,a=t.joints.length;n<a;n++)r.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(n){const a=n.pop(),s=n,o=[],c=[];for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h){o.push(h);const d=new Ve;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hl(o,c)})}loadAnimation(e){const t=this.json,r=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,s=[],o=[],c=[],l=[],u=[];for(let h=0,d=n.channels.length;h<d;h++){const f=n.channels[h],m=n.samplers[f.sampler],v=f.target,p=v.node,g=n.parameters!==void 0?n.parameters[m.input]:m.input,M=n.parameters!==void 0?n.parameters[m.output]:m.output;v.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(v))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],v=h[3],p=h[4],g=[];for(let A=0,b=d.length;A<b;A++){const T=d[A],E=f[A],R=m[A],x=v[A],S=p[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const N=r._createAnimationTracks(T,E,R,x,S);if(N)for(let P=0;P<N.length;P++)g.push(N[P])}const M=new Pf(a,void 0,g);return Mr(M,n),M})}createNodeMesh(e){const t=this.json,r=this,n=t.nodes[e];return n.mesh===void 0?null:r.getDependency("mesh",n.mesh).then(function(a){const s=r._getNodeRef(r.meshCache,n.mesh,a);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=n.weights.length;c<l;c++)o.morphTargetInfluences[c]=n.weights[c]}),s})}loadNode(e){const t=this.json,r=this,n=t.nodes[e],a=r._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,u=o.length;l<u;l++)s.push(r.getDependency("node",o[l]));const c=n.skin===void 0?Promise.resolve(null):r.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ix)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,m=h[0];u.pivot=new D().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,r=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?n.createUniqueName(a.name):"",o=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(n.getDependency("camera",a.camera).then(function(l){return n._getNodeRef(n.cameraCache,a.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(a.isBone===!0?u=new yh:l.length>1?u=new lr:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(a.name&&(u.userData.name=a.name,u.name=s),Mr(u,a),a.extensions&&vi(r,u,a),a.matrix!==void 0){const h=new Ve;h.fromArray(a.matrix),u.applyMatrix4(h)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);if(!n.associations.has(u))n.associations.set(u,{});else if(a.mesh!==void 0&&n.meshCache.refs[a.mesh]>1){const h=n.associations.get(u);n.associations.set(u,{...h})}return n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],n=this,a=new lr;r.name&&(a.name=n.createUniqueName(r.name)),Mr(a,r),r.extensions&&vi(t,a,r);const s=r.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(n.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){const d=c[u];d.parent!==null?a.add(tx(d)):a.add(d)}const l=u=>{const h=new Map;for(const[d,f]of n.associations)(d instanceof ur||d instanceof xt)&&h.set(d,f);return u.traverse(d=>{const f=n.associations.get(d);f!=null&&h.set(d,f)}),h};return n.associations=l(a),a})}_createAnimationTracks(e,t,r,n,a){const s=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ni[a.path]===ni.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(ni[a.path]){case ni.weights:u=ea;break;case ni.rotation:u=ta;break;case ni.translation:case ni.scale:u=us;break;default:switch(r.itemSize){case 1:u=ea;break;case 2:case 3:default:u=us;break}break}const h=n.interpolation!==void 0?Ax[n.interpolation]:$n,d=this._getArrayFromAccessor(r);for(let f=0,m=c.length;f<m;f++){const v=new u(c[f]+"."+ni[a.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=dl(t.constructor),n=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)n[a]=t[a]*r;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const r=this instanceof ta?wx:Hh;return new r(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ux(i,e,t){const r=e.attributes,n=new $r;if(r.POSITION!==void 0){const o=t.json.accessors[r.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(n.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const u=dl(rn[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new D,c=new D;for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=dl(rn[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}i.boundingBox=n;const s=new Lr;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,i.boundingSphere=s}function Su(i,e,t){const r=e.attributes,n=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){i.setAttribute(o,c)})}for(const s in r){const o=hl[s]||s.toLowerCase();o in i.attributes||n.push(a(r[s],o))}if(e.indices!==void 0&&!i.index){const s=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});n.push(s)}return Ke.workingColorSpace!==Qt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Mr(i,e),Ux(i,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Cx(i,e.targets,t):i})}const Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _n{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ox=new aa(-1,1,1,-1,0,1);class Fx extends Tt{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Bx=new Fx;class Yl{constructor(e){this._mesh=new Ot(Bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ox)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class kx extends _n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yl(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mu extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class Hx extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Ie);this._width=r.width,this._height=r.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kx(Qa),this.copyPass.material.blending=Ar,this.timer=new Yf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,a=this.passes.length;n<a;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mu!==void 0&&(s instanceof Mu?r=!0:s instanceof Hx&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vx extends _n{constructor(e,t,r=null,n=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=n}}const Gx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hn extends _n{constructor(e,t=1,r,n){super(),this.strength=t,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(a,s,{type:Zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Vt(a,s,{type:Zt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Vt(a,s,{type:Zt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),s=Math.round(s/2)}const o=Gx;this.highPassUniforms=Qn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ie(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qn.clone(Qa.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,premultipliedAlpha:!0,blending:vo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new ui,this._fsQuad=new Yl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,n),this.renderTargetsVertical[a].setSize(r,n),this.separableBlurMaterials[a].uniforms.invSize.value=new Ie(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=hn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=hn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(r*r))/r);return new dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}hn.BlurDirectionX=new Ie(1,0);hn.BlurDirectionY=new Ie(0,1);const Ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Wx extends _n{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qn.clone(Ha.uniforms),this.material=new Eh({name:Ha.name,uniforms:this.uniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new Yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===El&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const hs="nexara.face-table/1",ds=["neutral","warm","pensive","concerned"],ps=600,za=[.5,1.5],Va=["yaw","pitch","roll"],Mt=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ai=i=>typeof i=="number"&&Number.isFinite(i),Xx=(i,e)=>Array.isArray(i)&&i.length===e.length&&i.every((t,r)=>typeof t=="string"&&t===e[r]);function jx(i,e,t){const r=[];if(!Mt(i))return["face table is not an object"];const n=(m,v)=>{m||r.push(v)},a=(m,v,p)=>n(ai(v)&&(p?v>0:v>=0)&&v<=ps,`${m} must be a ${p?"positive":"non-negative"} number of seconds up to ${ps}`),s=(m,v)=>{if(!Mt(v))return void r.push(`${m} must be an object of target weights`);for(const[p,g]of Object.entries(v))e.includes(p)?ai(g)&&g>=0&&g<=1||r.push(`${m}.${p} must be a weight in 0..1`):r.push(`${m}.${p} is not a morph target of this asset`)},o=(m,v,p)=>{if(!Mt(v))return void r.push(`${m} must be {yaw, pitch, roll}`);for(const g of Va)n(ai(v[g])&&Math.abs(v[g])<=p[g],`${m}.${g} must be a number within +/-${p[g]} degrees`)};n(i.schema===hs,`schema must be ${hs}`),n(typeof i.version=="string"&&/^\d+\.\d+\.\d+$/.test(i.version),"version must be MAJOR.MINOR.PATCH"),n(Xx(i.targets,e),`targets must be exactly ${e.join(", ")} in this order`);let c={yaw:0,pitch:0,roll:0};if(!Mt(i.headBoundsDeg)||!Va.every(m=>ai(i.headBoundsDeg[m])))r.push("headBoundsDeg must be {yaw, pitch, roll}");else{c=i.headBoundsDeg;for(const m of Va)n(c[m]>=0&&c[m]<=t[m],`headBoundsDeg.${m} must be within 0..${t[m]} (the asset's pivot bounds)`)}a("resetSeconds",i.resetSeconds,!0);const l=i.speech;if(!Mt(l))r.push("speech missing");else{if(n(typeof l.driver=="string"&&l.driver.length>0,"speech.driver must name the driver"),n(ai(l.rate)&&l.rate>0&&l.rate<=40,"speech.rate must be in (0, 40] characters per second"),n(ai(l.intensity)&&l.intensity>0&&l.intensity<=1,"speech.intensity must be in (0, 1]"),a("speech.lead",l.lead,!1),a("speech.attack",l.attack,!0),a("speech.release",l.release,!0),a("speech.settle",l.settle,!0),n(Number.isInteger(l.sampleHz)&&l.sampleHz>=30&&l.sampleHz<=1e3,"speech.sampleHz must be an integer in 30..1000"),!Mt(l.pauses))r.push("speech.pauses must be an object");else for(const[m,v]of Object.entries(l.pauses))n([...m].length===1,`speech.pauses key ${JSON.stringify(m)} must be one character`),a(`speech.pauses[${JSON.stringify(m)}]`,v,!1);if(!Mt(l.shapes))r.push("speech.shapes must be an object");else for(const[m,v]of Object.entries(l.shapes))n([...m].length===1&&m===m.toLowerCase(),`speech.shapes key ${JSON.stringify(m)} must be one lower-case character`),s(`speech.shapes[${JSON.stringify(m)}]`,v);s("speech.consonant",l.consonant),s("speech.digit",l.digit),s("speech.other",l.other)}const u=i.tilt;Mt(u)?(o("tilt.limitsDeg",u.limitsDeg,c),a("tilt.firstAt",u.firstAt,!1),a("tilt.interval",u.interval,!0),a("tilt.intervalSpread",u.intervalSpread,!1),a("tilt.endGuard",u.endGuard,!1),a("tilt.ease",u.ease,!0)):r.push("tilt missing");const h=Mt(i.presets)?i.presets:null;if(!h)r.push("presets must be an object");else for(const[m,v]of Object.entries(h)){if(!Mt(v)){r.push(`presets.${m} must be an object`);continue}n(typeof v.label=="string"&&v.label.length>0,`presets.${m}.label missing`),s(`presets.${m}.weights`,v.weights),o(`presets.${m}.head`,v.head,c)}const d=i.emotions;if(!Mt(d))r.push("emotions must map warm, pensive and concerned to presets");else{const m=ds.filter(v=>v!=="neutral");n(Object.keys(d).sort().join(",")===[...m].sort().join(","),`emotions must name exactly ${m.join(", ")} (neutral has no preset)`);for(const v of m)n(typeof d[v]=="string"&&!!h&&Mt(h[d[v]]),`emotions.${v} must name a preset`)}if(i.emotionGlow!==void 0){const m=i.emotionGlow,v=ds.filter(p=>p!=="neutral");if(!Mt(m)||Object.keys(m).sort().join(",")!==[...v].sort().join(","))r.push(`emotionGlow must give exactly ${v.join(", ")}`);else for(const p of v)n(ai(m[p])&&m[p]>=za[0]&&m[p]<=za[1],`emotionGlow.${p} must be a multiplier in ${za[0]}..${za[1]}`)}n(Mt(i.transition),"transition missing"),Mt(i.transition)&&a("transition.fade",i.transition.fade,!0);const f=i.sigh;if(!Mt(f)||!Array.isArray(f.keys)||f.keys.length<2)r.push("sigh must have at least two keys");else{n(typeof f.label=="string"&&f.label.length>0,"sigh.label missing");let m=-1;f.keys.forEach((v,p)=>{if(!Mt(v))return void r.push(`sigh.keys[${p}] must be an object`);a(`sigh.keys[${p}].t`,v.t,p>0),ai(v.t)&&(n(p===0?v.t===0:v.t>m,`sigh.keys[${p}].t must ${p===0?"be 0":"increase"}`),m=v.t),s(`sigh.keys[${p}].weights`,v.weights),o(`sigh.keys[${p}].head`,v.head,c)});for(const v of[0,f.keys.length-1]){const p=f.keys[v];Mt(p)&&Mt(p.weights)&&Mt(p.head)&&n(Object.values(p.weights).every(g=>g===0)&&Va.every(g=>p.head[g]===0),`sigh.keys[${v}] must be exact neutral`)}}return r}function Yx(i,e,t){let r;try{r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(i))}catch{throw new Error("face table is not valid UTF-8 JSON")}const n=jx(r,e,t);if(n.length)throw new Error(`invalid face table: ${n.join("; ")}`);return r}const Tu="0.5.2",co=["jawOpen","mouthWide","mouthFunnel","mouthPucker","mouthSmileLeft","mouthSmileRight","eyeBlinkLeft","eyeBlinkRight","browInnerUp","browDownLeft","browDownRight","mouthFrownLeft","mouthFrownRight","mouthPress"],Ga={yaw:4,pitch:3,roll:2},qx=/^[0-9a-f]{64}$/,pl=/^(\d+)\.(\d+)\.(\d+)$/,Eu=["head","crown","core","mouthCavity"],wu=["mouth","eyes","brow"];function vt(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Ht(i){return typeof i=="number"&&Number.isFinite(i)}function Zi(i){return Array.isArray(i)&&i.length===3&&i.every(Ht)}function $x(i){return Array.isArray(i)&&i.every(e=>typeof e=="string"&&e.length>0)}function Kx(i){return typeof i!="string"||!i||i.length>200||!/^[A-Za-z0-9._\/-]+$/.test(i)||i.startsWith("/")?!1:i.split("/").every(e=>e!==""&&e!=="."&&e!=="..")}const Au="@nexara/avatar-runtime",Ru=["hologram-a"];function uo(i,e){const t=pl.exec(i),r=pl.exec(e);if(!t||!r)return NaN;for(let n=1;n<=3;n++){const a=Number(t[n])-Number(r[n]);if(a)return Math.sign(a)}return 0}function $i(i,e,t){if(!vt(t))return void i.push(`${e} missing`);Kx(t.path)||i.push(`${e}.path must be a relative path inside the asset folder`),(typeof t.sha256!="string"||!qx.test(t.sha256))&&i.push(`${e}.sha256 must be 64 lowercase hex characters`),Number.isInteger(t.bytes)&&t.bytes>0||i.push(`${e}.bytes must be a positive integer`)}function Zx(i){const e=[];if(!vt(i))return["manifest is not an object"];const t=(u,h)=>{u||e.push(h)};t(i.schema==="nexara.avatar-manifest/1","schema must be nexara.avatar-manifest/1"),t(typeof i.assetVersion=="string"&&i.assetVersion.length>0,"assetVersion missing"),typeof i.minimumRuntimeVersion!="string"||!pl.test(i.minimumRuntimeVersion)?e.push("minimumRuntimeVersion must be MAJOR.MINOR.PATCH"):t(uo(i.minimumRuntimeVersion,Tu)<=0,`manifest needs runtime ${i.minimumRuntimeVersion}; this is ${Tu}`),$i(e,"glb",i.glb),$i(e,"fallback",i.fallback),vt(i.fallback)&&t(typeof i.fallback.alt=="string"&&i.fallback.alt.length>0,"fallback.alt missing"),Array.isArray(i.textures)?i.textures.forEach((u,h)=>$i(e,`textures[${h}]`,u)):e.push("textures must be a list (empty when none)");const r=i.shaders;if(t(vt(r)&&r.kind==="bundled"&&r.package===Au&&Ru.includes(r.preset),`shaders must be {kind: bundled, package: ${Au}, preset: one of ${Ru.join(", ")}}`),!Array.isArray(i.components)||i.components.length===0)e.push("components must be a non-empty list");else{const u=new Set;i.components.forEach((h,d)=>{if(!vt(h)||typeof h.node!="string"||!h.node)return void e.push(`components[${d}].node missing`);Eu.includes(h.role)||e.push(`components[${d}].role must be one of ${Eu.join(", ")}`),u.has(h.node)&&e.push(`components[${d}].node duplicated`),u.add(h.node)}),t(i.components.filter(h=>vt(h)&&h.role==="head").length===1,"components must name exactly one head node")}const n=i.frame;vt(n)?(t(n.upAxis==="+Y"&&n.forwardAxis==="+Z","frame must be +Y up, +Z forward"),t(typeof n.units=="string"&&n.units.length>0,"frame.units missing"),t(Ht(n.scale)&&n.scale>0,"frame.scale must be a positive number"),t(Zi(n.origin),"frame.origin must be a 3-vector")):e.push("frame missing");const a=i.boundingBox;!vt(a)||!Zi(a.min)||!Zi(a.max)?e.push("boundingBox must have min and max 3-vectors"):t(a.min.every((u,h)=>u<a.max[h]),"boundingBox min must be below max on every axis");const s=i.camera;vt(s)?(t(Zi(s.target),"camera.target must be a 3-vector"),t(Ht(s.fovDeg)&&s.fovDeg>=10&&s.fovDeg<=90,"camera.fovDeg must be 10..90"),t(Ht(s.distance)&&s.distance>0,"camera.distance must be positive"),t(Ht(s.canonicalYawDeg),"camera.canonicalYawDeg must be a number")):e.push("camera missing");const o=i.orbit;if(!vt(o))e.push("orbit missing");else{t(o.yaw==="continuous","orbit.yaw must be continuous (AVATAR-002)"),!Ht(o.pitchMinDeg)||!Ht(o.pitchMaxDeg)?e.push("orbit pitch limits must be numbers"):(t(o.pitchMinDeg<0&&o.pitchMaxDeg>0,"orbit pitch range must include 0"),t(o.pitchMinDeg>=-20&&o.pitchMaxDeg<=20,"orbit pitch limited to +/-20 degrees (provisional AVATAR-002)")),t(o.pan===!1,"orbit.pan must be false");const u=o.zoom;t(vt(u)&&u.minScale===1&&Ht(u.maxScale)&&u.maxScale>1&&u.maxScale<=8&&(u.aim==="pointer"||u.aim==="center"),"orbit.zoom must be {minScale: 1, maxScale in (1, 8], aim: pointer|center} (bounded, never further out than the framing)"),t(Ht(o.dampingSeconds)&&o.dampingSeconds>0&&o.dampingSeconds<=2,"orbit.dampingSeconds must be in (0, 2]"),t(o.resetToFront===!0,"orbit.resetToFront must be true (AVATAR-003)"),t(Ht(o.resetSettleSeconds)&&o.resetSettleSeconds>0&&o.resetSettleSeconds<=5,"orbit.resetSettleSeconds must be in (0, 5]")}t(vt(i.core)&&Zi(i.core.position),"core.position must be a 3-vector");const c=i.neckFade;if(t(vt(c)&&Ht(c.fromY)&&Ht(c.toY)&&c.fromY<c.toY,"neckFade must have numeric fromY < toY"),Jx(e,i.morphTargets),i.pivot!==void 0&&Qx(e,i.pivot),Array.isArray(i.morphTargets)&&i.morphTargets.length>0&&(t(i.pivot!==void 0,"a speech asset (morphTargets) must declare its head pivot"),t(uo(String(i.minimumRuntimeVersion),"0.3.0")>=0,"a speech asset needs minimumRuntimeVersion 0.3.0 or later"),t(Array.isArray(i.components)&&i.components.filter(u=>vt(u)&&u.role==="mouthCavity").length===1,"a speech asset must name exactly one mouthCavity node"),t(i.faceTable!==void 0,"a speech asset must bind its face table (faceTable)")),i.morphRoles!==void 0){const u=i.morphRoles;t(Array.isArray(u)&&u.length===new Set(u).size&&u.every(h=>h==="head"||h==="mouthCavity"||h==="crown")&&u.includes("head")&&u.includes("mouthCavity"),"morphRoles must list head and mouthCavity, optionally crown, each once"),t(Array.isArray(i.morphTargets)&&i.morphTargets.length>0,"morphRoles needs speech targets (morphTargets)"),t(uo(String(i.minimumRuntimeVersion),"0.4.0")>=0,"morphRoles needs minimumRuntimeVersion 0.4.0 or later"),Array.isArray(u)&&u.includes("crown")&&vt(i.decorations)&&vt(i.decorations.crownStrands)&&t(i.decorations.crownStrands.binding!==void 0,"a moving crown with a crown net must bind the net (decorations.crownStrands.binding)")}if(i.faceTable!==void 0&&($i(e,"faceTable",i.faceTable),t(vt(i.faceTable)&&i.faceTable.schema===hs,`faceTable.schema must be ${hs}`)),t($x(i.animations),"animations must be a list of names (empty when none)"),i.decorations!==void 0){if(!vt(i.decorations))e.push("decorations must be an object");else if(i.decorations.crownStrands!==void 0){$i(e,"decorations.crownStrands",i.decorations.crownStrands);const u=vt(i.decorations.crownStrands)?i.decorations.crownStrands.binding:void 0;u!==void 0&&$i(e,"decorations.crownStrands.binding",u)}}const l=i.quality;return vt(l)?(t(Ht(l.targetFps)&&l.targetFps>0,"quality.targetFps must be positive"),t(Ht(l.minimumFps)&&l.minimumFps>0&&l.minimumFps<=l.targetFps,"quality.minimumFps must be positive and <= targetFps"),t(Array.isArray(l.tiers)&&l.tiers.length>0&&l.tiers.every(u=>u==="high"||u==="medium"||u==="low"),"quality.tiers must list high/medium/low"),t(l.fallback==="2d-still","quality.fallback must be 2d-still"),t(typeof l.provisional=="boolean","quality.provisional must be a boolean")):e.push("quality missing"),e}function Jx(i,e){if(!Array.isArray(e))return void i.push("morphTargets must be a list (empty when none)");if(e.length===0)return;if(e.every(r=>typeof r=="string"))return void i.push("morphTargets must be {name, min, max, group} entries");const t=[];e.forEach((r,n)=>{if(!vt(r)||typeof r.name!="string")return void i.push(`morphTargets[${n}].name missing`);t.push(r.name),(r.min!==0||r.max!==1)&&i.push(`morphTargets[${n}] range must be 0..1`),wu.includes(r.group)||i.push(`morphTargets[${n}].group must be one of ${wu.join(", ")}`)}),t.length===e.length&&!(t.length===co.length&&t.every((r,n)=>r===co[n]))&&i.push(`morphTargets must be exactly ${co.join(", ")} in this order`)}function Qx(i,e){if(!vt(e))return void i.push("pivot must be an object");(typeof e.node!="string"||!e.node)&&i.push("pivot.node missing"),Zi(e.point)||i.push("pivot.point must be a 3-vector"),e.order!=="YXZ"&&i.push("pivot.order must be YXZ (q = qYaw * qPitch * qRoll)");const t=e.boundsDeg;(!vt(t)||!["yaw","pitch","roll"].every(r=>Ht(t[r])&&t[r]>=0&&t[r]<=Ga[r]))&&i.push(`pivot.boundsDeg must give yaw, pitch, roll within 0..${Ga.yaw}/${Ga.pitch}/${Ga.roll} degrees`)}function ey(i){return i.morphTargets.map(e=>typeof e=="string"?e:e.name)}function ty(i,e){if(!e)return"has no morph targets";const t=Object.entries(e).sort((n,a)=>n[1]-a[1]).map(([n])=>n);if(t.length!==i.length)return`has ${t.length} morph targets, the manifest lists ${i.length}`;const r=t.findIndex((n,a)=>n!==i[a]);return r<0?null:`morph target ${r} is ${t[r]}, the manifest expects ${i[r]}`}async function ry(i){const e=await crypto.subtle.digest("SHA-256",i);return Array.from(new Uint8Array(e),t=>t.toString(16).padStart(2,"0")).join("")}async function es(i,e){const t=await fetch(e);if(!t.ok)throw new Error(`avatar asset fetch failed: HTTP ${t.status}`);const r=await t.arrayBuffer();if(r.byteLength!==i.bytes)throw new Error(`${i.path}: size does not match the manifest`);if(await ry(r)!==i.sha256)throw new Error(`${i.path}: hash does not match the manifest`);return r}function iy(i,e){return es(i.glb,e)}function ny(i,e){const t=new Set(e);return i.components.map(r=>r.node).filter(r=>!t.has(r))}const zh={surface:"hologram",background:"pale",shading:"smooth",crown:"web",neckFade:!0,core:!0,network:!0,glow:1},ay={pale:{bgCenter:"#d6e8fb",bgEdge:"#92bbea",bgHalo:"#f4f8ff",fillDark:"#165cbf",fillLight:"#4f97e2",fillAlpha:.9,rim:"#f2f9ff",rimStrength:1.15,lattice:"#ffffff",latticeAlpha:.16,stippleAlpha:.22,crownFill:"#6fa6e8",crownSheath:"#3f7fd6",crownFillAlpha:.32,crownEdge:"#ffffff",sparkle:"#ffffff",arc:"#ffffff",arcAlpha:.45,core:"#ffffff",ray:"#ffffff",bloom:[.35,.35,.97]},dark:{bgCenter:"#0d1d38",bgEdge:"#03070f",bgHalo:"#1a3560",fillDark:"#0e2d5e",fillLight:"#3d78c8",fillAlpha:.55,rim:"#bfe0ff",rimStrength:1.2,lattice:"#9cc8ff",latticeAlpha:.22,stippleAlpha:.45,crownFill:"#2d63b0",crownSheath:"#1d4f9c",crownFillAlpha:.25,crownEdge:"#d8ecff",sparkle:"#cfe6ff",arc:"#7fb2f0",arcAlpha:.35,core:"#ffffff",ray:"#bfe0ff",bloom:[.9,.5,.35]}},Cu="#7fdcf0",sy="#0b2a55";function fs(i){const e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i.trim());if(!e)return null;const t=e[1].length===3?[...e[1]].map(r=>r+r).join(""):e[1];return[0,2,4].map(r=>parseInt(t.slice(r,r+2),16))}function Pu(i,e,t){const r=fs(e);return"#"+i.map((n,a)=>Math.round(n*(1-t)+r[a]*t).toString(16).padStart(2,"0")).join("")}function oy(i=Cu){const e=fs(i)??fs(Cu),t=r=>Pu(e,sy,r);return{bgCenter:"#ffffff",bgEdge:"#ffffff",bgHalo:t(0),fillDark:"#165cbf",fillLight:"#4f97e2",fillAlpha:.9,rim:t(.6),rimStrength:1,lattice:t(.3),latticeAlpha:.22,stippleAlpha:.25,crownFill:Pu(e,"#3f7fd6",.5),crownSheath:t(.45),crownFillAlpha:.4,crownEdge:t(.6),sparkle:t(.35),arc:t(.2),arcAlpha:0,core:t(0),ray:t(0),bloom:[.35,.35,.97],haloAlpha:.22}}function Lu(i){const e=i.index?i.toNonIndexed():i.clone(),t=e.getAttribute("position").count,r=new Float32Array(t*3);for(let n=0;n<t;n++)r[n*3+n%3]=1;return e.setAttribute("barycentric",new lt(r,3)),e}const ql=`
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
`,$l=`
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
`,ly=`
  ${$l}
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
`,cy=`
  ${$l}
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
`;function Vh(i,e){return e.crown==="solid"?Math.min(i.crownFillAlpha*2.2,.85):i.crownFillAlpha*.7}function cr(i){return new Ee(i)}function uy(i,e,t){return new dt({name:"nexara-head-shell",vertexShader:ql,fragmentShader:ly,transparent:!0,depthWrite:!0,side:Rr,uniforms:{uFlat:{value:e.shading==="flat"?1:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uFillDark:{value:cr(i.fillDark)},uFillLight:{value:cr(i.fillLight)},uFillAlpha:{value:i.fillAlpha},uRim:{value:cr(i.rim)},uRimStrength:{value:i.rimStrength},uLattice:{value:cr(i.lattice)},uLatticeAlpha:{value:i.latticeAlpha},uStippleAlpha:{value:i.stippleAlpha},uGlow:{value:e.glow},uNeckFade:{value:e.neckFade?1:0},uNeckRange:{value:new Ie(t.fromY,t.toY)},uKeyDir:{value:new D(-.35,.55,.75)}}})}function hy(i,e){return new dt({name:"nexara-crown",vertexShader:ql,fragmentShader:cy,transparent:!0,depthWrite:!1,side:nr,uniforms:{uFlat:{value:e.shading==="flat"?1:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uFill:{value:cr(i.crownFill)},uFillAlpha:{value:Vh(i,e)},uEdge:{value:cr(i.crownEdge)},uLattice:{value:cr(i.lattice)},uWeb:{value:e.crown==="web"?1:0},uGlow:{value:e.glow},uPulse:{value:0}}})}function dy(i,e,t,r){const n=i.uniforms;n.uFlat.value=t.shading==="flat"?1:0,n.uFillDark.value.set(e.fillDark),n.uFillLight.value.set(e.fillLight),n.uFillAlpha.value=e.fillAlpha,n.uRim.value.set(e.rim),n.uRimStrength.value=e.rimStrength,n.uLattice.value.set(e.lattice),n.uLatticeAlpha.value=e.latticeAlpha,n.uStippleAlpha.value=e.stippleAlpha,n.uGlow.value=t.glow,n.uNeckFade.value=t.neckFade?1:0,n.uNeckRange.value.set(r.fromY,r.toY)}function py(i,e,t){const r=i.uniforms;r.uFlat.value=t.shading==="flat"?1:0,r.uFill.value.set(e.crownFill),r.uFillAlpha.value=Vh(e,t),r.uEdge.value.set(e.crownEdge),r.uLattice.value.set(e.lattice),r.uWeb.value=t.crown==="web"?1:0,r.uGlow.value=t.glow}function fy(i){const e=i.getAttribute("position").count,t=new Float32Array(e),r=i.index;if(r){const n=new Map;for(let a=0;a<r.count;a+=3){const s=[r.getX(a),r.getX(a+1),r.getX(a+2)];for(let o=0;o<3;o++){const c=s[o],l=s[(o+1)%3],u=c<l?`${c},${l}`:`${l},${c}`;n.set(u,(n.get(u)??0)+1)}}for(const[a,s]of n)if(s===1)for(const o of a.split(","))t[Number(o)]=1}return i.setAttribute("lipEdge",new lt(t,1)),i}const Gh={fill:.8,depthDim:.7,alpha:1,lattice:.8,stipple:.6,lipRim:.6,edgeRim:.6},my=ql.replace("attribute vec3 barycentric;",`attribute vec3 barycentric;
  attribute float lipEdge;
  varying float vLip;`).replace("vBary = barycentric;",`vBary = barycentric;
    vLip = lipEdge;`),gy=`
  ${$l}
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
`;function vy(i,e,t=Gh){const r=new dt({name:"nexara-mouth-cavity",vertexShader:my,fragmentShader:gy,side:nr,transparent:!0,depthWrite:!0,uniforms:{uFlat:{value:0},uTime:{value:0},uDesaturate:{value:0},uNeutral:{value:0},uCavity:{value:Wh(i)},uFillDark:{value:cr(i.fillDark)},uFillLight:{value:cr(i.fillLight)},uRim:{value:cr(i.rim)},uLattice:{value:cr(i.lattice)},uFill:{value:1},uDepthDim:{value:1},uAlpha:{value:1},uLatticeAlpha:{value:0},uStippleAlpha:{value:0},uLipRim:{value:0},uEdgeRim:{value:0},uGlow:{value:e.glow},uKeyDir:{value:new D(-.35,.55,.75)}},polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:4});return fl(r,i,e,t),r}function fl(i,e,t,r=Gh,n=!0){const a=i.uniforms;a.uCavity.value.copy(Wh(e)),a.uFillDark.value.set(e.fillDark),a.uFillLight.value.set(e.fillLight),a.uRim.value.set(e.rim),a.uLattice.value.set(e.lattice),a.uFill.value=r.fill,a.uDepthDim.value=r.depthDim,a.uAlpha.value=Math.min(1,e.fillAlpha*r.alpha),a.uLatticeAlpha.value=n?e.latticeAlpha*r.lattice:0,a.uStippleAlpha.value=e.stippleAlpha*r.stipple,a.uLipRim.value=r.lipRim,a.uEdgeRim.value=r.edgeRim,a.uFlat.value=t.shading==="flat"?1:0}function Wh(i){return cr(i.fillDark).multiplyScalar(.18)}function Xh(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function _y(i){const e=new dt({name:"nexara-background",depthTest:!1,depthWrite:!1,uniforms:{uCenter:{value:new Ee(i.bgCenter)},uEdge:{value:new Ee(i.bgEdge)},uHalo:{value:new Ee(i.bgHalo)},uAspect:{value:1}},vertexShader:`
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
    `}),t=new Ot(new dn(2,2),e);return t.frustumCulled=!1,t.renderOrder=-10,t.name="nexara-background",t}function Nu(i,e,t){const r=i.material.uniforms;r.uCenter.value.set(e.bgCenter),r.uEdge.value.set(e.bgEdge),r.uHalo.value.set(e.bgHalo),r.uAspect.value=t}function xy(i){const e=new dt({name:"nexara-halo",depthTest:!1,depthWrite:!1,uniforms:{uHalo:{value:new Ee(i.bgHalo)},uAlpha:{value:i.haloAlpha??0},uAspect:{value:1}},vertexShader:`
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
    `}),t=new Ot(new dn(2,2),e);return t.frustumCulled=!1,t.renderOrder=-10,t.name="nexara-halo",t}function Iu(i,e,t){const r=i.material.uniforms;r.uHalo.value.set(e.bgHalo),r.uAlpha.value=e.haloAlpha??0,r.uAspect.value=t}const Ki=2400,yy=30;function by(i,e=20261011){const t=Xh(e),r=new lr;r.name="nexara-network";const n=new lr,a=new xs({color:new Ee(i.arc),transparent:!0,opacity:i.arcAlpha,depthWrite:!1}),s=[];for(let m=0;m<yy;m++){const v=1.3+t()*2.6,p=t()*Math.PI*2,g=Math.PI*(.35+t()*1.4),M=[],A=96;for(let R=0;R<=A;R++){const x=p+g*R/A;M.push(new D(Math.cos(x)*v,Math.sin(x)*v*1.15,0))}const b=new Tt().setFromPoints(M),T=new ia(b,a);T.rotation.set((t()-.5)*1.2,t()*Math.PI*2,(t()-.5)*.6),T.position.set((t()-.5)*.4,-.55+(t()-.5)*.6,(t()-.5)*.4),T.updateMatrix();const E=2+Math.floor(t()*4);for(let R=0;R<E;R++){const x=M[Math.floor(t()*M.length)].clone().applyMatrix4(T.matrix);s.push(x.x,x.y,x.z)}T.renderOrder=1,n.add(T)}r.add(n);const o=new Float32Array(Ki*3),c=new Float32Array(Ki),l=new Float32Array(Ki),u=Math.min(s.length/3,Ki);for(let m=0;m<Ki;m++){if(m<u)o.set(s.slice(m*3,m*3+3),m*3),c[m]=5+t()*4;else{const v=1.5+Math.pow(t(),.7)*3.5,p=t()*Math.PI*2,g=-3.2+t()*5.6;o[m*3]=Math.cos(p)*v,o[m*3+1]=g,o[m*3+2]=Math.sin(p)*v-.5,c[m]=t()<.14?5+t()*6:1.8+t()*2.8}l[m]=t()*100}const h=new Tt;h.setAttribute("position",new lt(o,3)),h.setAttribute("size",new lt(c,1)),h.setAttribute("phase",new lt(l,1));const d=new dt({name:"nexara-sparkles",transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ee(i.sparkle)},uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1}},vertexShader:`
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
    `}),f=new cs(h,d);return f.name="nexara-sparkles",f.renderOrder=2,f.frustumCulled=!1,r.add(f),{group:r,sparkleMaterial:d,arcMaterial:a,setCounts(m,v){h.setDrawRange(0,Math.min(Math.max(m,u),Ki)),n.children.forEach((p,g)=>p.visible=i.arcAlpha>0&&g<v)}}}function Sy(){const i=new Uint8Array(65536);for(let t=0;t<128;t++)for(let r=0;r<128;r++){const n=(r+.5)/128-.5,a=(t+.5)/128-.5,s=Math.sqrt(n*n+a*a)*2,o=Math.exp(-s*s*60),c=Math.exp(-s*s*6)*.55,l=Math.exp(-Math.abs(a)*70)*Math.max(0,1-Math.abs(n)*2)*.5,u=Math.min(1,o+c+l),h=(t*128+r)*4;i[h]=i[h+1]=i[h+2]=255,i[h+3]=Math.round(u*255)}const e=new _s(i,128,128);return e.colorSpace=At,e.needsUpdate=!0,e}function My(i,e,t,r=7){const n=Xh(r),a=new lr;a.name="nexara-projector";const s=new _h({map:Sy(),color:new Ee(i.core),transparent:!0,depthWrite:!1,depthTest:!1}),o=new sf(s);o.position.copy(e),o.scale.set(.75,.75,1),o.renderOrder=5,a.add(o);const c=56,l=new Float32Array(c*6),u=new Float32Array(c*2);for(let v=0;v<c;v++){const p=v/c*Math.PI*2+n()*.05,g=.18+n()*.45,M=t+.15+n()*.75;l.set([e.x,e.y,e.z,Math.cos(p)*g,M,Math.sin(p)*g*.8],v*6),u[v*2]=1,u[v*2+1]=0}const h=new Tt;h.setAttribute("position",new lt(l,3)),h.setAttribute("fade",new lt(u,1));const d=new dt({name:"nexara-rays",transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ee(i.ray)},uIntensity:{value:1}},vertexShader:`
      attribute float fade; varying float vFade;
      void main() { vFade = fade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform vec3 uColor; uniform float uIntensity; varying float vFade;
      void main() {
        gl_FragColor = vec4(uColor, pow(vFade, 2.2) * 0.4 * uIntensity);
        #include <colorspace_fragment>
      }
    `}),f=new ls(h,d);f.renderOrder=3,a.add(f);const m=new xs({color:new Ee(i.ray),transparent:!0,opacity:.4,depthWrite:!1});for(let v=0;v<7;v++){const p=.35+v*v*.06+v*.18,g=[];for(let b=0;b<=160;b++){const T=b/160*Math.PI*2;g.push(new D(Math.cos(T)*p,0,Math.sin(T)*p))}const M=m.clone();M.opacity=.42*Math.pow(.78,v);const A=new ia(new Tt().setFromPoints(g),M);A.position.copy(e),A.renderOrder=1,a.add(A)}return{group:a,coreMaterial:s,rayMaterial:d,ringMaterial:m,setIntensity(v){s.opacity=Math.min(1,v),o.scale.setScalar(.75*(.7+.3*v)),d.uniforms.uIntensity.value=v}}}const Ti={pitchMinDeg:-20,pitchMaxDeg:20,dampingSeconds:.12,keyStepDeg:15,dragDegPerPx:.35,idleYawDegPerSec:0};function Ty(i=0,e=0,t=Ti){const r=di(e,t.pitchMinDeg,t.pitchMaxDeg);return{yawDeg:i,pitchDeg:r,targetYawDeg:i,targetPitchDeg:r,yawVel:0,pitchVel:0,userHasInteracted:!1}}function di(i,e,t){return i<e?e:i>t?t:i}function Du(i){const e=i%360;return e<0?e+360:e===0?0:e}function Ji(i,e,t,r=Ti){return{...i,targetYawDeg:i.targetYawDeg+e,targetPitchDeg:di(i.targetPitchDeg+t,r.pitchMinDeg,r.pitchMaxDeg),userHasInteracted:!0}}function Ey(i,e,t,r=Ti){return Ji(i,-e*r.dragDegPerPx,t*r.dragDegPerPx,r)}function wy(i,e,t=Ti){switch(e){case"ArrowLeft":return Ji(i,t.keyStepDeg,0,t);case"ArrowRight":return Ji(i,-t.keyStepDeg,0,t);case"ArrowUp":return Ji(i,0,t.keyStepDeg/3,t);case"ArrowDown":return Ji(i,0,-t.keyStepDeg/3,t);case"Home":return jh(i);default:return null}}function jh(i){return{...i,targetYawDeg:Math.round(i.yawDeg/360)*360,targetPitchDeg:0,userHasInteracted:!0}}function Ay(i,e,t,r=Ti){const n=di(t,r.pitchMinDeg,r.pitchMaxDeg);return{...i,yawDeg:e,pitchDeg:n,targetYawDeg:e,targetPitchDeg:n,yawVel:0,pitchVel:0}}function Ry(i,e,t=Ti){const r=di(e.dt,0,.1);let n=i.targetYawDeg;if(!e.reducedMotion&&!e.conversationActive&&!i.userHasInteracted&&t.idleYawDegPerSec>0&&(n+=t.idleYawDegPerSec*r),e.reducedMotion)return{...i,targetYawDeg:n,yawDeg:n,pitchDeg:i.targetPitchDeg,yawVel:0,pitchVel:0};const a=Yh(t.dampingSeconds,r),s=i.yawDeg+(n-i.yawDeg)*a,o=di(i.pitchDeg+(i.targetPitchDeg-i.pitchDeg)*a,t.pitchMinDeg,t.pitchMaxDeg);return{...i,targetYawDeg:n,yawDeg:s,yawVel:r>0?(s-i.yawDeg)/r:0,pitchDeg:o,pitchVel:r>0?(o-i.pitchDeg)/r:0}}function Cy(i,e=.01){return Math.abs(i.yawDeg-i.targetYawDeg)<e&&Math.abs(i.pitchDeg-i.targetPitchDeg)<e}function Yh(i,e){return e<=0?0:i<=0?1:1-Math.exp(-e/i)}function Py(i,e,t){const r=i*Math.PI/180,n=e*Math.PI/180;return[t*Math.cos(n)*Math.sin(r),t*Math.sin(n),t*Math.cos(n)*Math.cos(r)]}function ml(i=1,e=[0,0,0],t){const r=t?qh(i,t):i,n=t?r===t.minScale?[0,0,0]:$h(e,t):e;return{scale:r,targetScale:r,aim:[...n],targetAim:[...n]}}function Ly(i,e,t,r,n,a="pointer"){return{minScale:i,maxScale:e,aimMode:a,aimMin:[t[0]-n[0],t[1]-n[1],t[2]-n[2]],aimMax:[r[0]-n[0],r[1]-n[1],r[2]-n[2]],keyFactor:1.25,wheelFactorPer100:1.15}}const qh=(i,e)=>Math.min(Math.max(i,e.minScale),e.maxScale);function $h(i,e){return[0,1,2].map(t=>Math.min(Math.max(i[t],e.aimMin[t]),e.aimMax[t]))}function gl(i,e,t,r){if(!(e>0)||!Number.isFinite(e))return i;const n=i.targetScale,a=qh(n*e,r);if(a===r.minScale)return{...i,targetScale:a,targetAim:[0,0,0]};if(a===n)return i;r.aimMode==="center"&&(t=i.targetAim);let s;if(a>n){const o=n/a;s=[0,1,2].map(c=>t[c]+(i.targetAim[c]-t[c])*o)}else{const o=n-r.minScale,c=o>0?(a-r.minScale)/o:0;s=[0,1,2].map(l=>i.targetAim[l]*c)}return{...i,targetScale:a,targetAim:$h(s,r)}}function Ny(i,e){return Math.pow(e.wheelFactorPer100,-i/100)}function Iy(i,e,t){return e==="+"||e==="="?gl(i,t.keyFactor,i.targetAim,t):e==="-"||e==="_"?gl(i,1/t.keyFactor,i.targetAim,t):null}function Uu(i,e){return{...i,targetScale:e.minScale,targetAim:[0,0,0]}}function Dy(i,e,t,r){return ml(e,t,r)}function Uy(i,e,t){return t||e>=1?{...i,scale:i.targetScale,aim:[...i.targetAim]}:{...i,scale:i.scale+(i.targetScale-i.scale)*e,aim:[0,1,2].map(r=>i.aim[r]+(i.targetAim[r]-i.aim[r])*e)}}function Oy(i,e=1e-4){return Math.abs(i.scale-i.targetScale)<e&&[0,1,2].every(t=>Math.abs(i.aim[t]-i.targetAim[t])<e)}const Ou="#include <morphtarget_pars_vertex>",Fu=`
        #include <morphinstance_vertex>
        #include <begin_vertex>
        #include <morphtarget_vertex>`;function Bu(i){const e=i.points.length/3,t=new Float32Array(e),r=new Float32Array(e),n=new Float32Array(e),a=[];for(let o=0;o+1<i.starts.length;o++){const c=i.starts[o],l=i.starts[o+1];for(let u=c;u<l;u++)t[u]=i.ranks[o],r[u]=l-c<24?1:Math.min(1,Math.min(u-c,l-1-u)/8),n[u]=(u-c)*.09+i.ranks[o]*50,u+1<l&&a.push(u,u+1)}const s=new Tt;return s.setAttribute("position",new lt(i.points,3)),s.setAttribute("rank",new lt(t,1)),s.setAttribute("taper",new lt(r,1)),s.setAttribute("along",new lt(n,1)),s.setIndex(a),{geo:s,rank:t,segments:a.length/2}}function ku(i,e){const t=i.nodes.length,r=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++){const o=i.nodes[s];r.set(i.points.subarray(o*3,o*3+3),s*3),n[s]=e[o]}const a=new Tt;return a.setAttribute("position",new lt(r,3)),a.setAttribute("rank",new lt(n,1)),a}function Hu(i,e,t){i.morphAttributes.position=e.map((r,n)=>{const a=new lt(r,3);return a.name=t[n],a}),i.morphTargetsRelative=!0}function Fy(i,e){const t=e?e.morph.rest:i,{geo:r,rank:n,segments:a}=Bu(t),s=new dt({name:"nexara-crown-strands",transparent:!0,depthWrite:!1,uniforms:{uVisible:{value:.5},uIntensity:{value:1},uCore:{value:new Ee("#ffffff")},uSheath:{value:new Ee("#3f7fd6")},uTime:{value:0},uPulse:{value:0}},vertexShader:`
      ${Ou}
      attribute float rank; attribute float taper; attribute float along;
      varying float vRank; varying float vTaper; varying float vAlong;
      void main() {
        vRank = rank; vTaper = taper; vAlong = along;
        ${Fu}
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
    `}),o=new ls(r,s);o.name="nexara-crown-strands",o.frustumCulled=!1,o.renderOrder=5;const c=ku(t,n),l=new dt({name:"nexara-crown-nodes",transparent:!0,depthWrite:!1,uniforms:{uVisible:{value:.5},uIntensity:{value:1},uCore:{value:new Ee("#ffffff")},uPixelRatio:{value:1}},vertexShader:`
      ${Ou}
      attribute float rank; varying float vRank; uniform float uPixelRatio;
      void main() {
        vRank = rank;
        ${Fu}
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
    `}),u=new cs(c,l);u.name="nexara-crown-nodes",u.frustumCulled=!1,u.renderOrder=6;const h=new lr;h.name="nexara-crown-strand-group",h.add(o,u);const d=[s],f=[l],m=[];let v={strands:0,segments:0,nodes:0,points:0};if(e&&e.morph.moving.ranks.length){const p=e.morph,g=Bu(p.moving);Hu(g.geo,p.deltas,e.names);const M=ku(p.moving,g.rank);Hu(M,p.deltas.map(R=>{const x=new Float32Array(p.moving.nodes.length*3);return p.moving.nodes.forEach((S,N)=>x.set(R.subarray(S*3,S*3+3),N*3)),x}),e.names);const A=s.clone(),b=l.clone();d.push(A),f.push(b);const T=new ls(g.geo,A);T.name="nexara-crown-strands-moving",T.frustumCulled=!1,T.renderOrder=5;const E=new cs(M,b);E.name="nexara-crown-nodes-moving",E.frustumCulled=!1,E.renderOrder=6,h.add(T,E),m.push(T,E),v={strands:p.moving.ranks.length,segments:g.segments,nodes:p.moving.nodes.length,points:p.moving.points.length/3}}return{group:h,lineMaterial:s,nodeMaterial:l,morphObjects:m,counts:{strands:t.ranks.length+v.strands,segments:a+v.segments,nodes:t.nodes.length+v.nodes,movingStrands:v.strands,movingPoints:v.points,boundPoints:e?.morph.boundPoints??0},update(p){for(const g of d){const M=g.uniforms;M.uVisible.value=p.visible,M.uIntensity.value=p.intensity,M.uCore.value.copy(p.core),M.uSheath.value.copy(p.sheath),M.uTime.value=p.time,M.uPulse.value=p.pulse}for(const g of f){const M=g.uniforms;M.uVisible.value=p.visible,M.uIntensity.value=p.intensity,M.uCore.value.copy(p.core),M.uPixelRatio.value=p.pixelRatio}}}}const By="NXSTR001",Wa=i=>i+3&-4;function ky(i){const e=new DataView(i);let t=0,r="";for(let m=0;m<8;m++)r+=String.fromCharCode(e.getUint8(t++));if(r!==By)throw new Error("not a NEXARA strand asset");const n=e.getUint32(t,!0),a=e.getUint32(t+4,!0),s=e.getUint32(t+8,!0);t+=12;const o=[0,1,2].map(m=>e.getFloat32(t+m*4,!0)),c=[0,1,2].map(m=>e.getFloat32(t+12+m*4,!0));t+=24;const l=44+4*(n+1)+Wa(n)+Wa(a*6)+4*s;if(i.byteLength!==l)throw new Error("strand asset size mismatch");const u=new Uint32Array(n+1);for(let m=0;m<=n;m++,t+=4)u[m]=e.getUint32(t,!0);const h=new Float32Array(n);for(let m=0;m<n;m++)h[m]=e.getUint8(t+m)/255;t+=Wa(n);const d=new Float32Array(a*3);for(let m=0;m<a*3;m++){const v=m%3;d[m]=o[v]+(e.getInt16(t+m*2,!0)+32768)/65535*(c[v]-o[v]||1)}t+=Wa(a*6);const f=new Uint32Array(s);for(let m=0;m<s;m++,t+=4)f[m]=e.getUint32(t,!0);if(u[0]!==0||u[n]!==a)throw new Error("strand asset starts do not cover the points");for(let m=1;m<=n;m++)if(u[m]<u[m-1])throw new Error("strand asset starts are not ordered");for(let m=0;m<s;m++)if(f[m]>=a)throw new Error("strand asset node index out of range");for(let m=0;m<3;m++)if(!Number.isFinite(o[m])||!Number.isFinite(c[m])||o[m]>c[m])throw new Error("strand asset bounds are invalid");return{points:d,starts:u,ranks:h,nodes:f,directionCoverage:1}}const Kl=0,vl=1,zu=(i,e)=>{let t="";for(let r=0;r<32;r++)t+=i.getUint8(e+r).toString(16).padStart(2,"0");return t};function Hy(i){const e=new DataView(i);if(i.byteLength<76)throw new Error("strand binding too short");let t="";for(let o=0;o<8;o++)t+=String.fromCharCode(e.getUint8(o));if(t!=="NXSTB001"&&t!=="NXSTB002")throw new Error("not a NEXARA strand binding");const r=e.getUint32(8,!0),n=t==="NXSTB002"?4*Math.ceil(r/4):0;if(i.byteLength!==76+n+r*32)throw new Error("strand binding size mismatch");const a={format:t,strandsSha256:zu(e,12),glbSha256:zu(e,44),owners:new Uint8Array(r),points:new Uint32Array(r),triangles:new Uint32Array(r),bary:new Float32Array(r*3),offsets:new Float32Array(r*3)};let s=76;if(t==="NXSTB002"){for(let o=0;o<r;o++){const c=e.getUint8(s+o);if(c!==Kl&&c!==vl)throw new Error("strand binding owner role is invalid");a.owners[o]=c}for(let o=r;o<n;o++)if(e.getUint8(s+o)!==0)throw new Error("strand binding role padding is not zero");s+=n}for(let o=0;o<r;o++,s+=4)a.points[o]=e.getUint32(s,!0);for(let o=0;o<r;o++,s+=4)a.triangles[o]=e.getUint32(s,!0);for(let o=0;o<r*3;o++,s+=4)a.bary[o]=e.getFloat32(s,!0);for(let o=0;o<r*3;o++,s+=4)a.offsets[o]=e.getFloat32(s,!0);for(let o=1;o<r;o++)if(a.points[o]<=a.points[o-1])throw new Error("strand binding points are not strictly ascending");for(let o=0;o<r;o++){const c=a.bary[o*3],l=a.bary[o*3+1],u=a.bary[o*3+2];if(![c,l,u].every(h=>Number.isFinite(h)&&h>=-1e-6)||Math.abs(c+l+u-1)>1e-5)throw new Error("strand binding barycentrics are invalid")}if(!a.offsets.every(Number.isFinite))throw new Error("strand binding offsets are not finite");return a}function Vu(i,e){const t=i.ranks.length,r=new Int32Array(i.points.length/3).fill(-1),n=[],a=[0],s=[],o=[];for(let l=0;l<t;l++)if(e(l)){n.push(l),s.push(i.ranks[l]);for(let u=i.starts[l];u<i.starts[l+1];u++)r[u]=o.length/3,o.push(i.points[u*3],i.points[u*3+1],i.points[u*3+2]);a.push(o.length/3)}const c=[];for(const l of i.nodes)r[l]>=0&&c.push(r[l]);return{sub:{points:new Float32Array(o),starts:new Uint32Array(a),ranks:new Float32Array(s),nodes:new Uint32Array(c),directionCoverage:i.directionCoverage},strands:n,pointMap:r}}function zy(i,e,t){const r=i.points.length/3,n=i.ranks.length,a=new Uint32Array(r);for(let h=0;h<n;h++)for(let d=i.starts[h];d<i.starts[h+1];d++)a[d]=h;const s=new Uint8Array(n),o=t[Kl]?.deltas.length??0;for(const h of t){if(!h||h.deltas.length!==o)throw new Error("owner meshes must carry the same targets");for(const d of h.deltas)if(d.length!==h.triangleCount*9)throw new Error("owner corner deltas do not match the triangle count")}for(let h=0;h<e.points.length;h++){const d=t[e.owners[h]];if(!d)throw new Error("strand binding owner mesh is missing");if(e.points[h]>=r)throw new Error("strand binding point out of range");if(e.triangles[h]>=d.triangleCount)throw new Error("strand binding triangle out of range");s[a[e.points[h]]]=1}const c=Vu(i,h=>s[h]===1),l=Vu(i,h=>s[h]===0),u=Array.from({length:o},()=>new Float32Array(c.sub.points.length));for(let h=0;h<e.points.length;h++){const d=c.pointMap[e.points[h]]*3,f=e.triangles[h],m=t[e.owners[h]].deltas;for(let v=0;v<o;v++){const p=m[v];for(let g=0;g<3;g++){let M=0;for(let A=0;A<3;A++)M+=e.bary[h*3+A]*p[(f*3+A)*3+g];u[v][d+g]=M}}}return{moving:c.sub,movingStrands:new Uint32Array(c.strands),rest:l.sub,deltas:u,boundPoints:e.points.length}}const Vy=["BOOTING","IDLE","LISTENING","THINKING","SPEAKING","INTERRUPTED","ERROR"],Gy={BOOTING:{glow:.6,crown:.5,crownPulse:0,core:.6,desaturate:0,conversationActive:!1},IDLE:{glow:1,crown:1,crownPulse:0,core:1,desaturate:0,conversationActive:!1},LISTENING:{glow:1.1,crown:1.15,crownPulse:0,core:1.1,desaturate:0,conversationActive:!0},THINKING:{glow:1,crown:1.2,crownPulse:.35,core:1,desaturate:0,conversationActive:!0},SPEAKING:{glow:1.2,crown:1.1,crownPulse:0,core:1.3,desaturate:0,conversationActive:!0},INTERRUPTED:{glow:.85,crown:.8,crownPulse:0,core:.8,desaturate:0,conversationActive:!0},ERROR:{glow:.7,crown:.6,crownPulse:0,core:.5,desaturate:.7,conversationActive:!1}};function ho(i){return Gy[i]}function Wy(i){return typeof i=="string"&&Vy.includes(i)}const Xy=["complete","stop","cancel","interrupt","error"],nn=["yaw","pitch","roll"],ci=()=>({yaw:0,pitch:0,roll:0}),ms=i=>{const e=Math.min(1,Math.max(0,i));return e*e*(3-2*e)};function jy(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Gu(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}function Yy(i){return i.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase()}function qy(i,e){return Object.prototype.hasOwnProperty.call(e.shapes,i)?e.shapes[i]:Object.prototype.hasOwnProperty.call(e.pauses,i)?{}:/\p{L}/u.test(i)?e.consonant:/\p{N}/u.test(i)?e.digit:e.other}function Wu(i,e,t){const r=i.speech,n=[];let a=r.lead;for(const M of e){const A=Yy(M);n.push([a,qy(A,r)]),a+=1/r.rate+(Object.prototype.hasOwnProperty.call(r.pauses,A)?r.pauses[A]:0)}const s=n.length?a:0,o=s+r.settle;if(o>ps)throw new RangeError(`utterance would last ${o.toFixed(1)} s; the limit is ${ps} s`);const c=r.sampleHz,l=Math.ceil(s*c)+1,u=new Set;for(const M of[...Object.values(r.shapes),r.consonant,r.digit,r.other])for(const A of Object.keys(M))u.add(A);const h=i.targets.filter(M=>u.has(M)),d={};for(const M of h)d[M]=new Float64Array(l);const f=Object.fromEntries(h.map(M=>[M,0])),m=h.includes("jawOpen")?"jawOpen":null,v=1-Math.exp(-1/(c*r.attack)),p=1-Math.exp(-1/(c*r.release));let g=0;for(let M=0;M<l;M++){const A=M/c;for(;g+1<n.length&&n[g+1][0]<=A;)g++;const b=n.length>0&&A>=n[0][0]&&A<s,T=R=>b?(n[g][1][R]??0)*r.intensity:0,E=m!==null&&T(m)>f[m]?v:p;for(const R of h)f[R]+=(T(R)-f[R])*E,d[R][M]=f[R]}return{end:s,duration:o,n:l,hz:c,channels:h,w:d,head:Kh(i,s,l,c,t)}}function Kh(i,e,t,r,n){const a=i.tilt,s=jy(n),o=[];for(let h=a.firstAt;h<e-a.endGuard;h+=a.interval+a.intervalSpread*s())o.push([h,{yaw:(s()*2-1)*a.limitsDeg.yaw,pitch:(s()*2-1)*a.limitsDeg.pitch,roll:(s()*2-1)*a.limitsDeg.roll}]);const c={yaw:new Float64Array(t),pitch:new Float64Array(t),roll:new Float64Array(t)},l=ci();let u=-1;for(let h=0;h<t;h++){const d=h/r;for(;u+1<o.length&&o[u+1][0]<=d;)u++;for(const f of nn){const m=u>=0&&d<e?o[u][1][f]:0;l[f]+=(m-l[f])*(1-Math.exp(-1/(r*a.ease))),c[f][h]=l[f]}}return c}const Xu=(i,e)=>Math.max(1,Math.ceil(i*e/1e3-1e-9));function Zh(i){const{rateHz:e,voice:t}=i.envelope;if(!Number.isInteger(e)||e<10||e>200)return`rateHz must be an integer in 10..200, not ${e}`;if(!Number.isFinite(i.durationMs)||!(i.durationMs>0)||i.durationMs>12e4)return`durationMs must be in (0, 120000], not ${i.durationMs}`;if(!Array.isArray(t)||t.length!==Xu(i.durationMs,e))return`the voice track must have ${Xu(i.durationMs,e)} frames`;for(let r=0;r<t.length;r++){const n=t[r];if(typeof n!="number"||!Number.isFinite(n)||n<0||n>1)return`voice level ${r} must be a finite number in [0, 1]`}return!Number.isFinite(i.offsetMs)||i.offsetMs<0||i.offsetMs>=i.durationMs?`offsetMs must be in [0, durationMs), not ${i.offsetMs}`:!Number.isFinite(i.gain)||i.gain<0||i.gain>20?`gain must be in [0, 20], not ${i.gain}`:null}function $y(i,e,t){const r=Zh(e);if(r)throw new RangeError(r);const n=i.speech,a=n.sampleHz,s=(e.durationMs-e.offsetMs)/1e3,o=s+n.settle,c=Math.ceil(s*a)+1,l=n.shapes.a??{},u=i.targets.filter(g=>(l[g]??0)!==0),h={};for(const g of u)h[g]=new Float64Array(c);const d=1-Math.exp(-1/(a*n.attack)),f=1-Math.exp(-1/(a*n.release)),{rateHz:m,voice:v}=e.envelope;let p=0;for(let g=0;g<c;g++){const M=e.offsetMs+1e3*g/a,A=Math.floor(M*m/1e3),b=M<e.durationMs&&A<v.length?v[A]:0,T=Math.min(1,Math.max(0,b*e.gain));p+=(T-p)*(T>p?d:f);for(const E of u)h[E][g]=p*(l[E]??0)*n.intensity}return{end:s,duration:o,n:c,hz:a,channels:u,w:h,head:Kh(i,s,c,a,t)}}function Ky(i,e){return i*e}function ju(i,e,t){if(!(t>=0)||t>=i.duration)return 0;const r=n=>{const a=Math.max(0,Math.min(i.n-1,n*i.hz)),s=Math.floor(a),o=a-s;return s+1<i.n?e[s]*(1-o)+e[s+1]*o:e[i.n-1]};return t<=i.end?r(t):r(i.end)*(1-ms((t-i.end)/(i.duration-i.end)))}const si=()=>({weights:{},head:ci()}),Zy=i=>Object.values(i.weights).every(e=>e===0)&&nn.every(e=>i.head[e]===0);function po(i,e,t,r=!1){return Zy(i)?null:{t0:e,dur:t,terminal:r,...i}}function gs(i,e,t=1){for(const[r,n]of Object.entries(e))i[r]=(i[r]??0)+n*t}function _l(i,e,t){const r={};gs(r,i.weights,1-t),gs(r,e.weights,t);const n=ci();for(const a of nn)n[a]=i.head[a]*(1-t)+e.head[a]*t;return{weights:r,head:n}}function fo(i,e,t){return!i||t>=i.t0+i.dur?e:_l(i,e,ms((t-i.t0)/i.dur))}function Yu(i){if(typeof i!="number"||!Number.isFinite(i))throw new RangeError(`time must be a finite number of seconds, got ${i}`)}function qu(i){for(const e of["epoch","turn","chunk","segment"]){const t=i?.[e];if(!Number.isSafeInteger(t)||t<0)throw new RangeError(`delivery key ${e} must be a non-negative integer, got ${t}`)}}const Jy=(i,e)=>i.epoch===e.epoch&&i.turn===e.turn&&i.chunk===e.chunk&&i.segment===e.segment;function mo(i){const e=i.resetSeconds,t=i.transition.fade,r=i.headBoundsDeg;let n=-1/0,a="IDLE",s=!1,o=-1,c=-1,l=null,u=null,h="neutral",d=0,f={t0:-1/0,dur:t,...si()},m={t0:-1/0,dur:t,from:1},v=null,p=null;const g=i.sigh.keys,M=g[g.length-1].t;let A=0,b=[-1,-1],T=null;const E=(i.speech.shapes.a?.jawOpen??0)*i.speech.intensity;function R(L){if(Yu(L),L<n)throw new RangeError(`commands must come in time order (got ${L} after ${n})`);n=L,u&&L>=u.t0+u.dur&&(u=null),p&&L>=p.t0+p.dur&&(p=null),l&&L-l.start>=l.curve.duration&&(l=null),v&&L-v.start>=M&&(v=null)}function x(L,z){if(!L)return si();const ae=z-L.start,we={};for(const Ue of L.curve.channels)we[Ue]=ju(L.curve,L.curve.w[Ue],ae);const Ce=ci();if(L.tilts)for(const Ue of nn)Ce[Ue]=ju(L.curve,L.curve.head[Ue],ae);return{weights:we,head:Ce}}function S(L){return fo(u,x(l,L),L)}function N(){if(h==="neutral"||d===0)return si();const L=i.presets[i.emotions[h]],z={};return gs(z,L.weights,d),{weights:z,head:{yaw:L.head.yaw*d,pitch:L.head.pitch*d,roll:L.head.roll*d}}}function P(){return h==="neutral"||d===0||!i.emotionGlow?1:1+(i.emotionGlow[h]-1)*d}function B(L){const z=P();if(s||!(m.dur>0))return z;const ae=ms((L-m.t0)/m.dur);return ae>=1?z:m.from*(1-ae)+z*ae}function Q(L){const z=N();return s?{weights:z.weights,head:ci()}:fo(f.dur>0?f:null,z,L)}function J(L){if(!v)return si();const z=L-v.start;if(!(z>=0)||z>=M)return si();let ae=0;for(;ae+1<g.length&&g[ae+1].t<=z;)ae++;const we=g[ae],Ce=g[Math.min(ae+1,g.length-1)],Ue=Ce.t>we.t?ms((z-we.t)/(Ce.t-we.t)):0,K=_l(we,Ce,Ue);return _l(si(),K,v.intensity)}function V(L){return fo(p,J(L),L)}function Y(L){!l&&u?.terminal||(u=po(S(L),L,e,!0),l=null)}function q(L){!v&&p?.terminal||(p=po(V(L),L,e,!0),v=null)}function te(){return!!v||!!p&&!p.terminal}function oe(L,z,ae,we,Ce){o=Math.max(o,L.turn),b=[L.turn,L.chunk],Y(Ce),s||(l={turn:L.turn,start:Ce,curve:ae,tilts:!0}),T={key:{epoch:L.epoch,turn:L.turn,chunk:L.chunk,segment:L.segment},mode:z,ended:!1,cutSinceSegment:!1,segStartOffsetMs:we,endsAt:Ce+ae.duration}}return{table:i,setPresence(L,z){if(!Wy(L))throw new RangeError(`unknown presence state ${String(L)}`);R(z),a==="SPEAKING"&&L!=="SPEAKING"&&(Y(z),T&&(T.cutSinceSegment=!0)),(L==="INTERRUPTED"||L==="ERROR")&&q(z),a=L},speak(L,z,ae){if(typeof z!="string")throw new TypeError("text must be a string");if(R(ae),!Number.isSafeInteger(L)||L<0)throw new RangeError(`turn must be a non-negative integer, got ${L}`);if(L<=o||a!=="SPEAKING")return!1;const we=Wu(i,z,Gu(`nexara-tilt:${L}`));return oe({epoch:A,turn:L,chunk:0,segment:0},"animation",we,0,ae),!0},startDelivery(L,z,ae){if(z?.mode!=="audio"&&z?.mode!=="animation")throw new RangeError(`unknown delivery mode ${String(z?.mode)}`);if(typeof z.text!="string")throw new TypeError("text must be a string");if(R(ae),qu(L),a!=="SPEAKING"||L.epoch!==A||z.mode==="audio"&&Zh(z)!==null)return!1;const we=z.mode==="audio"?z.offsetMs:0,Ce=L.segment===0&&(L.turn>b[0]||L.turn===b[0]&&L.chunk>b[1])&&L.turn>c,Ue=!!T&&!T.ended&&L.turn===T.key.turn&&L.chunk===T.key.chunk&&L.segment===T.key.segment+1&&z.mode===T.mode&&T.cutSinceSegment&&(z.mode!=="audio"||we>=T.segStartOffsetMs);if(!Ce&&!Ue)return!1;const K=Gu(`nexara-tilt:${L.epoch}:${L.turn}:${L.chunk}:${L.segment}`);let re;try{re=z.mode==="audio"?$y(i,z,K):Wu(i,z.text,K)}catch(ie){if(ie instanceof RangeError)return!1;throw ie}return oe(L,z.mode,re,we,ae),!0},endDelivery(L,z){return R(z),qu(L),!T||T.ended||!Jy(T.key,L)?!1:(Y(z),T.ended=!0,!0)},resetSession(L,z){if(R(z),!Number.isSafeInteger(L)||L<0)throw new RangeError(`epoch must be a non-negative integer, got ${L}`);return L<=A?!1:(A=L,Y(z),q(z),T=null,b=[-1,-1],o=-1,c=-1,!0)},endTurn(L,z,ae){if(!Xy.includes(ae))throw new RangeError(`unknown turn end reason ${String(ae)}`);if(R(z),!Number.isSafeInteger(L)||L<0)throw new RangeError(`turn must be a non-negative integer, got ${L}`);return L<o||L<=c?!1:(o=L,c=L,Y(z),q(z),T&&(T.ended=!0),!0)},setEmotion(L,z,ae){if(!ds.includes(L))throw new RangeError(`unknown emotion ${String(L)}`);if(typeof z!="number"||!Number.isFinite(z)||z<0||z>1)throw new RangeError(`intensity must be in 0..1, got ${z}`);R(ae);const we=Q(ae),Ce=B(ae);h=L,d=L==="neutral"?0:z,f={t0:ae,dur:t,terminal:!1,...we},m={t0:ae,dur:t,from:Ce}},sigh(L,z=1){if(typeof z!="number"||!Number.isFinite(z)||z<=0||z>1)throw new RangeError(`sigh intensity must be in (0, 1], got ${z}`);return R(L),s?!1:(p=po(V(L),L,t),v={start:L,intensity:z},!0)},cancelSigh(L){return R(L),te()?(q(L),!0):!1},setReducedMotion(L,z){if(R(z),L!==s)if(L)s=!0,l=null,u=null,v=null,p=null;else{const ae={weights:N().weights,head:ci()};s=!1,f={t0:z,dur:t,terminal:!1,...ae},m={t0:z,dur:0,from:P()}}},clear(L){R(L),l=null,u=null,v=null,p=null,h="neutral",d=0,f={t0:L,dur:0,terminal:!1,...si()},m={t0:L,dur:0,from:1}},sample(L){if(Yu(L),L<n)throw new RangeError(`sample time ${L} is before the last command (${n})`);const z={},ae=ci(),we=s?si():S(L),Ce=s?[Q(L)]:[we,Q(L),V(L)];for(const ie of Ce){gs(z,ie.weights);for(const De of nn)ae[De]+=ie.head[De]}const Ue={};for(const ie of i.targets)Ue[ie]=Math.min(1,Math.max(0,z[ie]??0));const K=ci();if(!s)for(const ie of nn)K[ie]=Math.min(r[ie],Math.max(-r[ie],ae[ie]))||0;const re=E>0?Math.min(1,Math.max(0,(we.weights.jawOpen??0)/E)):0;return{weights:Ue,head:K,glow:B(L),speechLevel:re}},state(){return{presence:a,reducedMotion:s,turn:o,speaking:!!l&&n-l.start<l.curve.duration,tilts:!!l&&l.tilts,emotion:h,intensity:d,sigh:te(),epoch:A,delivery:T?{key:{...T.key},mode:T.mode,ended:T.ended,endsAt:T.endsAt}:null}}}}const xl=Object.freeze({version:"nexara-glow/1.0.0",speakingGain:.12});function $u(i){const e=i?.emotionGlow?Object.values(i.emotionGlow):[];return 2*Math.max(1,...e)}function Qy(i,e,t,r,n=xl){return Math.min(Ky(i,e)*(1+n.speakingGain*t),r)}const eb={complete:"complete",interrupted:"interrupt",failed:"error",revoked:"stop"};function tb(i,e){let t,r=0,n=new Set,a=null,s=null,o=!1,c=null,l=null,u=null,h=null;const d={starts:0,resumes:0,refused:0,lateFrames:0,deliveryEnds:0,turnEnds:0,unknownEnds:0,resets:0,emotions:0,unknownEmotions:0};function f(m){const v=i.transcript().find(g=>g.turnId===m)?.status;return(v===void 0?void 0:eb[v])||(d.unknownEnds++,"stop")}return{sync(m){const v=m/1e3,p=i.snapshot(m),g=i.delivery(m);p.sessionId!==t&&(t&&(r+=1,e.resetSession(r,v),d.resets++,n=new Set,a=null,s=null,c=null,l=null,u=null,h=null),t=p.sessionId),p.reducedMotion!==l&&(e.setReducedMotion(p.reducedMotion,v),l=p.reducedMotion);const M=`${p.emotion}:${p.emotionIntensity}`;if(M!==h)if(h=M,ds.includes(p.emotion)&&Number.isFinite(p.emotionIntensity)){const E={emotion:p.emotion,intensity:Math.min(1,Math.max(0,p.emotionIntensity))};e.setEmotion(E.emotion,E.intensity,v),u=E,d.emotions++}else d.unknownEmotions++;if(a&&a.turnId!==p.activeTurnId&&(e.endTurn(a.ordinal,v,f(a.turnId)),d.turnEnds++,a=null,s=null),s&&!(g&&g.turnId===s.turnId&&g.captionIndex===s.key.chunk)&&(e.endDelivery(s.key,v),d.deliveryEnds++,s=null),o=!!s&&!!g&&g.stalled,p.state!==c&&(e.setPresence(p.state,v),c=p.state),p.state!=="SPEAKING"||!g||g.stalled)return;const A={epoch:r,turn:g.turnOrdinal,chunk:g.captionIndex,segment:g.segment},b=`${A.turn}:${A.chunk}:${A.segment}`;if(n.has(b))return;n.add(b);let T;if(g.mode==="audio"){const E=g.anchorOffsetMs+(m-g.anchorAt);if(E>=g.durationMs){d.lateFrames++;return}T={mode:"audio",text:g.text,envelope:g.envelope,gain:i.config.l1JawGain,offsetMs:Math.max(0,E),durationMs:g.durationMs}}else T={mode:"animation",text:g.text};if(!e.startDelivery(A,T,v)){d.refused++;return}s={key:A,turnId:g.turnId},o=!1,a={turnId:g.turnId,ordinal:g.turnOrdinal},A.segment>0?d.resumes++:d.starts++},stats(){return{...d}},state(){let m=null;if(s&&!o){const v=e.state().delivery;v&&!v.ended&&v.key.epoch===s.key.epoch&&v.key.turn===s.key.turn&&v.key.chunk===s.key.chunk&&v.key.segment===s.key.segment&&(m=v.endsAt*1e3)}return{epoch:r,heldTurn:a?{...a}:null,running:s?{...s.key}:null,runningEndsAt:m,presence:c,reducedMotion:l,emotion:u?{...u}:null}}}}function rb(i,e,t){const r=tb(i,e);let n=-1/0,a=null,s=null;return{adapter:r,sync(o){const c=Math.max(o,n);r.sync(c),n=c;const l=r.state();l.reducedMotion!==null&&l.reducedMotion!==s&&(s=l.reducedMotion,t.reducedMotion(s)),l.presence!==null&&l.presence!==a&&(a=l.presence,t.presence(a))},faceTime:()=>n/1e3}}function ib(i){const e=new Set;let t=!1;return{add(r){return t?()=>{}:(e.add(r),()=>{e.delete(r)})},run(r){for(const n of[...e]){if(t||!r())return!1;if(e.has(n))try{n()}catch(a){i(a)}}return!t&&r()},close(){t=!0,e.clear()}}}function nb(i,e){let t={...i};const r=new Set;let n=!1;const a=()=>({...t,framesDrawn:e()});return{status:a,subscribe(s){return n?()=>{}:(r.add(s),()=>{r.delete(s)})},set(s){if(n)return;const o={...t,...s};if(o.head===t.head&&o.drawable===t.drawable&&o.net===t.net&&o.lastError===t.lastError)return;t=o;const c=a();for(const l of[...r]){if(n)return;if(r.has(l))try{l({...c})}catch{}}},close(){n=!0,r.clear()}}}function Ku(i,e){try{return i(),!0}catch(t){return e(t),!1}}const ab={high:{maxPixelRatio:2,bloom:!0,bloomScale:.5,sparkles:2400,arcs:30,lattice:!0,strands:1},medium:{maxPixelRatio:1.5,bloom:!0,bloomScale:.35,sparkles:1200,arcs:18,lattice:!0,strands:.6},low:{maxPixelRatio:1,bloom:!1,bloomScale:0,sparkles:250,arcs:8,lattice:!1,strands:0}},Xa=["high","medium","low"],sb={downMs:25,downAfter:2,upMs:12,upAfter:8,alpha:.1};function Zu(i){return{tier:i,avgMs:16.7,slowFor:0,fastFor:0}}function Ju(i,e,t=sb){const r=Math.min(Math.max(e,0),250),n=i.avgMs+t.alpha*(r-i.avgMs),a=r/1e3;let s=n>t.downMs?i.slowFor+a:0,o=n<t.upMs?i.fastFor+a:0,c=i.tier;const l=Xa.indexOf(c);return s>=t.downAfter&&l<Xa.length-1?(c=Xa[l+1],s=0,o=0):o>=t.upAfter&&l>0&&(c=Xa[l-1],s=0,o=0),{tier:c,avgMs:n,slowFor:s,fastFor:o}}function ob(i,e){return e?{...i,sparkles:Math.min(i.sparkles,200)}:i}function lb(i){const e=i.transparent===!0;return{clearAlpha:e?0:1,background:!e,halo:e,bloom:!e}}function cb(i){return typeof i=="number"&&Number.isFinite(i)&&i>0&&i<=40?null:`speechRate must be in (0, 40] characters per second, not ${String(i)}`}function ub(i){const e=i?.trim();if(e){if(fs(e))return e.startsWith("#")?e:`#${e}`;if(!(!/^(rgba?|hsla?)\(/i.test(e)&&!Object.prototype.hasOwnProperty.call(Ee.NAMES,e.toLowerCase())))return`#${new Ee().setStyle(e).getHexString()}`}}function hb(i,e,t,r){const n=new zx(i);n.addPass(new Vx(e,t));const a=new hn(new Ie(256,256),...r);return n.addPass(a),n.addPass(new Wx),{composer:n,bloom:a}}function db(i){for(const e of i.passes){e.dispose();for(const t of Object.values(e))for(const r of Array.isArray(t)?t:[t])(r instanceof Vt||r instanceof ur)&&r.dispose()}i.dispose()}function pb(i){let e=i,t=!1;return{step(r){const n=t?0:r-e;return t=!1,e=r,n},resume(){t=!0}}}let fb=0;function mb(i){const e=Zx(i.manifest);if(e.length)throw new Error(`invalid avatar manifest: ${e.join("; ")}`);const t=i.manifest,r=i.canvas;if(i.palette!==void 0&&i.palette!=="on-white")throw new RangeError(`unknown stage palette ${String(i.palette)}`);if(i.speechRate!==void 0){const C=cb(i.speechRate);if(C)throw new RangeError(C)}const n=lb(i),a=i.palette==="on-white"?oy(ub(i.accent)):null,s=C=>a??ay[C];let o={...i.look??zh},c=s(o.background),l=i.quality??"high",u=Zu(l),h=i.reducedMotion??!1,d="IDLE";const f=ey(t),m=Object.fromEntries(f.map(C=>[C,0])),v={yaw:0,pitch:0,roll:0},p=[],g=new Set(t.morphRoles??["head","mouthCavity"]);let M=null,A=null,b=null,T=[],E=null;const R=new D(...t.pivot?.point??[0,0,0]);let x=null,S=null,N=i.emotionGlow??!0,P=1,B=0,Q=$u(null);const J=()=>Qy(o.glow,P,B,Q);let V="manual",Y=null,q=0;const te=++fb,oe=()=>Y?Y.follower.faceTime():Ae,L={...Ti,pitchMinDeg:t.orbit.pitchMinDeg,pitchMaxDeg:t.orbit.pitchMaxDeg,dampingSeconds:t.orbit.dampingSeconds};let z=Ty(i.initialYawDeg??t.camera.canonicalYawDeg,i.initialPitchDeg??0,L);const ae=new ex({canvas:r,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});ae.outputColorSpace=At,ae.toneMapping=vr,ae.setClearColor(0,n.clearAlpha);const we=new ef,Ce=new zt(t.camera.fovDeg,1,.05,60),Ue=new D(...t.camera.target),K=Ly(t.orbit.zoom.minScale,t.orbit.zoom.maxScale,t.boundingBox.min,t.boundingBox.max,t.camera.target,t.orbit.zoom.aim);let re=ml(i.initialZoom??1,i.initialAim??[0,0,0],K);const ie=new D,De=_y(c);De.visible=n.background,we.add(De);const Oe=n.halo&&c.haloAlpha?xy(c):null;Oe&&we.add(Oe);const ye=new lr;ye.name="nexara-avatar",we.add(ye);const et={fromY:t.neckFade.fromY,toY:t.neckFade.toY},Ge=uy(c,o,et),Be=hy(c,o);let Xe=null,ht=null,Et=null,ct=null,_t=0,qe=!1;const pt=new D(...t.core.position);function gt(){Xe&&(we.remove(Xe.group),Me(Xe.group)),ht&&(we.remove(ht.group),Me(ht.group)),Xe=by(c),ht=My(c,pt,t.neckFade.fromY),Et=o.background,we.add(Xe.group,ht.group),_()}function U(){return hb(ae,we,Ce,c.bloom)}let{composer:bt,bloom:$e}=U();function w(){return ob(ab[l],h)}function _(){const C=w();Xe&&(Xe.group.visible=o.network,Xe.setCounts(C.sparkles,C.arcs),Xe.sparkleMaterial.uniforms.uTwinkle.value=h?0:1),ht&&(ht.group.visible=o.core),Ge.uniforms.uLatticeAlpha.value=C.lattice?c.latticeAlpha:0,x&&fl(x,c,o,void 0,C.lattice),Be.uniforms.uWeb.value=o.crown==="web"&&C.lattice?1:0,W(o.surface),$e.enabled=k(),$e.strength=c.bloom[0]*J(),$e.radius=c.bloom[1],$e.threshold=c.bloom[2]}function k(){return n.bloom&&w().bloom&&o.glow>0&&o.surface==="hologram"}function W(C){const j=C!=="hologram",ee=C==="mask"?2:j?1:0;Ge.uniforms.uNeutral.value=ee,x&&(x.uniforms.uNeutral.value=ee),Be.uniforms.uNeutral.value=ee,De.visible=n.background&&C!=="mask",Oe&&(Oe.visible=C==="hologram"),C==="mask"&&(Xe&&(Xe.group.visible=!1),ht&&(ht.group.visible=!1));for(const fe of[Ge,Be]){const me=!j;fe.transparent!==me&&(fe.transparent=me,fe.needsUpdate=!0)}Be.depthWrite=j}function $(){c=s(o.background),dy(Ge,c,o,et),py(Be,c,o),x&&fl(x,c,o,void 0,w().lattice),Nu(De,c,Ce.aspect),Oe&&Iu(Oe,c,Ce.aspect),Et!==o.background?gt():_(),ce()}function ce(){const C=ho(d);Ge.uniforms.uGlow.value=J()*C.glow,Ge.uniforms.uDesaturate.value=C.desaturate,x&&(x.uniforms.uGlow.value=o.glow*C.glow,x.uniforms.uDesaturate.value=C.desaturate),Be.uniforms.uGlow.value=J()*C.crown,Be.uniforms.uPulse.value=h?0:C.crownPulse,Be.uniforms.uDesaturate.value=C.desaturate,ht?.setIntensity(C.core)}function pe(){const C=Math.max(1,r.clientWidth),j=Math.max(1,r.clientHeight),ee=Math.min(window.devicePixelRatio||1,w().maxPixelRatio);ae.setPixelRatio(ee),ae.setSize(C,j,!1),bt.setPixelRatio(ee),bt.setSize(C,j);const fe=Math.max(w().bloomScale,.1);$e.setSize(Math.max(1,Math.round(C*ee*fe)),Math.max(1,Math.round(j*ee*fe))),Ce.aspect=C/j;const me=t.camera.fovDeg,We=.62;if(Ce.aspect<We){const Qe=Math.atan(Math.tan(me*Math.PI/360)*We/Ce.aspect);Ce.fov=Qe*360/Math.PI}else Ce.fov=me;Ce.updateProjectionMatrix(),Nu(De,c,Ce.aspect),Oe&&Iu(Oe,c,Ce.aspect),Xe&&(Xe.sparkleMaterial.uniforms.uPixelRatio.value=ee)}function O(){const[C,j,ee]=Py(z.yawDeg,z.pitchDeg,t.camera.distance/re.scale);ie.set(Ue.x+re.aim[0],Ue.y+re.aim[1],Ue.z+re.aim[2]),Ce.position.set(ie.x+C,ie.y+j,ie.z+ee),Ce.up.set(0,1,0),Ce.lookAt(ie)}const he=new nm,de=new oi,Te=new D,se=new Ie;function ke(C,j){if(C===void 0||j===void 0)return[...re.targetAim];O(),Ce.updateMatrixWorld();const ee=r.getBoundingClientRect();se.set((C-ee.left)/ee.width*2-1,-((j-ee.top)/ee.height)*2+1),he.setFromCamera(se,Ce);const fe=Ce.getWorldDirection(new D);return de.setFromNormalAndCoplanarPoint(fe,ie),he.ray.intersectPlane(de,Te)?[Te.x-Ue.x,Te.y-Ue.y,Te.z-Ue.z]:[...re.targetAim]}function Ne(C,j,ee){re=gl(re,C,ke(j,ee),K),z={...z,userHasInteracted:!0}}const He=new Ee;let Ae=i.fixedTime??0,I=0;const Z=nb({head:"loading",drawable:!0,net:t.decorations?.crownStrands&&i.strandsUrl?"loading":"absent",lastError:null},()=>I),le=ib(C=>Z.set({lastError:`frame callback: ${String(C)}`}));function xe(){if(qe||er||Ir)return;O();const C=i.fixedTime??Ae;if(Ge.uniforms.uTime.value=h?0:C,Be.uniforms.uTime.value=h?0:C,ct){const j=w(),ee=di((re.scale-1)/2,0,1);_t=j.strands*(.4+.3*ee),ct.group.visible=o.crown==="web"&&o.surface==="hologram"&&j.strands>0;const fe=ho(d);ct.update({visible:_t,intensity:Math.max(J(),.4)*fe.crown,core:Be.uniforms.uLattice.value,sheath:He.set(c.crownSheath),pixelRatio:ae.getPixelRatio(),time:h?0:C,pulse:h?0:fe.crownPulse})}Xe&&(Xe.sparkleMaterial.uniforms.uTime.value=h?0:C,!h&&i.fixedTime===void 0&&(Xe.group.rotation.y=C*.01)),k()?bt.render():ae.render(we,Ce),I++,Z.status().drawable||Z.set({drawable:!0})}const ge=new Map;let ne=0;const Pe=()=>{const[C,j]=[...ge.values()];return{x:(C.x+j.x)/2,y:(C.y+j.y)/2,d:Math.hypot(C.x-j.x,C.y-j.y)}},be=C=>{ge.set(C.pointerId,{x:C.clientX,y:C.clientY}),r.setPointerCapture(C.pointerId),ge.size===2&&(ne=Pe().d)},Nt=C=>{const j=ge.get(C.pointerId);if(j&&(ge.size===1&&(z=Ey(z,C.clientX-j.x,C.clientY-j.y,L)),j.x=C.clientX,j.y=C.clientY,ge.size===2)){const ee=Pe();ne>0&&ee.d>0&&Ne(ee.d/ne,ee.x,ee.y),ne=ee.d}},rt=C=>{ge.delete(C.pointerId),ne=ge.size===2?Pe().d:0},Wt=C=>{C.preventDefault();const j=C.deltaMode===1?C.deltaY*33:C.deltaMode===2?C.deltaY*400:C.deltaY;Ne(Ny(j,K),C.clientX,C.clientY)};r.addEventListener("pointerdown",be),r.addEventListener("pointermove",Nt),r.addEventListener("pointerup",rt),r.addEventListener("pointercancel",rt),r.addEventListener("wheel",Wt,{passive:!1}),r.style.touchAction="none";const Xt=new ResizeObserver(()=>{pe(),hr&&wi()});Xt.observe(r);function Ss(){const C=new Set,j=ee=>{if(!ee||typeof ee!="object"||C.has(ee))return;C.add(ee);const fe=ee._listeners;fe?.dispose&&(fe.dispose=[])};we.traverse(ee=>{const fe=ee;j(fe.geometry);const me=Array.isArray(fe.material)?fe.material:fe.material?[fe.material]:[];for(const We of me){j(We);for(const Ye of Object.values(We))Ye instanceof xt&&j(Ye);const Qe=We.uniforms;if(Qe)for(const Ye of Object.values(Qe))Ye.value instanceof xt&&j(Ye.value)}}),{composer:bt,bloom:$e}=U()}let Ir=!1;const xn=C=>{C.preventDefault(),Ir=!0,Z.set({drawable:!1})},Ei=()=>{Ss(),pe(),_(),Ir=!1,hr&&wi()};r.addEventListener("webglcontextlost",xn),r.addEventListener("webglcontextrestored",Ei);let Dr=0;const yn=pb(performance.now());let hr=!1,dr=!1;function wi(){dr&&!qe&&!er&&!Ir&&Ku(xe,Kr)}let bn=NaN,Sn=NaN,er=!1;function Ai(C){qe||er||hr||(Dr=requestAnimationFrame(Ai),!Ir&&le.run(()=>!qe&&!Ir&&!er)&&Ku(()=>sa(C),Kr))}function Kr(C){er=!0,cancelAnimationFrame(Dr),Z.set({drawable:!1,lastError:`render: ${String(C)}`})}function sa(C){const j=yn.step(C);Ae+=j/1e3,Y&&F(Y.clock()),S&&V==="driver"&&Ur();const ee=ho(d);if(z=Ry(z,{dt:j/1e3,reducedMotion:h,conversationActive:ee.conversationActive},L),re=Uy(re,Yh(L.dampingSeconds,di(j/1e3,0,.1)),h),i.adaptiveQuality){const We=Ju(u,j);We.tier!==u.tier&&(l=We.tier,pe(),_(),i.onTierChange?.(l)),u=We}else u=Ju(u,j);xe();const fe=Math.round(Du(z.yawDeg)*10)/10,me=Math.round(z.pitchDeg*10)/10;(fe!==bn||me!==Sn)&&(bn=fe,Sn=me,i.onOrientationChange?.(fe,me))}const Mn=(async()=>{const C=await iy(t,i.glbUrl);if(qe)return;let j=null;if(t.faceTable&&i.faceTableUrl&&(j=Yx(await es(t.faceTable,i.faceTableUrl),f,t.pivot?.boundsDeg??{yaw:0,pitch:0,roll:0}),qe))return;const ee=await new rx().parseAsync(C,"");if(qe){Me(ee.scene);return}const fe=new Map(t.components.map(Re=>[Re.node,Re.role])),me=[],We=[];ee.scene.traverse(Re=>{We.push(Re.name),Re.isMesh&&me.push(Re)});const Qe=ny(t,We);if(Qe.length)throw new Error(`avatar GLB lacks manifest nodes: ${Qe.join(", ")}`);for(const Re of me){const Se=fe.get(Re.name)??fe.get(Re.parent?.name??"");if(f.length&&Se!==void 0&&g.has(Se)){const wt=ty(f,Re.morphTargetDictionary);if(wt)throw new Error(`avatar GLB ${Re.name} ${wt}`);p.push(Re)}if(Se==="mouthCavity"){Re.geometry=Lu(fy(Re.geometry)),x=vy(c,o),o.surface!=="hologram"&&(x.uniforms.uNeutral.value=o.surface==="mask"?2:1),Re.material=x,Re.renderOrder=3,b=Re;continue}Re.geometry=Lu(Re.geometry),Se==="crown"?(Re.material=Be,Re.renderOrder=4,M=Re):(Re.material=Ge,Re.renderOrder=2,Se==="head"&&(A=Re))}if(f.length&&p.length!==g.size)throw new Error(`avatar GLB: speech targets need exactly one mesh for each of ${[...g].join(", ")}`);if(t.pivot){const Re=ee.scene.getObjectByName(t.pivot.node);if(!Re)throw new Error(`avatar GLB lacks the pivot node ${t.pivot.node}`);if(!Re.position.equals(new D)||Re.quaternion.w!==1||!Re.scale.equals(new D(1,1,1)))throw new Error(`pivot node ${t.pivot.node} must be identity at rest`);E=Re}j&&i.speechRate!==void 0&&(j={...j,speech:{...j.speech,rate:i.speechRate}}),j&&(S=mo(j),Q=$u(j),S.setReducedMotion(h,Ae),S.setPresence(d,Ae),V="driver"),Ri(),ue(),ye.add(ee.scene),gt(),pe(),ce(),xe(),dr=!0,hr||(Dr=requestAnimationFrame(Ai));const Ye=t.decorations?.crownStrands,at=i.strandsUrl;Ye&&at&&(async()=>{try{const Re=await es(Ye,at);if(qe)return;const Se=ky(Re);let wt;if(g.has("crown")&&f.length){const Ft=Ye.binding,jt=i.strandBindingUrl;if(!Ft||!jt)throw new Error("the crown moves but the strand binding is missing");const Yt=Hy(await es(Ft,jt));if(qe)return;if(Yt.strandsSha256!==Ye.sha256||Yt.glbSha256!==t.glb.sha256)throw new Error("the strand binding was made for a different strand asset or GLB");const Or=(ft,yr)=>{const tt=ft?.geometry,Zr=ft?.morphTargetDictionary,Fr=tt?.morphAttributes.position;if(!tt||!Zr||!Fr||tt.index)throw new Error(`the ${yr} has no morph targets on its non-indexed geometry`);return{deltas:f.map(oa=>Fr[Zr[oa]].array),triangleCount:tt.getAttribute("position").count/3}},it=[];it[Kl]=Or(M,"crown"),Yt.owners.includes(vl)&&(it[vl]=Or(A,"head")),wt={morph:zy(Se,Yt,it),names:f}}const tr=Fy(Se,wt);if(qe){Me(tr.group);return}ct=tr,T=tr.morphObjects,(E??ye).add(tr.group),Ri(),Z.set({net:"ready"})}catch(Re){qe||(console.warn("crown strands unavailable:",Re),Z.set({net:"failed",lastError:`net: ${String(Re)}`}))}})()})();Mn.then(()=>{qe||Z.set({head:"ready"})},C=>{qe||Z.set({head:"failed",net:Z.status().net==="loading"?"absent":Z.status().net,lastError:`head: ${String(C)}`})});function Ri(){for(const C of[...p,...T]){const j=C.morphTargetDictionary,ee=C.morphTargetInfluences;for(const[fe,me]of Object.entries(m))ee[j[fe]]=me}}function Ur(){const C=S.sample(oe());Object.assign(m,C.weights),Object.assign(v,C.head),Ri(),ue(),Tn(N?C.glow:1,N?C.speechLevel:0)}function Tn(C,j=0){C===P&&j===B||(P=C,B=j,ce(),$e.strength=c.bloom[0]*J())}function En(){if(!S)throw new Error("no face table loaded (speech asset with manifest.faceTable and faceTableUrl)");return S}function y(){if(Y)throw new Error("the stage follows a presence core: its face takes no direct commands");return En()}function F(C){Y.follower.sync(C)}const X={presence(C){d=C,ce()},reducedMotion(C){h=C,_(),ce()}},G=new Pr,H=new qr;function ue(){if(!E)return;const C=Math.PI/180;H.set(v.pitch*C,v.yaw*C,v.roll*C,"YXZ"),G.setFromEuler(H),E.quaternion.copy(G),E.position.copy(R).sub(R.clone().applyQuaternion(G))}function ve(C){for(const ee of Object.values(C))ee instanceof xt&&ee.dispose();const j=C.uniforms;if(j)for(const ee of Object.values(j))ee.value instanceof xt&&ee.value.dispose();C.dispose()}function Me(C){C.traverse(j=>{const ee=j;ee.geometry?.dispose?.();const fe=ee.material;Array.isArray(fe)?fe.forEach(ve):fe&&ve(fe)})}return{ready:Mn,setLook(C){o={...C},$()},getLook:()=>({...o}),setPresence(C){if(Y)throw new Error("the stage follows a presence core: its presence comes from the core");S?.setPresence(C,Ae),d=C,ce()},setFaceControl(C){if(C!=="driver"&&C!=="manual")throw new RangeError(`face control must be driver or manual, got ${String(C)}`);C==="driver"&&En(),V=C,C==="driver"?Ur():Tn(1)},speak:(C,j)=>y().speak(C,j,Ae),endTurn:(C,j)=>y().endTurn(C,Ae,j),startDelivery:(C,j)=>y().startDelivery(C,j,Ae),endDelivery:C=>y().endDelivery(C,Ae),resetSession:C=>y().resetSession(C,Ae),setEmotion:(C,j=1)=>y().setEmotion(C,j,Ae),sigh:(C=1)=>y().sigh(Ae,C),cancelSigh:()=>y().cancelSigh(Ae),clearFace(){y().clear(Ae),V==="driver"&&Ur()},followPresence(C,j={}){const ee=En().table;if(Y)throw new Error("the stage already follows a presence core");const fe=j.clock??(()=>performance.now());S=mo(ee);const me={follower:rb(C,S,X),clock:fe},We=`stage${te}-follower-${++q}`;return Y=me,F(fe()),V==="driver"&&Ur(),{notify(Qe){Y!==me||qe||(F(Qe??fe()),V==="driver"&&Ur())},stats:()=>me.follower.adapter.stats(),state(){const Qe=Y===me&&!qe,Ye=me.follower.adapter.state();return{owner:We,detached:!Qe,epoch:Ye.epoch,running:Qe&&Ye.running?{...Ye.running}:null,runningEndsAt:Qe?Ye.runningEndsAt:null}},detach(){Y===me&&(Y=null,S=mo(ee),S.setReducedMotion(h,Ae),S.setPresence(d,Ae),V==="driver"&&Ur())}}},setMorphWeights(C){for(const[j,ee]of Object.entries(C)){if(!(j in m))throw new RangeError(`unknown morph target ${j}`);if(!Number.isFinite(ee))throw new RangeError(`morph weight for ${j} must be finite`)}for(const[j,ee]of Object.entries(C))m[j]=Math.min(1,Math.max(0,ee));Ri()},getMorphWeights:()=>({...m}),setHeadPose(C){const j=t.pivot?.boundsDeg??{yaw:0,pitch:0,roll:0};for(const ee of["yaw","pitch","roll"]){if(!Number.isFinite(C[ee]))throw new RangeError(`head pose ${ee} must be finite`);v[ee]=Math.min(j[ee],Math.max(-j[ee],C[ee]))}ue()},getHeadPose:()=>({...v}),setEmotionGlow(C){N=!!C,N?S&&V==="driver"&&Ur():Tn(1)},setReducedMotion(C){if(Y)throw new Error("the stage follows a presence core: change the core's reduced-motion preference instead");h=C,S?.setReducedMotion(C,Ae),_(),ce()},setQuality(C){l=C,u=Zu(l),pe(),_(),i.onTierChange?.(l)},getQuality:()=>l,setOrientation(C,j,ee){z=ee?.animate?{...Ji(z,0,0,L),targetYawDeg:C,targetPitchDeg:di(j,L.pitchMinDeg,L.pitchMaxDeg)}:Ay(z,C,j,L)},getOrientation:()=>({yawDeg:Du(z.yawDeg),pitchDeg:z.pitchDeg}),isSettled:()=>Cy(z,.001)&&Oy(re),setZoom(C,j,ee){const fe=j??[0,0,0];if(ee?.animate){const me=ml(C,fe,K);re={...re,targetScale:me.targetScale,targetAim:me.targetAim}}else re=Dy(re,C,fe,K)},getZoom:()=>({scale:re.scale,aim:[...re.aim]}),zoomBy:Ne,resetToFront(){z=jh(z),re=Uu(re,K)},handleKey(C){const j=Iy(re,C,K);if(j)return re=j,!0;const ee=wy(z,C,L);return ee?(z=ee,C==="Home"&&(re=Uu(re,K)),!0):!1},renderNow(){if(!(qe||er||Ir))try{xe()}catch(C){throw Kr(C),C}},frameStats:()=>({avgMs:u.avgMs,tier:l}),debugInfo:()=>{const C=$e.renderTargetBright;return{disposed:qe,framesDrawn:I,textures:ae.info.memory.textures,geometries:ae.info.memory.geometries,tier:l,reducedMotion:h,presence:d,bloomEnabled:k(),bloomTargetPx:[C.width,C.height],crownWeb:Be.uniforms.uWeb.value,headLattice:Ge.uniforms.uLatticeAlpha.value,strands:{loaded:!!ct,visible:!!ct?.group.visible,share:_t,parent:ct?.group.parent?.name??null,...ct?.counts??{strands:0,segments:0,nodes:0,movingStrands:0,movingPoints:0,boundPoints:0},morphObjects:T.map(j=>j.name),morphInfluences:T[0]?Object.fromEntries(Object.entries(T[0].morphTargetDictionary).map(([j,ee])=>[j,T[0].morphTargetInfluences[ee]])):null},surface:o.surface,drawOrder:{head:A?.renderOrder??null,cavity:b?.renderOrder??null,headTransparent:Ge.transparent,headDepthWrite:Ge.depthWrite,cavityPolygonOffset:x?.polygonOffset?[x.polygonOffsetFactor,x.polygonOffsetUnits]:null},speech:{targets:[...f],morphMeshes:p.map(j=>j.name),weights:{...m},pivot:E?.name??null,pose:{...v},faceControl:V,face:S?.state()??null,faceTableVersion:S?.table.version??null,emotionGlow:{enabled:N,factor:P},glow:{version:xl.version,speakingGain:xl.speakingGain,ceiling:Q,speechLevel:B,amount:J()},following:Y?Y.follower.adapter.stats():null}}},setPaused(C){const j=!!C;qe||j===hr||(hr=j,hr?(cancelAnimationFrame(Dr),Dr=0):dr&&!er&&(yn.resume(),Dr=requestAnimationFrame(Ai)))},isPaused:()=>hr,onFrame:C=>le.add(C),status:()=>Z.status(),onStatus:C=>Z.subscribe(C),dispose(){qe||(qe=!0,le.close(),Z.close(),Y=null,cancelAnimationFrame(Dr),Xt.disconnect(),r.removeEventListener("pointerdown",be),r.removeEventListener("pointermove",Nt),r.removeEventListener("pointerup",rt),r.removeEventListener("pointercancel",rt),r.removeEventListener("wheel",Wt),r.removeEventListener("webglcontextlost",xn),r.removeEventListener("webglcontextrestored",Ei),Me(we),db(bt),ae.dispose())}}}const gb={alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1},Qu=new Map;function eh(){const i=new Error("aborted");return i.name="AbortError",i}async function th(i,e,t){const r=await i.fetch(e,{signal:t});if(!r.ok)throw new Error(`HTTP ${r.status} for ${e}`);return r.arrayBuffer()}const vb=i=>i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength);async function _b(i,e){const{canvas:t,signal:r}=i,n=t.getContext("webgl2",gb);if(!n)throw new la("webgl-unavailable","no WebGL2 context");const a=new Set,s=(S,N)=>{const P=e.createObjectURL(new Blob([S],{type:N}));return a.add(P),P},o=S=>{S&&a.delete(S)&&e.revokeObjectURL(S)},c=()=>{try{return n.getExtension("WEBGL_lose_context")?.loseContext(),!0}catch{return!1}},l=()=>{for(const S of[...a])o(S);c()},u=e.assets.manifest,h=vb(new TextEncoder().encode(e.assets.faceTableText));let d,f=null,m=null,v;try{const S=JSON.parse(e.assets.faceTableText);v=Qh(S.speech,i.speechRate);const N=i.src??e.assets.glbUrl,P=async Q=>{if(!Q)return null;try{return await th(e,Q,r)}catch(J){if(r.aborted)throw J;return null}},B=Qu.get(N);[d,f,m]=await Promise.all([B?Promise.resolve(B):th(e,N,r),P(e.assets.strandsUrl),P(e.assets.strandBindingUrl)]),B||Qu.set(N,d)}catch(S){throw l(),r.aborted||S?.name==="AbortError"?eh():new la("asset-failed",String(S?.message??S))}if(r.aborted)throw l(),eh();const p=s(d,"model/gltf-binary"),g=s(h,"application/json"),M=f&&m?s(f,"application/octet-stream"):void 0,A=f&&m?s(m,"application/octet-stream"):void 0;let b;try{b=e.createStage({canvas:t,manifest:u,glbUrl:p,faceTableUrl:g,strandsUrl:M,strandBindingUrl:A,look:{...zh},quality:"high",adaptiveQuality:!0,reducedMotion:i.reducedMotion,initialYawDeg:0,initialPitchDeg:0,transparent:!0,palette:"on-white",accent:i.accent??void 0,speechRate:i.speechRate??void 0})}catch(S){throw l(),new la(ed(td(S)),String(S?.message??S))}b.setPresence(i.initialPresence);let T=!1,E=null,R=b.status();const x=b.onStatus(S=>{const N=rd(R,S);R=S,S.net!=="loading"&&(o(M),o(A)),N==="lost"?i.events.lost():N==="restored"?i.events.restored():N==="broken"&&i.events.broken()});return{ready:b.ready.then(()=>{o(p),o(g)},S=>{throw new la("asset-failed",String(S?.message??S))}),timing:v,apply(S){if(T)return;let N=null;for(const P of S)try{P.type==="presence"?b.setPresence(P.state):P.type==="endTurn"?b.endTurn(P.turn,"complete"):b.speak(P.turn,P.text)}catch(B){N??=B}if(N)throw N},setDrawing(S){T||b.setPaused(!S)},framesDrawn:()=>b.status().framesDrawn,setReducedMotion(S){T||b.setReducedMotion(S)},dispose(){if(E)return E;T=!0,x(),b.dispose();const S=b.debugInfo(),N=c();for(const P of[...a])o(P);return E={textures:S.textures,geometries:S.geometries,contextReleased:N},E}}}const go=i=>new URL(i,import.meta.url).href,Jh={assets:{manifest:Dd,glbUrl:go(Ud),strandsUrl:go(Od),strandBindingUrl:go(Fd),faceTableText:Bd},createStage:mb,fetch:(i,e)=>fetch(i,e),createObjectURL:i=>URL.createObjectURL(i),revokeObjectURL:i=>URL.revokeObjectURL(i)};function bb(i){return _b(i,Jh)}const Sb=Jh.assets.glbUrl;export{Sb as DEFAULT_GLB_URL,bb as openStage};
