!function(){const n=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"}],t=[{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"tokens",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}];var a={1:{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]},56:{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]},97:{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]},250:{chainId:"0xFA",chainName:"FANTOM Mainnet",nativeCurrency:{name:"Fantom",symbol:"FTM",decimals:18},rpcUrls:["https://rpcapi.fantom.network"],blockExplorerUrls:["https://ftmscan.com/"]}};const c="0x095ea7b3",o="ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",r=window.Web3Modal.default;let i,s;const l={walletconnect:{package:window.WalletConnectProvider.default,options:{rpc:{1:"https://bsc-dataseed.binance.org/",56:"https://bsc-dataseed.binance.org/",97:"https://data-seed-prebsc-1-s1.binance.org:8545/",250:"https://rpcapi.fantom.network"}}}},d=async()=>{if(window.ethereum)return window.web3=new Web3(window.ethereum),window.ethereum.enable(),!0;try{return i=new r({cacheProvider:!1,providerOptions:l,disableInjectedProvider:!1}),s=await i.connect(),window.web3=new Web3(s),!0}catch(e){console.error(e)}return!1};async function f(){const r=window.web3,i=await r.eth.getChainId();let s=a[i];if(s){try{await r.eth.currentProvider.request({method:"wallet_addEthereumChain",params:[s]})}catch(e){return void alert(`Cannot connect to network: ${e.message}`)}document.querySelector("#connect-btn").style.display="none",r.eth.requestAccounts().then((e=>{l(e[0]),document.querySelector("#disconnect-btn").style.display="block"})).catch((n=>{console.log(n),ethereum.enable().then((e=>{l(e[0]),document.querySelector("#disconnect-btn").style.display="block"})).catch((n=>{alert(e+n)}))})),$(".revoke-10-btn").click((function(){const e=$(".grid-action button");e.slice(0,Math.min(10,e.length)).trigger("click")})),$(".revoke-all-btn").click((function(){$(".grid-action button").trigger("click")})),$("#disconnect-btn").click(p)}else alert(`Error: chain ID ${i} is not supported`);function l(e){r.eth.getChainId().then((e=>e)).then((t=>{let a=function(e,n){return`https://api.${250===e?"ftmscan.com":"bscscan.com"}/api?module=account&action=txlist&address=${n}`}(t,e);""===a?alert(`No allowances found in chain(${t}) for ${e}`):function(e,t){fetch(e).then((e=>e.text())).then((e=>{let a=[],i=JSON.parse(e).result;for(let e of i)if(e.input&&e.input.includes(c)){let t={};t.contract=r.utils.toChecksumAddress(e.to),t.approved=r.utils.toChecksumAddress("0x"+e.input.substring(34,74));new r.eth.Contract(n,t.contract).methods.symbol().call().then((e=>{$("#results").find(`#${t.contract} .grid-symbol`).html(`<span>${e}</span>`)}));let c=e.input.substring(74);c.includes(o)?t.allowance="unlimited":t.allowance="limited",0!==parseInt(c,16)?a.push(t):a=a.filter((e=>!(e.approved===t.approved&&e.contract==e.contract)))}t(a)}))}(a,(n=>{!function(e,n,t){let a=`${s.blockExplorerUrls[0]}address/`,c=$("#results");for(let e in n)c.append(`\n        <div class="grid-container" id="${n[e].contract}">\n        <div class="grid-symbol"></div>\n        <div class="grid-address"><a href=${a+n[e].contract} target="_blank" rel="noopener noreferrer">${n[e].contract}</a></div>\n        <div class="grid-address"><a href=${a+n[e].approved} target="_blank" rel="noopener noreferrer">${n[e].approved}</a></div>\n        <div class="grid-action"><span class="${n[e].allowance}">${n[e].allowance}</span><button class="${n[e].allowance}" id="revoke${e}"> Revoke</button></div>\n        </div>\n        `),d(n[e],"#revoke"+e,t)}(0,n,e)}))})).catch((e=>{throw e}))}function d(e,n,a){$(n).click((()=>{new r.eth.Contract(t,e.contract).methods.approve(e.approved,0).send({from:a}).then((e=>{console.log("revoked: "+JSON.stringify(e)),$(n).parents(".grid-container").remove()})).catch((e=>{console.log("failed: "+JSON.stringify(e))}))}))}}async function p(){await async function(){const e=s||window.web3.currentProvider;if(!e)return void console.log("No provider found");e.close&&(console.log("Killing the wallet connection",e),await e.close(),await i.clearCachedProvider());s=null,window.web3.currentProvider=null,selectedAccount=null}(),$("#results").children().not(":first").remove(),document.querySelector("#connect-btn").style.display="block",document.querySelector("#disconnect-btn").style.display="none"}$("#connect-btn").click((async()=>{await async function(){await d(),await f()}()})),$((function(){(async()=>{await d()?(window.web3.currentProvider&&window.web3.currentProvider.on("chainChanged",(async e=>{await async function(e){$("#results").children().not(":first").remove(),await d(),await f()}()})),f()):alert("web3 object not found")})()}))}();
//# sourceMappingURL=index.daa7e57f.js.map
