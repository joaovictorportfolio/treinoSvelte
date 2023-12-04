
<!-- JAVASCRIPT -->
<script>

import {objCarrinho} from '../data/carrinho.js'



</script>


<!-- COMPONENTE HTML -->


<div class="navbar bg-base-100 fixed w-full drop-shadow-md z-10">

  
  <!-- NAVBAR START -->
  <div class="navbar-start">

    
    <a class="btn btn-ghost text-lg">
    
      <img class="w-6" src="https://i.ibb.co/ByffXHp/image.png" alt="logo">
      
      Loja

    </a>

  </div>

  <!-- NAVBAR CENTER -->
  <div class="navbar-center">
  </div>

  <!-- NAVBAR END -->
  <div class="navbar-end">

    <!-- DROPDOWN CARRINHO -->
    <div class="dropdown dropdown-end ">

      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">

        <div class="indicator">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

          <span class="badge badge-sm indicator-item">{objCarrinho.length}</span>

        </div>

      </div>

      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow w-96">

        <div class="card-body">
      
          <!-- ITEM CARRINHO -->
          {#each objCarrinho as item (item.id)}

            <div class="flex items-center justify-around">
            
              <img class="rounded-full w-12 h-12" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="produto">
              
              <span class="font-semibold">{item.nome}</span>

              <span class="">2 unid</span>

              <span class="font-semibold">R$ 200,00</span>
          
          
            </div>

          {/each}
      
          <div class="card-actions justify-end flex-col flex items-end gap-4">

            <span class="text-info">Subtotal: R$ 200,00</span>
            
            <button class="btn btn-primary btn-block btn-sm w-1/2">Finalizar</button>
      
          </div>
      
        </div>
      
      </div>

    </div>

    <!-- DROPDOWN PERFIL -->
    <div class="dropdown dropdown-end">

      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">

        <div class="w-10 rounded-full">

          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

        </div>

      </div>

      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        <li><a herf="/">Perfil</a></li>

        <li><a herf="/">Configurações</a></li>

        <li><a herf="/">Sair</a></li>

      </ul>

    </div>

  </div>

</div>