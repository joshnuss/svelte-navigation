<script>
  import Navbar from './components/Navbar.svelte'
  import Sidebar from './components/Sidebar.svelte'

  let showMenu = false;

  function handleMenuClick() {
    showMenu = true;
  }
</script>

<Navbar on:menuClick={handleMenuClick}/>
<Sidebar bind:expanded={showMenu}/>

<main>
  <h1>Hello World!</h1>
</main>
