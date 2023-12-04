
<!-- JAVASCRIPT -->
<script>

  import {objCarrinho} from '../data/carrinho.js';

  export let id,nome,categoria,descricao,preco,isNew,imagem

  let objItemCard = {

    id: id,
    nome: nome,
    categoria: categoria,
    descricao: descricao,
    preco: preco,
    isNew: isNew,
    imagem: imagem


  }



</script>


<!-- COMPONENTE HTML -->

<div class="card w-44 max-h-72 bg-base-100 shadow-xl">

  <figure class="relative">

    <img src={imagem} alt={nome} />

    <div class="badge badge-secondary badge-sm top-2 right-2 absolute {!isNew&&'hidden'}">NEW</div>

    <div class="badge badge-outline badge-sm top-2 left-2 absolute">{categoria}</div> 

  </figure>

  <div class="card-body p-3">

    <h2 class="card-title text-xs ">{nome}</h2>

    <p class="text-xs line-clamp-2">{descricao}</p>
    

    <div class="card-actions justify-end mt-2">

      <p class="text-base font-semibold">R$ {preco}</p>
    
     <button class="btn btn-primary btn-sm "
     on:click={()=>objCarrinho.push(objItemCard)}
     >

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    
     </button>

    </div>

  </div>

</div>