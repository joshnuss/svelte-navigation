<script>
  import { Router, Route } from "svelte-routing"
  import Navbar from './components/Navbar.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import Home from './pages/Home.svelte'
  import Settings from './pages/Settings.svelte'
  import Account from './pages/Account.svelte'

  let showMenu = false;

  function handleMenuClick() {
    showMenu = true;
  }
</script>

<Router>
  <Navbar on:menuClick={handleMenuClick}/>
  <Sidebar bind:expanded={showMenu}/>

  <main>
    <Route path="/" component={Home}/>
    <Route path="/account" component={Account}/>
    <Route path="/settings" component={Settings}/>
  </main>
</Router>
