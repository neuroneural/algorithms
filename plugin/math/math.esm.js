export default()=>{let t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"math",init:function(a){t=a;let n=t.getConfig().math||{},i={...e,...n},u=(i.mathjax||"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js")+"?config="+(i.config||"TeX-AMS_HTML-full");i.tex2jax={...e.tex2jax,...n.tex2jax},i.mathjax=i.config=null,function(t,e){let a=document.querySelector("head"),n=document.createElement("script");n.type="text/javascript",n.src=t;let i=()=>{"function"==typeof e&&(e.call(),e=null)};n.onload=i,n.onreadystatechange=()=>{"loaded"===this.readyState&&i()},a.appendChild(n)}(u,(function(){MathJax.Hub.Config(i),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])})),MathJax.Hub.Register.StartupHook("TeX Jax Ready",(function(){var t=MathJax.InputJax.TeX;t.Definitions.Add({macros:{fragment:"FRAGMENT_INDEX_attribute"}}),t.Parse.Augment({FRAGMENT_INDEX_attribute:function(t){var e=this.GetArgument(t),a=this.ParseArg(t);this.Push(a.With({class:"fragment",attrNames:["data-fragment-index"],attr:{"data-fragment-index":e}}))}})}))}))}}};