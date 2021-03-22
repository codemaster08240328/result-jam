<script lang="ts">
  export let url: string;
  export let base: string = "";
  export let className: string = "";
  $: error = false;

  function handleError(e) {
    error = true;
  }
</script>

<img
  class={`w-full h-full ${className || ""}`}
  on:error={handleError}
  src={`${!error ? url : base}`}
  alt=""
/>
