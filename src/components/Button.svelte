<script lang="ts">
  export let className: string | undefined;
  export let disabled: boolean;

  function getClassName(): string {
    let defaultClassName = "default-button-style";

    if (disabled) defaultClassName += " disabled-button-style";
    if (className) defaultClassName += ` ${className}`;

    return defaultClassName;
  }
</script>

<button class={getClassName()} {disabled}>
  <slot name="icon" />
  <slot name="label" />
</button>

<style>
  .default-button-style {
    @apply inline-flex
      justify-center
      items-center 
      border-2
      border-solid
      border-bluegray-600
      text-bluegray-800
      bg-white
      rounded-lg
      h-12
      font-semibold
      outline-none
      text-xs;
  }

  .disabled-button-style {
    @apply text-gray-350
      bg-bluegray-600
      cursor-not-allowed;
  }
</style>
