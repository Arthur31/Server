String [] Noms = 
  {"Alice","Bob","Etienne","Hector","Hugo","Léa","Nathan","Paul","Pierre","Zoé"} ;
 String [] Numeros =
  {"0606060601","0606060602","0606060603","0606060604","0606060605","0606060606","0606060607","0606060608","0606060609","0606060610"} ;
String NumerosRech = "0606060603";

boolean trouve=false;

    for(int indice=0; indice<Noms.length; indice++)
    {
       if(Numeros[indice].equals(NumerosRech))
        {
          trouve=true;
          println("Nom : "+Noms[indice]+ ", phone : "+Numeros[indice]);
        }
    }
    
      if (trouve==false)
      {
        println("Numéro inconnu");
      }
      
      

