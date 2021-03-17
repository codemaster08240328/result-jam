<script>
  export let size = "3";
  export let photo = false;
  export let user = false;
  let className = "";
  export { className as class };
  $: error = false;
  $: url = user ? user.photo : photo;

  function handlError(e) {
    error = true;
  }
</script>

<div
  class={`shell rounded-full overflow-hidden transition-all duration-200 avatar flex-none ${className}`}
  style={`width: ${size}rem; height: ${size}rem;`}>
  <img
    load="lazy"
    class="w-full h-full"
    on:error={handlError}
    src={`${url && !error ? `${url}${url.includes('resultjam') ? `?w=${size * 16}&h=${size * 16}&crop=faces,center&fit=crop` : ''}` : '/images/default-avatar.png'}`}
    alt="" />
</div>
