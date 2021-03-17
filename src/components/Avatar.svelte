<script lang="ts">
  import type { TUser } from "$types/user.type";
  export let size: number = 3;
  export let photo: string = "/images/default-avatar.png";
  export let user: TUser;
  let className = "";
  export { className as class };
  $: error = false;
  $: url = !!user ? (!!user.photo ? user.photo : photo) : photo;

  function handlError(e) {
    error = true;
  }
</script>

<div
  class={`shell rounded-full overflow-hidden transition-all duration-200 avatar flex-none ${className}`}
  style={`width: ${size}rem; height: ${size}rem;`}>
  <img
    class="w-full h-full"
    on:error={handlError}
    src={`${!error ? `${url}${url.includes('resultjam') ? `?w=${size * 16}&h=${size * 16}&crop=faces,center&fit=crop` : ''}` : photo}`}
    alt="" />
</div>
