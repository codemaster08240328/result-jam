<script>
  export let size = '3'
  export let photo
  export let user
  let className = ''
  export {className as class}
  $: url = user ? user.photo : photo
</script>

<div
  class={`shell bg-gray rounded-full overflow-hidden transition-all duration-200 avatar flex-none ${className}`}
  style={`width: ${size}rem; height: ${size}rem;`}
>
  <img
    load="lazy"
    class="w-full h-full"
    src={`${
      url
        ? `${url}${
            url.includes('resultjam')
              ? `?w=${size * 16}&h=${size * 16}&crop=faces,center&fit=crop`
              : ''
          }`
        : '/images/default-avatar.png'
    }`}
    alt=""
  />
</div>
