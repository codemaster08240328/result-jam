<script lang="ts">
  import type { TCardItem } from "$types/global.type";
  export let title: string = "";
  export let contents: Array<TCardItem> = [];
</script>

<div
  class="card-wrapper sm:shadow-xl sm:bg-white bg-transparent shadow-none sm:px-4 px-0 py-4"
>
  <slot name="header">
    <div class="h-20 flex items-center font-medium text-2xl">{title}</div>
  </slot>
  <slot name="content">
    <div class="grid grid-cols-3 divide-x divide-solid divide-bluegray-700">
      {#each contents as { streak, label, status }, index (index)}
        <div class="flex flex-col divide-solid sm:divide-y divide-bluegray-700">
          <div class="flex flex-col justify-center items-center py-2 px-6">
            <span class="text-3xxl font-medium h-12">{streak}</span>
            <span
              class="text-xxs text-bluegray-800 font-bold mt-2 uppercase h-8 text-center flex items-center"
              >{label}</span
            >
          </div>
          <span
            class="text-green-650 font-semibold text-xs flex items-end justify-center sm:pt-2"
          >
            {status || ""}
          </span>
        </div>
      {/each}
    </div>
  </slot>
  <slot name="footer">
    <div />
  </slot>
</div>

<style>
  .card-wrapper {
    @apply rounded-2xl 
      text-left
      w-full
      text-black;
  }
</style>
