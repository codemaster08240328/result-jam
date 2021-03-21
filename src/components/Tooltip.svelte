<script lang="ts">
  import type { TPosition, TObject } from "$types/global.type";
  export let position: TPosition;
  export let className: string;
  export let show: boolean;

  const trianglClassNames: TObject = {
    left: "transform translate-x-12 -translate-y-2/3",
    middle: "transform -translate-x-1/2 -translate-y-2/3",
    right: "transform -translate-x-20 -translate-y-2/3",
  };

  const wrapperClassNames: TObject = {
    left: "right-20",
    middle: "left-1/2",
    right: "left-20",
  };
</script>

<style>
  .tooltip-box {
    @apply absolute
      top-0
      z-10
      w-72
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
      text-white
      fill-current
      stroke-current;
  }
</style>

<div class={`relative ${className}`}>
  {#if show}
    <div class={`absolute -top-3.5 ${wrapperClassNames[position]}`}>
      <div class="tooltip-box">
        <slot name="tooltip-content" />
      </div>
      <svg
        class={`svg-triangle ${trianglClassNames[position]}`}
        width="8"
        height="8">
        <rect x="12" y="-10" width="16" height="16" transform="rotate(45)" />
      </svg>
    </div>
  {/if}
  <slot name="tooltip-target" />
</div>
