function e(e){return e&&e.__esModule?e.default:e}var t;let n;t=JSON.parse('{"km":{"m":1000,"cm":100000,"in":39370.1,"ft":3280.84,"mm":1000000,"yd":1094},"m":{"cm":100,"in":39.37,"ft":3.281,"km":0.001,"mm":1000,"yd":1.094},"cm":{"m":0.01,"in":0.3937,"ft":0.0328,"km":0.00001,"mm":10,"yd":0.01094},"mm":{"m":0.001,"cm":0.1,"in":0.03937,"ft":0.00328,"km":0.000001,"yd":0.00109},"in":{"m":0.0254,"cm":2.54,"ft":0.0833,"km":0.0000254,"mm":25.4,"yd":0.0278},"ft":{"m":0.3048,"cm":30.48,"in":12,"km":0.0003048,"mm":304.8,"yd":0.3333},"yd":{"m":0.9144,"cm":91.44,"in":36,"ft":3,"km":0.0009144,"mm":914.4}}');var m=async({distance:m,convertTo:o})=>{const{unit:c,value:u}=m;return void 0===e(t)[c][o]?void alert("Select the unit of measure to convert"):(n=e(t)[c][o]*u,{unit:o,value:n})};var o=(e,t,n,m,o)=>{e.textContent=`At ${t} ${m} ${n} ${o}`};const c=document.getElementById("result"),u=document.getElementById("conversion-form");(()=>{const n=document.querySelectorAll("select");for(let m in e(t)){const e=document.createElement("option");e.value=m,e.textContent=m,n.forEach((t=>t.add(e.cloneNode(!0))))}})();u.addEventListener("submit",(async e=>{let t;e.preventDefault();const n=document.getElementById("distance").value,d=document.getElementById("fromUnit").value,l=document.getElementById("toUnit").value;if(d===l)alert("Select the unit of measure to convert");else{t=await m({distance:{unit:d,value:n},convertTo:l});const{unit:e,value:a}=t;o(c,n,a,d,e),u.reset()}}));
//# sourceMappingURL=index.3807901c.js.map
