import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
/* empty css                                                     */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".font-dynamic-p-titl.svelte-1yok9ij{font-size:6vw}.font-dynamic-p-text.svelte-1yok9ij{font-size:4vw}body{font-family:'Courgette', cursive}",
  map: null
};
let mode = "&quot; turn on the light &quot;";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="container w-10/12 h-4/6 mx-auto pt-10 overflow-hidden "><div><p class="font-dynamic-p-titl font-black  svelte-1yok9ij"><a href="https://github.com/YELineee" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
      <p class="font-dynamic-p-text font-medium ml-8 mt-8 overflow-clip  svelte-1yok9ij">    Everyone thought he was a bit <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400">&quot; Out To Lunch &quot;</a> . He  have left some <a href="./NOTE" class="link link-hover text-indigo-400">&quot; Notes &quot;</a> , it seems he doesn&#39;t have a very good memory, BTW , his name is <a href="https://github.com/YELineee" class="link link-hover text-green-400">YELine</a>.</p>
      <p class="font-dynamic-p-text font-medium ml-8 mt-4 overflow-clip svelte-1yok9ij">    Do you need me to 
          <a href="./404" class="link link-hover text-red-400">${escape(mode)}</a> 
        
        for you my friend?
      </p></div></div>



`;
});
export {
  Page as default
};
