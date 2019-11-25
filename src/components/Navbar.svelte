<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
</script>
<style>
  header {
    background: teal;
    display: flex;
    justify-content: center;
    border-bottom: solid 2px #ccc;
    padding: 0.5em;
    color: #ddd;
  }
  header a {
    color: inherit;
    display: block;
  }
  nav {
    flex: auto;
    display: flex;
    justify-content: flex-end;
  }
  nav a {
    padding: 0.5em;
  }
  nav a:hover {
    background: #ffffff44;
    border-radius: 0.2em;
    color: white;
  }
  .logo svg {
    margin-top: 5px;
    height: 60%;
    vertical-align: baseline-middle;
    vertical-align: -webkit-baseline-middle;
  }
  .logo svg text {
    fill: currentColor;
    font-weight: bold;
  }
  button {
    margin: 0 3px 0 0;
    cursor: pointer;
    background: transparent;
    color: inherit;
    border: solid 1px transparent;
    display: block;
  }
  button svg {
    height: 1em;
    fill: currentColor;
  }
  button:hover {
    color: white;
    background: transparent;
  }
</style>

<header>
  <button on:click|preventDefault={() => dispatch('menuClick')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>

  <a class="logo" href="/">
    <svg viewBox="0 0 100 20">
      <text x=0 y=10 alignment-baseline=middle>ACME</text>
    </svg>
  </a>

  <nav>
    <a href="#">Settings</a>
    <a href="#">Account</a>
  </nav>
</header>
