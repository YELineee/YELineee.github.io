import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                                                        */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".font-dynamic-p-titl.svelte-1n790rv{font-size:6vw}.font-dynamic-p-text.svelte-1n790rv{font-size:4vw}body{font-family:'Courgette', cursive}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
  
  <div class="container w-10/12 h-4/6 mx-auto pt-10 overflow-hidden "><div><p class="font-dynamic-p-titl font-black  svelte-1n790rv"><a class="link link-hover line-through text-yellow-400">Notes

            </a></p>  
        
        <p class="font-dynamic-p-text font-medium ml-8 mt-8 overflow-clip  svelte-1n790rv">   This is a brief description of my website, which every time I open it, the title is never the right word, just <a href="../" class="link link-hover text-red-400">like myself</a> , wrong and crazy, often misspelling words.</p>
        <p class="font-dynamic-p-text font-medium ml-8 mt-8 overflow-clip  svelte-1n790rv">   It perhaps the first time I have been alone to write a project that has been in my mind a million times, but today I started to produce it.</p></div></div>
  
  
  
  `;
});
export {
  Page as default
};
