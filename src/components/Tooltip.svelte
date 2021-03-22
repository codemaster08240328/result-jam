<script lang="ts">
  import type { TPosition, TObject } from "$types/global.type";
  export let position: TPosition;
  export let className: string;
  export let show: boolean;

  const wrapperClassNames: TObject = {
    left: "sm:right-20 -left-14",
    middle: "sm:left-1/2 left-40",
    right: "sm:left-20 left-40",
  };
</script>

<div class={`sm:relative flex ${className}`}>
  {#if show}
    <div class={`sm:absolute -top-3.5 ${wrapperClassNames[position]}`}>
      <div class="tooltip-box sm:w-72 sm:top-0 -top-2.5 sm:left-0 left-36">
        <slot name="tooltip-content" />
      </div>
    </div>
  {/if}
  <div class="relative flex">
    {#if show}
      <svg class={`svg-triangle`} width="8" height="8">
        <rect x="12" y="-10" width="16" height="16" transform="rotate(45)" />
      </svg>
    {/if}
    <slot name="tooltip-target" />
  </div>
</div>

<style>
  .tooltip-box {
    width: calc(100vw - theme("spacing.8"));
    @apply absolute
      z-10
      px-6
      py-4
      -mt-1
      text-sm
      leading-tight
      transform
      -translate-x-1/2
      -translate-y-full
      bg-white
      rounded-lg
      shadow-xl
      text-left
      border-bluegray-700
      border-solid
      border;
  }

  .svg-triangle {
    @apply absolute
      z-10
      w-7
      h-7
      left-0.5
      -top-8
      text-white
      fill-current
      stroke-current;
  }
</style>
