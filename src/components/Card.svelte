<script lang="ts">
  import type { TCardItem } from "$types/global.type";
  export let title: string;
  export let contents: Array<TCardItem> = [];
</script>

<style>
  .card-wrapper {
    @apply rounded-2xl 
      shadow-xl
      bg-white
      px-4
      pt-2
      pb-5
      text-left
      text-black;
  }
</style>

<div class="card-wrapper">
  <slot name="header">
    <div class="h-20 flex items-center font-medium text-2xl">{title}</div>
  </slot>
  <slot name="content">
    <div class="flex justify-between">
      {#each contents as { streak, label, status }, index (index)}
        <div
          class={`w-1/3 border-solid border border-l-0 border-t-0 border-b-0 ${index === contents.length - 1 ? 'border-r-0' : ''}`}>
          <div
            class="flex flex-col justify-center items-center py-2 px-4 border border-t-0 border-l-0 border-r-0 border-solid border-bluegray-700">
            <span class="text-3xxl font-medium h-12">{streak}</span>
            <span
              class="text-xxs text-bluegray-800 font-bold mt-2 uppercase h-8 text-center flex items-center">{label}</span>
          </div>
          <div
            class="text-green-650 font-semibold text-xs flex items-end justify-center pt-2">
            {status || ''}
          </div>
        </div>
      {/each}
    </div>
  </slot>
  <slot name="footer">
    <div />
  </slot>
</div>
