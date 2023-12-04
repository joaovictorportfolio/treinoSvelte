
<!-- JAVASCRIPT -->
<script>

  import Card                   from  './Card.svelte'
  import produtos               from  '../data/produtos.js'

  const totalProdutos = produtos.length;
  const produtosPagina = 4;
  const totalPaginas = Math.ceil(totalProdutos/produtosPagina);

  let inicial = 1;
  let final   = totalPaginas>4?4:totalPaginas;
  
  let pages   = Array.from({ length: final - inicial + 1 }, (_, index) => index + inicial);

  $:pages = Array.from({ length: final - inicial + 1 }, (_, index) => index + inicial);

  let indexPage = 1;

  let inicio = (indexPage - 1) * 4;
  let fim = inicio + 4;

  $:inicio = (indexPage - 1) * 4;
  $:fim = inicio + 4;
  
 
</script>


<!-- COMPONENTE HTML -->

<!-- GALERIA -->
<div class="grid grid-cols-2 gap-4 scale-90 h-[100vw]">


  <!-- CARDS -->
  {#each produtos.slice(inicio,fim) as produto (produto.id)}

    <Card {...produto} />

  {/each}


</div>

<!-- PAGINACAO -->
<div class="join scale-90">

  <button 
    class="join-item btn {totalPaginas<4&&'hidden'}"
     on:click={()=>{ inicial>1&&inicial--&&final-- }} 
  >«</button>

    
    {#each pages as page}

      <button 
        class="join-item btn {indexPage==page&&'btn-active'}" 
        on:click={()=>{ indexPage = page }}
      >
        {page}
      </button>

    {/each}

   <button 
    class="join-item btn {totalPaginas<4&&'hidden'}"
     on:click={()=>{ totalPaginas>final&&final++&&inicial++ }} 
   >»</button>

</div>

<!-- CONSOLE -->
<div class="hidden absolute space-y-1 z-10 m-2 bg-white top-0 left-0 text-xs p-4 rounded-lg shadow">

  <h1 class="font-bold">Console</h1>

  <p>totalProdutos: {totalProdutos}</p>
  <p>produtosPagina: {produtosPagina}</p>
  <p>totalPaginas: {totalPaginas}</p>
  <p>inicial: {inicial}</p>
  <p>final: {final}</p>
  <p>pages: {pages}</p>
  <p>indexPage: {indexPage}</p>
  <p>inicio: {inicio}</p>
  <p>fim: {fim}</p>

</div>






