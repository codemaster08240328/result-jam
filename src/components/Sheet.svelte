<script>
  import { expoOut, expoIn } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import Portal from "svelte-portal";
  import { X } from "svelte-hero-icons";
  import { reverse } from "lodash";

  export let open = false;
  export let allowOverlayClose = true;
  export let width = "50rem";
  export let title = "";
  export let color = "";
  export let context = "";
  let headerElm;
  let scrolled = false;
  let overlay;
  let stacked = false;
  let colors = {
    green: ["from-green-200 opacity-70"],
    blue: ["from-blue-100 opacity-30"],
    orange: ["from-orange-100 opacity-70"],
  };

  function processStack() {
    const existing = document.querySelectorAll(".sheets > div .modal");
    setTimeout(checkBodyScroll, 50);
    stacked = existing.length > 1;
    reverse([...existing]).forEach((elm, i) => {
      elm.style.transform = `scaleX(${1 - i * 0.05}) scaleY(${
        1 - i * 0.05
      }) translateY(${-3 * i}rem)`;
    });
  }

  function stackable() {
    processStack();
    return {
      destroy() {
        processStack();
      },
    };
  }

  function checkBodyScroll() {
    const existing = document.querySelectorAll(".sheets > div .modal");
    if (existing.length) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }

  function toggle() {
    open = !open;
  }

  function overlayClick({ target }) {
    open = allowOverlayClose && target === overlay ? false : open;
  }
</script>

<style>
  .overlay {
    z-index: 500;
  }
  .modal {
    height: calc(100vh - 7rem);
    box-shadow: 0px -12px 80px rgba(0, 0, 0, 0.28),
      0px -2.68036px 17.869px rgba(0, 0, 0, 0.16691),
      0px -0.798012px 5.32008px rgba(0, 0, 0, 0.11309);
  }
  .stackedBack {
    transform: scaleX(0.95) scaleY(0.95) translateY(-3rem);
  }
</style>

{#if open}
  <Portal target=".sheets">
    <div
      use:stackable
      class={`fixed top-0 left-0 w-screen h-screen overflow-hidden  overlay bg-opacity-60 ${stacked ? 'bg-transparent' : 'bg-black'}`}
      bind:this={overlay}
      style={`--modal-width: ${width}`}
      on:click={overlayClick}
      in:fade={{ duration: 300, ease: expoOut }}
      out:fade={{ duration: 300, delay: 100 }}>
      <div
        class={`fixed bottom-0 left-0 right-0 w-full transition-all duration-200 mx-auto bg-bluegray bg-bluegray-gradient modal rounded-t-4xl overflow-hidden`}
        in:fly={{ duration: 300, delay: 50, y: window.innerHeight, easing: expoOut }}
        out:fly={{ duration: 200, y: window.innerHeight, easing: expoIn }}>
        {#if color}
          <div
            class={`absolute top-0 left-0 bg-gradient-to-b pointer-events-none ${colors[color].join(' ')} h-44 w-full z-10`} />
        {/if}
        <div
          class={`absolute top-0 left-0 right-0 z-30 w-full mx-auto transition-all duration-150 ${scrolled ? 'pt-4 bg-white scrolled bg-opacity-95 ' : 'pt-16 bg-transparent bg-opacity-0'}`}
          bind:this={headerElm}>
          <button
            on:click={toggle}
            class={`absolute transition-all duration-150 top-0 right-0 w-10 h-10 mr-16 text-bluegray-800 ${scrolled ? 'mt-5' : 'mt-16'}`}><X /></button>
          {#if context}
            <h4
              class="w-4/5 mx-auto mb-0 text-base font-normal text-center text-gray-600 font-body">
              {context}
            </h4>
          {/if}
          {#if title}
            <h3
              class={`mx-auto transition-all duration-150 font-semibold text-center text-black w-4/5 font-display ${scrolled ? 'text-xl' : 'text-3xl'}`}>
              {title}
            </h3>
          {/if}
        </div>
        <div
          on:scroll={(e) => {
            scrolled = e.target.scrollTop > 22 ? true : false;
          }}
          class="relative z-20 h-full pb-10 overflow-auto content"
          style={`padding-top: ${headerElm ? headerElm.offsetTop + headerElm.clientHeight + 12 : 0}px`}>
          <slot />
          {#if $$slots.footer}
            <div class="fixed bottom-0 flex items-center w-full p-3 bg-white">
              <slot name="footer" />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </Portal>
{/if}
