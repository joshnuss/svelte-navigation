<script>
  import { Router, Route } from "svelte-routing"
  import Navbar from './components/Navbar.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import Home from './pages/Home.svelte'
  import Settings from './pages/Settings.svelte'
  import Account from './pages/Account.svelte'

  let showMenu = false;
</script>

<Router>
  <Navbar bind:sidebar={showMenu}/>
  <Sidebar bind:expanded={showMenu}/>

  <main>
    <Route path="/" component={Home}/>
    <Route path="/account" component={Account}/>
    <Route path="/settings" component={Settings}/>
  </main>
</Router>
