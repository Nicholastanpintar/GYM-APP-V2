export const st = {
  app:{fontFamily:"'Nunito Sans',sans-serif",background:"#0A0A0F",color:"#EAEAEA",minHeight:"100vh",maxWidth:430,margin:"0 auto",position:"relative",overflow:"hidden"},
  ls:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"#0A0A0F",fontFamily:"'Nunito Sans',sans-serif"},
  sw:{display:"flex",flexDirection:"column",height:"100vh"},
  hd:{padding:"44px 20px 10px",background:"linear-gradient(180deg,#14141F 0%,#0A0A0F 100%)",flexShrink:0},
  ht:{fontFamily:"'Oswald',sans-serif",fontSize:22,fontWeight:700,letterSpacing:1},
  hs:{color:"#888",fontSize:12,marginTop:2},
  sb:{flex:1,overflowY:"auto",WebkitOverflowScrolling:"touch"},
  to:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",background:"#1C1C2E",color:"#fff",padding:"10px 22px",borderRadius:50,fontSize:14,fontWeight:600,zIndex:999,animation:"toastPop .3s ease",boxShadow:"0 8px 30px rgba(0,0,0,.5)",border:"1px solid #2A2A3E"},
  fg:{display:"flex",flexDirection:"column",gap:6,marginBottom:10},
  lb:{fontSize:11,fontWeight:700,color:"#888",letterSpacing:1,textTransform:"uppercase"},
  ip:{background:"#1C1C2E",border:"1px solid #2A2A3E",borderRadius:12,padding:"12px 16px",fontSize:16,color:"#fff",width:"100%",fontFamily:"'Nunito Sans',sans-serif"},
  ib:{background:"#1C1C2E",border:"1px solid #2A2A3E",borderRadius:14,padding:"16px 18px",fontSize:26,color:"#fff",width:"100%",textAlign:"center",fontWeight:700,fontFamily:"'Oswald',sans-serif"},
  gb:{flex:1,padding:"12px",borderRadius:12,border:"1px solid #2A2A3E",background:"#1C1C2E",color:"#888",fontSize:14,fontWeight:600,fontFamily:"'Nunito Sans',sans-serif"},
  pb:{width:"100%",padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#FF3B30,#FF6B35)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'Oswald',sans-serif",letterSpacing:1.5,cursor:"pointer"},
  db:{padding:"10px 24px",borderRadius:10,border:"1px solid #333",background:"transparent",color:"#666",fontSize:12,cursor:"pointer",fontFamily:"'Nunito Sans',sans-serif"},
  sm:{padding:"5px 12px",borderRadius:8,border:"1px solid #2A2A3E",background:"#1C1C2E",color:"#888",fontSize:11,cursor:"pointer",fontFamily:"'Nunito Sans',sans-serif"},
  or:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderRadius:14,marginTop:10,border:"1px solid"},
  pl:{padding:"7px 12px",borderRadius:18,border:"1px solid #2A2A3E",background:"transparent",color:"#888",fontSize:11,fontWeight:600,fontFamily:"'Nunito Sans',sans-serif"},
  ba:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"#14141F",border:"none",borderLeft:"4px solid",color:"#fff",fontSize:15,fontWeight:600,fontFamily:"'Nunito Sans',sans-serif"},
  rt:{fontSize:10,color:"#666",fontWeight:700,letterSpacing:.5,marginBottom:3,marginTop:3,textTransform:"uppercase"},
  ec:{background:"#14141F",borderRadius:12,padding:"12px 14px",marginBottom:6,border:"1px solid #1E1E2E",cursor:"pointer"},
  en:{fontSize:13,fontWeight:700,color:"#fff",lineHeight:1.2},
  eo:{fontSize:16,fontWeight:700,color:"#fff",fontFamily:"'Oswald',sans-serif"},
  pbo:{width:"100%",height:4,background:"#1E1E2E",borderRadius:2,marginTop:8,overflow:"hidden"},
  pbi:{height:"100%",borderRadius:2,transition:"width .5s ease"},
  bb:{background:"none",border:"none",color:"#FF3B30",fontSize:14,fontWeight:600,cursor:"pointer",padding:0,marginBottom:8,fontFamily:"'Nunito Sans',sans-serif"},
  hc:{background:"#14141F",border:"1px solid #1E1E2E",borderRadius:12,padding:"12px 14px",marginBottom:6},
};

export const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Nunito+Sans:wght@400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body{overscroll-behavior:none;}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes toastPop{from{opacity:0;transform:translateY(20px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes rankPulse{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.08);filter:brightness(1.3)}}
input:focus{outline:none;}
::-webkit-scrollbar{width:0;}
.tap{transition:transform .12s ease;cursor:pointer;}
.tap:active{transform:scale(.95)!important;}
`;
